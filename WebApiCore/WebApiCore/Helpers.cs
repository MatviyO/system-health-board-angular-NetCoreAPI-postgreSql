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
			return items[_rand.Next(items.Count)];
		}
		internal static string MakeCustomerName()
		{
			var prefix = GetRandom(bizPrefix);
			var suffix = GetRandom(bizSuffix);
			return prefix + suffix;
		}

		internal static string MakeCustomerEmail(string customerName)
		{
			return $"concact{customerName.ToLower()}.com";
		}

		internal static string GetRandomState()
		{

		}

		private static readonly List<string> usStates = new List<string>()
		{
			"AK", "AL", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA",
			"HI", "ID", "IL","IN" ,"IA", "KS", "KY", "LA", "ME", "MD",
			"MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV","NH", "NJ",
			"NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC",
			"SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"
		};
	

		private static readonly List<string> bizPrefix = new List<string>()
		{
			"ABC",
			"XYZ",
			"MainSt",
			"Sales",
			"Enterprise",
			"Ready",
			"Quick",
			"Budget",
			"Peak",
			"Magic",
			"Family",
			"Comfort"
		};
		private static readonly List<string> bizSuffix = new List<string>()
		{
			"Corporation",
			"Co",
			"Logistics",
			"Transit",
			"Bakery",
			"Goods",
			"Foods",
			"Cleaners",
			"Hotels",
			"Planners",
			"Automotive",
			"Books"
		};
	}
}
