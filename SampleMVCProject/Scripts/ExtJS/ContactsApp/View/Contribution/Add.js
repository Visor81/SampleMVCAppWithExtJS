Ext.define('ContactsApp.view.Contribution.Add', {
	extend: 'Ext.window.Window',
	alias: 'widget.contributionAdd',

	title: 'Add Contribution',
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
						name: 'amount',
						allowBlank: false,
						fieldLabel: 'Amount'
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