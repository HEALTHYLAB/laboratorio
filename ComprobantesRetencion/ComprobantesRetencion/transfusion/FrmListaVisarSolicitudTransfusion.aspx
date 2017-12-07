            <%@ Page Language="C#" AutoEventWireup="true" CodeBehind="FrmListaVisarSolicitudTransfusion.aspx.cs" Inherits="ComprobantesRetencion.transfusion.FrmListaVisarSolicitudTransfusion" %>

<!DOCTYPE html>

<html class="no-js" lang="es">
<head >
     <meta charset="utf-8">
      <meta http-equiv="x-ua-compatible" content="ie=edge">
      <title> Sistema de Gestión de Laboratorios y Banco de Sangre </title>
      <meta name="description" content="">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link rel="apple-touch-icon" href="apple-touch-icon.png">
      <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
      <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
      <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
      <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
      <link rel="stylesheet" href="../css/vendor.css">
         <script type = "text/javascript">
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

                 $("#tbTransfusiones").html("");
                 var row = $("<tr />");

                 $("<th />").text("Nro. Solicitud").appendTo(row);
                 $("<th />").text("Nro. Orden").appendTo(row);
                 $("<th />").text("Estado").appendTo(row);
                 $("<th />").text("Paciente").appendTo(row);
                 $("<th />").text("Motivo").appendTo(row);
                 $("<th />").text("Fecha Envío").appendTo(row);

                 $(row).appendTo("#tbTransfusiones");

                 $("#txtfini").datepicker({ dateFormat: 'dd-mm-yy' });
                 $("#txtffin").datepicker({ dateFormat: 'dd-mm-yy' });
             });


          </script>
    <script type = "text/javascript">
        function fnLimpiar() {

            //debugger;
            document.getElementById("cmbEstado").selectedIndex = 0;
            document.getElementById("txtfini").value = "";
            document.getElementById("txtffin").value = "";

            $("#tbTransfusiones").html("");
            var row = $("<tr />");

            $("<th />").text("Nro. Solicitud").appendTo(row);
            $("<th />").text("Nro. Orden").appendTo(row);
            $("<th />").text("Estado").appendTo(row);
            $("<th />").text("Paciente").appendTo(row);
            $("<th />").text("Motivo").appendTo(row);
            $("<th />").text("Fecha Envío").appendTo(row);

            $(row).appendTo("#tbTransfusiones");
        }

        function alerta(texto) {
            document.getElementById("txttexto").innerHTML = texto;
            $("#alert").modal('show');
        }
        function fnAtender(Id) {
            location.href = '../VisarSolicitudTransfusion.aspx?cod=' + Id;
        }
        function GetTransfusiones() {
            //debugger;
            $("#tbTransfusiones").html("");
            var row = $("<tr />");
            
            $("<th />").text("Nro. Solicitud").appendTo(row);
            $("<th />").text("Nro. Orden").appendTo(row);
            $("<th />").text("Estado").appendTo(row);
            $("<th />").text("Paciente").appendTo(row);
            $("<th />").text("Motivo").appendTo(row);
            $("<th />").text("Fecha Envío").appendTo(row);

            $(row).appendTo("#tbTransfusiones");

            var xdata = document.getElementById("txtfini").value + "|" + document.getElementById("txtffin").value + "|" + document.getElementById("cmbEstado").value
            //if (document.getElementById("txtfini").value != "" && document.getElementById("txtffin").value != "" /*&& document.getElementById("cmbEstado").value != "0"*/) {
                $.ajax({
                    type: "POST",
                    contentType: "application/json; charset=utf-8",
                    url: "FrmListaVisarSolicitudTransfusion.aspx/lstSolicitudTransfusion",
                    data: "{xData:'" + xdata + "'}",
                    dataType: "json",
                    success: function (data) {

                        $.each(data, function (key, val) {
                            
                            if (val != null) {
                                for (var i = 0; i < val.length; i++) {
                                    var row = $("<tr />");
                                    $("<td />").text(val[i].NroSolicitud).appendTo(row);
                                    $("<td />").text(val[i].NroOrdenMedica).appendTo(row);
                                    $("<td />").text(val[i].DesEstado).appendTo(row);
                                    $("<td />").text(val[i].Paciente).appendTo(row);
                                    $("<td />").text(val[i].MotivoTransfusion).appendTo(row);
                                    $("<td />").text(val[i].FechaRegistro).appendTo(row);

                                    if (val[i].IdEstado == "2") {
                                        $("<div class='btn-group btn-group-sm'><button type='button' class='btn btn-oval btn-success' onclick='fnAtender(" + val[i].idSolicitud + ")'> Visar</button></div>").appendTo(row);
                                    } 
                                    $(row).appendTo("#tbTransfusiones");
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
            //} else {

            //    alert("Ingrese los filtros de búsqueda.");
            //}
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
                            <h3 class="title">Lista de Solicitud de Transfusión </h3>
                        </div>
                    </form>
                </div>
                <div class="header-block header-block-nav">
                    <ul class="nav-profile">
                        <li class="profile dropdown">
                            <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                                <div class="img" style="background-image: url('../assets/faces/pikachu.jpg')"></div>
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
                  <h3 class="subtitle"> Lista de Solicitud de Transfusión </h3>
               </div>
                 
                   <div class="col-md-12">
                           <div class="row">
                               
                              <div class="col-md-4" >
                                 <div class="form-group">
                                    <label class="control-label">Estado:</label> 
                                    <%--<input id="cmbEstado" type=""  class="form-control" placeholder="-- Seleccione el estado--">--%>
                                    <select name="selectSt" class="form-control" id="cmbEstado" style="text-align-last:center;">
                                        <option value="0">TODOS</option>
                                        <option value="1">PENDIENTE DE ATENCIÓN</option>
                                        <option value="2">PENDIENTE DE VISO</option>
                                        <option value="3">EN ATENCIÓN</option>
                                        <option value="4">VISADO</option>
                                        <option value="5">RECHAZADO</option>
                                    </select>
                                 </div>
                              </div>

                              <div class="col-md-4">
                                 <div class="form-group">
                                    <label class="control-label">Fecha Inicio:</label> 
                                    <div class="input-group"> 
                                       <span class="input-group-addon">
                                       <i class="fa fa-calendar"></i>
                                       </span> 
                                       <input id="txtfini" type="text" class="form-control" placeholder="Ingresar Fecha" readonly="readonly"> 
                                    </div>
                                 </div>
                              </div>
                              <div class="col-md-4">
                                 <div class="form-group">
                                    <label class="control-label">Fecha Fin:</label> 
                                    <div class="input-group"> 
                                       <span class="input-group-addon">
                                       <i class="fa fa-calendar"></i>
                                       </span> 
                                       <input   id="txtffin" type="text" class="form-control" placeholder="Ingresar Fecha" readonly="readonly"> 
                                    </div>
                                 </div>
                              </div>
                                </div>
                            <div class="row">
                              <div class="col-md-2 offset-md-4">
                                 <div class="form-group"> 
                                    <label class="control-label">&nbsp; </label> 
                                    <button type="button" onclick="GetTransfusiones();" class="btn btn-primary btn-block "><i class="fa fa-search"></i>&nbsp;Buscar</button>
                                 </div>
                              </div>
                              <div class="col-md-2" >
                                 <div class="form-group"> 
                                    <label class="control-label">&nbsp;</label> 
                                    <button type="button"  class="btn btn-warning btn-block" onclick="fnLimpiar();">Limpiar</button>
                                 </div>
                              </div>
                          </div>
                        </div>
                 <div>
                    <table id="tbTransfusiones" class="table table-striped table-hover table-bordered">
                        <thead>
                            <tr>
                                                     
                                <th >Nro. Solicitud</th>
                                <th >Nro. Orden</th>
                                <th >Estado</th>
                                <th >Paciente</th>
                                <th >Motivo</th>
                                <th >Fecha Envío</th>
                            </tr>
                        </thead>
                           <tbody>
   
                           </tbody>
                    </table>

                 </div>
                 </article>
        </div>
    </div>
</body>
</html>

