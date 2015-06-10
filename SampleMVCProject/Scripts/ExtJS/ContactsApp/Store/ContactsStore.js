Ext.define('ContactsApp.store.ContactsStore', {
	extend: 'Ext.data.Store',
	model: 'ContactsApp.model.ContactsModel',
	autoLoad: true,
	autoSync: true,
	pageSize: 20,
	proxy: {
		type: 'ajax',
		limitParam: 'size',
		startParam: undefined,
		api: {
			create: '/ExtJSContacts/add',
			read: '/ExtJSContacts/list',
			update: '/ExtJSContacts/update',
			destroy: '/ExtJSContacts/delete'
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