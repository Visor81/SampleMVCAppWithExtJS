using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using BusinessLayer.DataModel;
using Interfaces.Models;

namespace BusinessLayer.Helpers
{
	public class GoodsHelper
	{
		public static List<GoodsModel> GetGoodsList(int contact_id, int page, int size)
		{
			return DbContexts.SampleDb.Goods.
				Where(x => x.contact_id == contact_id || contact_id == 0).
				Select(
					item =>
						new GoodsModel
						{
							id = item.id,
							contact_id = item.contact_id,
							title = item.title,
							price = item.price,
							description = item.description
						}).
				ToList();
		}

		public static int AddGoods(GoodsModel goodsModel)
		{
			using (var db = DbContexts.SampleDb)
			{
				var newGoods =
					db.Goods.Add(new Goods()
					{
						contact_id = goodsModel.contact_id,
						title = goodsModel.title,
						price=goodsModel.price,
						description = goodsModel.description
					});
				db.SaveChanges();
				return newGoods.id;
			}
		}

		public static bool DeleteGoods(int id)
		{
			using (var db = DbContexts.SampleDb)
			{
				var goods = db.Goods.SingleOrDefault(x => x.id == id);

				if (goods == null)
					return false;

				db.Goods.Remove(goods);
				db.SaveChanges();
			}
			return true;
		}

		public static bool EditGoods(GoodsModel goodsModel)
		{
			using (var db = DbContexts.SampleDb)
			{
				var goods = db.Goods.SingleOrDefault(x => x.id == goodsModel.id);

				if (goods == null)
					return false;

				goods.title = goodsModel.title;
				goods.price = goodsModel.price;
				goods.description = goodsModel.description;
				db.Entry(goods).State = EntityState.Modified;
				db.SaveChanges();
			}

			return true;
		}

	}
}
