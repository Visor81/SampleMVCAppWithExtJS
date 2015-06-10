Ext.define('ContactsApp.view.Contribution.List', {
	extend: 'Ext.grid.Panel',
	alias: 'widget.contributionList',
	store: 'ContributionsStore',

	contact_id: 0,

	initComponent: function () {
		this.tbar = [{
			text: 'Create Contribution',
			handler: function () { Ext.widget('contributionAdd', { contact_id: this.contact_id }); },
			scope: this
		}];

		this.borders = 0,

		this.columns = [
			{ header: 'Id', dataIndex: 'id', width: 50 },
			{ header: 'Amount', dataIndex: 'amount', width: 100 },
			{ header: 'Description', dataIndex: 'description', flex: 1 }
		];

		this.actions = {
			removeitem: Ext.create('Ext.Action', {
				text: 'Remove Contribution',
				iconCls: 'trash',
				icon: 'Content/Images/dd/drop-no.png',
				handler: function () { this.fireEvent('removeitem', this.getSelected()); },
				scope: this
			})
		};

		var contextMenu = Ext.create('Ext.menu.Menu', {
			items: [this.actions.removeitem]
		});

		this.on({
			itemcontextmenu: function (view, rec, node, index, e) {
				e.stopEvent();
				contextMenu.showAt(e.getXY());
				return false;
			}
		});
		//this.updateContent();
		this.callParent(arguments);
	},

	listeners: {
		afterRender: function () { this.fireEvent('refresh', this.contact_id); },
	},



	getSelected: function () {
		var sm = this.getSelectionModel();
		var rs = sm.getSelection();
		if (rs.length) {
			return rs[0];
		}
		return null;
	}

	//updateContent: function () {
	//	var myStore = Ext.create('ContactsApp.store.ContributionsStore');
	//	this.store = myStore.load({ params: { contact_id: this.contact_id } });
	//}
});