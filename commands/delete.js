const {prompt} = require('inquirer')
const {writeFile} = require('fs')
const {listTable} = require(`${__dirname}/../utils`)
let tplList = require(`${__dirname}/../templates`)
let tplKeys = Object.keys(tplList)
const chalk = require('chalk')
console.log(chalk.red(`请按照提示删除模板！`));
const question = [
  {
    type: "list",
    name: "delTemp",
    message: "请选择您需要删除的模板",
    choices: tplKeys
  },
  {
    type: "confirm",
    name: "confirm",
    message: "是否确认删除（默认为Yes）？",
    default: true,
  }
]

module.exports = prompt(question).then(({delTemp, confirm}) => {
  if (confirm) {
    delete tplList[delTemp]
    writeFile(`${__dirname}/../templates.json`, JSON.stringify(tplList), 'utf-8', (err) => {
      if (err) {
        console.log(err)
      }
      listTable(tplList, `${delTemp}已经成功移除！`)
    })
  }
})
