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
        public string codigo { get; set; }
        public string descripcion { get; set; }
        public string globulosRojos { get; set; }
        public string fechaRegistro { get; set; }
        public string usuarioRegistro { get; set; }
        public string fechaModificacion { get; set; }
        public string usuarioModificacion { get; set; }
        public string codBancoSangre { get; set; }
        public int codHemocomponente { get; set; }
        public string cantidadRequerida { get; set; }
        public string cantidadAtendida { get; set; }
        public string cantidadstock { get; set; }
        public string compatibilidad { get; set; }
        public int estado { get; set; }
    }
}
