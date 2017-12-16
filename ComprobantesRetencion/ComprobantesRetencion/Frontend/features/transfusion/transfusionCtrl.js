(function() {
  angular.module('lab.features')
    .controller('TransfusionesCtrl', [
      '$scope',
      '$location',
      'TransfusionSvc',

      function($scope, TransfusionSvc, $location) {
        $scope.busqueda = {};

        function alerta(texto) {
          angular.element("#txttexto").text(texto);
          angular.element("#alert").modal('show');
        }

        $scope.buscar = function() {
          if (!$scope.busqueda.estado || !$scope.busqueda.fechaInicio || !$scope.busqueda.fechaFin) {
            alerta("Ingrese los filtros de búsqueda.");
            return;
          }

          TransfusionSvc.getTransfusiones($scope.busqueda).then(
            function(data) {

              if (_.get(data, 'd.length')) {
                $scope.solicitudes = data.d;
              } else {
                $scope.solicitudes = [];
                alerta("No se encontraron solicitudes.");
              }

            },
            function(error) {
              console.log(error);
              alerta("Ocurrió un error en el servidor.");
            });

        };

        $scope.limpiar = function() {
          $scope.busqueda = {};
        };

        $scope.atender = function (codSolicitud) {
          alert(codSolicitud);
        }
      }
    ])
    .controller('TransfusionCtrl', [
      '$scope',
      function($scope) {}
    ]);
})();