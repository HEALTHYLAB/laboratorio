(function() {
  angular.module('lab.features')
    .controller('ExternaListCtrl', [
      '$scope',
      '$location',
      'ExternaSvc',
      function($scope, $location, ExternaSvc) {
        $scope.busqueda = {};

        function alerta(texto) {
          angular.element("#txttexto").text(texto);
          angular.element("#alert").modal('show');
        }
        $scope.atender = function(codSolicitud) {
          $location.path('/externa/' + codSolicitud);
        };

        $scope.limpiar = function() {
          $scope.busqueda = {};
        };
        $scope.buscar = function() {
          if (!$scope.busqueda.estado || !$scope.busqueda.fechaInicio || !$scope.busqueda.fechaFin) {
            alerta("Ingrese los filtros de búsqueda.");
            return;
          }
          ExternaSvc.getTransfusiones($scope.busqueda).then(
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
      }
    ])
    .controller('ExternaCtrl', [
      '$scope',
      '$location',
      '$routeParams',
      'ExternaSvc',
      function($scope, $location, $routeParams, ExternaSvc) {
        var codSolicitud = $routeParams.id;
        $scope.solicitud = {};
        $scope.hemocomponentes = [];
        $scope.bancos = [];

        function alerta(texto) {
          angular.element("#txttexto").text(texto);
          angular.element("#alert").modal('show');
        }

        function getSolicitud() {
          ExternaSvc.getTransfusion(codSolicitud).then(
            function(data) {
              $scope.solicitud = data.d;
              $scope.hemocomponentes = data.d.oListaHemocomponenteSolicitudBE;
            },
            function(error) {
              console.log(error);
              alerta("Ocurrió un error en el servidor.");
            })
        }

        $scope.buscarBancos = function() {
          var hemocomponentes = [],
            cantidad = [];

          _.forEach($scope.hemocomponentes, function(item) {
            hemocomponentes.push(item.codHemocomponente);
            cantidad.push(item.cantidadRequerida);
          });

          ExternaSvc.getBancos(hemocomponentes, cantidad).then(
            function(data) {
              $scope.bancos = data.d;
            },
            function(error) {
              console.log(error);
              alerta("Ocurrió un error en el servidor.");
            });
        };

        $scope.atender = function () {
          if (!_.get($scope, 'solicitud.bancos.length')) {
            alerta("Seleccionar por lo menos un banco externo.");
            return;
          }

          angular.element("#confirmar-atender").modal('toggle');
        };

        $scope.atenderSolicitud = function () {
          var hemocomponentes = [],
            cantidad = [];

          _.forEach($scope.hemocomponentes, function(item) {
            hemocomponentes.push(item.codHemocomponente);
            cantidad.push(item.cantidadRequerida);
          });

          ExternaSvc.atenderSolicitud($scope.solicitud.codSolicitud,
            $scope.solicitud.bancos, hemocomponentes, cantidad).then(
            function (data) {
              alerta("Se actualizó la solicitud correctamente");
              $location.path("/externa")
            }, function (error) {
              console.log(error);
              alerta("Ocurrió un error en el servidor.");
            });
        };

        getSolicitud();
      }
    ]);
})();