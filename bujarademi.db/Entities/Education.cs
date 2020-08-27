using System;

namespace bujarademi.db.Entities
{
    public class Education : IdentifiableEntity<int>
    {
        public DateTime Start { get; set; }
        public DateTime? End { get; set; }
        public string SchoolName { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public int ProfileId { get; set; }
        public virtual Profile Profile { get; set; }
    }
}
