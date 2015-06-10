using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using BusinessLayer.DataModel;

namespace SampleMVCProject.Controllers
{
    public class ContributionController : Controller
    {
        private SampleDBContext1 db = new SampleDBContext1();

        //
        // GET: /Contribution/

        public ActionResult Index()
        {
            var contribution = db.Contribution.Include(c => c.Contacts);
            return View(contribution.ToList());
        }

        //
        // GET: /Contribution/Details/5

        public ActionResult Details(int id = 0)
        {
            Contribution contribution = db.Contribution.Find(id);
            if (contribution == null)
            {
                return HttpNotFound();
            }
            return View(contribution);
        }

        //
        // GET: /Contribution/Create

        public ActionResult Create()
        {
            ViewBag.contact_id = new SelectList(db.Contacts, "id", "name");
            return View();
        }

        //
        // POST: /Contribution/Create

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create(Contribution contribution)
        {
            if (ModelState.IsValid)
            {
                db.Contribution.Add(contribution);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            ViewBag.contact_id = new SelectList(db.Contacts, "id", "name", contribution.contact_id);
            return View(contribution);
        }

        //
        // GET: /Contribution/Edit/5

        public ActionResult Edit(int id = 0)
        {
            Contribution contribution = db.Contribution.Find(id);
            if (contribution == null)
            {
                return HttpNotFound();
            }
            ViewBag.contact_id = new SelectList(db.Contacts, "id", "name", contribution.contact_id);
            return View(contribution);
        }

        //
        // POST: /Contribution/Edit/5

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit(Contribution contribution)
        {
            if (ModelState.IsValid)
            {
                db.Entry(contribution).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            ViewBag.contact_id = new SelectList(db.Contacts, "id", "name", contribution.contact_id);
            return View(contribution);
        }

        //
        // GET: /Contribution/Delete/5

        public ActionResult Delete(int id = 0)
        {
            Contribution contribution = db.Contribution.Find(id);
            if (contribution == null)
            {
                return HttpNotFound();
            }
            return View(contribution);
        }

        //
        // POST: /Contribution/Delete/5

        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            Contribution contribution = db.Contribution.Find(id);
            db.Contribution.Remove(contribution);
            db.SaveChanges();
            return RedirectToAction("Index");
        }

        protected override void Dispose(bool disposing)
        {
            db.Dispose();
            base.Dispose(disposing);
        }
    }
}