using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Interfaces.Models
{
	public class ContributionModel
	{
		public int id { get; set; }
		public int contact_id { get; set; }
		public double amount { get; set; }
		public string description { get; set; }
	}
}
