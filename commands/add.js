const {prompt} = require('inquirer')
const {writeFile} = require('fs')
const {listTable} = require(`${__dirname}/../utils`)

let tplList = require(`${__dirname}/../templates`)
const chalk = require('chalk')
console.log(chalk.green(`正在添加新模板！`));
const question = [
  {
    type: 'input',
    name: 'name',
    message: '请设置模板名称:',
    validate(val) {
      if (tplList[val]) {
        return '抱歉，该模板已经存在，请重新输入!'
      } else if (val === '') {
        return '您必须输入一个模板名称!'
      } else {
        return true
      }
    }
  },
  {
    type: 'input',
    name: 'place',
    message: '请输入模板的owner/name（对应github的用户名和项目名）:',
    validate(val) {
      if (val !== '') {
        return true
      }
      return 'owner/name输入为空，请重新输入!'
    }
  },
  {
    type: 'input',
    name: 'branch',
    message: '请输入项目的分支名称（默认为master）:',
    default: 'master'
  }
]

module.exports = prompt(question).then(({name, place, branch}) => {
  tplList[name] = {}
  tplList[name]['owner/name'] = place
  tplList[name]['branch'] = branch

  writeFile(`${__dirname}/../templates.json`, JSON.stringify(tplList), 'utf-8', (err) => {
    if (err) {
      console.log(err)
    }
    listTable(tplList, `恭喜您，模板项目${name}添加成功！`)
  })
})
