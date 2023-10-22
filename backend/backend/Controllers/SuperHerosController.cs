using backend.Models;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SuperHerosController : ControllerBase
    {
        [HttpGet]
        public async Task<ActionResult<List<SuperHeros>>> GetSuperHeros ()
        {
            return new List<SuperHeros>
            {
                new SuperHeros
                {
                    FirstName = "Peter",
                    LastName = "Parker",
                    FullName = "Spider Man",
                    Power = "SpiderWeb",
                    Place = "New York City"
                } 
            };
        }
    }
}
