const fs = require('fs');
const path = require('path');

const chainId = process.argv[2];

if (!chainId) {
  console.error('Error: chainId argument is required');
  process.exit(1);
}

const rootDir = process.cwd();
const srcDir = path.join(rootDir, 'src');
const destDir = path.join(srcDir, 'data/chains', chainId);

const templateFile = path.join(srcDir, 'chain.ts.template');
const destFile = path.join(destDir, 'chain.ts');

// ASCII banner
console.log(`
┏┓ ┓ ┓•      ┏┓┓   •  
┣┫┏┫┏┫┓┏┓┏┓  ┃ ┣┓┏┓┓┏┓
┛┗┗┻┗┻┗┛┗┗┫  ┗┛┛┗┗┻┗┛┗
`);

console.log("=====================================\n\n")
console.log(`File created at "src/data/chains/${chainId}"`);
console.log("\n\n=====================================")

// Create destination directory if it doesn't exist
if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

// Copy template file to the new directory
fs.copyFileSync(templateFile, destFile);

console.log(`Copied chain.ts.template to ${destFile}`);
