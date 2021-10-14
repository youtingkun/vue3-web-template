var mammoth = require("mammoth");
const fs = require("fs");
const Path = require("path");

const docFileList = fs.readdirSync(__dirname).filter(function (file) {
  return Path.extname(file).toLowerCase() === ".docx";
});

console.log(__dirname);

const docFilePathList = docFileList.map((item) => {
  return `${__dirname}/${item}`;
});

const htmlFilePathList = docFilePathList.map((item) => {
  return item.replace(".docx", ".html");
});

console.log(docFilePathList, htmlFilePathList);

const options = {
  styleMap: ["u => u", "p[style-name='center'] => p.center"],
};

docFileList.forEach(function (item, index) {
  mammoth
    .convertToHtml({ path: docFilePathList[index] }, options)
    .then(function (result) {
      fs.writeFile(htmlFilePathList[index], result.value, (err) => {
        if (err) throw err;
        console.log("文件已被保存");
      });
    })
    .done();
});
