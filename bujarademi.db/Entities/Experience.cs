using System;
using System.Collections.Generic;
using System.Text;

namespace bujarademi.db.Entities
{
    public class Experience : IdentifiableEntity<int>
    {
        public DateTime Start { get; set; }
        public DateTime? End { get; set; }
        public string Position { get; set; }
        public string Company { get; set; }
        public string Description { get; set; }
        public int ProfileId { get; set; }
        public virtual Profile Profile { get; set; }
    }
}
