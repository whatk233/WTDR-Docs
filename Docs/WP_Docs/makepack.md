---
title: 制作 WTDR.Pack 包
---
# 制作 WTDR.Pack 包

想要 WTDR.Pack 工作，那就要一个可以使他完成任务的`包(Pack)`

:::danger 注意
该文档制作的包只适用于主程序 `1.6.0` 或更高版本
:::

:::tip 示例 WTDR.Pack 包
文档中的示例包可到“[获取](/Get.md)”下载
:::

## 包命名规则
`软件名_版本号_适用系统位数(可选)_适用系统版本(可选)_打包日期(可选)_作者(可选)_Pack.7z`     
`软件名_版本号_适用系统位数(可选)_适用系统版本(可选)_打包日期(可选)_作者(可选).Pack`     

::: tip WTDR.Pack 后缀名
每个包的后缀名必须为：  
*_Pack.7z   
*.Pack
:::
    例如：
    Chrome_V80_Pack.7z
    Chrome_V80_X64_Pack.7z
    Chrome_V80_X64_Win10_200221_Whatk_Pack.7z
    Chrome_V80_X64_Win10_200221_Whatk.Pack

    不符合规则的包名：
    Chrome_V80.7z
    Chrome_V80_X64_Win10_200221_Whatk.Pack.7z
    Chrome_V80_X64_Win10_200221_Whatk_Pack


虽然没有特别严格的检测，不过还是希望能规范一点吧 xD

## 包结构
    WTDR.Pack 包
    └@@Pack@@           (配置/工作目录)*
    |   └Config.ini     (包配置文件)*
    └其他目录/文件       (需要应用到指定位置的文件)
    
    *为必须要存在

## 需要用到的工具
+ 7-Zip
+ WTDR.Pack 模板 ([获取](/Get.md))
+ WTDR.Pack 主程序 (用于测试)
+ VMWare/Vbox (用于测试)

#### 其他可选辅助工具
+ Sandboxie
+ SutWizard（1809+无法使用）
+ RegShot
+ Total Uninstall 专业版
+ Uninstall Tool 专业版

## 模板配置解读
```ini
[Pack]
;版本识别，通常保持无需修改*
ConfigVer=2
;包标题，应用时显示*
Title=
;适用系统，多系统可用“,”隔开，留空则不做匹配
;如：Win2000,WinXP,Win7,Win10
Sys=
;适用系统位数 X32 X64 ，留空不匹配
Arch=
;应用到位置
;如：D:\Soft，可用系统变量，留空为系统盘
Apply_Path=
;应用时机（1、部署环境应用，2、桌面环境应用，部署环境应用部署环境应用和桌面环境应用都可以应用则留空）
RunTiming=
;自定义软件安装目录
;实验性功能，适用于大部分软件安装包
;支持系统变量，%Apply_Path% 为应用到位置的目录
;该功能不保证所有程序都能自定义，同时在少少少数情况下，软件安装后会出现问题
SetupPath=
[Pack.Before]
;应用前任务
Task1=
;Task2=
[Pack.After]
;应用后任务
Task1=
;Task2=
```

:::tip 应用任务提示
应用前/应用后任务的配置方式与“[WTDR 基本任务](/Docs/runtask.md)”一致    
运行程序可以无需填写完整目录，只填写该程序文件名即可，例如：    
`Setup.exe`会重置到`@@Pack@@\Setup.exe`     
当然，如果没有需要运行的任务，可以将 `Pack.Before`、`Pack.After` 留空
:::

:::tip 应用时机解释
部署环境应用：部署环境默认用户为 `SYSTEM` ，可以直接修改/覆盖/删除系统文件，通常建议能部署中应用的都部署中应用      

桌面环境应用：桌面环境中默认用户为 OOBE 时新建的用户，也就是当前登录的用户，无法可以直接修改/覆盖/删除系统文件，有些软件无法在 `SYSTEM` 账户环境下安装就可以在桌面环境下安装了

通常建议优先在部署环境下应用，除非存在特殊情况
:::

:::tip 关于配置文件重写
`Pack_Config.ini` 可无需修改包而“重写”配置项
:::

## 制作一个 Chrome 包 (示例)

Chrome 官方有提供静默安装参数，我们可以给安装包添加静默安装参数来静默安装 Chrome    
::: tip 要点
通常尽量用能用静默参数调用安装包静默安装
:::
首先 [获取企业版 Chrome 浏览器](https://cloud.google.com/chrome-enterprise/browser/download)    
解压模板，将 Chrome 安装包 复制到 `@@Pack@@` 文件夹中   
<img :src="$withBase('/image/Snipaste_2020-02-21_21-56-34.jpg')" alt="">    
<img :src="$withBase('/image/Snipaste_2020-02-21_21-59-45.jpg')" alt="">    

编辑 `Config.ini` 文件
```ini {4,9,20}
[Pack]
ConfigVer=2
;包标题（用于应用时显示，不过Pack_Config.ini里的标题将优先显示）
Title=Chrome 80 浏览器 X64
;适用系统，多系统可用“,”隔开，留空则不做匹配
;Win2000,WinXP,Win7,Win10
Sys=
;适用系统位数 X32 X64 ，留空不匹配
Arch=X64
;应用到位置（如：D:\Soft，可用系统变量，留空为系统盘）
Apply_Path=
;应用时机（1、环境部署应用，2、桌面环境应用，部署环境和桌面环境都可以应用则留空）
RunTiming=
;自定义软件安装目录 (实验性功能，适用于大部分软件安装包) (支持系统变量，%Apply_Path% 为应用到位置的目录) (该功能不保证所有程序都能自定义，同时在少少少数情况下，软件安装后会出现问题)
SetupPath=
[Pack.Before]
Task1=
;Task2=
[Pack.After]
Task1=R|GoogleChromeStandaloneEnterprise64.msi|/qb
;Task2=
```

:::tip 要点
代码高亮处(第4行)，设置标题，应用时会显示在 WTDR.Pack 主程序上    
代码高亮处(第9行)，因为下载下来的 Chrome 是64位版本的，我们就可以设置一个机器限制   
代码高亮处(第20行)，设置运行任务，使用静默安装参数`/qb`运行 Chrome 安装包   
:::

配置好保存就可以使用`7-Zip`打包了   
打包完就可以拿去[测试](#测试)了

<img :src="$withBase('/image/Snipaste_2020-02-21_22-17-02.jpg')" alt="">    

:::tip 要点
请注意后缀名为 `*_Pack.7z` 或 `*.Pack`  
:::

## 制作一个轻度系统美化包（示例）
该美化包打算实现以下效果：  
+ 更换系统壁纸
+ 任务栏图标居中
+ 任务栏透明    

并且使用环境为 Win10    
    
首先就要准备需要实现的工具：    
+ 壁纸一张
+ [CenterTaskbar](https://github.com/mdhiggins/CenterTaskbar) (任务栏居中程序)
+ [TranslucentTB](https://github.com/TranslucentTB/TranslucentTB) (任务栏透明程序) (为了示例效果，下面用的是支持命令行调用的旧版绿色版)
+ [SetWallPaper](https://whatk.me/setwallpaper) (命令行设置壁纸程序)
+ 编写好任务栏居中、透明程序添加自启动的命令行脚本

准备好后就新建一个独立的文件夹，解压模板    
把需要应用的相关文件放到目录里      

<img :src="$withBase('/image/Snipaste_2020-02-22_18-06-46.jpg')" alt="">    

目录结构：  
```
当前目录
├@@Pack@@   (配置目录)
│   └Config.ini (配置文件)
│   └Startup.bat (设置自启动批处理)
│   └SetWallpaper.exe (命令行设置壁纸程序)
├CenterTaskbar
│   └CenterTaskbar.exe  (任务栏居中程序)
├TranslucentTB
│   └TranslucentTB.exe  (任务栏透明程序)
├Wallpaper
│   └thomas-bonometti-1252754-unsplash.jpg  (需要设置的壁纸)
```

然后就可以开始编辑`Config.ini`配置文件了：  
```ini{4,7,11,13,15,18,19,20}
[Pack]
ConfigVer=2
;包标题（用于应用时显示，不过Pack_Config.ini里的标题将优先显示）
Title=老年康的轻量美化包
;适用系统，多系统可用“,”隔开，留空则不做匹配
;Win2000,WinXP,Win7,Win10
Sys=Win10
;适用系统位数 X32 X64 ，留空不匹配
Arch=
;应用到位置（如：D:\Soft，可用系统变量，留空为系统盘）
Apply_Path=%Appdata%\
;应用时机（1、部署中应用，2、首次进入桌面应用，部署中和桌面环境都可以应用则留空）
RunTiming=2
[Pack.Before]
Task1=R|Startup.bat||1
;Task2=
[Pack.After]
Task1=R|SetWallpaper.exe|%Appdata%\Wallpaper\thomas-bonometti-1252754-unsplash.jpg
Task2=R|%Appdata%\CenterTaskbar\CenterTaskbar.exe|||1
Task3=R|%Appdata%\TranslucentTB\TranslucentTB.exe|||1
```
:::tip 要点
代码高亮处(第4行)，设置标题，应用时会显示在 WTDR.Pack 主程序上    
代码高亮处(第7行)，因为任务栏透明以及居中只支持 Win10，所以咱设置个系统限制     
代码高亮处(第11行)，释放 `CenterTaskbar`,`TranslucentTB`,`Wallpaper` 文件所到的位置     
代码高亮处(第13行)，因为**设置壁纸涉及到当前用户**，所以只能在桌面环境应用该包，咱做个限制      
代码高亮处(第15行)，**隐藏**执行批处理添加`CenterTaskbar`,`TranslucentTB`为开机启动  
代码高亮处(第18行)，调用`SetWallpaper.exe`为电脑设置`Wallpaper`文件夹中的壁纸   
代码高亮处(第19行)，**不等待** 运行释放到`%Appdata%`的任务栏居中程序   
代码高亮处(第20行)，**不等待** 运行释放到`%Appdata%`的任务栏透明程序   
:::

:::tip 什么时候需要用到不同的应用时机？
**释放文件/设置注册表/或其他操作为当前用户的**，那就一定要以`桌面环境`运行    
`%Appdata%` 系统环境变量指向的是 `C:\Users\用户名\AppData\Roaming` ，以及设置壁纸为设置当前用户的壁纸，所以只能在`桌面环境`运行
`部署环境`的用户为`SYSTEM`，系统最高权限的用户之一，**只要涉及到修改/覆盖系统文件**，通常建议在`部署环境`时机运行   
**释放文件/设置注册表/或其他操作不规定是否为当前用户的**，都可以在`部署环境`运行    
当不确定所选环境是否能应用正常，可以上虚拟机进行测试    
:::

配置完毕后就可以打包进行[测试](#测试)了  
<img :src="$withBase('/image/Snipaste_2020-02-22_22-24-42.jpg')" alt="">   

拉倒虚拟机运行 WTDR.Pack 主程序应用单包，当提示应用完成，就能看到内味了     
<img :src="$withBase('/image/Snipaste_2020-02-22_22-26-32.jpg')" alt="">   

## 更多思路
还有很多思路，这里就不可能一一介绍完    
参考当前文档，尝试出不同思路，就可以制作出来更多用途的 WTDR.Pack 包  
制作完的话还可以分享到[论坛](https://forum.wtdr.whatk.me/)上与大家分享~     
去尝试吧 xD

## 其他
当检测到`@@Pack@@`文件夹内存在`ApplyCancel`，将跳过应用该包以及应用后任务   

`%ApplyPath%` 为 `应用到位置`变量 <Badge text="V1.6.1" type="info"/>

## 测试
:::tip 提示
应用单包不区分应用时机
:::
在虚拟机内(在实机我也不介意 xD)打开 WTDR.Pack 主程序，选择`应用单包`，在`应用单包`界面选择需要测试的包，然后点击`应用`，应用完毕检查效果就可以了

<img :src="$withBase('/image/Snipaste_2020-02-21_23-00-26.jpg')" alt="">   