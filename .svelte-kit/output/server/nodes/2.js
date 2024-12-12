import * as universal from '../entries/pages/_page.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.js";
export const imports = ["_app/immutable/nodes/2.B8IfmV-h.js","_app/immutable/chunks/disclose-version.CNf-3iWM.js","_app/immutable/chunks/runtime.DnMJG9Od.js","_app/immutable/chunks/legacy.DSJdRyMX.js","_app/immutable/chunks/events.alHebq7v.js","_app/immutable/chunks/proxy.CCNE9P1t.js"];
export const stylesheets = ["_app/immutable/assets/2.BM3r73FO.css"];
export const fonts = [];
