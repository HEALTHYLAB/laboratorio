(function () {
  angular
    .module('lab.features')
    .factory('EmergenciaSvc', ['$http', '$q', function ($http, $q) {
      function _getTransfusion() {
        var defer = $q.defer();

        $http({
          method: 'POST',
          url: '/GenerarSolicitudTransfusionEmergencia.aspx/lstDatosEmergencia',
          contentType: 'application/json; charset=utf-8',
          dataType: 'json',
          data: {}
        }).then(function (response) {
          defer.resolve(response.data);
        }, function (error) {
            defer.reject(error);
        });
        return defer.promise;
      }

      function _savePaciente(data) {
        var defer = $q.defer();
        $http({
          method: 'POST',
          url: '/GenerarSolicitudTransfusionEmergencia.aspx/insRegistrarPaciente',
          contentType: 'application/json; charset=utf-8',
          dataType: 'json',
          data: {xdata: data}
        }).then(function (response) {
          debugger
          defer.resolve(response.data);
        }, function (error) {debugger
            defer.reject(error);
        });
        return defer.promise;
      }

      return {
        getTransfusion: _getTransfusion,
        savePaciente: _savePaciente
      };
    }]);
})();
