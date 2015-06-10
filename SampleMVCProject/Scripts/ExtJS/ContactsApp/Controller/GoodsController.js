Ext.define('ContactsApp.controller.GoodsController', {
	extend: 'Ext.app.Controller',
	stores: ['GoodsStore'],
	models: ['GoodsModel'],

	views: [
		'Goods.List',
		'Goods.Add',
		'Goods.Edit'
	],

	init: function () {
		this.control({
			'goodsList': {
				itemdblclick: this.editGoods,
				removeitem: this.removeGoods,
				refresh: this.refresh
			},
			'goodsAdd button[action=save]': {
				click: this.doCreateGoods
			},
			'goodsEdit button[action=save]': {
				click: this.updateGoods
			}
		});
	},

	refresh: function(contactId) {
		this.getGoodsStoreStore().load({ params: { contact_id: contactId } });
	},

	editGoods: function (grid, record) {
		var view = Ext.widget('goodsEdit');
		view.down('form').loadRecord(record);
	},

	removeGoods: function (goods) {
		Ext.Msg.confirm('Delete this item', 'Are you sure?', function (button) {
			if (button == 'yes') {
				this.getGoodsStoreStore().remove(goods);
				//this.updateWnd(goods.data.contact_id);
			}
		}, this);
	},

	doCreateGoods: function (button) {
		var win = button.up('window'),
			form = win.down('form'),
			values = form.getValues(),
			store = this.getGoodsStoreStore();
		if (form.getForm().isValid()) {
			store.add(values);
			win.close();
		}
		//this.updateWnd(values.contact_id);
	},

	updateGoods: function (button) {
		var win = button.up('window'),
			form = win.down('form'),
			record = form.getRecord(),
			values = form.getValues(),
			store = this.getGoodsStoreStore();

		record.set(values);
		win.close();
	}

	//updateWnd: function (contactId) {
	//	setTimeout(function () {
	//		var wnd = Ext.WindowMgr.getActive();
	//		wnd.removeAll();
	//		var updList = Ext.widget('goodsList', { contact_id: contactId });
	//		wnd.add(updList);
	//	}, 300);
	//}
});