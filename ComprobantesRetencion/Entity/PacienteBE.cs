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
        public int IdPaciente { get; set; }
        public int IdTipoDocumentoIdentidad { get; set; }
        public string NroDocumentoIdenidad { get; set; }
        public DateTime FechaNacimiento { get; set; }
        public string nombres { get; set; }
        public string apellidoPaterno { get; set; }
        public string apellidoMaterno { get; set; }
        public string sexo { get; set; }
    }
}
