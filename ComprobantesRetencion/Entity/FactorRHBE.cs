using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entity
{
    [Serializable]
    public class FactorRHBE
    {
        public string codigo { get; set; }
        public string descripcion { get; set; }
        public string fechaRegistro { get; set; }
        public string usuarioRegistro { get; set; }
        public string fechaModificacion { get; set; }
        public string usuarioModificacion { get; set; }
    }
}
