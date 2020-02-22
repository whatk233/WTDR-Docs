---
title: 基本功能
autoPrev: tackover
---
# 基本功能

用于系统部署时运行指定程序/任务，删除指定文件/文件夹   

    支持运行：exe,bat,cmd,vbs,msi   
    支持执行单条 CMD 命令任务
    支持导入注册表
    支持调用可移动设备的程序
 
## 用法
```ini
[任务时机字段]
Task顺序=任务模式|路径|运行参数(可选)|是否隐藏运行(可选)|是否不等待运行(可选)
;运行 %SystemDrive%\WTDR_Setup\Task.exe
Task2=R|%SystemDrive%\WTDR_Setup\Task.exe
;隐藏运行 %SystemDrive%\WTDR_Setup\Hide.exe
Task3=R|%SystemDrive%\WTDR_Setup\Hide.exe||1
;隐藏运行可移动磁盘中的 Hide.exe 并且带 /S 运行参数
Task4=R|%U%\Hide.exe|/S|1
;不等待运行 %SystemDrive%\WTDR_Setup\Fast.exe 并且带 /S=C:\ 运行参数
Task5=R|%SystemDrive%\WTDR_Setup\Fast.exe|/S=C:\||1
;导入 %SystemDrive%\WTDR_Setup\something.reg 注册表
Task6=R|%SystemDrive%\WTDR_Setup\something.reg
;执行 CMD 命令
Task7=C|mkdir C:\dir
;执行 CMD 命令并显示窗口
Task8=C|Show|dir && Pause
;删除文件/文件夹
Task9=D|%SystemDrive%\WTDR_Setup\rubbish
TaskX=
```
::: warning 注意
运行任务顺序号请勿相同！
:::

## 时机字段
| 时机字段 | 运行时机 |
| ------ | ------ | ------ |
|ReadyDeploy |部署前|
|Deploying|部署中|
|DeployOK|部署后|
|FirstLogon|首次登陆|
|FirstDesktop|首次进入桌面|

## 任务模式
| 任务模式 | 用途 |
| ------ | ------ | ------ |
|R |运行可执行文件(包括导入注册表)|
|D|删除文件或文件夹|
|C|执行 CMD 指令|

## 路径变量
| 路径变量 | 位置 |
| ------ | ------ | ------ |
|%X% |所有磁盘(包括可移动磁盘)|
|%Drive%|所有固定磁盘|
|%U%|所有可移动设备|
|%CD%|所有光驱¿|