(function() {
  angular
    .module('lab.features')
    .factory('TransfusionSvc', ['$http', '$q', function($http, $q) {

      function _getTransfusiones(busqueda) {
        var xdata = busqueda.fechaInicio + "|" + busqueda.fechaFin + "|" + busqueda.estado;

        var defer = $q.defer();

        $http({
          method: 'POST',
          url: '/transfusion/FrmListaSolicitudTransfusion.aspx/lstSolicitudTransfusion',
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

      return {
        getTransfusiones: _getTransfusiones,
      };
    }]);
})();