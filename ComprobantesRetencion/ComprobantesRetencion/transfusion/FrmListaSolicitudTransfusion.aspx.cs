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
    public partial class FrmListaSolicitudTransfusion : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }


        [WebMethod]
        public static List<SolicitudTransfusionBE> lstSolicitudTransfusion(string xData)
        {

            string[] arreglo = xData.Split('|');

            List<SolicitudTransfusionBE> oListaSolicitudTransfusionBE = new List<SolicitudTransfusionBE>();
            oListaSolicitudTransfusionBE = new TransfusionBL().lstTranfusionesByParameters(arreglo[0], arreglo[1], Convert.ToInt32(arreglo[2]));
            return oListaSolicitudTransfusionBE;
        }

    }
}