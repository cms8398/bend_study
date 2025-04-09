const fs = require('fs');
const util = require('util');
const readFile = util.promisify(fs.readFile);
const printFileSize = async filename => {
try {
const data = await readFile(filename);
console.log(`File ${filename} read successfully`);
console.log(`Data length: ${data.length} bytes`);
} catch (err) {
console.error(err);
}
};
console.log('String 1');
printFileSize('./file.txt');
console.log('String 2');