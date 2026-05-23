const { execSync } = require('node:child_process');
const path = require('node:path');

const frontendDir = path.join(process.cwd(), 'frontend');

execSync('npm install --no-audit --no-fund', { cwd: frontendDir, stdio: 'inherit' });
execSync('npm run build', { cwd: frontendDir, stdio: 'inherit' });

console.log('Revvel-standards baseline build passed.');
