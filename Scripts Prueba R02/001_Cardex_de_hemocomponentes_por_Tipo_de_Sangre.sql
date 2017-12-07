------ 1) script de reporte de Cardex de hemocomponentes por Tipo de Sangre
select  H.Descripcion as Hemocomponente,T.Descripcion as TipoSangre,F.Descripcion as FactorRH,  
		COUNT(idUnidad) as stockActual, H.StockReposicion
from LAB_Hemocomponente H 
left join LAB_UnidadHemocomponente U on  H.IdHemocomponente = U.IdHemocomponente
left join LAB_TipoSangre T on U.IdTipoSangre = T.IdTipoSangre
left join LAB_FactorRH F on U.IdFactorRH = F.IDFactorRH
group by H.Descripcion, T.Descripcion,F.Descripcion, H.StockReposicion
having COUNT(idUnidad) <= H.StockReposicion

