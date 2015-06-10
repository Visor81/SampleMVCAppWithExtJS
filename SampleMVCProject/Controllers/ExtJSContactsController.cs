using System.Web.Mvc;
using BusinessLayer.Helpers;
using Interfaces.Models;

namespace SampleMVCProject.Controllers
{
	public class ExtJSContactsController : Controller
	{
		public ActionResult List(int page = 1, int size = 20)
		{
			return Json(new
			{
				data = ContactsHelper.GetContactsList(page, size),
				success = true
			}, JsonRequestBehavior.AllowGet);
		}

		[HttpPost]
		public ActionResult Add(ContactModel contact)
		{
			if (contact == null || string.IsNullOrEmpty(contact.name)) 
				return Json(new { success = false });

			contact.id = ContactsHelper.AddContact(contact);

			return Json(new
			{
				data = contact,
				success = true
			});
		}

		[HttpPost]
		public ActionResult Update(ContactModel contact)
		{
			if (contact == null) return Json(new { success = false });

			if (!ContactsHelper.EditContact(contact))
				return Json(new { success = false });

			return Json(new
			{
				data = contact,
				success = true
			});
		}

		[HttpPost]
		public ActionResult Delete(int id)
		{
			if (!ContactsHelper.DeleteContact(id))
				return Json(new { success = false });

			return Json(new { success = true });
		}

		public ActionResult Index()
		{
			ViewBag.Message = string.Empty;
			return View();
		}
	}
}
