using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace API.Migrations
{
    /// <inheritdoc />
    public partial class TestData : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Products",
                columns: new[] { "Id", "Description", "ImageUrl", "IsActive", "Name", "Price", "Stock" },
                values: new object[,]
                {
                    { 1, "Fresh red apple", "https://picsum.photos/id/1/200/300", true, "IPhone 15 Pro", 70000m, 100 },
                    { 2, "Fresh green apple", "https://picsum.photos/id/2/200/300", true, "Samsung Galaxy S23 Ultra", 80000m, 100 },
                    { 3, "Fresh yellow apple", "https://picsum.photos/id/3/200/300", true, "Google Pixel 8 Pro", 60000m, 100 },
                    { 4, "Fresh orange apple", "https://picsum.photos/id/4/200/300", true, "OnePlus 11 Pro", 55000m, 100 }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 4);
        }
    }
}
