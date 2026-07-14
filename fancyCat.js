const fs = require('fs');

const filename = process.argv[2];

if (!filename) {
  console.log("Please provide a filename. Usage: node fancyCat.js <filename>");
  process.exit(1);
}

try {
  const content = fs.readFileSync(filename, 'utf8');
  const lines = content.split('\n').filter(line => line !== '');

  console.log("---- File Contents ----");
  console.log(content);
  console.log("------------------------");
  console.log(`Line count: ${lines.length}`);
} catch (err) {
  console.log(`Error: could not read file "${filename}"`);
}
