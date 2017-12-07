using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entity
{
    [Serializable]
    public class OrdenDonacionBE
    {
        public int idOrdenDonacion { get; set; }
        public string NroOrden { get; set; }
        public string NroSolicitudTransfusion { get; set; }
        public int Estado { get; set; }
        public string FechaRegistro { get; set; }
        public string UsuarioRegistro { get; set; }
        public string FechaModificacion { get; set; }
        public string UsuarioModificacion { get; set; }
        public string FechaRechazo { get; set; }
        public string UsuarioRechazo { get; set; }
        public string Observacion { get; set; }

    }
}
