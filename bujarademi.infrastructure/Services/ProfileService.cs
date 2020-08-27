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
using System.Security.Principal;
using System.Threading.Tasks;

namespace bujarademi.infrastructure.Services
{
    public class ProfileService : IProfileService
    {
        private readonly BujarDbContext dbContext;

        public ProfileService(BujarDbContext dbContext)
        {
            this.dbContext = dbContext;
        }

        public async Task<IList<EducationModel>> GetEducationsAsync(int profileId)
        {
            var list = await dbContext.Educations.Where(x => x.ProfileId == profileId)
                .AsNoTracking()
                .OrderBy(x => x.End)
                .ToListAsync();

            return list.Select(x => new EducationModel
            {
                Start = x.Start,
                End = x.End,
                SchoolName = x.SchoolName,
                Title = x.Title,
                Description = x.Description
            }).ToList();
        }

        public async Task<IList<ExperienceDto>> GetExperiencesAsync(int profileId)
        {
            var list = await dbContext.Experiences.Where(x => x.ProfileId == profileId)
                .AsNoTracking()
                //.OrderBy(x => x.End).ThenBy(x => x.Start)
                .OrderByDescending(x => x.Start)
                .ToListAsync();
            return list.Select(x => ToExperienceDto(x)).ToList();
        }

        public async Task<ExperienceDto> GetExperienceAsync(int id)
        {
            var entity = await dbContext.Experiences.FirstOrDefaultAsync(x => x.Id == id);
            if (entity == null)
            {
                return null;
            }
            return ToExperienceDto(entity);
        }
        public async Task<SkillModel> GetSkillAsync(int id)
        {
            var entity = await dbContext.Skills.FirstOrDefaultAsync(x => x.Id == id);
            if (entity == null)
            {
                return null;
            }
            return new SkillModel
            {
                Id = entity.Id,
                Name = entity.Name,
                Percentage = entity.Percentage
            };
        }

        public async Task<SkillModel> CreateUpdateSkillAsync(SkillModel model)
        {
            if (model.Id == 0)
            {
                return await CreateSkillAsync(model);
            }
            var entity = await dbContext.Skills.FirstOrDefaultAsync(x => x.Id == model.Id);
            if (entity == null)
            {
                return null;
            }
            entity.Name = model.Name;
            entity.Percentage = model.Percentage;
            dbContext.Update(entity);
            await dbContext.SaveChangesAsync();

            return new SkillModel
            {
                Id = entity.Id,
                Name = entity.Name,
                Percentage = entity.Percentage
            };
        }
        public async Task<ExperienceDto> UpdateExperience(ExperienceDto model)
        {
            if (model.Id == 0)
            {
                // we have new experience
                return await CreateExperience(model);
            }
            var entity = await dbContext.Experiences.FirstOrDefaultAsync(x => x.Id == model.Id);
            if (entity == null)
            {
                return null;
            }
            entity.Position = model.Position;
            entity.Company = model.Company;
            entity.Start = model.Start;
            entity.End = model.End;
            entity.Description = model.Description;
            dbContext.Update(entity);
            await dbContext.SaveChangesAsync();

            return ToExperienceDto(entity);
        }

        public async Task DeleteExperience(int experienceId)
        {
            var entity = await dbContext.Experiences.FirstOrDefaultAsync(x => x.Id == experienceId);
            if (entity == null)
            {
                return;
            }
            dbContext.Experiences.Remove(entity);
            await dbContext.SaveChangesAsync();
        }
        public async Task<ExperienceDto> CreateExperience(ExperienceDto model)
        {
            var entity = new Experience
            {
                Position = model.Position,
                Company = model.Company,
                Start = model.Start,
                End = model.End,
                Description = model.Description,
                ProfileId = Constants.DefaultProfileId
            };
            dbContext.Experiences.Add(entity);
            await dbContext.SaveChangesAsync();

            return ToExperienceDto(entity);
        }

        public async Task DeleteSkillAsync(int id)
        {
            var entity = await dbContext.Skills.FirstOrDefaultAsync(x => x.Id == id);
            if (entity == null)
            {
                return;
            }
            dbContext.Skills.Remove(entity);
            await dbContext.SaveChangesAsync();
        }
        public async Task<SkillModel> CreateSkillAsync(SkillModel model)
        {
            var entity = new Skill
            {
                Name = model.Name,
                Percentage = model.Percentage,
                ProfileId = Constants.DefaultProfileId
            };
            dbContext.Skills.Add(entity);
            await dbContext.SaveChangesAsync();
            return new SkillModel
            {
                Id = entity.Id,
                Name = entity.Name,
                Percentage = entity.Percentage
            };
        }
        public async Task<ProfileDto> GetProfileAsync()
        {
            var profile = await dbContext.Profiles.FirstOrDefaultAsync();
            return ToProfileModel(profile);
        }        

        public async Task<ProfileDto> UpdateProfileAsync(ProfileDto profileModel)
        {
            var profile = await dbContext.Profiles.FirstOrDefaultAsync(x => x.Id == profileModel.Id);
            if (profile == null)
            {
                throw new InvalidDataException();
            }
            profile.FirstName = profileModel.FirstName;
            profile.LastName = profileModel.LastName;
            profile.Birthdate = profileModel.Birthdate;
            profile.Address = profileModel.Address;
            profile.ZipCode = profileModel.ZipCode;
            profile.City = profileModel.City;
            profile.Country = profileModel.Country;
            profile.EmailAddress = profileModel.EmailAddress;
            profile.PhoneNumber = profileModel.PhoneNumber;
            profile.Description = profileModel.Description;

            dbContext.Update(profile);
            await dbContext.SaveChangesAsync();

            return ToProfileModel(profile);
        }

        public async Task<IList<SkillModel>> GetSkillsAsync(int profileId)
        {
            var list = await dbContext.Skills.Where(x => x.ProfileId == profileId)
                .AsNoTracking()
                .ToListAsync();
            return list.Select(x => new SkillModel
            {
                Id = x.Id,
                Name = x.Name,
                Percentage = x.Percentage
            }).ToList();
        }

        private ProfileDto ToProfileModel(Profile profile)
        {
            return new ProfileDto
            {
                Id = profile.Id,
                FirstName = profile.FirstName,
                LastName = profile.LastName,
                Birthdate = profile.Birthdate,
                Address = profile.Address,
                City = profile.City,
                ZipCode = profile.ZipCode,
                Country = profile.Country,
                EmailAddress = profile.EmailAddress,
                PhoneNumber = profile.PhoneNumber,
                Description = profile.Description
            };
        }

        private ExperienceDto ToExperienceDto(Experience x)
        {
            return new ExperienceDto
            {
                Id = x.Id,
                Start = x.Start,
                End = x.End,
                Position = x.Position,
                Company = x.Company,
                Description = x.Description
            };
        }
    }
}
