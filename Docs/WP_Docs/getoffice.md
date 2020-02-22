---
title: 获取 OfficePack
---
# 获取 OfficePack
::: danger 注意
以下 OfficePack 只兼容 WTDR.Pack `V1.6.0` 或更高版本
:::
::: tip 关于激活
Office 系列会自带 AAct 进行自动 KMS 激活，如不需要请编辑相关配置文件进行关闭。
:::
## Office 2016
基于官方 `16.0.10827.20150 X64` 版本进行打包，默认安装传统三件套（Word，Excel，PowerPoint），当然你也可以修改 “Pack:/Office2016_Setup/Configuration.xml” 来决定安装哪一个，默认版本为“专业增强版”

安装完毕后将转换为批量授权版（VOL），可使用 KMS 激活，以及在桌面添加三件套的桌面快捷方式，这两个功能可通过 “Pack:/Office2016_Setup/Config.ini” 控制是否启用。

::: warning 需占用空间
安装时需要C盘有 3G 临时空间；如不存在D盘 ，则需要 C盘拥有 5G 空间用于临时空间以及安装 Office 如存在D盘 ，则C盘需要2.8G用于安装Office，D盘需要 2.2 G 临时空间
:::

### 更新日记
```
190511
更新 Office 版本为 16.0.11601.20178
适配 OfficePack OEM

190608
修Bug
```

## Office 2010
基于 `MSDN SW_DVD5_Office_Professional_Plus_2010w_SP1_64Bit_ChnSimp_CORE_MLF_X17-76742.iso` 打包，版本为 `专业增强批量激活版`
默认安装传统三件套（Word，Excel，PowerPoint），以及除了 “微软输入法” 外的 “Office 共享功能” 和 “Office 工具”，默认建立三件套的桌面快捷方式

可以修改 `Office2010_Setup\Config.ini` 选择安装三件套还是全家桶，也可以开启自动 KMS 功能

当然也可以使用 “Office 自定义工具” 生成自定义安装文件来选择你要装的组件。

::: warning 需占用空间
安装时需要C盘有 1.8G 临时空间如不存在D盘，则需要C盘拥有 3.5G 空间,用于临时空间以及安装 Offic如存在D盘 ，则C盘需要 1.6 G 用于安装Office，D盘 1.8 G 临时空间
:::

<img :src="$withBase('/image/7Test_180906-2018-10-16-10-39-36_limlimit.webp')" alt="">    

### 更新日记
```
190520
适配 OfficePack OEM

190608
修Bug
```

## Office 2016 Lite
::: warning 注意
Office 精简版部分功能可能会无法使用
:::
基于 `Office2016 pro plus vol 四合一绿色精简版 2018.02.02 By xb21cn` 打包，安装四件套（Word，Excel，PowerPoint，Access）并创造桌面快捷方式。


### 更新日记
```
190520
更新到 xb21cn 2019.02.14 版
适配 OfficePack OEM

190608
修Bug
```
<img :src="$withBase('/image/1548332500-652317-7test-180906-2018-10-16-10-52-25-limlimit.png')" alt="">    

## Office 2010 Lite
::: warning 注意
Office 精简版部分功能可能会无法使用
:::
基于 `Office2010 pro sp2 vol 四合一绿色精简版 2018.02.01 By xb21cn` 打包，安装四件套（Word，Excel，PowerPoint，Access）并创造桌面快捷方式。


### 更新日记
```
181127
处理误报 KMS 程序并重新上传

190520
更新到 xb21cn 2018.08.18 版
整合完整版的模板
适配 OfficePack OEM

190608
修Bug
```
<img :src="$withBase('/image/7Test_180906-2018-10-14-20-22-16_limlimit.webp')" alt="">    

## WPS Office 2019 专业增强版
基于 `WPS Office ProPlus 2019 11.8.2.8053` 打包，集成政府Key并且去除标志，没广告弹窗，集成VBA组件（By:mefcl.com）
<img :src="$withBase('/image/7Test_180906-2018-10-16-10-43-26_limlimit.webp')" alt="">    

## WPS Office 2016 专业增强版
基于 `WPS Office ProPlus 2016 10.8.2.6949` 打包，并且通过官方 OEM 方式导入 Key，没广告没弹窗（By:mefcl.com）

### 更新日记
```
190512
WPS 更新到 10.8.2.6949
适配 OfficePack OEM
```

<img :src="$withBase('/image/1558528983-169586-snipaste-2019-05-22-20-23-56.png')" alt="">    

## LibreOffice
LibreOffice 是由文档基金会开发的自由及开放源代码的办公室套件，个人以及企业用户都可以免费使用。  
LibreOffice 套件包含文字处理器、电子表格、演示文稿程序、矢量图形编辑器和图表工具、数据库管理程序及创建和编辑数学公式的应用程序。    
