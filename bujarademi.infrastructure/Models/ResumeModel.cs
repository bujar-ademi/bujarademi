using System.Collections.Generic;

namespace bujarademi.infrastructure.Models
{
    public class ResumeModel
    {
        public IList<EducationModel> Educations { get; set; }
        public IList<ExperienceDto> Experiences { get; set; }
        public IList<SkillModel> Skills { get; set; }
    }
}
