using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entity
{
   public class HemocomponenteSolicitudBE
    {
       public string idSolicitud { get; set; }
       public string idHemocomponente { get; set; }
       public string Numero { get; set; }
       public string CantidadRequerida { get; set; }
       public string CantidadAtendida { get; set; }
       public string UnidadesCompatibles { get; set; }
       public string IdOrdenRequerimiento { get; set; }
       public string IdOrdenDonacion { get; set; }
       public string IdSolicitudExterna { get; set; }
       public string Hemocomponente { get; set; }
       public string Estado { get; set; }
       public string Compatibilidad { get; set; }
       public string NroOrdenDonacion { get; set; }
       public string NroSolicitudExterna { get; set; }
       public string NroOrdenRequerimiento { get; set; }
       public string NroSolicitud { get; set; }
       public string NroSerieUnidad { get; set; }
    }
}
