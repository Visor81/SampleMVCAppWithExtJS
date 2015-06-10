using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using BusinessLayer.DataModel;
using Interfaces.Models;

namespace BusinessLayer.Helpers
{
	public class ContributionsHelper
	{
		public static List<ContributionModel> GetContactsList(int contact_id, int page, int size)
		{
			return DbContexts.SampleDb.Contribution.
				Where(x => x.contact_id == contact_id || contact_id == 0).
				Select(
					item =>
						new ContributionModel
						{
							id = item.id,
							contact_id = item.contact_id,
							amount = item.amount,
							description = item.description
						}).
				ToList();
		}

		public static int AddContribution(ContributionModel contributionModel)
		{
			using (var db = DbContexts.SampleDb)
			{
				var newContribution =
					db.Contribution.Add(new Contribution()
					{
						contact_id = contributionModel.contact_id,
						amount = contributionModel.amount,
						description = contributionModel.description
					});
				db.SaveChanges();
				return newContribution.id;
			}
		}

		public static bool DeleteContribution(int id = 0)
		{
			using (var db = DbContexts.SampleDb)
			{
				var contribution = db.Contribution.SingleOrDefault(x => x.id == id);

				if (contribution == null)
					return false;

				db.Contribution.Remove(contribution);
				db.SaveChanges();
			}
			return true;
		}

		public static bool EditContribution(ContributionModel contributionModel)
		{
			using (var db = DbContexts.SampleDb)
			{
				var contribution = db.Contribution.SingleOrDefault(x => x.id == contributionModel.id);

				if (contribution == null)
					return false;

				contribution.amount = contributionModel.amount;
				contribution.description = contributionModel.description;
				db.Entry(contribution).State = EntityState.Modified;
				db.SaveChanges();
			}

			return true;
		}
	}
}
