<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="VisarSolicitudTransfusion.aspx.cs" Inherits="ComprobantesRetencion.VisarSolicitudTransfusion" %>

<!DOCTYPE html>

<html class="no-js" lang="es">
<head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <title>Sistema de Gestión de Laboratorios y Banco de Sangre </title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="apple-touch-icon" href="apple-touch-icon.png">
    <link rel="stylesheet" href="css/vendor.css">
    <script src="http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js" type="text/javascript"></script>
    <script>
        var themeSettings = (localStorage.getItem('themeSettings')) ? JSON.parse(localStorage.getItem('themeSettings')) :
         {};
        var themeName = themeSettings.themeName || '';
        if (themeName) {
            document.write('<link rel="stylesheet" id="theme-style" href="css/app-' + themeName + '.css">');
        }
        else {
            document.write('<link rel="stylesheet" id="theme-style" href="css/app.css">');
        }

        function ValidNum() {
            if (event.keyCode < 48 || event.keyCode > 57) {
                event.returnValue = false;
            }
        }

        function regresar() {
            location.href = '../transfusion/FrmListaVisarSolicitudTransfusion.aspx';
        }

        function getParameterByName(name) {
            name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
            var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
            results = regex.exec(location.search);
            return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
        }

        $(document).ready(function () {

            btnVisar    = document.getElementById("btnVisar");
            btnRechazar = document.getElementById("btnRechazar");
            btnRegresar = document.getElementById("btnRegresar");

            lstSolicitudTransfusion();
            GetHemocomponentes();

            btnVisar.onclick = function () {

                var varRpta = confirm("¿Está seguro de visar la solicitud de transfusión? ");
                
                if (varRpta) {
                    var xdata = document.getElementById("hdNroSolicitud").value;
                    xdata = xdata + '|4';
                    $.ajax({
                        type: "POST",
                        async: false,
                        url: "VisarSolicitudTransfusion.aspx/visarSolicitudTransfusion",
                        data: "{xdata: '" + xdata + "'}",
                        contentType: "application/json; charset=utf-8",
                        dataType: "json",
                        success: function (response) {
                            if (response.d != null) {
                                alert("La solicitud de transfusion fue visada de forma correcta");
                                regresar();
                            }
                        },
                        error: function (error) { alert("Error al visar la solicitud de transfusión: " + error); }
                    });
                }
        }

            btnRechazar.onclick = function () {

                var varRpta = confirm("¿Está seguro de rechazar la solicitud de transfusión? ");

                if (varRpta) {
                    var xdata = document.getElementById("hdNroSolicitud").value;
                    xdata = xdata + '|5';
                    $.ajax({
                        type: "POST",
                        async: false,
                        url: "VisarSolicitudTransfusion.aspx/visarSolicitudTransfusion",
                        data: "{xdata: '" + xdata + "'}",
                        contentType: "application/json; charset=utf-8",
                        dataType: "json",
                        success: function (response) {
                            if (response.d != null) {
                                alert("La solicitud de transfusion fue rechazada de forma correcta");
                                regresar();
                            }
                        },
                        error: function (error) { alert("Error al rechazar la solicitud de transfusión: " + error); }
                    });
                }
            }

            btnRegresar.onclick = function () {
                regresar();
            }
        });

        function alerta(texto) {
            document.getElementById("txttexto").innerHTML = texto;
            $("#alert").modal('show');
        }

        function lstDatos() {

            // objTransfusion.cuenta 

            $.ajax({
                type: "POST",
                async: false,
                url: "GenerarSolicitudTransfusion.aspx/lstDatos",
                data: "{}",
                //   data: JSON.stringify({ oTransfusionBE: objReserva }),
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function (response) {
                    if (response.d != null) {

                        creartablaTecnico(response.d.oListaTecnicoBE);
                        creartablaOrdenMedica(response.d.oListaOrdenMedicaBE);
                        creartablaHemocomponente(response.d.oListaHemocomponenteBE);

                        document.getElementById("txtsoli").value = response.d.codigo;
                        document.getElementById("txtfecha").value = response.d.fechaactual;


                    }
                },
                error: function (error) { alert("Error al cargar Tecnicos error: " + error); }
            });
        }

        function lstSolicitudTransfusion() {

            //debugger;
            var xdata = getParameterByName('cod');

            $.ajax({
                type: "POST",
                async: false,
                url: "VisarSolicitudTransfusion.aspx/lstSolicitudTransfusion",

                data: "{xData:'" + xdata + "'}",

                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function (response) {
                    //debugger;
                    if (response.d != null) {

                        document.getElementById("txtNroSolicitud").value = response.d.NroSolicitud;
                        document.getElementById("hdNroSolicitud").value = response.d.idSolicitud;
                        document.getElementById("txtEstado").value = response.d.Estado;
                        document.getElementById("txtOrdenMedica").value = response.d.NroOrdenMedica;
                        document.getElementById("hdOrdenMedica").value = response.d.idOrdenMedica;
                        document.getElementById("txtfecha").value = response.d.FechaRegistro;
                        document.getElementById("txtPaciente").value = response.d.Paciente;
                        document.getElementById("txtFechaNacimiento").value = response.d.Nacimiento;
                        document.getElementById("txtEdad").value = response.d.Edad;
                        document.getElementById("txtPeso").value = response.d.Peso;
                        document.getElementById("txtSexo").value = response.d.Sexo;
                        document.getElementById("txtMotivo").value = response.d.motivo;
                        document.getElementById("txtMedico").value = response.d.medico;
                    }
                },
                error: function (error) { alert("Error al cargar Solicitud error: " + error); }
            });

        }

        function GetHemocomponentes() {
            //debugger;
            var xdata = getParameterByName('cod');

            $("#tbbodyHemo").html("");
            var row = $("<tr />");

            $("<th />").text("Código").appendTo(row);
            $("<th />").text("Descripción").appendTo(row);
            $("<th />").text("Globulos Rojos").appendTo(row);
            $("<th />").text("Cantidad").appendTo(row);
            
            $(row).appendTo("#tbbodyHemo");

            $.ajax({
                type: "POST",
                contentType: "application/json; charset=utf-8",
                url: "VisarSolicitudTransfusion.aspx/lstSolicitudHemocomponentes",
                data: "{xData:'" + xdata + "'}",
                dataType: "json",
                success: function (data) {

                    $.each(data, function (key, val) {

                        if (val != null) {
                            for (var i = 0; i < val.length; i++) {
                                var row = $("<tr />");
                                $("<td />").text(val[i].Codigo).appendTo(row);
                                $("<td />").text(val[i].Descripcion).appendTo(row);
                                $("<td />").text(val[i].GlobulosRojos).appendTo(row);
                                $("<td />").text(val[i].CantidadRequerida).appendTo(row);

                                $(row).appendTo("#tbbodyHemo");
                            }
                        }
                    })
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

        function creartablaTecnico(oListaTecnico) {

            var html = "<table class='table table-striped table-bordered table-hover'> <thead><tr><th>Seleccionar</th><th>Técnico</th></tr></thead><tbody>";

            for (i = 0; i < oListaTecnico.length; i++) {

                html += "<tr><td> <label> <input class='checkbox chktecnico' type='checkbox' ";
                html += "datos='" + oListaTecnico[i].IdTecnico + "|" + oListaTecnico[i].Nombre + "'> <span>&nbsp;</span></label></td>";
                html += "<td>" + oListaTecnico[i].Nombre + "</td></tr>";
            }
            html += "   </tbody></table>"

            document.getElementById("tbTecnico").innerHTML = html;
        }


        function creartablaOrdenMedica(oListaOrdenMedicaBE) {
            var html2 = "";


            html2 = "<table  class='table table-striped table-bordered table-hover'><thead> <tr><th>Seleccionar</th><th>Nro. Orden</th><th>Paciente</th><th>Fecha de </th><th>Estado </th>></tr> </thead><tbody>";
            for (i = 0; i < oListaOrdenMedicaBE.length; i++) {

                html2 += "<tr><td> <label> <input class='checkbox chkorden' type='checkbox' ";
                html2 += "datos='" + oListaOrdenMedicaBE[i].idOrden + "|" + oListaOrdenMedicaBE[i].codigoOrden + "|" + oListaOrdenMedicaBE[i].idPaciente + "|" + oListaOrdenMedicaBE[i].Paciente + "|" + oListaOrdenMedicaBE[i].fecha + "|" + oListaOrdenMedicaBE[i].peso + "|" + oListaOrdenMedicaBE[i].edad + "|" + oListaOrdenMedicaBE[i].sexo + "|" + oListaOrdenMedicaBE[i].hclinica + "'> <span>&nbsp;</span></label></td>";
                html2 += "<td>" + oListaOrdenMedicaBE[i].codigoOrden + "</td>";
                html2 += "<td>" + oListaOrdenMedicaBE[i].Paciente + "</td>";
                html2 += "<td>" + oListaOrdenMedicaBE[i].fecha + "</td>";
                html2 += "<td>" + oListaOrdenMedicaBE[i].Estado + "</td>";
                html2 += "</tr>";

            }
            html2 += "</tbody></table>";

            document.getElementById("tbHemocomponente").innerHTML = html2;
        }

        function creartablaHemocomponente(oListaHemocomponenteBE) {

            var html = "";
            html = "<table  class='table table-striped table-bordered table-hover'><thead>   <tr> <th>Seleccionar</th><th>Códigon</th><th>Hemocomponente</th><th>Unidades Requeridas</th></tr> </thead><tbody>";
            for (i = 0; i < oListaHemocomponenteBE.length; i++) {

                html += "<tr><td> <label> <input class='checkbox chkhemo' type='checkbox'";
                html += "datos='" + oListaHemocomponenteBE[i].IdHemocomponente + "|" + oListaHemocomponenteBE[i].Codigo + "|" + oListaHemocomponenteBE[i].Descripcion + "'> <span>&nbsp;</span></label></td>";
                html += "<td>" + oListaHemocomponenteBE[i].Codigo + "</td>";
                html += "<td>" + oListaHemocomponenteBE[i].Descripcion + "</td>";
                html += "<td><div class='col-md-6'><input  type='text' class='form-control' onkeypress='return ValidNum(event);' value=''></div></td></tr>";
            }
            html += "</tbody></table>";
            console.log(html)
            document.getElementById("tbOrdenMedica").innerHTML = html;
        }


        function Eliminartr(icod) {
            $("#tbbodyHemo").find("tr[id= " + icod + "]").remove();
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
                            <h3 class="title">Visar Solicitud de Transfusión </h3>
                        </div>
                    </form>
                </div>
                <div class="header-block header-block-nav">
                    <ul class="nav-profile">
                        <li class="profile dropdown">
                            <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                                <div class="img" style="background-image: url('assets/faces/pikachu.jpg')"></div>
                                <span class="name">James Tomasto
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
                <section class="section">
                    <div class="row sameheight-container">
                        <div class="col-md-12">
                            <div class="card card-block sameheight-item">
                                <form class="row">
                                    <div class="col-md-12">
                                        <fieldset class="form-group">
                                            <legend class="subtitulo">Datos de la Solicitud</legend>
                                            <div class="row">
                                                <div class="col-md-4">
                                                    <div class="form-group">
                                                        <label class="control-label">Nro Solicitud:</label>
                                                        <input id="txtNroSolicitud" type="text" readonly="readonly" class="form-control" value="">
                                                        <input id="hdNroSolicitud" type="hidden" value="">
                                                    </div>
                                                </div>
                                                <div class="col-md-4">
                                                    <div class="form-group">
                                                        <label class="control-label">Estado Solicitud:</label>
                                                        <input id="txtEstado" type="text" readonly="readonly" class="form-control" value="">
                                                        <input id="hdEstado" type="hidden" value="">
                                                    </div>
                                                </div>
                                            </div>
                                            <legend class="subtitulo">Datos de la Orden Médica</legend>
                                            <div class="row">
                                                <div class="col-md-4">
                                                    <div class="form-group">
                                                        <label class="control-label">Nro Orden Médica:</label>
                                                        <input id="txtOrdenMedica" type="text" readonly="readonly" class="form-control" value="">
                                                        <input id="hdOrdenMedica" type="hidden" value="">
                                                    </div>
                                                </div>
                                                <div class="col-md-4">
                                                    <div class="form-group">
                                                        <label class="control-label">Fecha Registro:</label>
                                                        <div class="input-group">
                                                            <span class="input-group-addon">
                                                                <i class="fa fa-calendar"></i>
                                                            </span>
                                                            <input id="txtfecha" type="text" readonly="readonly" class="form-control" placeholder="Ingresar Fecha">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </fieldset>
                                    </div>
                                    <div class="col-md-12">
                                        <fieldset class="form-group">
                                            <legend class="subtitulo">Datos del Paciente:</legend>
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <div class="form-group">
                                                        <label class="control-label">Paciente:</label>
                                                        <input id="txtPaciente" type="text" readonly="readonly" class="form-control" value="">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">

                                                <div class="col-md-3">
                                                    <div class="form-group">
                                                        <label class="control-label">Fecha Nacimiento:</label>
                                                        <div class="input-group">
                                                            <span class="input-group-addon">
                                                                <i class="fa fa-calendar"></i>
                                                            </span>
                                                            <input id="txtFechaNacimiento" type="text" readonly="readonly" class="form-control" placeholder="">
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-3">
                                                    <div class="form-group">
                                                        <label class="control-label">Edad:</label>
                                                        <input id="txtEdad" type="text" readonly="readonly" class="form-control" value="">
                                                    </div>
                                                </div>
                                                <div class="col-md-3">
                                                    <div class="form-group">
                                                        <label class="control-label">Peso:</label>
                                                        <input id="txtPeso" type="text" readonly="readonly" class="form-control" value="" />
                                                    </div>
                                                </div>
                                                <div class="col-md-3">
                                                    <div class="form-group">
                                                        <label class="control-label">Sexo:</label>
                                                        <input id="txtSexo" type="text" readonly="readonly" class="form-control" value="" />
                                                    </div>
                                                </div>
                                            </div>
                                        </fieldset>
                                    </div>
                                    <div class="col-md-12">
                                        <fieldset class="form-group">
                                            <legend class="subtitulo">Datos de la Transfusión</legend>
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <div class="form-group">
                                                        <label class="control-label">Motivo:</label>
                                                        <input id="txtMotivo" type="text" readonly="readonly" class="form-control" value="">
                                                    </div>
                                                </div>
                                                <div class="col-md-12">
                                                    <div class="form-group">
                                                        <label class="control-label">Médico:</label>
                                                        <input id="txtMedico" type="text" readonly="readonly" class="form-control" value="">
                                                    </div>
                                                </div>
                                            </div>
                                        </fieldset>
                                    </div>
                                    <div class="col-md-12">
                                        <fieldset class="form-group">
                                            <legend class="subtitulo">Listado de Hemocomponentes</legend>
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <div class="table-responsive">
                                                        <table id="tbbodyHemo" class="table table-striped table-hover table-bordered">
                                                            <thead>
                                                                <tr>
                                                                    <th>Código</th>
                                                                    <th>Descripción</th>
                                                                    <th>Globulos Rojos</th>
                                                                    <th>Cantidad</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </fieldset>
                                    </div>
                                    
                                    <div class="col-md-12">
                                        <div class="form-group row pie-formulario">
                                            <div class="col-md-12"></div>
                                            <div class="col-md-2">
                                                <button type="button" id ="btnVisar" data-toggle="modal" data-target="#confirmar-visar" class="btn btn-success btn-lg btn-block">Visar</button>
                                            </div>
                                            <div class="col-md-2">
                                                <button type="button" id ="btnRechazar" data-toggle="modal" data-target="#confirmar-rechazar" class="btn btn-success btn-lg btn-block">Rechazar</button>
                                            </div>
                                            <div class="col-md-2">
                                                <button type="button" id ="btnRegresar" data-toggle="modal" data-target="#confirmar-regresar" class="btn btn-success btn-lg btn-block">Regresar</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </article>
        </div>
    </div>
    <div class="ref" id="ref">
        <div class="color-primary"></div>
        <div class="chart">
            <div class="color-primary"></div>
            <div class="color-secondary"></div>
        </div>
    </div>
    <script src="js/vendor.js"></script>
    <script src="js/app.js"></script>
</body>
</html>
