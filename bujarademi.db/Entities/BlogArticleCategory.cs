namespace bujarademi.db.Entities
{
    public class BlogArticleCategory
    {
        public int ArticleId { get; set; }
        public int CategoryId { get; set; }
        public virtual BlogArticle Article { get; set; }
        public virtual BlogCategory Category { get; set; }
    }
}
