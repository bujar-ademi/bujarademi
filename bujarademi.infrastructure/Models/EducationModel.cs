using System;
using System.Collections.Generic;
using System.Text;

namespace bujarademi.infrastructure.Models
{
    public class EducationModel
    {
        public DateTime Start { get; set; }
        public DateTime? End { get; set; }
        public string SchoolName { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
    }
}
