using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using Entity;
using Negocios;
using System.Web.Services;

namespace ComprobantesRetencion.reportes
{
    public partial class reportePaciente : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        [WebMethod]
        public static List<ResultadoPaciente> lstListaResultado(string xData)
        {

            string[] arreglo = xData.Split('|');

            List<ResultadoPaciente> olstListaResultado = new List<ResultadoPaciente>();
            //olstListaResultado = new TransfusionBL().lstResultadoByParameters(arreglo[0], arreglo[1], arreglo[2]);95666
            olstListaResultado = new TransfusionBL().lstResultadoByParameters(arreglo[0], arreglo[1], arreglo[2]);
            return olstListaResultado;
        }

        [WebMethod]
        public static List<ResultadoPaciente> lstListaResultado2(string xData)
        {

            string[] arreglo = xData.Split('|');

            List<ResultadoPaciente> olstListaResultado = new List<ResultadoPaciente>();
            //olstListaResultado = new TransfusionBL().lstResultadoByParameters(arreglo[0], arreglo[1], arreglo[2]);95666
            olstListaResultado = new TransfusionBL().lstResultadoByParameters(arreglo[0], arreglo[1], "95666");
            return olstListaResultado;
        }

        [WebMethod]
        public static ResultadoPaciente lstEntResultado(string xData)
        {
            string[] arreglo = xData.Split('|');
            int IdSolicitud = Convert.ToInt32(arreglo[0]);

            ResultadoPaciente lstEntResultado = new ResultadoPaciente();
            lstEntResultado = new TransfusionBL().entResultadoByParameters(arreglo[0], arreglo[1]);
            return lstEntResultado;
        }

        [WebMethod]
        public static ResultadoPaciente lstEntResultado2(string xData)
        {
            string[] arreglo = xData.Split('|');
            int Id_ResultadoAC = Convert.ToInt32(arreglo[0]);

            ResultadoPaciente lstEntResultado = new ResultadoPaciente();
            lstEntResultado = new TransfusionBL().entResultadoByParameters2(Id_ResultadoAC);
            return lstEntResultado;
        }
    }
}