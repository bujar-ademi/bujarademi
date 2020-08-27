using System.Collections.Generic;

namespace bujarademi.infrastructure.Models
{
    public class ArticleDto
    {
        public ArticleDto()
        {
            Id = 0;
            Title = "";
            Content = "";
            Slug = "";
            Tags = new List<string>();
            Categories = new List<CategoryDto>();
        }
        public int Id { get; set; }
        public string Title { get; set; }
        public string FeaturedImage { get; set; }
        public string Content { get; set; }
        public string Slug { get; set; }
        public IList<string> Tags { get; set; }
        public IList<CategoryDto> Categories { get; set; }
    }
}
