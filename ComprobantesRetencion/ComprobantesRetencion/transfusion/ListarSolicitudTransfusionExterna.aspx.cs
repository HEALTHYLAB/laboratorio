using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using Entity;
using Negocios;
using System.Web.Services;

namespace ComprobantesRetencion
{
    public partial class ListarSolicitudTransfusionExterna : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        [WebMethod]
        public static List<SolicitudTransfusionBE> lstSolicitudTransfusion(string xData)
        {
            string[] arreglo = xData.Split('|');

            List<SolicitudTransfusionBE> oListaSolicitudTransfusionBE = new List<SolicitudTransfusionBE>();

            
            oListaSolicitudTransfusionBE = new TransfusionBL().lstTranfusionesExtByParameters(arreglo[0], arreglo[1], Convert.ToInt32(arreglo[2]));

            if (arreglo[2] == "3")
            {
                foreach (var item in oListaSolicitudTransfusionBE)
                {
                    //localhost.Service test = new localhost.Service();
                    int isApproved=0;
                    bool result;

                    //test.checkStatus(item.idSolicitud, true, out isApproved, out result);

                    if (isApproved == 1)
                    {
                        item.desEstado = "Aprobado";
                    }
                    else { item.desEstado = "Pendiente de Aprobación"; }
                }
            }
            return oListaSolicitudTransfusionBE;
        }
    }
}