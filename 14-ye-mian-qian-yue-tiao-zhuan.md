### 页面签约跳转

---

**简要描述：**

* 自由职业者进行电签时, 是跳转至工资来了的签约页面，跳转的url需要调用方根据参数自己构建,其中包含企业信息、自由职业者信息、自由职业者临时授权token等信息

**跳转URL：**

* [https://webapp.gzlle.com/contract-open/spa.html](https://webapp.gzlle.com/contract-open/spa.html)

**请求方式：**

* GET 

**完整跳转URL示例：**

* [https://webapp.gzlle.com/contract-open/spa.html?employeeId=111&corpId=222&userToken=333&callbackUrl=http%3A%2F%2Fwww.baidu.com\#contract\_sign\_page](https://webapp.gzlle.com/contract-open/spa.html?employeeId=111&corpId=222&token=333&callbackUrl=http%3A%2F%2Fwww.baidu.com#contract_sign_page)

**请求参数说明：**

| 参数 | 类型 | 是否必须 | 说明 |
| :--- | :--- | :--- | :--- |
| employeeId | string | 是 | 用户Id, 添加自由职业者接口返回 |
| corpId | string | 是 | 企业Id,在获取appKey的邮件里有提供. |
| userToken | string | 是 | 自由职业者电签临时授权token, 由 [1.3获取用户token](/huo-qu-yong-hu-token.md) 接口获取. |
| callbackUrl | string | 否 | 需要对callbackUrl进行url\_encode转码.当自由职业者签署完成后,前端会回跳至该链接. |



