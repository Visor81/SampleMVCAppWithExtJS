Ext.define('ContactsApp.controller.ContactsController', {
	extend: 'Ext.app.Controller',

	stores: [
		'ContactsStore'
	],

	models: [
		'ContactsModel'
	],

	views: [
		'Contact.List',
		'Contact.Add',
		'Contact.Edit'
	],

	init: function () {
		this.control({
			'contactList': {
				itemdblclick: this.editContact,
				removeitem: this.removeContact
			},
			'contactList > toolbar > button[action=showDiagram]': {
				click: this.onCreateDiagram
			},
			'contactList > toolbar > button[action=showContactsTable]': {
				click: this.showContactsTable
			},
			'contactList > toolbar > button[action=showContributionTable]': {
				click: this.showContributionTable
			},
			'contactList > toolbar > button[action=showGoodsTable]': {
				click: this.showGoodsTable
			},
			'contactList > toolbar > button[action=create]': {
				click: this.onCreateContact
			},
			'contactAdd button[action=save]': {
				click: this.doCreateContact
			},
			'contactEdit button[action=save]': {
				click: this.updateContact
			}
		});
	},

	onCreateDiagram: function() {
		var win = new Ext.Window({
			title: 'Database Diagram',
			layout: 'fit',
			y: 120,
			width: 900,
			height: 300,
			modal: true,
			closeAction: 'hide',
			items: {
				xtype: 'image',
				src: 'Content/Images/db_diagram.jpg',
				listeners: { el: { click: function () {
					var wnd = Ext.WindowMgr.getActive();
					wnd.close();
				}}}
			}
		});
		win.show();
	},

	showContactsTable: function() {
		location.href = 'contacts/';
	},

	showContributionTable: function () {
		location.href = 'contribution/';
	},

	showGoodsTable: function () {
		location.href = 'goods/';
	},

	editContact: function (grid, record) {
		var view = Ext.widget('contactEdit');
		view.down('form').loadRecord(record);
	},

	removeContact: function (contact) {
		Ext.Msg.confirm('Delete Contact', 'Are you sure?', function (button) {
			if (button == 'yes') {
				this.getContactsStoreStore().remove(contact);
			}
		}, this);
	},

	onCreateContact: function () {
		Ext.widget('contactAdd');
	},

	doCreateContact: function (button) {
		var win = button.up('window'),
			form = win.down('form'),
			values = form.getValues(),
			store = this.getContactsStoreStore();

		if (form.getForm().isValid()) {
			store.add(values);
			win.close();
		}
	},

	updateContact: function (button) {
		if (!button.up('window')) return;
		var win = button.up('window'),
			form = win.down('form'),
			record = form.getRecord(),
			values = form.getValues(),
			store = this.getContactsStoreStore();

		record.set(values);
		win.close();
	}
});