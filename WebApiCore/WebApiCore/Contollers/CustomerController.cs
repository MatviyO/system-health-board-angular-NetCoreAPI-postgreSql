using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WebApiCore.Models;

namespace WebApiCore.Contollers
{
	[Route("api/[controller]")]
	public class CustomerController : Controller
	{
		private readonly ApiContext _ctx;
		public CustomerController(ApiContext ctx)
		{
			_ctx = ctx;
		}

		[HttpGet]
		public IActionResult Get()
		{
			var data = _ctx.Customers.OrderBy(c => c.Id);
			return Ok(data);
		}
		[HttpGet]

	}
}
