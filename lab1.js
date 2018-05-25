const csvFile = 'customer-data.csv'
const fs = require('fs')
const csvCode = require('csvjson')

var csvData = fs.readFileSync(csvFile, { encoding : 'utf8'});

console.log('read ' + csvData.length + ' characters')

var options = {
    delimiter : ',' , 
    quote     : '"' 
};

var result = csvCode.toObject(csvData, options);

fs.writeFileSync('customer-data-output.json', JSON.stringify(result, null, 2))

console.log('done'); 