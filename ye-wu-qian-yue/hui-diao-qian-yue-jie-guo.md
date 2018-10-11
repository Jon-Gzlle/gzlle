### 全局业务签约结果异步回调处理

---

**简要描述：**

* 此处回调是指后端接口异步回调通知签约结果。电子合同回调，请在SAAS后台，开发者信息配置处，配置回调链接。如果未配置回调链接，系统将不会发起回调。
* 开发者也可以在页面签约时，配置callbackUrl参数，当签约完成后, 通过前端回调来确定签约结果.

**请求URL：**

* 开发者设置的全局回调地址

**请求方式：**

* POST 

**参数：**

| 参数名 | 必选 | 类型 | 说明 |
| :--- | :--- | :--- | --- |
| corpId | 是 | string | 企业id |
| noticeType | 是 | int | 回调通知类型,1业务签约 |
| content | 否 | string | 回调说明 |
| nonce | 是 | string | 校验用的随机校验码 |
| sign | 是 | string | 校验用的签名值 |
| contractStatus | 是 | int | 合同签署状态,0未签署,1已签署,2/3签署中,9作废 |
| employeeId | 是 | string | 自由职业者唯一id |
| extra | 否 | string | 自由职业者添加时,调用方传入的extra参数值 |

**请求参数示例：**

```
{
    "noticeType": 1,
    "corpId": "aaa",
    "employeeId": "xxxx",
    "extra": "extra",
    "contractStatus": 1,
    "nonce": "5f0981ee-1d2f-438d-8c49-8c22c4fff507",
    "sign": "D25E6874714F14DE680BC452BC6ADD20FB68E12FB86BC4DE5F1D979276DD415B"
}
```

**返回参数说明**

请返回json格式的任何结果，表明已成功接收

**备注**

* 如需要验签，请参照请求接口规范中的签名方式进行验证



