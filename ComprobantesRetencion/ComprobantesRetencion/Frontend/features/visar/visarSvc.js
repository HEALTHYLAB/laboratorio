(function() {
  angular
    .module('lab.features')
    .factory('VisarSvc', ['$http', '$q', function($http, $q) {

      function _getTransfusiones(busqueda) {
        var xdata = busqueda.fechaInicio + "|" + busqueda.fechaFin + "|" + busqueda.estado;

        var defer = $q.defer();

        $http({
          method: 'POST',
          url: '/transfusion/FrmListaVisarSolicitudTransfusion.aspx/lstSolicitudTransfusion',
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
          url: '/VisarSolicitudTransfusion.aspx/lstSolicitudTransfusion',
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

      function _getHemocomponentes(cod) {
        var defer = $q.defer();
        $http({
          method: 'POST',
          url: '/VisarSolicitudTransfusion.aspx/lstSolicitudHemocomponentes',
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

      function _visarSolicitud(xdata) {
        var defer = $q.defer();
        $http({
          method: 'POST',
          url: '/VisarSolicitudTransfusion.aspx/visarSolicitudTransfusion',
          contentType: 'application/json; charset=utf-8',
          dataType: 'json',
          data: { xdata: xdata }
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
        getHemocomponentes: _getHemocomponentes,
        visarSolicitud: _visarSolicitud
      };
    }]);
})();