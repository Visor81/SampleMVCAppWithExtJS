Ext.Loader.setConfig({
	enabled: true
});

Ext.application({
	name: 'ContactsApp',
	appFolder: 'Scripts/ExtJS/ContactsApp',

	controllers: [
		'ContactsController',
		'ContributionsController',
		'GoodsController'
	],

	launch: function () {
		Ext.create('Ext.container.Viewport', {
			layout: 'border',
			items: {
				xtype: 'contactList',
				region: 'center',
				margins: '5 5 5 5'
			}
		});
	}
});