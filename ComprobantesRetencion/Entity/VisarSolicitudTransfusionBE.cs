using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entity
{
    [Serializable]
    public class VisarSolicitudTransfusionBE
    {
        public List<FactorRHBE> oListaFactorRHBE;
        public List<TipoSangreBE> oListaTipoSangreBE;
        public List<HemocomponenteSolicitudBE> oListaHemocomponenteSolicitudBE { get; set; }
        public string NroSolicitud { get; set; }
        public string Estado { get; set; }
        public string DesEstado { get; set; }
        public string IdEstado { get; set; }
        public string MotivoTransfusion { get; set; }
        public string IdOrdenMedica { get; set; }
        public string IdPaciente { get; set; }
        public string IdTecnicoLaboratorista { get; set; }
        public string FechaRegistro { get; set; }
        public string UsuarioRegistro { get; set; }
        public string FechaModificacion { get; set; }
        public string UsuarioModificacion { get; set; }
        public string FechaRechazo { get; set; }
        public string UsuarioRechazo { get; set; }
        public string NroOrdenMedica { get; set; }
        public string Peso { get; set; }
        public string NroHistoriaClinica { get; set; }
        public string Dolencia { get; set; }
        public string Edad { get; set; }
        public string Paciente { get; set; }
        public string Sexo { get; set; }
        public string Nacimiento { get; set; }
        public int idSolicitud { get; set; }
        public int estado { get; set; }
        public string motivo { get; set; }
        public int idOrdenMedica { get; set; }
        public int idtecnico { get; set; }
        public string medico { get; set; }
        public List<DetalleSolicitudTranfusion> oListaDetalleSolicitudTranfusion { get; set; }
                 
    }
}
