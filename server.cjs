const path = require('node:path');

// Hostinger loads its entry point through CommonJS. Use dynamic import here so
// Vinext's ESM production server can still be started without top-level await.
const port = Number.parseInt(process.env.PORT || '3000', 10);

import('./node_modules/vinext/dist/server/prod-server.js')
  .then(({ startProdServer }) =>
    startProdServer({
      host: '0.0.0.0',
      outDir: path.resolve(process.cwd(), 'dist'),
      port,
    }),
  )
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
