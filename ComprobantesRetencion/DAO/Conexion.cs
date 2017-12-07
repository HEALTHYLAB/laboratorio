using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Data;
using System.Data.SqlClient;
using System.Threading.Tasks;
using System.Configuration;
using System.Diagnostics;


namespace DAO
{
    public class Conexion
    {
        public Conexion()
        {
            //
            // TODO: agregar aquí la lógica del constructor
            //
        }

        public SqlConnection OpenDB(int tipo_valor)
        {
            SqlConnection sqlConn = new SqlConnection();

            if (0 < System.Configuration.ConfigurationManager.ConnectionStrings.Count)
            {
                string connString = System.Configuration.ConfigurationManager.ConnectionStrings["conexionBV"].ToString();
                if (tipo_valor == 1) {  connString = System.Configuration.ConfigurationManager.ConnectionStrings["conexionBV"].ToString(); }
                if (tipo_valor == 2) {  connString = System.Configuration.ConfigurationManager.ConnectionStrings["conexionINS"].ToString(); }
                try
                {
                    sqlConn = new SqlConnection(connString);
                }
                catch (Exception e)
                {
                    System.Web.HttpContext.Current.Trace.Write("error" + e.Message);
                }
            }

            return sqlConn;

        }
    }
}
