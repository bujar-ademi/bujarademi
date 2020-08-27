using bujarademi.db.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace bujarademi.db.Configurations
{
    public class ProfileConfiguration : IEntityTypeConfiguration<Profile>
    {
        public void Configure(EntityTypeBuilder<Profile> builder)
        {
            builder.HasKey(x => x.Id);

            builder.Property(x => x.FirstName).HasMaxLength(128).IsRequired();
            builder.Property(x => x.LastName).HasMaxLength(128).IsRequired();
            builder.Property(x => x.Address).HasMaxLength(128);
            builder.Property(x => x.City).HasMaxLength(128);
            builder.Property(x => x.ZipCode).HasMaxLength(15);
            builder.Property(x => x.Country).HasMaxLength(128);
            builder.Property(x => x.EmailAddress).HasMaxLength(255);
            builder.Property(x => x.PhoneNumber).HasMaxLength(30);

            builder.HasMany(x => x.Experiences).WithOne(y => y.Profile).HasForeignKey(y => y.ProfileId);
            builder.HasMany(x => x.Educations).WithOne(y => y.Profile).HasForeignKey(y => y.ProfileId);
            builder.HasMany(x => x.Skills).WithOne(y => y.Profile).HasForeignKey(y => y.ProfileId);

            builder.ToTable("Profile");
        }
    }
}
