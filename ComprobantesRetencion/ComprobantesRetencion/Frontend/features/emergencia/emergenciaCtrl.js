(function() {
  angular.module('lab.features')
    .controller('EmergenciaCtrl', [
      '$scope',
      'EmergenciaSvc',
      function($scope, EmergenciaSvc) {

        function restart() {
          $scope.solicitud = {};
          $scope.hemocomponentes = [];
          $scope.factores = [];
          $scope.tiposSangre = [];
          $scope.tecnicos = [];
          $scope.paciente = {};
          $scope.pacienteBtnDisabled = false;
        }


        function Eliminartr(icod) {
          $("#tbbodyHemo").find("tr[id= " + icod + "]").remove();
        }

        function alerta(texto) {
          angular.element("#txttexto").text(texto);
          angular.element("#alert").modal('show');
        }

        function listData() {
          EmergenciaSvc.getTransfusion().then(function(data) {
            if (data.d != null) {
              $scope.hemocomponentes = data.d.oListaHemocomponenteBE;
              $scope.factores = data.d.oListaFactorRH;
              $scope.tiposSangre = data.d.oListaTipoSangre
              $scope.pacientes = data.d.oListaPaciente;
              $scope.tecnicos = data.d.oListaTecnicoBE;
              $scope.solicitud.codigo = data.d.codigo;
              $scope.solicitud.estado = "REGISTRADO"
              $scope.solicitud.fechaactual = moment().format('DD/MM/YYYY');
            }
          }, function(error) {
            console.log(error);
            alert("Ocurrió un error en el servidor.");
          });
        }

        $scope.validNum = function(event) {
          if (event.keyCode < 48 || event.keyCode > 57) {
            event.preventDefault();
          }
        };

        $scope.limpiarPaciente = function() {
          $scope.paciente = {};
        }

        $scope.agregarPaciente = function() {
          if (!$scope.paciente.nombre) {
            alerta("Por favor llenar el nombre.");
            return;
          }
          if (!$scope.paciente.apellidoPat) {
            alerta("Por favor llenar el apellido paterno.");
            return;
          }

          if (!$scope.paciente.apellidoMat) {
            alerta("Por favor llenar el apellido materno.");
            return;
          }

          if (!$scope.paciente.sexo) {
            alerta("Por seleccionar el sexo del paciente.");
            return;
          }

          if (!$scope.paciente.fechaNacimiento) {
            alerta("Por favor llenar la fecha de nacimiento.");
            return;
          }

          if (!$scope.paciente.tipoDoc) {
            alerta("Por favor seleccionar el tipo de documento.");
            return;
          }

          if (!$scope.paciente.documento) {
            alerta("Por favor llenar el código de documento");
            return;
          }

          var data = $scope.paciente.nombre + "|" + $scope.paciente.apellidoPat + "|" +
            $scope.paciente.apellidoMat + "|" + $scope.paciente.sexo + "|" + $scope.paciente.fechaNacimiento +
            "|" + $scope.paciente.tipoDoc + "|" + $scope.paciente.documento;

          $scope.pacienteBtnDisabled = true;
          EmergenciaSvc.savePaciente(data).then(
            function(data) {
              if (data.d != null) {
                alerta("EL paciente ha sido guardado de forma correcta en la base de datos");
                listData();
                angular.element("#agregar-paciente").modal('toggle');
              }
              $scope.limpiarPaciente()
              $scope.pacienteBtnDisabled = false;
            },
            function(error) {
              console.log(error);
              alert("Ocurrió un error en el servidor.");
              $scope.pacienteBtnDisabled = false;
            });
        }
        $scope.hemocompSeleccionados = [];
        $scope.validateUser = function() {
          var errorHemocomp = false;

          $scope.hemocompSeleccionados = [];
          if (!$scope.solicitud.motivo) {
            alerta("Ingrese el motivo de la solicitud.");
            return;
          }
          if (!_.get($scope, 'solicitud.paciente')) {
            alerta("Seleccionar paciente.");
            return;
          }
          if (!_.get($scope, 'solicitud.factorRH')) {
            alerta('Seleccionar un factor RH.');
            return;
          }
          if (!_.get($scope, 'solicitud.tipoSangre')) {
            alerta('Seleccionar un tipo de sangre.');
            return;
          }
          if (!_.get($scope, 'solicitud.tecnico')) {
            alerta('Seleccionar un técnico.');
            return;
          }

          _.forEach($scope.hemocomponentes, function(item) {
            if (item.selected && !item.cantidad) {
              errorHemocomp = true;
              return;
            }
            if (item.selected && item.cantidad) {
              $scope.hemocompSeleccionados.push(item);
            }
          });

          if (!$scope.hemocompSeleccionados.length) {
            alerta('Seleccione al menos un hemocomponente.');
            return;
          }
          if (errorHemocomp) {
            alerta('Ingrese la cantidad en los hemocomponentes seleccionados.');
            return;
          }

          angular.element('#confirmar-guardar').modal('toggle');
        };

        $scope.registrarSolicitud = function() {
          var data = $scope.solicitud.codigo + "|" + $scope.solicitud.motivo + "|" + $scope.solicitud.tecnico
            + "|" + $scope.solicitud.paciente + "|" + $scope.solicitud.factorRH + "|" + $scope.solicitud.tipoSangre;

          var detalle = "",  num = 0, split, splitDet, m = 0;
          $(".chkhemo").each(function () {
              if ($(this).is(":checked") == true) {
                  objDetalle = {};
                  var texto = $(this).parent().parent().parent().find(":input[type=text]").val();
                  splitDet = this.getAttribute('datos').split('|');// + "," + texto;
                  num++;
                  detalle += splitDet[0] + "|" + texto + "-";
              }
          });

          var xdetalle = detalle.substr(0, detalle.length - 1);

          EmergenciaSvc.saveSolicitud(data, xdetalle).then(
            function(data) {
              if (data.d != null) {
                alerta("La solicitud de transfusion fue guardada de forma correcta en la base de datos");
                restart();
                listData();
              }
            },
            function(error) {
              console.log(error);
              alert("Ocurrió un error en el servidor.");
              $scope.pacienteBtnDisabled = false;
            });
        };

        restart();
        listData();
      }
    ]);
})();
