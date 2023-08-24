const path = require('path')

console.log(path.sep)

const subfolderpath = path.join('./content','subfolder')
console.log(subfolderpath)

const filePath = path.join('./content', 'subfolder', 'test.txt')
console.log(filePath)
const baseSubFolder = path.basename(subfolderpath)
const base = path.basename(filePath)

console.log(baseSubFolder,base)

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolute)

//this will not give you the absolute as it jumps the 'content' and 'subfolder' folders!
const absolutelY = path.resolve(__dirname, 'test.txt')
console.log(absolutelY)