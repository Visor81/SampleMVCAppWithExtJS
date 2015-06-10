Ext.define('ContactsApp.controller.ContributionsController', {
	extend: 'Ext.app.Controller',

	stores: [
		'ContributionsStore'
	],

	models: [
		'ContributionsModel'
	],

	views: [
		'Contribution.List',
		'Contribution.Add',
		'Contribution.Edit'
	],

	init: function () {
		this.control({
			'contributionList': {
				itemdblclick: this.editContribution,
				removeitem: this.removeContribution
			},

			'contributionAdd button[action=save]': {
				click: this.doCreateContribution
			},
			'contributionEdit button[action=save]': {
				click: this.updateContribution
			}
		});
	},

	editContribution: function (grid, record) {
		var view = Ext.widget('contributionEdit');
		view.down('form').loadRecord(record);
	},

	removeContribution: function (contribution) {
		Ext.Msg.confirm('Delete Contribution', 'Are you sure?', function (button) {
			if (button == 'yes') {
				this.getContributionsStoreStore().remove(contribution);
				this.updateWnd(contribution.data.contact_id);
			}
		}, this);
	},

	doCreateContribution: function (button) {
		var win = button.up('window'),
			form = win.down('form'),
			values = form.getValues(),
			store = this.getContributionsStoreStore();
		if (form.getForm().isValid()) {
			store.add(values);
			win.close();
		}

		this.updateWnd(values.contact_id);

		//this.getContributionsStoreStore().load({ params: { contact_id: values.contact_id } });
		//this.getContributionsStoreStore().add(values);
		//Ext.ComponentQuery.query('contributionList')[0].getView().refresh();
	},

	updateContribution: function (button) {
		var win = button.up('window'),
			form = win.down('form'),
			record = form.getRecord(),
			values = form.getValues(),
			store = this.getContributionsStoreStore();

		record.set(values);
		win.close();
	},

	updateWnd: function(contactId) {
		setTimeout(function () {
			var wnd = Ext.WindowMgr.getActive();
			wnd.removeAll();
			var updList = Ext.widget('contributionList', { contact_id: contactId });//, manualUpdate:true
			wnd.add(updList);
		}, 300);
	}
});