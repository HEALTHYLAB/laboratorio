USE [BD_Clinica]
GO
/****** Object:  StoredProcedure [dbo].[pr_GetDatosSolicitudTransfusion]    Script Date: 07/20/2017 00:40:37 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

--pr_GetDatosSolicitudTransfusion 1
/*---------------------------------------------------------------------------------                
<Comentario>                
 <Nombre>pr_GetDatosSolicitudTransfusion</Nombre>                
 <Tipo>Procedure</Tipo>                
 <Autor>Jose Vascones</Autor>                
 <Fecha>15/07/2017/Fecha>
 <Descripcion>Trae los datos de la solicitud seleccionada</Descripcion>                
 <Motivo></Motivo>0
</Comentario>                
---------------------------------------------------------------------------------*/                  
ALTER PROC [dbo].[pr_GetDatosSolicitudTransfusion]                
	@IdSolicitud int   
AS                
BEGIN         
  


SELECT S.IdSolicitud
      ,S.NroSolicitud
      ,S.MotivoTransfusion
      ,P.Valor as Estado
      ,CONVERT(varchar(13),S.FechaRegistro,103) FechaRegistro
      ,S.IdEstado
      ,S.IdOrdenMedica
      ,O.NroOrdenMedica
      ,Pa.Peso
      --,Pa.Sexo
      ,Pa.NroHistoriaClinica
      ,Pa.Dolencia
      ,floor(
		(cast(convert(varchar(8),getdate(),112) as int)-
		cast(convert(varchar(8),Pa.FechaNacimiento,112) as int) ) / 10000
		) as Edad
	  ,Pa.Nombres + ' ' + Pa.ApellidoPaterno + ' ' + Pa.ApellidoMaterno as Paciente
	  ,Sx.valor as Sexo
  FROM BD_Clinica.dbo.LAB_SolicitudTrasfusion S (nolock)
  INNER JOIN BD_Clinica.dbo.LAB_PARAMETROS P (nolock) on S.IdEstado = P.IDREGISTRO and P.IDTABLA = 11
  INNER JOIN BD_Clinica.dbo.LAB_OrdenMedica O (nolock) on S.IdOrdenMedica = O.IdOrdenMedica
  INNER JOIN BD_Clinica.dbo.LAB_PACIENTE Pa (nolock) on O.IdPaciente = Pa.IdPaciente
  left join dbo.fn_Parametro_GetTablaPorNombre('SEXO','A') Sx on Pa.sexo=Sx.Denominacion   
  where S.IdSolicitud = @IdSolicitud

  --SELECT [Codigo]
  --    ,[Descripcion]
  --FROM [BD_Clinica].[dbo].[LAB_TipoSangre]
  
  
  --SELECT [Codigo]
  --    ,[Descripcion]
  --FROM [BD_Clinica].[dbo].[LAB_FactorRH]
    
End


