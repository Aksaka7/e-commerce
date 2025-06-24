using API.Entity;
using Microsoft.EntityFrameworkCore;

namespace API.Data;

public class DataContext(DbContextOptions options) : DbContext(options)
{
    public DbSet<Product> Products => Set<Product>();

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        modelBuilder.Entity<Product>().HasData(
            new List<Product>
            {
                new Product {
                    Id = 1, Name = "IPhone 15 Pro", Price = 70000, Description = "Fresh red apple", ImageUrl = "https://picsum.photos/id/1/200/300", IsActive= true, Stock = 100,},
                new Product {
                    Id = 2, Name = "Samsung Galaxy S23 Ultra", Price = 80000, Description = "Fresh green apple", ImageUrl = "https://picsum.photos/id/2/200/300", IsActive= true, Stock = 100,},
                new Product {
                    Id = 3, Name = "Google Pixel 8 Pro", Price = 60000, Description = "Fresh yellow apple", ImageUrl = "https://picsum.photos/id/3/200/300", IsActive= true, Stock = 100,},
                new Product {
                    Id = 4, Name = "OnePlus 11 Pro", Price = 55000, Description = "Fresh orange apple", ImageUrl = "https://picsum.photos/id/4/200/300", IsActive= true, Stock = 100,},
            }
        );
    }
}