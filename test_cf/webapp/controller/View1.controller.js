sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("testcf.controller.View1", {
            onInit: function () {

                this._userModel = this.getOwnerComponent().getModel("userModel");
                let me = this;
          
                fetch("/myext")
                  .then(res => res.json())
                  .then(data => {
                    me._userModel.setProperty("/", data);
                    console.log(me._userModel.getProperty("/"));
                  })
                  .catch(err => console.log(err));


                  jQuery.ajax({
                    type: "GET",
                    contentType: "application/json",
                    url: "/user-api/currentUser",
                    dataType: "json",
                    async: false,
                    success: function(data, textStatus, jqXHR) {
                    debugger
                    alert(data);
                    },
                    error:function(e){
                        debugger
                        alert(e);
                    }
                });
                                      
              }
        });
    });
