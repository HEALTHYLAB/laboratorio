<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="reportePaciente.aspx.cs" Inherits="ComprobantesRetencion.reportes.reportePaciente" %>

<!DOCTYPE html>

<html class="no-js" lang="es">
<head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <title>Sistema de Gestión de Laboratorios y Banco de Sangre </title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="apple-touch-icon" href="apple-touch-icon.png">
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
    <script type="text/javascript" src="../js/bootstrap.min.js"></script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.5.0/Chart.min.js"></script>
    <script type="text/javascript" src="https://rawgit.com/chartjs/chartjs-plugin-annotation/master/chartjs-plugin-annotation.js"></script>
    <script type="text/javascript" src="https://cdn.rawgit.com/chartjs/Chart.js/master/samples/utils.js"></script>
    <link rel="stylesheet" href="../css/vendor.css">

    <script type="text/javascript">
        var themeSettings = (localStorage.getItem('themeSettings')) ? JSON.parse(localStorage.getItem('themeSettings')) :
                {};
        var themeName = themeSettings.themeName || '';
        if (themeName) {
            document.write('<link rel="stylesheet" id="theme-style" href="../css/app-' + themeName + '.css">');
        }
        else {
            document.write('<link rel="stylesheet" id="theme-style" href="../css/app.css">');
        }

        $(document).ready(function () {


        });


    </script>
    <style>
        .sign_green {
            color: green;
        }

        .sign_red {
            color: red;
        }
    </style>
    <script type="text/javascript">

        function fnLimpiar() {

            debugger;
            document.getElementById("cmbMes").selectedIndex = 0;
            document.getElementById("cmbAnio").selectedIndex = 0;
            document.getElementById("cmbPaciente").selectedIndex = 0;
            $('#tbResultado').empty()
            $("").appendTo("#tbResultado");
        }
        function modalDetalle(Id) { //IdTipoAnalisis, IdPaciente
            //var xdata = IdTipoAnalisis + "|" + IdPaciente
            var xdata = Id
            $.ajax({
                type: "POST",
                contentType: "application/json; charset=utf-8",
                url: "reportePaciente.aspx/lstEntResultado2",
                data: "{xData:'" + xdata + "'}",
                dataType: "json",
                success: function (data) {

                    $("#tipo_analisis_result").text(data.d.Tipo_Analisis);
                    $("#fecha_emision_result").text(data.d.Fecha_Emision);
                    $("#valor_optimo_result").text(data.d.Valor_Optimo);
                    $("#resultado_result").text(data.d.Resultado);
                    $("#medico_solicitante_result").text(data.d.Medico_Solicitante);
                    $("#fecha_solicitud_result").text(data.d.Fecha_Solicitud);
                    //$.each(data, function (key, val) {

                    //    var row = $("<tr />");
                    //    $("<td />").text(val[0].Tipo_Analisis).appendTo(row);
                    //    $("<td />").text(val[0].Fecha_Emision).appendTo(row);
                    //    $("<td />").text(val[0].Valor_Optimo).appendTo(row);
                    //    $("<td />").text(val[0].Resultado).appendTo(row);
                    //    $("<td><div class='btn-group btn-group-sm'><button type='button' class='btn btn-oval btn-success' onclick='fnAtender(" + val[0].Id_Tipo_Analisis + "," + val[0].Id_Paciente + ")'> " +
                    //        " Ver Detalle</button><button type='button' class='btn btn-oval btn-danger' onclick='fnEstadistica(" + val[0].Id_Tipo_Analisis + "," + val[0].Id_Paciente + ")'> Estadística</button></div></td>").appendTo(row);

                    //    $(row).appendTo("#tbResultado");
                    //})
                },
                error: function (xhr, textStatus, errorThrown) {
                    var errorMessage = "Ajax error: " + this.url + " textStatus: " + textStatus + " errorThrown: " + errorThrown + "  xhr.statusText: " + xhr.statusText + " xhr.status: " + xhr.status;
                    alert(errorMessage);
                    if (xhr.status != "0" || errorThrown != "abort") {
                        alert(xhr.responseText);
                    }
                }
            });
            $("#detalle-analisis").modal('show');
        }

        function modalReporte(IdTipoAnalisis, IdPaciente) {
            debugger;
            var xdata = IdTipoAnalisis + "|" + IdPaciente
            $.ajax({
                type: "POST",
                contentType: "application/json; charset=utf-8",
                url: "reportePaciente.aspx/lstEntResultado",
                data: "{xData:'" + xdata + "'}",
                dataType: "json",
                success: function (data) {

                    var data = data.d.Valor_Optimo;
                    var arr = data.split('-');
                    detalleReporte(arr[0], arr[1]);
                },
                error: function (xhr, textStatus, errorThrown) {
                    var errorMessage = "Ajax error: " + this.url + " textStatus: " + textStatus + " errorThrown: " + errorThrown + "  xhr.statusText: " + xhr.statusText + " xhr.status: " + xhr.status;
                    alert(errorMessage);
                    if (xhr.status != "0" || errorThrown != "abort") {
                        alert(xhr.responseText);
                    }
                }
            });
        }
        function detalleReporte(valor1, valor2) {

            var labels = new Array();
            var valorRegular = new Array();
            var count = 0;
            var xdata2 = document.getElementById("cmbMes").value + "|" + document.getElementById("cmbAnio").value + "|" + document.getElementById("cmbPaciente").value
            labels[0] = 0;
            $.ajax({
                type: "POST",
                contentType: "application/json; charset=utf-8",
                url: "reportePaciente.aspx/lstListaResultado2",
                data: "{xData:'" + xdata2 + "'}",
                dataType: "json",
                success: function (data) {
                    $.each(data, function () {
                        $.each(this, function (k, v) {
                            count++;
                            var data = v.Valor_Optimo;
                            var arr = data.split('-');
                            valorRegular[count] = v.Resultado;
                            labels[count] = v.Resultado;
                        });
                    });
                },
                error: function (xhr, textStatus, errorThrown) {
                    var errorMessage = "Ajax error: " + this.url + " textStatus: " + textStatus + " errorThrown: " + errorThrown + "  xhr.statusText: " + xhr.statusText + " xhr.status: " + xhr.status;
                    alert(errorMessage);
                    if (xhr.status != "0" || errorThrown != "abort") {
                        alert(xhr.responseText);
                    }
                }
            });
            window.chartColors = {
                red: 'rgb(255, 99, 132)',
                orange: 'rgb(255, 159, 64)',
                yellow: 'rgb(255, 205, 86)',
                green: 'rgb(75, 192, 192)',
                blue: 'rgb(54, 162, 235)',
                purple: 'rgb(153, 102, 255)',
                grey: 'rgb(231,233,237)'
            };

            console.log($('#valorMinimo').val());
            console.log($('#valorMaximo').val());
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

            $("#reporte-analisis").modal('show');
        }
        function GetResultado() {
            $("#tbResultado tbody").empty();
            //debugger;
            var count = 0;
            var xdata = document.getElementById("cmbMes").value + "|" + document.getElementById("cmbAnio").value + "|" + document.getElementById("cmbPaciente").value
            if (document.getElementById("cmbMes").value != "" && document.getElementById("cmbAnio").value != "") {
                $.ajax({
                    type: "POST",
                    contentType: "application/json; charset=utf-8",
                    url: "reportePaciente.aspx/lstListaResultado",
                    data: "{xData:'" + xdata + "'}",
                    dataType: "json",
                    success: function (data) {
                        debugger;
                        if (data.d == null) {
                            alert("No se encontraron resultados con los filtros seleccionados.");
                        } else {
                            $.each(data, function () {
                                $.each(this, function (k, v) {
                                    var valor = "";
                                    var data = v.Valor_Optimo;
                                    var arr = data.split('-');
                                    if (parseFloat(arr[0]) < parseFloat(v.Resultado) && parseFloat(arr[1]) > parseFloat(v.Resultado)) {
                                        valor = " <i class='fa fa-check sign_green'></i>";
                                    } else {
                                        valor = " <i class='fa fa-times sign_red'></i>";
                                    }
                                    var row = $("<tr />");
                                    $("<td />").text(v.Tipo_Analisis).appendTo(row);
                                    $("<td />").text(v.Fecha_Emision).appendTo(row);
                                    $("<td />").text(v.Valor_Optimo).appendTo(row);
                                    $("<td />").html(v.Resultado + valor).appendTo(row);
                                    //$("<td><div class='btn-group btn-group-sm'><button type='button' class='btn btn-oval btn-success' onclick='modalDetalle(" +  v.Id_Tipo_Analisis + "," + v.Id_Paciente + ")'> " +  
                                    $("<td><div class='btn-group btn-group-sm'><button type='button' class='btn btn-oval btn-success' onclick='modalDetalle(" + v.Id_ResultadoAC + ")'> " +
                                        " Ver Detalle</button><button type='button' class='btn btn-oval btn-danger' onclick='modalReporte(" + v.Id_Tipo_Analisis + "," + v.Id_Paciente + ")'> Estadística</button></div></td>").appendTo(row);

                                    $(row).appendTo("#tbResultado");
                                });
                            });
                        }

                    },
                    error: function (xhr, textStatus, errorThrown) {
                        var errorMessage = "Ajax error: " + this.url + " textStatus: " + textStatus + " errorThrown: " + errorThrown + "  xhr.statusText: " + xhr.statusText + " xhr.status: " + xhr.status;
                        alert(errorMessage);
                        if (xhr.status != "0" || errorThrown != "abort") {
                            alert(xhr.responseText);
                        }
                    }
                });
            } else {

                alert("Ingrese los filtros de búsqueda.");
            }
            //end of ajax 
        }

    </script>
</head>
<body>
    <div class="main-wrapper">
        <div class="app" id="app">
            <header class="header">
                <div class="header-block header-block-collapse hidden-lg-up">
                    <button class="collapse-btn" id="sidebar-collapse-btn">
                        <i class="fa fa-bars"></i>
                    </button>
                </div>
                <div class="header-block header-block-search hidden-sm-down">
                    <form role="search">
                        <div class="input-container">
                            <h3 class="title">Consulta de Resultado de Análisis Clínico </h3>
                        </div>
                    </form>
                </div>
                <div class="header-block header-block-nav">
                    <ul class="nav-profile">
                        <li class="profile dropdown">
                            <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                                <div class="img" style="background-image: url('../assets/faces/pikachu.jpg')"></div>
                                <span class="name">Gerson Ocrospoma
                                </span>
                            </a>
                            <div class="dropdown-menu profile-dropdown-menu" aria-labelledby="dropdownMenu1">
                                <a class="dropdown-item" href="#">
                                    <i class="fa fa-user icon"></i>
                                    Perfil
                                </a><a class="dropdown-item" href="#">
                                    <i class="fa fa-bell icon"></i>
                                    Notificaciones
                                </a><a class="dropdown-item" href="#">
                                    <i class="fa fa-gear icon"></i>
                                    Configuración
                                </a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#">
                                    <i class="fa fa-power-off icon"></i>
                                    Salir
                                </a>
                            </div>
                        </li>
                    </ul>
                </div>
            </header>
            <aside class="sidebar">
                <div class="sidebar-container">
                    <div class="sidebar-header">
                        <div class="brand">Clínica Ricardo Palma</div>
                    </div>
                    <nav class="menu">
                        <ul class="nav metismenu" id="sidebar-menu">
                            <li><a href="#">
                                <i class="fa fa-home"></i>Panel de Control
                            </a>
                            </li>
                            <li><a href="#">
                                <i class="fa fa-th-large"></i>Analisis Clínico
                            </a>
                            </li>
                            <li><a href="#">
                                <i class="fa fa-bar-chart"></i>Donaciones 
                            </a>
                            </li>
                            <li><a href="#">
                                <i class="fa fa-table"></i>Transfuciones
                            </a>
                            </li>
                            <li><a href="#">
                                <i class="fa fa-table"></i>Reportes
                            </a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <footer class="sidebar-footer">
                    <ul class="nav metismenu" id="customize-menu">
                        <li>
                            <ul>
                                <li class="customize">
                                    <div class="customize-item">
                                        <div class="row customize-header">
                                            <div class="col-xs-4"></div>
                                            <div class="col-xs-4">
                                                <label class="title">Fijo</label>
                                            </div>
                                            <div class="col-xs-4">
                                                <label class="title">Estático</label>
                                            </div>
                                        </div>
                                        <div class="row hidden-md-down">
                                            <div class="col-xs-4">
                                                <label class="title">Menu:</label>
                                            </div>
                                            <div class="col-xs-4">
                                                <label>
                                                    <input class="radio" type="radio" name="sidebarPosition" value="sidebar-fixed">
                                                    <span></span>
                                                </label>
                                            </div>
                                            <div class="col-xs-4">
                                                <label>
                                                    <input class="radio" type="radio" name="sidebarPosition" value="">
                                                    <span></span>
                                                </label>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-xs-4">
                                                <label class="title">Cabecera:</label>
                                            </div>
                                            <div class="col-xs-4">
                                                <label>
                                                    <input class="radio" type="radio" name="headerPosition" value="header-fixed">
                                                    <span></span>
                                                </label>
                                            </div>
                                            <div class="col-xs-4">
                                                <label>
                                                    <input class="radio" type="radio" name="headerPosition" value="">
                                                    <span></span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <a href="">
                                <i class="fa fa-cog"></i>Configuración
                            </a>
                        </li>
                    </ul>
                </footer>
            </aside>
            <div class="sidebar-overlay" id="sidebar-overlay"></div>

            <article class="content forms-page">
                <div class="subtitle-block">
                    <h3 class="subtitle">Consulta de Resultado de Análisis Clínico </h3>
                </div>

                <div class="col-md-12">
                    <div class="row">
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label">Paciente:</label>
                                <select name="selectSt" class="form-control" id="cmbPaciente" style="text-align-last: center;">
                                    <option value="0">--Seleccione el Paciente--</option>
                                    <option value="2">Gerson Ocrospoma</option>
                                    <option value="95666">Luis Manuel Salcedo</option>

                                </select>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label">Mes:</label>
                                <select name="selectSt" class="form-control" id="cmbMes" style="text-align-last: center;">
                                    <option value="0">--Seleccione el mes--</option>
                                    <option value="1">Enero</option>
                                    <option value="2">Febrero</option>
                                    <option value="3">Marzo</option>
                                    <option value="4">Abril</option>
                                    <option value="5">Mayo</option>
                                    <option value="6">Junio</option>
                                    <option value="7">Julio</option>
                                    <option value="8">Agosto</option>
                                    <option value="9">Setiembre</option>
                                    <option value="10">Octubre</option>
                                    <option value="11">Noviembre</option>
                                    <option value="12">Diciembre</option>
                                </select>
                            </div>
                        </div>

                        <div class="col-md-4">
                            <div class="form-group">
                                <label class="control-label">Año:</label>
                                <select name="selectSt" class="form-control" id="cmbAnio" style="text-align-last: center;">
                                    <option value="0">--Seleccione el año--</option>
                                    <option value="2010">2010</option>
                                    <option value="2011">2011</option>
                                    <option value="2012">2012</option>
                                    <option value="2013">2013</option>
                                    <option value="2014">2014</option>
                                    <option value="2015">2015</option>
                                    <option value="2016">2016</option>
                                    <option value="2017">2017</option>
                                    <option value="2018">2018</option>
                                    <option value="2019">2019</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-2 offset-md-4">
                            <div class="form-group">
                                <label class="control-label">&nbsp; </label>
                                <button type="button" onclick="GetResultado();" class="btn btn-primary btn-block "><i class="fa fa-search"></i>&nbsp;Buscar</button>
                            </div>
                        </div>
                        <div class="col-md-2">
                            <div class="form-group">
                                <label class="control-label">&nbsp;</label>
                                <button type="button" class="btn btn-warning btn-block" onclick="fnLimpiar();">Limpiar</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <table id="tbResultado" class="table table-striped table-hover table-bordered">
                        <thead>
                            <tr>
                                <th class="center">Tipo de Análisis</th>
                                <th class="center">Fecha de Emisión</th>
                                <th class="center">Valor Óptimo</th>
                                <th class="center">Resultado</th>
                                <th class="center">Opciones</th>
                            </tr>
                        </thead>
                        <tbody>
                        </tbody>
                    </table>
                </div>
            </article>
        </div>
    </div>
    <div class="modal fade" id="detalle-analisis">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        <span class="sr-only">Close</span>
                    </button>
                    <h4 class="modal-title">Detalle Análisis Clínico</h4>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="form-group">
                                <label class="control-label col-md-6 py-2" style="text-align: center;">Tipo de Análisis: </label>
                                <label class="control-label col-md-6 py-2" id="tipo_analisis_result" style="font-weight: 100;"></label>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="form-group">
                                <label class="control-label col-md-6 py-2" style="text-align: center;">Fecha de Emisión: </label>
                                <label class="control-label col-md-6 py-2" id="fecha_emision_result" style="font-weight: 100;"></label>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="form-group">
                                <label class="control-label col-md-6 py-2" style="text-align: center;">Valor óptimo: </label>
                                <label class="control-label col-md-6 py-2" id="valor_optimo_result" style="font-weight: 100;"></label>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="form-group">
                                <label class="control-label col-md-6 py-2" style="text-align: center;">Resultado: </label>
                                <label class="control-label col-md-6 py-2" id="resultado_result" style="font-weight: 100;"></label>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="form-group">
                                <label class="control-label col-md-6 py-2" style="text-align: center;">Médico Solicitante: </label>
                                <label class="control-label col-md-6 py-2" id="medico_solicitante_result" style="font-weight: 100;"></label>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="form-group">
                                <label class="control-label col-md-6 py-2" style="text-align: center;">Fecha de Solicitud: </label>
                                <label class="control-label col-md-6 py-2" id="fecha_solicitud_result" style="font-weight: 100;"></label>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary btn-lg" data-dismiss="modal">Cerrar</button>
                </div>
            </div>
        </div>
    </div>


    <div class="modal fade" id="reporte-analisis">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        <span class="sr-only">Close</span>
                    </button>
                    <h4 class="modal-title">Reporte Análisis Clinico</h4>
                </div>
                <div class="modal-body">
                    <h4 style ="text-align:left">Tipo de Análisis: Glucosa</h4>
                    <canvas id="myChart" width="400" height="200"></canvas>
                    <input type="hidden" id="valorMinimo"/>
                    <input type="hidden" id="valorMaximo"/>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary btn-lg" data-dismiss="modal">Cerrar</button>
                </div>
            </div>
        </div>
    </div>
</body>
</html>



