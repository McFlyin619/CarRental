using Microsoft.AspNetCore.Mvc;

namespace CarRental.Controllers
{
    public class CatalogController: Controller 
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Register()
        {
            return View();
        }

    }
}