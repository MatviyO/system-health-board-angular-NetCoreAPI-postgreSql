using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
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
	}
}
