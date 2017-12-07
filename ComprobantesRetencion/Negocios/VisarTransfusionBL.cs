using System;
using DAO;
using Entity;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Negocios
{
     public class VisarTransfusionBL
    {

         VisarTransfusionDA oTransfusionDA = new VisarTransfusionDA();

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
             return oTransfusionDA.lstTranfusionesByParametersBE(fechainicio,fechafin,idestado);
         }
         public List<HemocomponenteBE> lstHemocomponente()
         {
             List<HemocomponenteBE> oListaHemocomponenteBE = new List<HemocomponenteBE>();

             return oTransfusionDA.lstHemocomponente();
         }

         public VisarSolicitudTransfusionBE GetDatosSolicitudTransfusion(int IdSolicitud)
         {
             List<VisarSolicitudTransfusionBE> oListaSolicitudTransfusionBE = new List<VisarSolicitudTransfusionBE>();

             return oTransfusionDA.GetDatosSolicitudTransfusion(IdSolicitud);
         }

         public List<HemocomponenteBE> GetDatosSolicitudHemocomponentes(int IdSolicitud)
         {
             List<HemocomponenteBE> oListaHemocomponenteBE = new List<HemocomponenteBE>();

             return oTransfusionDA.GetDatosSolicitudHemocomponentes(IdSolicitud);
         }
         public string visarSolicitudTransfusion(int IdSolicitud, int IdEstado)
         {
             string xValor = "";

             xValor = oTransfusionDA.visarSolicitudTransfusion(IdSolicitud, IdEstado);

             return xValor; 
         }

         public string insTransfucion(SolicitudTransfusionBE oTransfusionBE)
         {
          string xValor = "";
          xValor =  oTransfusionDA.insTransfucion(oTransfusionBE);

          if (xValor == "OK")
          {
              oTransfusionBE.oListaDetalleSolicitudTranfusion.ForEach(p => oTransfusionDA.insDetalleTransfucion(p));          
          }
             return xValor;
         }

         public List<OrdenMedicaBE> lstOrden(string fechaini, string fechafin, string codigo)
         {
             List<OrdenMedicaBE> oListaOrdenMedicaBE = new List<OrdenMedicaBE>();

             oListaOrdenMedicaBE = oTransfusionDA.lstOrden( fechaini,  fechafin,  codigo);
             return oListaOrdenMedicaBE;
         }


         public DatosClinicaBE lstDatos() 
         {
             DatosClinicaBE oDatosClinicaBE = new DatosClinicaBE();

             oDatosClinicaBE = oTransfusionDA.lstDatos();

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


    }
}
