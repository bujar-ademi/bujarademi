using System.Collections;
using System.Collections.Generic;

namespace bujarademi.db.Entities
{
    public class BlogCategory : IdentifiableEntity<int>
    {
        public string CategoryName { get; set; }
        public string Slug { get; set; }
        public ICollection<BlogArticleCategory> Articles { get; set; }
    }
}
