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
    public class TransfusionDA : SqlHelper
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
            SqlCommand cmd = new SqlCommand("pr_GetListadoSolicitudTransfusion");
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

                    oSolicitudTransfusionBE.idSolicitud = ((!reader[0].Equals(DBNull.Value)) ? reader.GetInt32(0) : 0);
                    oSolicitudTransfusionBE.NroSolicitud = ((!reader[1].Equals(DBNull.Value)) ? reader.GetString(1) : "");
                    oSolicitudTransfusionBE.MotivoTransfusion = ((!reader[2].Equals(DBNull.Value)) ? reader.GetString(2) : "");
                    oSolicitudTransfusionBE.DesEstado = ((!reader[3].Equals(DBNull.Value)) ? reader.GetString(3) : "");
                    oSolicitudTransfusionBE.Estado = ((!reader[4].Equals(DBNull.Value)) ? reader.GetString(4) : "");
                    oSolicitudTransfusionBE.FechaRegistro = ((!reader[5].Equals(DBNull.Value)) ? reader.GetString(5) : "");
                    oSolicitudTransfusionBE.FechaModificacion = ((!reader[6].Equals(DBNull.Value)) ? reader.GetString(6) : "");
                    oSolicitudTransfusionBE.IdEstado = ((!reader[7].Equals(DBNull.Value)) ? reader.GetInt32(7).ToString() : "");
                    oSolicitudTransfusionBE.idOrdenMedica = ((!reader[8].Equals(DBNull.Value)) ? reader.GetInt32(8) : 0);
                    oSolicitudTransfusionBE.NroOrdenMedica = ((!reader[9].Equals(DBNull.Value)) ? reader.GetString(9) : "");
                    oSolicitudTransfusionBE.Peso = ((!reader[10].Equals(DBNull.Value)) ? reader.GetString(10) : "");
                    oSolicitudTransfusionBE.NroHistoriaClinica = ((!reader[11].Equals(DBNull.Value)) ? reader.GetString(11) : "");
                    oSolicitudTransfusionBE.Dolencia = ((!reader[12].Equals(DBNull.Value)) ? reader.GetString(12) : "");
                    oSolicitudTransfusionBE.Edad = ((!reader[13].Equals(DBNull.Value)) ? reader.GetString(13) : "");
                    oSolicitudTransfusionBE.Paciente = ((!reader[14].Equals(DBNull.Value)) ? reader.GetString(14) : "");
                    oSolicitudTransfusionBE.Sexo = ((!reader[15].Equals(DBNull.Value)) ? reader.GetString(15) : "");
                    lista.Add(oSolicitudTransfusionBE);
                }
                reader.Close();

                return lista;
            }
            else
            {
                lista = null;
            }
            return lista;

        }

        public List<SolicitudTransfusionBE> lstTranfusionesExtByParametersBE(string fechainicio, string fechafin, int idestado)
        {
            SqlCommand cmd = new SqlCommand("[pr_GetListadoSolicitudTransfusionExt]");
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

                    oSolicitudTransfusionBE.idSolicitud = ((!reader[0].Equals(DBNull.Value)) ? reader.GetInt32(0) : 0);
                    oSolicitudTransfusionBE.NroSolicitud = ((!reader[1].Equals(DBNull.Value)) ? reader.GetString(1) : "");
                    oSolicitudTransfusionBE.MotivoTransfusion = ((!reader[2].Equals(DBNull.Value)) ? reader.GetString(2) : "");
                    oSolicitudTransfusionBE.DesEstado = ((!reader[3].Equals(DBNull.Value)) ? reader.GetString(3) : "");
                    oSolicitudTransfusionBE.Estado = ((!reader[4].Equals(DBNull.Value)) ? reader.GetString(4) : "");
                    oSolicitudTransfusionBE.FechaRegistro = ((!reader[5].Equals(DBNull.Value)) ? reader.GetString(5) : "");
                    oSolicitudTransfusionBE.FechaModificacion = ((!reader[6].Equals(DBNull.Value)) ? reader.GetString(6) : "");
                    oSolicitudTransfusionBE.IdEstado = ((!reader[7].Equals(DBNull.Value)) ? reader.GetInt32(7).ToString() : "");
                    oSolicitudTransfusionBE.idOrdenMedica = ((!reader[8].Equals(DBNull.Value)) ? reader.GetInt32(8) : 0);
                    oSolicitudTransfusionBE.NroOrdenMedica = ((!reader[9].Equals(DBNull.Value)) ? reader.GetString(9) : "");
                    oSolicitudTransfusionBE.Peso = ((!reader[10].Equals(DBNull.Value)) ? reader.GetString(10) : "");
                    oSolicitudTransfusionBE.NroHistoriaClinica = ((!reader[11].Equals(DBNull.Value)) ? reader.GetString(11) : "");
                    oSolicitudTransfusionBE.Dolencia = ((!reader[12].Equals(DBNull.Value)) ? reader.GetString(12) : "");
                    oSolicitudTransfusionBE.Edad = ((!reader[13].Equals(DBNull.Value)) ? reader.GetString(13) : "");
                    oSolicitudTransfusionBE.Paciente = ((!reader[14].Equals(DBNull.Value)) ? reader.GetString(14) : "");
                    oSolicitudTransfusionBE.Sexo = ((!reader[15].Equals(DBNull.Value)) ? reader.GetString(15) : "");
                    lista.Add(oSolicitudTransfusionBE);
                }
                reader.Close();

                return lista;
            }
            else
            {
                lista = null;
            }
            return lista;

        }

        public SolicitudTransfusionBE GetDatosSolicitudTransfusion(int IdSolicitud)
        {
            SolicitudTransfusionBE oSolicitudTransfusion = new SolicitudTransfusionBE();
            List<TipoSangreBE> oListaTipoSangreBE = new List<TipoSangreBE>();
            List<FactorRHBE> oListaFactorRHBE = new List<FactorRHBE>();
            List<HemocomponenteSolicitudBE> oListaHemocomponenteSolicitudBE = new List<HemocomponenteSolicitudBE>();

            try
            {
                SqlCommand cmd = new SqlCommand("pr_GetDatosSolicitudTransfusion");
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.Add("@IdSolicitud", SqlDbType.Int, 14).Value = IdSolicitud;


                SqlDataReader reader = ExecuteReader(cmd, tipo_valor);
                //List<SolicitudTransfusionBE> lista = new List<SolicitudTransfusionBE>();
                while (reader.Read())
                {

                    oSolicitudTransfusion.NroSolicitud = ((!reader[1].Equals(DBNull.Value)) ? reader.GetString(1) : "");
                    oSolicitudTransfusion.motivo = ((!reader[2].Equals(DBNull.Value)) ? reader.GetString(2) : "");
                    oSolicitudTransfusion.Estado = ((!reader[3].Equals(DBNull.Value)) ? reader.GetString(3) : "");
                    if (!reader[4].Equals(DBNull.Value)) oSolicitudTransfusion.FechaRegistro = reader.GetString(4);
                    oSolicitudTransfusion.IdEstado = ((!reader[5].Equals(DBNull.Value)) ? reader.GetInt32(5).ToString() : "");
                    oSolicitudTransfusion.IdOrdenMedica = ((!reader[6].Equals(DBNull.Value)) ? reader.GetInt32(6).ToString() : "");
                    oSolicitudTransfusion.NroOrdenMedica = ((!reader[7].Equals(DBNull.Value)) ? reader.GetString(7) : "");
                    oSolicitudTransfusion.Peso = ((!reader[8].Equals(DBNull.Value)) ? reader.GetInt32(8).ToString() : "");
                    oSolicitudTransfusion.NroHistoriaClinica = ((!reader[9].Equals(DBNull.Value)) ? reader.GetString(9) : "");
                    oSolicitudTransfusion.Dolencia = ((!reader[10].Equals(DBNull.Value)) ? reader.GetString(10) : "");
                    oSolicitudTransfusion.Edad = ((!reader[11].Equals(DBNull.Value)) ? reader.GetInt32(11).ToString() : "");
                    oSolicitudTransfusion.Paciente = ((!reader[12].Equals(DBNull.Value)) ? reader.GetString(12) : "");
                    oSolicitudTransfusion.Sexo = ((!reader[13].Equals(DBNull.Value)) ? reader.GetString(13) : "");

                    //lista.Add(oSolicitudTransfusion);
                }

                reader.NextResult();

                while (reader.Read())
                {
                    TipoSangreBE v = new TipoSangreBE()
                    {

                        Codigo = ((!reader[0].Equals(DBNull.Value)) ? reader.GetInt32(0).ToString() : ""),
                        Descripcion = ((!reader[1].Equals(DBNull.Value)) ? reader.GetString(1) : "")

                    };
                    oListaTipoSangreBE.Add(v);
                }

                reader.NextResult();

                while (reader.Read())
                {
                    FactorRHBE v = new FactorRHBE()
                    {

                        Codigo = ((!reader[0].Equals(DBNull.Value)) ? reader.GetSqlInt32(0).ToString() : ""),
                        Descripcion = ((!reader[1].Equals(DBNull.Value)) ? reader.GetString(1) : "")

                    };
                    oListaFactorRHBE.Add(v);
                }

                reader.NextResult();

                while (reader.Read())
                {
                    HemocomponenteSolicitudBE v = new HemocomponenteSolicitudBE()
                    {

                        idHemocomponente = ((!reader[0].Equals(DBNull.Value)) ? reader.GetSqlInt32(0).ToString() : ""),
                        Hemocomponente = ((!reader[1].Equals(DBNull.Value)) ? reader.GetString(1) : ""),
                        CantidadRequerida = ((!reader[2].Equals(DBNull.Value)) ? reader.GetSqlInt32(2).ToString() : ""),
                        CantidadAtendida = ((!reader[3].Equals(DBNull.Value)) ? reader.GetSqlInt32(3).ToString() : ""),
                        IdOrdenRequerimiento = ((!reader[4].Equals(DBNull.Value)) ? reader.GetSqlInt32(4).ToString() : ""),
                        IdOrdenDonacion = ((!reader[5].Equals(DBNull.Value)) ? reader.GetSqlInt32(5).ToString() : ""),
                        IdSolicitudExterna = ((!reader[6].Equals(DBNull.Value)) ? reader.GetSqlInt32(6).ToString() : ""),
                        Numero = ((!reader[7].Equals(DBNull.Value)) ? reader.GetString(7) : ""),
                        UnidadesCompatibles = ((!reader[8].Equals(DBNull.Value)) ? reader.GetSqlInt32(8).ToString() : ""),
                        Compatibilidad = ((!reader[9].Equals(DBNull.Value)) ? reader.GetString(9) : ""),
                        NroOrdenDonacion = ((!reader[10].Equals(DBNull.Value)) ? reader.GetString(10) : ""),
                        NroSolicitudExterna = ((!reader[11].Equals(DBNull.Value)) ? reader.GetString(11) : ""),
                        NroOrdenRequerimiento = ((!reader[12].Equals(DBNull.Value)) ? reader.GetString(12) : ""),
                        Estado = ((!reader[13].Equals(DBNull.Value)) ? reader.GetString(13) : ""),
                        NroSolicitud = ((!reader[14].Equals(DBNull.Value)) ? reader.GetString(14) : "")
                    };
                    /*if (v.CantidadRequerida == "2")
                    {
                        v.Compatibilidad = "Negativo";
                    }
                    else
                    {
                        v.Compatibilidad = "Positivo";
                    }*/

                    oListaHemocomponenteSolicitudBE.Add(v);
                }

                reader.Close();

            }
            catch (Exception e)
            {

            }

            oSolicitudTransfusion.oListaTipoSangreBE = oListaTipoSangreBE;
            oSolicitudTransfusion.oListaFactorRHBE = oListaFactorRHBE;
            oSolicitudTransfusion.oListaHemocomponenteSolicitudBE = oListaHemocomponenteSolicitudBE;

            return oSolicitudTransfusion;

        }

        public SolicitudTransfusionBE GetDatosSolicitudTransfusionExt(int IdSolicitud)
        {
            SolicitudTransfusionBE oSolicitudTransfusion = new SolicitudTransfusionBE();
            List<TipoSangreBE> oListaTipoSangreBE = new List<TipoSangreBE>();
            List<FactorRHBE> oListaFactorRHBE = new List<FactorRHBE>();
            List<HemocomponenteSolicitudBE> oListaHemocomponenteSolicitudBE = new List<HemocomponenteSolicitudBE>();

            try
            {
                SqlCommand cmd = new SqlCommand("[pr_GetDatosSolicitudTransfusionExt]");
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.Add("@IdSolicitudExt", SqlDbType.Int, 14).Value = IdSolicitud;


                SqlDataReader reader = ExecuteReader(cmd, tipo_valor);
                while (reader.Read())
                {
                    oSolicitudTransfusion.idSolicitud = ((!reader[0].Equals(DBNull.Value)) ? reader.GetInt32(0) : 0);
                    oSolicitudTransfusion.NroSolicitud = ((!reader[1].Equals(DBNull.Value)) ? reader.GetString(1) : "");
                    oSolicitudTransfusion.motivo = ((!reader[2].Equals(DBNull.Value)) ? reader.GetString(2) : "");
                    oSolicitudTransfusion.Estado = ((!reader[3].Equals(DBNull.Value)) ? reader.GetString(3) : "");
                    if (!reader[4].Equals(DBNull.Value)) oSolicitudTransfusion.FechaRegistro = reader.GetString(4);
                    oSolicitudTransfusion.IdEstado = ((!reader[5].Equals(DBNull.Value)) ? reader.GetInt32(5).ToString() : "");
                    oSolicitudTransfusion.IdOrdenMedica = ((!reader[6].Equals(DBNull.Value)) ? reader.GetInt32(6).ToString() : "");
                    oSolicitudTransfusion.NroOrdenMedica = ((!reader[7].Equals(DBNull.Value)) ? reader.GetString(7) : "");
                    oSolicitudTransfusion.Peso = ((!reader[8].Equals(DBNull.Value)) ? reader.GetInt32(8).ToString() : "");
                    oSolicitudTransfusion.NroHistoriaClinica = ((!reader[9].Equals(DBNull.Value)) ? reader.GetString(9) : "");
                    oSolicitudTransfusion.Dolencia = ((!reader[10].Equals(DBNull.Value)) ? reader.GetString(10) : "");
                    oSolicitudTransfusion.Edad = ((!reader[11].Equals(DBNull.Value)) ? reader.GetInt32(11).ToString() : "");
                    oSolicitudTransfusion.Paciente = ((!reader[12].Equals(DBNull.Value)) ? reader.GetString(12) : "");
                    oSolicitudTransfusion.Sexo = ((!reader[13].Equals(DBNull.Value)) ? reader.GetString(13) : "");
                }

                reader.NextResult();

                while (reader.Read())
                {
                    TipoSangreBE v = new TipoSangreBE()
                    {

                        Codigo = ((!reader[0].Equals(DBNull.Value)) ? reader.GetInt32(0).ToString() : ""),
                        Descripcion = ((!reader[1].Equals(DBNull.Value)) ? reader.GetString(1) : "")

                    };
                    oListaTipoSangreBE.Add(v);
                }

                reader.NextResult();

                while (reader.Read())
                {
                    FactorRHBE v = new FactorRHBE()
                    {

                        Codigo = ((!reader[0].Equals(DBNull.Value)) ? reader.GetSqlInt32(0).ToString() : ""),
                        Descripcion = ((!reader[1].Equals(DBNull.Value)) ? reader.GetString(1) : "")

                    };
                    oListaFactorRHBE.Add(v);
                }

                reader.NextResult();

                while (reader.Read())
                {
                    HemocomponenteSolicitudBE v = new HemocomponenteSolicitudBE()
                    {

                        idHemocomponente = ((!reader[0].Equals(DBNull.Value)) ? reader.GetSqlInt32(0).ToString() : ""),
                        Hemocomponente = ((!reader[1].Equals(DBNull.Value)) ? reader.GetString(1) : ""),
                        CantidadRequerida = ((!reader[2].Equals(DBNull.Value)) ? reader.GetSqlInt32(2).ToString() : ""),
                        CantidadAtendida = ((!reader[3].Equals(DBNull.Value)) ? reader.GetSqlInt32(3).ToString() : ""),
                        IdOrdenRequerimiento = ((!reader[4].Equals(DBNull.Value)) ? reader.GetSqlInt32(4).ToString() : ""),
                        IdOrdenDonacion = ((!reader[5].Equals(DBNull.Value)) ? reader.GetSqlInt32(5).ToString() : ""),
                        IdSolicitudExterna = ((!reader[6].Equals(DBNull.Value)) ? reader.GetSqlInt32(6).ToString() : ""),
                        Numero = ((!reader[7].Equals(DBNull.Value)) ? reader.GetString(7) : ""),
                        UnidadesCompatibles = ((!reader[8].Equals(DBNull.Value)) ? reader.GetSqlInt32(8).ToString() : ""),
                        Compatibilidad = ((!reader[9].Equals(DBNull.Value)) ? reader.GetString(9) : ""),
                        NroOrdenDonacion = ((!reader[10].Equals(DBNull.Value)) ? reader.GetString(10) : ""),
                        NroSolicitudExterna = ((!reader[11].Equals(DBNull.Value)) ? reader.GetString(11) : ""),
                        NroOrdenRequerimiento = ((!reader[12].Equals(DBNull.Value)) ? reader.GetString(12) : ""),
                        Estado = ((!reader[13].Equals(DBNull.Value)) ? reader.GetString(13) : ""),
                        NroSolicitud = ((!reader[14].Equals(DBNull.Value)) ? reader.GetString(14) : "")
                    };

                    oListaHemocomponenteSolicitudBE.Add(v);
                }

                reader.Close();

            }
            catch (Exception e)
            {

            }

            oSolicitudTransfusion.oListaTipoSangreBE = oListaTipoSangreBE;
            oSolicitudTransfusion.oListaFactorRHBE = oListaFactorRHBE;
            oSolicitudTransfusion.oListaHemocomponenteSolicitudBE = oListaHemocomponenteSolicitudBE;

            return oSolicitudTransfusion;

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
                paramsToStore[0].Value = oTransfusionBE.idSolicitud;
                paramsToStore[1] = new SqlParameter("@estado", SqlDbType.Int);
                paramsToStore[1].Value = oTransfusionBE.estado;
                paramsToStore[2] = new SqlParameter("@motivo", SqlDbType.VarChar, 100);
                paramsToStore[2].Value = oTransfusionBE.motivo;
                paramsToStore[3] = new SqlParameter("@idOrdenMedica", SqlDbType.Int);
                paramsToStore[3].Value = oTransfusionBE.idOrdenMedica;
                paramsToStore[4] = new SqlParameter("@idtecnico", SqlDbType.Int);
                paramsToStore[4].Value = oTransfusionBE.idtecnico;

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

        public string insTransfucionEmergencia(SolicitudTransfusionBE oTransfusionBE)
        {
            string xValor = "";

            try
            {
                SqlParameter[] paramsToStore = new SqlParameter[15];
                paramsToStore[0] = new SqlParameter("@idSolicitud", SqlDbType.Int);
                paramsToStore[0].Value = oTransfusionBE.idSolicitud;
                paramsToStore[1] = new SqlParameter("@estado", SqlDbType.Int);
                paramsToStore[1].Value = oTransfusionBE.estado;
                paramsToStore[2] = new SqlParameter("@motivo", SqlDbType.VarChar, 4000);
                paramsToStore[2].Value = oTransfusionBE.motivo;
                //paramsToStore[3] = new SqlParameter("@idOrdenMedica", SqlDbType.Int);
                //paramsToStore[3].Value = oTransfusionBE.idOrdenMedica;
                paramsToStore[3] = new SqlParameter("@idTecnico", SqlDbType.Int);
                paramsToStore[3].Value = oTransfusionBE.idtecnico;
                paramsToStore[4] = new SqlParameter("@idPaciente", SqlDbType.Int);
                paramsToStore[4].Value = oTransfusionBE.IdPaciente;
                paramsToStore[5] = new SqlParameter("@idFactorRH", SqlDbType.Int);
                paramsToStore[5].Value = oTransfusionBE.idTipoFactorRH;
                paramsToStore[6] = new SqlParameter("@idTipoSangre", SqlDbType.Int);
                paramsToStore[6].Value = oTransfusionBE.idTipoSangre;

                using (SqlDataReader reader = SqlHelper.ExecuteReader(GetConexion(), CommandType.StoredProcedure, "UPS_INS_SOLICITUDTRAN_EMERGENCIA", paramsToStore))
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


        public string insRegistroPaciente(PacienteBE oPaciente)
        {
            string xValor = "";

            try
            {
                SqlParameter[] paramsToStore = new SqlParameter[15];
                paramsToStore[0] = new SqlParameter("@nombres", SqlDbType.VarChar, 500);
                paramsToStore[0].Value = oPaciente.nombres;
                paramsToStore[1] = new SqlParameter("@apellidoPaterno", SqlDbType.VarChar, 500);
                paramsToStore[1].Value = oPaciente.apellidoPaterno;
                paramsToStore[2] = new SqlParameter("@apellidoMaterno", SqlDbType.VarChar, 500);
                paramsToStore[2].Value = oPaciente.apellidoMaterno;
                paramsToStore[3] = new SqlParameter("@sexo", SqlDbType.VarChar, 1);
                paramsToStore[3].Value = oPaciente.sexo;
                paramsToStore[4] = new SqlParameter("@FechaNacimiento", SqlDbType.Date);
                paramsToStore[4].Value = oPaciente.FechaNacimiento;
                paramsToStore[5] = new SqlParameter("@IdTipoDocumentoIdentidad", SqlDbType.Int);
                paramsToStore[5].Value = oPaciente.IdTipoDocumentoIdentidad;
                paramsToStore[6] = new SqlParameter("@NroDocumentoIdenidad", SqlDbType.VarChar, 15);
                paramsToStore[6].Value = oPaciente.NroDocumentoIdenidad;

                using (SqlDataReader reader = SqlHelper.ExecuteReader(GetConexion(), CommandType.StoredProcedure, "UPS_INS_REGISTRO_PACIENTE", paramsToStore))
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
                paramsToStore[0].Value = oDetalleSolicitudTranfusion.idSolicitud;
                paramsToStore[1] = new SqlParameter("@idHemocomponente", SqlDbType.Int);
                paramsToStore[1].Value = oDetalleSolicitudTranfusion.idHemocomponente;
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

        public string insDetalleTransfucionEmergencia(DetalleSolicitudTranfusion oDetalleSolicitudTranfusion)
        {
            string xValor = "";

            try
            {
                SqlParameter[] paramsToStore = new SqlParameter[15];
                paramsToStore[0] = new SqlParameter("@idSolicitud", SqlDbType.Int);
                paramsToStore[0].Value = oDetalleSolicitudTranfusion.idSolicitud;
                paramsToStore[1] = new SqlParameter("@idHemocomponente", SqlDbType.Int);
                paramsToStore[1].Value = oDetalleSolicitudTranfusion.idHemocomponente;
                paramsToStore[2] = new SqlParameter("@cant", SqlDbType.Int);
                paramsToStore[2].Value = oDetalleSolicitudTranfusion.cant;

                using (SqlDataReader reader = SqlHelper.ExecuteReader(GetConexion(), CommandType.StoredProcedure, "USP_INSDETALLE_SOLI_EMERGENCIA", paramsToStore))
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
            return ConfigurationManager.ConnectionStrings["cnnRP"].ConnectionString;
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
                            IdTecnico = ((!reader[0].Equals(DBNull.Value)) ? reader.GetInt32(0) : 0),
                            Nombre = ((!reader[1].Equals(DBNull.Value)) ? reader.GetString(1) : ""),
                            Estado = ((!reader[2].Equals(DBNull.Value)) ? reader.GetInt32(2) : 0),

                        };

                        oListaTecnico.Add(p);
                    }

                    //Carga Extracargos NO Automaticos 

                    reader.NextResult();


                    while (reader.Read())
                    {
                        OrdenMedicaBE v = new OrdenMedicaBE()
                        {
                            idOrden = ((!reader[0].Equals(DBNull.Value)) ? reader.GetInt32(0) : 0),
                            codigoOrden = ((!reader[1].Equals(DBNull.Value)) ? reader.GetString(1) : ""),
                            idPaciente = ((!reader[2].Equals(DBNull.Value)) ? reader.GetInt32(2) : 0),
                            Paciente = ((!reader[3].Equals(DBNull.Value)) ? reader.GetString(3) : ""),
                            fecha = ((!reader[4].Equals(DBNull.Value)) ? reader.GetString(4) : ""),
                            Estado = ((!reader[5].Equals(DBNull.Value)) ? reader.GetInt32(5) : 0),
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

                            IdHemocomponente = ((!reader[0].Equals(DBNull.Value)) ? reader.GetInt32(0) : 0),
                            Codigo = ((!reader[1].Equals(DBNull.Value)) ? reader.GetString(1) : ""),
                            Descripcion = ((!reader[2].Equals(DBNull.Value)) ? reader.GetString(2) : ""),
                            Estado = ((!reader[3].Equals(DBNull.Value)) ? reader.GetInt32(3) : 0)

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



        public DatosClinicaBE lstDatosEmergencia()
        {

            DatosClinicaBE oDatosClinicaBE = new DatosClinicaBE();

            List<TecnicoBE> oListaTecnico = new List<TecnicoBE>();
            List<OrdenMedicaBE> oListaOrdenmedica = new List<OrdenMedicaBE>();
            List<HemocomponenteBE> oListaHemocomponenteBE = new List<HemocomponenteBE>();
            List<PacienteBE> oListaPaciente = new List<PacienteBE>();
            List<TipoBE> oListaTipoRH = new List<TipoBE>();
            List<TipoBE> oListaTipoSangre = new List<TipoBE>();
            try
            {

                using (SqlDataReader reader = SqlHelper.ExecuteReader(GetConexion(), CommandType.StoredProcedure, "USP_LSTDATOS_SOLICITUD_EMERGENCIA"))
                {
                    //Carga tecnico

                    while (reader.Read())
                    {
                        TecnicoBE p = new TecnicoBE()
                        {
                            IdTecnico = ((!reader[0].Equals(DBNull.Value)) ? reader.GetInt32(0) : 0),
                            Nombre = ((!reader[1].Equals(DBNull.Value)) ? reader.GetString(1) : ""),
                            Estado = ((!reader[2].Equals(DBNull.Value)) ? reader.GetInt32(2) : 0),

                        };

                        oListaTecnico.Add(p);
                    }

                    //Carga Extracargos NO Automaticos 

                    reader.NextResult();


                    while (reader.Read())
                    {
                        OrdenMedicaBE v = new OrdenMedicaBE()
                        {
                            idOrden = ((!reader[0].Equals(DBNull.Value)) ? reader.GetInt32(0) : 0),
                            codigoOrden = ((!reader[1].Equals(DBNull.Value)) ? reader.GetString(1) : ""),
                            idPaciente = ((!reader[2].Equals(DBNull.Value)) ? reader.GetInt32(2) : 0),
                            Paciente = ((!reader[3].Equals(DBNull.Value)) ? reader.GetString(3) : ""),
                            fecha = ((!reader[4].Equals(DBNull.Value)) ? reader.GetString(4) : ""),
                            Estado = ((!reader[5].Equals(DBNull.Value)) ? reader.GetInt32(5) : 0),
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

                            IdHemocomponente = ((!reader[0].Equals(DBNull.Value)) ? reader.GetInt32(0) : 0),
                            Codigo = ((!reader[1].Equals(DBNull.Value)) ? reader.GetString(1) : ""),
                            Descripcion = ((!reader[2].Equals(DBNull.Value)) ? reader.GetString(2) : ""),
                            Estado = ((!reader[3].Equals(DBNull.Value)) ? reader.GetInt32(3) : 0)

                        };
                        oListaHemocomponenteBE.Add(v);
                    }

                    reader.NextResult();

                    //Carga Pacientes

                    while (reader.Read())
                    {
                        PacienteBE pc = new PacienteBE()
                        {
                            IdTipoDocumentoIdentidad = ((!reader[0].Equals(DBNull.Value)) ? reader.GetInt32(0) : 0),
                            NroDocumentoIdenidad = ((!reader[1].Equals(DBNull.Value)) ? reader.GetString(1) : ""),
                            nombres = ((!reader[2].Equals(DBNull.Value)) ? reader.GetString(2) : ""),
                            apellidoPaterno = ((!reader[3].Equals(DBNull.Value)) ? reader.GetString(3) : ""),
                            apellidoMaterno = ((!reader[4].Equals(DBNull.Value)) ? reader.GetString(4) : ""),
                            IdPaciente = ((!reader[5].Equals(DBNull.Value)) ? reader.GetInt32(5) : 0)
                        };
                        oListaPaciente.Add(pc);
                    }
                    //Codigo y fecha actual
                    reader.NextResult();

                    while (reader.Read())
                    {

                        oDatosClinicaBE.codigo = ((!reader[0].Equals(DBNull.Value)) ? reader.GetInt32(0) : 0);
                        oDatosClinicaBE.fechaactual = ((!reader[1].Equals(DBNull.Value)) ? reader.GetString(1) : "");
                    }

                    //Factor RH
                    reader.NextResult();

                    while (reader.Read())
                    {
                        TipoBE tipoRH = new TipoBE()
                        {
                            Codigo = ((!reader[0].Equals(DBNull.Value)) ? reader.GetInt32(0) : 0),
                            Descripcion = ((!reader[1].Equals(DBNull.Value)) ? reader.GetString(1) : "")
                        };
                        oListaTipoRH.Add(tipoRH);
                    }

                    //Tipo Sangre
                    reader.NextResult();

                    while (reader.Read())
                    {
                        TipoBE tipoSangre = new TipoBE()
                        {
                            Codigo = ((!reader[0].Equals(DBNull.Value)) ? reader.GetInt32(0) : 0),
                            Descripcion = ((!reader[1].Equals(DBNull.Value)) ? reader.GetString(1) : "")
                        };
                        oListaTipoSangre.Add(tipoSangre);
                    }

                }
            }
            catch (Exception e)
            {
                String error= e + "";
            }

            oDatosClinicaBE.oListaTecnicoBE = oListaTecnico;
            oDatosClinicaBE.oListaOrdenMedicaBE = oListaOrdenmedica;
            oDatosClinicaBE.oListaHemocomponenteBE = oListaHemocomponenteBE;
            oDatosClinicaBE.oListaPaciente = oListaPaciente;
            oDatosClinicaBE.oListaFactorRH = oListaTipoRH;
            oDatosClinicaBE.oListaTipoSangre = oListaTipoSangre;
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
                            idOrden = ((!reader[0].Equals(DBNull.Value)) ? reader.GetInt32(0) : 0),
                            codigoOrden = ((!reader[1].Equals(DBNull.Value)) ? reader.GetString(1) : ""),
                            idPaciente = ((!reader[2].Equals(DBNull.Value)) ? reader.GetInt32(2) : 0),
                            Paciente = ((!reader[3].Equals(DBNull.Value)) ? reader.GetString(3) : ""),
                            fecha = ((!reader[4].Equals(DBNull.Value)) ? reader.GetString(4) : ""),
                            Estado = ((!reader[5].Equals(DBNull.Value)) ? reader.GetInt32(5) : 0),
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
                        idHemocomponente = ((!reader[0].Equals(DBNull.Value)) ? reader.GetSqlInt32(0).ToString() : ""),
                        Hemocomponente = ((!reader[1].Equals(DBNull.Value)) ? reader.GetString(1) : ""),
                        CantidadRequerida = ((!reader[2].Equals(DBNull.Value)) ? reader.GetSqlInt32(2).ToString() : ""),
                        CantidadAtendida = ((!reader[3].Equals(DBNull.Value)) ? reader.GetSqlInt32(3).ToString() : ""),
                        IdOrdenRequerimiento = ((!reader[4].Equals(DBNull.Value)) ? reader.GetSqlInt32(4).ToString() : ""),
                        IdOrdenDonacion = ((!reader[5].Equals(DBNull.Value)) ? reader.GetSqlInt32(5).ToString() : ""),
                        IdSolicitudExterna = ((!reader[6].Equals(DBNull.Value)) ? reader.GetSqlInt32(6).ToString() : ""),
                        Numero = ((!reader[7].Equals(DBNull.Value)) ? reader.GetString(7) : ""),
                        UnidadesCompatibles = ((!reader[8].Equals(DBNull.Value)) ? reader.GetSqlInt32(8).ToString() : ""),
                        Compatibilidad = ((!reader[9].Equals(DBNull.Value)) ? reader.GetString(9) : ""),
                        NroOrdenDonacion = ((!reader[10].Equals(DBNull.Value)) ? reader.GetString(10) : ""),
                        NroSolicitudExterna = ((!reader[11].Equals(DBNull.Value)) ? reader.GetString(11) : ""),
                        NroOrdenRequerimiento = ((!reader[12].Equals(DBNull.Value)) ? reader.GetString(12) : ""),
                        Estado = ((!reader[13].Equals(DBNull.Value)) ? reader.GetString(13) : ""),
                        NroSolicitud = ((!reader[14].Equals(DBNull.Value)) ? reader.GetString(14) : ""),
                        idSolicitud = ((!reader[15].Equals(DBNull.Value)) ? reader.GetSqlInt32(15).ToString() : "")
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
                paramsToStore[0].Value = oSolicitudTransfusionBE.idSolicitud;
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
                    paramsToStore1[0].Value = oSolicitudTransfusionBE.idSolicitud;
                    paramsToStore1[1] = new SqlParameter("@idHemocomponente", SqlDbType.Int);
                    paramsToStore1[1].Value = oSolicitudTransfusionBE.oListaHemocomponenteSolicitudBE[i].idHemocomponente;
                    paramsToStore1[2] = new SqlParameter("@NroSerie", SqlDbType.VarChar);
                    paramsToStore1[2].Value = oSolicitudTransfusionBE.oListaHemocomponenteSolicitudBE[i].NroSerieUnidad;
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
                paramsToStore[0].Value = oOrdenDonacion.Estado;
                paramsToStore[1] = new SqlParameter("@observacion", SqlDbType.VarChar, 50);
                paramsToStore[1].Value = oOrdenDonacion.Observacion;
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
                    paramsToStoreDetalle[1].Value = oHemocomponenteSolicitudBE.idHemocomponente;
                    paramsToStoreDetalle[2] = new SqlParameter("@idOrdenDonacion", SqlDbType.Int);
                    paramsToStoreDetalle[2].Value = xValorOrdenDonacion;
                    paramsToStoreDetalle[3] = new SqlParameter("@idEstado", SqlDbType.Int);
                    paramsToStoreDetalle[3].Value = oOrdenDonacion.Estado;

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
                paramsToStore[0].Value = oHemocomponenteSolicitudBE.idSolicitud;
                paramsToStore[1] = new SqlParameter("@idHemocomponente", SqlDbType.Int);
                paramsToStore[1].Value = oHemocomponenteSolicitudBE.idHemocomponente;
                paramsToStore[2] = new SqlParameter("@idOrdenDonacion", SqlDbType.Int);
                paramsToStore[2].Value = oHemocomponenteSolicitudBE.IdOrdenDonacion;
                paramsToStore[3] = new SqlParameter("@idEstado", SqlDbType.Int);
                paramsToStore[3].Value = oHemocomponenteSolicitudBE.Estado;
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

        public List<BancoBE> getBancosxId(List<int> ids)
        {
            List<BancoBE> result = new List<BancoBE>();
            foreach (var id in ids)
            {
                SqlCommand cmd = new SqlCommand("[pr_LST_BancosXId]");
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.Add("@id", SqlDbType.Int, 1).Value = id;

                SqlDataReader reader = ExecuteReader(cmd, tipo_valor);
                if (reader.HasRows)
                {
                    while (reader.Read())
                    {
                        BancoBE item = new BancoBE();
                        item.id = ((!reader[0].Equals(DBNull.Value)) ? reader.GetInt32(0) : 0);
                        item.descripcion = ((!reader[1].Equals(DBNull.Value)) ? reader.GetString(1) : "");
                        result.Add(item);
                    }
                }
            }

            return result;
        }

        public void updateSolExterna(int idSolicitudExterna, int estado)
        {
            SqlParameter[] paramsToStore = new SqlParameter[2];
            paramsToStore[0] = new SqlParameter("@IdSolicitudExterna", SqlDbType.Int);
            paramsToStore[0].Value = idSolicitudExterna;
            paramsToStore[1] = new SqlParameter("@Estado", SqlDbType.Int);
            paramsToStore[1].Value = estado;

            using (SqlDataReader reader = SqlHelper.ExecuteReader(GetConexion(), CommandType.StoredProcedure, "pr_Update_Sol_ext", paramsToStore))
            {

            }
        }



        public ResultadoPaciente entResultadoByParametersD(string TipoAnalisis, string IdPaciente)
        {
            ResultadoPaciente oResultadoPaciente = new ResultadoPaciente();
            try
            {
                SqlCommand cmd = new SqlCommand("pr_GetEntResultadoAnalisisPorPaciente");
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.Add("@IdTipoAnalisis", SqlDbType.VarChar, 14).Value = TipoAnalisis;
                cmd.Parameters.Add("@IdPaciente", SqlDbType.VarChar, 14).Value = IdPaciente;


                SqlDataReader reader = ExecuteReader(cmd, tipo_valor);
                while (reader.Read())
                {
                    oResultadoPaciente.Id_ResultadoAC = ((!reader[0].Equals(DBNull.Value)) ? reader.GetInt32(0) : 0);
                    oResultadoPaciente.Tipo_Analisis = ((!reader[1].Equals(DBNull.Value)) ? reader.GetString(1) : "");
                    oResultadoPaciente.Fecha_Emision = ((!reader[2].Equals(DBNull.Value)) ? reader.GetString(2) : "");
                    oResultadoPaciente.Valor_Optimo_Final = ((!reader[3].Equals(DBNull.Value)) ? reader.GetString(3) : "");
                    oResultadoPaciente.Valor_Optimo_Final = ((!reader[4].Equals(DBNull.Value)) ? reader.GetString(4) : "");
                    oResultadoPaciente.Tipo_Medida = ((!reader[5].Equals(DBNull.Value)) ? reader.GetString(5) : "");
                    oResultadoPaciente.Resultado = ((!reader[6].Equals(DBNull.Value)) ? reader.GetString(6) : "");
                    oResultadoPaciente.Medico_Solicitante = ((!reader[7].Equals(DBNull.Value)) ? reader.GetString(7).ToString() : "");
                    oResultadoPaciente.Fecha_Solicitud = ((!reader[8].Equals(DBNull.Value)) ? reader.GetString(8) : "");
                    oResultadoPaciente.Id_Estado = ((!reader[9].Equals(DBNull.Value)) ? reader.GetInt32(9) : 0);
                    oResultadoPaciente.Mes = ((!reader[10].Equals(DBNull.Value)) ? reader.GetString(10) : "");
                    oResultadoPaciente.Anio = ((!reader[11].Equals(DBNull.Value)) ? reader.GetString(11) : "");
                    oResultadoPaciente.Paciente = ((!reader[12].Equals(DBNull.Value)) ? reader.GetString(12).ToUpper() : "");
                    oResultadoPaciente.Id_Tipo_Analisis = ((!reader[13].Equals(DBNull.Value)) ? reader.GetString(13) : "");
                    oResultadoPaciente.Valor_Optimo = ((!reader[14].Equals(DBNull.Value)) ? reader.GetString(14) : "");
                    oResultadoPaciente.Id_Paciente = ((!reader[15].Equals(DBNull.Value)) ? reader.GetInt32(15) : 0);
                }
                reader.Close();

            }
            catch
            {

            }
            return oResultadoPaciente;

        }

        public ResultadoPaciente entResultadoByParametersD2(int Id_ResultadoAC)
        {
            ResultadoPaciente oResultadoPaciente = new ResultadoPaciente();
            try
            {
                SqlCommand cmd = new SqlCommand("pr_GetEntResultadoAnalisisPorPaciente2");
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.Add("@Id_ResultadoAC", SqlDbType.Int).Value = Id_ResultadoAC;


                SqlDataReader reader = ExecuteReader(cmd, tipo_valor);
                while (reader.Read())
                {
                    oResultadoPaciente.Id_ResultadoAC = ((!reader[0].Equals(DBNull.Value)) ? reader.GetInt32(0) : 0);
                    oResultadoPaciente.Tipo_Analisis = ((!reader[1].Equals(DBNull.Value)) ? reader.GetString(1) : "");
                    oResultadoPaciente.Fecha_Emision = ((!reader[2].Equals(DBNull.Value)) ? reader.GetString(2) : "");
                    oResultadoPaciente.Valor_Optimo_Final = ((!reader[3].Equals(DBNull.Value)) ? reader.GetString(3) : "");
                    oResultadoPaciente.Valor_Optimo_Final = ((!reader[4].Equals(DBNull.Value)) ? reader.GetString(4) : "");
                    oResultadoPaciente.Tipo_Medida = ((!reader[5].Equals(DBNull.Value)) ? reader.GetString(5) : "");
                    oResultadoPaciente.Resultado = ((!reader[6].Equals(DBNull.Value)) ? reader.GetString(6) : "");
                    oResultadoPaciente.Medico_Solicitante = ((!reader[7].Equals(DBNull.Value)) ? reader.GetString(7).ToString() : "");
                    oResultadoPaciente.Fecha_Solicitud = ((!reader[8].Equals(DBNull.Value)) ? reader.GetString(8) : "");
                    oResultadoPaciente.Id_Estado = ((!reader[9].Equals(DBNull.Value)) ? reader.GetInt32(9) : 0);
                    oResultadoPaciente.Mes = ((!reader[10].Equals(DBNull.Value)) ? reader.GetString(10) : "");
                    oResultadoPaciente.Anio = ((!reader[11].Equals(DBNull.Value)) ? reader.GetString(11) : "");
                    oResultadoPaciente.Paciente = ((!reader[12].Equals(DBNull.Value)) ? reader.GetString(12).ToUpper() : "");
                    oResultadoPaciente.Id_Tipo_Analisis = ((!reader[13].Equals(DBNull.Value)) ? reader.GetString(13) : "");
                    oResultadoPaciente.Valor_Optimo = ((!reader[14].Equals(DBNull.Value)) ? reader.GetString(14) : "");
                    oResultadoPaciente.Id_Paciente = ((!reader[15].Equals(DBNull.Value)) ? reader.GetInt32(15) : 0);
                }
                reader.Close();

            }
            catch
            {

            }
            return oResultadoPaciente;

        }

        public List<ResultadoPaciente> lstResultadoByParametersD(string mes, string anio, string idpaciente)
        {
            SqlCommand cmd = new SqlCommand("pr_GetResultadoAnalisisPorPaciente");
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add("@Mes", SqlDbType.VarChar, 10).Value = mes;
            cmd.Parameters.Add("@Anio", SqlDbType.VarChar, 10).Value = anio;
            cmd.Parameters.Add("@IdPaciente", SqlDbType.VarChar, 10).Value = idpaciente;

            SqlDataReader reader = ExecuteReader(cmd, tipo_valor);
            List<ResultadoPaciente> lista = new List<ResultadoPaciente>();
            if (reader.HasRows)
            {
                while (reader.Read())
                {
                    ResultadoPaciente oSolicitudTransfusionBE = new ResultadoPaciente();

                    oSolicitudTransfusionBE.Id_ResultadoAC = ((!reader[0].Equals(DBNull.Value)) ? reader.GetInt32(0) : 0);
                    oSolicitudTransfusionBE.Tipo_Analisis = ((!reader[1].Equals(DBNull.Value)) ? reader.GetString(1) : "");
                    oSolicitudTransfusionBE.Fecha_Emision = ((!reader[2].Equals(DBNull.Value)) ? reader.GetString(2) : "");
                    oSolicitudTransfusionBE.Valor_Optimo_Final = ((!reader[3].Equals(DBNull.Value)) ? reader.GetString(3) : "");
                    oSolicitudTransfusionBE.Valor_Optimo_Final = ((!reader[4].Equals(DBNull.Value)) ? reader.GetString(4) : "");
                    oSolicitudTransfusionBE.Tipo_Medida = ((!reader[5].Equals(DBNull.Value)) ? reader.GetString(5) : "");
                    oSolicitudTransfusionBE.Resultado = ((!reader[6].Equals(DBNull.Value)) ? reader.GetString(6) : "");
                    oSolicitudTransfusionBE.Medico_Solicitante = ((!reader[7].Equals(DBNull.Value)) ? reader.GetString(7).ToString() : "");
                    oSolicitudTransfusionBE.Fecha_Solicitud = ((!reader[8].Equals(DBNull.Value)) ? reader.GetString(8) : "");
                    oSolicitudTransfusionBE.Id_Estado = ((!reader[9].Equals(DBNull.Value)) ? reader.GetInt32(9) : 0);
                    oSolicitudTransfusionBE.Mes = ((!reader[10].Equals(DBNull.Value)) ? reader.GetString(10) : "");
                    oSolicitudTransfusionBE.Anio = ((!reader[11].Equals(DBNull.Value)) ? reader.GetString(11) : "");
                    oSolicitudTransfusionBE.Paciente = ((!reader[12].Equals(DBNull.Value)) ? reader.GetString(12).ToUpper() : "");
                    oSolicitudTransfusionBE.Id_Tipo_Analisis = ((!reader[13].Equals(DBNull.Value)) ? reader.GetString(13) : "");
                    oSolicitudTransfusionBE.Valor_Optimo = ((!reader[14].Equals(DBNull.Value)) ? reader.GetString(14) : "");
                    oSolicitudTransfusionBE.Id_Paciente = ((!reader[15].Equals(DBNull.Value)) ? reader.GetInt32(15) : 0);

                    lista.Add(oSolicitudTransfusionBE);
                }
                reader.Close();

                return lista;
            }
            else
            {
                lista = null;
            }
            return lista;
        }


    }

}
