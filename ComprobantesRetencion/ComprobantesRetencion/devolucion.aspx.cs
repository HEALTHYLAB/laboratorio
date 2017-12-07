using Entity;
using Negocios;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace ComprobantesRetencion
{
    public partial class header : System.Web.UI.Page
    {
        public Producto prodCon = new Producto();

        protected void Page_Load(object sender, EventArgs e)
        {

        }

        protected void btnvalidar_Click(object sender, EventArgs e)
        {
            Productos producto = prodCon.GetProductoxId(1);
            nombreCliente.Text = producto.descripcion;
        }
    }
}