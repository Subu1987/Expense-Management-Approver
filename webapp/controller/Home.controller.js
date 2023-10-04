sap.ui.define([
	"com/infocus-Expense-Management-Approver/controller/BaseController",
	"sap/ui/model/json/JSONModel"
], function(BaseController, JSONModel) {
	"use strict";

	return BaseController.extend("com.infocus-Expense-Management-Approver.controller.Home", {
		onInit: function() {
			// JSON data
			var jsonData = {
				items: [{
					"Title": "Subrato Saha",
					"Description": "Java Developer"
				}, {
					"Title": "Piyush Gupta",
					"Description": "Java Developer"
				}]
			};

			// Create JSON model and set data
			var oModel = new JSONModel(jsonData);
			this.getView().setModel(oModel, "model");
		},
		onProfilePopUp: function(oEvent) {
			if (!this._oPopover) {
				var oController = this; // Store the controller reference

				// Load the XML fragment directly using sap.ui.xmlfragment
				var oPopover = sap.ui.xmlfragment(this.getView().getId(), "com.infocus-Expense-Management-Approver.view.fragments.ProfilePopUp",
					this);

				oController._oPopover = oPopover; // Use the stored controller reference
				oController.getView().addDependent(oController._oPopover);
				oController._oPopover.openBy(oEvent.getSource());
			} else {
				this._oPopover.openBy(oEvent.getSource());
			}
		}
	});
});