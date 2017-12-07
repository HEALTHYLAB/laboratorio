using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entity
{
    [Serializable]
    public class ResultadoPaciente
    {
        public int codResultadoAC { get; set; }
        public string tipoAnalisis { get; set; }
        public string mes { get; set; }
        public string anio { get; set; }
        public string fechaEmision { get; set; }
        public string valorOptimoInicial { get; set; }
        public string valorOptimoFinal { get; set; }
        public string tipoMedida { get; set; }
        public string resultado { get; set; }
        public string medicoSolicitante { get; set; }
        public string fechaSolicitud { get; set; }
        public int codEstado { get; set; }
        public int codPaciente { get; set; }
        public string paciente { get; set; }
        public string codTipoAnalisis { get; set; }
        public string valorOptimo { get; set; }
    }
}
