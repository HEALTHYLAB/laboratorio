------ 2) script de solicitudes de reposicion por tipo de sangre 

select S.*, D.* from LAB_SolicitudReposicion S 
inner join LAB_DetalleSolicitudReposicion D on S.IdBancoSangre = D.IdBancoSangre
and S.IdSolicitud = D.IdSolicitud

