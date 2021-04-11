const fs = require('fs')

const testFolder = './';

function callback(err) {
    try{
        if (err) throw err;
    }
    catch (err){
        console.log(err);
  }
}

fs.writeFileSync('notes.txt','hello hiiiiiiii');
fs.watch(testFolder, (eventType, filename) => {
    console.log(`event type is: ${eventType}`);
    if (filename) {
      console.log(`filename provided: ${filename}`);
    } else {
      console.log('filename not provided');
    }
  });
fs.copyFile('notes.txt', 'newNotes.txt', callback);
fs.rename('notes.txt', 'reNotes.txt', callback);
fs.readdir(testFolder, (err, files) => {
    files.forEach(file => {
      console.log(file);
    });
  });
