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
        // Obtener listado de solicitud de transfusiones
        public static List<SolicitudTransfusionBE> lstSolicitudTransfusion(string xData)
        {
            // Obtener parámetros de búsqueda
            string[] arreglo = xData.Split('|');

            List<SolicitudTransfusionBE> oListaSolicitudTransfusionBE = new List<SolicitudTransfusionBE>();

            // Consultar business layer
            oListaSolicitudTransfusionBE = new TransfusionBL().lstTranfusionesExtByParameters(arreglo[0], arreglo[1], Convert.ToInt32(arreglo[2]));

            // Si el estado es 3, obtener estado desde Web Service
            if (arreglo[2] == "3")
            {
                foreach (var item in oListaSolicitudTransfusionBE)
                {
                    localhost.Service test = new localhost.Service();
                    int isApproved=0;
                    bool result;

                    test.checkStatus(item.codSolicitud, true, out isApproved, out result);

                    // Evaluar estado devuelto por Web Service
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