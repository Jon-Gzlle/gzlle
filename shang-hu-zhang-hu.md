### 获取access_token
***
access_token是Gzlle API的全局唯一接口调用凭据，Gzlle API调用各接口时都需使用access_token。开发者需要进行妥善保存。access_token的存储至少要保留512个字符空间。access_token的有效期目前为2个小时，需定时刷新，重复获取将导致上次获取的access_token失效。

