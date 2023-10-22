using backend.Models;
using Microsoft.EntityFrameworkCore;

namespace backend.Data
{
    public class DataContext : DbContext 
    {
        public DataContext() : base () { }
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }
        public DbSet<SuperHeros> SuperHeros{ get; set; }
    }
}
