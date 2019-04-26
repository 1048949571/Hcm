import Tpl from './tpl'
import axios from '../../../../js/common/ajax'
import { message as Msg } from 'antd'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: null,
            dealerid:null,
            activeKey: '1',
            baseInfo:{},
            titleList:{},
            activity: {
                date: [
                    moment().subtract(1, 'months'),
                    moment()
                ],
                show: 3, //1 正常点击 2 数据完了 3 没有数据
                list: [],
            },//活动情况数据
            salesData: {
                list: [],
                pageNo: 1,
                pageSize: 10,
                totalNum: 0,
            },//销售数据
            abnormalOrders: {
                date: [
                    moment().subtract(1, 'months'),
                    moment()
                ],
                show: 1, //1 正常点击 2 数据完了 3 没有数据
                list: [],
            },//订单异常情况数据
        }
    }

    componentWillMount() {

    }
    componentDidMount() {

    }
    reset = () =>{
        this.setState({
            id: null,
            dealerid:null,
            activeKey: '1',
            baseInfo:{},
            titleList:{},
            activity: {
                date: [
                    moment().subtract(1, 'months'),
                    moment()
                ],
                show: 3, //1 正常点击 2 数据完了 3 没有数据
                list: [],
            },//活动情况数据
            salesData: {
                list: [],
                pageNo: 1,
                pageSize: 10,
                totalNum: 0,
            },//销售数据
            abnormalOrders: {
                date: [
                    moment().subtract(1, 'months'),
                    moment()
                ],
                show: 1, //1 正常点击 2 数据完了 3 没有数据
                list: [],
            },//订单异常情况数据
        })
    }
    getAbnormalOrdersList = () =>{
        const { id ,dealerid,abnormalOrders } = this.state
        axios.get('/hcm/hcmShopMonitor/getMonitorByShopid',{
            params:{
                shopid:id,
                dealerid:dealerid,
                pageNo: 1,
                pageSize: abnormalOrders.list.length + 10,
                start_time:abnormalOrders.date[0].format('YYYY-MM-DD'),
                end_time:abnormalOrders.date[1].format('YYYY-MM-DD')
            }
        })
        .then(res => {
            const { data, status, message } = res.data;
            if (abnormalOrders.list.length == data.length || data.length < 10) {
                abnormalOrders.show = 2
            } else {
                abnormalOrders.show = 1
            }
            if (data.length == 0) {
                abnormalOrders.show = 3
            }
            abnormalOrders.list = data;
            if (status === '10000') {
                this.setState({
                    abnormalOrders
                })
            }
        }).catch(err => {
            Msg.error('系统繁忙，请稍后再试！')
        })
    }
    // 获取销售数据
    getDay = () => {
        const { id,dealerid } = this.state;
        let { list, pageNo, pageSize, } = this.state.salesData;
        axios.get('/hcm/dayReport/findMonitorDinDanDayReportPageListDay',{
            params: {
                shop_id: id,
                dealer_id:dealerid,
                pageNo,
                pageSize
            }
        })
        .then(res => {
            const { data, status, message } = res.data;
            let salesData = this.state.salesData;
            salesData.list = data.content;
            salesData.pageNo = data.pageNumber;
            salesData.pageSize = data.pageSize;
            salesData.totalNum = data.totalElements;
            if (status === '10000') {
                this.setState({
                    salesData
                })
            }
        }).catch(err => {
            Msg.error('系统繁忙，请稍后再试！')
        })
    }
    // 获取店铺档案信息
    getShopInfo = () => {
        const { id ,dealerid} = this.state;
        LoadingModal({ bl: true });
        axios.get('/hcm/hcmCustomModel/getBybmcidAndModule',{
            params: {
                module: 'SHOP'
            }
        }).then(res => {
            const { data, status, message } = res.data
            if (status === '10000') {
                this.setState({
                    activeKey: '1',
                    titleList:data
                }, () => {
                    axios.get('/hcm/hcmShop/getById',{
                        params: {
                            shopId:id,
                            dealerid,
                            getType:'SEARCH',
                        }
                    }).then(res => {
                        LoadingModal({ bl: false })
                        const { data, status, message } = res.data
                        if (status === '10000') {
                            this.setState({
                                baseInfo: data
                            }, () => {
                                
                                this.getActivityList()
                                if(data.isauthed != 'NOTAUTH'){
                                    this.getDay()
                                    this.getAbnormalOrdersList()
                                }
                               
                            })
                        }
                    }).catch(err => {
                        LoadingModal({ bl: false })
                        Msg.error('系统繁忙，请稍后再试！')
                    })
                })
            }
        }).catch(err => {
            LoadingModal({ bl: false })
            Msg.error('系统繁忙，请稍后再试！')
        })

    }
    // 获取活动列表
    getActivityList = () => {
        const { id,dealerid,activity } = this.state
        axios.get('/hcm/hcmShop/CampaignList',{
            params:{
                shopid:id,
                dealerid:dealerid,
                pageNo: 1,
                pageSize: activity.list.length + 10,
                start_time:activity.date[0].format('YYYY-MM-DD'),
                end_time:activity.date[1].format('YYYY-MM-DD')
            }
        })
        .then(res => {
            const { data, status, message } = res.data;
            if (activity.list.length == data.length || data.length < 10) {
                activity.show = 2
            } else {
                activity.show = 1
            }
            if (data.length == 0) {
                activity.show = 3
            }
            activity.list = data;
            if (status === '10000') {
                this.setState({
                    activity
                })
            }
        }).catch(err => {
            Msg.error('系统繁忙，请稍后再试！')
        })
    }
    //打开抽屉
    onShow = (id,dealerid) => {
        this.setState({
            visible: true,
            id,
            dealerid
        }, () => {
            this.getShopInfo()
        })
    }
    //关闭抽屉
    onClose = () => {
        this.setState({
            visible: false
        },()=>{
            this.reset()
        })
    }

    //切换TAB
    onTabsChange = (activeKey) => {
        this.setState({
            activeKey
        })
    }

    //销售数据分页事件
    onSalesDataPagination = (page, pageSize) => {
        let salesData = this.state.salesData;
        salesData.pageNo = page;
        salesData.pageSize = pageSize;
        this.setState({
            salesData
        }, () => {
            this.getDay()
        })
    }
    //销售数据分页事件
    onSalesDataPaginationSize = (current, size) => {
        let salesData = this.state.salesData;
        salesData.pageNo = 1;
        salesData.pageSize = size;
        this.setState({
            salesData
        }, () => {
            this.getDay()
        })
    }
    //活动情况时间框事件
    activityRangePicker = (e) => {
        let activity = this.state.activity;
        activity.date = e;
        this.setState({
            activity
        }, () => {
            this.getActivityList()
        })
    }
    abnormalOrdersRangePicker = (e) => {
        let abnormalOrders = this.state.abnormalOrders;
        abnormalOrders.date = e;
        this.setState({
            abnormalOrders
        },()=>{
            this.getAbnormalOrdersList()
        })
    }
    render() {
        return <Tpl that={this} />
    }
}

export default App