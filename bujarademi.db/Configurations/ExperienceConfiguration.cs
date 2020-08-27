using bujarademi.db.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace bujarademi.db.Configurations
{
    public class ExperienceConfiguration : IEntityTypeConfiguration<Experience>
    {

        public void Configure(EntityTypeBuilder<Experience> builder)
        {
            builder.HasKey(x => x.Id);

            builder.Property(x => x.Start).IsRequired();
            builder.Property(x => x.Position).HasMaxLength(128).IsRequired();
            builder.Property(x => x.Company).HasMaxLength(255);

            builder.HasOne(x => x.Profile).WithMany(y => y.Experiences).HasForeignKey(x => x.ProfileId);

            builder.ToTable("Experience");
        }
    }
}
