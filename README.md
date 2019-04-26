#test远程主机
# apiDoc
* [客户信息列表](#客户信息列表)
* [客户信息详情](#客户信息详情)
* [新增品牌](#新增品牌)
* [新增编辑关键字](#新增编辑关键字)
* [新增编辑类目](#新增编辑类目)
* [数据检索列表](#数据检索列表)

## 客户信息列表 

<span style='color: #ffffff;border-radius: 6px;padding: 8px;background-color: #000;'>/hcm/cus/cus_customerlist</span>

<span style='color: #ffffff;border-radius: 6px;padding: 8px;background-color: #4070ec;'>GET</span>

##### Parameter：

| Field | Type | Description |
| --- | --- | --- |
| cus_name | Strings | 公司名称 |
| cus_memo_name | Strings | 备注名 |
| pageNo | Num  | 第N页 *|
| pageSize | Num  | 每页显示数量  *|

#### Success-Response:

```
{
    data: {
        page_info: {
            totalNum: 112,//总数量
            pageNo: 1,//当前页数
            totalPage: 112,//总页数
            pageSize: 1//每页展示数量
        },//分页信息
        bmaincustomer_list: [
            {
                cus_memo_name: "泸州老窖", //备注名
                cus_name: "泸州老窖集团有限公司", //公司名
                keyword_count: 7,//关键字数量
                brand_count: 3,//品牌数量
                cat_count: 7,//类目数量
                bmcid: 1 //客户标识ID  
            }
        ]
    },
    message: "success",
    status: "10000"
}
```

[返回顶部](#apidoc)


-------

## 客户信息详情 
<span style='color: #ffffff;border-radius: 6px;padding: 8px;background-color: #000;'>/hcm/cus/get_cus_detail_list</span>

<span style='color: #ffffff;border-radius: 6px;padding: 8px;background-color: #4070ec;'>GET</span>
##### Parameter：

| Field | Type | Description |
| --- | --- | --- |
| bmcid | Num | 客户唯一ID  *|

#### Success-Response:

```
{
    data: {
        brand_list: [
            {
                bid: "1", //品牌ID
                bmcid: "1", //客户唯一ID
                brandimage: "",
                createtime: "2018-07-12 11:10:26.0",//商品库更新时间
                keyword_list: [ // 关键词列表
                    {
                        bid: "1",
                        bmcid: "1",
                        brand_name: null, 
                        category_list: [
                            {
                                catid: "50035182",
                                catname: "泸州老窖品牌1类目1",
                                level: "3",
                                kid: "1",
                                bmcid: null,
                                bid: "1"
                            }
                        ],
                        catid: "50018959", //catid
                        catname: "泸州老窖品牌1类目1", //类目名称
                        createtime: null,
                        keyword_id: "1_1,泸州老窖品牌1",
                        keywordname: "泸州老窖品牌1", //关键字名称
                        kid: null,
                        level: "2", // 等级 1=品牌 2=关键字 3=类目
                        save_flag: null,
                        updatetime: null
                    }
                ],
                level: "1",
                name: "泸州老窖品牌1",
                updatetime: "2018-07-12 16:48:22.0"
            }
        ]
    },
    message: "success",
    status: "10000"
}
```

[返回顶部](#apidoc)


-------


## 新增品牌 
<span style='color: #ffffff;border-radius: 6px;padding: 8px;background-color: #000;'>/hcm/cus/save_brand</span>

<span style='color: #ffffff;border-radius: 6px;padding: 8px;background-color: #4070ec;'>GET</span>
##### Parameter：

| Field | Type | Description |
| --- | --- | --- |
| brand_name | Strings | 品牌名 * |
| catname | Strings | 类目	  *|
| catid | Strings  | catid  *|
| bmcid | Num  | 客户唯一ID  *|

#### Success-Response: 
```   
{
    data: null,
    message: "success",
    status: "10000"
}
```

[返回顶部](#apidoc)


-------

## 新增编辑关键字 
<span style='color: #ffffff;border-radius: 6px;padding: 8px;background-color: #000;'>/hcm/cus/saveOrUpdate_keyword</span>

<span style='color: #ffffff;border-radius: 6px;padding: 8px;background-color: #4070ec;'>GET</span>
##### Parameter：

| Field | Type | Description |
| --- | --- | --- |
| bid | Num | 品牌ID * |
| bmcid | Num | 客户唯一ID  * |
| keywordname | Strings | 关键字 * |
| catname | Strings | 类目	  *|
| catid | Strings  | catid  *|
| save_flag | Strings  |  save or update *|
`save_flag值等于save时。为新增关键字
save_flag值等于update时。为编辑关键字`

#### Success-Response:
```   
{
    data: null,
    message: "success",
    status: "10000"
}
```

[返回顶部](#apidoc)


-------

## 新增编辑类目 
<span style='color: #ffffff;border-radius: 6px;padding: 8px;background-color: #000;'>/hcm/cus/saveOrUpdate_keyword_cat</span>

<span style='color: #ffffff;border-radius: 6px;padding: 8px;background-color: #4070ec;'>GET</span>
##### Parameter：

| Field | Type | Description |
| --- | --- | --- |
| bid | Num | 品牌ID * |
| bmcid | Num | 客户唯一ID  * |
| keywordname | Strings | 关键字 * |
| catname | Strings | 类目	  *|
| catid | Strings  | catid  *|
| save_flag | Strings  |  save or update *|
| kid | Num  |  更新时传参 *|

`save_flag值等于save时。为新增关键字
save_flag值等于update时。为编辑关键字
`
#### Success-Response:

```   
{
    data: null,
    message: "success",
    status: "10000"
}
```

[返回顶部](#apidoc)



## 数据检索列表 
<span style='color: #ffffff;border-radius: 6px;padding: 8px;background-color: #000;'>/hcm/cus/getPageByKeyWord</span>

<span style='color: #ffffff;border-radius: 6px;padding: 8px;background-color: #4070ec;'>GET</span>
##### Parameter：

| Field | Type | Description |
| --- | --- | --- |
| keyWord | Strings | 搜索关键字|
| bmcid | Num | 客户唯一ID 5 固定写死  * |
| pageSize | Strings  | 每页显示条数  *|
| pageNo | Strings  |  当前页 *|


#### Success-Response:
```   
{
    data: {
        content: [
            {
                area: "北京",//地区
                createtime: 1531299004000,
                itemlistid: 16419,//商品list表id
                discount_price: 98,
                num_iid: "555705929480",//商品淘宝id
                bmcid: 5,//求美的客户在整个系统中的主ID
                title: "不锈钢美脚架",//商品标题
                platform: "淘宝", //数据来源/平台
                price: 98,//原价
                item_url: "https****",//商品URL
                shopname: "微微苡笑",//商店名称
                nickname: "魏倩之家",//店铺主旺旺名称
                ratenum: 0,//评价数
                state: "",//省份
                vip_price: 0,//VIP价
                salesvolume: 0,//销量
                pic_url: "https****",//主图URL
                updatetime: 1531299004000,//更新时间
                sold30: 0,
                ratehref: "https****"//评价链接
            }
        ],
        pageNumber: 1,//当前条数
        pageSize: 1,//当前页数
        totalElements: 68615,//总条数
        totalPages: 68615 //总页数
    },
    message: "success",
    status: "10000"
}
```

[返回顶部](#apidoc)














