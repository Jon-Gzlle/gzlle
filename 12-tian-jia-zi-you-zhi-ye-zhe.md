### 添加自由职业者

---

**简要描述：**

* 添加自由职业者，企业在引导自由职业者签约之前，需要将自由职业者信息添加到工资来了平台。当用户重复时，系统会默认返回已经重复的自由职业者id.

**请求URL：**

* /contracts/employees/add

**请求方式：**

* POST 

**参数：**

请求**参数说明**

| 参数 | 类型 | 是否必须 | 说明 |
| :--- | :--- | :--- | :--- |
| name | string | 是 | 姓名 |
| phone | string | 是 | 登记手机号,系统将以手机号码作为用户唯一标识。 |
| papersType | int | 否 | 证件类型 0:身份证 |
| papersNo | string | 否 | 证件号码 |
| bankCardNo | string | 否 | 银行卡号 |
| bankPhone | string | 否 | 银行预留手机号 |
| employeeNo | string | 否 | 自由职业者在企业编号 |
| extra | string | 否 | 扩展参数，回调时原文返回，建议JsonString格式。 |
| nonce | string | 是 | 随机字符串，长度要求在32位以内。[推荐随机数生成算法](/ji-chu/an-quan-gui-fan.md) |
| sign | string | 是 | 通过签名算法计算得出的签名值，详见[签名生成算法](/ji-chu/an-quan-gui-fan.md) |

**返回结果示例**

```
成功示例
{
    "extra": "string",
    "employeeId": "12345678"
}

失败示例
{
    "error": "BadRequest",
    "message": "手机号码格式有误,"
}
```

**响应参数说明**

| 参数 | 类型 | 说明 |
| :--- | :--- | :--- |
| employeeId | string | 返回该自然人在工资来了平台唯一编号,该值需要调用方保存, 查询签约结果，签约结果回调都会需要该值.ex |
| extra | string | 扩展参数，回调时原文返回，建议JsonString格式 |



