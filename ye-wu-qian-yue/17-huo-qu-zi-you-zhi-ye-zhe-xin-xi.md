### 获取自由职业者信息

---

**简要描述：**

* 查询自由职业者信息

**请求头参数：**

```
Authorization: Bearer [accessToken]
```

**请求URL：**

* /contracts/employees/get/{employeeId}

**请求方式：**

* GET 

**参数：**

| 参数名 | 必选 | 类型 | 说明 |
| :--- | :--- | :--- | --- |
| employeeId | 是 | string | 自然人id,在下单接口中获取 |

**返回参数说明**

| 参数名 | 类型 | 说明 |
| :--- | :--- | --- |
| status | int | 0未签 1已签 2签署中 |

**返回示例**

```
成功示例:

 {
    “status”：1
 }

失败示例:
{
    "error": "BadRequest",
    "message": "accessToken无效"
}
```

**备注**

* 更多返回错误代码请看首页的异常码描述



