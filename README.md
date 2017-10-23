# INFORE-CLI
### 盈峰项目脚手架工具

### 安装
```
npm install scion-cli -g
```

### 使用方式
命令行输入```infore```如果出现下面则证明安装成功。

```
  Usage: infore <command>


  Commands:

    add|a      Add a new template
    list|l     List all the templates
    init|i     Generate a new project
    delete|d   Delete a template

  Options:

    -h, --help     output usage information
    -V, --version  output the version number
```


### 命令
#### add | a

```
$ infore add 添加模板框架项目
当前默认有盈峰移动端三个库（infore-rn-base/infore-wx-base/infore-wepy-base）
┌───────────────┬───────────────────────────────┬────────┐
│ Template Name │ Owner/Name                    │ Branch │
├───────────────┼───────────────────────────────┼────────┤
│ ReactNative   │ InforeEnviro/infore-rn-base   │ master │
├───────────────┼───────────────────────────────┼────────┤
│ wepy          │ InforeEnviro/infore-wepy-base │ master │
├───────────────┼───────────────────────────────┼────────┤
│ wx            │ InforeEnviro/infore-wx-base   │ master │
└───────────────┴───────────────────────────────┴────────┘
```

#### list | l
```
$ infore list
展示项目列表
┌───────────────┬───────────────────────────────┬────────┐
│ Template Name │ Owner/Name                    │ Branch │
├───────────────┼───────────────────────────────┼────────┤
│ ReactNative   │ InforeEnviro/infore-rn-base   │ master │
├───────────────┼───────────────────────────────┼────────┤
│ wepy          │ InforeEnviro/infore-wepy-base │ master │
├───────────────┼───────────────────────────────┼────────┤
│ wx            │ InforeEnviro/infore-wx-base   │ master │
└───────────────┴───────────────────────────────┴────────┘
```

#### init | i
```
$ infore init
根据提示生成项目

欢迎您使用INFORE-CLI初始化项目！
? 请输入生成项目名: test
? 请选择平台 (Use arrow keys)
❯ ReactNative 
  wepy 
  wx 

恭喜您，新项目生成成功!

```
>使用[download-git-repo](https://github.com/flipxfx/download-git-repo) 下载git库，而不是直接命令行，这样避免了项目中会自带.git.

#### delete | d

```
$ infore delete
根据提示删除模板。
```

### 生成的库会在```template.json```里维护，可以手动更改该目录。

<a href="https://nodei.co/npm/infore-cli/"><img src="https://nodei.co/npm/react-native-template-infore.png?downloads=true&downloadRank=true&stars=true"></a>

## License
MIT.









