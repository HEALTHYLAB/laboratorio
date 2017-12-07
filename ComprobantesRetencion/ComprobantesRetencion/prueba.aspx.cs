using Entity;
using Negocios;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace ComprobantesRetencion
{
    public partial class prueba : System.Web.UI.Page
    {
        //public Retencion cCMS = new Retencion();
        //public Producto prodCon = new Producto();

        //protected void Page_Load(object sender, EventArgs e)
        //{
        //    success_message.Style.Add("display", "none !important");
        //    error_message.Style.Add("display", "none !important");

        //}

        //protected void btnsend_Click(object sender, EventArgs e)
        //{
        //    Productos producto = prodCon.GetProductoxId(1);
        //    /*if (txtDesde.Text == "" && txtHasta.Text == "")
        //    {
        //        success_message.Style.Add("display", "none !important");
        //        error_message.Style.Add("display", "none !important");
        //    }
        //    else
        //    {
        //        List<RetencionHeader> lretencionHeader = cCMS.Retencion_listarWeb(txtDesde.Text, txtHasta.Text, Convert.ToInt32(compañia.SelectedValue));
        //        if (lretencionHeader.Count > 1)
        //        {
        //            int countIni = 0;
        //            foreach (RetencionHeader oHeader in lretencionHeader)
        //            {
        //                countIni++;
        //                string fileName = @"C:\gerson\O-" + oHeader.EmisorNumeroRUC + "-CRE-" + oHeader.Nrodocumento + ".txt"; //Ruta de Datos
        //                FileInfo fi = new FileInfo(fileName);

        //                // Check if file already exists. If yes, delete it. 
        //                if (fi.Exists)
        //                {
        //                    fi.Delete();
        //                }
        //                try
        //                {
        //                    // Create a new file 
        //                    using (StreamWriter sw = fi.CreateText())
        //                    {

        //                        sw.WriteLine("{0}|{1}|{2}|{3}|{4}|{5}|{6}|{7}|", "DOC", "20", oHeader.Nrodocumento, oHeader.FechaEmision.ToString("yyyy-MM-dd"), oHeader.RegimenRetencion, oHeader.TasaRetencion, oHeader.Moneda, oHeader.TipoCambio);
        //                        sw.WriteLine("{0}|{1}|{2}|{3}|{4}|{5}|{6}|{7}|{8}|{9}|{10}|{11}|", "EMS", oHeader.EmisorTipoDocumento, oHeader.EmisorNumeroRUC, oHeader.RazonSocial, oHeader.NombreComercial, oHeader.Ubigeo, oHeader.Direccion, oHeader.Urbanizacion, oHeader.Distrito, oHeader.Provincia, oHeader.Departamento, oHeader.Pais);
        //                        sw.WriteLine("{0}|{1}|{2}|{3}|{4}|{5}|{6}|{7}|{8}|{9}|{10}|{11}|{12}|{13}|", "ADQ", oHeader.TipoDocIdentidad, oHeader.NumeroDocIdentidad, oHeader.ApellidosNombresRazonSocial, oHeader.UbigeoADQ, oHeader.NombreComercialADQ, oHeader.DireccionADQ, oHeader.UrbanizacionADQ, oHeader.DistritoADQ, oHeader.ProvinciaADQ, oHeader.DepartamentoADQ, oHeader.PaisADQ, oHeader.CorreoAdquiriente1, oHeader.CorreoAdquiriente2);

        //                        List<RetencionDetail> lRetencionDetail = cCMS.RetencionDetail_listarWeb(oHeader.Rete_IDE.ToString(), Convert.ToInt32(compañia.SelectedValue));
        //                        int count = 0;
        //                        foreach (RetencionDetail oDetail in lRetencionDetail)
        //                        {
        //                            count++;
        //                            sw.WriteLine("{0}|{1}|{2}|{3}|{4}|{5}|{6}|{7}|{8}|{9}|{10}|{11}|{12}|{13}|{14}|{15}|{16}|{17}|{18}|{19}|", "ITM", count.ToString(), oDetail.tipoDocumentoRelacionado, oDetail.NroDocumentoRelacionado, oDetail.importeTotalDocumentoRelacionado, oDetail.TipoMonedaDocumentoRelacionado, oDetail.FechaEmisionDocumentoRelacionado.ToString("yyyy-MM-dd"), oDetail.FechaPago.ToString("yyyy-MM-dd"), oDetail.NumeroPago, oDetail.ImportePago_SinRetencion, oDetail.MonedaPago, oDetail.ImporteRetenido, oDetail.MonedaImporteRetenido, oDetail.FechaRetencion.ToString("yyyy-MM-dd"), oDetail.ImporteTotalaPagar, oDetail.MonedaMontoNetoPagado, oDetail.MonedaReferenciaTipoDeCambio, oDetail.MonedaObjetivoTasaCambio, oDetail.FactorAplicadoOrigenMonedaDestino, "");
        //                        }
        //                        sw.WriteLine("{0}|{1}|{2}|", "TOT", oHeader.ImporteTotalRetenido, oHeader.ImportetotalPagado);
        //                        sw.WriteLine("{0}|{1}|{2}||||||", "IMP", oHeader.Observaciones, oHeader.MontoenLetras);

        //                    }

        //                    // Write file contents on console. 
        //                    using (StreamReader sr = File.OpenText(fileName))
        //                    {
        //                        string s = "";
        //                        while ((s = sr.ReadLine()) != null)
        //                        {
        //                            Console.WriteLine(s);
        //                        }
        //                    }
        //                }

        //                catch (Exception Ex)
        //                {
        //                    Console.WriteLine(Ex.ToString());
        //                    error_message.Style.Add("display", "block !important");
        //                }
        //            }
        //            success_message.Style.Add("display", "block !important");

        //        }
        //        else
        //        {
        //            error_message.Style.Add("display", "block !important");
        //            txtDesde.Text = "";
        //            txtHasta.Text = "";
        //            compañia.SelectedValue = "";
        //        }
        //        txtDesde.Text = "";
        //        txtHasta.Text = "";
        //        compañia.SelectedValue = "";
        //    }*/
                
        //}
    }
}