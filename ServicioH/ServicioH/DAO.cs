using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ServicioH
{
    public class DAO : SqlHelper
    {
        private string GetConexion()
        {
            return ConfigurationManager.ConnectionStrings["cnnRP"].ConnectionString;
        }
        public string Proceso()
        {

            try
            {
                SqlParameter[] paramsToStore = new SqlParameter[1];
                paramsToStore[0] = new SqlParameter("@IdBancoSangre", SqlDbType.Int);
                paramsToStore[0].Value = Convert.ToInt32(ConfigurationManager.AppSettings.Get("IdBancoSangre"));

                using (SqlDataReader reader = SqlHelper.ExecuteReader(GetConexion(), CommandType.StoredProcedure, "USP_INS_SOLICITUD_REPLACEMENT", paramsToStore))
                {

                }


            }
            catch (Exception e)
            {

            }

            return "OK";
        }
    }
}
