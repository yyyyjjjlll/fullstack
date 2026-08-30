let fs = require("fs")
let path = require("path")

console.log(__dirname)

let file_path = path.join(__dirname, "text.txt")
fs.writeFileSync(file_path,'hello world')