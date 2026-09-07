import { spawn } from 'node:child_process';
import { fileURLToPath } from 'node:url';

// Hostinger requires a JavaScript entry file. Delegate to Vinext's production
// server so the app runs with the same command used locally: `vinext start`.
const vinextCli = fileURLToPath(new URL('./node_modules/vinext/dist/cli.js', import.meta.url));
const child = spawn(process.execPath, [vinextCli, 'start'], {
  env: process.env,
  stdio: 'inherit',
});

for (const signal of ['SIGINT', 'SIGTERM']) {
  process.on(signal, () => child.kill(signal));
}

child.on('exit', (code) => process.exit(code ?? 0));
