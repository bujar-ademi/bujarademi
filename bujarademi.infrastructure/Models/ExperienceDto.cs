using System;

namespace bujarademi.infrastructure.Models
{
    public class ExperienceDto
    {
        public ExperienceDto()
        {
            Id = 0;
            Start = DateTime.Today;
            End = null;
            Position = "";
            Company = "";
            Description = "";
        }
        public int Id { get; set; }
        public DateTime Start { get; set; }
        public DateTime? End { get; set; }
        public string Position { get; set; }
        public string Company { get; set; }
        public string Description { get; set; }
    }
}
