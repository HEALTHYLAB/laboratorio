using System;
using DAO;
using Entity;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Negocios
{
    public class TransfusionBL
    {

        TransfusionDA oTransfusionDA = new TransfusionDA();

        public List<TecnicoBE> lstTecnico()
        {
            List<TecnicoBE> oListaTecnicoBE = new List<TecnicoBE>();

            return oTransfusionDA.lstTecnico();
        }

        public List<OrdenMedicaBE> lstOrdenMedica()
        {
            List<OrdenMedicaBE> oListaOrdenMedicaBE = new List<OrdenMedicaBE>();

            return oTransfusionDA.lstOrdenMedica();
        }

        public List<SolicitudTransfusionBE> lstTranfusionesByParameters(string fechainicio, string fechafin, int idestado)
        {
            return oTransfusionDA.lstTranfusionesByParametersBE(fechainicio, fechafin, idestado);
        }

        public List<SolicitudTransfusionBE> lstTranfusionesExtByParameters(string fechainicio, string fechafin, int idestado)
        {
            return oTransfusionDA.lstTranfusionesExtByParametersBE(fechainicio, fechafin, idestado);
        }

        public List<HemocomponenteBE> lstHemocomponente()
        {
            List<HemocomponenteBE> oListaHemocomponenteBE = new List<HemocomponenteBE>();

            return oTransfusionDA.lstHemocomponente();
        }

        public SolicitudTransfusionBE GetDatosSolicitudTransfusion(int IdSolicitud)
        {
            //List<SolicitudTransfusionBE> oListaSolicitudTransfusionBE = new List<SolicitudTransfusionBE>();

            return oTransfusionDA.GetDatosSolicitudTransfusion(IdSolicitud);
        }

        public SolicitudTransfusionBE GetDatosSolicitudTransfusionExt(int IdSolicitud)
        {
            return oTransfusionDA.GetDatosSolicitudTransfusionExt(IdSolicitud);
        }

        public string insTransfucion(SolicitudTransfusionBE oTransfusionBE)
        {
            string xValor = "";
            xValor = oTransfusionDA.insTransfucion(oTransfusionBE);

            if (xValor == "OK")
            {
                oTransfusionBE.oListaDetalleSolicitudTranfusion.ForEach(p => oTransfusionDA.insDetalleTransfucion(p));
            }
            return xValor;
        }


        public string insTransfucionEmergencia(SolicitudTransfusionBE oTransfusionBE)
        {
            string xValor = "";
            xValor = oTransfusionDA.insTransfucionEmergencia(oTransfusionBE);

            if (xValor == "OK")
            {
                oTransfusionBE.oListaDetalleSolicitudTranfusion.ForEach(p => oTransfusionDA.insDetalleTransfucionEmergencia(p));
            }
            return xValor;
        }

        public string insRegistroPaciente(PacienteBE oPaciente)
        {
            string xValor = "";
            xValor = oTransfusionDA.insRegistroPaciente(oPaciente);
            return xValor;
        }

        public List<OrdenMedicaBE> lstOrden(string fechaini, string fechafin, string codigo)
        {
            List<OrdenMedicaBE> oListaOrdenMedicaBE = new List<OrdenMedicaBE>();

            oListaOrdenMedicaBE = oTransfusionDA.lstOrden(fechaini, fechafin, codigo);
            return oListaOrdenMedicaBE;
        }

        public DatosClinicaBE lstDatos()
        {
            DatosClinicaBE oDatosClinicaBE = new DatosClinicaBE();

            oDatosClinicaBE = oTransfusionDA.lstDatos();

            return oDatosClinicaBE;
        }


        public DatosClinicaBE lstDatosEmergencia()
        {
            DatosClinicaBE oDatosClinicaBE = new DatosClinicaBE();

            oDatosClinicaBE = oTransfusionDA.lstDatosEmergencia();

            return oDatosClinicaBE;
        }

        public SolicitudTransfusionBE GetQueryCompatibilidadHemocomponentes(int IdSolicitud, int IdTipoSangre, int FactorRH)
        {
            //List<HemocomponenteBE> oListaHemocomponenteBE = new List<HemocomponenteBE>();

            return oTransfusionDA.GetQueryCompatibilidadHemocomponentes(IdSolicitud, IdTipoSangre, FactorRH);
        }

        public string insOrdenRequerimiento(SolicitudTransfusionBE oSolicitudTransfusionBE)
        {
            string xValor = "";
            xValor = oTransfusionDA.insOrdenRequerimiento(oSolicitudTransfusionBE);

            //if (xValor == "OK")
            //{
            //    oSolicitudTransfusionBE.oListaHemocomponenteSolicitudBE.ForEach(p => oTransfusionDA.insDetalleOrdenRequerimiento(p));
            //}
            return xValor;
        }

        public string insOrndeDonacion(OrdenDonacionBE oOrdenDonacion, List<HemocomponenteSolicitudBE> oListaHemocomponenteSolicitudBE)
        {
            return oTransfusionDA.insOrndeDonacion(oOrdenDonacion, oListaHemocomponenteSolicitudBE);
        }


        public string insHemocomponenteSolicitud(HemocomponenteSolicitudBE oHemocomponenteSolicitudBE)
        {
            return oTransfusionDA.insHemocomponenteSolicitud(oHemocomponenteSolicitudBE);
        }

        public List<BancoBE> getListBancosxId(List<int> ids)
        {
            return oTransfusionDA.getBancosxId(ids);
        }

        public void updateSolExt(int idSolicitudExterna, int estado)
        {
            oTransfusionDA.updateSolExterna(idSolicitudExterna, estado);
        }
        public List<ResultadoPaciente> lstResultadoByParameters(string mes, string anio, string idpaciente)
        {
            return oTransfusionDA.lstResultadoByParametersD(mes, anio, idpaciente);
        }

        public ResultadoPaciente entResultadoByParameters(string TipoAnalisis, string IdPaciente)
        {
            return oTransfusionDA.entResultadoByParametersD(TipoAnalisis, IdPaciente);
        }

        public ResultadoPaciente entResultadoByParameters2(int Id_ResultadoAC)
        {
            return oTransfusionDA.entResultadoByParametersD2(Id_ResultadoAC);
        }

    }
}
