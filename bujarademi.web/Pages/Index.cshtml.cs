using System.ComponentModel;
using System.IO;
using System.Threading.Tasks;
using bujarademi.infrastructure.Contracts;
using bujarademi.infrastructure.Models;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.Extensions.Logging;

namespace bujarademi.web.Pages
{
    public class IndexModel : PageModel
    {
        private readonly ILogger<IndexModel> _logger;
        private readonly IProfileService profileService;
        private readonly IEmailSender emailSender;
        private readonly IWebHostEnvironment _environment;

        public IndexModel(ILogger<IndexModel> logger, IProfileService profileService, IEmailSender emailSender, IWebHostEnvironment environment)
        {
            _logger = logger;
            this.profileService = profileService;
            this.emailSender = emailSender;
            _environment = environment;
        }

        public ProfileDto Profile { get; set; }

        public async Task<IActionResult> OnGetAsync()
        {
            Profile = await profileService.GetProfileAsync().ConfigureAwait(false);
            return Page();
        }

        public async Task<PartialViewResult> OnGetAboutPartialAsync()
        {
            var profile = await profileService.GetProfileAsync();

            return Partial("_aboutPartial", profile);
        }

        public async Task<PartialViewResult> OnGetResumePartialAsync(int profileId)
        {
            var experiences = await profileService.GetExperiencesAsync(profileId);
            var educations = await profileService.GetEducationsAsync(profileId);
            var skills = await profileService.GetSkillsAsync(profileId);
            var resume = new ResumeModel
            {
                Educations = educations,
                Experiences = experiences,
                Skills = skills
            };

            return Partial("_resumePartial", resume);
        }

        public async Task<PartialViewResult> OnGetPortfolioPartial(int profileId)
        {
            
            return Partial("_portfolioPartial");
        }

        public PartialViewResult OnGetBlogPartial()
        {

            return Partial("_blogPartial");
        }

        public async Task<PartialViewResult> OnGetContactPartialAsync()
        {
            var profile = await profileService.GetProfileAsync();
            return Partial("_contactPartial", profile);
        }

        public async Task<IActionResult> OnPostSendEmailAsync([FromBody]MailModel model)
        {
            await emailSender.ContactEmailAsync(model);

            return new OkObjectResult("Your message is on the way to my inbox. Thank you!");
        }
    }
}
