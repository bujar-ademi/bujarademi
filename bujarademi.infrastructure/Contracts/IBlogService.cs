using bujarademi.infrastructure.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace bujarademi.infrastructure.Contracts
{
    public interface IBlogService
    {
        Task<CategoryDto> AddOrUpdateAsync(CategoryDto model);
        Task DeleteCategoryAsync(int categoryId);
        Task<IList<CategoryDto>> GetCategoriesAsync();

        Task<ArticleDto> AddOrUpdateAsync(ArticleDto model);
        Task DeleteArticleAsync(int articleId);
        Task<IList<ArticleDto>> GetArticlesAsync(int pageSize, int pageNo);
    }
}
