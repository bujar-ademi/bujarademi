using System;
using System.Collections.Generic;
using System.Text;

namespace bujarademi.db.Entities
{
    public class BlogArticle : IdentifiableEntity<int>
    {
        public string Title { get; set; }
        public string FeaturedImage { get; set; }
        public string Slug { get; set; }
        public string Content { get; set; }
        public string Tags { get; set; }        
        public ICollection<BlogArticleCategory> Categories { get; set; }
    }
}
