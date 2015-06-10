using System.Web.Optimization;

namespace SampleMVCProject
{
	public class BundleConfig
	{
		// For more information on Bundling, visit http://go.microsoft.com/fwlink/?LinkId=254725
		public static void RegisterBundles(BundleCollection bundles)
		{
			bundles.Add(new StyleBundle("~/Content/css").Include("~/Content/bootstrap.css", "~/Content/site.css", "~/Content/ext-theme-neptune-all.css"));
			bundles.Add(new ScriptBundle("~/bundles/jquery").Include("~/Scripts/jquery-1.11.3.js"));
			bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include("~/Scripts/jquery.validate*"));
			bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include("~/Scripts/bootstrap.js"));
			bundles.Add(new ScriptBundle("~/bundles/extjs").Include("~/Scripts/ext-all-debug.js", "~/Scripts/ext-theme-neptune-debug.js"));
		}
	}
}