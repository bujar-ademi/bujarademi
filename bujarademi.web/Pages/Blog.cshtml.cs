using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using bujarademi.infrastructure.Contracts;
using bujarademi.infrastructure.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace bujarademi.web.Pages
{
    public class BlogModel : PageModel
    {
        private readonly IProfileService profileService;

        public BlogModel(IProfileService profileService)
        {
            this.profileService = profileService;
        }
        public ProfileDto Profile { get; set; }

        public async Task<IActionResult> OnGetAsync()
        {
            Profile = await profileService.GetProfileAsync().ConfigureAwait(false);
            return Page();
        }
    }
}