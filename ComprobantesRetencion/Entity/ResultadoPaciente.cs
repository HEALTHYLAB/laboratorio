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
        public int Id_ResultadoAC { get; set; }
        public string Tipo_Analisis { get; set; }
        public string Mes { get; set; }
        public string Anio { get; set; }
        public string Fecha_Emision { get; set; }
        public string Valor_Optimo_Inicial { get; set; }
        public string Valor_Optimo_Final { get; set; }
        public string Tipo_Medida { get; set; }
        public string Resultado { get; set; }
        public string Medico_Solicitante { get; set; }
        public string Fecha_Solicitud { get; set; }
        public int Id_Estado { get; set; }
        public int Id_Paciente { get; set; }
        public string Paciente { get; set; }
        public string Id_Tipo_Analisis { get; set; }
        public string Valor_Optimo { get; set; }
    }
}
