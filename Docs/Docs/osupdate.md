---
title: 系统更新任务
---

# 系统更新任务
可接管 Win10 大更新流程并运行指定任务（如 RS4 到 RS5）

## 用法
按照配置文件中的注释配置即可    
运行任务处规则与“基本任务”一样
```ini
[OSUpdate]
;是否接管系统升级过程（不接管则不进行WTDR功能）
Use=1
;是否需要在升级时运行任务
UpdateRun=1
;升级时运行任务
U_Task1=
;是否需要在进入桌面时运行任务
UpdateDeskRun=1
;进入桌面时运行任务
D_Task1=
;更新时是否需要使用Pack功能（只应用配置文件带Update字段的包）
Pack=1
;是否需要删除系统部署相关文件夹？（Other字段的ByeDel）（不接管系统升级过程也会删除）
ByeDel=1
```