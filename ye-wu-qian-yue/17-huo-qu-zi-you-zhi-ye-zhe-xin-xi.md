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
| employeeId | 是 | string | 自由职业者唯一id,在添加自由职业者接口中获取 |

**返回参数说明**

| 参数 | 类型 | 是否必须 | 说明 |
| :--- | :--- | :--- | :--- |
| id | string | 是 | employeeId |
| name | string | 是 | 姓名 |
| phone | string | 是 | 登记手机号 |
| papersType | int | 否 | 证件类型 0:身份证 |
| papersNo | string | 否 | 证件号码 |
| bankCardNo | string | 否 | 银行卡号 |
| bankPhone | string | 否 | 银行预留手机号 |
| employeeNo | string | 否 | 自由职业者在企业编号 |
| extra | string | 否 | 扩展参数 |
| contractStatus | int | 是 | 0未签 1已签 2/3签署中 |

**返回示例**

```
成功示例:

{
    "id": "228173079619043328",
    "name": "姓名",
    "phone": "手机",
    "papersType": 0,
    "papersNo": "身份证号码",
    "bankCardNo": "银行卡号码",
    "bankPhone": "银行预留手机号码",
    "employeeNo": "自由职业者企业编号",
    "extra": "extra",
    "contractStatus": 1,
    "contractTime": "签约时间"
}

失败示例:
{
    "error": "BadRequest",
    "message": "accessToken无效"
}
```

**备注**

* 更多返回错误代码请看首页的异常码描述



