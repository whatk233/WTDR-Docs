---
title: 账户管理
---

# 账户管理 <Badge text="功能待完善" type="info"/>
用于部署过程中管理账户

## 启用管理员账户
部署过程中启用 Administrator 账户

### 用法
将 `User` 字段中`AdminUser`值设置为`1`(启用)状态    

```ini
[User]
AdminUser=1
```

## 建立自定义账户 <Badge text="V0.6.0" type="info"/>
用于部署时自动建立自定义账户    
### 用法
将 `User` 字段中`CustomUser`值设置为你想建立的账户名    
如需将该账户归为管理员则将`AdminGroup`值设置为启用状态      

::: warning 注意
如果已设置启用 Administrator 账户，该项将不起作用
:::

```ini
[User]
;建立自定义账户
;帐户名不能包含以下字符: /\[]":;|<>+=,?*
CustomUser=1
;将该账户归为管理员
AdminGroup=1
```

## 为自定义账户设置密码 <Badge text="V0.6.0" type="info"/>
用于为 自定义建立/启用的Administrator 账户设置密码     
### 用法 
首先运行 `WTDR.exe /Generatepwd` 生成密码字符串     
<img :src="$withBase('/image/Snipaste_2020-05-12_10-52-13.jpg')" alt="">    
然后将该密码字符串粘贴到 `User` 字段中`PassWord`值处       

::: warning 注意
请勿直接往配置文件输入你要设置的密码，这样是无效的    
请生成密码字符串后粘贴到配置中
:::

```ini
[User]
;设置密码
;请运行 WTDR.exe /Generatepwd 生成密码字符串粘贴到此处
PassWord=2740421FDF14ECC47FFA184D2545CC0CBE3DC8DEE4D8C49B91B11A17A2090D7D
```

## 设置自动登录 <Badge text="V0.6.0" type="info"/>
用于设置有密码的情况下进行自动登录  
### 用法
将 `User` 字段中`LogonCount`值设置为你想自动登录的次数（最少为1,0、留空则为不自动登录）    
该项需要设置密码后才有效     

```ini
[User]
;自动登录次数（留空或为0则为不自动登录，需要自动登录几次就填几次）（该项设置密码后才有效）
LogonCount=1    ;自动登录一次
```