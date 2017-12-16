(function() {
  angular
    .module('lab.features')
    .factory('ReporteSvc', ['$http', '$q', function($http, $q) {

      function _getAnalisis(busqueda) {
        var xdata2 = busqueda.month + "|" + busqueda.year + "|" + busqueda.paciente

        var defer = $q.defer();

        $http({
          method: 'POST',
          url: '/reportes/reportePaciente.aspx/lstListaResultado2',
          contentType: 'application/json; charset=utf-8',
          dataType: 'json',
          data: { xData: xdata2 }
        }).then(function(response) {
          defer.resolve(response.data);
        }, function(error) {
          defer.reject(error);
        });
        return defer.promise;
      }

      function _getDetalle(id) {
        var defer = $q.defer();

        $http({
          method: 'POST',
          url: '/reportes/reportePaciente.aspx/lstEntResultado2',
          contentType: 'application/json; charset=utf-8',
          dataType: 'json',
          data: { xData: id }
        }).then(function(response) {
          defer.resolve(response.data);
        }, function(error) {
          defer.reject(error);
        });
        return defer.promise;
      }

      function _getReporte(codTipoAnalisis, codPaciente) {
        var defer = $q.defer(),
            xdata =  codTipoAnalisis + "|" + codPaciente;
        $http({
          method: 'POST',
          url: '/reportes/reportePaciente.aspx/lstEntResultado2',
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
        getAnalisis: _getAnalisis,
        getDetalle: _getDetalle,
        getReporte: _getReporte
      };
    }]);
})();