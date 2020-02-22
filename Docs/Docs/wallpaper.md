---
title: 桌面/锁屏壁纸
---

# 桌面/锁屏壁纸
自定义桌面/锁屏壁纸

## 用法
修改配置 `SysOpt` 字段的 `Wallpaper` 或 `LockScreen` 为需要设置背景的图片名，留空则为不设置

::: warning 注意
需要把背景放到 WTDR 工作目录中  
系统壁纸后缀名务必为 jpg 或 bmp 
锁屏壁纸后缀名务必为 jpg    
Win7锁屏壁纸则要求大小不超过 256KB
:::

```ini
[SysOpt]
;系统壁纸
Wallpaper=w.jpg
;锁屏壁纸
LockScreen=l.jpg
```