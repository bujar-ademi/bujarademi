using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using bujarademi.infrastructure.Contracts;
using bujarademi.infrastructure.Models;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace bujarademi.web.Pages.Admin
{
    public class ProfileModel : PageModel
    {
        private readonly IProfileService profileService;
        private IWebHostEnvironment _environment;

        public ProfileModel(IProfileService profileService, IWebHostEnvironment environment)
        {
            this.profileService = profileService;
            _environment = environment;
        }

        [BindProperty]
        public ProfileDto Profile { get; set; }

        public async Task<ActionResult> OnGetAsync()
        {
            Profile = await profileService.GetProfileAsync();

            return Page();
        }

        public async Task<IActionResult> OnPostProfileSaveAsync()
        {
            ProfileDto profile = new ProfileDto();
            using (var reader = new StreamReader(Request.Body))
            {
                try
                {
                    var body = await reader.ReadToEndAsync();
                    profile = JsonConvert.DeserializeObject<ProfileDto>(body);
                }
                catch (Exception ex)
                {
                    Console.WriteLine(ex.Message);
                }
            }            
            
            var dto = await profileService.UpdateProfileAsync(profile).ConfigureAwait(false);
            return new JsonResult(dto);
        }

        public async Task OnPostUploadMediaAsync(IFormFile image)
        {
            var fileName = Path.Combine(_environment.ContentRootPath, "uploads", image.FileName);
            using (var fileStream = new FileStream(fileName, FileMode.Create))
            {
                await image.CopyToAsync(fileStream);
            }
        }
    }
}