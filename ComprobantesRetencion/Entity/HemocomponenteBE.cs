using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entity
{
    [Serializable]
    public class HemocomponenteBE
    {
        public string Codigo { get; set; }
        public string Descripcion { get; set; }
        public string GlobulosRojos { get; set; }
        public string FechaRegistro { get; set; }
        public string UsuarioRegistro { get; set; }
        public string FechaModificacion { get; set; }
        public string UsuarioModificacion { get; set; }
        public string IdBancoSangre { get; set; }
        public int IdHemocomponente { get; set; }
        public string CantidadRequerida { get; set; }
        public string CantidadAtendida { get; set; }
        public string cantidadstock { get; set; }
        public string Compatibilidad { get; set; }
        public int Estado { get; set; }
    }
}
