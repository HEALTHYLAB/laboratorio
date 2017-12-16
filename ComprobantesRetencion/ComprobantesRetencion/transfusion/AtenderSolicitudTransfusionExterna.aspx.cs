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
        // Obtienes los datos de la solicitud de transfusión externa
        public static SolicitudTransfusionBE GetDatosSolicitudTransfusionExt(string xData)
        {
            // Obtener parámetros de búsqueda
            string[] arreglo = xData.Split('|');
            // Obtener id de solicitud
            int IdSolicitud = Convert.ToInt32(arreglo[0]);

            TransfusionBL oTransfusionBL = new TransfusionBL();

            // Obtener datos de la solicitud de tranfusión externa por id de solicitud
            return oTransfusionBL.GetDatosSolicitudTransfusionExt(IdSolicitud);
        }

        [WebMethod]
        // Obtener listado de bancos externos con los hemocomponentes requeridos disponibles
        public static List<BancoBE> getBancosExternos(string ids, string cantidad)
        {
            List<BancoBE> listBancos = new List<BancoBE>();
            int[] idsHemocompInt = new int[10];
            int[] idsBancos = new int[10];

            string[] idsHemocomp = ids.Split(',');
            string[] cantHemocomp = cantidad.Split(',');
            // Obtener id de hemocomponentes solicitados
            for (int i = 0; i < idsHemocomp.Length; i++)
            {
                idsHemocompInt[i] = Int16.Parse(idsHemocomp[i]);
            }
            // Obtener listado de bancos externos con los hemocomponentes requeridos disponibles
            // a través de Web Service
            localhost.Service test = new localhost.Service();
            idsBancos = test.GetData(idsHemocompInt, cantHemocomp);

            // Obtener bancos por id
            TransfusionBL oTransfusionBL = new TransfusionBL();
            listBancos = oTransfusionBL.getListBancosxId(idsBancos.ToList());
            return listBancos;
        }

        [WebMethod]
        // Actualizar estado de solicitud externa
        public static string actualizarSolicitudExterna(int idSolicitudExterna, string idBancosSt, string idHemocompSt, string cantSt)
        {
            // Obtener parámetros
            string[] idBancos = idBancosSt.Split(',');
            string[] idHemocomp = idHemocompSt.Split(',');
            string[] cantidad = cantSt.Split(',');

            // Consultar Web Service
            localhost.Service test = new localhost.Service();
            string nroOrdenExterna = test.receiveOrder(1, true, idSolicitudExterna, true, idHemocomp, cantidad);

            TransfusionBL oTransfusionBL = new TransfusionBL();
            oTransfusionBL.updateSolExt(idSolicitudExterna, 3);

            return nroOrdenExterna;
        }


    }
}