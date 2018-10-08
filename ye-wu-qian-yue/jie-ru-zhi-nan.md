### 业务签约接入指南

---

##### 业务签约介绍

工资来了平台服务商与企业开展业务合作，合作企业的C端用户首先  
合作企业的C端用户需要Gzlle.com平台的服务商签署电子合同，申明C端用户是自由职业者兼职人员，所从事的业务为自然人经营活动。根据《中华人民共和国合同法》明确说明，电子合同具备法律效应。

##### 开通接口：

企业和Gzlle.com签订业务合作协议后，开通电子合同接口对接的步骤如下：

1）企业按要求填写企业信息资料表，交给发薪专管员，申请企业SAAS账号。

2）发薪专管员完成配置后，将通知到企业新的电子合同模板已上线。

3）企业开发者可以登录\[管理平台\]-&gt;\[开发参数\]勾选使用电子合同接口对接。

企业可以将Gzlle.com定制生成的电子合同链接地址嵌入到自有的产品流程中，传入电子合同所需参数，直接进入合同信息采集页面，员工确认无误后，进行合同签署。

##### 创建自由职业者：

**请求地址**

```
-- HTTPS POST --
https://openapi.gzlle.com/contracts/employees/add
```

请求**参数说明**

| 参数 | 类型 | 是否必须 | 说明 |
| :--- | :--- | :--- | :--- |
| name | string | 是 | 姓名 |
| phone | string | 是 | 登记手机号 |
| papersType | int | 否 | 证件类型 1:身份证 |
| papersNo | string | 否 | API使用者凭证密钥，即AppSecret |
| bankCardNo | string | 是 | 银行卡号 |
| bankPhone | string | 否 | 银行预留手机号 |
| employeeNo | string | 否 | 自然人编号 |
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



