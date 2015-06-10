Ext.define('ContactsApp.store.GoodsStore', {
	extend: 'Ext.data.Store',
	model: 'ContactsApp.model.GoodsModel',
	autoLoad: false,
	autoSync: true,
	pageSize: 20,
	proxy: {
		type: 'ajax',
		limitParam: 'size',
		startParam: undefined,
		api: {
			create: '/ExtJSGoods/add',
			read: '/ExtJSGoods/list',
			update: '/ExtJSGoods/update',
			destroy: '/ExtJSGoods/delete'
		},
		reader: {
			type: 'json',
			root: 'data',
			successProperty: 'success'
		},
		writer: {
			type: 'json',
			writeAllFields: true
		}
	}
});