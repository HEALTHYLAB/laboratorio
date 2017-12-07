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
        public int codOrdenDonacion { get; set; }
        public string nroOrden { get; set; }
        public string nroSolicitudTransfusion { get; set; }
        public int estado { get; set; }
        public string fechaRegistro { get; set; }
        public string usuarioRegistro { get; set; }
        public string fechaModificacion { get; set; }
        public string usuarioModificacion { get; set; }
        public string fechaRechazo { get; set; }
        public string usuarioRechazo { get; set; }
        public string observacion { get; set; }

    }
}
