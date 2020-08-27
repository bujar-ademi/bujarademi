using bujarademi.infrastructure.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace bujarademi.infrastructure.Contracts
{
    public interface IProfileService
    {
        Task<ProfileDto> GetProfileAsync();
        Task<IList<ExperienceDto>> GetExperiencesAsync(int profileId);
        Task<ExperienceDto> GetExperienceAsync(int id);
        Task<SkillModel> GetSkillAsync(int id);
        Task<ExperienceDto> UpdateExperience(ExperienceDto model);
        Task<IList<EducationModel>> GetEducationsAsync(int profileId);
        Task<IList<SkillModel>> GetSkillsAsync(int profileId);
        Task<ProfileDto> UpdateProfileAsync(ProfileDto profileModel);
        Task DeleteExperience(int experienceId);
        Task<SkillModel> CreateUpdateSkillAsync(SkillModel model);
        Task DeleteSkillAsync(int id);
    }
}
