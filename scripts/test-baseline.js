const fs = require('node:fs');
const path = require('node:path');

const root = process.cwd();
const requiredFiles = [
  'README.md',
  'CHANGELOG.md',
  'DEPLOYMENT_GUIDE.md',
  'GO_TO_MARKET.md',
  'BRAND_GUIDELINES.md',
  'SECURITY.md',
  'package.json',
  path.join('scripts', 'test-baseline.js'),
  path.join('scripts', 'build-baseline.js'),
  path.join('research_engine', 'README.md'),
  path.join('research_engine', 'assets', 'discovery-taxonomy.json'),
  path.join('research_engine', 'assets', 'source-catalog.csv'),
  path.join('research_engine', 'artifacts', 'research-brief-template.md'),
  path.join('research_engine', 'artifacts', 'intervention-scorecard-template.csv'),
  path.join('research_engine', 'artifacts', 's2m-research-register.json'),
  path.join('frontend', 'package.json'),
  path.join('backend', 'requirements.txt')
];

const missing = requiredFiles.filter((file) => !fs.existsSync(path.join(root, file)));

if (missing.length > 0) {
  console.error('Missing required revvel-standards files:');
  for (const file of missing) {
    console.error(`- ${file}`);
  }
  process.exit(1);
}

console.log('Revvel-standards baseline file checks passed.');
