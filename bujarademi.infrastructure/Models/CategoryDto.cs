namespace bujarademi.infrastructure.Models
{
    public class CategoryDto
    {
        public CategoryDto()
        {
            Id = 0;
            Name = "";
            Slug = "";
        }
        public int Id { get; set; }
        public string Name { get; set; }
        public string Slug { get; set; }
    }
}
