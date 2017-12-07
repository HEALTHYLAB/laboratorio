using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entity
{
    public class DatosClinicaBE
    {

        public List<TecnicoBE> oListaTecnicoBE;
        public List<SolicitudTransfusionBE> oListaSolicitudTransfusionBE;        
        public List<OrdenMedicaBE>  oListaOrdenMedicaBE;
        public List<HemocomponenteBE> oListaHemocomponenteBE;
        public List<PacienteBE> oListaPaciente;
        public int codigo { get; set; }
        public string fechaactual { get; set; }
        public List<TipoBE> oListaFactorRH;
        public List<TipoBE> oListaTipoSangre;
    }
}
