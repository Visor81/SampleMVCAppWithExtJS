using System.Web.Mvc;
using BusinessLayer.Helpers;
using Interfaces.Models;

namespace SampleMVCProject.Controllers
{
    public class ExtJSContributionController : Controller
    {
		public ActionResult List(int contact_id = 0, int page = 1, int size = 20)
		{
			return Json(new
			{
				data = ContributionsHelper.GetContactsList(contact_id, page, size),
				success = true
			}, JsonRequestBehavior.AllowGet);
		}

		[HttpPost]
		public ActionResult Add(ContributionModel contribution)
		{
			if (contribution == null)
				return Json(new { success = false });

			contribution.id = ContributionsHelper.AddContribution(contribution);

			return Json(new
			{
				data = contribution,
				success = true
			});
		}

		[HttpPost]
		public ActionResult Update(ContributionModel contribution)
		{
			if (contribution == null) return Json(new { success = false });

			if (!ContributionsHelper.EditContribution(contribution))
				return Json(new { success = false });

			return Json(new
			{
				data = contribution,
				success = true
			});
		}

		[HttpPost]
		public ActionResult Delete(int id)
		{
			if (!ContributionsHelper.DeleteContribution(id))
				return Json(new { success = false });

			return Json(new { success = true });
		}
    }
}
