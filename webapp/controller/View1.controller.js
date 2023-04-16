sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("testuisepv2.controller.View1", {
            onInit: function () {

                debugger;
                var oDataModel = this.getOwnerComponent().getModel();
                
                oDataModel.callFunction("/ping", {    // function import name
                    method: "GET",                             // http method
                    success: function(oData, response) {
                        debugger;
                    },      // callback function for success
                    error: function(oError){
                        debugger;
                    }                  // callback function for error
                });

            }


        });
    });
