import ThatMain from '../../../HOC/That'
import { Drawer, Tooltip, Alert, Tabs, Icon, Button, Table, Pagination, DatePicker, Timeline, Divider } from 'antd'
const TabPane = Tabs.TabPane;
const { RangePicker } = DatePicker;
import lib from '../../../../js/common/lib';
import paltform from '../../../components/platform';
//暂未定购
const NoAuthed = (that) => {
    return (
        <div className='no-authed'>
            <img src='../../../../img/no_data.jpg' />
            <p style={{ color: '#999' }}>抱歉，本店铺还未订购应用</p>
            <p>店铺订购应用后，则会显示订购店铺的销售数据，<a onClick={() => that.props.appLinkStatusStatus()}>获取应用订购链接</a></p>
        </div>
    )
}
//抽屉头部DOM
const Title = baseInfo => {
    let { dealername, contact, dutynumber, take_people, address, creditscore, status_info } = baseInfo
    return (
        <div className='title'>
            <h3>
                {dealername}
                {
                    status_info && JSON.stringify(status_info) != '{}' ?
                        <Tooltip placement="bottom" title={status_info.info}>
                            <span style={{ marginLeft: 10 }} className={status_info.info_type}>{status_info.title}</span>
                        </Tooltip>
                        : null
                }
            </h3>
            <div className='info'>
                <div className='item'>
                    <div>
                        <Tooltip title={take_people}>
                            <img src='../../../../img/icon/user.png' />{take_people}
                        </Tooltip>
                    </div>
                    <div>
                        <Tooltip title={contact}>
                            <img src='../../../../img/icon/phone.png' />{contact}
                        </Tooltip>
                    </div>
                </div>
                <div className='item'>

                    <div>
                        <Tooltip title={dutynumber}>
                            <img src='../../../../img/icon/duty.png' />{dutynumber}
                        </Tooltip>
                    </div>
                    <div>
                        <Tooltip title={address}>
                            <img src='../../../../img/icon/city.png' />{address}
                        </Tooltip>
                    </div>
                </div>
                <div className='item'>
                    <div>信用分：<span className='strong'>{creditscore}</span></div>
                </div>
            </div>
        </div>
    )
}
//经销商档案 
const DealersInfo = (baseInfo, diyList) => {
    let { memo_dealername, zssj, authorize_num, authorize_start, authorize_end, add_field } = baseInfo
    return (
        <div className='baseInfo'>
            <ul className='items'>
                <li>
                    <span>备注名称：</span>{memo_dealername}
                </li>
                <li>
                    <span>直属上级：</span>{zssj}
                </li>
                <li>
                    <span>授权编码：</span>{authorize_num}
                </li>
                <li>
                    <span>授权期限：</span>{authorize_start && authorize_end ? `${moment(authorize_start).format('YYYY-MM-DD')}  ~  ${moment(authorize_end).format('YYYY-MM-DD')}` : null}
                </li>
                {
                    add_field && diyList.length ?
                        <React.Fragment>
                            <Divider style={{ fontSize: 14 }} orientation="left" dashed={true}>自定义字段</Divider>
                            {
                                diyList.map((item, index) => {
                                    return (
                                        <li key={index}>
                                            <span>{item.fieldname}：</span>{JSON.parse(add_field)[item.fieldvalue]}
                                        </li>
                                    )
                                })
                            }
                        </React.Fragment>
                        : null
                }

            </ul>

        </div>
    )
}
//授权店铺
const AuthorizedShops = (authorizedShops, that) => {
    return (
        <div className='authorized-shops'>
            <ul className='items'>
                {
                    authorizedShops.list.length ?
                        authorizedShops.list.map((item, index) => {
                            return (
                                <li key={index} className='item'>
                                    <h4 className='shop-name'>
                                        {item.shop_name}<span>{item.wangwang}</span>
                                    </h4>
                                    <div className='img-box'>
                                        {paltform(item.platform_code)}
                                        {/* <span className='type'>{item.shop_type}</span> */}
                                    </div>
                                    <div className='shop-url'>
                                        <span>店铺首页地址：</span>
                                        <a target='_blank' href={item.shop_url}>{item.shop_url}</a>
                                    </div>
                                </li>
                            )
                        })
                        :
                        <li>
                            <Alert message='暂无数据' type='warning' />
                        </li>
                }
            </ul>
            <div className='get-data-box'>
                {
                    authorizedShops.show == '1' ?
                        <Button onClick={that.getAuthorizedShops}>加载更多...</Button>
                        : null
                }

            </div>
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
                                            <dd className='shop-name'>
                                                店铺名称：{item.shop_name}
                                            </dd>
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
                                                        item.lowpricemessage?
                                                        <Alert message={item.lowpricemessage} type="error" showIcon />
                                                        :null
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
    let { id, visible, baseInfo, diyList, activeKey, authorizedShops, salesData, activity, abnormalOrders } = that.state;
    return (
        <Drawer
            className='client-detail'
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
                <TabPane tab={'经销商档案'} key="1">
                    {DealersInfo(baseInfo, diyList)}
                </TabPane>
                <TabPane tab={'授权店铺'} key="2">
                    {AuthorizedShops(authorizedShops, that)}
                </TabPane>
                <TabPane tab={'销售数据'} key="3">
                    {SalesData(salesData, that)}
                </TabPane>
                <TabPane tab={'活动情况'} key="4">
                    {Activity(activity, that)}
                </TabPane>
                <TabPane tab={'订单异常情况'} key="5">
                    {AbnormalOrders(abnormalOrders, that)}
                </TabPane>
            </Tabs>
        </Drawer>

    )
})

export default Tpl