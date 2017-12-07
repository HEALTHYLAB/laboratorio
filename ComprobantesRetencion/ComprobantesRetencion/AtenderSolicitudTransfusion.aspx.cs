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
    public partial class AtenderSolicitudTransfusion : System.Web.UI.Page
    {
        TransfusionBL oTransfusionBL = new TransfusionBL();

        protected void Page_Load(object sender, EventArgs e)
        {
            //List<SolicitudTransfusionBE> oListaSolicitudTransfusionBE = new List<SolicitudTransfusionBE>();
            //oListaSolicitudTransfusionBE = GetDatosSolicitudTransfusion(1);
        }

        [WebMethod]
        public static SolicitudTransfusionBE GetDatosSolicitudTransfusion(string xData)
        {
            string[] arreglo = xData.Split('|');
            int IdSolicitud = Convert.ToInt32(arreglo[0]);

            TransfusionBL oTransfusionBL = new TransfusionBL();

            return oTransfusionBL.GetDatosSolicitudTransfusion(IdSolicitud);
        }

        [WebMethod]
        public static SolicitudTransfusionBE GetQueryCompatibilidadHemocomponentes(string xData)
        {
            string[] arreglo = xData.Split('|');

            int IdSolicitud = Convert.ToInt32(arreglo[0]);
            int IdTipoSangre = Convert.ToInt32(arreglo[1]);
            int FactorRH = Convert.ToInt32(arreglo[2]);

            TransfusionBL oTransfusionBL = new TransfusionBL();
            return oTransfusionBL.GetQueryCompatibilidadHemocomponentes(IdSolicitud, IdTipoSangre, FactorRH);
        }


        //[WebMethod]
        //public static List<HemocomponenteBE> lstHemocomponente()
        //{
        //    List<HemocomponenteBE> oListaHemocomponenteBE = new List<HemocomponenteBE>();

        //    return oListaHemocomponenteBE;
        //}

        [WebMethod]
        public static string insTransfucion(string xdata, string xdetalle)
        {

            string[] arreglo = xdata.Split('|');
            string[] arregloDetalle = xdetalle.Split('-');


            OrdenDonacionBE o = new OrdenDonacionBE();
            o.Estado = 2;//PENDIENTE
            o.Observacion = arreglo[0];

            //string[] arreglo2 = arregloDetalle[i].Split('|');
            //o.NroOrden = arreglo2[0];

            List<HemocomponenteSolicitudBE> obj = new List<HemocomponenteSolicitudBE>();
            for (int i = 0; i < arregloDetalle.Length; i++)
            {
                HemocomponenteSolicitudBE hemoObjt = new HemocomponenteSolicitudBE();
                string[] arreglo2 = arregloDetalle[i].Split('|');
                hemoObjt.idHemocomponente = arreglo2[0];
                hemoObjt.idSolicitud = "1";//TODO
                obj.Add(hemoObjt);
            }

            //oHemocomponenteSolicitudBE.idHemocomponente = arregloDetalle[0];

            string xValor = "";
            new TransfusionBL().insOrndeDonacion(o, obj);
            return xValor;
            //oOrdeDonacionBE.NroOrden = arregloDetalle[0];
            //oOrdeDonacionBE.NroSolicitudTransfusion = "1";





            /*
            SolicitudTransfusionBE oSolicitudTransfusionBE = new SolicitudTransfusionBE();
            List<DetalleSolicitudTranfusion> oListaDetalleSolicitudTranfusion = new List<DetalleSolicitudTranfusion>();
            
            oSolicitudTransfusionBE.idSolicitud = Convert.ToInt32(arreglo[0]);
            oSolicitudTransfusionBE.estado = Convert.ToInt32(arreglo[1]);
            oSolicitudTransfusionBE.motivo = arreglo[2];
            oSolicitudTransfusionBE.idOrdenMedica = Convert.ToInt32(arreglo[3]);
            oSolicitudTransfusionBE.idtecnico = Convert.ToInt32(arreglo[4]);

            string[] arreglodetalle = xdetalle.Split('-');

            for (int i = 0; i < arreglodetalle.Length; i++)
            {
                DetalleSolicitudTranfusion o = new DetalleSolicitudTranfusion();
                string[] arreglo2 = arreglodetalle[i].Split('|');
                o.idHemocomponente = Convert.ToInt32(arreglo2[0]);
                o.cant = Convert.ToInt32(arreglo2[1]);
                o.idSolicitud = oSolicitudTransfusionBE.idSolicitud;
                oListaDetalleSolicitudTranfusion.Add(o);
            }

            oSolicitudTransfusionBE.oListaDetalleSolicitudTranfusion = oListaDetalleSolicitudTranfusion;
            string xValor = "";
            //oTransfusionBE.oListaDetalleSolicitudTranfusion = oListaDetalleSolicitudTranfusion;
            new TransfusionBL().insTransfucion(oSolicitudTransfusionBE);
            return xValor;             
             

            return "";*/
        }


        [WebMethod]
        public static string insOrdenRequerimiento(string xdetalle)
        {
            SolicitudTransfusionBE oSolicitudTransfusionBE = new SolicitudTransfusionBE();
            List<HemocomponenteSolicitudBE> oListaHemocomponenteSolicitudBE = new List<HemocomponenteSolicitudBE>();

            string[] arreglodetalle = xdetalle.Split('-');

           

            for (int i = 0; i < arreglodetalle.Length; i++)
            {
                HemocomponenteSolicitudBE o = new HemocomponenteSolicitudBE();
                string[] arreglo2 = arreglodetalle[i].Split('|');
                oSolicitudTransfusionBE.idSolicitud = Convert.ToInt32(arreglo2[3].ToString());
                o.idHemocomponente = arreglo2[1];
                o.NroSerieUnidad = arreglo2[4];
                o.idSolicitud = arreglo2[3].ToString();
                oListaHemocomponenteSolicitudBE.Add(o);
     
            }

            oSolicitudTransfusionBE.oListaHemocomponenteSolicitudBE = oListaHemocomponenteSolicitudBE;
            string xValor = "";
            //oTransfusionBE.oListaDetalleSolicitudTranfusion = oListaDetalleSolicitudTranfusion;
            new TransfusionBL().insOrdenRequerimiento(oSolicitudTransfusionBE);
            return xValor;
        }


    }
}