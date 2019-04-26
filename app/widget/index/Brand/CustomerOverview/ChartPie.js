import echarts from 'echarts';
import china from './china.json'

class ChartPie extends React.Component {
    componentDidMount() {
        const dom = $(`#${this.props.nodeDom}`)
        $('#pie-container').css({
            width: `${dom.width()}px`,
            height: `${dom.height()}px`
        })
        this.initChart()
    }
    initChart = () => {
        let data = [];
        for(var i = 0 ; i<this.props.data.length ;i++){
            for(var j = 0 ; j<this.props.data[i].children.length ;j++){
                data.push({
                    name:this.props.data[i].children[j].name,
                    value:this.props.data[i].children[j].value,
                })
            }
        }
        data.push({name: '南海诸岛',value: 0, itemStyle:{ normal:{opacity:0,label:{show:false}}} })
        echarts.registerMap('china', china);
        const myChart = echarts.init(document.getElementById('pie-container'));
        console.log(data)
        myChart.setOption({
            
            tooltip: {
                trigger: 'item',
                formatter: '{b}<br/>经销商数量 /{c} 家)'
            },
            toolbox: {
                show: true,
                orient: 'vertical',
                left: 'right',
                top: 'center',
                feature: {
                    dataView: {readOnly: false},
                    restore: {},
                    saveAsImage: {}
                }
            },
            visualMap: {
                realtime: false,
                calculable: true,
                inRange: {
                    color: ['lightskyblue','rgba(0, 80, 179, 1)', 'rgba(186, 231, 255, 1)']
                }
            },
            series: [{
                type: 'map',
                map: 'china',
                itemStyle:{
                    normal:{label:{show:true}},
                    emphasis:{label:{show:true}}
                },
                data:data,
    
                nameMap: {
                    '台湾':'台湾',
                    '河北':'河北省',
                    '山西':'山西省',
                    '内蒙古':'内蒙古自治区',
                    '辽宁':'辽宁省',
                    '吉林':'吉林省',
                    '黑龙江':'黑龙江省',
                    '江苏':'江苏省',
                    '浙江':'浙江省',
                    '安徽':'安徽省',
                    '福建':'福建省',
                    '江西':'江西省',
                    '山东':'山东省',
                    '河南':'河南省',
                    '湖北':'湖北省',
                    '湖南':'湖南省',
                    '广东':'广东省',
                    '广西':'广西壮族自治区',
                    '海南':'海南省',
                    '四川':'四川省',
                    '贵州':'贵州省',
                    '云南':'云南省',
                    '西藏':'西藏自治区',
                    '陕西':'陕西省',
                    '甘肃':'甘肃省',
                    '青海':'青海省',
                    '宁夏':'宁夏回族自治区',
                    '新疆':'新疆维吾尔自治区',
                    '北京':'北京市',
                    '天津':'天津市',
                    '上海':'上海市',
                    '重庆':'重庆市',
                    '香港':'香港',
                    '澳门':'澳门'
                }
            }]


        });
    }
    render() {
        return <div id="pie-container"></div>
    }
}

export default ChartPie
