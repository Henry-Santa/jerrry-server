const fs = require('fs');

function updateJSONFile(filePath, updates) {
  fs.readFile(filePath, 'utf8', function (err, data) {
    if (err) {
      console.error(err);
      return;
    }

    let json = JSON.parse(data);

    for (let key in updates) {
      json[key] = updates[key];
    }

    fs.writeFile(filePath, JSON.stringify(json, null, 2), 'utf8', function (err) {
      if (err) {
        console.error(err);
      }
    });
  });
}

function readJSONFile(filePath) {
    fs.readFile(filePath, 'utf8', function (err, data) {
      if (err) {
        return callback(err);
      }
  
      let json;
      try {
        json = JSON.parse(data);
      } catch (error) {
        return callback(error);
      }
  
      return callback(null, json);
    });
  }

module.exports = {readJSONFile, updateJSONFile}