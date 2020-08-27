namespace bujarademi.db.Entities
{
    public class Skill : IdentifiableEntity<int>
    {
        public string Name { get; set; }
        public int Percentage { get; set; }

        public int ProfileId { get; set; }
        public virtual Profile Profile { get; set; }
    }
}
