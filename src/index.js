sap.ui.define([
    "sap/ui/core/ComponentContainer"], function(ComponentContainer) {
    "use strict";
    new ComponentContainer({
        name : 'assessment.app',
        height : "100%",
        settings : {
            id : "assessmentApp"
        }
    }).placeAt('content');
});
