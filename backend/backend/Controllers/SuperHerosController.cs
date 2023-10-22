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

        [HttpGet]
        [Route("GetHero/{id}")]
        public async Task<ActionResult<object>> GetSuperHero(string id)
        {
            var hero = await _context.SuperHeros.Where(hero => hero.ID == id).FirstOrDefaultAsync();
            if(hero != null)
            {
                return new
                {
                    heroModel = hero,
                    status = 200,
                };
            }
                return NotFound();
        }

        [HttpPost]
        [Route("UpdateHero")]
        public async Task<ActionResult<SuperHeros>> UdpateSuperHero(SuperHeros model)
        {
            var hero = await _context.SuperHeros.Where(hero => hero.ID == model.ID).FirstOrDefaultAsync();

            if (hero != null)
            {
                hero.FullName = model.FullName;
                hero.FirstName = model.FirstName;
                hero.LastName = model.LastName;
                hero.Power = model.Power;
                hero.Place = model.Place;
                _context.Update(hero);
               await _context.SaveChangesAsync();
                return hero;
            }
           return BadRequest();
        }
    }
}
