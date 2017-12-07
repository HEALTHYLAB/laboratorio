<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="devolucion.aspx.cs" Inherits="ComprobantesRetencion.header" MasterPageFile="~/Site1.Master" %>

<asp:Content ID="Content1" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">
    <div class="content row">
        <div class="col-md-12">
            <div class="tab-content">
                <div class="tab-pane settings active">
                    <div class="box box-info">
                        <div class="box-header with-border">
                            <h3>Generar Devolución de Productos</h3>
                        </div>
                        <div class="box-body">
                            <div class="box-group">
                                <form id="form1" runat="server"  class="form-horizontal">
                                    <div class="form-group">
                                        <label class="col-sm-2 control-label">Tipo de Orden:</label>
                                        <div class="col-sm-4">
                                            <label class="radio-inline">
                                                <input type="radio" name="tipoOrden" id="tipoOrden1" value="1" checked> Venta
                                            </label>
                                            <label class="radio-inline">
                                              <input type="radio" name="tipoOrden" id="tipoOrden2" value="2"> Abastecimiento
                                            </label>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-sm-2 control-label">Nro. de Orden:</label>
                                        <div class="col-sm-4">
                                            <asp:TextBox name="nroOrden" CssClass="form-control" id="nroOrden" runat="server" placeholder="Nro. de Orden" ></asp:TextBox>
                                        </div>
                                        <div class="col-sm-2">
                                          <asp:Button type="submit" CssClass="btn btn-default" Text="Validar Orden" runat="server" ID="btnvalidar" OnClick="btnvalidar_Click"/>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="col-sm-offset-6 col-sm-2">
                                          <button type="submit" class="btn btn-default">Buscar Orden</button>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-sm-2 control-label" >Cliente:</label>
                                        <asp:Label CssClass="col-sm-4 form-control-static" ID="nombreCliente" runat="server">-</asp:Label>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-sm-2 control-label">DNI Cliente:</label>
                                        <p class="col-sm-4 form-control-static">-</p>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-sm-2 control-label">Fecha de Orden:</label>
                                        <p class="col-sm-4 form-control-static">-</p>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-sm-2 control-label">Motivo:</label>
                                        <div class="col-sm-4">
                                            <textarea class="form-control" rows="3"></textarea>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</asp:Content>
