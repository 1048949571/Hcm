import ajax from '../../../../js/common/ajax';
import echarts from 'echarts';
import {Icon } from 'antd';
let myChart = null;
class App extends React.Component {
    constructor(props) {
        // document.title = '客户总览';
        super(props);
        this.state = {
            data: props.data,
            scale: 1,
            clientHeight: 0,
            clientWidth: 0
        }
    }

    componentDidMount() {
        let that = this;
        // let customerOverview = $(".CustomerOverview")[0];
        let customerOverview = $(this.props.nodeDom)[0]
        $('.scale-box').css({
            height: customerOverview.clientHeight + 'px',
            width: customerOverview.clientWidth + 'px'
        })
        $('#container').css({
            height: customerOverview.clientHeight + 'px',
            width: customerOverview.clientWidth + 'px'
        })
        this.setState({
            clientHeight: customerOverview.clientHeight,
            clientWidth: customerOverview.clientWidth
        })
        this.inChart()
    }
    onScale = (bl) => {
        let scale = this.state.scale;
        let { clientHeight, clientWidth } = this.state;
        if (bl) {
            this.setState({
                scale: scale >= 2 ? 2 : scale + 0.1
            }, () => {
                $('#container').css({
                    height: Math.floor(clientHeight * (this.state.scale < 1 ? 1 : this.state.scale)) + 'px',
                    width: Math.floor(clientWidth * this.state.scale) + 'px'
                })
                myChart.resize()
            })

        } else {
            this.setState({
                scale: scale <= 0.2 ? 0.2 : scale - 0.1
            }, () => {
                $('#container').css({
                    height: clientHeight + 'px',
                    width: Math.floor(clientWidth * this.state.scale) + 'px'
                })
                myChart.resize()
            })
        }
    }
    inChart = (value='') => {
        let { data } = this.props
        let bl = false;
        myChart = echarts.init(document.getElementById("container"))
        
        function recursive(data){
            echarts.util.each(data, function (datum, index) {
                datum.collapsed = true;
                
                delete datum.label
                if(value.length){
                    
                    if(datum.children&&datum.children.length){
                        bl = false;
                        if(recursiveColor(datum.children,value)){
                            datum.collapsed = false;
                            console.log(datum.children)
                        }else{
                            datum.collapsed = true;
                        }
                    }
                    if(datum.name.toUpperCase().indexOf(value)!=-1){
                        datum.label = {
                            'color':'red'
                        }
                    }
                    if(datum.children&&datum.children.length){
                        recursive(datum.children)
                    }

                }else{
                    if(datum.children&&datum.children.length){
                        datum.collapsed = false
                        
                    }else{
                        datum.collapsed = true;
                    }
                    
                }
            });
        }
        
        function recursiveColor(data,value){
            if(value){
                for(let i = 0 ; i< data.length; i++){
                    if(data[i].name.toUpperCase().indexOf(value)!=-1 ){
                        bl = true;
                        break;
                    }
                    if(data[i].children&&data[i].children.length){
                        recursiveColor(data[i].children,value)
                    }
                }
            }
            return bl
        }
        
        recursive(data.children)
        
        myChart.setOption({
            tooltip: {
                trigger: 'item',
                triggerOn: 'mousemove',
                formatter: function (params) {
                    let {take_people='',contact, dutynumber, address='',level,platform_name,shop_url='' } = params.data
                    if(level==2){
                        return `
                        <div>
                            <p>联系方式:${contact}</p>
                            <p>对接人:${take_people}</p>
                            <p>公司税号:${dutynumber}</p>
                            <p>公司地址:${address}</p>
                        </div>
                        `
                    }else if(level==3){
                        return `
                        <div>
                            <p>平台:${platform_name}</p>
                            <p>链接地址:${shop_url}</p>
                        </div>
                        `
                    }
                    
                }
            },
            series: [
                {
                    type: 'tree',
                    roam:true,
                    data: [data],
                    top: '1%',
                    left: '7%',
                    bottom: '1%',
                    right: '20%',
                    symbolSize: 15,
                    // symbol: 'rect',
                    // lineStyle: {
                    //     curveness: 0.8
                    // },
                    // itemStyle: {
                    //     borderWidth: 10,
                    //     borderColor: 'none'
                    // },
                    label: {
                        formatter: function (params) {
                            return ` ${params.data.name} ${params.data.children&&params.data.children.length ? '>' : ''}`
                        },
                        align:'right',
                        padding:[0,10,0,0],
                        color: '#4493e8',
                    },
                    leaves: {
                        label: {
                            normal: {
                                position: 'right',
                                verticalAlign: 'middle',
                                align: 'left'
                            }
                        }
                    },
                    animationDuration: 550,
                    animationDurationUpdate: 750
                }
            ]
        });
        
    }
    render = ()=>{
        let {scale} = this.state;
        return(
            // <div className='scale-box'>
            <div id="container">

            </div>
        //     <div className='bs-box'>
        //         <Icon onClick={() => this.onScale(false)} type="minus-circle" />
        //         {Math.round(scale * 100)}%
        //         <Icon onClick={() => this.onScale(true)} type="plus-circle" />
        //     </div>
        // </div>
        )
    }
}
export default App