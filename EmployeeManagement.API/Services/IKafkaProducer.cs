namespace EmployeeManagement.API.Services
{
    public interface IKafkaProducer
    {
        Task PublishAsync(string key, string message);
    }
}