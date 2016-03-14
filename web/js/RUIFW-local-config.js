(function () {
    var RUIFW = window.RUIFW = window.RUIFW || {};
    var RUIFWLocalConfig = RUIFW.LocalConfig = RUIFW.LocalConfig || {
        cssMapping : true, //use system function to map bootstrap class to page
        URL : "../../B2E_RUIFW_src/", //RUIFW package relative path
        isResponsive : true, //turn on/off responsive feature
        cssList : {
        	"dist/bootstrap-plugin/css/bootstrap-slider.css",
        },
        jsList: {
        	"dist/bootstrap-plugin/js/bootstrap-dropdown.js", // bootstrap dropdown menu
        	"dist/bootstrap-plugin/js/bootstrap-button.js", // bootstrap buttons
        	"dist/bootstrap-plugin/js/bootstrap-datepicker.js" // bootstrap date picker
        } // customize your own js component list, set jsList : null  will load the full component list
    };
})();