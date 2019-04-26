import {Icon} from 'antd'
export default {
    activities:{
        name:'活动商品数占比',
        rowKey:'my_month',
        url:'/hcm/campgign/findCamItemZBList',
        downloadUrl:'/hcm/campgign/downCamItemZBList',
        columns:[
            {
                title: 'No',
                dataIndex: 'index',
                key: 'index',
                render:(text,item,index)=>index+1
            },{
                title: '月份',
                dataIndex: 'my_month',
                key: 'my_month',
            },{
                title: '共活动商品数',
                dataIndex: 'all_count',
                key: 'all_count',
            },{
                title: '我活动商品数',
                dataIndex: 'my_count',
                key: 'my_count',
            },{
                title: '活动商品占比',
                dataIndex: 'zhanbi',
                key: 'zhanbi',
            }
        ]
    },
    order:{
        name:'销售金额趋势',
        rowKey:'my_month',
        url:'/hcm/hcmShopMonitor/findSaleSalaryQS',
        downloadUrl:'/hcm/campgign/downSaleSalaryQS',
        columns:[
            {
                title: 'No',
                dataIndex: 'index',
                key: 'index',
                render:(text,item,index)=>index+1
            },{
                title: '月份',
                dataIndex: 'my_month',
                key: 'my_month',
            },{
                title: '销售金额（万元）',
                dataIndex: 'trade_money',
                key: 'trade_money',
                width:'40%'
            },{
                title: '环比',
                dataIndex: 'huanbi',
                key: 'huanbi',
                width:'10%',
                render:(text='',item,index)=>(
                    
                        <div>
                            {
                                text.indexOf('-')==-1 ?
                                <Icon style={{ color: '#F5222D' }} type="caret-up" />
                                :
                                <Icon style={{ color: '#52C41A' }} type="caret-down" />
                            }
                            {
                                text
                            }
                        </div>
                        
                   
                )
            }
        ]
    },
    hotGoods:{
        name:'热销商品排名',
        rowKey:'num_iid',
        url:'/hcm/hcmShopMonitor/getGoodsSalesRankingByBmcid',
        downloadUrl:'/hcm/hcmShopMonitor/downloadGoodsSalesRankingByBmcid',
        columns:    [{
            title: 'No',
            dataIndex: 'index',
            key: 'index',
            render:(text,item,index)=>index+1
        },{
            title: '商品信息',
            dataIndex: 'itempic',
            key: 'itempic',
            width:'50%',
            render:(text,item,index)=>{
                return(
                    <div style={{display: 'flex',alignItems: 'center'}}>
                        <img style={{flex: '0 0 50px',width:'50px',height:'50px',marginRight:10}} src={text}/>
                        <span>
                            {item.itemtitle}
                        </span>
                    </div>
                )
            }
        },{
            title: '店铺名称',
            dataIndex: 'shop_name',
            key: 'shop_name',
        },{
            title: '销量指数',
            dataIndex: 'buynum',
            key: 'buynum',
        },{
            title: '销售额指数',
            dataIndex: 'money',
            key: 'money',
        }]
    },
    hotShops:{
        name:'热卖店铺排名',
        rowKey:'shop_id',
        url:'/hcm/hcmShopMonitor/getShopMoneyTop',
        downloadUrl:'/hcm/hcmShopMonitor/downloadShopMoneyTop',
        columns:[{
            title: '排名',
            dataIndex: 'index',
            key: 'index',
            width:'100px',
            align:'center',
            render:(text,item,index)=>{
                return index < 3 ? <span className='top-span'>{index+1}</span> :index+1
            }
        },{
            title: '店铺名称',
            dataIndex: 'shop_name',
            key: 'shop_name',
        },{
            title: '销售额指数',
            align:'right',
            dataIndex: 'money',
            key: 'money',
        }]
    },
}