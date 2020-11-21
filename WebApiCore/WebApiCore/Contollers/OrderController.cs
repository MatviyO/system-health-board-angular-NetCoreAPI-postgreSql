using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApiCore.Models;

namespace WebApiCore.Contollers
{
	[Route("api/[controller]")]  
	public class OrderController : Controller
	{
		private readonly ApiContext _ctx;
		
		public OrderController(ApiContext ctx)
		{
			_ctx = ctx;
		}
		[HttpDelete("{pageIndex:int}/{pageSize:int}")]
		public IActionResult Get(int pageIndex, int pageSize)
		{
			var data = _ctx.Orders.Include(o => o.Customer)
				.OrderByDescending(c => c.Placed);

			var page = new PaginatedResponse<Order>(data, pageIndex, pageSize);

			return Ok();
		}
	}
}
