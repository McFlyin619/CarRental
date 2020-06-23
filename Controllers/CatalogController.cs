using Microsoft.AspNetCore.Mvc;
using System.Linq;
namespace CarRental.Controllers
{
    public class CatalogController: Controller 
    {

        private DataContext DbContext;
        public CatalogController(DataContext context) // injecting connection object DB connection
        {
            this.DbContext = context;
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Register()
        {
            return View();
        }

        public IActionResult GetCatalog()
        {
            
            var list = DbContext.Cars.ToList(); // read  ALL in the table
            return Json(list); //send it back as a JSON list
        }

        public IActionResult GetSedans()
        {
            var list = DbContext.Cars.Where(c => c.Category == "sedan").ToList();
            return Json(list);
        }
        public IActionResult GetTrucks()
        {
            var list = DbContext.Cars.Where(c => c.Category == "truck").ToList();
            return Json(list);
        }

        [HttpPost]
        public IActionResult RegisterCar([FromBody] Car theCar)
        {
            System.Console.WriteLine("User is saving car");

           DbContext.Cars.Add(theCar);
           DbContext.SaveChanges();

            return Json(theCar); // return JSON object
        }

    }
}