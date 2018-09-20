### 概述

---

#### 一、签名算法

签名生成的通用步骤如下：

**1.筛选排序拼接**，设所有发送或者接收到的数据为集合M，将集合M内非空参数值的参数按照参数名ASCII码从小到大排序（字典序），使用URL键值对的格式（即key1=value1&key2=value2…）拼接成字符串stringA。

**特别注意以下重要规则：**

◆ 参数名ASCII码从小到大排序（字典序）；  
◆ 如果参数的值为空不参与签名；  
◆ 字节类型参数不参与签名，如文件、字节流  
◆ 参数名区分大小写；  
◆ 验证调用返回或主动通知签名时，传送的sign参数不参与签名，将生成的签名与该sign值作校验。  
◆ 接口可能增加字段，验证签名时必须支持增加的扩展字段

例如下面的请求参数示例\(仅为示例\)，开发者参考格式即可：

```
appid：    wxd930ea5d5a258f4f
money：10000100
device_info： 1000
content：{"button":[{"action":"HFCZ"},{"action":"KDTC"}]}
nonce_str：ibuaiVcKdpRxkhJA
```

拼接完成的待签名字符串：

```
stringA="appid=wxd930ea5d5a258f4f&content={"button":[{"action":"HFCZ"},{"action":"KDTC"}]}&device_info=1000&money=10000100&nonce_str=ibuaiVcKdpRxkhJA"
```

**2.拼接KEY值**，在stringA最后拼接上key得到stringSignTemp字符串，注意key为商户平台设置的密钥AppKey。

```
stringSignTemp="appid=wxd930ea5d5a258f4f&content={"button":[{"action":"HFCZ"},{"action":"KDTC"}]}&device_info=1000&mch_id=10000100&nonce_str=ibuaiVcKdpRxkhJA&key=192006250b4c09247ec02edce69f6a2d"
```

**3.调用签名函数**，对stringSignTemp进行MD5运算，再将得到的字符串所有字符转换为大写，得到sign值signValue。

```
signValue=MD5(stringSignTemp).toUpperCase()="9A0A8659F005D6984697E2CA0A9CF3B7"
```

**4.生成请求参数**，将获得的签名字符串加入参数列表中，获得最终发送到API的数据:

```
{
  "appid":"wxd930ea5d5a258f4f",
  "money"：10000100,
  "device_info": "1000",
  "content："{\"button\":[{\"action\":\"HFCZ\"},{\"action\":\"KDTC\"}]}",
  "nonce"："ibuaiVcKdpRxkhJA",
  "sign":"9A0A8659F005D6984697E2CA0A9CF3B7"
}
```

**生成随机数算法**  
微信支付API接口协议中包含字段nonce字符串，主要保证签名不可预测。我们推荐生成随机数算法如下：调用随机数函数生成，将得到的值转换为字符串。

随机数算法举例，各语言平台可以自行设计随机数算法：

```
public static String buildNonce(int length)
{
    String charts = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz0123456789";
    int max = charts.length;
    String nonce = "";
    for(i = 0; i < length; i++)
    {
        noncestr += charts[Math.random(0, max)];
    } 
    return nonce;
}
```



