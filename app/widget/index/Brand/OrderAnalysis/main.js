import Tpl from './tpl';
import { Form, message as Msg} from 'antd';
import echarts from 'echarts';
import ajax from '../../../../js/common/ajax';

const DEFAULT_PAGE = {
    pageNo: 1,
    pageSize: 10,
}

class App extends React.Component {
    constructor(props) {
        super(props)
        this.AddModal = React.createRef();
        this.state = {
            id:null,
            chartData:{},
            start_time: moment().subtract(30,'d'),
            end_time: moment(),

            importantProductList: [],
            importantProductDefaultKey: '',
            importantShopSalesRank: {}, //重点关注单品-店铺销售额排名
            importantVipPercent: {},   //重点关注单品-会员所在城市占比排名
            hotProductSalesRank: {}, // 热销单品销售额
            categorySalesRank: {},  // 分类销售额排名


            shopSalesRank: {},          // 店铺销售额排名
            productSalesRank: {},       // 商品销售额排名
            shopImportantList: [],      // 重点关注店铺列表
            shopImportantDefaultKey: '',    // 


            vipProvincePercent: {},       // 订单信息分析 -> 会员分析-> 省份
            vipCityPercent: {},     // 订单信息分析 -> 会员分析-> 城市


        }
    }

    componentDidMount() {
        this.getChartData()
        this.getHotProductSalesRank(this.commonParams(DEFAULT_PAGE))
        this.getCategorySalesRank(this.commonParams(DEFAULT_PAGE))
        this.getImportantProductData()

        this.getVipProvincePercent(this.commonParams(DEFAULT_PAGE))
        this.getVipCityPercent(this.commonParams(DEFAULT_PAGE))
        
        this.getShopSalesRank(this.commonParams(DEFAULT_PAGE))
        this.getShopImportantList()


    }



    handleTabChange = (flag, key) => {
        
        if (flag === '2') {
            this.getImportantShopSalesRank(this.commonParams({...DEFAULT_PAGE,product_id:key}))
            this.getImportantVipPercent(this.commonParams({...DEFAULT_PAGE,product_id:key}))
            this.setState({
                importantProductDefaultKey: key,
            })
        }
        if (flag === '1') {
            this.getProductSalesRank(this.commonParams({...DEFAULT_PAGE,shopId:key}))
            this.setState({
                shopImportantDefaultKey: key,
            })
        }
    }

    handlePageChange = (funcName, page) => {
        const params = {
            pageNo:page,
            pageSize:DEFAULT_PAGE.pageSize,
        }
        if (funcName === 'getProductSalesRank') {
            params.shopId = this.state.shopImportantDefaultKey
        }
        if (funcName === 'getImportantVipPercent' || funcName === 'getImportantShopSalesRank') {
            params.product_id = this.state.importantProductDefaultKey
        }
        this[funcName](this.commonParams(params))
    }

    commonParams = pagination => {
        const data = {
            start_time: this.state.start_time.format('YYYY-MM-DD')+' 00:00:00',
            end_time: this.state.end_time.format('YYYY-MM-DD')+' 23:59:59',
            pageNo: pagination.pageNo,
            pageSize: pagination.pageSize,
        }
        if (pagination.product_id) {
            data.product_id = pagination.product_id
        }
        if (pagination.shopId) {
            data.shopId = pagination.shopId
        }
        return data
    }

    handleTimeChange = dates => {
        if (dates.length === 0) {
            Msg.warning('时间不能为空！')
            return
        }
        this.setState({
            start_time: dates[0],
            end_time: dates[1],
        }, () => {
            this.getHotProductSalesRank(this.commonParams(DEFAULT_PAGE))
            this.getCategorySalesRank(this.commonParams(DEFAULT_PAGE))
            this.getImportantProductData()

            this.getVipProvincePercent(this.commonParams(DEFAULT_PAGE))
            this.getVipCityPercent(this.commonParams(DEFAULT_PAGE))
            
            this.getShopSalesRank(this.commonParams(DEFAULT_PAGE))
            this.getShopImportantList()

        })
        
    }
    getChartData=()=>{
        ajax.get('/hcm/hcmShopMonitor/getSalesYear')
        .then(res => {
            const { data, status, message } = res.data
            if (status === '10000') {
                this.setState({
                    chartData:data
                },()=>{
                    this.inChart()
                })
                
            } else {
                Msg.error(message)
            }
        }).catch(err => {
            Msg.error('系统繁忙，请稍后再试！')
        })
    }
    inChart = ()=>{
        let {chartData} = this.state;
        const myChart = echarts.init(document.getElementById('chart-bar'));
        myChart.setOption({
            tooltip : {
                trigger: 'axis',
                formatter: params => {
                    let [a,b] = params
                    return(
                        `<div class='tooltip'>
                            ${
                                a ? 
                                `
                                <p>
                                    <span style='background-color:${a.color};'></span>
                                    ${a.seriesName}:${a.value}
                                </p>
                                `
                                :``
                            }
                            ${
                                b ? 
                                `
                                <p>
                                    <span style='background-color:${b.color};'></span>
                                    ${b.seriesName}:${b.value}
                                </p>
                                `
                                :``
                            }
                        </div>`
                    )
                }
            },
            grid:{
                left:60,
                top:30,
                bottom:20,
                right:60,
            },
            xAxis : [
                {
                    type : 'category',
                    axisLine:{
                        lineStyle:{
                            color:'#999'
                        }
                    },
                    data : chartData.month
                }
            ],
            yAxis : [
                {
                    type: 'value',
                    name: '单位（ 单 ）',
                    axisTick: {
                        show: false
                    },
                    axisLine:{
                        show:false
                    },
                    splitLine:{
                        lineStyle:{
                            type:'dashed'
                        }
                        
                    },
                    axisLabel: {
                        formatter: '{value}'
                    }
                },
                {
                    type: 'value',
                    name: '单位（ 万元 ）',
                    axisTick: {
                        show: false
                    },
                    axisLine:{
                        show:false
                    },
                    splitLine:{
                        show:false
                    },
                    axisLabel: {
                        formatter: '{value}'
                    }
                }
            ],
            series : [
                {
                    name:'订单数',
                    type:'bar',
                    barGap: 0,
                    yAxisIndex: 0,
                    itemStyle:{
                        color:'#3AA1FF'
                    },
                    data: chartData.ordernumList,
                    
                },
                {
                    name:'销售额',
                    type:'bar',
                    barGap: 0,
                    yAxisIndex: 1,
                    itemStyle:{
                        color:'#4ECB73'
                    },
                    data:chartData.salesList,
                    
                }
            ]
        })
    }

    getShopSalesRank = params => {
        const url = '/hcm/hcmShopMonitor/getShopMoneyTop'
        this.getFn(url, 'shopSalesRank', params)
    }
    getShopImportantList = () => {
        const params = {
            focus: 1,
        }
        ajax.get('/hcm/hcmShop/getShopListByBmcid', {params}).then(res => {
            const { data, status, message } = res.data
            if (status === '10000') {
                // console.log('---yu', data)
                this.setState({
                    shopImportantList: data,
                    shopImportantDefaultKey: data.length?data[0].id:'',
                }, () => {
                    if (data.length !== 0) {
                        this.getProductSalesRank(this.commonParams({...DEFAULT_PAGE,shopId:data[0].id}))
                    }
                })
            } else {
                Msg.error(message)
            }
        }).catch(err => {
            Msg.error('系统繁忙，请稍后再试！')
        })
    }
    getProductSalesRank = params => {
        const url = '/hcm/hcmShopMonitor/getShopProductTop'
        this.getFn(url, 'productSalesRank', params)
    }




    getVipProvincePercent = params => {
        const url = '/hcm/hcmShopMonitor/getOrderInfoSubAnalysisStrict'
        this.getFn(url, 'vipProvincePercent', params)
    }
    getVipCityPercent = params => {
        const url = '/hcm/hcmShopMonitor/getOrderInfoSubAnalysisCity'
        this.getFn(url, 'vipCityPercent', params)
    }

    
    getCategorySalesRank = params => {
        const url = '/hcm/hcmShopMonitor/findClassifyItemSort'
        this.getFn(url, 'categorySalesRank', params)
    }
    getHotProductSalesRank = params => {
        const url = '/hcm/hcmShopMonitor/findHotSingletItemSort'
        this.getFn(url, 'hotProductSalesRank', params)
    }
    getImportantProductData = () => {
        ajax.get('/hcm/hcmProduct/findSingletProList').then(res => {
            const { data, status, message } = res.data
            if (status === '10000') {
                // console.log('---yu', data)
                this.setState({
                    importantProductList: data,
                    importantProductDefaultKey: data.length?data[0].id:'',
                }, () => {
                    // console.log({...DEFAULT_PAGE,product_id:data[0].id})
                    if (data.length !== 0) {
                        this.getImportantShopSalesRank(this.commonParams({...DEFAULT_PAGE,product_id:data[0].id}))
                        this.getImportantVipPercent(this.commonParams({...DEFAULT_PAGE,product_id:data[0].id}))
                    }
                })
            } else {
                Msg.error(message)
            }
        }).catch(err => {
            Msg.error('系统繁忙，请稍后再试！')
        })
    }
    getImportantShopSalesRank = params => {
        const url = '/hcm/hcmShopMonitor/findImpShopSort'
        this.getFn(url, 'importantShopSalesRank', params)
    }
    getImportantVipPercent = params => {
        const url = '/hcm/hcmShopMonitor/findImpBuyerSort'
        this.getFn(url, 'importantVipPercent', params)
    }

    getFn = (url, key, params) => {
        ajax.get(url, {params}).then(res => {
            const { data, status, message } = res.data
            if (status === '10000') {
                this.setState({
                    [key]: {
                        list: data.content,
                        // total: data.obj,
                        pageNo: data.pageNumber,
                        pageSize: data.pageSize,
                        totalElements: data.totalElements,
                    }
                })
            } else {
                Msg.error(message)
            }
        }).catch(err => {
            Msg.error('系统繁忙，请稍后再试！')
        })
    }
    
    render() {
        return <Tpl that={this} />
    }
}
export default App;
