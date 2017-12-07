<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="prueba.aspx.cs" Inherits="ComprobantesRetencion.prueba" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Retencion de Comprobantes</title>
    
    <script src="http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js" type="text/javascript"></script>
    <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js" type="text/javascript"></script>
    <script src="http://cdnjs.cloudflare.com/ajax/libs/bootstrap-validator/0.4.5/js/bootstrapvalidator.min.js" type="text/javascript"></script>
    <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css" type="text/css" media="screen" />
    <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap-theme.min.css" type="text/css" media="screen" />
    <link rel="stylesheet" href="http://cdnjs.cloudflare.com/ajax/libs/jquery.bootstrapvalidator/0.5.0/css/bootstrapValidator.min.css" type="text/css" media="screen" />
    <link rel="stylesheet" href="css/style.css" type="text/css" media="screen" />

</head>
<body>
    <style>
        #success_message {
            display: none;
        }
        #error_message {
            display: none;
        }
    </style>
    <script>
        function justNumbers(e) {
            var keynum = window.event ? window.event.keyCode : e.which;
            if ((keynum == 8) || (keynum == 46))
                return true;

            return /\d/.test(String.fromCharCode(keynum));
        }

        $(document).ready(function () {
            
            $('#form1').bootstrapValidator({
                
                // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
                feedbackIcons: {
                    valid: 'glyphicon glyphicon-ok',
                    invalid: 'glyphicon glyphicon-remove',
                    validating: 'glyphicon glyphicon-refresh'
                },
                fields: {
                    txtDesde: {
                        validators: {
                            notEmpty: {
                                message: 'Por favor ingrese el numero'
                            }
                        }
                    },
                    txtHasta: {
                        validators: {
                            notEmpty: {
                                message: 'Por favor ingrese el numero'
                            }
                        }
                    },
                    
                    compañia: {
                        validators: {
                            notEmpty: {
                                message: 'Por favor seleccione una compañia'
                            }
                        }
                    }
                    
                }
            })
                .on('success.form.bv', function (e) {
                    $('#success_message').slideDown({ opacity: "show" }, "slow") // Do something ...
                    $('#form1').data('bootstrapValidator').resetForm();
                    
                    // Prevent form submission
                    e.preventDefault();

                    // Get the form instance
                    var $form = $(e.target);

                    // Get the BootstrapValidator instance
                    var bv = $form.data('bootstrapValidator');

                    // Use Ajax to submit form data
                    $.post($form.attr('action'), $form.serialize(), function (result) {
                        console.log(result);
                        
                    }, 'json');
                });
        });



    </script>
    
    <div class="container center_div">

        <form class="well form-horizontal " method="post" runat="server" id="form1">
            <fieldset>

                <!-- Form Name -->
                <center><legend>Comprobantes de Retención<br /></legend></center>

                <!-- radio checks -->
                <%--<div class="form-group">
                    <label class="col-md-4 control-label">Tipo de Documento</label>
                    <div class="col-md-4">
                        <div class="radio">
                            <label>
                                <input type="radio" name="hosting" value="yes" />
                                Boleta
                            </label>
                        </div>
                        <div class="radio">
                            <label>
                                <input type="radio" name="hosting" value="no" />
                                Factura
                            </label>
                        </div>
                    </div>
                </div>--%>


                <!-- Select Basic -->

                <div class="form-group">
                    <label class="col-md-4 control-label">Compañia</label>
                    <div class="col-md-4 selectContainer">
                        <div class="input-group">
                            <span class="input-group-addon"><i class="glyphicon glyphicon-list"></i></span>
                            <asp:DropDownList ID="compañia" runat="server" CssClass="form-control selectpicker">
                                <asp:ListItem Value="" >Seleccione su Compañía</asp:ListItem>
                                <asp:ListItem Value="1">Bureau Veritas</asp:ListItem>
                                <asp:ListItem Value="2">Inspectorate</asp:ListItem>
                            </asp:DropDownList>
                        </div>
                    </div>
                </div>

                

                <!-- Text input-->
                <div class="form-group">
                    <label class="col-md-4 control-label">Número de Documento</label>
                    <div class="col-md-2 inputGroupContainer">
                        <div class="input-group">
                            <span class="input-group-addon"><i class="glyphicon glyphicon-globe"></i></span>
                            <asp:TextBox  name="desde" CssClass="form-control" placeholder="Desde" id="txtDesde" runat="server" onkeypress="return justNumbers(event);"></asp:TextBox>
                        </div>
                    </div>
                    <div class="col-md-2 inputGroupContainer">
                        <div class="input-group">
                            <span class="input-group-addon"><i class="glyphicon glyphicon-globe"></i></span>
                            <asp:TextBox  name="hasta" CssClass="form-control" placeholder="Hasta" id="txtHasta" runat="server" onkeypress="return justNumbers(event);"></asp:TextBox>
                        </div>
                    </div>
                </div>

                
                <!-- Button -->
                <div class="form-group">
                    <label class="col-md-4 control-label"></label>
                    <div class="col-md-4">
                        <asp:Button CssClass="btn btn-success btn-block" runat="server" id="btnsend" Text="Enviar" OnClick="btnsend_Click"> </asp:Button>
                    </div>
                </div>
                <!-- Success message -->
                <div class="alert alert-success" role="alert" id="success_message" runat="server"><button type="button" class="close" data-dismiss="alert">x</button> Exito <i class="glyphicon glyphicon-thumbs-up"></i> <br />Los comprobantes de Retencion han sido generados exitosamente</div>
                <div class="alert alert-warning" role="alert" id="error_message" runat="server"><button type="button" class="close" data-dismiss="alert">x</button> Error <i class="glyphicon glyphicon-thumbs-down"></i> <br />Ha existido un error en la generación de los comprobantes de retención.</div>
            </fieldset>
        </form>

    </div>
    <!-- /.container -->
    <img src="/img/logo.jpg" alt="logo" class="img-thumbnail dat-br" >
    <img src="/img/logo.jpg" alt="logo" class="img-thumbnail dat-tl" >
</body>

</html>
