---
title: 系统部署调用
autoPrev: README
---

# 如何调用

## 准备
将 WTDR.Pack 解压到系统目录待调用

:::tip 提示
设置好可以调用 WTDR.Pack 后，你还要 [编辑相关配置](/WP_Docs/applyconfig.md#编辑配置文件) 以及[放置 WTDR.Pack 包 到指定位置](/WP_Docs/applyconfig.md#wtdr-pack-包放置位置)才能正常工作
:::

## WTDR
WTDR 将自带 WTDR.Pack，让“[WTDR 接管系统部署](Docs/tackover.md)”后设置“[启用 WTDR.Pack](Docs/pack.md)”即可
## EasySysprep
进入 PE 进行第二阶段时，添加 WTDR.Pack 作为运行任务     
添加部署中运行任务，运行参数为 `/ApplyConfig /Deploy`     
添加进入桌面运行任务，运行参数为 `/ApplyConfig /Desktop`      
<img :src="$withBase('/image/Snipaste_2020-02-20_21-45-17.jpg')" alt="">    
:::warning 注意
请务必确认添加运行参数，否则 WTDR.Pack 将无法正常工作
:::

## SC 封装工具
封装时到“计划任务”中，添加 WTDR.Pack 作为运行任务     
添加部署中运行任务，运行参数为 `/ApplyConfig /Deploy`     
添加进入桌面运行任务，运行参数为 `/ApplyConfig /Desktop`      
<img :src="$withBase('/image/Snipaste_2020-02-20_21-28-29.jpg')" alt="">    
:::warning 注意
请务必确认添加运行参数，否则 WTDR.Pack 将无法正常工作
:::

## 其他
其他封装软件、unattend.xml、MDT、Windows AIK 同理    
添加部署中运行任务，运行参数为 `/ApplyConfig /Deploy`     
添加进入桌面运行任务，运行参数为 `/ApplyConfig /Desktop`  
:::warning 注意
请务必确认添加运行参数，否则 WTDR.Pack 将无法正常工作
:::