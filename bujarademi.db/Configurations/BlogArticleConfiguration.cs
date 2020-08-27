using bujarademi.db.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace bujarademi.db.Configurations
{
    public class BlogArticleConfiguration : IEntityTypeConfiguration<BlogArticle>
    {
        public void Configure(EntityTypeBuilder<BlogArticle> builder)
        {
            builder.HasKey(x => x.Id);
            builder.Property(x => x.Title).IsRequired().HasMaxLength(255);
            builder.Property(x => x.Slug).HasMaxLength(255);
            builder.Property(x => x.Content).IsRequired();
            builder.Property(x => x.Tags).HasComment("Comma separated list of tags for the article");

            builder.Property(x => x.CreatedOn).HasColumnName("CreatedOn");
            builder.Property(x => x.UpdatedOn).HasColumnName("UpdatedOn");

            builder.ToTable("BlogArticle");
        }
    }
}
