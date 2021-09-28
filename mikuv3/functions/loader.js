/* eslint-disable no-empty-function */
const fs = require('fs')
const { color } = require('../lib/color')

/**
 * Returns an array of files.
 * @param {*} dirPath 
 * @param {string[]} [arrayOfFiles]
 * @returns {string[]}
 */
const getAllDirFiles = (dirPath, arrayOfFiles) => {
    const files = fs.readdirSync(dirPath)
    arrayOfFiles = arrayOfFiles || []
    files.forEach((f) => {
        if (fs.statSync(dirPath + '/' + f).isDirectory()) {
            arrayOfFiles = getAllDirFiles(dirPath + '/' + f, arrayOfFiles)
        } else {
            arrayOfFiles.push(f)
        }
    })
    return arrayOfFiles
} 


module.exports = {
    getAllDirFiles
}
