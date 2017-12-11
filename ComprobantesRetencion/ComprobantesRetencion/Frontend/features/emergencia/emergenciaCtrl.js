(function() {
  angular.module('lab.features')
    .controller('EmergenciaCtrl', [
      '$scope',
      'EmergenciaSvc',
      function($scope, EmergenciaSvc) {
        $scope.solicitud = {};
        $scope.hemocomponentes = [];
        $scope.factores = [];
        $scope.tiposSangre = [];
        $scope.paciente = {};
        $scope.pacienteBtnDisabled = false;

        function creartablaHemocomponente(oListaHemocomponenteBE) {
          var html = "";
          html = "<table  class='table table-striped table-bordered table-hover'><thead>   <tr> <th>Seleccionar</th><th>Código</th><th>Hemocomponente</th><th>Unidades Requeridas</th></tr> </thead><tbody>";
          for (i = 0; i < oListaHemocomponenteBE.length; i++) {

            html += "<tr><td> <label> <input class='checkbox chkhemo' type='checkbox'";
            html += "datos='" + oListaHemocomponenteBE[i].IdHemocomponente + "|" + oListaHemocomponenteBE[i].Codigo + "|" + oListaHemocomponenteBE[i].Descripcion + "'> <span>&nbsp;</span></label></td>";
            html += "<td>" + oListaHemocomponenteBE[i].Codigo + "</td>";
            html += "<td>" + oListaHemocomponenteBE[i].Descripcion + "</td>";
            html += "<td><div class='col-md-6'><input  type='text' class='form-control' onkeypress='return ValidNum(event);' value=''></div></td></tr>";
          }
          html += "</tbody></table>";
          document.getElementById("tbOrdenMedica").innerHTML = html;
        }

        function creartablaFactorRH(oListaFactorRH) {
          var html = "";
          html = "<table  class='table table-striped table-bordered table-hover'><tbody>";
          html += "<tr><td> <label class='control-label'> Factor RH </td>";
          html += "<td> <select id='cboTipoFactorRH'>";
          for (i = 0; i < oListaFactorRH.length; i++) {
            html += "<option value='" + oListaFactorRH[i].Codigo + "  ' " + " >" + oListaFactorRH[i].Descripcion + "</option>";
          }
          html += "</td></tr>";
          html += "</tbody></table>";
          document.getElementById("tbTipoFactorRH").innerHTML = html;
        }

        function creartablaTipoSangre(oListaTipoSangre) {
          var html = "";
          html = "<table  class='table table-striped table-bordered table-hover'><tbody>";
          html += "<tr><td> <label class='control-label'> Tipo Sangre </td>";
          html += "<td> <select id='cboTipoSangre'>";
          for (i = 0; i < oListaTipoSangre.length; i++) {
            html += "<option value='" + oListaTipoSangre[i].Codigo + "  ' " + " >" + oListaTipoSangre[i].Descripcion + "</option>";
          }
          html += "</td></tr>";
          html += "</tbody></table>";
          document.getElementById("tbTipoSangre").innerHTML = html;
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
        }

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
              debugger
              if (data.d != null) {
                alerta("EL paciente ha sido guardado de forma correcta en la base de datos");
                listData();
                document.getElementById('tablaPacienteDropDown').onload;
                document.getElementById('cboPaciente').onload;
                $("#agregar-paciente").modal('hide');
              }
              $scope.pacienteBtnDisabled = false;
            },
            function(error) {
              console.log(error);
              alert("Ocurrió un error en el servidor.");
              $scope.pacienteBtnDisabled = false;
            });
        }

        listData();
      }
    ]);
})();