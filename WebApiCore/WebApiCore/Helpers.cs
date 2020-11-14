using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApiCore
{
	public class Helpers
	{
		private static Random _rand = new Random();
		private static string GetRandom(IList<string> items)
		{
			return items[_rand.Next(itesm.Count)];
		}
		internal static string MakeCustomerName()
		{
			var prefix = GetRandom(bizPrefix);
			var sufix = GetRandom(bizSufix);
			return prefix + sufix;
		}
		private static readonly List<string> bizPrefix = new List<string>()
		{

		}
	}
}
