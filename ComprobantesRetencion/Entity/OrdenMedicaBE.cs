using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entity
{
    public class OrdenMedicaBE
    {

        public int codOrden { get; set; }

        public string codigoOrden { get; set; }
        public int codPaciente { get; set; }
        public string paciente { get; set; } 
        public string fecha { get; set; }
        public int estado { get; set; }

        public int edad { get; set; }
        public int peso { get; set; }
        public string sexo { get; set; }
        public string hclinica { get; set; }
        

    }
}
