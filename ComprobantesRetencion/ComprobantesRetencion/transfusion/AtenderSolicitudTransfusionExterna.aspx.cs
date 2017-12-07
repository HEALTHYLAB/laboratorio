using Entity;
using Negocios;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace ComprobantesRetencion.transfusion
{
    public partial class AtenderSolicitudTransfusionExterna : System.Web.UI.Page
    {
        TransfusionBL oTransfusionBL = new TransfusionBL();

        protected void Page_Load(object sender, EventArgs e)
        {
        }

        [WebMethod]
        public static SolicitudTransfusionBE GetDatosSolicitudTransfusionExt(string xData)
        {
            string[] arreglo = xData.Split('|');
            int IdSolicitud = Convert.ToInt32(arreglo[0]);

            TransfusionBL oTransfusionBL = new TransfusionBL();

            return oTransfusionBL.GetDatosSolicitudTransfusionExt(IdSolicitud);
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

        [WebMethod]
        public static string insTransfucion(string xdata, string xdetalle)
        {

            string[] arreglo = xdata.Split('|');
            string[] arregloDetalle = xdetalle.Split('-');


            OrdenDonacionBE o = new OrdenDonacionBE();
            o.Estado = 2;//PENDIENTE
            o.Observacion = arreglo[0];

            List<HemocomponenteSolicitudBE> obj = new List<HemocomponenteSolicitudBE>();
            for (int i = 0; i < arregloDetalle.Length; i++)
            {
                HemocomponenteSolicitudBE hemoObjt = new HemocomponenteSolicitudBE();
                string[] arreglo2 = arregloDetalle[i].Split('|');
                hemoObjt.idHemocomponente = arreglo2[0];
                hemoObjt.idSolicitud = "1";//TODO
                obj.Add(hemoObjt);
            }

            string xValor = "";
            new TransfusionBL().insOrndeDonacion(o, obj);
            return xValor;
        }


        [WebMethod]
        public static List<BancoBE> getBancosExternos(string ids, string cantidad)
        {
            List<BancoBE> listBancos = new List<BancoBE>();
            int[] idsHemocompInt = new int[10];
            int[] idsBancos = new int[10];

            string[] idsHemocomp = ids.Split(',');
            string[] cantHemocomp = cantidad.Split(',');
            for (int i = 0; i < idsHemocomp.Length; i++)
            {
                idsHemocompInt[i] = Int16.Parse(idsHemocomp[i]);
            }
            localhost.Service test = new localhost.Service();
            idsBancos = test.GetData(idsHemocompInt, cantHemocomp);


            TransfusionBL oTransfusionBL = new TransfusionBL();
            listBancos = oTransfusionBL.getListBancosxId(idsBancos.ToList());
            return listBancos;
        }

        [WebMethod]
        public static string insOrdenRequerimiento(int idSolicitudExterna, string idBancosSt, string idHemocompSt, string cantSt)
        {
            string[] idBancos = idBancosSt.Split(',');
            string[] idHemocomp = idHemocompSt.Split(',');
            string[] cantidad = cantSt.Split(',');

            localhost.Service test = new localhost.Service();
            string nroOrdenExterna = test.receiveOrder(1, true, idSolicitudExterna, true, idHemocomp, cantidad);

            TransfusionBL oTransfusionBL = new TransfusionBL();
            oTransfusionBL.updateSolExt(idSolicitudExterna, 3);

            return nroOrdenExterna;
        }


    }
}