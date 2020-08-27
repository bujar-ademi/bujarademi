using Microsoft.EntityFrameworkCore.Migrations;

namespace bujarademi.db.Migrations
{
    public partial class addfeaturedimage : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "FeaturedImage",
                table: "BlogArticle",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "FeaturedImage",
                table: "BlogArticle");
        }
    }
}
