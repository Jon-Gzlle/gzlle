### 获取自由职业者签约token

---

**简要描述：**

* 自由职业者进行电签时, 需要跳转至 工资来了 平台进行电签, 该接口获取用户临时访问token

**请求URL：**

* /contracts/employees/token/{employeeId}

**请求方式：**

* GET 

**参数：**

请求**参数说明**

| 参数 | 类型 | 是否必须 | 说明 |
| :--- | :--- | :--- | :--- |
| employeeId | string | 是 | 用户Id, 添加自由职业者接口返回 |

**返回结果示例**

```
成功示例
{
    "accessToken":"[ACCESS_TOKEN]",
    "expiresIn":7200
}

失败示例
{
    "error": "BadRequest",
    "message": "accessToken无效"
}
```

**响应参数说明**

| 参数 | 类型 | 说明 |
| :--- | :--- | :--- |
| accessToken | string | 企业自由职业者，进行页面签署时，需要携带的授权token，该token为用户级token |
| expiresIn | string | token有效时间 |



