/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"com/test/ui/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});
