---
title: WTDR.AntiFamily
---

# WTDR.AntiFamily
用于检测系统是否被 PE 或者系统安装器等埋入不受欢迎软件的安装程序    
如检测到相关异常，将会弹窗提示用户删除，如5秒内不作出选择，则默认删除异常文件   
该功能很适合系统定制玩家，可以减少将系统上传到社区后，用户不正当安装导致的预装，而产生的一些误解。

## 用法
将 `AntiFamily` 字段中相应功能的值设置为`1`(启用)状态   
如 `AntiFamily` 值非启用，则不执行 WTDR.AntiFamily 功能   

```ini
[AntiFamily]
AntiFamily=1
;检查启动目录可疑文件
CheckStartupDir=1
;检查桌面可疑推广网站快捷方式
CheckDesktop=1
```

::: tip 提示
检测出异常后，程序会在 `%Windir%` 目录建立 `AntiFamily.True` 文件
:::