sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("mybasapp1.controller.View1", {
            onInit: function () {

            },
            onButtonPress: function(){
                var oTable = this.getView().byId("table");
                var   s = this.getView().getModel("product").oData.ProductCollection;
                var columnData = [{
                    columnName : "ProductId"
                },{
                    columnName : "Category"
                },{
                    columnName : "MainCategory"
                },{
                    columnName : "SupplierName"},
                    {
                    columnName : "Weight"},
                    {
                    columnName : "WeightUnit"},
                    {
                    columnName : "ShortDescription"},
                    {
                    columnName : "Name"}
                ];
                oTable.setVisible(true);
                var oModel = new sap.ui.model.json.JSONModel;
                oModel.setData( {rowdata: s , colData : columnData})
                oTable.setModel(oModel);
                oTable.bindColumns("/colData", function(sId, oContext){
                    var colName = oContext.getObject().columnName;
                    return new sap.ui.table.Column({
                        label: colName,
                        template:colName,
                    });
                })
                oTable.bindRows("/rowdata");
            //     for (i = 0; i < s.length; i++) {
            //         var oColumn = new sap.m.Column("col" + i, {
            //             width: "1em",
            //             header: new sap.m.Label({
            //             text: s[0]
            //             })
            //         });
            //     oTable.addColumn(oColumn);
            //     }
            //     var oCell = [];
            //     for (i = 0; i < s.length; i++) {
            //                     if (i === 0) {
            //                     var cell1 = new sap.m.Text({
            //                                     text: "{QuestionTx}"
            //                                     });
            //                     }
            //     oCell.push(cell1);
            //     }
            //     var aColList = new sap.m.ColumnListItem("aColList", {
            //         cells: oCell
            //      });
            //      oTable.bindItems("<entityset>", aColList);
            }
        });
    });
