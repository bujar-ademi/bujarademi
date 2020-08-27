using bujarademi.infrastructure.Models;
using System.Threading.Tasks;

namespace bujarademi.infrastructure.Contracts
{
    public interface IEmailSender
	{
		Task SendEmailAsync(string email, string name, string subject, string plainMessage, string htmlMessage);
		Task ContactEmailAsync(MailModel model);
	}
}
