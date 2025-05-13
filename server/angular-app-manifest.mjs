
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/portfolio-deploy/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/portfolio-deploy"
  },
  {
    "renderMode": 2,
    "route": "/portfolio-deploy/service"
  },
  {
    "renderMode": 2,
    "route": "/portfolio-deploy/contact"
  },
  {
    "renderMode": 2,
    "route": "/portfolio-deploy/aboutme"
  },
  {
    "renderMode": 2,
    "route": "/portfolio-deploy/projects"
  },
  {
    "renderMode": 2,
    "redirectTo": "/portfolio-deploy",
    "route": "/portfolio-deploy/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 8422, hash: 'e2010abc608a0ae7759b22c5c86f833cab5c96009bc162c7dce8b674df9c79a8', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1043, hash: '8367690535a7e827dc1c14d982298c453260c3ab7ed8c88a89519279c7113516', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 8980, hash: '8e57c4c7339d88c3259ed16bb4e252736ab06c425e1f46a7093f7efcd6fa0ca2', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'service/index.html': {size: 39541, hash: '3dbebe95b168db192df7fc9c691ffa0decf18ba8bfa0374f2faaa5df632d3828', text: () => import('./assets-chunks/service_index_html.mjs').then(m => m.default)},
    'index.html': {size: 39541, hash: '3dbebe95b168db192df7fc9c691ffa0decf18ba8bfa0374f2faaa5df632d3828', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 8983, hash: '36b4e3832028d9f96e7961286abdb514571686a8717065e635689d0406f0c7f6', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'aboutme/index.html': {size: 8980, hash: 'f8619c924183916cd8d734579ed653e094e01962fe1b9dc308ff78b19f7ac5f7', text: () => import('./assets-chunks/aboutme_index_html.mjs').then(m => m.default)},
    'styles-IFZO5KIC.css': {size: 29239, hash: 'eJPK6nU72ik', text: () => import('./assets-chunks/styles-IFZO5KIC_css.mjs').then(m => m.default)}
  },
};
