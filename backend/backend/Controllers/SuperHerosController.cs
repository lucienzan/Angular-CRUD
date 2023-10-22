using backend.Data;
using backend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SuperHerosController : ControllerBase
    {
        private readonly DataContext _context;
        public SuperHerosController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<SuperHeros>>> GetSuperHeros()
        {
            var lists = await _context.SuperHeros.ToListAsync();
            return Ok(lists);
        }

        [HttpPost]
        [Route("Create")]
        public async Task<ActionResult<bool>> CreatSuperHeros(SuperHeros obj)
        {
            var hero = new SuperHeros();
            var id = Guid.NewGuid().ToString();
            hero.ID = id;
            hero.FirstName = obj.FirstName;
            hero.LastName = obj.LastName;
            hero.FullName = obj.FullName;
            hero.Power = obj.Power;
            hero.Place = obj.Place;
             _context.SuperHeros.Add(hero);
            await _context.SaveChangesAsync();
            return  true;
        } 
    }
}
