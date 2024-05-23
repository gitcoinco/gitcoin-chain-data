const fs = require('fs');
const path = require('path');

const chainId = process.argv[2];

if (!chainId) {
  console.error('Error: chainId argument is required');
  process.exit(1);
}

const srcDir = path.join(__dirname, 'src');
const destDir = path.join(srcDir, 'data/chains', chainId);

console.log(`Copying chain.ts.template from ${srcDir}`);
console.log(`Creating new chain in ${destDir}`);

const templateFile = path.join(srcDir, 'chain.ts.template');
const destFile = path.join(destDir, 'chain.ts');

// Create destination directory if it doesn't exist
if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

// Copy template file to the new directory
fs.copyFileSync(templateFile, destFile);

console.log(`Copied chain.ts.template to ${destFile}`);
