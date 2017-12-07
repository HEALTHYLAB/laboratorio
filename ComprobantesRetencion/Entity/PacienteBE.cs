using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entity
{
    [Serializable]
    public class PacienteBE
    {
        public int codPaciente { get; set; }
        public int codTipoDocumentoIdentidad { get; set; }
        public string nroDocumentoIdenidad { get; set; }
        public DateTime fechaNacimiento { get; set; }
        public string nombres { get; set; }
        public string apellidoPaterno { get; set; }
        public string apellidoMaterno { get; set; }
        public string sexo { get; set; }
    }
}
