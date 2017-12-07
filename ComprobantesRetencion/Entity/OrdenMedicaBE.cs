using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entity
{
    public class OrdenMedicaBE
    {

        public int idOrden { get; set; }

        public string codigoOrden { get; set; }
        public int idPaciente { get; set; }
        public string Paciente { get; set; } 
        public string fecha { get; set; }
        public int Estado { get; set; }

        public int edad { get; set; }
        public int peso { get; set; }
        public string sexo { get; set; }
        public string hclinica { get; set; }
        

    }
}
