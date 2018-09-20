### 获取accessToken

---

accessToken是Gzlle API的全局唯一接口调用凭据，Gzlle API调用各接口时都需使用accessToken。开发者需要进行妥善保存。accessToken的存储至少要保留512个字符空间。accessToken的有效期目前为2个小时，需定时刷新，重复获取将导致上次获取的accessToken失效。

#### Gzlle API调用所需的accessToken的使用及生成方式说明：

1、建议开发者使用中控服务器统一获取和刷新accessToken，其他业务逻辑服务器所使用的accessToken均来自于该中控服务器，不应该各自去刷新，否则容易造成冲突，导致accessToken覆盖而影响业务；

2、目前accessToken的有效期通过返回的expireIn来传达，默认是7200秒之内的值。中控服务器需要根据这个有效时间提前去刷新accessToken 来访问接口；

3、accessToken的有效时间可能会在未来有调整，所以中控服务器不仅需要内部定时主动刷新，还需要提供被动刷新accessToken的接口，这样便于业务服务器在API调用获知accessToken已超时的情况下，可以触发accessToken的刷新流程。

AppKey 和AppSecret ，可以在可以在管理平台的「系统设置」-&gt;「开发参数」内进行操作（需要已经成为开发者，且帐号没有异常状态）。调用接口时，请登录“管理平台-系统设置-开发参数”提前将服务器IP地址添加到IP白名单中，防止被Gzlle API服务器拒绝请求。

**使用说明**  
将获取到的 accessToken （JWT [https://jwt.io/](https://jwt.io/) ）加入请求头\(Http headers\)中作为公共参数附带传输至应用API接口来使用。headers认证字段格式如下

```
-- Http Headers --
Authorization: Bearer [accessToken]
```

#### 接口调用请求说明

**请求地址**

```
-- HTTPS POST --
https://openapi.gzlle.com/token

{"grantType":"[ACCESS_TOKEN]","appkey":"[appkey]","AppSecret":"[AppSecret]"}
```

**参数说明**

| 参数 | 类型 | 是否必填 | 说明 |
| :--- | :--- | :--- | :--- |
| grantType | string | 是 | 填写client\_credential |
| appkey | string | 是 | API使用者身份凭证，即AppKey |
| appSecret | string | 是 | API使用者凭证密钥，即AppSecret |

**响应说明**

正常情况下，API会返回下述JSON数据包：

`{"accessToken":"[ACCESS_TOKEN]","expiresIn":7200}`

**响应参数**

| 参数 | 说明 |
| :--- | :--- |
| accessToken | 获取到的凭证 |
| expiresIn | 凭证有效时间，单位：秒 |

错误时API会返回HttpStatusCode错误码和错误JSON数据包示例如下（该示例为AppKey无效错误）:

`{"error":"NotFound,"message":"invalid appKey"}`

**错误说明**

| 错误码 | 说明 |
| :--- | :--- |
| error | 错误代码，业务系统返回的错误 |
| message | 错误的具体信息说明 |



