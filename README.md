# INFORE-CLI项目脚手架工具
最近追了一下Vue-cli的源码，作为一个脚手架工具，Vue-cli就是用来生成vue模板项目，那么大家使用的时候有没有去想，对于Vue-cli来说，他是怎么做到构建项目目录的。

首先我们想一下，我们通过vue init Demo，在命令行的对话与选择工具是通过什么来完成的呢？ 当然我们可以通过shell来写这个脚本，在看源码时我们发现Vue-cli使用的是Inquirer.js这个库，这个库对于写脚本的ask-answer非常高效，支持错误回调和input解析，我们可以很容易的写一套对话时脚本。

### 下面介绍一下脚手架的使用。
使用方式是模仿vue-cli的。
### 安装
```
npm install infore-cli -g
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
![](/img/infore-cli-add.gif)
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
![](/img/infore-cli-list.gif)
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
![](/img/infore-cli-init.gif)
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

![](/img/infore-cli-delete.gif)
```
$ infore delete
根据提示删除模板。
```

### 生成的库会在```template.json```里维护，可以手动更改该目录。
#### [infore-rn-base](https://github.com/MIFind/infore-rn-base) 
#### [infore-wx-base](https://github.com/MIFind/infore-wx-base) 
#### [infore-wepy-base](https://github.com/MIFind/infore-wepy-base) 

<a href="https://nodei.co/npm/infore-cli/"><img src="https://nodei.co/npm/infore-cli.png?downloads=true&downloadRank=true&stars=true"></a>

## License
MIT.
