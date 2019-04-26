import Tpl from './tpl';
import ajax from '../../../../js/common/ajax';
import { message , } from 'antd';


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tabsData:[],//选项卡表头数据
            days:['星期日','星期一','星期二','星期三','星期四','星期五','星期六'],
            noticeNotReadCount: 0,//未读的通知公告数
            productNotReadCount: 0,//未读的售价变更数
            huanbi: "0%",//环比
            huanbiState:true,//环比上升或者下降
            lastMonthCount:0,//上月销售总额
            reportforms:[],//销售数据提报
            shops:[],//参与活动的店铺
            hotCommodity:[],//热销活动商品
        }
    }
    componentDidMount() {
        this.tabs()
        this.shopindex()
    }
    //跳转到活动申报页面
    activityDeclaration = () => {
        window.location.hash = '/ActivityDeclaration'
    }
    ///首页数据统计
    shopindex = () =>{
        let {noticeNotReadCount,productNotReadCount,huanbi,lastMonthCount,reportforms,huanbiState} = this.state;
        // LoadingModal({bl:true})
        ajax.get('/hcm/Index/shopIndex')
        .then(res => {
            // console.log(res)
            // LoadingModal({bl:false})
            if(res.data.status == 10000){
                noticeNotReadCount = res.data.data.noticeNotReadCount;
                productNotReadCount = res.data.data.productNotReadCount;
                huanbi = res.data.data.huanbi;
                lastMonthCount = res.data.data.lastMonthCount;
                reportforms = res.data.data.list;
                huanbiState = res.data.data.huanbiState;
                this.setState({noticeNotReadCount,productNotReadCount,huanbi,lastMonthCount,reportforms,huanbiState})
            }
            
        })
        .catch(() => {
            // LoadingModal({bl:false})
            message.error('获取信息失败');
        });
    }
    //获取选项卡信息
    tabs = () =>{
        let {tabsData} = this.state;
        LoadingModal({bl:true})
        ajax.get('/hcm/campgign/ScheduleBMCSeven')
        .then(res => {
            // console.log(res)
            LoadingModal({bl:false})
            if(res.data.status == 10000){
                tabsData = res.data.data
                this.setState({tabsData},()=>{
                    this.sevendaysTab(0,tabsData[0].my_date)
                })
            }
            
        })
        .catch(() => {
            LoadingModal({bl:false})
            message.error('获取信息失败');
        });
    }
    //选项卡七天切换
    sevendaysTab = async (i,time) =>{
        let {shops,hotCommodity} = this.state;
        let items = document.querySelectorAll('.item')
        // console.log(items)
        items.forEach((ee,ii)=>{
            items[ii].className = 'item'
        })
        items[i].className = 'item active';
        time = moment(time).format('YYYY-MM-DD')
        LoadingModal({bl:true})
        await ajax.get('/hcm/campgign/findCampaignShopsPageList',{
            params: {
                campaign_node:'已审核',
                ser_day: time,
                pageNum:1,       
                pageSize:6
            }
        })
        .then(res => {
            // console.log(res)
            // LoadingModal({bl:false})
            if(res.data.status == 10000){
                shops = res.data.data.list;
                this.setState({shops})
            }
            
        })
        .catch(() => {
            LoadingModal({bl:false})
            message.error('获取信息失败');
        });
        // LoadingModal({bl:true})
        await ajax.get('/hcm/campgign/findProductPublicListShop',{
            params: {
                ser_day: time,
                pageNum:1,       
                pageSize:3
            }
        })
        .then(res => {
            // console.log(res)
            LoadingModal({bl:false})
            if(res.data.status == 10000){
                hotCommodity = res.data.data.list;
                this.setState({hotCommodity})
            }
            
        })
        .catch(() => {
            LoadingModal({bl:false})
            message.error('获取信息失败');
        });
    }
    //活动店铺跳转
    openRetract = () =>{
        window.location.hash = '/ActivityPublicity'
    }
    //立即提报跳转
    ljtb = (time) =>{
        // window.location.hash = '/DataPresentation'
        window.location.hash = '/DataDetails/' + time
    }
    render() {
        return <Tpl that={this} />
    }
}
export default App;
