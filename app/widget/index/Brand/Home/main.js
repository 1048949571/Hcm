import Tpl from './tpl';
import { message,Card, Button, notification } from 'antd';
import ajax from '../../../../js/common/ajax';
import echarts from 'echarts';
import platform from '../../../components/platform'
class App extends React.Component {
    constructor(props) {
        super(props)
        this.CarouselHome = React.createRef();
        this.state = {
            expire: moment(),
            dataList: {
                binding: null,
                userid:null,
                data:[]
            }
        }
    }
    componentDidMount() {
        this.getList();
    }
    componentWillUnmount() {
        notification.close('date')
    }
    getList() {
       
        ajax.get('/hcm/Index/bmaincustomerIndex')
        .then((response) => {
            if (response.data.status == '10000') {
                this.setState({
                    dataList: response.data.data,
                    expire: moment(response.data.data.bmaincustomer_validtime),
                }, () => {
                    this.expire();
                    this.myChart(this.state.dataList.daquData,'chart-dealers','客户总数量')
                    this.myChart(this.state.dataList.shopGroupData,'chart-shops','店铺总数量')
                })
            } else {
                message.error(response.data.message);
            }
        })
        .catch((error) => {
            message.error(error.statusText);
        });


    }
    expire = () => {
        const { expire } = this.state;
        let exDay = Math.ceil((expire.format('X') - moment().format('X')) / 60 / 60 / 24) + 1;
        const close = () => {
            notification.close('date')
            sessionStorage.setItem('exdate', true)
        }
        const args = {
            message: '账号即将到期提醒',
            description: `你的账号有效期至 ${expire.format('YYYY年MM月DD日')} ，使用期限仅剩 ${exDay}天，过期后账号将不能使用，请及时联系管理员续期`,
            duration: 0,
            key: 'date',
            btn: <Button onClick={close}>我知道了</Button>,
            onClose: close
        };
        notification.config({
            top: 60
        });
        if (exDay <= 30 && !sessionStorage.getItem('exdate')) {
            notification.warning(args);
        }
    }
    myChart = (data,id,title) => {
        
        const myChart = echarts.init(document.getElementById(id));
        let totnum = 0;
        if (data.length) {
            totnum = data.map(item => item.value).reduce((total, currentValue, index, arr) => {
                return total + currentValue
            })
        }

        myChart.setOption({
            tooltip: {
                trigger: 'item',
                formatter: "{b}: {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                right: '30',
                top: 'center',
                itemGap: 20,
                data: data.map(item => item.name)
            },

            series: [
                {
                    name: title,
                    type: 'pie',
                    radius: ['0%', '30%'],
                    center: ['38%', '50%'],
                    color: ['#fff'],
                    silent: true,
                    label: {
                        position: 'center',
                        formatter: '{c| {c}}\n{a|{a}}',
                        color: '#333',
                        fontSize: 20,
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
                    radius: ['40%', '55%'],
                    center: ['38%', '50%'],
                    label: {
                        formatter: '{b}：{c}\n占比：{d}%',
                    },
                    avoidLabelOverlap: true,
                    color: ['#55a0f8', '#66c8ca', '#72c77c', '#f4d358', '#e17c7d', '#8e66dd'],
                    data: data
                }
            ]
        })

    }
    carouselItem  = () => {
        let dom = [];
        let num = 6;
        let {item_shop_data=[]} = this.state.dataList;
        let styles={
            width:'100%',
            display: 'flex',
            justifyContent: 'space-evenly',
            alignItems: 'center'
        }
        function oFor(num,index){
            
            let arr = []
            for(let i = 0; i<num; i++){
                if(item_shop_data[num*index+i]){
                    arr.push(
                        <div key={i} className='item' >
                            {platform(item_shop_data[num*index+i].platform_code,{width:40,height:40})}
                            <p style={{padding:'5px 0px 10px'}}>{item_shop_data[num*index+i].platform_name}</p>
                            <p style={styles}>
                                <span>店铺数</span>
                                <span style={{fontSize:18}}>{item_shop_data[num*index+i].shop_num}</span>
                            </p>

                            <p style={styles}>
                                <span>商品数</span>
                                <span style={{fontSize:18}}>{item_shop_data[num*index+i].item_num}</span>
                            </p>
                            
                        </div>
                    )
                }
            }
            return arr
        }
        for(let i = 0; i<Math.ceil(item_shop_data.length/num); i++){
            dom.push(
                <div key={i} className='carousel-item'>
                   
                    {oFor(num,i)}
                    
                </div>
            )
        }
        return dom
    }
    render() {
        return <Tpl that={this} />
    }
}
export default App;
