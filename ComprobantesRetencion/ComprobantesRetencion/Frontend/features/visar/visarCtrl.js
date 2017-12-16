(function() {
  angular.module('lab.features')
    .controller('VisarListCtrl', [
      '$scope',
      '$location',
      'VisarSvc',
      function($scope, $location, VisarSvc) {
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

          VisarSvc.getTransfusiones($scope.busqueda).then(
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

        $scope.atender = function(codSolicitud) {
          $location.path('/visar/' + codSolicitud);
        };
      }
    ])
    .controller('VisarCtrl', [
      '$scope',
      '$location',
      '$routeParams',
      'VisarSvc',
      function($scope, $location, $routeParams, VisarSvc) {
        var codSolicitud = $routeParams.id;

        $scope.hemocomponentes = [];

        function alerta(texto) {
          angular.element("#txttexto").text(texto);
          angular.element("#alert").modal('show');
        }
        $scope.validNum = function(event) {
          if (event.keyCode < 48 || event.keyCode > 57) {
            event.preventDefault();
          }
        }

        function listarSolicitud() {
          VisarSvc.getTransfusion(codSolicitud).then(
            function(data) {
              if (data.d != null) {
                $scope.solicitud = {
                  nroSolicitud: data.d.nroSolicitud,
                  hdNroSolicitud: data.d.codSolicitud,
                  estado: data.d.estado,
                  nroOrdenMedica: data.d.nroOrdenMedica,
                  hdOrdenMedica: data.d.codOrdenMedica,
                  fecha: data.d.fechaRegistro,
                  paciente: data.d.paciente,
                  fechaNacimiento: data.d.nacimiento,
                  edad: data.d.edad,
                  peso: data.d.peso,
                  sexo: data.d.sexo,
                  motivo: data.d.motivo,
                  medico: data.d.medico
                }
              }

              VisarSvc.getHemocomponentes(codSolicitud).then(
                function(hemocomp) {
                  $scope.hemocomponentes = hemocomp.d;
                },
                function(error) {
                  console.log(error);
                  alerta("Ocurrió un error en el servidor.");
                });
            },
            function(error) {
              console.log(error);
              alerta("Ocurrió un error en el servidor.");
            });
        }

        $scope.visar = function() {
          angular.element('#confirmar-visar').modal('toggle');
        };
        $scope.visarSolicitud = function() {
          var xdata = $scope.solicitud.hdNroSolicitud;
          xdata = xdata + '|4';

          VisarSvc.visarSolicitud(xdata).then(
            function(data) {
              if (data.d != null) {
                alerta("La solicitud de transfusion fue visada de forma correcta");
                $scope.regresar();
              }
            },
            function(error) {
              console.log(error);
              alerta("Ocurrió un error en el servidor.");
            });
        };

        $scope.rechazar = function() {
          var xdata = $scope.solicitud.hdNroSolicitud;
          xdata = xdata + '|5';

          VisarSvc.visarSolicitud(xdata).then(
            function(data) {
              if (data.d != null) {
                alerta("La solicitud de transfusion fue rechazada de forma correcta");
                $scope.regresar();
              }
            },
            function(error) {
              console.log(error);
              alerta("Ocurrió un error en el servidor.");
            });
        };

        $scope.regresar = function() {
          $location.path('/visar');
        }
        listarSolicitud();
      }
    ]);
})();