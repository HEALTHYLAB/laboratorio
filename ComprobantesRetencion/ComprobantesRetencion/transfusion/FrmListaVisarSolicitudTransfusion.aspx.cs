using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using Entity;
using Negocios;
using System.Web.Services;

namespace ComprobantesRetencion.transfusion
{
    public partial class FrmListaVisarSolicitudTransfusion : System.Web.UI.Page
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
            oListaSolicitudTransfusionBE = new VisarTransfusionBL().lstTranfusionesByParameters(arreglo[0], arreglo[1], Convert.ToInt32(arreglo[2]));
            return oListaSolicitudTransfusionBE;
        }

    }
}