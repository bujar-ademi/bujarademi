using bujarademi.db;
using bujarademi.db.Entities;
using bujarademi.infrastructure.Contracts;
using bujarademi.infrastructure.Helpers;
using bujarademi.infrastructure.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.ComponentModel;
using System.IO;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Security.Principal;
using System.Threading.Tasks;
namespace bujarademi.infrastructure.Services
{
    public class BlogService : IBlogService
    {
        private readonly BujarDbContext dbContext;

        public BlogService(BujarDbContext context)
        {
            dbContext = context;
        }

        public async Task<CategoryDto> AddOrUpdateAsync(CategoryDto model)
        {
            if (model.Id == 0)
            {
                // new category
                return await AddCategoryAsync(model);
            } else
            {
                var entity = await dbContext.Categories.FirstOrDefaultAsync(x => x.Id == model.Id);
                if (entity == null)
                {
                    return await AddCategoryAsync(model);
                }
                entity.CategoryName = model.Name;
                entity.Slug = model.Slug.ToLower();
                dbContext.Categories.Update(entity);
                await dbContext.SaveChangesAsync();
                return ToDto(entity);
            }
        }        

        public Task<ArticleDto> AddOrUpdateAsync(ArticleDto model)
        {
            throw new System.NotImplementedException();
        }

        public async Task DeleteArticleAsync(int articleId)
        {
            var entity = await dbContext.Articles.Include(x => x.Categories).FirstOrDefaultAsync(x => x.Id == articleId);
            if (entity != null)
            {
                // need first to delete categories?
                dbContext.Articles.Remove(entity);
                await dbContext.SaveChangesAsync();
            }
        }

        public async Task DeleteCategoryAsync(int categoryId)
        {
            var entity = await dbContext.Categories.Include(x => x.Articles).FirstOrDefaultAsync(x => x.Id == categoryId);
            if (entity != null)
            {
                dbContext.Categories.Remove(entity);
                await dbContext.SaveChangesAsync();
            }
        }

        public Task<IList<ArticleDto>> GetArticlesAsync(int pageSize, int pageNo)
        {
            throw new System.NotImplementedException();
        }

        public async Task<IList<CategoryDto>> GetCategoriesAsync()
        {
            var list = await dbContext.Categories.AsNoTracking().ToListAsync();
            return list.Select(ToDto).ToList();
        }

        private async Task<CategoryDto> AddCategoryAsync(CategoryDto model)
        {
            var entity = new BlogCategory
            {
                CategoryName = model.Name,
                Slug = model.Slug.ToLower()
            };
            dbContext.Categories.Add(entity);
            await dbContext.SaveChangesAsync();
            return ToDto(entity);
        }

        private CategoryDto ToDto(BlogCategory entity)
        {
            return new CategoryDto
            {
                Id = entity.Id,
                Name = entity.CategoryName,
                Slug = entity.Slug
            };
        }

        private ArticleDto ToDto(BlogArticle entity)
        {
            return new ArticleDto
            {
                Id = entity.Id,
                Title = entity.Title,
                FeaturedImage = entity.FeaturedImage,
                Content = entity.Content,
                Slug = entity.Slug,
                Tags = entity.Tags.Split(","),
                Categories = entity.Categories.Select(x => ToDto(x.Category)).ToList()
            };
        }
    }
}
