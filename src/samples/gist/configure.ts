export async function configure(aurelia) {
	await aurelia.loader.loadModule("materialize-css");
	aurelia.use
		.standardConfiguration()
		.developmentLogging()
		.plugin("aurelia-materialize-bridge", bridge => bridge.useAll())
		.plugin("aurelia-validation")
		.globalResources("src/shared/logger");

	await aurelia.start();
	aurelia.setRoot("src/app");
}
