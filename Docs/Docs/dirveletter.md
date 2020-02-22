---
title: 理顺/整理盘符功能
---

# 理顺/整理盘符功能 <Badge text="beta" type="warning"/> <Badge text="功能待完善" type="info"/>
系统部署过程中理顺盘符，防止进入系统后盘符错乱

## 用法
修改配置文件将 `DriveLetter` 字段中的`Use`设置为启用

### 按照记录文件理顺盘符

:::tip 提示
需要提前生成记录文件    
详情可看：[这里](https://forum.wtdr.whatk.me/d/14)
:::
```ini
;理顺/整理盘符功能
;开关
Use=1
;读取记录文件整理盘符
NoteLetter=1
;确认提示框
NoteLetterTip=1
```