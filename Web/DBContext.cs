using BusinessLayer.DataModel;

namespace Web
{
	public static class DbContexts
	{
		private static readonly string SampleDBConnectionString;

		public static SampleDBContext1 SampleDb
		{
			get { return new SampleDBContext1(); }
		}

		static DbContexts()
		{
			SampleDBConnectionString = System.Configuration.ConfigurationManager.ConnectionStrings["SampleDBContext1"].ConnectionString;
		}

		public static void Release()
		{
			SampleDb.Dispose();
		}
	}
}
