using bujarademi.db.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System.Security.Cryptography.X509Certificates;

namespace bujarademi.db.Configurations
{
    public class BlogArticleCategoryConfiguration : IEntityTypeConfiguration<BlogArticleCategory>
    {
        public void Configure(EntityTypeBuilder<BlogArticleCategory> builder)
        {
            builder.HasKey(key => new { key.ArticleId, key.CategoryId });

            builder.HasOne(x => x.Article).WithMany(a => a.Categories).HasForeignKey(x => x.ArticleId);
            builder.HasOne(x => x.Category).WithMany(c => c.Articles).HasForeignKey(x => x.CategoryId);

            builder.ToTable("BlogArticleCategory");
        }
    }
}
