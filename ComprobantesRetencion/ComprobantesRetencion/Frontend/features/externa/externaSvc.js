(function() {
  angular
    .module('lab.features')
    .factory('ExternaSvc', ['$http', '$q', function($http, $q) {

      function _getTransfusiones(busqueda) {
        var xdata = busqueda.fechaInicio + "|" + busqueda.fechaFin + "|" + busqueda.estado;
        var defer = $q.defer();

        $http({
          method: 'POST',
          url: '/transfusion/ListarSolicitudTransfusionExterna.aspx/lstSolicitudTransfusion',
          contentType: 'application/json; charset=utf-8',
          dataType: 'json',
          data: { xData: xdata }
        }).then(function(response) {
          defer.resolve(response.data);
        }, function(error) {
          defer.reject(error);
        });
        return defer.promise;
      }

      function _getTransfusion(cod) {
        var defer = $q.defer();

        $http({
          method: 'POST',
          url: '/transfusion/AtenderSolicitudTransfusionExterna.aspx/GetDatosSolicitudTransfusionExt',
          contentType: 'application/json; charset=utf-8',
          dataType: 'json',
          data: { xData: cod }
        }).then(function(response) {
          defer.resolve(response.data);
        }, function(error) {
          defer.reject(error);
        });
        return defer.promise;
      }

      function _getBancos(hemocomponentes, cantidad) {
        var defer = $q.defer();

        $http({
          method: 'POST',
          url: '/transfusion/AtenderSolicitudTransfusionExterna.aspx/getBancosExternos',
          contentType: 'application/json; charset=utf-8',
          dataType: 'json',
          data: {ids: hemocomponentes.join(','), cantidad: cantidad.join(',')}
        }).then(function(response) {
          defer.resolve(response.data);
        }, function(error) {
          defer.reject(error);
        });
        return defer.promise;
      }

      function _atenderSolicitud (codSolicitud, codBancos, codHemocomponentes, cantidad) {
        var defer = $q.defer();

        $http({
          method: 'POST',
          url: '/transfusion/AtenderSolicitudTransfusionExterna.aspx/insOrdenRequerimiento',
          contentType: 'application/json; charset=utf-8',
          dataType: 'json',
          data: {idSolicitudExterna: codSolicitud, idBancosSt: codBancos.join(','), idHemocompSt: codHemocomponentes.join(','), cantSt: cantidad.join(',')}
        }).then(function(response) {
          defer.resolve(response.data);
        }, function(error) {
          defer.reject(error);
        });

        return defer.promise;
      }

      return {
        getTransfusiones: _getTransfusiones,
        getTransfusion: _getTransfusion,
        getBancos: _getBancos,
        atenderSolicitud: _atenderSolicitud
      };
    }]);
})();