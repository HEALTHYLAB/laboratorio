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
          defer.resolve(response.data);
        }, function (error) {
            defer.reject(error);
        });
        return defer.promise;
      }

      function _saveSolicitud(data, detalle) {
        var defer = $q.defer();

        $http({
          method: 'POST',
          url: '/GenerarSolicitudTransfusionEmergencia.aspx/insTransfucionEmergencia',
          contentType: 'application/json; charset=utf-8',
          dataType: 'json',
          data: {xdata: data,xdetalle: detalle}
        }).then(function (response) {
          defer.resolve(response.data);
        }, function (error) {
          defer.reject(error);
        });

        return defer.promise;
      }

      return {
        getTransfusion: _getTransfusion,
        savePaciente: _savePaciente,
        saveSolicitud: _saveSolicitud
      };
    }]);
})();
