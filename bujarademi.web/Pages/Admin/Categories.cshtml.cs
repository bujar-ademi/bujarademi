using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using bujarademi.infrastructure.Contracts;
using bujarademi.infrastructure.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace bujarademi.web.Pages.Admin
{
    public class CategoriesModel : PageModel
    {
        private readonly IBlogService blogService;
        public CategoriesModel(IBlogService blogService)
        {
            this.blogService = blogService;
        }
        public IEnumerable<CategoryDto> Categories { get; set; }

        public async Task<IActionResult> OnGetAsync()
        {
            Categories = await blogService.GetCategoriesAsync();
            return Page();
        }
    }
}
