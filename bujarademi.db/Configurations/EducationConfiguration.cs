using bujarademi.db.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace bujarademi.db.Configurations
{
    public class EducationConfiguration : IEntityTypeConfiguration<Education>
    {
        public void Configure(EntityTypeBuilder<Education> builder)
        {
            builder.HasKey(x => x.Id);

            builder.Property(x => x.SchoolName).IsRequired().HasMaxLength(255);
            builder.Property(x => x.Title).IsRequired().HasMaxLength(255);

            builder.HasOne(x => x.Profile).WithMany(y => y.Educations).HasForeignKey(x => x.ProfileId);

            builder.ToTable("Education");
        }
    }
}
