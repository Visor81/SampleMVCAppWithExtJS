using System.Web.Mvc;
using BusinessLayer.Helpers;
using Interfaces.Models;

namespace SampleMVCProject.Controllers
{
    public class ExtJSGoodsController : Controller
    {
		public ActionResult List(int contact_id = 0, int page = 1, int size = 20)
		{
			return Json(new
			{
				data = GoodsHelper.GetGoodsList(contact_id, page, size),
				success = true
			}, JsonRequestBehavior.AllowGet);
		}

		[HttpPost]
		public ActionResult Add(GoodsModel goods)
		{
			if (goods == null)
				return Json(new { success = false });

			goods.id = GoodsHelper.AddGoods(goods);

			return Json(new
			{
				data = goods,
				success = true
			});
		}

		[HttpPost]
		public ActionResult Update(GoodsModel goods)
		{
			if (goods == null) return Json(new { success = false });

			if (!GoodsHelper.EditGoods(goods))
				return Json(new { success = false });

			return Json(new
			{
				data = goods,
				success = true
			});
		}

		[HttpPost]
		public ActionResult Delete(int id)
		{
			if (!GoodsHelper.DeleteGoods(id))
				return Json(new { success = false });

			return Json(new { success = true });
		}

    }
}
