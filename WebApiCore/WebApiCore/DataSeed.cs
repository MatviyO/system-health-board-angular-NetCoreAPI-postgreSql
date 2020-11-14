using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApiCore.Models;

namespace WebApiCore
{
	public class DataSeed
	{
		private readonly ApiContext _ctx;
		public DataSeed(ApiContext ctx)
		{
			_ctx = ctx;
		}
		public void SeedData(int nCustomers, int nOrders)
		{
			if (!_ctx.Customers.Any())
			{
				SeedCustomers(nCustomers);
			}

			if (!_ctx.Customers.Any())
			{
				SeedOrders(nCustomers);
			}
			if (!_ctx.Servers.Any())
			{
				SeedServers(nCustomers);
			}
			_ctx.SaveChanges();
		}
		private void SeedCustomers(int n)
		{
			List<Customer> customers = BuildCustomerList(n);
			foreach(var customer in customers)
			{
				_ctx.Customers.Add(customer);
			}
		}
		private List<Customer> BuildCustomerList(int nCustomers)
		{
			var customers = new List<Customer>();
			for(var i = 1; i <= nCustomers; i++)
			{
				var name = Helpers.MakeCustomerName();
				customers.Add(new Customer
				{
					Id = i,
					Name = name,
					Email = email, 
					State = state

				});
			}
		}
	}
}
