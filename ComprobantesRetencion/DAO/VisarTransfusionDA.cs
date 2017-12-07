using Entity;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAO
{
    public class VisarTransfusionDA : SqlHelper
    {
        int tipo_valor = 1;

        public List<TecnicoBE> lstTecnico()
        {
            List<TecnicoBE> oListaTecnicoBE = new List<TecnicoBE>();

            return oListaTecnicoBE;
        }

        public List<SolicitudTransfusionBE> lstSolicitudTransfusionBE()
        {
            List<SolicitudTransfusionBE> oListaSolicitudTransfusionBE = new List<SolicitudTransfusionBE>();



            return oListaSolicitudTransfusionBE;
        }

        public List<SolicitudTransfusionBE> lstTranfusionesByParametersBE(string fechainicio, string fechafin, int idestado)
        {
            SqlCommand cmd = new SqlCommand("pr_GetListadoVisarSolicitudTransfusion");
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add("@IdEstado", SqlDbType.Int, 1).Value = idestado;
            cmd.Parameters.Add("@FechaInicio", SqlDbType.VarChar, 20).Value = fechainicio;
            cmd.Parameters.Add("@FechaFinal", SqlDbType.VarChar, 20).Value = fechafin;

            SqlDataReader reader = ExecuteReader(cmd, tipo_valor);
            List<SolicitudTransfusionBE> lista = new List<SolicitudTransfusionBE>();
            if (reader.HasRows)
            {
            while (reader.Read())
            {
                SolicitudTransfusionBE oSolicitudTransfusionBE = new SolicitudTransfusionBE();

                    oSolicitudTransfusionBE.codSolicitud = ((!reader[0].Equals(DBNull.Value)) ? reader.GetInt32(0) : 0);
                    oSolicitudTransfusionBE.nroSolicitud = ((!reader[1].Equals(DBNull.Value)) ? reader.GetString(1).ToUpper() : "");
                    oSolicitudTransfusionBE.motivoTransfusion = ((!reader[2].Equals(DBNull.Value)) ? reader.GetString(2).ToUpper() : "");
                    oSolicitudTransfusionBE.desEstado = ((!reader[3].Equals(DBNull.Value)) ? reader.GetString(3).ToUpper() : "");
                    oSolicitudTransfusionBE.estado = ((!reader[4].Equals(DBNull.Value)) ? reader.GetString(4).ToUpper() : "");
                    oSolicitudTransfusionBE.fechaRegistro = ((!reader[5].Equals(DBNull.Value)) ? reader.GetString(5).ToUpper() : "");
                    oSolicitudTransfusionBE.fechaModificacion = ((!reader[6].Equals(DBNull.Value)) ? reader.GetString(6).ToUpper() : "");
                    oSolicitudTransfusionBE.codEstado = ((!reader[7].Equals(DBNull.Value)) ? reader.GetInt32(7).ToString() : "");
                oSolicitudTransfusionBE.codOrdenMedica = ((!reader[8].Equals(DBNull.Value)) ? reader.GetInt32(8) : 0);
                oSolicitudTransfusionBE.nroOrdenMedica = ((!reader[9].Equals(DBNull.Value)) ? reader.GetString(9).ToUpper() : "");
                oSolicitudTransfusionBE.peso = ((!reader[10].Equals(DBNull.Value)) ? reader.GetString(10).ToUpper() : "");
                oSolicitudTransfusionBE.nroHistoriaClinica = ((!reader[11].Equals(DBNull.Value)) ? reader.GetString(11).ToUpper() : "");
                oSolicitudTransfusionBE.dolencia = ((!reader[12].Equals(DBNull.Value)) ? reader.GetString(12).ToUpper() : "");
                oSolicitudTransfusionBE.edad = ((!reader[13].Equals(DBNull.Value)) ? reader.GetString(13).ToUpper() : "");
                oSolicitudTransfusionBE.paciente = ((!reader[14].Equals(DBNull.Value)) ? reader.GetString(14).ToUpper() : "");
                oSolicitudTransfusionBE.sexo = ((!reader[15].Equals(DBNull.Value)) ? reader.GetString(15).ToUpper() : "");
                lista.Add(oSolicitudTransfusionBE);
            }
            reader.Close();

            return lista;
            }
            else {
                lista = null;
            }
            return lista;

        }


        public VisarSolicitudTransfusionBE GetDatosSolicitudTransfusion(int IdSolicitud)
        {
            VisarSolicitudTransfusionBE oSolicitudTransfusion = new VisarSolicitudTransfusionBE();

            try
            {
                SqlCommand cmd = new SqlCommand("pr_GetVisarSolicitudTransfusion");
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.Add("@IdSolicitud", SqlDbType.Int, 14).Value = IdSolicitud;

                SqlDataReader reader = ExecuteReader(cmd, tipo_valor);
                //while (reader.Read())
                //{
                if (reader != null)
                {
                    reader.Read();
                    oSolicitudTransfusion.codSolicitud = ((!reader[0].Equals(DBNull.Value)) ? reader.GetInt32(0) : 0);
                    oSolicitudTransfusion.nroSolicitud = ((!reader[1].Equals(DBNull.Value)) ? reader.GetString(1) : "");
                    oSolicitudTransfusion.codOrdenMedica = ((!reader[2].Equals(DBNull.Value)) ? reader.GetInt32(2) : 0);
                    oSolicitudTransfusion.nroOrdenMedica = ((!reader[3].Equals(DBNull.Value)) ? reader.GetString(3) : "");
                    oSolicitudTransfusion.motivo = ((!reader[4].Equals(DBNull.Value)) ? reader.GetString(4) : "");
                    oSolicitudTransfusion.estado = ((!reader[5].Equals(DBNull.Value)) ? reader.GetString(5) : "");
                    if (!reader[6].Equals(DBNull.Value)) oSolicitudTransfusion.fechaRegistro = reader.GetDateTime(6).ToString("dd/MM/yyyy");
                    oSolicitudTransfusion.paciente = ((!reader[7].Equals(DBNull.Value)) ? reader.GetString(7).ToUpper() : "");
                    oSolicitudTransfusion.sexo = ((!reader[8].Equals(DBNull.Value)) ? reader.GetString(8) : "");
                    if (!reader[9].Equals(DBNull.Value)) oSolicitudTransfusion.nacimiento = reader.GetDateTime(9).ToString("dd/MM/yyyy");
                    oSolicitudTransfusion.edad = ((!reader[10].Equals(DBNull.Value)) ? reader[10].ToString() : "");
                    oSolicitudTransfusion.peso = ((!reader[11].Equals(DBNull.Value)) ? reader[11].ToString() : "");
                    oSolicitudTransfusion.medico = ((!reader[12].Equals(DBNull.Value)) ? reader[12].ToString().ToUpper() : "");
                }
                reader.Close();

        }
        catch (Exception e)
        {
            return oSolicitudTransfusion;
        }

        return oSolicitudTransfusion;
    }

        public List<HemocomponenteBE> GetDatosSolicitudHemocomponentes(int IdSolicitud)
        {
            List<HemocomponenteBE> oListaHemocomponenteBE = new List<HemocomponenteBE>();
            HemocomponenteBE oHemocomponenteBE;
            try
            {
                SqlCommand cmd = new SqlCommand("pr_GetHemocomponentesSolicitudTransfusion");
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.Add("@IdSolicitud", SqlDbType.Int, 14).Value = IdSolicitud;

                SqlDataReader reader = ExecuteReader(cmd, tipo_valor);
                while (reader.Read())
                {
                    oHemocomponenteBE = new HemocomponenteBE();

                    oHemocomponenteBE.codigo = ((!reader[0].Equals(DBNull.Value)) ? reader[0].ToString() : "0");
                    oHemocomponenteBE.descripcion = ((!reader[1].Equals(DBNull.Value)) ? reader[1].ToString().ToUpper() : "SIN ESPECIFICAR");
                    oHemocomponenteBE.globulosRojos = ((!reader[2].Equals(DBNull.Value)) ? reader[2].ToString() : "0");
                    oHemocomponenteBE.cantidadRequerida = ((!reader[3].Equals(DBNull.Value)) ? reader[3].ToString() : "0");

                    oListaHemocomponenteBE.Add(oHemocomponenteBE);
                }
                reader.Close();

            }
            catch (Exception e)
            {
                return null;
            }

            return oListaHemocomponenteBE;
        }

        public string visarSolicitudTransfusion(int IdSolicitud, int IdEstado)
        {
            string xValor = "";

            try
            {
                SqlParameter[] paramsToStore = new SqlParameter[2];
                paramsToStore[0] = new SqlParameter("@IdSolicitud", SqlDbType.Int);
                paramsToStore[0].Value = IdSolicitud;

                paramsToStore[1] = new SqlParameter("@IdEstado", SqlDbType.Int);
                paramsToStore[1].Value = IdEstado;

                using (SqlDataReader reader = SqlHelper.ExecuteReader(GetConexion(), CommandType.StoredProcedure, "pr_VisarSolicitudTransfusion", paramsToStore))
                {

                    xValor = "OK";
                }
            }
            catch (Exception ex)
            {
                xValor = "EXCEPCION";
            }

            return xValor;
        }

        public List<OrdenMedicaBE> lstOrdenMedica()
        {
            List<OrdenMedicaBE> oListaOrdenMedicaBE = new List<OrdenMedicaBE>();

            return oListaOrdenMedicaBE;
        }


        public List<HemocomponenteBE> lstHemocomponente()
        {
            List<HemocomponenteBE> oListaHemocomponenteBE = new List<HemocomponenteBE>();

            return oListaHemocomponenteBE;
        }

        public string insTransfucion(SolicitudTransfusionBE oTransfusionBE)
        {
            string xValor = "";

            try
            {
                SqlParameter[] paramsToStore = new SqlParameter[15];
                paramsToStore[0] = new SqlParameter("@idSolicitud", SqlDbType.Int);
                paramsToStore[0].Value = oTransfusionBE.codSolicitud;
                paramsToStore[1] = new SqlParameter("@estado", SqlDbType.Int);
                paramsToStore[1].Value = oTransfusionBE.estado;
                paramsToStore[2] = new SqlParameter("@motivo", SqlDbType.VarChar,100);
                paramsToStore[2].Value = oTransfusionBE.motivo;
                paramsToStore[3] = new SqlParameter("@idOrdenMedica", SqlDbType.Int);
                paramsToStore[3].Value = oTransfusionBE.codOrdenMedica;
                paramsToStore[4] = new SqlParameter("@idtecnico", SqlDbType.Int);
                paramsToStore[4].Value = oTransfusionBE.codTecnico;
            
                using (SqlDataReader reader = SqlHelper.ExecuteReader(GetConexion(), CommandType.StoredProcedure, "UPS_INS_SOLICITUDTRAN", paramsToStore))
                {
                   
                    xValor = "OK";    
                }
            }
            catch (Exception ex)
            {
                xValor = "EXCEPCION";                
            }

            return xValor;
        }

        public string insDetalleTransfucion(DetalleSolicitudTranfusion oDetalleSolicitudTranfusion)
        {
            string xValor = "";

            try
            {
                SqlParameter[] paramsToStore = new SqlParameter[15];
                paramsToStore[0] = new SqlParameter("@idSolicitud", SqlDbType.Int);
                paramsToStore[0].Value = oDetalleSolicitudTranfusion.codSolicitud;
                paramsToStore[1] = new SqlParameter("@idHemocomponente", SqlDbType.Int);
                paramsToStore[1].Value = oDetalleSolicitudTranfusion.codHemocomponente;
                paramsToStore[2] = new SqlParameter("@cant", SqlDbType.Int);
                paramsToStore[2].Value = oDetalleSolicitudTranfusion.cant;

                using (SqlDataReader reader = SqlHelper.ExecuteReader(GetConexion(), CommandType.StoredProcedure, "USP_INSDETALLE_SOLI", paramsToStore))
                {
                    xValor = "OK";
                }
            }
            catch (Exception ex)
            {
                xValor = "EXCEPCION";
            }

            return xValor;
        }

        private string GetConexion()
        {
            return ConfigurationManager.ConnectionStrings["conexionBV"].ConnectionString;
        }

        public DatosClinicaBE lstDatos()
        {

            DatosClinicaBE oDatosClinicaBE = new DatosClinicaBE();

            List<TecnicoBE> oListaTecnico = new List<TecnicoBE>();
            List<OrdenMedicaBE> oListaOrdenmedica = new List<OrdenMedicaBE>();
            List<HemocomponenteBE> oListaHemocomponenteBE = new List<HemocomponenteBE>();


            try
            {

                using (SqlDataReader reader = SqlHelper.ExecuteReader(GetConexion(), CommandType.StoredProcedure, "USP_LSTDATOS"))
                {
                    //Carga tecnico

                    while (reader.Read())
                    {
                        TecnicoBE p = new TecnicoBE()
                        {
                            codTecnico = ((!reader[0].Equals(DBNull.Value)) ? reader.GetInt32(0) : 0),
                            nombre = ((!reader[1].Equals(DBNull.Value)) ? reader.GetString(1) : ""),
                            estado = ((!reader[2].Equals(DBNull.Value)) ? reader.GetInt32(2) : 0),

                        };

                        oListaTecnico.Add(p);
                    }

                    //Carga Extracargos NO Automaticos 

                    reader.NextResult();


                    while (reader.Read())
                    {
                        OrdenMedicaBE v = new OrdenMedicaBE()
                        {
                            codOrden = ((!reader[0].Equals(DBNull.Value)) ? reader.GetInt32(0) : 0),
                            codigoOrden = ((!reader[1].Equals(DBNull.Value)) ? reader.GetString(1) : ""),
                            codPaciente = ((!reader[2].Equals(DBNull.Value)) ? reader.GetInt32(2) : 0),
                            paciente = ((!reader[3].Equals(DBNull.Value)) ? reader.GetString(3) : ""),
                            fecha = ((!reader[4].Equals(DBNull.Value)) ? reader.GetString(4) : ""),
                            estado = ((!reader[5].Equals(DBNull.Value)) ? reader.GetInt32(5) : 0),
                            edad = ((!reader[6].Equals(DBNull.Value)) ? reader.GetInt32(6) : 0),
                            peso = ((!reader[7].Equals(DBNull.Value)) ? reader.GetInt32(7) : 0),
                            sexo = ((!reader[8].Equals(DBNull.Value)) ? reader.GetString(8) : ""),
                            hclinica = ((!reader[9].Equals(DBNull.Value)) ? reader.GetString(9) : "")
                        };
                        oListaOrdenmedica.Add(v);
                    }

                    //Carga variables de salida 
                    reader.NextResult();


                    while (reader.Read())
                    {
                        HemocomponenteBE v = new HemocomponenteBE()
                        {

                            codHemocomponente = ((!reader[0].Equals(DBNull.Value)) ? reader.GetInt32(0) : 0),
                            codigo = ((!reader[1].Equals(DBNull.Value)) ? reader.GetString(1) : ""),
                            descripcion = ((!reader[2].Equals(DBNull.Value)) ? reader.GetString(2) : ""),
                            estado = ((!reader[3].Equals(DBNull.Value)) ? reader.GetInt32(3) : 0)

                        };
                        oListaHemocomponenteBE.Add(v);
                    }

                    reader.NextResult();

                    while (reader.Read())
                    {

                        oDatosClinicaBE.codigo = ((!reader[0].Equals(DBNull.Value)) ? reader.GetInt32(0) : 0);
                        oDatosClinicaBE.fechaactual = ((!reader[1].Equals(DBNull.Value)) ? reader.GetString(1) : "");
                    }
                }


            }
            catch (Exception e)
            {

            }

            oDatosClinicaBE.oListaTecnicoBE = oListaTecnico;
            oDatosClinicaBE.oListaOrdenMedicaBE = oListaOrdenmedica;
            oDatosClinicaBE.oListaHemocomponenteBE = oListaHemocomponenteBE;

            return oDatosClinicaBE;
        }

        public List<OrdenMedicaBE> lstOrden(string fechaini, string fechafin, string codigo)
        {
            
            List<OrdenMedicaBE> oListaOrdenmedica = new List<OrdenMedicaBE>();
           
            try
            {

                SqlParameter[] paramsToStore = new SqlParameter[15];
                paramsToStore[0] = new SqlParameter("@feachini", SqlDbType.VarChar, 13);
                paramsToStore[0].Value = fechaini;
                paramsToStore[1] = new SqlParameter("@fechfin", SqlDbType.VarChar, 13);
                paramsToStore[1].Value = fechafin;
                paramsToStore[2] = new SqlParameter("@codigoOrden", SqlDbType.VarChar, 50);
                paramsToStore[2].Value = codigo;


                using (SqlDataReader reader = SqlHelper.ExecuteReader(GetConexion(), CommandType.StoredProcedure, "LST_ORDEN", paramsToStore))
                {
                    
                    while (reader.Read())
                    {
                        OrdenMedicaBE v = new OrdenMedicaBE()
                        {
                            codOrden = ((!reader[0].Equals(DBNull.Value)) ? reader.GetInt32(0) : 0),
                            codigoOrden = ((!reader[1].Equals(DBNull.Value)) ? reader.GetString(1) : ""),
                            codPaciente = ((!reader[2].Equals(DBNull.Value)) ? reader.GetInt32(2) : 0),
                            paciente = ((!reader[3].Equals(DBNull.Value)) ? reader.GetString(3) : ""),
                            fecha = ((!reader[4].Equals(DBNull.Value)) ? reader.GetString(4) : ""),
                            estado = ((!reader[5].Equals(DBNull.Value)) ? reader.GetInt32(5) : 0),
                            edad = ((!reader[6].Equals(DBNull.Value)) ? reader.GetInt32(6) : 0),
                            peso = ((!reader[7].Equals(DBNull.Value)) ? reader.GetInt32(7) : 0),
                            sexo = ((!reader[8].Equals(DBNull.Value)) ? reader.GetString(8) : ""),
                            hclinica = ((!reader[9].Equals(DBNull.Value)) ? reader.GetString(9) : "")
                        };
                        oListaOrdenmedica.Add(v);
                    }                      
                }
            }
            catch (Exception e)
            {

            }

            return oListaOrdenmedica;
        }

        public SolicitudTransfusionBE GetQueryCompatibilidadHemocomponentes(int IdSolicitud, int IdTipoSangre, int FactorRH)
        {

            SolicitudTransfusionBE oSolicitudTransfusionBE = new SolicitudTransfusionBE();
            List<HemocomponenteSolicitudBE> oHemocomponenteSolicitudBE = new List<HemocomponenteSolicitudBE>();

            try
            { 
                SqlCommand cmd = new SqlCommand("pr_QueryHemocomponentesCompatibilidad");
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.Add("@IdSolicitud", SqlDbType.Int, 14).Value = IdSolicitud;
                cmd.Parameters.Add("@IdTipoSangre", SqlDbType.Int, 14).Value = IdTipoSangre;
                cmd.Parameters.Add("@Rh", SqlDbType.Int, 14).Value = FactorRH;

                SqlDataReader reader = ExecuteReader(cmd, tipo_valor);

                while (reader.Read())
                {
                    //HemocomponenteSolicitudBE oHemocomponenteSolicitudBE = new HemocomponenteSolicitudBE();

                    //oHemocomponenteSolicitudBE.Codigo = ((!reader[1].Equals(DBNull.Value)) ? reader.GetString(1) : "");
                    //oHemocomponenteSolicitudBE.Hemocomponente = ((!reader[2].Equals(DBNull.Value)) ? reader.GetString(2) : "");
                    //oHemocomponenteSolicitudBE.GlobulosRojos = ((!reader[3].Equals(DBNull.Value)) ? reader.GetString(3) : "");
                    ////if (!reader[4].Equals(DBNull.Value)) oHemocomponenteBE.FechaRegistro = reader.GetDateTime(4);
                    //oHemocomponenteSolicitudBE.IdBancoSangre = ((!reader[4].Equals(DBNull.Value)) ? reader.GetString(4) : "");
                    //oHemocomponenteSolicitudBE.idHemocomponente = ((!reader[5].Equals(DBNull.Value)) ? reader.GetInt32(5) : 0);
                    //oHemocomponenteSolicitudBE.CantidadRequerida = ((!reader[6].Equals(DBNull.Value)) ? reader.GetString(6) : "");
                    //oHemocomponenteSolicitudBE.CantidadAtendida = ((!reader[7].Equals(DBNull.Value)) ? reader.GetString(7) : "");
                    //oHemocomponenteSolicitudBE.cantidadstock = ((!reader[8].Equals(DBNull.Value)) ? reader.GetString(8) : "");
                    //oHemocomponenteSolicitudBE.Compatibilidad = ((!reader[9].Equals(DBNull.Value)) ? reader.GetString(9) : "");

                    //lista.Add(oHemocomponenteBE);

                    HemocomponenteSolicitudBE v = new HemocomponenteSolicitudBE()
                    {
                        codHemocomponente = ((!reader[0].Equals(DBNull.Value)) ? reader.GetSqlInt32(0).ToString() : ""),
                        hemocomponente = ((!reader[1].Equals(DBNull.Value)) ? reader.GetString(1) : ""),
                        cantidadRequerida = ((!reader[2].Equals(DBNull.Value)) ? reader.GetSqlInt32(2).ToString() : ""),
                        cantidadAtendida = ((!reader[3].Equals(DBNull.Value)) ? reader.GetSqlInt32(3).ToString() : ""),
                        codOrdenRequerimiento = ((!reader[4].Equals(DBNull.Value)) ? reader.GetSqlInt32(4).ToString() : ""),
                        codOrdenDonacion = ((!reader[5].Equals(DBNull.Value)) ? reader.GetSqlInt32(5).ToString() : ""),
                        codSolicitudExterna = ((!reader[6].Equals(DBNull.Value)) ? reader.GetSqlInt32(6).ToString() : ""),
                        numero = ((!reader[7].Equals(DBNull.Value)) ? reader.GetString(7) : ""),
                        unidadesCompatibles = ((!reader[8].Equals(DBNull.Value)) ? reader.GetSqlInt32(8).ToString() : ""),
                        compatibilidad = ((!reader[9].Equals(DBNull.Value)) ? reader.GetString(9) : ""),
                        nroOrdenDonacion = ((!reader[10].Equals(DBNull.Value)) ? reader.GetString(10) : ""),
                        nroSolicitudExterna = ((!reader[11].Equals(DBNull.Value)) ? reader.GetString(11) : ""),
                        nroOrdenRequerimiento = ((!reader[12].Equals(DBNull.Value)) ? reader.GetString(12) : ""),
                        estado = ((!reader[13].Equals(DBNull.Value)) ? reader.GetString(13) : ""),
                        nroSolicitud = ((!reader[14].Equals(DBNull.Value)) ? reader.GetString(14) : ""),
                        codSolicitud = ((!reader[15].Equals(DBNull.Value)) ? reader.GetSqlInt32(15).ToString() : "")
                    };

                    oHemocomponenteSolicitudBE.Add(v);

                }
                reader.Close();


            }
            catch (Exception e)
            {

            }

            oSolicitudTransfusionBE.oListaHemocomponenteSolicitudBE = oHemocomponenteSolicitudBE;

            return oSolicitudTransfusionBE;
        }

        public string insOrdenRequerimiento(SolicitudTransfusionBE oSolicitudTransfusionBE)
        {
            string xValor = "";

            try
            {
                SqlParameter[] paramsToStore = new SqlParameter[2];
                paramsToStore[0] = new SqlParameter("@idSolicitud", SqlDbType.Int);
                paramsToStore[0].Direction = ParameterDirection.Input;
                paramsToStore[0].Value = oSolicitudTransfusionBE.codSolicitud;
                paramsToStore[1] = new SqlParameter("@idOrdenRequerimiento", SqlDbType.Int);
                paramsToStore[1].Direction = ParameterDirection.Output;

                using (SqlDataReader reader = SqlHelper.ExecuteReader(GetConexion(), CommandType.StoredProcedure, "UPS_INS_ORDENREQUERIMIENTO", paramsToStore))
                {
                    xValor = "OK";
                }

                int idOrdenRequerimiento = (int)paramsToStore[0].Value;


                for (int i = 0; i < oSolicitudTransfusionBE.oListaHemocomponenteSolicitudBE.Count; i++)
                { 
                    SqlParameter[] paramsToStore1 = new SqlParameter[4];
                    paramsToStore1[0] = new SqlParameter("@idSolicitud", SqlDbType.Int);
                    paramsToStore1[0].Value = oSolicitudTransfusionBE.codSolicitud;
                    paramsToStore1[1] = new SqlParameter("@idHemocomponente", SqlDbType.Int);
                    paramsToStore1[1].Value = oSolicitudTransfusionBE.oListaHemocomponenteSolicitudBE[i].codHemocomponente;
                    paramsToStore1[2] = new SqlParameter("@NroSerie", SqlDbType.VarChar);
                    paramsToStore1[2].Value = oSolicitudTransfusionBE.oListaHemocomponenteSolicitudBE[i].nroSerieUnidad;
                    paramsToStore1[3] = new SqlParameter("@idOrdenRequerimiento", SqlDbType.Int);
                    paramsToStore1[3].Value = idOrdenRequerimiento;

                    using (SqlDataReader reader = SqlHelper.ExecuteReader(GetConexion(), CommandType.StoredProcedure, "UPS_INS_DETALLEORDENREQUERIMIENTO", paramsToStore1))
                    {
                        xValor = "OK";
                    }
                }


            }
            catch (Exception ex)
            {
                xValor = "EXCEPCION";
            }

            return xValor;
        }





        public string insOrndeDonacion(OrdenDonacionBE oOrdenDonacion, List<HemocomponenteSolicitudBE> olistaHemocomponenteSolicitudBE)
        {
            string xValorOrdenDonacion = "";
            string xValor = "";
            SqlParameter[] paramsToStore = new SqlParameter[3];

            try
            {

                paramsToStore[0] = new SqlParameter("@estado", SqlDbType.Int);
                paramsToStore[0].Value = oOrdenDonacion.estado;
                paramsToStore[1] = new SqlParameter("@observacion", SqlDbType.VarChar, 50);
                paramsToStore[1].Value = oOrdenDonacion.observacion;
                paramsToStore[2] = new SqlParameter("@idOrdenDonacion", SqlDbType.Int);
                paramsToStore[2].Direction = ParameterDirection.Output;

                //guarda orden de donacion
                using (SqlDataReader reader = SqlHelper.ExecuteReader(GetConexion(), CommandType.StoredProcedure, "[UPS_INS_ORDEN_DONACION]", paramsToStore))
                {
                    //xValor = "OK";
    }
                int idOrdenDonacion = (int)paramsToStore[2].Value;
                xValorOrdenDonacion = idOrdenDonacion + "";

                //guarda solicitud donacion

                foreach (HemocomponenteSolicitudBE oHemocomponenteSolicitudBE in olistaHemocomponenteSolicitudBE)
                {

                    SqlParameter[] paramsToStoreDetalle = new SqlParameter[15];
                    paramsToStoreDetalle[0] = new SqlParameter("@idSolicitud", SqlDbType.Int);
                    paramsToStoreDetalle[0].Value = 1; //TODO //oHemocomponenteSolicitudBE.idSolicitud;
                    paramsToStoreDetalle[1] = new SqlParameter("@idHemocomponente", SqlDbType.Int);
                    paramsToStoreDetalle[1].Value = oHemocomponenteSolicitudBE.codHemocomponente;
                    paramsToStoreDetalle[2] = new SqlParameter("@idOrdenDonacion", SqlDbType.Int);
                    paramsToStoreDetalle[2].Value = xValorOrdenDonacion;
                    paramsToStoreDetalle[3] = new SqlParameter("@idEstado", SqlDbType.Int);
                    paramsToStoreDetalle[3].Value = oOrdenDonacion.estado;

                    using (SqlDataReader reader = SqlHelper.ExecuteReader(GetConexion(), CommandType.StoredProcedure, "[UPS_INS_HEM_SOLIC]", paramsToStoreDetalle))
                    {

                        xValor = "OK";
                    }
                }


            }
            catch (Exception ex)
            {
                xValor = "EXCEPCION";
            }

            return xValor;
        }


        public string insHemocomponenteSolicitud(HemocomponenteSolicitudBE oHemocomponenteSolicitudBE)
        {
            string xValor = "";

            try
            {
                SqlParameter[] paramsToStore = new SqlParameter[15];
                paramsToStore[0] = new SqlParameter("@idSolicitud", SqlDbType.Int);
                paramsToStore[0].Value = oHemocomponenteSolicitudBE.codSolicitud;
                paramsToStore[1] = new SqlParameter("@idHemocomponente", SqlDbType.Int);
                paramsToStore[1].Value = oHemocomponenteSolicitudBE.codHemocomponente;
                paramsToStore[2] = new SqlParameter("@idOrdenDonacion", SqlDbType.Int);
                paramsToStore[2].Value = oHemocomponenteSolicitudBE.codOrdenDonacion;
                paramsToStore[3] = new SqlParameter("@idEstado", SqlDbType.Int);
                paramsToStore[3].Value = oHemocomponenteSolicitudBE.estado;
                /*
                paramsToStore[3] = new SqlParameter("@idOrdenMedica", SqlDbType.Int);
                paramsToStore[3].Value = oOrdenDonacion.idOrdenMedica;
                paramsToStore[4] = new SqlParameter("@idtecnico", SqlDbType.Int);
                paramsToStore[4].Value = oOrdenDonacion.idtecnico;*/

                using (SqlDataReader reader = SqlHelper.ExecuteReader(GetConexion(), CommandType.StoredProcedure, "[UPS_INS_HEM_SOLIC]", paramsToStore))
                {

                    xValor = "OK";
                }
            }
            catch (Exception ex)
            {
                xValor = "EXCEPCION";
            }

            return xValor;
        }
    
    }

}
