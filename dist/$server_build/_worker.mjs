import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/server.advanced_DgsI-0o1.mjs';
import { manifest } from './manifest_CGD21CHI.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/about.astro.mjs');
const _page2 = () => import('./pages/admin/cases.astro.mjs');
const _page3 = () => import('./pages/admin/faq.astro.mjs');
const _page4 = () => import('./pages/admin/login.astro.mjs');
const _page5 = () => import('./pages/admin/services.astro.mjs');
const _page6 = () => import('./pages/admin/settings.astro.mjs');
const _page7 = () => import('./pages/admin/updates.astro.mjs');
const _page8 = () => import('./pages/api/admin/cases.astro.mjs');
const _page9 = () => import('./pages/api/admin/faq.astro.mjs');
const _page10 = () => import('./pages/api/admin/get-image.astro.mjs');
const _page11 = () => import('./pages/api/admin/login.astro.mjs');
const _page12 = () => import('./pages/api/admin/service-update-categories.astro.mjs');
const _page13 = () => import('./pages/api/admin/service-updates.astro.mjs');
const _page14 = () => import('./pages/api/admin/services.astro.mjs');
const _page15 = () => import('./pages/api/admin/settings.astro.mjs');
const _page16 = () => import('./pages/api/admin/upload.astro.mjs');
const _page17 = () => import('./pages/api/business.astro.mjs');
const _page18 = () => import('./pages/api/cases.astro.mjs');
const _page19 = () => import('./pages/api/faq.astro.mjs');
const _page20 = () => import('./pages/api/service-update-categories.astro.mjs');
const _page21 = () => import('./pages/api/service-updates.astro.mjs');
const _page22 = () => import('./pages/api/services.astro.mjs');
const _page23 = () => import('./pages/cases.astro.mjs');
const _page24 = () => import('./pages/faq.astro.mjs');
const _page25 = () => import('./pages/services/_slug_.astro.mjs');
const _page26 = () => import('./pages/services.astro.mjs');
const _page27 = () => import('./pages/updates.astro.mjs');
const _page28 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/about.astro", _page1],
    ["src/pages/admin/cases.astro", _page2],
    ["src/pages/admin/faq.astro", _page3],
    ["src/pages/admin/login.astro", _page4],
    ["src/pages/admin/services.astro", _page5],
    ["src/pages/admin/settings.astro", _page6],
    ["src/pages/admin/updates.astro", _page7],
    ["src/pages/api/admin/cases.ts", _page8],
    ["src/pages/api/admin/faq.ts", _page9],
    ["src/pages/api/admin/get-image.ts", _page10],
    ["src/pages/api/admin/login.ts", _page11],
    ["src/pages/api/admin/service-update-categories.ts", _page12],
    ["src/pages/api/admin/service-updates.ts", _page13],
    ["src/pages/api/admin/services.ts", _page14],
    ["src/pages/api/admin/settings.ts", _page15],
    ["src/pages/api/admin/upload.ts", _page16],
    ["src/pages/api/business.ts", _page17],
    ["src/pages/api/cases.ts", _page18],
    ["src/pages/api/faq.ts", _page19],
    ["src/pages/api/service-update-categories.ts", _page20],
    ["src/pages/api/service-updates.ts", _page21],
    ["src/pages/api/services.ts", _page22],
    ["src/pages/cases.astro", _page23],
    ["src/pages/faq.astro", _page24],
    ["src/pages/services/[slug].astro", _page25],
    ["src/pages/services/index.astro", _page26],
    ["src/pages/updates.astro", _page27],
    ["src/pages/index.astro", _page28]
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
