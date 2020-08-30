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

        [BindProperty]
        public CategoryDto Category { get; set; }
        public async Task<IActionResult> OnGetAsync(int? id = null)
        {
            Categories = await blogService.GetCategoriesAsync();
            if (id.HasValue)
            {
                Category = Categories.FirstOrDefault(x => x.Id == id.Value);
            }
            else
            {
                Category = new CategoryDto();
            }
            return Page();
        }

        public async Task<IActionResult> OnPostAsync()
        {
            if (!ModelState.IsValid)
            {
                return Page();
            }
            await blogService.AddOrUpdateAsync(Category);

            return LocalRedirect("/Admin/Categories");
        }

        public async Task<IActionResult> OnDeleteCategoryAsync(int categoryId)
        {
            await blogService.DeleteCategoryAsync(categoryId).ConfigureAwait(false);
            return new JsonResult("ok");
        }
    }
}
