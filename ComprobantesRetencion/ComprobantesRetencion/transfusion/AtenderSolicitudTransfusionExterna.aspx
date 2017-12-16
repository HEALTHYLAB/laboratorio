﻿<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="AtenderSolicitudTransfusionExterna.aspx.cs" Inherits="ComprobantesRetencion.transfusion.AtenderSolicitudTransfusionExterna" %>

<!DOCTYPE html>

<html class="no-js" lang="es">
<head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <title>Sistema de Gestión de Laboratorios y Banco de Sangre </title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="apple-touch-icon" href="apple-touch-icon.png">
    <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
    <link rel="stylesheet" href="../css/vendor.css">
    <script>
        var themeSettings = (localStorage.getItem('themeSettings')) ? JSON.parse(localStorage.getItem('themeSettings')) :
         {};
        var themeName = themeSettings.themeName || '';
        var hemocomponentes;
        var cantidadHemocomponentes;
        var idSolicitud;
        if (themeName) {
            document.write('<link rel="stylesheet" id="theme-style" href="../css/app-' + themeName + '.css">');
        }
        else {
            document.write('<link rel="stylesheet" id="theme-style" href="../css/app.css">');
        }

        function getParameterByName(name) {
            name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
            var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
            results = regex.exec(location.search);
            return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
        }

        $(document).ready(function () {
            lstDatos();
            btnOR = document.getElementById("btnOR");
            btngOR= document.getElementById("btngOR");
            btnRegresar = document.getElementById("btnRegresar");
            btnConsultarBancos = document.getElementById("btnConsultarBancos");

            btnOR.onclick = function () {
                var num = 0, split,m = 0;
                var html = "";
                var verfCompNegativo = "";
                var contadorNegativo = 0;
                var contadorPositivo = 0;
                var CantidadRequerida = 0;
                $(".chkhemo").each(function () {

                    if ($(this).is(":checked") == true) {
                        num++;
                        split = this.getAttribute('datos').split('|');
                        verfCompNegativo = split[4];
                        CantidadRequerida = split[3];

                        for (i = 0; i < CantidadRequerida; i++) {
                            //111|1|1(Id,Idrequerimiento,Idsolicitud)
                            html += "<tr class='trhemoOR' id='" + "r" + num + split[0] + i + "' datos='" + num + split[0] + i + "|" + split[0] + "|" + split[2] + "|" + split[5]  + "'><td>";
                            html += split[2] + " </td><td><div class='col-md-6'><input id='" + "t" + num + split[0] + i + "' type='text' class='form-control' value=''></div></td>";
                            html += "</tr>";
                        }

                        if (verfCompNegativo == "Negativo" || verfCompNegativo == "") {
                            contadorNegativo++;
                        }else{contadorPositivo++}
                    }
                });
                
                var selectedValues = $('#selectBancos').val();
                
                $.ajax({
                    type: "POST",
                    async: false,
                    url: "/transfusion/AtenderSolicitudTransfusionExterna.aspx/actualizarSolicitudExterna",
                    data: "{idSolicitudExterna:'" + idSolicitud + "', idBancosSt: '" + selectedValues + "', idHemocompSt:'"+hemocomponentes+"', cantSt:'"+cantidadHemocomponentes+"'}",
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    success: function (response) {
                        if (response.d != null) {
                            alerta("Se Guardo la Orden de Requerimiento exitosamente");
                            $("#GenerarORH").modal('hide');
                 
                        }
                    },
                    error: function (error) { alert("Error al ingresar la Orden de Requerimiento error: " + error); }
                });
                            
            }

            btngOR.onclick = function ()
            {
                var detalle = "";
                $(".trhemoOR").each(function () {      
                    objDetalle = {};
                    //110|1|Concentrado Globulos Rojos
                    split = this.getAttribute('datos').split('|');
                    //num++;
                    detalle += split[0] + "|" + split[1] + "|" + split[2] + "|" + split[3] + "|" +  document.getElementById("t" + split[0]).value + "-";   
                    if (document.getElementById("t" + split[0]).value == "") {
                        alerta("Por favor ingrese el numero de serie de la unidad");
                        //foco("t" + split[0]);
                        return;
                    }
                });

                var xdetalle = detalle.substr(0,detalle.length - 1);

                $.ajax({
                    type: "POST",
                    async: false,
                    url: "/transfusion/AtenderSolicitudTransfusion.aspx/actualizarSolicitudExterna",
                    data: "{xdetalle:'" + xdetalle + "'}",
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    success: function (response) {
                        if (response.d != null) {                          
                            alerta("Se Generó la Orden Externa exitosamente con codigo: "+response.d);
                            
                        }
                    },
                    error: function (error) { alert("Error al ingresar la Orden de Requerimiento error: " + error); }
                });
            }

            btnRegresar.onclick = function () {
                fnVolver();
            }

            btnConsultarBancos.onclick = function () {
                $.ajax({
                    type: "POST",
                    async: false,
                    url: "/transfusion/AtenderSolicitudTransfusionExterna.aspx/getBancosExternos",
                    data: "{ids:'"+ hemocomponentes+"', cantidad: '"+cantidadHemocomponentes+"'}",
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    success: function (response) {
                        if (response.d != null) {
                            var html = '<select id="selectBancos" multiple>';
                            $.each(response.d, function (idx, value) {
                                html += '<option value="' + value.id  + '">'+ value.descripcion+'</option>';
                            });

                            html += '</select>';

                            document.getElementById("listBancos").innerHTML = html;
                        }
                    },
                    error: function (error) { alert("Error al ingresar la Orden de Requerimiento error: " + error); }
                });
            }
        });

        function fnVolver() {
                location.href = '../transfusion/FrmListaSolicitudTransfusion.aspx';
        }

        function alerta(texto) {
            document.getElementById("txttexto").innerHTML = texto;
            $("#alert").modal('show');
        }

        function foco(idElemento) {
            document.getElementById(idElemento).focus();
        }

        function lstDatos() {

            var xdata = getParameterByName('cod');
            //var xdata = "1";
            debugger;
            $.ajax({
                type: "POST",
                async: false,
                url: "/transfusion/AtenderSolicitudTransfusionExterna.aspx/GetDatosSolicitudTransfusionExt",
                //data: "{}",
                data: "{xData:'" + xdata + "'}",
                //   data: JSON.stringify({ oTransfusionBE: objReserva }),
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function (response) {
                    debugger;
                    if (response.d != null) {
                        idSolicitud = response.d.idSolicitud;
                        document.getElementById("txtsoli").value = response.d.NroSolicitud;
                        document.getElementById("txtfechareg").value = response.d.FechaRegistro;
                        document.getElementById("txtdesestado").value = response.d.Estado;
                        document.getElementById("txtmotivo").value = response.d.motivo;
                        document.getElementById("txtpaciente").value = response.d.Paciente;
                        document.getElementById("txtedad").value = response.d.Edad;
                        document.getElementById("txtpeso").value = response.d.Peso;
                        document.getElementById("txtsexo").value = response.d.Sexo;
                        document.getElementById("txtnrohistoriaclinica").value = response.d.NroHistoriaClinica;
                        document.getElementById("txtdolencias").value = response.d.Dolencia;

                        creartablaHemocomponenteSolicitud(response.d.oListaHemocomponenteSolicitudBE);
                    }
                },
                error: function (error) { alert("Error al cargar Solicitud error: " + error); }
            });
        }

        function crearComboTipoSangre(oListaTipoSangreBE) {

            var html = "<select id='cboTipoSangre'>";
            html += "<option value='0'>--Seleccione--</option>";

            for (i = 0; i < oListaTipoSangreBE.length; i++) {
                html += "<option value='" + oListaTipoSangreBE[i].Codigo + "'>" + oListaTipoSangreBE[i].Descripcion + "</option>";
            }
            html += "</select>"

            document.getElementById("tbComboTipoSangre").innerHTML = html;
        }

        function crearComboFactroRH(oListaFactorRHBE) {

            var html = "<select id='cboFactorRH'>";
            html += "<option value='0'>--Seleccione--</option>";

            for (i = 0; i < oListaFactorRHBE.length; i++) {
                html += "<option value='" + oListaFactorRHBE[i].Codigo + "'>" + oListaFactorRHBE[i].Descripcion + "</option>";
            }
            html += "</select>"

            document.getElementById("tbComboFactorRH").innerHTML = html;
        }

        function creartablaHemocomponenteSolicitud(oListaHemocomponenteSolicitudBE) {
            hemocomponentes = [];
            cantidadHemocomponentes = [];
            for (var i in oListaHemocomponenteSolicitudBE) {
                hemocomponentes.push(oListaHemocomponenteSolicitudBE[i].idHemocomponente);
                cantidadHemocomponentes.push(oListaHemocomponenteSolicitudBE[i].CantidadRequerida);
            }
            var html = "";
            html = "<table  class='table table-striped table-bordered table-hover'><thead><tr><th>Nro</th><th>Hemocomponente</th>";
            html += "<th>Cantidad Requerida</th><th>Unidades Compatibles</th>";
            html += "<th>NroSolicitud</th>";
            for (i = 0; i < oListaHemocomponenteSolicitudBE.length; i++) {
                html += "<tr>";
                //html += "datos='" + oListaHemocomponenteSolicitudBE[i].idHemocomponente + "|" + oListaHemocomponenteSolicitudBE[i].Numero + "|" + oListaHemocomponenteSolicitudBE[i].Hemocomponente + "|" +  oListaHemocomponenteSolicitudBE[i].CantidadRequerida + "|" + oListaHemocomponenteSolicitudBE[i].Compatibilidad  + "|" +  oListaHemocomponenteSolicitudBE[i].idSolicitud + "'> <span>&nbsp;</span></label></td>";
                html += "<td>" + oListaHemocomponenteSolicitudBE[i].Numero + "</td>";
                html += "<td>" + oListaHemocomponenteSolicitudBE[i].Hemocomponente + "</td>";
                html += "<td>" + oListaHemocomponenteSolicitudBE[i].CantidadRequerida + "</td>";
                html += "<td>" + oListaHemocomponenteSolicitudBE[i].UnidadesCompatibles + "</td>";
                html += "<td>" + oListaHemocomponenteSolicitudBE[i].NroSolicitud + "</td>";
                html += "</tr>";
            }
            html += "</tbody></table>";
            console.log(html)
            document.getElementById("tbHemocomponentesSolicitud").innerHTML = html;
        }

        function validaSoloNumero(e) {
            tecla = (document.all) ? e.keyCode : e.which;

            //Tecla de retroceso para borrar, siempre la permite
            if (tecla == 8) {
                return true;
            }

            //Tecla de punto
            if (tecla == 46) {
                return true;
            }

            // Patron de entrada, en este caso solo acepta numeros
            patron = /[0-9]/;
            tecla_final = String.fromCharCode(tecla);
            return patron.test(tecla_final);
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
                            <h3 class="title">Atender Solicitud de Transfusión </h3>
                        </div>
                    </form>
                </div>
                <div class="header-block header-block-nav">
                    <ul class="nav-profile">
                        <li class="profile dropdown">
                            <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                                <div class="img" style="background-image: url('../assets/faces/pikachu.jpg')"></div>
                                <span class="name">Jose Vascones
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
                            <li><a href="/GenerarSolicitudTransfusion.aspx">
                                <i class="fa fa-home"></i>Generar Solicitud de Transfusión
                            </a>
                            </li>
                            <li><a href="/GenerarSolicitudTransfusionEmergencia.aspx">
                                <i class="fa fa-th-large"></i>Generar Solicitud de Transfusión de Emergencia
                            </a>
                            </li>
                            <li><a href="/transfusion/FrmListaSolicitudTransfusion.aspx">
                                <i class="fa fa-table"></i>Transfusiones
                            </a>
                            </li>
                         <li><a href="/transfusion/FrmListaVisarSolicitudTransfusion.aspx">
                                <i class="fa fa-table"></i>Visar Solicitud
                            </a>
                            </li>
                            <li><a href="/transfusion/ListarSolicitudTransfusionExterna.aspx">
                                <i class="fa fa-table"></i>Actualizar Solicitud de Transfusión Externa
                            </a>
                            </li>
                            <li><a href="/reportes/reportePaciente.aspx">
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
                    <h3 class="subtitle">Solicitud de Transfusión </h3>
                </div>
                <section class="section">
                    <div class="row sameheight-container">
                        <div class="col-md-12">
                            <div class="card card-block sameheight-item">
                                <form class="row">
                                    <div class="col-md-4">
                                        <div class="form-group">
                                            <label class="control-label">Nro. Solicitud:</label>
                                            <input id="txtsoli" type="text" readonly="readonly" class="form-control">
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="form-group">
                                            <label class="control-label">Fecha Registro:</label>
                                            <div class="input-group">
                                                <span class="input-group-addon">
                                                    <i class="fa fa-calendar"></i>
                                                </span>
                                                <input id="txtfechareg" type="text" class="form-control" placeholder="Ingresar Fecha" readonly="readonly">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="form-group">
                                            <label class="control-label">Estado:</label>
                                            <input id="txtdesestado" type="text" readonly="readonly" class="form-control">
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="form-group">
                                            <label class="control-label">Motivo Transfusión</label>
                                            <textarea id="txtmotivo" rows="3" readonly="readonly" class="form-control boxed"></textarea>
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <fieldset class="form-group">
                                            <legend class="subtitulo">Datos del Paciente:</legend>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <label class="control-label">Paciente:</label>
                                                        <input id="txtpaciente" type="text" readonly="readonly" class="form-control">
                                                    </div>
                                                </div>
                                                <div class="col-md-2">
                                                    <div class="form-group">
                                                        <label class="control-label">Edad:</label>
                                                        <input id="txtedad" type="text" readonly="readonly" class="form-control">
                                                    </div>
                                                </div>
                                                <div class="col-md-2">
                                                    <div class="form-group">
                                                        <label class="control-label">Peso:</label>
                                                        <input id="txtpeso" type="text" readonly="readonly" class="form-control">
                                                    </div>
                                                </div>
                                                <div class="col-md-2">
                                                    <div class="form-group">
                                                        <label class="control-label">Sexo:</label>
                                                        <input id="txtsexo" type="text" readonly="readonly" class="form-control">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-4">
                                                    <div class="form-group">
                                                        <label class="control-label">Nro. Historial Clínico:</label>
                                                        <input id="txtnrohistoriaclinica" type="text" readonly="readonly" class="form-control">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <div class="form-group">
                                                        <div class="form-group">
                                                            <label class="control-label">Dolencias</label>
                                                            <textarea id="txtdolencias" rows="3" readonly="readonly" class="form-control boxed"></textarea>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </fieldset>
                                    </div>
                                    
                                    <div class="col-md-12">
                                        <fieldset class="form-group">
                                            <legend class="subtitulo">Hemocomponentes</legend>
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <div class="table-responsive" id="tbHemocomponentesSolicitud">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-5">
                                                    <div class="form-group">
                                                        <br />
                                                        <button type="button" data-toggle="modal" id="btnConsultarBancos" class="btn btn-primary btn-block">Consultar Bancos Disponibles</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </fieldset>
                                    </div>

                                    <div class="col-md-12">
                                        <fieldset class="form-group">
                                            <legend class="subtitulo">Bancos Externos</legend>
                                            <div class="row">
                                                <div id="listBancos"></div>
                                                <button type="button" data-toggle="modal" id="btnOR" class="btn btn-primary btn-block">Generar orden externa</button>
                                            </div>
                                        </fieldset>
                                    </div>

                                    <div class="col-md-12">
                                        <div class="form-group row pie-formulario">
                                            <div class="col-md-8"></div>
                                            <div class="col-md-4">
                                                <button id="btnRegresar" type="button" data-toggle="modal" data-target="#Regresar" class="btn btn-success btn-lg btn-block">Regresar</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </article>


            <div class="modal fade" id="confirmar-guardar">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                            <h4 class="modal-title"><i class="fa fa-warning"></i>Confirmación</h4>
                        </div>
                        <div class="modal-body">
                            <p>Esta Seguro de Guardar los Cambios?</p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-primary" data-dismiss="modal">Si estoy Seguro</button>
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">No</button>
                        </div>
                    </div>
                </div>
            </div>


            <div class="modal fade" id="GenerarOD">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                <span class="sr-only">Close</span>
                            </button>
                            <h4 class="modal-title">Orden de Donación</h4>
                        </div>
                        <div class="modal-body">
                            <br>
                            <div class="col-md-12">
                                <div class="table-responsive">
                                    <table class="table table-striped table-bordered table-hover">
                                        <thead>
                                            <tr>
                                                <th>Hemocomponente</th>
                                                <th>Unidad Requeridas</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Plasma Fresco Congelado</td>
                                                <td>2</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <div class="col-md-12">
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="form-group">
                                            <label class="control-label">Observaciones:</label>
                                            <input type="text" class="form-control" placeholder="Ingresar Código">
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-success btn-lg">Enviar</button>
                            <button type="button" class="btn btn-secondary btn-lg" data-dismiss="modal">Cancelar</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="modal fade" id="GenerarORH">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                <span class="sr-only">Close</span>
                            </button>
                            <h4 class="modal-title">Orden de Requerimiento de Hemocomponente</h4>
                        </div>
                        <div class="modal-body">
                            <br>
                            <div class="col-md-12">
                                <div class="table-responsive">
                                    <table class="table table-striped table-bordered table-hover">
                                        <thead>
                                            <tr>
                                                <th>Hemocomponente</th>
                                                <th>Nro. Serie Unidad</th>
                                            </tr>
                                        </thead>
                                            <tbody id="tbbodyHemoOR">
                                            </tbody>
                                    </table>
                                </div>
                            </div>

                        </div>
                        <div class="modal-footer">
                            <button id="btngOR" type="button" class="btn btn-success btn-lg">Generar</button>
                            <button type="button" class="btn btn-secondary btn-lg" data-dismiss="modal">Cancelar</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="modal fade" id="consulta-Hemocomponente">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                <span class="sr-only">Close</span>
                            </button>
                            <h4 class="modal-title">Consulta de Hemocomponentes a otros bancos de sangre</h4>
                        </div>
                        <div class="modal-body">
                            <br>
                            <div class="col-md-12">
                                <div class="table-responsive">
                                    <table class="table table-striped table-bordered table-hover">
                                        <thead>
                                            <tr>
                                                <th>Hemocomponente</th>
                                                <th>Unidades Requeridas</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Plasma Fresco Congelado (PFC)</td>
                                                <td>2</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-12">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <label class="control-label">Observaciones:</label>
                                        <input type="text" class="form-control" placeholder="Ingresar Observaciones">
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="modal-footer">
                            <button type="button" class="btn btn-success btn-lg">Enviar</button>
                            <button type="button" class="btn btn-secondary btn-lg" data-dismiss="modal">Cancelar</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="modal fade" id="alert">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                            <h4 class="modal-title"><i class="fa fa-warning"></i>Alerta</h4>
                        </div>
                        <div class="modal-body">
                            <p id="txttexto"></p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-primary" data-dismiss="modal">Aceptar</button>

                        </div>
                    </div>
                </div>
            </div>


        </div>
    </div>
    <div class="ref" id="ref">
        <div class="color-primary"></div>
        <div class="chart">
            <div class="color-primary"></div>
            <div class="color-secondary"></div>
        </div>
    </div>
    <script src="../js/vendor.js"></script>
    <script src="../js/app.js"></script>
</body>
</html>
