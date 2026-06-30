import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/server.advanced_BkwAUHJ9.mjs';
import { manifest } from './manifest_DkqPy9gf.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/about.astro.mjs');
const _page2 = () => import('./pages/admin/cases.astro.mjs');
const _page3 = () => import('./pages/admin/faq.astro.mjs');
const _page4 = () => import('./pages/admin/login.astro.mjs');
const _page5 = () => import('./pages/admin/services.astro.mjs');
const _page6 = () => import('./pages/admin/settings.astro.mjs');
const _page7 = () => import('./pages/cases.astro.mjs');
const _page8 = () => import('./pages/faq.astro.mjs');
const _page9 = () => import('./pages/services/_slug_.astro.mjs');
const _page10 = () => import('./pages/services.astro.mjs');
const _page11 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/about.astro", _page1],
    ["src/pages/admin/cases.astro", _page2],
    ["src/pages/admin/faq.astro", _page3],
    ["src/pages/admin/login.astro", _page4],
    ["src/pages/admin/services.astro", _page5],
    ["src/pages/admin/settings.astro", _page6],
    ["src/pages/cases.astro", _page7],
    ["src/pages/faq.astro", _page8],
    ["src/pages/services/[slug].astro", _page9],
    ["src/pages/services/index.astro", _page10],
    ["src/pages/index.astro", _page11]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_astro-internal_middleware.mjs')
});
const _exports = createExports(_manifest);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
