using bujarademi.db.Configurations;
using bujarademi.db.Entities;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking.Internal;
using Microsoft.EntityFrameworkCore.Infrastructure;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Text;

namespace bujarademi.db
{
    public class BujarDbContext : IdentityDbContext<User>
    {
        public BujarDbContext(DbContextOptions<BujarDbContext> options) : base(options)
        {
            this.ChangeTracker.LazyLoadingEnabled = false;
            this.ChangeTracker.AutoDetectChangesEnabled = true;

            this.GetService<ILocalViewListener>()?.RegisterView(OnStateManagerChanged);
            LogDiagnostics();
        }
        void OnStateManagerChanged(InternalEntityEntry entry, EntityState previousState)
        {
            DateTime timeStamp = DateTime.Now;

            IChangeTrackedEntity changeTrackedEntity = entry.Entity as IChangeTrackedEntity;
            if ((entry.EntityState & EntityState.Added) == EntityState.Added)
            {
                if (changeTrackedEntity != null)
                {
                    changeTrackedEntity.CreatedOn = timeStamp;
                }
            }
            if ((entry.EntityState & EntityState.Modified) == EntityState.Modified)
            {
                if (changeTrackedEntity != null)
                {
                    changeTrackedEntity.UpdatedOn = timeStamp;
                }
            }
        }

        public DbSet<Profile> Profiles { get; set; }
        public DbSet<Experience> Experiences { get; set; }
        public DbSet<Education> Educations { get; set; }
        public DbSet<Skill> Skills { get; set; }

        public DbSet<BlogCategory> Categories { get; set; }
        public DbSet<BlogArticle> Articles { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<User>(b =>
            {
                b.HasMany(e => e.Claims)
                    .WithOne()
                    .HasForeignKey(uc => uc.UserId).OnDelete(DeleteBehavior.Cascade)
                    .IsRequired();

                b.HasMany(e => e.Logins)
                    .WithOne()
                    .HasForeignKey(ul => ul.UserId).OnDelete(DeleteBehavior.Cascade)
                    .IsRequired();

                b.HasMany(e => e.Tokens)
                    .WithOne()
                    .HasForeignKey(ut => ut.UserId).OnDelete(DeleteBehavior.Cascade)
                    .IsRequired();

                b.HasMany(e => e.UserRoles)
                    .WithOne(e => e.User)
                    .HasForeignKey(ur => ur.UserId).OnDelete(DeleteBehavior.ClientSetNull);
            });

            modelBuilder.Entity<Role>(b =>
            {
                b.HasMany(e => e.UserRoles)
                    .WithOne(e => e.Role)
                    .HasForeignKey(ur => ur.RoleId).OnDelete(DeleteBehavior.ClientSetNull);
            });

            modelBuilder.ApplyConfiguration(new ProfileConfiguration());
            modelBuilder.ApplyConfiguration(new ExperienceConfiguration());
            modelBuilder.ApplyConfiguration(new EducationConfiguration());
            modelBuilder.ApplyConfiguration(new SkillConfiguration());
            modelBuilder.ApplyConfiguration(new BlogCategoryConfiguration());
            modelBuilder.ApplyConfiguration(new BlogArticleConfiguration());
            modelBuilder.ApplyConfiguration(new BlogArticleCategoryConfiguration());
        }

        [Conditional("DEBUG")]
        private void LogDiagnostics()
        {
            //Database.Log = delegate (string str)
            //{
            //    Debug.WriteLine(str);
            //};
        }
    }
}
