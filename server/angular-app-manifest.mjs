
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/portfolio-deploy/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/portfolio-deploy"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 512, hash: '3f7317e92c28a35b334a03bfc75014daa24979e1ff9c7dfdd6565cad5134bfd3', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1025, hash: '3f6fb50eef72318f9c039b5ca9234ab79a0b7c6dd20c939c2ffd4ace6c47a9c9', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 20856, hash: '3ddb36f8c4d318f22adff7fe40919a3f3dc041bff54865a26d6fd98bb134f344', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
