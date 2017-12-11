<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="GenerarSolicitudTransfusionEmergencia.aspx.cs" Inherits="ComprobantesRetencion.GenerarSolicitudTransfusionEmergencia" %>

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

    <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
    <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
    <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>

	<style>
		a img{border: none;}
		ol li{list-style: decimal outside;}
		div#container{width: 780px;margin: 0 auto;padding: 1em 0;}
		div.side-by-side{width: 100%;margin-bottom: 1em;}
		div.side-by-side > div{float: left;width: 50%;}
		div.side-by-side > div > em{margin-bottom: 10px;display: block;}
		.clearfix:after{content: "\0020";display: block;height: 0;clear: both;overflow: hidden;visibility: hidden;}
		
	</style>

	<link rel="stylesheet" href="Style/chosen.css" />


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

        $(document).ready(function () {




            objListaDetalleSolicitudTranfusion = [];
            objTranfusion = {};
            var num = 0;
            lstDatos();

            btnatecnico = document.getElementById("btnatecnico");
            btnaom = document.getElementById("btnaom");
            btnahemo = document.getElementById("btnahemo");
            btnGuardar = document.getElementById("btnGuardar");
            btnBuscar = document.getElementById("btnBuscar");
            btnLimpiar = document.getElementById("btnLimpiar");


            btnLimpiar.onclick = function () {
                document.getElementById("txtRegistroNombre").value = "";
                document.getElementById("txtRegistroApellidoPaterno").value = "";
                document.getElementById("txtRegistroApellidoMaterno").value = "";
                document.getElementById("txtRegistroFehaNacimiento").value = "";
                document.getElementById("txtRegistroCodigoDocumento").value = "";
                document.getElementById("cboTipoDocumento").value = 0;
            }


            btnRegistraPacienteModal.onclick = function () {
                if (document.getElementById("txtRegistroNombre") != null) {
                    document.getElementById("txtRegistroNombre").value = "";
                }
                if (document.getElementById("txtRegistroApellidoPaterno") != null) {
                    document.getElementById("txtRegistroApellidoPaterno").value = "";
                }
                if (document.getElementById("txtRegistroApellidoMaterno") != null) {
                    document.getElementById("txtRegistroApellidoMaterno").value = "";
                }

                if (document.getElementById("txtRegistroFehaNacimiento") != null) {
                    document.getElementById("txtRegistroFehaNacimiento").value = "";
                }
                if (document.getElementById("txtRegistroCodigoDocumento") != null) {
                    document.getElementById("txtRegistroCodigoDocumento").value = "";
                }
                if (document.getElementById("cboTipoDocumento") != null) {
                    document.getElementById("cboTipoDocumento").value = "0";
                }
                
            }

            btnRegistrarPaciente.onclick = function () {
                //$("#tablaPacienteDropDown").();                           


                if (document.getElementById("txtRegistroNombre").value == "") {
                    alerta("Por favor llenar el nombre");
                    return;
                }
                if (document.getElementById("txtRegistroApellidoPaterno").value == "") {
                    alerta("Por favor llenar el apellido paterno");
                    return;
                }

                if (document.getElementById("txtRegistroApellidoMaterno").value == "") {
                    alerta("Por favor llenar el apellido materno");
                    return;
                }

                if (document.getElementById("txtRegistroFehaNacimiento").value == "") {
                    alerta("Por favor llenar la fecha de nacimiento");
                    return;
                }

                if (document.getElementById("cboTipoDocumento").value == 0) {
                    alerta("Por favor seleccionar el tipo de documento");
                    return;
                }

                if (document.getElementById("txtRegistroCodigoDocumento").value == "") {
                    alerta("Por favor llenar el código de documento");
                    return;
                }

                //var detalle = "";

                /*$(".trhemo").each(function () {
                    objDetalle = {};
                    split = this.getAttribute('datos').split('|');
                    num++;
                    detalle += split[0] + "|" + split[3] + "-";
                });

                if (num == 0) {
                    alerta("Por favor debe ingresar un detalle de hemocomponente");
                    return;
                }
                */
                var data = document.getElementById("txtRegistroNombre").value + "|" + document.getElementById("txtRegistroApellidoPaterno").value + "|" + document.getElementById("txtRegistroApellidoMaterno").value + "|" + document.getElementById("txtSexo1").value + "|" + document.getElementById("txtSexo2").value + "|" + document.getElementById("txtRegistroFehaNacimiento").value + "|" + document.getElementById("cboTipoDocumento").value + "|" + document.getElementById("txtRegistroCodigoDocumento").value;
                //var xdetalle = detalle.substr(0, detalle.length - 1);

                $.ajax({
                    type: "POST",
                    async: false,
                    url: "GenerarSolicitudTransfusionEmergencia.aspx/insRegistrarPaciente",
                    //data: "{xdata: '" + data + "',xdetalle:'" + data + "'}",
                    data: "{xdata: '" + data + "'}",
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    success: function (response) {
                        if (response.d != null) {
                            alerta("EL paciente ha sido guardado de forma correcta en la base de datos");
                            lstDatos();
                            document.getElementById('tablaPacienteDropDown').onload;
                            document.getElementById('cboPaciente').onload;
                            $("#agregar-paciente").modal('hide');
                        }
                    },
                    error: function (error) { alert("error: " + error); }
                });



            }

            btnGuardar.onclick = function () {


                var num = 0, split, splitDet, m = 0;
                var html = "";
                $(".chkhemo").each(function () {


                    if ($(this).is(":checked") == true) {
                        num++;
                        split = this.getAttribute('datos').split('|');

                        //1|HR001|Globulos rojos
                        var texto = $(this).parent().parent().parent().find(":input[type=text]").val();

                        if (texto == "" || texto == "0")
                            m = 1

                        //html += "<tr class='trhemo' id='" + num + "' datos='" + split[0] + "|" + split[1] + "|" + split[2] + "|" + texto + "'><td>";
                        //html += split[1] + " </td><td>" + split[2] + "</td><td>" + texto + "</td><td>";
                        //html += "<div class='btn-group btn-group-sm'><button type='button' class='btn btn-oval btn-danger' onclick='Eliminartr(" + num + ")'><i class='fa fa-trash-o'></i> Eliminar</button></div></td></tr>";

                    }
                });

                if (num == 0) {
                    alerta("<p>Seleccione un Hemocomponente</p>");
                    return;
                } else if (m == 1) {
                    alerta("<p>Uno de os hemocomponentes esta vacio o en 0</p>");
                    return;
                }
                /*
                switch (num) {

                    case 0:
                        alerta("<p>Seleccione un Hemocomponente</p>");
                        return;
                    default:
                        if (m == 1) {
                            alerta("<p>Uno de os hemocomponentes esta vacio o en 0</p>");
                        }
                        return;
                        //else {
                        //    document.getElementById("tbbodyHemo").innerHTML = html;
                        //    $("#agregar-om").modal('hide');
                        //}
                }*/


                if (document.getElementById("txtobservaciones").value == "") {
                    alerta("Por favor llenar los datos del motivo");
                    return;
                }
                /*
                if (document.getElementById("hdnom").value == "") {
                    alerta("Por favor llenar los datos de la orden medica");
                    return;

                }*/

                if (document.getElementById("cboTecnico").value == "") {
                    alerta("Por favor llenar los datos del tecnico");
                    return;

                }

                var detalle = "";

                $(".chkhemo").each(function () {
                    if ($(this).is(":checked") == true) {
                        objDetalle = {};
                        var texto = $(this).parent().parent().parent().find(":input[type=text]").val();
                        splitDet = this.getAttribute('datos').split('|');// + "," + texto;
                        num++;
                        detalle += splitDet[0] + "|" + texto + "-";
                    }
                });

/*                if (num == 0) {
                    alerta("Por favor debe ingresar un detalle de hemocomponente");
                    return;
                }*/
                
                //alert('País' + document.getElementById("cboCountry").value);
                var data = document.getElementById("txtsoli").value + "|" + document.getElementById("txtobservaciones").value + "|" + document.getElementById("cboTecnico").value + "|" + document.getElementById("cboPaciente").value + "|" + document.getElementById("cboTipoFactorRH").value + "|" + document.getElementById("cboTipoSangre").value;
                var xdetalle = detalle.substr(0, detalle.length - 1);


                $.ajax({
                    type: "POST",
                    async: false,
                    url: "GenerarSolicitudTransfusionEmergencia.aspx/insTransfucionEmergencia",
                    data: "{xdata: '" + data + "',xdetalle:'" + xdetalle + "'}",
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    success: function (response) {
                        if (response.d != null) {
                            alerta("La solicitud de transfusion fue guardada de forma correcta en la base de datos");
                        }
                    },
                    error: function (error) { alert("Error al cargar Tecnicos error: " + error); }
                });

            }



            btnatecnico.onclick = function () {

                var num = 0, split;

                $(".chktecnico").each(function () {

                    if ($(this).is(":checked") == true) {
                        split = this.getAttribute('datos').split('|');
                        num++;
                    }
                });

                switch (num) {
                    case 1:
                        document.getElementById("hdnTecnio").value = split[0];
                        document.getElementById("txtTecnico").value = split[1];
                        $("#agregar-tecnico").modal('hide');

                        break;
                    case 0:
                        alerta("<p>Seleccione un Técnico</p>");
                        break;
                    default:
                        alerta("<p>Seleccione un solo Técnico</p>");

                }
            }


            btnahemo.onclick = function () {

                var num = 0, split, m = 0;
                var html = "";
                $(".chkhemo").each(function () {


                    if ($(this).is(":checked") == true) {
                        num++;
                        split = this.getAttribute('datos').split('|');

                        //1|HR001|Globulos rojos
                        var texto = $(this).parent().parent().parent().find(":input[type=text]").val();

                        if (texto == "" || texto == "0")
                            m = 1

                        html += "<tr class='trhemo' id='" + num + "' datos='" + split[0] + "|" + split[1] + "|" + split[2] + "|" + texto + "'><td>";
                        html += split[1] + " </td><td>" + split[2] + "</td><td>" + texto + "</td><td>";
                        html += "<div class='btn-group btn-group-sm'><button type='button' class='btn btn-oval btn-danger' onclick='Eliminartr(" + num + ")'><i class='fa fa-trash-o'></i> Eliminar</button></div></td></tr>";

                    }
                });


                switch (num) {

                    case 0:
                        alerta("<p>Seleccione un Hemocomponente</p>");
                        break;

                    default:
                        if (m == 1) {
                            alerta("<p>Uno de os hemocomponentes esta vacio o en 0</p>");
                        } else {
                            document.getElementById("tbbodyHemo").innerHTML = html;
                            $("#agregar-om").modal('hide');
                        }
                        break;
                }
            }


            btnaom.onclick = function () {


                document.getElementById("txtRegistroNombre").value = "";
                document.getElementById("txtRegistroApellido").value = "";
                document.getElementById("txtRegistroFehaNacimiento").value = "";
                document.getElementById("txtRegistroCodigoDocumento").value = "";
                document.getElementById("cboTipoDocumento").value = 0;


                var num = 0, split;

                $(".chkorden").each(function () {

                    if ($(this).is(":checked") == true) {
                        split = this.getAttribute('datos').split('|');
                        num++;
                    }
                });

                switch (num) {
                    case 1:

                        //1|OR001|1|Jose vascones|2017-07-07|102|45|Masculino|H0001
                        document.getElementById("txtnom").value = split[1];
                        document.getElementById("txtfechac").value = split[4];
                        document.getElementById("txtestadoOm").value = 'Registrado';
                        document.getElementById("txtnombre").value = split[3];
                        document.getElementById("txtedad").value = split[6];
                        document.getElementById("txtpeso").value = split[5];
                        document.getElementById("txtsexo").value = split[7];
                        document.getElementById("txthclinica").value = split[8];
                        document.getElementById("txtObservaciones").value = 'Dolencias leves';
                        document.getElementById("hdnom").value = split[0];

                        $("#agregar-hemecomponente").modal('hide');
                        break;
                    case 0:
                        alerta("<p>Seleccione una Orden Medica</p>");
                        break;
                    default:
                        alerta("<p>Seleccione una sola Orden</p>");

                }
            }


        });

        //1|OR001|1|Jose vascones|2017-07-07|102|45|Masculino|H0001

        function alerta(texto) {
            document.getElementById("txttexto").innerHTML = texto;
            $("#alert").modal('show');
        }

        function lstDatos() {

            // objTransfusion.cuenta 

            $.ajax({
                type: "POST",
                async: false,
                url: "GenerarSolicitudTransfusionEmergencia.aspx/lstDatosEmergencia",
                data: "{}",
                //   data: JSON.stringify({ oTransfusionBE: objReserva }),
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function (response) {
                    if (response.d != null) {

                        creartablaTecnico(response.d.oListaTecnicoBE);
                        creartablaOrdenMedica(response.d.oListaOrdenMedicaBE);
                        creartablaHemocomponente(response.d.oListaHemocomponenteBE);
                        creartablaPaciente(response.d.oListaPaciente);
                        creartablaFactorRH(response.d.oListaFactorRH);
                        creartablaTipoSangre(response.d.oListaTipoSangre);

                        document.getElementById("txtsoli").value = response.d.codigo;
                        document.getElementById("txtfecha").value = response.d.fechaactual;
                    }
                },
                error: function (error) { alert("Error al cargar Tecnicos error: " + error); }
            });
        }



        function creartablaTecnico(oListaTecnico) {
            var html = "";
            html = "<table  class='table table-striped table-bordered table-hover'><tbody>";
            html += "<tr><td> <label class='control-label'> Técnico </td>";
            html += "<td> <select id='cboTecnico'>";
            for (i = 0; i < oListaTecnico.length; i++) {
                html += "<option value='"+ oListaTecnico[i].IdTecnico + "' " + " >" + oListaTecnico[i].IdTecnico + " - " + oListaTecnico[i].Nombre + "</option>";
            }
            html += "</td></tr>";
            html += "</tbody></table>";
            console.log(html)
            //document.getElementById("tbTecnico").innerHTML = html;
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

            //document.getElementById("tbHemocomponente").innerHTML = html2;
        }

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
            console.log(html)
            document.getElementById("tbOrdenMedica").innerHTML = html;
        }

        function creartablaPaciente(oListaPaciente) {
            var html = "";
            html = "<table  class='table table-striped table-bordered table-hover'><tbody>";
            html += "<tr><td> <label class='chzn-container chzn-container-single chzn-container-active'> Paciente </td>";
            html += "<td> <select id='cboPaciente'>";
            for (i = 0; i < oListaPaciente.length; i++) {
                html += "<option value='" + oListaPaciente[i].IdPaciente + "  ' " + " >" + oListaPaciente[i].NroDocumentoIdenidad + " - " + oListaPaciente[i].apellidoPaterno + "  " + oListaPaciente[i].apellidoMaterno + " " + oListaPaciente[i].nombres + "</option>";
            }
            html += "</td></tr>";
            html += "</tbody></table>";

            console.log(html)
            //document.getElementById("tbPaciente").innerHTML = html;
        }

        function creartablaFactorRH(oListaFactorRH) {
            var html = "";
            html = "<table  class='table table-striped table-bordered table-hover'><tbody>";
            html += "<tr><td> <label class='control-label'> Factor RH </td>";
            html += "<td> <select id='cboTipoFactorRH'>";
            for (i = 0; i < oListaFactorRH.length; i++) {
                html += "<option value='" + oListaFactorRH[i].Codigo + "  ' " + " >" + oListaFactorRH[i].Descripcion +"</option>";
                /* <div class="col-md-4">
                 <label class='control-label'>Tipo Documento:</label>
                 <div class="form-group" id="tbComboTipoDocumemento">
                     <select id='cboTipoSangre'>
                         <option value='0'>--Seleccione--</option>
                         <option value='1'>DNI</option>
                         <option value='2'>Carnet de Extranjeria</option>
                      </select>
                 </div>
            </div>*/
            }
            html += "</td></tr>";
            html += "</tbody></table>";
            console.log(html)
            document.getElementById("tbTipoFactorRH").innerHTML = html;
        }

        function creartablaTipoSangre(oListaTipoSangre) {
            var html = "";
            html = "<table  class='table table-striped table-bordered table-hover'><tbody>";
            html += "<tr><td> <label class='control-label'> Tipo Sangre </td>";
            html += "<td> <select id='cboTipoSangre'>";
            for (i = 0; i < oListaTipoSangre.length; i++) {
                html += "<option value='" + oListaTipoSangre[i].Codigo + "  ' " + " >" + oListaTipoSangre[i].Descripcion + "</option>";
                /* <div class="col-md-4">
                 <label class='control-label'>Tipo Documento:</label>
                 <div class="form-group" id="tbComboTipoDocumemento">
                     <select id='cboTipoSangre'>
                         <option value='0'>--Seleccione--</option>
                         <option value='1'>DNI</option>
                         <option value='2'>Carnet de Extranjeria</option>
                      </select>
                 </div>
            </div>*/
            }
            html += "</td></tr>";
            html += "</tbody></table>";
            console.log(html)
            document.getElementById("tbTipoSangre").innerHTML = html;
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
                            <h3 class="title">Generar Solicitud de Transfusión de Emergencia </h3>
                        </div>
                    </form>
                </div>
                <div class="header-block header-block-nav">
                    <ul class="nav-profile">
                        <li class="profile dropdown">
                            <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                                <div class="img" style="background-image: url('assets/faces/pikachu.jpg')"></div>
                                <span class="name">Carlitos Villegas
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
                                            <input id="txtsoli" type="text" readonly="readonly" class="form-control" value="">
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
                                    <div class="col-md-4">
                                        <div class="form-group">
                                            <label class="control-label">Estado:</label>
                                            <input id="txtestado" type="text" readonly="readonly" class="form-control" value="REGISTRADO">
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="form-group">
                                            <label class="control-label">Motivo</label>
                                            <input id="txtobservaciones" type="text" class="form-control boxed" placeholder="Ingresar Motivo">
                                        </div>
                                    </div>

                                    
                                    <div class="col-md-12">
                                        <fieldset class="form-group">
                                            <legend class="subtitulo">Datos del Paciente:</legend>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <div class="table-responsive">
                                                        <table class="table table-striped table-bordered table-hover">                                                            
                                                            <tbody id="tbPaciente">
                                                            </tbody>
                                                        </table>
                                                    </div>

                      <div class="col-md-6">
                            <label class='chzn-container chzn-container-single chzn-container-active'> Paciente </label>
                            <div id="tablaPacienteDropDown">
                                <form runat="server" id="form1">
					            <asp:DropDownList data-placeholder="seleccionar paciente" runat="server" ID="cboPaciente" class="chzn-select" Style="width: 350px;">
						            <asp:ListItem Text="" Value=""></asp:ListItem>
						            <asp:ListItem Text="Ahemdabad" Value="Ahendabad"></asp:ListItem>						
					            </asp:DropDownList>
                            </div>
				       </div>

                                                </div>

                                                <div class="col-md-3">
                                                    <div class="form-group">
                                                        <button id="btnRegistraPacienteModal" type="button" data-toggle="modal" data-target="#agregar-paciente" class="btn btn-primary btn-block">Registrar Paciente</button>
                                                    </div>
                                                </div>                                                                                                                                                                         
                                            </div> 
                                            
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <div class="table-responsive">
                                                        <table class="table table-striped table-bordered table-hover">                                                            
                                                            <tbody id="tbTipoFactorRH">
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>

                                                <div class="col-md-6">
                                                    <div class="table-responsive">
                                                        <table class="table table-striped table-bordered table-hover">                                                            
                                                            <tbody id="tbTipoSangre">
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>

                                            </div>
                                            
                                                                                                                                   
                                        </fieldset>
                                    </div>


                                    <!--
                                    <div class="col-md-12">
                                        <fieldset class="form-group">
                                            <legend class="subtitulo">Orden Médica Referencia</legend>
                                            <div class="row">
                                                <div class="col-md-3">
                                                    <button type="button" data-toggle="modal" data-target="#agregar-hemecomponente" class="btn btn-primary btn-block">Agregar O.M.</button>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-4">
                                                    <div class="form-group">
                                                        <label class="control-label">Nro Orden Médica:</label>
                                                        <input id="txtnom" type="text" readonly="readonly" class="form-control" value="">
                                                        <input id="hdnom" type="hidden" value="">
                                                    </div>
                                                </div>
                                                <div class="col-md-4">
                                                    <div class="form-group">
                                                        <label class="control-label">Fecha Registro:</label>
                                                        <div class="input-group">
                                                            <span class="input-group-addon">
                                                                <i class="fa fa-calendar"></i>
                                                            </span>
                                                            <input id="txtfechac" type="text" readonly="readonly" class="form-control" placeholder="Ingresar Fecha">
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-4">
                                                    <div class="form-group">
                                                        <label class="control-label">Estado:</label>
                                                        <input id="txtestadoOm" type="text" readonly="readonly" class="form-control" value="">
                                                    </div>
                                                </div>
                                            </div>
                                        </fieldset>
                                    </div>
                                    !-->
                                    <div class="col-md-12">
                                        <fieldset class="form-group">
                                            <legend class="subtitulo">Hemocomponentes</legend>
                                            <!--<div class="row">
                                                <div class="col-md-3">
                                                    <button type="button" data-toggle="modal" data-target="#agregar-om" class="btn btn-primary btn-block">Agregar Hemocomponente</button>
                                                </div>
                                            </div>!-->
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <div class="table-responsive">
                                                        <table class="table table-striped table-bordered table-hover">                                                            
                                                            <tbody id="tbOrdenMedica">
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </fieldset>
                                    </div>
                                    <div class="col-md-12">
                                        <fieldset class="form-group">
                                            <legend class="subtitulo">Asignación de Técnico</legend>
                                            <div class="row">
                                              <div class="col-md-6">
                                                    <label class='chzn-container chzn-container-single chzn-container-active'> Técnico </label>
                                                    <div id="Div2">                                
					                                    <asp:DropDownList data-placeholder="seleccionar técnico" runat="server" ID="cboTecnico" class="chzn-select" Style="width: 350px;">
						                                    <asp:ListItem Text="" Value=""></asp:ListItem>
					                                    </asp:DropDownList>                    
                                                      
                                                    </div>
				                               </div> 
                                                                                               
                                            </div>
                                        </fieldset>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="form-group row pie-formulario">
                                            <div class="col-md-8"></div>
                                            <div class="col-md-4">
                                                <button type="button" data-toggle="modal" data-target="#confirmar-guardar" class="btn btn-success btn-lg btn-block">Guardar</button>
                                            </div>
                                        </div>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </article>


            <div class="modal fade" id="agregar-om">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                <span class="sr-only">Close</span>
                            </button>
                            <h4 class="modal-title">Consulta Hecomponente</h4>
                        </div>
                        <div class="modal-body">
                            <br>
                            <div class="col-md-12">
                                <!--<div class="table-responsive" id="tbOrdenMedica">
                                </div>!-->
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button id="btnahemo" type="button" class="btn btn-success btn-lg">AGREGAR</button>
                            <button type="button" class="btn btn-secondary btn-lg" data-dismiss="modal">Cerrar</button>
                        </div>
                    </div>
                </div>

            </div>

            <div class="modal fade" id="agregar-hemecomponente">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                <span class="sr-only">Close</span>
                            </button>
                            <h4 class="modal-title">Agregar Orden Medica</h4>
                        </div>
                        <div class="modal-body">
                            <br>
                            <div class="col-md-12">
                                <div class="row">
                                    <div class="col-md-4">
                                        <div class="form-group">







                                            <label class="control-label">Fecha Inicio:</label>


















                                            <div class="input-group">
                                                <span class="input-group-addon">
                                                    <i class="fa fa-calendar"></i>
                                                </span>
                                                <input id="txtfini" type="text" class="form-control" placeholder="Ingresar Fecha">
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
                                                <input id="txtffin" type="text" class="form-control" placeholder="Ingresar Fecha">
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-md-4">











                                        <div class="form-group">
                                            <label  class="control-label">Nro Orden Medica:</label>
                                            <input id="txtOM" type="text" class="form-control" placeholder="Ingresar Número" value="">
                                        </div>
                                    </div>

                                    <div class="col-md-2">
                                        <div class="form-group">
                                            <label class="control-label">&nbsp; </label>
                                            <button id="Button1" type="button" class="btn btn-primary btn-block">Buscar</button>
                                        </div>
                                    </div>
                                    <div class="col-md-2">
                                        <div class="form-group">
                                            <label class="control-label">&nbsp;</label>
                                            <button id="Button2" type="button" class="btn btn-warning btn-block">Limpiar</button>
                                        </div>
                                    </div>





                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="table-responsive" id="Div1">
                                </div>


                            </div>
                        </div>
                        <div class="modal-footer">
                            <button id="btnaom" type="button" class="btn btn-success btn-lg">AGREGAR</button>
                            <button type="button" class="btn btn-secondary btn-lg" data-dismiss="modal">Cerrar</button>
                        </div>
                    </div>
                </div>
            </div>


            <div class="modal fade" id="agregar-paciente">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                <span class="sr-only">Close</span>
                            </button>
                            <h4 class="modal-title">Registrar Paciente</h4>
                        </div>
                        <div class="modal-body">
                            <br>
                            <div class="col-md-12">
                                <div class="row">
                                    <div class="col-md-4">
                                        <div class="form-group">
                                             <label class="control-label">Nombres:</label>
                                             <input id="txtRegistroNombre" type="text"  class="form-control" value="">
                                        </div>
                                    </div>

                                    <div class="col-md-4">
                                        <div class="form-group">
                                             <label class="control-label">Apellido Paterno:</label>
                                             <input id="txtRegistroApellidoPaterno" type="text"  class="form-control" value="">
                                        </div>
                                    </div>

                                    <div class="col-md-4">
                                        <div class="form-group">
                                             <label class="control-label">Apellido Materno:</label>
                                             <input id="txtRegistroApellidoMaterno" type="text"  class="form-control" value="">
                                        </div>
                                    </div>

                                </div>
											
                                <div class="row">


                                    <div class="col-md-4">
                                        <div class="form-group">
                                             <label class="control-label">Sexo:</label>
                                             <input type="radio" id="txtSexo1" name="txtSexo" value="H" checked="checked" /> Hombre
                                             <input type="radio" id="txtSexo2" name="txtSexo" value="M" /> Mujer
                                        </div>
                                    </div>

                                    <div class="col-md-4">
                                        <div class="form-group">
                                            <label class="control-label">Fecha Nacimiento:</label>
                                            <div class="input-group">
                                                <span class="input-group-addon">
                                                    <i class="fa fa-calendar"></i>
                                                </span>
                                                <input id="txtRegistroFehaNacimiento" type="text" class="form-control" placeholder="Ingresar Fecha">
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-md-4">
                                         <label class='control-label'>Tipo Documento:</label>
                                         <div class="form-group" id="tbComboTipoDocumemento">
                                             <select id='cboTipoDocumento'>
                                                 <option value='0'>--Seleccione--</option>
                                                 <option value='1'>DNI</option>
                                                 <option value='2'>Carnet de Extranjeria</option>
                                              </select>
                                         </div>
                                    </div>

                                </div>
                                
                                <div class="row">
                                    <div class="col-md-4">
                                        <div class="form-group">
                                            <label  class="control-label">Código Documento:</label>
                                            <input id="txtRegistroCodigoDocumento" type="text" class="form-control" placeholder="Ingresar Código Documento" value="">
                                        </div>
                                    </div>

                                    <div class="col-md-2">
                                        <div class="form-group">
                                            <label class="control-label">&nbsp;</label>
                                            <button id="btnLimpiar" type="button" class="btn btn-warning btn-block">Limpiar</button>
                                        </div>
                                    </div>

                                </div>							
							
                            <div class="col-md-12">
                                <div class="table-responsive" id="tbHemocomponente">
                                </div>
                            </div>  
                                
                        </div>
                        <div class="modal-footer">
                            <button id="btnRegistrarPaciente" type="button" class="btn btn-success btn-lg">AGREGAR</button>
                            <button type="button" class="btn btn-secondary btn-lg" data-dismiss="modal">Cerrar</button>
                        </div>
                    </div>
                </div>
            </div>
          </div>

            <div class="modal fade" id="agregar-tecnico">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                <span class="sr-only">Close</span>
                            </button>
                            <h4 class="modal-title">Consulta Técnico Disponibles</h4>
                        </div>
                        <div class="modal-body">
                            <br>
                            <div class="col-md-12">
                                <div class="table-responsive" id="tbTecnico2">
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" id="btnatecnico" class="btn btn-success btn-lg">AGREGAR</button>
                            <button type="button" class="btn btn-secondary btn-lg" data-dismiss="modal">Cerrar</button>
                        </div>
                    </div>
                </div>
            </div>

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
                            <button id="btnGuardar" type="button" class="btn btn-primary" data-dismiss="modal">Si estoy Seguro</button>
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">No</button>
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
	<script src="Scripts/jquery.min.js" type="text/javascript"></script>
	<script src="Scripts/chosen.jquery.js" type="text/javascript"></script>
	<script type="text/javascript"> $(".chzn-select").chosen(); $(".chzn-select-deselect").chosen({ allow_single_deselect: true }); </script>
    <script src="js/vendor.js"></script>
    <script src="js/app.js"></script>
</body>
</html>
