const fs = require('fs');
const util = require('util');
const readFile = util.promisify(fs.readFile);

//printFileSize function
const printFileSize = async filename => {
    try {
    const data = await readFile(filename);
    console.log(`File ${filename} read successfully`);
    console.log(`Data length: ${data.length} bytes`);
    } catch (err) {
    console.error(err);
    }
};




(async () => {
    console.log('String 1');
    await printFileSize('./file.txt');
    console.log('String 2');
    printFileSize('./file2.txt');
    console.log('String 3');
    })();
    