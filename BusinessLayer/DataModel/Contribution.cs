//------------------------------------------------------------------------------
// <auto-generated>
//    This code was generated from a template.
//
//    Manual changes to this file may cause unexpected behavior in your application.
//    Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace BusinessLayer.DataModel
{
    using System;
    using System.Collections.Generic;
    
    public partial class Contribution
    {
        public int id { get; set; }
        public int contact_id { get; set; }
        public double amount { get; set; }
        public string description { get; set; }
    
        public virtual Contacts Contacts { get; set; }
    }
}
