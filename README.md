### 概述
***
##### &emsp;&emsp;“工资来了”(Gzlle.com)-智能薪酬云服务平台由深圳市联讯惠通科技有限公司研发的互联网+人力资源增值服务的生态平台。  
&emsp;&emsp;Gzlle API 采用 RESTful 风格设计。所有接口请求地址都是可预期的以及面向资源的。使用规范的 HTTP 响应代码来表示请求结果的正确或错误信息。使用 HTTP 内置的特性，如 HTTP Authentication 和 HTTP 请求方法让接口易于理解。所有的 API 请求都会以规范友好的 JSON 对象格式返回（包括错误信息）

#### 认证

调用凭据：Gzlle API使用access_token为接口调用凭据,来调用接口，所有接口的调用需要先获取access_token，access_token在2小时内有效，过期需要重新获取，但1天内获取次数有限，开发者需自行存储，详见"获取access_token章节"。

身份标识：获取 access_token 需要 AppKey 和AppSecret，你可以在管理平台内管理。AppKey 和AppSecret 是企业在Gzlle API中的身份标识，请安全存储，确保其不要被泄露。如需获取或更新 AppKey 和AppSecret ，可以在管理平台的「系统设置」->「开发参数」内进行操作。

#### 环境

版本：`v1.0`
Live：`https://openapi.gzlle.com `
Test：`https://openapi-dev.gzlle.com `

AppKey 分为 live 和 test 两种模式。分别对应真实交易环境和沙箱测试交易环境并且可以实时切换。测试模式下的API会模拟交易等请求，但是不会产生任何真实交易行为和费用，便于调试和接入。 所有的 API 请求必须通过 HTTPS 发送，使用 HTTP 会被 Gzlle API服务器拒绝。

#### 错误
Gzlle API 使用 HTTP 状态码 (status code) 来表明一个 API 请求的成功或失败状态。返回 HTTP 2XX 表明 API 请求成功。返回 HTTP 4XX 表明在请求 API 时提供了错误信息，例如参数缺失、参数错误、支付渠道错误等。返回 HTTP 5XX 表明 API 请求时，Gzlle API 服务器发生了错误。

|状态码	            |描述
|:----             |:----
|200-OK            |一切正常
|400-BadRequest    |错误的请求，一般由参数错误引发
|401-Unauthorized  |请求需要授权
|402-Failed        |失败的操作，参数正确但业务逻辑错误
|403-Forbidden     |禁止访问，权限不够等引发
|404-NotFound      |未找到目标对象
|408-RequestTimeout|请求超时
|409-Conflict      |指令冲突，主键冲突,目标已经存在
|480-ExpiredVersion|版本过期，程序过期，API过期
|481-ExistUndo     |存在未处理的事项
