Ext.define('ContactsApp.store.ContributionsStore', {
	extend: 'Ext.data.Store',
	model: 'ContactsApp.model.ContributionsModel',
	autoLoad: false,
	autoSync: true,
	pageSize: 20,
	proxy: {
		type: 'ajax',
		limitParam: 'size',
		startParam: undefined,
		api: {
			create: '/ExtJSContribution/add',
			read: '/ExtJSContribution/list',
			update: '/ExtJSContribution/update',
			destroy: '/ExtJSContribution/delete'
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