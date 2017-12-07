using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entity
{
    [Serializable]
    public class SolicitudTransfusionBE
    {
        public List<FactorRHBE> oListaFactorRHBE;
        public List<TipoSangreBE> oListaTipoSangreBE;
        public List<HemocomponenteSolicitudBE> oListaHemocomponenteSolicitudBE { get; set; }
        public string nroSolicitud { get; set; }
        public string estado { get; set; }
        public string desEstado { get; set; }
        public string codEstado { get; set; }
        public string motivoTransfusion { get; set; }
        public string codOrdenMedica { get; set; }
        public string codPaciente { get; set; }
        public string codTecnicoLaboratorista { get; set; }
        public string fechaRegistro { get; set; }
        public string usuarioRegistro { get; set; }
        public string fechaModificacion { get; set; }
        public string usuarioModificacion { get; set; }
        public string fechaRechazo { get; set; }
        public string usuarioRechazo { get; set; }
        public string nroOrdenMedica { get; set; }
        public string peso { get; set; }
        public string nroHistoriaClinica { get; set; }
        public string dolencia { get; set; }
        public string edad { get; set; }
        public string paciente { get; set; }
        public string sexo { get; set; }
        public int codSolicitud { get; set; }
        public int estado { get; set; }
        public string motivo { get; set; }
        public int codOrdenMedica { get; set; }
        public int codTecnico { get; set; }
        public List<DetalleSolicitudTranfusion> oListaDetalleSolicitudTranfusion { get; set; }
        public int codTipoFactorRH { get; set; }
        public int codTipoSangre { get; set; }         

    }
}
