(function() {
  angular.module('lab.features')
    .controller('ReporteCtrl', [
      '$scope',
      'ReporteSvc',
      function($scope, ReporteSvc) {
        $scope.busqueda = {};
        $scope.analisis = [];
        $scope.analisisSelec = {};

        function alerta(texto) {
          angular.element("#txttexto").text(texto);
          angular.element("#alert").modal('show');
        }

        $scope.buscar = function() {
          ReporteSvc.getAnalisis($scope.busqueda).then(
            function(data) {
              $scope.analisis = data.d;
            },
            function(error) {
              console.log(error);
              alerta("Ocurrió un error en el servidor.");
            });
        };

        $scope.modalDetalle = function (codResultadoAC) {
          ReporteSvc.getDetalle(codResultadoAC).then(
            function (data) {
              $scope.analisisSelec = data.d;
              angular.element("#detalle-analisis").modal('toggle');
            }, function (error) {
              console.log(error);
              alerta("Ocurrió un error en el servidor.");
            })
        };

        $scope.modalReporte = function (codTipoAnalisis, codPaciente) {
          ReporteSvc.getReporte(codTipoAnalisis, codPaciente).then(
            function (data) {
              $scope.reporte = data.d;

              var arr = $scope.reporte.valorOptimo.split('-');
              detalleReporte(arr[0], arr[1]);
            }, function (error) {
              console.log(error);
              alerta("Ocurrió un error en el servidor.");
            })
        };

        function detalleReporte(valor1, valor2) {
            var labels = [];
            var valorRegular = [];
            var count = 0;

            ReporteSvc.getAnalisis($scope.busqueda).then(
              function (data) {debugger;
                if (_.get(data, 'd.length')) {
                  _.forEach(data.d, function (item) {
                    count++;
                    var data = item.valorOptimo;
                    var arr = data.split('-');
                    valorRegular[count] = item.resultado;
                    labels[count] = item.resultado;
                  });
                }

                window.chartColors = {
                red: 'rgb(255, 99, 132)',
                orange: 'rgb(255, 159, 64)',
                yellow: 'rgb(255, 205, 86)',
                green: 'rgb(75, 192, 192)',
                blue: 'rgb(54, 162, 235)',
                purple: 'rgb(153, 102, 255)',
                grey: 'rgb(231,233,237)'
            };

            new Chart(document.getElementById("myChart").getContext("2d"), {
                type: "bar",
                data: {
                    datasets: [
                   {
                       label: 'Linea',
                       data: valorRegular,
                       fill: false,
                       borderColor: window.chartColors.blue,
                       type: 'line'
                   },
                    {
                        label: 'Barra',
                        data: valorRegular,
                    }],
                    labels: labels
                },
                options: {
                    responsive: true,
                    title: {
                        display: true,
                        text: 'Reporte Estadístico de Análisis'
                    },
                    tooltips: {
                        mode: 'index',
                        intersect: true
                    },
                    annotation: {
                        annotations: [{
                            type: 'line',
                            mode: 'horizontal',
                            scaleID: 'y-axis-0',
                            value: valor1,
                            borderColor: window.chartColors.green,
                            borderWidth: 4

                        },
                        {
                            type: 'line',
                            mode: 'horizontal',
                            scaleID: 'y-axis-0',
                            value: valor2,
                            borderColor: window.chartColors.red,
                            borderWidth: 4

                        }]
                    }
                }

            });

            angular.element("#reporte-analisis").modal('toggle');
              }, function (error) {
                console.log(error);
                alerta("Ocurrió un error en el servidor.");
              });
            labels[0] = 0;

        }
      }
    ]);
})();