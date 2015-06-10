Ext.define('ContactsApp.view.Contact.List', {
	extend: 'Ext.grid.Panel',
	alias: 'widget.contactList',
	title: 'All Contacts',
	store: 'ContactsStore',

	initComponent: function () {
		this.tbar = [{ text: 'Create Contact', action: 'create'}];
		this.bbar = [{ text: 'Contacts Table', action: 'showContactsTable' }, { text: 'Contributions Table', action: 'showContributionTable' }, { text: 'Goods Table', action: 'showGoodsTable' }, { text: 'Show Diagram', action: 'showDiagram' }];

		this.columns = [
			{ header: 'Id', dataIndex: 'id', width: 50 },
			{ header: 'Name', dataIndex: 'name', flex: 1 },
			{ header: 'Email', dataIndex: 'email', flex: 1 },
			{ header: 'Phone', dataIndex: 'phone', flex: 1 }
		];

		this.actions = {
			removeitem: Ext.create('Ext.Action', {
				text: 'Remove Contact',
				icon: 'Content/Images/dd/drop-no.png',
				handler: function () { this.fireEvent('removeitem', this.getSelected()); },
				scope: this
			}),

			showContr: Ext.create('Ext.Action', {
				text: 'Show',
				menu: {
					xtype: contextMenu,
					items: [{
						iconCls: 'edit',
						text: 'Contributions',
						handler: function () {
							var win = new Ext.Window({
								title: 'Contributions',
								layout: 'fit',
								autoScroll: true,
								y: 120,
								width: 400,
								height: 300,
								modal: true,
								closeAction: 'hide',
								bbar: [{
									text: 'Close',
									handler: function () { this.up('.window').close(); }
								}],
								items: [Ext.widget('contributionList', { contact_id: this.getSelected().id })]
							});
							win.show();
						}, scope: this //for getSelected
					}, {
						text: 'Goods',
						handler: function() {
							var win = new Ext.Window({
								title: 'Goods',
								layout: 'fit',
								autoScroll: true,
								y: 120,
								width: 400,
								height: 300,
								modal: true,
								closeAction: 'hide',
								bbar: [{
									text: 'Close',
									handler: function() { this.up('.window').close(); }
								}],
								items: [Ext.widget('goodsList', { contact_id: this.getSelected().id })]
							});
							win.show();
						}, scope: this
					}]
				},
				
				scope: this
			})

		};

		var contextMenu = Ext.create('Ext.menu.Menu', {
			items: [
				this.actions.showContr,
				{ xtype: 'menuseparator' },
				this.actions.removeitem
				
			],
			listeners: {
				beforeshow: function () { },
				scope: this
			}
		});

		this.on({
			itemcontextmenu: function (view, rec, node, index, e) {
				e.stopEvent();
				contextMenu.showAt(e.getXY());
				return false;
			}
		});

		this.callParent(arguments);
	},
	getSelected: function () {
		var sm = this.getSelectionModel();
		var rs = sm.getSelection();
		if (rs.length) {
			return rs[0];
		}
		return null;
	}
});