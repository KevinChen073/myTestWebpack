const archiver = require('archiver');
const fs = require('fs');
const path = require('path');

const Z_BEST_COMPRESSION = 9;
// create a file to stream archive data to.
const zipPath = path.join(__dirname, data, 'files.zip');
const output = fs.createWriteStream(zipPath);
const archive = archiver('zip', {
 zlib: { level: Z_BEST_COMPRESSION }
});

// listen for all archive data to be written
output.on('close', () => {
    console.log(`Total bytes: ${archive.pointer()}`);
    console.log('archiving has now finished.');
});

archive.on('error', (err) => {
    throw err;
});

archive.pipe(output);
// add files (read the copy.txt and logo.jpg and output with different names)
const textPath = path.join(__dirname, 'data', 'copy.txt');
const logoPath = path.join(__dirname, 'data', 'logo.jpg');
archive.append(fs.createReadStream(textPath), { name: 'content.txt' });
archive.append(fs.createReadStream(logoPath), { name: 'nobot.jpg' });
// finalize the archive (ie we are done appending files but streams have to finish yet)
archive.finalize();