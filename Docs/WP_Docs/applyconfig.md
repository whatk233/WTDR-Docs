---
title: 按配置应用
---

# 按配置应用
按照自定义的配置文件来应用包

## 编辑配置文件
通常编辑文件在主程序根目录，名为`Pack_Config.ini`
```ini
[Standard]
ConfigVer=1.0
[Office]
;是否寻找 OfficePack 并应用（系统更新时不可用）
FindOffice=1
[Pack1]
Run=0
Pack_Name=
Pack_Title=
FirstDesktop=
OSUpdate=0
[Pack2]
Run=0
Pack_Name=
Pack_Title=
FirstDesktop=
OSUpdate=0
[Pack3]
;最简可以这样配置
Run=1
Pack_Name=WeChat_V2.6.8_Pack.7z
[Pack4]
[Pack5]
[Pack....]

;为了更好演示，示例配置文件有修改过，可能跟压缩包里的不一样
```
关键字解释：
+ Run：是否启用该包（必填）
+ Pack_Name：包文件名（必填）
+ Pack_Title：部署时显示的标题（可选）
+ OSUpdate：系统更新时应用该包（看需求可选）(需要配合 WTDR 使用)
+ FirstDesktop：系统首次进入桌面时应用（看软件包需求）（可留空，留空则按照包内配置来决定）

:::tip 关于包路径
通常包路径为主程序目录下的`Pack`文件夹，把包扔进去直接填写包名即可  
如果要按照其他配置文件来应用记得要在命令行指定包文件夹
:::

:::tip 配置优先度最高
`Pack_Config.ini`中的配置比包配置的优先更高     
例如包配置的标题为`Hello`，但`Pack_Title=World`     
则显示的标题为`World`
:::

:::tip 修改 Config.ini 包配置文件
可以无需修改 WTDR.Pack 包就能修改其配置文件     
只需在需要修改的字段前添加`Pack.`即可   
例如需要修改应用到位置:     
`Pack.Apply_Path=`
:::

## WTDR.Pack 包放置位置
通常把包放在 WTDR.Pack 主程序根目录的`Pack`文件夹中     
在配置文件中已文件名方式调用

如果是使用其他配置文件的话则另外指定包文件夹，通常为你指定的配置文件根目录中的文件夹

## 用法
WTDR.Pack 主程序使用 `/ApplyConfig` 参数运行即可     
如需按照其他配置文件来应用则使用 `/p=配置文件|包文件夹` 参数运行 即可    
```cmd
#按照主程序目录下的 Pack_Config.ini 来应用
WTDR.Pack.exe /ApplyConfig

#按照 "F:\balabala\Pack_Config.ini" 配置文件来应用
WTDR.Pack.exe /p=F:\balabala\Pack_Config.ini|F:\balabala\Pack
```
:::warning 注意
如果存在系统部署或桌面环境，记得后面带上环境参数    
部署环境：`/Deploy`     
桌面环境：`/Desktop`     
:::

:::warning 注意
自定义配置文件记得要指定包文件夹
:::