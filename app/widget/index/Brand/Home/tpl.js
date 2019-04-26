
import ThatMain from '../../../HOC/That';
import Copyright from "../../../components/Copyright";
import { Card, Carousel, Icon, Row, Col } from 'antd';
import WechatBind from '../../../components/WechatBind'

const CardTitle = (text) => {
    return (
        <div>
            {text}
        </div>
    )
}
const Tpl = ThatMain((that) => {
    let {
        binding,
        userid,
        campaign_examine_apply='-',
        campaign_inspect_num='-',
        dealer_applying_num='-',
        danlian_yc_num='-',
        guanjianci_yc_num='-',
        dingdan_yc_num='-',
        huodong_yc_num='-',
        shoujia_yc_num='-',
    } = that.state.dataList;
    const goTo = (url) =>{
        window.location.href = url
    }
    return (
        <div className='brand-home'>
            {
                !!userid ?
                    <WechatBind userId={userid} binding={binding} /> :
                    null
            }
            <div className='content'>
                <div className='flex-row'>
                    <Card
                        className='warning-box'
                        bodyStyle={{ padding: 16, flex: '1 0' }}
                        hoverable={true}
                        title={CardTitle("异常提醒")}
                    >
                        <Card.Grid onClick={()=>goTo('/index.html#/PriceMonitor')} className='item' >
                            <span>{shoujia_yc_num}</span>
                            <img src='../../../../img/icon1.1/home_Price.png' />
                            <p>售价表监控异常</p>
                        </Card.Grid>
                        <Card.Grid onClick={()=>goTo('/index.html#/keywordMonitor')} className='item' >
                            <span>{guanjianci_yc_num}</span>
                            <img src='../../../../img/icon1.1/home_Keywords.png' />
                            <p>关键词监控异常</p>
                        </Card.Grid>
                        <Card.Grid onClick={()=>goTo('/index.html#/UrlMonitor')} className='item' >
                            <span>{danlian_yc_num}</span>
                            <img src='../../../../img/icon1.1/home_Singlelink.png' />
                            <p>单链接监控异常</p>
                        </Card.Grid>
                        <Card.Grid onClick={()=>goTo('/index.html#/OrderMonitor')} className='item' >
                            <span>{dingdan_yc_num}</span>
                            <img src='../../../../img/icon1.1/home_Order.png' />
                            <p>订单监控异常</p>
                        </Card.Grid>
                        <Card.Grid onClick={()=>goTo('/index.html#/ActivityInspect')} className='item' >
                            <span>{huodong_yc_num}</span>
                            <img src='../../../../img/icon1.1/home_Inspection.png' />
                            <p>活动稽查结果异常</p>
                        </Card.Grid>
                    </Card>
                    <Card
                        className='todo-list'
                        hoverable={true}
                        title={CardTitle("代办事宜")}
                    >
                        <Card.Grid  onClick={()=>goTo('/index.html#/PendingClient')} className='item' >
                            <div>
                                <img src='../../../../img/icon1.1/home_Dealer.png' />
                                <p>经销商入驻待审批</p>
                            </div>
                            <span>{dealer_applying_num}</span>
                        </Card.Grid>
                        <Card.Grid  onClick={()=>goTo('/index.html#/ActivityReview')} className='item' >
                            <div>
                                <img src='../../../../img/icon1.1/home_Pending.png' />
                                <p>活动申请待审批</p>
                            </div>
                            <span>{campaign_examine_apply}</span>
                        </Card.Grid>
                        <Card.Grid  onClick={()=>goTo('/index.html#/ActivityInspect')} className='item' >
                            <div>
                                <img src='../../../../img/icon1.1/Pending_intervention.png' />
                                <p>活动稽查待稽查</p>
                            </div>
                            <span>{campaign_inspect_num}</span>
                        </Card.Grid>
                    </Card>
                </div>
                <div style={{ marginTop: 10 }} className='flex-row'>
                    <Card
                        className='brand-box'
                        hoverable={true}
                        title={CardTitle("品牌商品库信息概览")}
                    >
                        <Row type="flex" justify="space-between" align="middle">
                            <Col onClick={() => that.CarouselHome.current.prev()} className='but' span={1}>
                                <Icon type="left" />
                            </Col>
                            <Col span={22}>
                                <Carousel ref={that.CarouselHome} dots={false} effect="fade">
                                    {that.carouselItem()}
                                </Carousel>
                            </Col>
                            <Col onClick={() => that.CarouselHome.current.next()} className='but' span={1}>
                                <Icon type="right" />
                            </Col>
                        </Row>
                    </Card>
                </div>
                <div style={{ marginTop: 10 }} className='flex-row'>
                    <Card
                        className='dealer-box'
                        hoverable={true}
                        title={CardTitle("经销商所在大区分布概览")}
                    >
                        <div id='chart-dealers'>

                        </div>

                    </Card>
                    <Card
                        className='shop-box'
                        hoverable={true}
                        title={CardTitle("店铺所属平台占比")}
                    >
                        <div id='chart-shops'>

                        </div>

                    </Card>
                </div>
                
            </div>
        </div>
    )
})

export default Tpl