---
title: WTDR.Pack
---
# WTDR.Pack
用于在系统部署过程中调用 WTDR.Pack 应用软件包。

## 用法
### 准备
确保 WTDR.Pack 程序文件夹在 WTDR 主目录里面，不在则到“获取”下载解压覆盖

### 启用
在 `WTDR.Config.ini` 把`Pack`字段中的`Pack`值设置为`1`打开功能开关
```ini
[Pack]
Pack=1
```
### WTDR.Pack 调用顺序 <Badge text="V0.7.0" type="info"/>
默认调用时机顺序为：    
系统部署中  ：1、部署任务(Deploying)(OSUpdate) - 2、调用 WTDR.Pack  
首次进入桌面：1、调用 WTDR.Pack - 2、部署任务(FirstDesktop)(OSUpdate)   

该选项则可以调整调用顺序，可以控制在“部署任务”前或“部署任务”后调用 WTDR.Pack    
留空则为默认    
设置值：
```ini
BeforeTask  ;部署任务前调用 WTDR.Pack
AfterTask   ;部署任务后调用 WTDR.Pack
```

默认值：
```ini
Deploy_OrderCustomize=AfterTask     ;部署任务后调用
Desktop_OrderCustomize=BeforeTask   ;部署任务前调用
```
示例：
```ini
[Pack]
;是否使用 WTDR.Pack 功能
Pack=1
;WTDR.Pack 调用顺序
;系统部署中 WTDR.Pack 调用顺序
Deploy_OrderCustomize=BeforeTask   ;部署任务前调用
;首次进入桌面 WTDR.Pack 调用顺序
Desktop_OrderCustomize=BeforeTask   ;部署任务前调用
```

## 就这？
就这，新版本咱把 WTDR.Pack 独立了，可以单独调用而不依赖 WTDR    
需要更多帮助请到：  
[WTDR.Pack 帮助文档](/WP_Docs)