# 域名主体校验未通过

## 提供信息
- Cookie
  - F12 打开控制台
  - 找到`Network`
  - 找到`Fetch/XHR`
  - 找到`网址` 为 `work.weixin.qq.com` 的请求接口
  - ![img](/images/wechat_app_cookie.png)
  - 点击接口找到 `Request Header` / `请求标头` 找到Cookie即可
- _d2st
  - 步骤如Cookie
  - 找到请求地址中的 _d2st的值即可 一般每个接口都有这个
- 接收消息服务器配置
  - URL
  - Token
  - EncodingAESKey
- 应用管理网址上面的一串数字
  - 如: https://work.weixin.qq.com/wework_admin/frame#apps/modApiApp/56295xxxxxxx
  - 提取上面网址中的 56295xxxxx 


收集到信息后按照以下模板发送给作者即可
```
Cookie:
_d2st:
Url:
Token:
EncodingAESKey:
应用管理ID:
```