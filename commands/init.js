const {prompt} = require('inquirer')
const download = require('download-git-repo')
const ora = require('ora')
const shell = require('shelljs')

let tplList = require(`${__dirname}/../templates`)
let tplKeys = Object.keys(tplList);
const chalk = require('chalk')
console.log(chalk.green(`欢迎您使用INFORE-CLI初始化项目！`));
const question = [
    {
        type: 'input',
        name: 'projectName',
        message: '请输入生成项目名:',
        validate(val) {
            // 检查文件夹是否已存在
            var ls = shell.ls();
            if (ls.indexOf(val) !== -1) {
                return "该目录已存在，请重新输入项目名称"
            } else {
                return true
            }
        }
    },
    {
        type: "list",
        name: "platform",
        message: "请选择平台",
        choices: tplKeys,
        filter: function (val) {
            return tplList[val]
        }
    }
];


module.exports = prompt(question).then(({projectName, platform}) => {
    const gitPlace = platform['owner/name']
    const gitBranch = platform['branch']
    const spinner = ora('正在下载模板，请稍后...')

    spinner.start()
    console.log(chalk.green(`\r\n下载地址为：${gitPlace}#${gitBranch}`))
    download(`${gitPlace}#${gitBranch}`, `${projectName}`, (err) => {
        if (err) {
            console.log(chalk.red(err))
            process.exit()
        }
        spinner.stop()
        console.log(chalk.green('恭喜您，新项目生成成功!'))
    })
})
