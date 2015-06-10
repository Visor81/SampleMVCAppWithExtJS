﻿Ext.define('ContactsApp.view.Goods.List', {
	extend: 'Ext.grid.Panel',
	alias: 'widget.goodsList',
	store: 'GoodsStore',

	contact_id: 0,

	initComponent: function () {
		this.tbar = [{
			text: 'Create new Goods',
			handler: function () { Ext.widget('goodsAdd', { contact_id: this.contact_id }); },
			scope: this
		}];

		this.borders = 0,

		this.columns = [
			{ header: 'Id', dataIndex: 'id', width: 50 },
			{ header: 'Title', dataIndex: 'title', width: 100 },
			{ header: 'Price', dataIndex: 'price', flex: 1 },
			{ header: 'Description', dataIndex: 'description', flex: 1 }
		];

		this.actions = {
			removeitem: Ext.create('Ext.Action', {
				text: 'Remove Goods',
				iconCls: 'trash',
				icon: 'Content/Images/dd/drop-no.png',
				handler: function () { this.fireEvent('removeitem', this.getSelected()); },
				scope: this
			})
		};

		var contextMenu = Ext.create('Ext.menu.Menu', {
			items: [
				this.actions.removeitem
			]
		});

		this.on({
			itemcontextmenu: function (view, rec, node, index, e) {
				e.stopEvent();
				contextMenu.showAt(e.getXY());
				return false;
			}
		});
		this.updateContent();
		this.callParent(arguments);
	},



	getSelected: function () {
		var sm = this.getSelectionModel();
		var rs = sm.getSelection();
		if (rs.length) {
			return rs[0];
		}
		return null;
	},

	updateContent: function () {
		var myStore = Ext.create('ContactsApp.store.GoodsStore');
		this.store = myStore.load({ params: { contact_id: this.contact_id } });
	}
});