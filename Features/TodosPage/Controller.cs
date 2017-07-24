using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace DotnetVueMvc.Features.TodosPage
{
    public class TodosPageController : Controller
    {
        [Route("todos")]
        public IActionResult Index()
        {
            var todos = new List<string> 
            {
              "Learn Vue.js",
              "Learn ASP.NET Core"
            };

            return View(new Model { Todos = JsonConvert.SerializeObject(todos) });
        }
    }
}
