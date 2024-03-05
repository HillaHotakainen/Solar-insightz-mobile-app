const XLSX = require('xlsx');
const fs = require ('fs');

var sheet = XLSX.readFile('example-data.xlsx');
var jsonData = {};

sheet.SheetNames.forEach((sheetName) => {
    const worksheet = sheet.Sheets[sheetName];
    jsonData[sheetName] = XLSX.utils.sheet_to_json(worksheet);
    console.log("parsed");
    fs.writeFile("exel-to-JSON.json", JSON.stringify(jsonData), function(err) {
        console.log("added to JSON");
    })
});
