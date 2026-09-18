using Confluent.Kafka;
using System.Text.Json;
using EmployeeKafkaConsumer.Models;
using System.Text.Json.Serialization;

namespace EmployeeKafkaConsumer;

public class Worker : BackgroundService
{
    private readonly ILogger<Worker> _logger;

    public Worker(ILogger<Worker> logger)
    {
        _logger = logger;
    }

    protected override async Task ExecuteAsync(CancellationToken stoppingToken)
    {
        var config = new ConsumerConfig
        {
            BootstrapServers = "localhost:29092",
            GroupId = "employee-consumer-group",
            AutoOffsetReset = AutoOffsetReset.Earliest
        };

        using var consumer = new ConsumerBuilder<string, string>(config).Build();

        consumer.Subscribe("employee-events");

        _logger.LogInformation("Kafka Consumer started...");

        try
        {
            while (!stoppingToken.IsCancellationRequested)
            {
                var result = consumer.Consume(stoppingToken);
                var employee = JsonSerializer.Deserialize<Employee>(result.Message.Value);

                if(employee!=null)
                {
                    _logger.LogInformation(
                     "Employee received: Id = {Id}, Name = {Name}, Department = {Department}",
                     employee.Id,
                     employee.Name,
                     employee.Department);
                }
            }
        }
        catch (OperationCanceledException)
        {
            consumer.Close();
        }
    }
}