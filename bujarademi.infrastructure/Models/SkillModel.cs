using bujarademi.db.Entities;

namespace bujarademi.infrastructure.Models
{
    public class SkillModel
    {
        public SkillModel()
        {
            Id = 0;
            Name = "";
            Percentage = 0;
        }
        public int Id { get; set; }
        public string Name { get; set; }
        public int Percentage { get; set; }
        public override string ToString()
        {
            return $"{Percentage}%";
        }
    }
}
