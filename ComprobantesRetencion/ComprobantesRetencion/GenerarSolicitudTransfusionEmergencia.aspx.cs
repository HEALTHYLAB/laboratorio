﻿using Entity;
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
                cboPaciente.Items.Insert(contador, new ListItem(x.nroDocumentoIdenidad + " " + x.nombres + " " + x.apellidoPaterno + " " + x.apellidoMaterno, x.codPaciente + ""));
            }
            foreach (var x in oDatosClinicaBE.oListaTecnicoBE)
            {
                cboTecnico.Items.Insert(contador, new ListItem(x.nombre , x.codTecnico + ""));
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
            oPaciente.sexo = arreglo[3];
            
            DateTime fechaNacimientoDate = DateTime.ParseExact(arreglo[4], "dd/MM/yyyy", System.Globalization.CultureInfo.InvariantCulture);
            oPaciente.fechaNacimiento = fechaNacimientoDate;

            oPaciente.codTipoDocumentoIdentidad = Convert.ToInt32(arreglo[5]);
            oPaciente.nroDocumentoIdenidad = arreglo[6];

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

            oSolicitudTransfusionBE.codSolicitud = Convert.ToInt32(arreglo[0]);
            oSolicitudTransfusionBE.estadoInt = 1;//REGISTRADO
            oSolicitudTransfusionBE.motivo = arreglo[1];
            oSolicitudTransfusionBE.codTecnico = Convert.ToInt32(arreglo[2]);
            oSolicitudTransfusionBE.codPaciente = arreglo[3];
            oSolicitudTransfusionBE.codTipoFactorRH = Convert.ToInt32(arreglo[4]);
            oSolicitudTransfusionBE.codTipoSangre = Convert.ToInt32(arreglo[5]);

            string[] arreglodetalle = xdetalle.Split('-');

            for (int i = 0; i < arreglodetalle.Length; i++)
            {
                DetalleSolicitudTranfusion o = new DetalleSolicitudTranfusion();
                string[] arreglo2 = arreglodetalle[i].Split('|');
                o.codHemocomponente = Convert.ToInt32(arreglo2[0]);
                o.cant = Convert.ToInt32(arreglo2[1]);
                o.codSolicitud = oSolicitudTransfusionBE.codSolicitud;
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