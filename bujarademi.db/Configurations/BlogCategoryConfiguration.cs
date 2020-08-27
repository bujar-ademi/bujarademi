using bujarademi.db.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace bujarademi.db.Configurations
{
    public class BlogCategoryConfiguration : IEntityTypeConfiguration<BlogCategory>
    {
        public void Configure(EntityTypeBuilder<BlogCategory> builder)
        {
            builder.HasKey(x => x.Id);
            builder.Property(x => x.CategoryName).IsRequired().HasMaxLength(200);
            builder.Property(x => x.Slug).HasMaxLength(255);

            builder.Property(x => x.CreatedOn).HasColumnName("CreatedOn");
            builder.Property(x => x.UpdatedOn).HasColumnName("UpdatedOn");

            builder.ToTable("BlogCategory");
        }
    }
}
