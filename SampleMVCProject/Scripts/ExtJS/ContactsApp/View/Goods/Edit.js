﻿Ext.define('ContactsApp.view.Goods.Edit', {
	extend: 'Ext.window.Window',
	alias: 'widget.goodsEdit',

	title: 'Edit Goods',
	layout: 'fit',
	autoShow: true,
	contact_id: 0,

	initComponent: function () {
		this.items = [
			{
				xtype: 'form',
				bodyStyle: {
					background: 'none',
					padding: '10px',
					border: '0'
				},
				items: [
					{
						xtype: 'textfield',
						name: 'title',
						allowBlank: false,
						fieldLabel: 'Title'
					},
					{
						xtype: 'textfield',
						name: 'price',
						allowBlank: false,
						fieldLabel: 'Price'
					},
					{
						xtype: 'textarea',
						name: 'description',
						allowBlank: true,
						fieldLabel: 'Description'
					},
					{
						xtype: 'hidden',
						name: 'contact_id',
						allowBlank: false,
						fieldLabel: 'contact_id',
						value: this.contact_id
					}
				]
			}
		];

		this.buttons = [
			{
				text: 'Save',
				action: 'save'
			},
			{
				text: 'Cancel',
				scope: this,
				handler: this.close
			}
		];

		this.callParent(arguments);
	}
});