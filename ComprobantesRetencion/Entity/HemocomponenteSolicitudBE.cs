using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entity
{
   public class HemocomponenteSolicitudBE
    {
       public string codSolicitud { get; set; }
       public string codHemocomponente { get; set; }
       public string numero { get; set; }
       public string cantidadRequerida { get; set; }
       public string cantidadAtendida { get; set; }
       public string unidadesCompatibles { get; set; }
       public string codOrdenRequerimiento { get; set; }
       public string codOrdenDonacion { get; set; }
       public string codSolicitudExterna { get; set; }
       public string hemocomponente { get; set; }
       public string estado { get; set; }
       public string compatibilidad { get; set; }
       public string nroOrdenDonacion { get; set; }
       public string nroSolicitudExterna { get; set; }
       public string nroOrdenRequerimiento { get; set; }
       public string nroSolicitud { get; set; }
       public string nroSerieUnidad { get; set; }
    }
}
