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
    public partial class VisarSolicitudTransfusion : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        [WebMethod]
        public static VisarSolicitudTransfusionBE lstSolicitudTransfusion(string xData)
        {

            string[] arreglo = xData.Split('|');

            VisarSolicitudTransfusionBE oVisarSolicitudTransfusionBE = new VisarSolicitudTransfusionBE();
            VisarTransfusionBL oVisarTransfusionBL = new VisarTransfusionBL();

            oVisarSolicitudTransfusionBE = oVisarTransfusionBL.GetDatosSolicitudTransfusion(Convert.ToInt32(arreglo[0]));
            return oVisarSolicitudTransfusionBE;
        }

        [WebMethod]
        public static List<HemocomponenteBE> lstSolicitudHemocomponentes(string xData)
        {
            string[] arreglo = xData.Split('|');

            List<HemocomponenteBE> oLstHemocomponenteBE = new List<HemocomponenteBE>();
            VisarTransfusionBL oVisarTransfusionBL = new VisarTransfusionBL();

            oLstHemocomponenteBE = oVisarTransfusionBL.GetDatosSolicitudHemocomponentes(Convert.ToInt32(arreglo[0]));
            return oLstHemocomponenteBE;
        }

        [WebMethod]
        public static string visarSolicitudTransfusion(string xdata)
        {
            VisarTransfusionBL oVisarTransfusionBL = new VisarTransfusionBL();
            string[] arreglo = xdata.Split('|');
            string xValor = "";
            int IdSolicitud = Convert.ToInt32(arreglo[0]);
            int IdEstado = Convert.ToInt32(arreglo[1]);

            xValor = oVisarTransfusionBL.visarSolicitudTransfusion(IdSolicitud, IdEstado);

            return xValor;
        }

        [WebMethod]
        public static DatosClinicaBE lstDatos()
        {
            DatosClinicaBE oDatosClinicaBE = new DatosClinicaBE();

           oDatosClinicaBE = new VisarTransfusionBL().lstDatos();

            return oDatosClinicaBE;
        }

        [WebMethod]
        public static string insTransfucion(string xdata , string xdetalle )
        {
            SolicitudTransfusionBE oSolicitudTransfusionBE = new SolicitudTransfusionBE();
            List<DetalleSolicitudTranfusion> oListaDetalleSolicitudTranfusion = new List<DetalleSolicitudTranfusion>();
          string[] arreglo = xdata.Split('|');
      
             oSolicitudTransfusionBE.codSolicitud = Convert.ToInt32( arreglo[0]);
             oSolicitudTransfusionBE.estadoInt = Convert.ToInt32( arreglo[1]);
             oSolicitudTransfusionBE.motivo =  arreglo[2];
             oSolicitudTransfusionBE.codOrdenMedicaInt = Convert.ToInt32( arreglo[3]);
             oSolicitudTransfusionBE.codTecnico = Convert.ToInt32( arreglo[4]);

             string[] arreglodetalle = xdetalle.Split('-');

             for (int i = 0; i < arreglodetalle.Length; i++)
             {
                 DetalleSolicitudTranfusion o = new DetalleSolicitudTranfusion();
                 string[] arreglo2 = arreglodetalle[i].Split('|');
                  o.codHemocomponente =Convert.ToInt32(  arreglo2[0]);
                  o.cant =Convert.ToInt32(  arreglo2[1]);
                  o.codSolicitud = oSolicitudTransfusionBE.codSolicitud;
                  oListaDetalleSolicitudTranfusion.Add(o);
             }

             oSolicitudTransfusionBE.oListaDetalleSolicitudTranfusion = oListaDetalleSolicitudTranfusion;         
            string xValor = "";
            //oTransfusionBE.oListaDetalleSolicitudTranfusion = oListaDetalleSolicitudTranfusion;
               new VisarTransfusionBL().insTransfucion(oSolicitudTransfusionBE);
               return xValor;
        }

        [WebMethod]
        public static List<OrdenMedicaBE> lstOrden(string xData)
        {
             string[] arreglo =  xData.Split('|');

            List<OrdenMedicaBE> oListaOrdenMedicaBE = new List<OrdenMedicaBE>();
            oListaOrdenMedicaBE = new VisarTransfusionBL().lstOrden(arreglo[0], arreglo[1], arreglo[2]);
            return oListaOrdenMedicaBE;
        }


    }
}