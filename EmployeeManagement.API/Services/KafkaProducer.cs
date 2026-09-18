using Confluent.Kafka;

namespace EmployeeManagement.API.Services
{
    public class KafkaProducer : IKafkaProducer
    {
        private readonly IConfiguration _configuration;

        public KafkaProducer(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public async Task PublishAsync(string key, string message)
        {
            var bootstrapServers = _configuration["Kafka:BootstrapServers"];
            var topic = _configuration["Kafka:Topic"];

            var config = new ProducerConfig
            {
                BootstrapServers = bootstrapServers
            };

            using var producer = new ProducerBuilder<string, string>(config).Build();

            await producer.ProduceAsync(topic, new Message<string, string>
            {
                Key = key,
                Value = message
            });
        }
    }
}