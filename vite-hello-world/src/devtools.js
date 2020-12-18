const devtools = {
	install(app) {
		if (
      process.env.NODE_ENV === 'development' &&
      window.__VUE_DEVTOOLS_GLOBAL_HOOK__
    ) {
			window.__VUE_DEVTOOLS_GLOBAL_HOOK__.Vue = app;
		}
	}
};

export default devtools;