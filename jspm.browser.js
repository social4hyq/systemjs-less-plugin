SystemJS.config({
	baseURL: "/",
	paths: {
		"github:*": "jspm_packages/github/*",
		"npm:*": "jspm_packages/npm/*",
		"less/": "src/",
		"systemjs-less-plugin/": "src/"
	}
});