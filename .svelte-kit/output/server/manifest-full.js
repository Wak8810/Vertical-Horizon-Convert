export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "Vertical-Horizon-Convert/_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.CIJu-sAb.js","app":"_app/immutable/entry/app.PyChsONd.js","imports":["_app/immutable/entry/start.CIJu-sAb.js","_app/immutable/chunks/entry.D707KQVt.js","_app/immutable/chunks/runtime.DnMJG9Od.js","_app/immutable/entry/app.PyChsONd.js","_app/immutable/chunks/runtime.DnMJG9Od.js","_app/immutable/chunks/store.D2OQDF0H.js","_app/immutable/chunks/events.alHebq7v.js","_app/immutable/chunks/disclose-version.CNf-3iWM.js","_app/immutable/chunks/proxy.CCNE9P1t.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
