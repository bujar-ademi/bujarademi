using bujarademi.infrastructure.Contracts;
using bujarademi.infrastructure.Models;
using Microsoft.Extensions.Options;
using SendGrid;
using SendGrid.Helpers.Mail;
using System;
using System.Collections.Generic;
using System.IO;
using System.Reflection;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace bujarademi.infrastructure.Services
{
    public class EmailSender : IEmailSender
	{
		private readonly SendGridSettings settings;

		public EmailSender(IOptions<SendGridSettings> sendGridSettings)
		{
			this.settings = sendGridSettings.Value;
		}

		public async Task SendEmailAsync(string email, string name, string subject, string plainMessage, string htmlMessage)
		{
			var client = new SendGridClient(settings.ApiKey);
			var from = new EmailAddress(settings.SendFrom, settings.SendFromName);
			var to = new EmailAddress(email, name);

			var asciiSubject = subject.Normalize(System.Text.NormalizationForm.FormKD);

			var msg = MailHelper.CreateSingleEmail(from, to, asciiSubject, plainMessage, htmlMessage);
			msg.SetSubject(asciiSubject);

			var response = await client.SendEmailAsync(msg);
		}

		public async Task ContactEmailAsync(MailModel model)
        {
			var htmlTemplate = GetTemplateContent("NewEmail");
			var replacements = new Dictionary<string, string>(StringComparer.OrdinalIgnoreCase)
			{
				{ "fromName", model.name },
				{ "email", model.email },
				{ "Message", model.message }
			};

			htmlTemplate = PrepareContent(htmlTemplate, replacements);

			await SendEmailAsync("ademi.bujar@gmail.com", "Bujar Ademi", $"Web contact form - {model.name}", "New email from contact form", htmlTemplate);
        }

		private string GetTemplateContent(string templateName)
		{
			string template = string.Empty;
			using (var stream = Assembly.GetExecutingAssembly().GetManifestResourceStream($"bujarademi.infrastructure.HtmlTemplates.{templateName}.html"))
			{
				//Read the file into a string
				using (var reader = new StreamReader(stream))
				{
					template = reader.ReadToEnd();
				}
			}
			return template;
		}

		private static readonly Regex TokenRegex = new Regex(@"\{(\w+)\}", RegexOptions.Compiled);
		private string PrepareContent(string htmlTemplate, Dictionary<string, string> replacements)
		{
			try
			{
				return TokenRegex.Replace(htmlTemplate, match => replacements[match.Groups[1].Value]);
			}
			catch (Exception)
			{
				return htmlTemplate;
			}
		}
	}
}
