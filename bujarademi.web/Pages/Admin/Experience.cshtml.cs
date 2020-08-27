using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection.Metadata;
using System.Threading.Tasks;
using bujarademi.infrastructure.Contracts;
using bujarademi.infrastructure.Helpers;
using bujarademi.infrastructure.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Newtonsoft.Json;

namespace bujarademi.web.Pages.Admin
{
    public class ExperienceModel : PageModel
    {
        private readonly IProfileService profileService;        
        public ExperienceModel(IProfileService profileService)
        {
            this.profileService = profileService;
        }

        public IEnumerable<ExperienceDto> Experiences { get; set; }
        public IEnumerable<SkillModel> Skills { get; set; }

        public async Task<IActionResult> OnGetAsync()
        {
            Experiences = await profileService.GetExperiencesAsync(Constants.DefaultProfileId);
            Skills = await profileService.GetSkillsAsync(Constants.DefaultProfileId);

            return Page();
        }

        public async Task<PartialViewResult> OnGetExperienceByIdAsync(int experienceId)
        {
            var experience = await profileService.GetExperienceAsync(experienceId).ConfigureAwait(false);

            return Partial("_experienceModalPartial", experience);
        }

        public async Task<PartialViewResult> OnGetSkillByIdAsync(int id)
        {
            var skill = await profileService.GetSkillAsync(id).ConfigureAwait(false);
            return Partial("_skillModalPartial", skill);
        }

        public async Task<IActionResult> OnPostCreateEditSkillAsync()
        {
            SkillModel model = new SkillModel();
            using (var reader = new StreamReader(Request.Body))
            {
                try
                {
                    var body = await reader.ReadToEndAsync();
                    model = JsonConvert.DeserializeObject<SkillModel>(body);
                }
                catch (Exception ex)
                {
                    Console.WriteLine(ex.Message);
                }
            }
            var dto = await profileService.CreateUpdateSkillAsync(model).ConfigureAwait(false);
            return new JsonResult(dto);
        }
        public async Task<IActionResult> OnPostEditExperienceAsync()
        {
            ExperienceDto model = new ExperienceDto();
            using (var reader = new StreamReader(Request.Body))
            {
                try
                {
                    var body = await reader.ReadToEndAsync();
                    model = JsonConvert.DeserializeObject<ExperienceDto>(body);
                }
                catch (Exception ex)
                {
                    Console.WriteLine(ex.Message);
                }
            }
            var dto = await profileService.UpdateExperience(model).ConfigureAwait(false);
            return new JsonResult(dto);
        }

        public async Task<IActionResult> OnDeleteExperienceAsync(int experienceId)
        {
            await profileService.DeleteExperience(experienceId).ConfigureAwait(false);
            return new JsonResult("ok");
        }

        public async Task<IActionResult> OnDeleteSkillAsync(int id)
        {
            await profileService.DeleteSkillAsync(id).ConfigureAwait(false);
            return new JsonResult("ok");
        }

        public PartialViewResult OnGetNewExperience()
        {
            return Partial("_experienceModalPartial", new ExperienceDto());
        }

        public PartialViewResult OnGetNewSkill()
        {
            return Partial("_skillModalPartial", new SkillModel());
        }
    }
}