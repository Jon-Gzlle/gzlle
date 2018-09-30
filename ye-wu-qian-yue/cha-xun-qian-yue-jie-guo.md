### 查询电签结果

---

**简要描述：**

* 员工电签状态查询

**请求URL：**

* /contracts/employees/status/{employeeId}

**请求方式：**

* GET 

**参数：**

| 参数名 | 必选 | 类型 | 说明 |
| :--- | :--- | :--- | --- |
| employeeId | 是 | string | 自然人id,在下单接口中获取 |

**返回参数说明**

| 参数名 | 类型 | 说明 |
| :--- | :--- | --- |
| success | boolean | 请求结果，true：成功；false：失败 |
| errorCode | string | 错误码 |
| errorMsg | string | 失败原因 |
| status | int | 0未签 1已签 2签署中 |

**返回示例**

```
 {
    “status”：1
 }
```

**备注**

* 更多返回错误代码请看首页的异常码描述



