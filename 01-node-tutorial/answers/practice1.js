const sentence = require('./practice2')

const os = require('os')
const user = os.userInfo()

const { readFile, writeFile } = require('fs')


 
writeFile(
  './content/practice.txt',
  `Here is the result: ${sentence}, ${user.username}`, (err, result)=> {
    if(err) {
      console.log(err)
      return
    }
  }
)
