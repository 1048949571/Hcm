import './home.less'
import ThatMain from '../../../HOC/That';
import Copyright from "../../../components/Copyright";
import { Button ,Popover,Table } from 'antd';
// import moment = require('moment');
const Tpl = ThatMain((that) => {
    
    return (
        <div className='shop_home'>
            {/* <div  style={{background:'#f2f2f9',display:'flex',flexDirection:'column',padding:'0 24px'}}> */}
                <div className = 'ShopContent' style = {{padding:'0 24px'}}>
                    <Summary  that={that}/>
                    <RecentActivity that={that}/>
                    <Dailydata that={that}/>
                </div>
            {/* </div> */}
            <div className="copyright">
                    <Copyright />
                </div>
        </div>
        
    )
})

const Summary = ThatMain((that) => {
    let {noticeNotReadCount,productNotReadCount,huanbi,lastMonthCount,huanbiState} = that.state
    const notice = (
        <div>
            <p>未阅读的通知公告</p>
        </div>
    )
    const price = (
        <div>
            <p>未阅读的售价变更信息</p>
        </div>
    )
    const totalsales = (
        <div>
            <p>所属本品牌方商品的成交额</p>
        </div>
    )
    return (
        <div className='Summary'>
            <ul className="SummaryUl">
                <li className="SummaryUlLi1">
                    <p><span onClick={that.activityDeclaration}>+申报活动</span></p>
                    <p>快捷申报活动</p>
                </li>
                <li className="SummaryUlLi2">
                    <div>
                        <img src="../../../../img/icon1.1/notice.png" alt=""/>
                    </div>
                    <div className='SummaryUlLi2_D'>
                        <p>{noticeNotReadCount}</p>
                        <p>
                            最新通知公告
                            <Popover content={notice}  placement="bottom" trigger="hover">
                            <img src="../../../../img/icon1.1/i.png" alt=""/>
                            </Popover>
                        </p>
                    </div>
                </li>
                <li className="SummaryUlLi2">
                    <div>
                        <img src="../../../../img/icon1.1/price.png" alt=""/>
                    </div>
                    <div className='SummaryUlLi2_D'>
                        <p>{productNotReadCount}</p>
                        <p>
                            最新售价变更
                            <Popover content={price}  placement="bottom" trigger="hover">
                            <img src="../../../../img/icon1.1/i.png" alt=""/>
                            </Popover>
                        </p>
                    </div>
                </li>
                <li className="SummaryUlLi3">
                    <div>
                        <img src="../../../../img/icon1.1/money.png" alt=""/>
                    </div>
                    <div className='SummaryUlLi2_D'>
                        <p>{lastMonthCount}（万元）</p>
                        <p>
                            上月总销售金额
                            <Popover content={totalsales}  placement="bottom" trigger="hover">
                            <img src="../../../../img/icon1.1/i.png" alt=""/>
                            </Popover>
                        </p>
                    </div>
                    <div className = 'SummaryUlLi3_DHB'>
                        <p>{huanbiState?<img src="../../../../img/icon1.1/upper.png" alt=""/>:<img src="../../../../img/icon1.1/lower.png" alt=""/>}&nbsp;&nbsp;{huanbi}</p>
                        <p>环比</p>
                    </div>
                </li>
            </ul>
        </div>
    )
})

const RecentActivity = ThatMain((that) => {
    let {tabsData,days,shops,hotCommodity} = that.state;
    
    let tabs = tabsData.map((e,i)=>{
        return <div 
                    className={i == '0'?'item active':'item'}
                    key={i}
                    onClick = {()=>{that.sevendaysTab(i,e.my_date)}}
                >
                    <div className="date">
                        <span>
                        {days[moment(e.my_date).day()]}
                        </span>
                        {i == '0'?<div className = 'today'>今日</div>:null}
                        <span>{moment(e.my_date).format('DD')}</span>
                        
                    </div>
                    <p className="text">{i == '0'?'进行中':'已审核'}活动（{e.all_count}）</p>
                </div>
    })
    let Shops = shops.map((e,i)=>{
        return  <li key = {i}>
                    <p>{e.shop_name}</p>
                    <p>活动数：{e.act_count}</p>
                </li>
    })
    //活动产品的信息的key和value值
    let productvalue = [];
    let productkey = [];
    let HotCommodity = hotCommodity.map((e,i)=>{
        productvalue = []
        productkey = []
        for (const key in e.product_map) {
            if (key != 'product_name' && key != 'floor_transaction_price' && key != 'floor_price' && key != 'brand_name') {
                productvalue.push(e.product_map[key])
                productkey.push(key)
            }
            
        }
        // console.log(productvalue,productkey)
        return  <ul key = {i}>
                    <li>
                        <div className = 'Shop_left'>
                            <p>{e.product_map.product_name}</p>
                            <p>
                                <span>产品分类：{e.class_name}</span>
                                <span>品牌:{e.product_map.brand_name}</span>
                                { 
                                    productvalue.length?
                                        productvalue.map((ee,ii)=>{
                                            return <span key = {ii}>{productkey[ii]}：{ee}</span>
                                        })
                                    :null
                                }
                            </p>
                        </div>
                        <div className = 'Shop_right'>
                            活动商品数：<span>{e.ins_count}</span>
                        </div>
                    </li>
                </ul>
    })
    return (
        <div className='RecentActivity'>
            <div className='recentlyTitle'>
                近日活动概览
            </div>
            <div className='RecentActivityTabs'>
                <section className="items">
                    {tabs}
                    {/* <div 
                        className='item active'
                        onClick={}
                        key='aa'
                        >
                        <div className="date">
                            <span>
                            星期五
                            </span>
                            <div className = 'today'>今日</div>
                            <span>09</span>
                            
                        </div>
                        <p className="text">进行中活动（00）</p>
                    </div> */}
                    
                    
                </section>
                <div className = 'RecentActivityTabs_shop'>
                    <div className = 'ActivityShop'>
                        <div className = 'ActivityShop_title'>活动店铺</div>
                        <div className = 'ActivityShop_zhankai' onClick = {that.openRetract}>···</div>
                    </div>
                    <div className = 'ActivityShop_content'>
                        <ul className = {shops.length?null:'act'}>
                            
                            {Shops.length?Shops:<p style = {{textAlign:"center"}}>暂无数据</p>}
                            {/* <li >
                                <p>dsf</p>
                                <p>活动数：324</p>
                            </li> */}
                        </ul>
                    </div>
                </div>
                <div className = 'RecentActivityTabs_commodity'>
                    <div className = 'ActivityShop'>
                        <div className = 'ActivityShop_title'>热门活动商品</div>
                        {/* <div className = 'ActivityShop_zhankai'>展开更多<span>∨</span></div> */}
                    </div>
                    <div className ={hotCommodity.length?'sellwellcommodity':'sellwellcommodity sellwellactive'} >
                        {HotCommodity.length?HotCommodity:'暂无数据'}
                        
                    </div>
                </div>
            
            </div>
            
        </div>
    )
})

const Dailydata = ThatMain((that) => {
    let {reportforms} = that.state;
    let Newreportforms = reportforms.map((e,i) =>{
        return <li key = {i}>
                    <div>
                        <p>{moment(e.submit_time).format('YYYY-MM-DD')}</p>
                        <p>状态：{e.submit_status?'已提报':'未提报'}</p>
                    </div>
                    <div>
                        {e.submit_status?null:<Button onClick = {()=>{that.ljtb(moment(e.submit_time).format('YYYY-MM-DD'))}}>立即提报</Button>}
                        
                    </div>
                </li>
    })
    return (
        <div className='DailyData'>
            <div className='DailyTitle'>
                每日销售数据提报
            </div>
            <div className = 'DailyFour'>
                <ul>
                    {Newreportforms.length?Newreportforms:'暂无数据'}
                    {/* <li>
                        <div>
                            <p>2018-18-18</p>
                            <p>状态：未提报</p>
                        </div>
                        <div>
                            <Button >立即提报</Button>
                        </div>
                    </li> */}
                </ul>
            </div>
        </div>
    )
})
export default Tpl