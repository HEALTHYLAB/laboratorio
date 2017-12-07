using Entity;
using Negocios;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace ComprobantesRetencion
{
    public partial class GenerarSolicitudTransfusion : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }

      
        [WebMethod]
        public static DatosClinicaBE lstDatos()
        {
            DatosClinicaBE oDatosClinicaBE = new DatosClinicaBE();

           oDatosClinicaBE = new TransfusionBL().lstDatos();

            return oDatosClinicaBE;
        }

        [WebMethod]
        public static string insTransfucion(string xdata , string xdetalle )
        {
            SolicitudTransfusionBE oSolicitudTransfusionBE = new SolicitudTransfusionBE();
            List<DetalleSolicitudTranfusion> oListaDetalleSolicitudTranfusion = new List<DetalleSolicitudTranfusion>();
          string[] arreglo = xdata.Split('|');
      
             oSolicitudTransfusionBE.idSolicitud = Convert.ToInt32( arreglo[0]);
             oSolicitudTransfusionBE.estado = Convert.ToInt32( arreglo[1]);
             oSolicitudTransfusionBE.motivo =  arreglo[2];
             oSolicitudTransfusionBE.idOrdenMedica = Convert.ToInt32( arreglo[3]);
             oSolicitudTransfusionBE.idtecnico = Convert.ToInt32( arreglo[4]);

             string[] arreglodetalle = xdetalle.Split('-');

             for (int i = 0; i < arreglodetalle.Length; i++)
             {
                 DetalleSolicitudTranfusion o = new DetalleSolicitudTranfusion();
                 string[] arreglo2 = arreglodetalle[i].Split('|');
                  o.idHemocomponente =Convert.ToInt32(  arreglo2[0]);
                  o.cant =Convert.ToInt32(  arreglo2[1]);
                  o.idSolicitud = oSolicitudTransfusionBE.idSolicitud;
                  oListaDetalleSolicitudTranfusion.Add(o);
             }

             oSolicitudTransfusionBE.oListaDetalleSolicitudTranfusion = oListaDetalleSolicitudTranfusion;         
            string xValor = "";
            //oTransfusionBE.oListaDetalleSolicitudTranfusion = oListaDetalleSolicitudTranfusion;
               new TransfusionBL().insTransfucion(oSolicitudTransfusionBE);
               return xValor;
        }

        [WebMethod]
        public static List<OrdenMedicaBE> lstOrden(string xData)
        {
             string[] arreglo =  xData.Split('|');

            List<OrdenMedicaBE> oListaOrdenMedicaBE = new List<OrdenMedicaBE>();
            oListaOrdenMedicaBE = new TransfusionBL().lstOrden(arreglo[0], arreglo[1], arreglo[2]);
            return oListaOrdenMedicaBE;
        }


    }
}