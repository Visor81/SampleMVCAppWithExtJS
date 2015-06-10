using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Core.Metadata.Edm;
using System.Linq;
using BusinessLayer.DataModel;
using Interfaces.Models;

namespace BusinessLayer.Helpers
{
	public class ContactsHelper
	{
		public static List<ContactModel> GetContactsList(int page, int size)
		{
			return
				DbContexts.SampleDb.Contacts.Select(
					item => new ContactModel {id = item.id, name = item.name, email = item.email, phone = item.phone}).ToList();
		}

		public static bool EditContact(ContactModel contactModel)
		{
			using (var db = DbContexts.SampleDb)
			{
				var contact = db.Contacts.SingleOrDefault(x => x.id == contactModel.id);
				
				if (contact == null)
					return false;
				
				contact.name = contactModel.name;
				contact.email = contactModel.email;
				contact.phone = contactModel.phone;

				db.Entry(contact).State = EntityState.Modified;
				db.SaveChanges();
			}

			return true;
		}

		public static bool DeleteContact(int id = 0)
		{
			using (var db = DbContexts.SampleDb)
			{
				var contact = db.Contacts.SingleOrDefault(x => x.id == id);

				if (contact == null)
					return false;

				db.Contacts.Remove(contact);
				db.SaveChanges();
			}
			return true;
		}

		public static int AddContact(ContactModel contact)
		{
			using (var db = DbContexts.SampleDb)
			{
				var newContact = db.Contacts.Add(new Contacts {name = contact.name, email = contact.email, phone = contact.phone});
				db.SaveChanges();
				return newContact.id;
			}
		}
	}
}
