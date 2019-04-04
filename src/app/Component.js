/**
 * Created by stephan.smola on 04.04.2019.
 */


sap.ui.define(["sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel"
], (BaseComponent, JSONModel) => {

    return BaseComponent.extend("assessment.app.Component", {

        metadata: {
            manifest: "json"
        },

        init() {
            // Super-Call
            BaseComponent.prototype.init.apply(this);

            if (this.getRouter()) {
                this.getRouter().initialize();
            }


            this.setModel(new JSONModel({
                "layout": sap.f.LayoutType.TwoColumnsMidExpanded
            }), "AppViewModel");
        }
    });

});