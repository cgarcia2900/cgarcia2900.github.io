
export default {
  basePath: 'https://cgarcia2900.github.io/portfolio',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
