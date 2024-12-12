

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.CtvQ0TrG.js","_app/immutable/chunks/disclose-version.CNf-3iWM.js","_app/immutable/chunks/runtime.DnMJG9Od.js"];
export const stylesheets = [];
export const fonts = [];
