const fs = require("fs");
const parse = require("csv-parse/lib/sync");
const path = require("path");

const sourcePath = __dirname + "/language.csv";
const cnPath = path.resolve(__dirname, "../../src/language/modules", `cn.json`);
console.log(cnPath);
const enPath = path.resolve(__dirname, "../../src/language/modules", `en.json`);
console.log(enPath);

let cnData = {};
let enData = {};

const fileData = fs.readFileSync(sourcePath);

const jsonData = parse(fileData, { columns: false, trim: true });

jsonData.forEach((item, index) => {
  if (index >= 1) {
    cnData[item[0]] = item[1];
    enData[item[0]] = item[2];
  }
});

fs.writeFile(cnPath, JSON.stringify(cnData, null, 2), (res) => {
  console.log(`translate cn success`);
});

fs.writeFile(enPath, JSON.stringify(enData, null, 2), (res) => {
  console.log(`translate en success`);
});
