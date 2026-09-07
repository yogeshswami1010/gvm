import path from 'node:path';
import { startProdServer } from './node_modules/vinext/dist/server/prod-server.js';

// Hostinger requires one JavaScript entry file. Start Vinext in this process
// instead of spawning a child, which prevents stale child servers on restart.
const port = Number.parseInt(process.env.PORT ?? '3000', 10);

await startProdServer({
  host: '0.0.0.0',
  outDir: path.resolve(process.cwd(), 'dist'),
  port,
});