import Tpl from './tpl';

import { message } from 'antd';
import ajax from '../../../../js/common/ajax';
import echarts from 'echarts';

class BrandMerchandise extends React.Component {
    constructor(props) {
        super(props)

        const columns = [{
            title: '排名',
            render: (content, record, index) => (
                <span key={index}>
                    {
                        index + 1 == "1" || index + 1 == "2" || index + 1 == "3" ? <span style={{ textAlign: "center", width: "20px", height: "20px", background: "rgba(189,165,113,1)", borderRadius: "50%", display: "inline-block", color: "#fff" }}>{index + 1}</span> : index + 1
                    }
                </span>
            )
        }, {
            title: '地区',
            dataIndex: 'area',
        }, {
            title: '商品数',
            dataIndex: 'count',
        }, {
            title: '占比',
            dataIndex: 'zhanbi',
        }];

        this.refx = React.createRef()
        this.state = {
            JingPinPTx: [],
            CardStyle: "",
            shopGroupData: [],
            contertier: [],
            columns: columns,
            pageNo: 1,
            pageSize: 10,
            totalNum: 0,
            Tabledata: [],
            shopLevelZhanbi: []

        }
    }
    componentDidMount() {

        this.JingPinPT()
    }
    JingPinPT = () => {
        ajax.post('/hcm/search/itemlistInfo')
            .then((res) => {
                console.log(res)
                if (res.data.status == 10000) {
                    if (res.data.data != "" && res.data.data != []) {

                        this.setState({
                            JingPinPTx: res.data.data,
                            CardStyle: res.data.data[0].platform_code
                        }, () => {
                            console.log(this.state.JingPinPTx[0].platform_name)
                            this.shopGroupData(this.state.CardStyle)
                            this.brandItemAreaSort(this.state.pageNo, this.state.pageSize, this.state.CardStyle)
                            this.shopLevelZhanbi(this.state.CardStyle)

                        })

                    }
                } else {
                    message.error(res.data.message)
                }
            }).catch((error) => {
                message.error(error.statusText);

            })
    }
    shopGroupData = (platform_code) => {
        ajax.post('/hcm/search/brandPriceSectionRatio', {
            platform_code: platform_code,
        })
            .then((res) => {
                if (res.data.status == 10000) {
                    if (res.data.data != "" && res.data.data != []) {
                        this.setState({
                            shopGroupData: res.data.data[0],
                            contertier: res.data.data[0]
                        }, () => {
                            this.myChart(this.state.shopGroupData)
                            this.contertier(this.state.contertier)

                        })
                    }
                } else {

                    message.error(res.data.message)
                }
            }).catch((error) => {
                message.error(error.statusText);

            })
    }
    shopLevelZhanbi = (platform_code) => {
        ajax.post('/hcm/search/shopLevelZhanbi', {
            platform_code: platform_code,
        })
            .then((res) => {
                console.log(res)
                if (res.data.status == 10000) {
                    if (res.data.data != "" && res.data.data != []) {
                        this.setState({
                            shopLevelZhanbi: res.data.data
                        },()=>{

                        })
                    }
                } else {

                    message.error(res.data.message)
                }
            }).catch((error) => {
                message.error(error.statusText);

            })
    }
    myChart = (shopGroupData) => {
        let shopLevelZhanbi = this.state.shopLevelZhanbi
        //console.log(shopGroupData)
        var myChart = echarts.init(document.getElementById('echartsxx'));
        var myChartb = echarts.init(document.getElementById('echartsxxb'));
        var carvarCard = echarts.init(document.getElementById('carvarCard'));
        let totnum = 0;

        if (shopGroupData.length) {
            totnum = shopGroupData.map(item => item.value).reduce((total, currentValue, index, arr) => {

                return total + currentValue
            })
        }

        myChart.setOption({
            tooltip: {
                trigger: 'item',
                formatter: "{b}: {c} ({d}%)"
            },
            series: [
                {
                    name: '占比',
                    type: 'pie',
                    radius: ['0%', '30%'],
                    center: ['50%', '60%'],
                    color: ['#fff'],
                    silent: true,
                    label: {
                        position: 'center',
                        formatter: function (params) {
                            //console.log(params)
                            var a = shopGroupData.authlist[1].value;
                            var b = shopGroupData.authlist[0].value;
                            var xum=a / b * 100
                            return a != 0 && b != 0 ? xum.toFixed(2) + "%" + "\n" + "占比" : 0+ "\n" +"占比"
                        },
                        color: '#333',
                        fontSize: 14,
                        rich: {
                            a: {
                                fontSize: 14,
                                color: '#999',
                                align: 'center'
                            },
                            c: {
                                color: '#333',
                                fontSize: 20,
                                padding: 10,
                                align: 'center'
                            }
                        }
                    },
                    data: [
                        { value: totnum, name: '' }
                    ]
                },
                {
                    type: 'pie',
                    radius: ['50%', '70%'],
                    center: ['50%', '60%'],
                    color: ['#36CBCB', '#ccc'],
                    data: this.state.shopGroupData.authlist

                }
            ]
        })
        myChartb.setOption({
            tooltip: {
                trigger: 'item',
                formatter: "{b}: {c} ({d}%)",
            },
            series: [
                {
                    name: '占比',
                    type: 'pie',
                    radius: ['0%', '30%'],
                    center: ['50%', '60%'],
                    color: ['#fff'],
                    silent: true,
                    label: {
                        position: 'center',
                        formatter: function (params) {
                            //console.log(params)
                            var a = shopGroupData.whitelist[1].value;
                            var b = shopGroupData.whitelist[0].value;
                            var sum=a / b * 100
                            return a != 0 && b != 0 ? sum.toFixed(2) + "%" + "\n" + "占比" : 0+ "\n" +"占比"
                        },
                        color: '#333',
                        fontSize: 14,
                        rich: {
                            a: {
                                fontSize: 14,
                                color: '#999',
                                align: 'center'
                            },
                            c: {
                                color: '#333',
                                fontSize: 20,
                                padding: 10,
                                align: 'center'
                            }
                        }
                    },
                    data: [
                        { value: totnum, name: '' }
                    ]
                },
                {
                    type: 'pie',
                    radius: ['50%', '70%'],
                    center: ['50%', '60%'],
                    color: ['#FAD43B', '#ccc'],
                    data: this.state.shopGroupData.whitelist
                }
            ]
        })
        carvarCard.setOption({
            tooltip: {
                trigger: 'item',
                formatter: "{b}: {c} ({d}%)"
            },
            series: [
                {
                    name: '总店铺数',
                    type: 'pie',
                    radius: ['0%', '30%'],
                    center: ['50%', '40%'],
                    color: ['#fff'],
                    silent: true,
                    label: {
                        position: 'center',
                        formatter: function (params) {
                            console.log(shopLevelZhanbi[0])
                           
                            return shopLevelZhanbi!="" && shopLevelZhanbi!= [] ? shopLevelZhanbi[0].total+"\n" + "总店铺数" : 0+"\n" + "总店铺数" 
                        },
                        color: '#333',
                        fontSize: 14,
                        rich: {
                            a: {
                                fontSize: 14,
                                color: '#999',
                                align: 'center'
                            },
                            c: {
                                color: '#333',
                                fontSize: 20,
                                padding: 10,
                                align: 'center'
                            }
                        }
                    },
                    data: [
                        { value: totnum, name: '' }
                    ]
                },
                {
                    type: 'pie',
                    radius: ['50%', '70%'],
                    center: ['50%', '40%'],
                    color: ['#1890FF', '#37CBCB', "#FAD337", "#F2637B", "#975FE4","#ccc"],
                    data: this.state.shopLevelZhanbi ?
                        this.state.shopLevelZhanbi : [{
                            name: "天猫",
                            value: 0
                        }, {
                            name: "黄冠级",
                            value: 0
                        }, {
                            name: "蓝冠级",
                            value: 0
                        }, {
                            name: "钻级",
                            value: 0
                        }, {
                            name: "心级",
                            value: 0
                        }]
                }
            ]
        })
    }
    
    CardStyle = (CardStyle) => {
        this.setState({
            CardStyle: CardStyle,
            shopLevelZhanbi: [],
            pageNo: 1,
            pageSize: 10,
            totalNum: 0,
            Tabledata: []
            // shopGroupData: []
        }, () => {
            this.shopGroupData(this.state.CardStyle)
            if (CardStyle == "TBTM") {
                this.brandItemAreaSort(this.state.pageNo, this.state.pageSize, this.state.CardStyle)
                this.shopLevelZhanbi(this.state.CardStyle)
            }
        })
    }
    handlePrev = () => {
        this.refx.current.prev()
    }
    handleNext = () => {
        this.refx.current.next()
    }
    contertier = (contertier) => {
        //var dom = document.getElementById("container");
        var myChart = echarts.init(document.getElementById("container"));
        const app = {}
        const option = null;
        app.title = '坐标轴刻度与标签对齐';

        myChart.setOption({
            color: ['#3398DB'],
            tooltip: {
                trigger: 'axis',
                axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                },
                formatter: function (params) {
                    //console.log(params)
                    var res = "价格区间：" + params[0].axisValue + "<br/>" + params[0].seriesName + ":" + params[0].data + "<br/>占比:" + contertier.zhanbi_list[params[0].dataIndex] + "%"

                    return res;
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    data: this.state.contertier.section_list != "" ? this.state.contertier.section_list : ["0-100", "101-200", "201-300", "301-400"],
                    axisTick: {
                        alignWithLabel: true
                    },
                    axisLabel: { interval: 0 }
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    data: this.state.contertier.zhanbi_list != "" ? this.state.contertier.zhanbi_list : ["0", "25", "50", "70", '100'],
                    axisLine: { onZero: false },
                    axisTick: {
                        alignWithLabel: true
                    },
                    axisLabel: {
                        formatter: '{value}'
                    }
                }
            ],
            series: [
                {
                    name: '数量',
                    type: 'bar',
                    barWidth: '40%',
                    color: "#108CEE",
                    data: this.state.contertier.shulianglist,
                    axisLabel: {
                        formatter: '{value}%'
                    }
                }
            ]
        }, true);

    }
    brandItemAreaSort = (pageNos, pageSizes, platform_codes) => {
        ajax.post('/hcm/search/brandItemAreaSort', {
            pageNo: pageNos,
            pageSize: pageSizes,
            platform_code: platform_codes,
        })
            .then((res) => {
                console.log(res)
                if (res.data.status == 10000) {
                    if (res.data.data.content != "" && res.data.data.content != []) {

                        this.setState({
                            Tabledata: res.data.data.content,
                            pageNo: res.data.data.pageNumber,
                            totalNum: res.data.data.totalElements
                        }, () => {


                        })
                    }
                } else {
                    message.error(res.data.message)
                }
            }).catch((error) => {
                message.error(error.statusText);

            })

    }
    changePagination = (a, b) => {
        console.log(a, b)
        this.setState({
            pageNo: a,
            Tabledata: []
        }, () => {
            this.brandItemAreaSort(this.state.pageNo, this.state.pageSize, this.state.CardStyle)
        })
    }
    onPaginationSize = (a, b) => {
        console.log(a, b)
        // this.setState({
        //     pageNo: a,
        //     Tabledata: []
        // }, () => {
        //     this.brandItemAreaSort(this.state.pageNo, this.state.pageSize, this.state.CardStyle)
        // })
    }
    render() {
        return <Tpl that={this} />
    }
}
export default BrandMerchandise;
