import Tpl from './tpl';
import { Form, message } from 'antd';
import echarts from 'echarts';
import ajax from '../../../../js/common/ajax';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.AddModal = React.createRef();
        this.state = {
            id: null,
            chartData: {

            },
            activityData:{
                all_count: 0,
                my_count: 0,
            },
            activityDate:[ moment().subtract(1, 'months'),moment().subtract(1, 'months')],
            hotDate:[ moment().subtract(1, 'months'),moment().subtract(1, 'months')],
            hotData:{
                content:[],
                pageNumber:1,
                pageSize:6,
                totalElements:0,
            },
            hotShopDate:[ moment().subtract(1, 'months'),moment().subtract(1, 'months')],
            hotShopData:{
                content:[],
                pageNumber:1,
                pageSize:10,
                totalElements:0,
            }
        }
    }

    componentDidMount() {
        this.getfindCamItemZB()
        this.getfindSaleSalaryQS()
        this.getHotTop()
        this.getHotShopTop()
    }
    handlePanelChange = (value, type)=>{
        if(value[1].diff(value[0],'months')>11){
            message.error('时间区间请小于12个月')
            return
        }
        this.setState({
            [type]:value
        })
    }
    inChart = () => {
        let {chartData} = this.state;
        const myChart = echarts.init(document.getElementById('chart-bar'));
        myChart.setOption({
            tooltip: {
                trigger: 'axis',
                formatter: params => {
                    let [a] = params;
                    return(
                        `<div class='tooltip'>
                            <p>${a.axisValueLabel}</p>
                            <p>
                                ${a.seriesName}:${a.value}（万元）
                               
                            </p>
                            <p>环比：<span style='${+chartData.huanbi[a.dataIndex].indexOf('-')==-1?'border-bottom-color: red;    vertical-align: 3px;':'border-top-color: #42d342;    vertical-align: -6px;'}'></span>${chartData.huanbi[a.dataIndex]}</p>
                        </div>`
                    )
                }
            },
            grid: {
                left: 60,
                top: 60,
                bottom: 20,
                right: 60,
            },
            xAxis: [
                {
                    type: 'category',
                    axisLine: {
                        lineStyle: {
                            color: '#999'
                        }
                    },
                    data: chartData.my_month
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    name: '销售金额（万元）',
                    nameTextStyle:{
                        padding:[0,0,15,0]
                    },
                    axisTick: {
                        show: false
                    },
                    axisLine: {
                        show: false
                    },
                    splitLine: {
                        lineStyle: {
                            type: 'dashed'
                        }

                    },
                    axisLabel: {
                        formatter: '{value}'
                    }
                }
            ],
            series: [
                {
                    name: '销售金额',
                    type: 'bar',
                    itemStyle: {
                        color: '#108CEE'
                    },
                    data: chartData.trade_money

                }
            ]
        })
    }
    getfindSaleSalaryQS = ()=>{
        ajax.get('/hcm/hcmShopMonitor/findSaleSalaryQS',{
            params:{
                pageNo:'1',
                pageSize:'12',
                start_time:moment().subtract(1, 'years').format('YYYY-MM'),
                end_time:moment().subtract(1, 'months').format('YYYY-MM'),
               
            }
        })
            .then((response) => {
                let { status, message, data } = response.data;
                if (status == '10000') {
                    let chartData={
                        my_month:[],
                        huanbi:[],
                        trade_money:[],
                    };
                    for(let i = 0;i<data.content.length;i++){
                        chartData.my_month.push(data.content[i].my_month)
                        chartData.huanbi.push(data.content[i].huanbi)
                        chartData.trade_money.push(data.content[i].trade_money)
                    }
                    this.setState({
                        chartData
                    },()=>{
                        this.inChart()
                    })
                } else {
                    message.warning(message)
                }
            }).catch((error) => {
                message.error(error.statusText);
            });
    }
    getfindCamItemZB = ()=>{
        let {activityDate} = this.state;
        ajax.get('/hcm/campgign/findCamItemZB',{
            params:{
                
                start_time:activityDate[0].format('YYYY-MM'),
                end_time: activityDate[1].format('YYYY-MM'),
               
            }
        })
            .then((response) => {
                let { status, message, data } = response.data;
                if (status == '10000') {
                    this.setState({
                        activityData:data
                    })
                } else {
                    message.warning(message)
                }
            }).catch((error) => {
                message.error(error.statusText);
            });
    }
    getHotTop=()=>{
        let {hotDate,hotData} = this.state;
        ajax.get('/hcm/hcmShopMonitor/getGoodsSalesRankingByBmcid',{
            params:{
                pageNo:hotData.pageNumber,
                pageSize:hotData.pageSize,
                start_time:hotDate[0].format('YYYY-MM'),
                end_time: hotDate[1].format('YYYY-MM'),
               
            }
        })
            .then((response) => {
                let { status, message, data } = response.data;
                if (status == '10000') {
                    let {content,pageNumber,pageSize,totalElements} = data;
                    let hotData = this.state.hotData;
                    hotData.content = content;
                    hotData.pageNumber=pageNumber;
                    hotData.pageSize=pageSize;
                    hotData.totalElements =totalElements;
                    this.setState({
                        hotData
                    })
                } else {
                    message.warning(message)
                }
            }).catch((error) => {
                message.error(error.statusText);
            });
    }
    columns = ()=>{
        return(
            [{
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
                            <img style={{flex: '1 0 50px',width:'50px',height:'50px',marginRight:10}} src={text}/>
                            
                            <span>{item.itemtitle}</span>
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
        )
    }
    shopColumns = ()=>{
        return(
            [{
                title: '排名',
                dataIndex: 'index',
                key: 'index',
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
        )
    }
    changePagination = (page, pageSize,type,fn) => {
        
        let data = this.state[type];
        
        data.pageNumber= page;
        data.pageSize= pageSize;
        this.setState({
            [type]:data
        }, () => {
            fn()
        })
    }

    getHotShopTop = ()=>{
        let {hotShopDate,hotShopData} = this.state;
        ajax.get('/hcm/hcmShopMonitor/getShopMoneyTop',{
            params:{
                pageNo:hotShopData.pageNumber,
                pageSize:hotShopData.pageSize,
                start_time:hotShopDate[0].format('YYYY-MM'),
                end_time: hotShopDate[1].format('YYYY-MM'),
               
            }
        })
            .then((response) => {
                let { status, message, data } = response.data;
                if (status == '10000') {
                    let {content,pageNumber,pageSize,totalElements} = data;
                    let hotShopData = this.state.hotShopData;
                    hotShopData.content = content;
                    hotShopData.pageNumber=pageNumber;
                    hotShopData.pageSize=pageSize;
                    hotShopData.totalElements =totalElements;
                    this.setState({
                        hotShopData
                    })
                } else {
                    message.warning(message)
                }
            }).catch((error) => {
                message.error(error.statusText);
            });
    }
    render() {
        return <Tpl that={this} />
    }
}
export default App;
