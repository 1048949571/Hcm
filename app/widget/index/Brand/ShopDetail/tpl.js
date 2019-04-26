import ThatMain from '../../../HOC/That'
import { Drawer, Tooltip, Alert, Tabs, Icon, Button, Table, Pagination, DatePicker, Timeline, Divider } from 'antd'
const TabPane = Tabs.TabPane;
const { RangePicker } = DatePicker;
import lib from '../../../../js/common/lib';
import platform from '../../../components/platform';

//暂未定购
const NoAuthed = (that) => {
    return (
        <div className='no-authed'>
            <img src='../../../../img/no_data.jpg' />
            <p style={{ color: '#999' }}>抱歉，本店铺还未订购应用</p>
            <p>店铺订购应用后，则会显示订购店铺的销售数据，<a onClick={() => that.props.inviteLinkStatus()}>获取应用订购链接</a></p>
        </div>
    )
}

//抽屉头部DOM
const Title = baseInfo => {
    let { shopName, wangwang, goodsnum,username,userstatus, loyal, sales, ratio, platformCode, isauthed, shopUrl } = baseInfo
    return (
        <div className='title'>
            <h3>
                <a target='_blank' href={shopUrl}>{shopName}</a>
                {platform(platformCode,{width: '20px',height: '20px',verticalAlign: '-3px',marginLeft: '10px'})}
                {
                    isauthed == 'AUTHED' ?
                        <img style={{ paddingLeft: 10,verticalAlign:'-2px' }} src='../../../../img/dinggou.jpg' />
                        : null
                }
                <span>{wangwang}</span>
            </h3>
            <p className='shop-user-info'>
                <img src='../../../../img/loginuser_1s.png' />
                用户名：{username}
                {
                    userstatus?
                    <span className='open'>已启用</span>
                    :
                    <span className='close'>已禁用</span>
                }
            </p>
            <div className='info'>
                <div className='item'>
                    <p>{loyal}</p>
                    品牌忠诚度
                </div>
                <div className='item'>
                    <p>{goodsnum}</p>
                    品牌商品数
                </div>
                <div className='item'>
                    <div style={{ textAlign: 'center' }}>
                        <p>¥ {lib.formatThousandMoney(sales)}</p>
                        近30天销售额
                    </div>
                    <div>
                        <p style={{ fontSize: 12 }}>
                            {
                                ratio ?
                                    +ratio > 0 ?
                                        <Icon style={{ color: '#F5222D' }} type="caret-up" />
                                        :
                                        <Icon style={{ color: '#52C41A' }} type="caret-down" />
                                    : null
                            }
                            {ratio}
                        </p>
                        环比
                    </div>
                </div>
            </div>
        </div>
    )
}
const ShopInfo = (baseInfo, titleList) => {
    return (
        <div className='baseInfo'>
            <ul className='items'>
                <li>
                    <span>店铺名称：</span><a target='_blank' href={baseInfo.shopUrl}>{baseInfo.shopName}</a>
                </li>
                <li>
                    <span>平台名称：</span>{baseInfo.platformname}
                </li>
                <li style={{whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis'}}>
                    <span>首页地址：</span><a style={{ color: '#108CEE' }} target='_blank' href={baseInfo.shopUrl}>{baseInfo.shopUrl}</a>
                </li>
                <li>
                    <span>旺旺名称：</span>{baseInfo.wangwang}
                </li>
                <li>
                    <span>经销商名称：</span>{baseInfo.dealername}
                    {

                        baseInfo.status && JSON.stringify(baseInfo.status) != '{}' ?
                            <Tooltip placement="bottom" title={baseInfo.status.info}>
                                <span style={{ marginLeft: 10 }} className={baseInfo.status.info_type}>{baseInfo.status.title}</span>
                            </Tooltip>
                            : null
                    }

                </li>
                <li>
                    <span>经营品类：</span>{baseInfo.productClassifyName ? baseInfo.productClassifyName.join(","):null}
                </li>
                {
                    titleList.add && titleList.add.data.length ?
                        <React.Fragment>
                            <Divider style={{ fontSize: 14 }} orientation="left" dashed={true}>自定义字段</Divider>
                            {
                                titleList.add.data.map((item, index) => {
                                    if(item.isChecked!=0){
                                        return (
                                            <li key={index}>
                                                <span>{item.fieldname}：</span>{baseInfo[item.fieldvalue]}
                                            </li>
                                        )
                                    }
                                    
                                })
                            }
                        </React.Fragment>
                        : null
                }

            </ul>

        </div>
    )
}
//销售数据
const SalesData = (salesData, that) => {
    let { totalNum, pageNo, pageSize, list } = salesData;
    const columns = [
        {
            title: '序号',
            dataIndex: 'index',
            key: 'index',
            render: (text, item, index) => index + 1
        },
        {
            title: '月份',
            dataIndex: 'daydate',
            key: 'daydate',
        }, {
            title: '销售额',
            dataIndex: 'daymoney',
            key: 'daymoney',
            render: (text) => `¥ ${lib.formatThousandMoney(text)}`
        }, {
            title: '环比',
            dataIndex: 'HB',
            key: 'HB',
            render: (text) => {
                return (
                    <div>
                        {
                            text ?
                                +text > 0 ?
                                    <Icon style={{ color: '#F5222D' }} type="caret-up" />
                                    :
                                    <Icon style={{ color: '#52C41A' }} type="caret-down" />
                                : null
                        }
                        {Math.abs(text) || '--'}
                    </div>
                )
            }
        }
    ]
    return (
        <div className='sales-data'>
            <div className='table-box'>
                <Table rowKey='createtime' pagination={false} columns={columns} dataSource={list} />
            </div>
            <div className='footer'>
                <div className='info'>
                    {`共 ${totalNum} 条记录 `}
                </div>
                <Pagination size="small" pageSize={pageSize} current={pageNo} total={totalNum} onChange={that.onSalesDataPagination} onShowSizeChange={that.onSalesDataPaginationSize} showSizeChanger showQuickJumper />
            </div>
        </div>
    )
}
//活动情况
const Activity = (activity, that) => {
    let { date, list, show } = activity;
    const dot = <span className='dot'></span>
    return (
        <div className='activity'>
            <div className='activity-title'>
                <span>申请时间：</span>
                <RangePicker disabledDate={(current) => current && current > moment()} value={date} onChange={(e) => that.activityRangePicker(e)} />
            </div>
            <div className='time-line-box'>
                <Timeline>
                    {
                        list.length ?
                            list.map((item, index) => {
                                return (
                                    <Timeline.Item key={index} dot={dot}>
                                        <dl>
                                            <dt>{moment(item.createtime).format('YYYY年MM月DD日 HH:mm:ss')}</dt>
                                            <dd>
                                                活动主题：{item.campaign_name}
                                            </dd>
                                            <dd>
                                                活动时间：{moment(item.start_time).format('YYYY年MM月DD日 HH:mm:ss')} ~ {moment(item.end_time).format('YYYY年MM月DD日 HH:mm:ss')}
                                            </dd>
                                            <dd>
                                                活动产品数：{item.act_count}
                                            </dd>
                                        </dl>
                                    </Timeline.Item>
                                )
                            })
                            :
                            <Timeline.Item dot={dot}>
                                暂无数据
                        </Timeline.Item>
                    }
                </Timeline>
                <div className='get-data-box'>
                    {
                        show == '1' ?
                            <Button onClick={() => that.getActivityList()}>加载更多...</Button>
                            : null
                    }

                </div>
            </div>
        </div>
    )
}
//订单异常情况
const AbnormalOrders = (abnormalOrders, that) => {
    let { date, list, show } = abnormalOrders;
    console.log(date, list, show)
    const dot = <span className='dot'></span>
    return (
        <div className='abnormal-orders'>
            <div className='abnormal-orders-title'>
                <span>申请时间：</span>
                <RangePicker disabledDate={(current) => current && current > moment()} value={date} onChange={(e) => that.abnormalOrdersRangePicker(e)} />
            </div>
            <div className='time-line-box'>
                <Timeline>
                    {
                        list.length ?
                            list.map((item, index) => {
                                return (
                                    <Timeline.Item key={index} dot={dot}>
                                        <h6>{moment(item.createtime).format('YYYY年MM月DD日 HH:mm:ss')}</h6>
                                        <div className='item'>
                                            <p className='item-title'>卖家旺旺：{item.wangwang}</p>
                                            <div className='item-num-sum'>
                                                <span>订单编号：{item.tid}</span>
                                                <span>订单金额：¥{lib.formatThousandMoney(item.itemprice)}</span>
                                            </div>
                                            <div className='item-info'>
                                                <img src={item.itempic} />
                                                <div className='product-info'>
                                                    <p style={{ display: 'flex', color: '#9E7E6B' }}>
                                                        <span style={{ whiteSpace: 'nowrap' }}>商品名称：</span>
                                                        <span>{item.itemtitle}</span>
                                                    </p>
                                                    <p style={{ display: 'flex', color: '#9E7E6B' }}>
                                                        <span style={{ whiteSpace: 'nowrap' }}>SKU信息：</span>
                                                        <span>{item.itemskuprop}</span>
                                                    </p>
                                                    <p style={{ display: 'flex' }}>
                                                        <span style={{ whiteSpace: 'nowrap' }}>所属产品：</span>
                                                        <span>{item.productMessage}</span>
                                                    </p>
                                                    <p>最低成交价：¥{lib.formatThousandMoney(item.floorTransactionPrice)}</p>
                                                    {
                                                        item.lowpricemessage ?
                                                            <Alert message={item.lowpricemessage} type="error" showIcon />
                                                            : null
                                                    }

                                                </div>
                                            </div>
                                        </div>
                                    </Timeline.Item>
                                )
                            })
                            :
                            <Timeline.Item dot={dot}>
                                暂无数据
                        </Timeline.Item>
                    }
                </Timeline>
                <div className='get-data-box'>
                    {
                        show == '1' ?
                            <Button onClick={e => { that.getAbnormalOrdersList() }}>加载更多...</Button>
                            : null
                    }

                </div>
            </div>
        </div>
    )
}
const Tpl = ThatMain(that => {
    let { id, visible, baseInfo, titleList, activeKey, activity, salesData, abnormalOrders } = that.state;
    return (
        <Drawer
            className='shop-detail'
            title={
                Title(baseInfo)
            }
            placement="right"
            width={715}
            // maskClosable={false}
            onClose={that.onClose}
            visible={visible}
        >

            <Tabs activeKey={activeKey} onChange={(activeKey) => that.onTabsChange(activeKey)}>
                <TabPane tab={'店铺档案'} key="1">
                    {ShopInfo(baseInfo, titleList)}
                </TabPane>

                <TabPane tab={'每日销售额提报'} key="2">
                    {baseInfo.isauthed == 'AUTHED' ? SalesData(salesData, that) : NoAuthed(that)}
                </TabPane>
                <TabPane tab={'活动申报情况'} key="3">
                    {Activity(activity, that)}
                </TabPane>
                <TabPane tab={'订单异常情况'} key="4">
                    {baseInfo.isauthed == 'AUTHED' ? AbnormalOrders(abnormalOrders, that) : NoAuthed(that)}
                </TabPane>
            </Tabs>
        </Drawer>

    )
})

export default Tpl