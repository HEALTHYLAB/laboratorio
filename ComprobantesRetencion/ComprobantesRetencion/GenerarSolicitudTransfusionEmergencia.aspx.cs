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
    public partial class GenerarSolicitudTransfusionEmergencia : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

            DatosClinicaBE oDatosClinicaBE = new DatosClinicaBE();

            oDatosClinicaBE = new TransfusionBL().lstDatosEmergencia();
            int contador = 0;
            foreach(var x in oDatosClinicaBE.oListaPaciente) {
                cboPaciente.Items.Insert(contador, new ListItem(x.NroDocumentoIdenidad + " " + x.nombres + " " + x.apellidoPaterno + " " + x.apellidoMaterno, x.IdPaciente + ""));
            }
            foreach (var x in oDatosClinicaBE.oListaTecnicoBE)
            {
                cboTecnico.Items.Insert(contador, new ListItem(x.Nombre , x.IdTecnico + ""));
            }

        }

      
        [WebMethod]
        public static DatosClinicaBE lstDatosEmergencia()
        {
            DatosClinicaBE oDatosClinicaBE = new DatosClinicaBE();

           oDatosClinicaBE = new TransfusionBL().lstDatosEmergencia();

           //lblSelectedValue.Text = cboCountry.SelectedValue;

           //cboCountry.DataSource = "sexo";
           //cboCountry.Items.Insert(2, "sexo");
            return oDatosClinicaBE;
        }

        [WebMethod]
        public static string insRegistrarPaciente(string xdata)
        {
            string[] arreglo = xdata.Split('|');
            PacienteBE oPaciente = new PacienteBE();

            oPaciente.nombres = arreglo[0];
            oPaciente.apellidoPaterno = arreglo[1];
            oPaciente.apellidoMaterno = arreglo[2];

            if(arreglo[3]!=null) {
            oPaciente.sexo = arreglo[3];           
            } else {
            oPaciente.sexo = arreglo[4];              
            }
            
            DateTime fechaNacimientoDate = DateTime.ParseExact(arreglo[5], "dd/MM/yyyy", System.Globalization.CultureInfo.InvariantCulture);
            oPaciente.FechaNacimiento = fechaNacimientoDate;

            oPaciente.IdTipoDocumentoIdentidad = Convert.ToInt32(arreglo[6]);
            oPaciente.NroDocumentoIdenidad = arreglo[7];

            string xValor = "";
            xValor = new TransfusionBL().insRegistroPaciente(oPaciente);
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



        [WebMethod]
        public static string insTransfucionEmergencia(string xdata, string xdetalle)
        {
            SolicitudTransfusionBE oSolicitudTransfusionBE = new SolicitudTransfusionBE();
            List<DetalleSolicitudTranfusion> oListaDetalleSolicitudTranfusion = new List<DetalleSolicitudTranfusion>();
            string[] arreglo = xdata.Split('|');

            oSolicitudTransfusionBE.idSolicitud = Convert.ToInt32(arreglo[0]);
            oSolicitudTransfusionBE.estado = 1;//REGISTRADO
            oSolicitudTransfusionBE.motivo = arreglo[1];
            oSolicitudTransfusionBE.idtecnico = Convert.ToInt32(arreglo[2]);
            oSolicitudTransfusionBE.IdPaciente = arreglo[3];
            oSolicitudTransfusionBE.idTipoFactorRH = Convert.ToInt32(arreglo[4]);
            oSolicitudTransfusionBE.idTipoSangre = Convert.ToInt32(arreglo[5]);

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
            //oSolicitudTransfusionBE.oListaDetalleSolicitudTranfusion = oListaDetalleSolicitudTranfusion;
            new TransfusionBL().insTransfucionEmergencia(oSolicitudTransfusionBE);
            return xValor;
        }


    }
}