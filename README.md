### 概述

---

##### “工资来了”\(Gzlle.com\)-智能薪酬云服务平台由深圳市联讯惠通科技有限公司研发的互联网+新型人力资源增值服务的生态平台。

Gzlle API 采用 RESTful 风格设计。所有接口请求地址都是可预期的以及面向资源的。使用规范的 HTTP 响应代码来表示请求结果的正确或错误信息。使用 HTTP 内置的特性，如 HTTP Authentication 和 HTTP 请求方法让接口易于理解。所有的 API 请求都会以规范友好的 JSON 对象格式返回（包括错误信息）

#### 企业账户申请

尊贵企业客户申请合作成功，“工资来了”（Gzlle.com）平台工作人员审核资料无误后开通相应的API账户权限，企业客户在申请资料填写的邮箱中收取到由“工资来了”小助手\(helper@it.gzlle.com\)发送的邮件，此邮件包含开发时需要使用的账户信息。

邮件中提供的账户在API接口中的参数说明如下：

| 参数名 | 详细说明 |
| :--- | :--- |
| corpId | 企业申请，由平台分配的企业客户编号。 |
| appKey | 用途：1 调用接口生成签名的密钥 2 结合appSecret获取accessToken的身份标识。appKey仅保留在企业客户系统和Gzlle API后台，不会在网络中传播。企业客户应当妥善保管该Key，切勿在网络中传输，不能在其他客户端中存储，保证key不会被泄漏。企业客户可根据邮件提示登录管理系统进行设置。也可按以下路径设置：智能薪酬云服务平台\(saas.gzlle.com\)--&gt;系统设置--&gt;公司设置--&gt;开发者配置--&gt;密钥设置 |
| appSecret | 结合appKey获取接口调用凭证accessToken时使用。使用 智能薪酬云服务平台\(saas.gzlle.com\)--&gt;系统设置--&gt;公司设置--&gt;开发者配置获取appSecret（需成为开发者且帐号没有异常状态）。 |

#### 认证

调用凭据：Gzlle API使用accessToken为接口调用凭据,来调用接口，所有接口的调用需要先获取accessToken，accessToken在2小时内有效，过期需要重新获取，但1天内获取次数有限，开发者需自行存储，详见[获取accessToken](/ji-chu/an-quan-gui-fan.md)章节。

身份标识：获取 accessToken 需要 appKey 和appSecret。appKey 和appSecret 是企业在Gzlle API中的身份标识，请安全存储，确保其不要被泄露。如需获取或更新 appKey 和appSecret ，可以在管理平台的「系统设置」-&gt;「开发参数」内进行操作。

令牌使用：在发起HTTPS请求头\(Https Headers\)中添加 JWT Access\_token：

```
GET|POST /[methods] HTTP/1.1 Headers
Authorization: Bearer [accessToken]
```

#### 安全签名

Gzlle API接口在访问的过程中需要使用签名算法来保障API交互过程中的参数安全未被篡改，详见[安全规范](/ji-chu/jie-kou-gui-fan.md)章节。

#### 协议规则

企业客户接入Gzlle API，调用API必须遵循以下规则：

| 标题 | 说明 |
| :--- | :--- |
| 传输方式 | 为保证交易安全性，采用HTTPS传输 |
| 提交方式 | 采用POST或GET方法提交 |
| 数据格式 | 提交和返回数据都为JSON格式 |
| 字符编码 | 统一采用UTF-8字符编码 |
| 签名算法 | 统一采用HMAC-SHA256签名方式 |
| 签名要求 | 请求与接收需要校验签名，详细方法请参考安全规范-签名算法 |
| 证书要求 | 调用申请退款、撤销订单接口需要企业证书 |

#### 环境

版本：`v1.0`  
正式：`https://openapi.gzlle.com`

所有的 API 请求必须通过 HTTPS 发送，使用 HTTP 会被 Gzlle API服务器拒绝。

#### 错误

Gzlle API 使用 HTTP 状态码 \(status code\) 来表明一个 API 请求的成功或失败状态。返回 HTTP 2XX 表明 API 请求成功。返回 HTTP 4XX 表明在请求 API 时提供了错误信息，例如参数缺失、参数错误、支付渠道错误等。返回 HTTP 5XX 表明 API 请求时，Gzlle API 服务器发生了错误。

| 状态码 | 描述 |
| :--- | :--- |
| 200-OK | 一切正常 |
| 400-BadRequest | 错误的请求，一般由参数错误引发 |
| 401-Unauthorized | 请求需要授权 |
| 402-Failed | 失败的操作，参数正确但业务逻辑错误 |
| 403-Forbidden | 禁止访问，权限不够等引发 |
| 404-NotFound | 未找到目标对象 |
| 408-RequestTimeout | 请求超时 |
| 409-Conflict | 指令冲突，主键冲突,目标已经存在 |
| 480-ExpiredVersion | 版本过期，程序过期，API过期 |
| 481-ExistUndo | 存在未处理的事项 |



