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

                    oSolicitudTransfusionBE.codSolicitud = ((!reader[0].Equals(DBNull.Value)) ? reader.GetInt32(0) : 0);
                    oSolicitudTransfusionBE.nroSolicitud = ((!reader[1].Equals(DBNull.Value)) ? reader.GetString(1) : "");
                    oSolicitudTransfusionBE.motivoTransfusion = ((!reader[2].Equals(DBNull.Value)) ? reader.GetString(2) : "");
                    oSolicitudTransfusionBE.desEstado = ((!reader[3].Equals(DBNull.Value)) ? reader.GetString(3) : "");
                    oSolicitudTransfusionBE.estado = ((!reader[4].Equals(DBNull.Value)) ? reader.GetString(4) : "");
                    oSolicitudTransfusionBE.fechaRegistro = ((!reader[5].Equals(DBNull.Value)) ? reader.GetString(5) : "");
                    oSolicitudTransfusionBE.fechaModificacion = ((!reader[6].Equals(DBNull.Value)) ? reader.GetString(6) : "");
                    oSolicitudTransfusionBE.codEstado = ((!reader[7].Equals(DBNull.Value)) ? reader.GetInt32(7).ToString() : "");
                    oSolicitudTransfusionBE.codOrdenMedica = ((!reader[8].Equals(DBNull.Value)) ? reader.GetInt32(8) : 0);
                    oSolicitudTransfusionBE.nroOrdenMedica = ((!reader[9].Equals(DBNull.Value)) ? reader.GetString(9) : "");
                    oSolicitudTransfusionBE.peso = ((!reader[10].Equals(DBNull.Value)) ? reader.GetString(10) : "");
                    oSolicitudTransfusionBE.nroHistoriaClinica = ((!reader[11].Equals(DBNull.Value)) ? reader.GetString(11) : "");
                    oSolicitudTransfusionBE.dolencia = ((!reader[12].Equals(DBNull.Value)) ? reader.GetString(12) : "");
                    oSolicitudTransfusionBE.edad = ((!reader[13].Equals(DBNull.Value)) ? reader.GetString(13) : "");
                    oSolicitudTransfusionBE.paciente = ((!reader[14].Equals(DBNull.Value)) ? reader.GetString(14) : "");
                    oSolicitudTransfusionBE.sexo = ((!reader[15].Equals(DBNull.Value)) ? reader.GetString(15) : "");
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

                    oSolicitudTransfusionBE.codSolicitud = ((!reader[0].Equals(DBNull.Value)) ? reader.GetInt32(0) : 0);
                    oSolicitudTransfusionBE.nroSolicitud = ((!reader[1].Equals(DBNull.Value)) ? reader.GetString(1) : "");
                    oSolicitudTransfusionBE.motivoTransfusion = ((!reader[2].Equals(DBNull.Value)) ? reader.GetString(2) : "");
                    oSolicitudTransfusionBE.desEstado = ((!reader[3].Equals(DBNull.Value)) ? reader.GetString(3) : "");
                    oSolicitudTransfusionBE.estado = ((!reader[4].Equals(DBNull.Value)) ? reader.GetString(4) : "");
                    oSolicitudTransfusionBE.fechaRegistro = ((!reader[5].Equals(DBNull.Value)) ? reader.GetString(5) : "");
                    oSolicitudTransfusionBE.fechaModificacion = ((!reader[6].Equals(DBNull.Value)) ? reader.GetString(6) : "");
                    oSolicitudTransfusionBE.codEstado = ((!reader[7].Equals(DBNull.Value)) ? reader.GetInt32(7).ToString() : "");
                    oSolicitudTransfusionBE.codOrdenMedica = ((!reader[8].Equals(DBNull.Value)) ? reader.GetInt32(8) : 0);
                    oSolicitudTransfusionBE.nroOrdenMedica = ((!reader[9].Equals(DBNull.Value)) ? reader.GetString(9) : "");
                    oSolicitudTransfusionBE.peso = ((!reader[10].Equals(DBNull.Value)) ? reader.GetString(10) : "");
                    oSolicitudTransfusionBE.nroHistoriaClinica = ((!reader[11].Equals(DBNull.Value)) ? reader.GetString(11) : "");
                    oSolicitudTransfusionBE.dolencia = ((!reader[12].Equals(DBNull.Value)) ? reader.GetString(12) : "");
                    oSolicitudTransfusionBE.edad = ((!reader[13].Equals(DBNull.Value)) ? reader.GetString(13) : "");
                    oSolicitudTransfusionBE.paciente = ((!reader[14].Equals(DBNull.Value)) ? reader.GetString(14) : "");
                    oSolicitudTransfusionBE.sexo = ((!reader[15].Equals(DBNull.Value)) ? reader.GetString(15) : "");
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

                    oSolicitudTransfusion.nroSolicitud = ((!reader[1].Equals(DBNull.Value)) ? reader.GetString(1) : "");
                    oSolicitudTransfusion.motivo = ((!reader[2].Equals(DBNull.Value)) ? reader.GetString(2) : "");
                    oSolicitudTransfusion.estado = ((!reader[3].Equals(DBNull.Value)) ? reader.GetString(3) : "");
                    if (!reader[4].Equals(DBNull.Value)) oSolicitudTransfusion.fechaRegistro = reader.GetString(4);
                    oSolicitudTransfusion.codEstado = ((!reader[5].Equals(DBNull.Value)) ? reader.GetInt32(5).ToString() : "");
                    oSolicitudTransfusion.codOrdenMedica = ((!reader[6].Equals(DBNull.Value)) ? reader.GetInt32(6).ToString() : "");
                    oSolicitudTransfusion.nroOrdenMedica = ((!reader[7].Equals(DBNull.Value)) ? reader.GetString(7) : "");
                    oSolicitudTransfusion.peso = ((!reader[8].Equals(DBNull.Value)) ? reader.GetInt32(8).ToString() : "");
                    oSolicitudTransfusion.nroHistoriaClinica = ((!reader[9].Equals(DBNull.Value)) ? reader.GetString(9) : "");
                    oSolicitudTransfusion.dolencia = ((!reader[10].Equals(DBNull.Value)) ? reader.GetString(10) : "");
                    oSolicitudTransfusion.edad = ((!reader[11].Equals(DBNull.Value)) ? reader.GetInt32(11).ToString() : "");
                    oSolicitudTransfusion.paciente = ((!reader[12].Equals(DBNull.Value)) ? reader.GetString(12) : "");
                    oSolicitudTransfusion.sexo = ((!reader[13].Equals(DBNull.Value)) ? reader.GetString(13) : "");

                    //lista.Add(oSolicitudTransfusion);
                }

                reader.NextResult();

                while (reader.Read())
                {
                    TipoSangreBE v = new TipoSangreBE()
                    {

                        codigo = ((!reader[0].Equals(DBNull.Value)) ? reader.GetInt32(0).ToString() : ""),
                        descripcion = ((!reader[1].Equals(DBNull.Value)) ? reader.GetString(1) : "")

                    };
                    oListaTipoSangreBE.Add(v);
                }

                reader.NextResult();

                while (reader.Read())
                {
                    FactorRHBE v = new FactorRHBE()
                    {

                        codigo = ((!reader[0].Equals(DBNull.Value)) ? reader.GetSqlInt32(0).ToString() : ""),
                        descripcion = ((!reader[1].Equals(DBNull.Value)) ? reader.GetString(1) : "")

                    };
                    oListaFactorRHBE.Add(v);
                }

                reader.NextResult();

                while (reader.Read())
                {
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
                        nroSolicitud = ((!reader[14].Equals(DBNull.Value)) ? reader.GetString(14) : "")
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
                    oSolicitudTransfusion.codSolicitud = ((!reader[0].Equals(DBNull.Value)) ? reader.GetInt32(0) : 0);
                    oSolicitudTransfusion.nroSolicitud = ((!reader[1].Equals(DBNull.Value)) ? reader.GetString(1) : "");
                    oSolicitudTransfusion.motivo = ((!reader[2].Equals(DBNull.Value)) ? reader.GetString(2) : "");
                    oSolicitudTransfusion.estado = ((!reader[3].Equals(DBNull.Value)) ? reader.GetString(3) : "");
                    if (!reader[4].Equals(DBNull.Value)) oSolicitudTransfusion.fechaRegistro = reader.GetString(4);
                    oSolicitudTransfusion.codEstado = ((!reader[5].Equals(DBNull.Value)) ? reader.GetInt32(5).ToString() : "");
                    oSolicitudTransfusion.codOrdenMedica = ((!reader[6].Equals(DBNull.Value)) ? reader.GetInt32(6).ToString() : "");
                    oSolicitudTransfusion.nroOrdenMedica = ((!reader[7].Equals(DBNull.Value)) ? reader.GetString(7) : "");
                    oSolicitudTransfusion.peso = ((!reader[8].Equals(DBNull.Value)) ? reader.GetInt32(8).ToString() : "");
                    oSolicitudTransfusion.nroHistoriaClinica = ((!reader[9].Equals(DBNull.Value)) ? reader.GetString(9) : "");
                    oSolicitudTransfusion.dolencia = ((!reader[10].Equals(DBNull.Value)) ? reader.GetString(10) : "");
                    oSolicitudTransfusion.edad = ((!reader[11].Equals(DBNull.Value)) ? reader.GetInt32(11).ToString() : "");
                    oSolicitudTransfusion.paciente = ((!reader[12].Equals(DBNull.Value)) ? reader.GetString(12) : "");
                    oSolicitudTransfusion.sexo = ((!reader[13].Equals(DBNull.Value)) ? reader.GetString(13) : "");
                }

                reader.NextResult();

                while (reader.Read())
                {
                    TipoSangreBE v = new TipoSangreBE()
                    {

                        codigo = ((!reader[0].Equals(DBNull.Value)) ? reader.GetInt32(0).ToString() : ""),
                        descripcion = ((!reader[1].Equals(DBNull.Value)) ? reader.GetString(1) : "")

                    };
                    oListaTipoSangreBE.Add(v);
                }

                reader.NextResult();

                while (reader.Read())
                {
                    FactorRHBE v = new FactorRHBE()
                    {

                        codigo = ((!reader[0].Equals(DBNull.Value)) ? reader.GetSqlInt32(0).ToString() : ""),
                        descripcion = ((!reader[1].Equals(DBNull.Value)) ? reader.GetString(1) : "")

                    };
                    oListaFactorRHBE.Add(v);
                }

                reader.NextResult();

                while (reader.Read())
                {
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
                        nroSolicitud = ((!reader[14].Equals(DBNull.Value)) ? reader.GetString(14) : "")
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
                paramsToStore[0].Value = oTransfusionBE.codSolicitud;
                paramsToStore[1] = new SqlParameter("@estado", SqlDbType.Int);
                paramsToStore[1].Value = oTransfusionBE.estado;
                paramsToStore[2] = new SqlParameter("@motivo", SqlDbType.VarChar, 100);
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

        public string insTransfucionEmergencia(SolicitudTransfusionBE oTransfusionBE)
        {
            string xValor = "";

            try
            {
                SqlParameter[] paramsToStore = new SqlParameter[15];
                paramsToStore[0] = new SqlParameter("@idSolicitud", SqlDbType.Int);
                paramsToStore[0].Value = oTransfusionBE.codSolicitud;
                paramsToStore[1] = new SqlParameter("@estado", SqlDbType.Int);
                paramsToStore[1].Value = oTransfusionBE.estado;
                paramsToStore[2] = new SqlParameter("@motivo", SqlDbType.VarChar, 4000);
                paramsToStore[2].Value = oTransfusionBE.motivo;
                //paramsToStore[3] = new SqlParameter("@idOrdenMedica", SqlDbType.Int);
                //paramsToStore[3].Value = oTransfusionBE.idOrdenMedica;
                paramsToStore[3] = new SqlParameter("@idTecnico", SqlDbType.Int);
                paramsToStore[3].Value = oTransfusionBE.codTecnico;
                paramsToStore[4] = new SqlParameter("@idPaciente", SqlDbType.Int);
                paramsToStore[4].Value = oTransfusionBE.codPaciente;
                paramsToStore[5] = new SqlParameter("@idFactorRH", SqlDbType.Int);
                paramsToStore[5].Value = oTransfusionBE.codTipoFactorRH;
                paramsToStore[6] = new SqlParameter("@idTipoSangre", SqlDbType.Int);
                paramsToStore[6].Value = oTransfusionBE.codTipoSangre;

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
                paramsToStore[4].Value = oPaciente.fechaNacimiento;
                paramsToStore[5] = new SqlParameter("@IdTipoDocumentoIdentidad", SqlDbType.Int);
                paramsToStore[5].Value = oPaciente.codTipoDocumentoIdentidad;
                paramsToStore[6] = new SqlParameter("@NroDocumentoIdenidad", SqlDbType.VarChar, 15);
                paramsToStore[6].Value = oPaciente.nroDocumentoIdenidad;

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

        public string insDetalleTransfucionEmergencia(DetalleSolicitudTranfusion oDetalleSolicitudTranfusion)
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

                    //Carga Pacientes

                    while (reader.Read())
                    {
                        PacienteBE pc = new PacienteBE()
                        {
                            codTipoDocumentoIdentidad = ((!reader[0].Equals(DBNull.Value)) ? reader.GetInt32(0) : 0),
                            nroDocumentoIdenidad = ((!reader[1].Equals(DBNull.Value)) ? reader.GetString(1) : ""),
                            nombres = ((!reader[2].Equals(DBNull.Value)) ? reader.GetString(2) : ""),
                            apellidoPaterno = ((!reader[3].Equals(DBNull.Value)) ? reader.GetString(3) : ""),
                            apellidoMaterno = ((!reader[4].Equals(DBNull.Value)) ? reader.GetString(4) : ""),
                            codPaciente = ((!reader[5].Equals(DBNull.Value)) ? reader.GetInt32(5) : 0)
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
                            codigo = ((!reader[0].Equals(DBNull.Value)) ? reader.GetInt32(0) : 0),
                            descripcion = ((!reader[1].Equals(DBNull.Value)) ? reader.GetString(1) : "")
                        };
                        oListaTipoRH.Add(tipoRH);
                    }

                    //Tipo Sangre
                    reader.NextResult();

                    while (reader.Read())
                    {
                        TipoBE tipoSangre = new TipoBE()
                        {
                            codigo = ((!reader[0].Equals(DBNull.Value)) ? reader.GetInt32(0) : 0),
                            descripcion = ((!reader[1].Equals(DBNull.Value)) ? reader.GetString(1) : "")
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
                        item.codigo = ((!reader[0].Equals(DBNull.Value)) ? reader.GetInt32(0) : 0);
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
                    oResultadoPaciente.codResultadoAC = ((!reader[0].Equals(DBNull.Value)) ? reader.GetInt32(0) : 0);
                    oResultadoPaciente.tipoAnalisis = ((!reader[1].Equals(DBNull.Value)) ? reader.GetString(1) : "");
                    oResultadoPaciente.fechaEmision = ((!reader[2].Equals(DBNull.Value)) ? reader.GetString(2) : "");
                    oResultadoPaciente.valorOptimoFinal = ((!reader[3].Equals(DBNull.Value)) ? reader.GetString(3) : "");
                    oResultadoPaciente.valorOptimoFinal = ((!reader[4].Equals(DBNull.Value)) ? reader.GetString(4) : "");
                    oResultadoPaciente.tipoMedida = ((!reader[5].Equals(DBNull.Value)) ? reader.GetString(5) : "");
                    oResultadoPaciente.resultado = ((!reader[6].Equals(DBNull.Value)) ? reader.GetString(6) : "");
                    oResultadoPaciente.medicoSolicitante = ((!reader[7].Equals(DBNull.Value)) ? reader.GetString(7).ToString() : "");
                    oResultadoPaciente.fechaSolicitud = ((!reader[8].Equals(DBNull.Value)) ? reader.GetString(8) : "");
                    oResultadoPaciente.codEstado = ((!reader[9].Equals(DBNull.Value)) ? reader.GetInt32(9) : 0);
                    oResultadoPaciente.mes = ((!reader[10].Equals(DBNull.Value)) ? reader.GetString(10) : "");
                    oResultadoPaciente.anio = ((!reader[11].Equals(DBNull.Value)) ? reader.GetString(11) : "");
                    oResultadoPaciente.paciente = ((!reader[12].Equals(DBNull.Value)) ? reader.GetString(12).ToUpper() : "");
                    oResultadoPaciente.codTipoAnalisis = ((!reader[13].Equals(DBNull.Value)) ? reader.GetString(13) : "");
                    oResultadoPaciente.valorOptimo = ((!reader[14].Equals(DBNull.Value)) ? reader.GetString(14) : "");
                    oResultadoPaciente.codPaciente = ((!reader[15].Equals(DBNull.Value)) ? reader.GetInt32(15) : 0);
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
                    oResultadoPaciente.codResultadoAC = ((!reader[0].Equals(DBNull.Value)) ? reader.GetInt32(0) : 0);
                    oResultadoPaciente.tipoAnalisis = ((!reader[1].Equals(DBNull.Value)) ? reader.GetString(1) : "");
                    oResultadoPaciente.fechaEmision = ((!reader[2].Equals(DBNull.Value)) ? reader.GetString(2) : "");
                    oResultadoPaciente.valorOptimoFinal = ((!reader[3].Equals(DBNull.Value)) ? reader.GetString(3) : "");
                    oResultadoPaciente.valorOptimoFinal = ((!reader[4].Equals(DBNull.Value)) ? reader.GetString(4) : "");
                    oResultadoPaciente.tipoMedida = ((!reader[5].Equals(DBNull.Value)) ? reader.GetString(5) : "");
                    oResultadoPaciente.resultado = ((!reader[6].Equals(DBNull.Value)) ? reader.GetString(6) : "");
                    oResultadoPaciente.medicoSolicitante = ((!reader[7].Equals(DBNull.Value)) ? reader.GetString(7).ToString() : "");
                    oResultadoPaciente.fechaSolicitud = ((!reader[8].Equals(DBNull.Value)) ? reader.GetString(8) : "");
                    oResultadoPaciente.codEstado = ((!reader[9].Equals(DBNull.Value)) ? reader.GetInt32(9) : 0);
                    oResultadoPaciente.mes = ((!reader[10].Equals(DBNull.Value)) ? reader.GetString(10) : "");
                    oResultadoPaciente.anio = ((!reader[11].Equals(DBNull.Value)) ? reader.GetString(11) : "");
                    oResultadoPaciente.paciente = ((!reader[12].Equals(DBNull.Value)) ? reader.GetString(12).ToUpper() : "");
                    oResultadoPaciente.codTipoAnalisis = ((!reader[13].Equals(DBNull.Value)) ? reader.GetString(13) : "");
                    oResultadoPaciente.valorOptimo = ((!reader[14].Equals(DBNull.Value)) ? reader.GetString(14) : "");
                    oResultadoPaciente.codPaciente = ((!reader[15].Equals(DBNull.Value)) ? reader.GetInt32(15) : 0);
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

                    oSolicitudTransfusionBE.codResultadoAC = ((!reader[0].Equals(DBNull.Value)) ? reader.GetInt32(0) : 0);
                    oSolicitudTransfusionBE.tipoAnalisis = ((!reader[1].Equals(DBNull.Value)) ? reader.GetString(1) : "");
                    oSolicitudTransfusionBE.fechaEmision = ((!reader[2].Equals(DBNull.Value)) ? reader.GetString(2) : "");
                    oSolicitudTransfusionBE.valorOptimoFinal = ((!reader[3].Equals(DBNull.Value)) ? reader.GetString(3) : "");
                    oSolicitudTransfusionBE.valorOptimoFinal = ((!reader[4].Equals(DBNull.Value)) ? reader.GetString(4) : "");
                    oSolicitudTransfusionBE.tipoMedida = ((!reader[5].Equals(DBNull.Value)) ? reader.GetString(5) : "");
                    oSolicitudTransfusionBE.resultado = ((!reader[6].Equals(DBNull.Value)) ? reader.GetString(6) : "");
                    oSolicitudTransfusionBE.medicoSolicitante = ((!reader[7].Equals(DBNull.Value)) ? reader.GetString(7).ToString() : "");
                    oSolicitudTransfusionBE.fechaSolicitud = ((!reader[8].Equals(DBNull.Value)) ? reader.GetString(8) : "");
                    oSolicitudTransfusionBE.codEstado = ((!reader[9].Equals(DBNull.Value)) ? reader.GetInt32(9) : 0);
                    oSolicitudTransfusionBE.mes = ((!reader[10].Equals(DBNull.Value)) ? reader.GetString(10) : "");
                    oSolicitudTransfusionBE.anio = ((!reader[11].Equals(DBNull.Value)) ? reader.GetString(11) : "");
                    oSolicitudTransfusionBE.paciente = ((!reader[12].Equals(DBNull.Value)) ? reader.GetString(12).ToUpper() : "");
                    oSolicitudTransfusionBE.codTipoAnalisis = ((!reader[13].Equals(DBNull.Value)) ? reader.GetString(13) : "");
                    oSolicitudTransfusionBE.valorOptimo = ((!reader[14].Equals(DBNull.Value)) ? reader.GetString(14) : "");
                    oSolicitudTransfusionBE.codPaciente = ((!reader[15].Equals(DBNull.Value)) ? reader.GetInt32(15) : 0);

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
