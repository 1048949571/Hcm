
import ThatMain from '../../../HOC/That';
import ContentBox from '../../../components/Layout';
import Wrapper from '../../../components/WrapperList'
import { Card, Button, Select, Tabs, Icon, DatePicker } from 'antd';
const Option = Select.Option;
const { RangePicker } = DatePicker;
const TabPane = Tabs.TabPane;

const MOCK = [
    { name: '假的1', num: 1, per: 1 },
    { name: '假的2', num: 2, per: 2 },
    { name: '假的3', num: 3, per: 30 },
    { name: '假的4', num: 4, per: 4 },
    { name: '假的5', num: 5, per: 5 },
    { name: '假的6', num: 6, per: 6 },
    { name: '假的7', num: 7, per: 7 },
    { name: '假的8', num: 8, per: 8 },
    { name: '假的9', num: 9, per: 9 },
    { name: '假的10', num: 10, per: 10 },
]
import Add from './Add';

const Tpl = ThatMain((that) => {
    let {
        dataList,
        dealerVerify,
        start_time,
        end_time,
        chartData,
        hotProductSalesRank,
    } = that.state;
    return (
        <ContentBox
            breadcrumbList={['数据中心', '订单分析']}
            linkList={['', '']}
            history={that.props.history}
        >
            <div className='orderanalysis'>
                <div className='content'>
                    <Card
                        className='warning-box'
                        bodyStyle={{ padding: 16, flex: '1 0' }}
                        hoverable={true}
                        title={'订单销售额趋势'}
                    >
                        <div className='chart-info'>
                            <div id='chart-bar'>

                            </div>
                            <div className='chart-buts'>
                                <div className='title-icon'>
                                    <p>
                                        <span style={{ background: '#3AA1FF' }}></span>
                                        订购数
                                    </p>
                                    <p>
                                        <span style={{ background: '#4ECB73' }}></span>
                                        交易额
                                    </p>
                                </div>
                                <div className='yesterday-info'>
                                    <div className='indent'>
                                        <div>
                                            <p>昨日订单总数</p>
                                            <p className='num'><span>{chartData.yestodayordernum}</span>（单）</p>
                                        </div>
                                        <div>
                                            <p>环比</p>
                                            <p className='num'>
                                                
                                                {
                                                    chartData.orderHB ?
                                                        +chartData.orderHB  > 0 ?
                                                            <Icon style={{ color: '#F5222D' }} type="caret-up" />
                                                            :
                                                            <Icon style={{ color: '#52C41A' }} type="caret-down" />
                                                        : null
                                                }
                                                {chartData.orderHB}
                                            </p>
                                        </div>
                                    </div>
                                    <div className='amount'>
                                        <div>
                                            <p>昨日交易总额</p>
                                            <p className='num'><span>{chartData.yestodaysales}</span>（万元）</p>
                                        </div>
                                        <div>
                                            <p>环比</p>
                                            <p className='num'>
                                                {
                                                    chartData.moneyHB ?
                                                        +chartData.moneyHB  > 0 ?
                                                            <Icon style={{ color: '#F5222D' }} type="caret-up" />
                                                            :
                                                            <Icon style={{ color: '#52C41A' }} type="caret-down" />
                                                        : null
                                                }
                                                {chartData.moneyHB}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Card>
                    <div className='indentinfo'>
                        <div className='indent-header'>
                            <h2>订单信息分析</h2>
                        </div>
                        <Tabs
                            tabBarExtraContent={
                                <div className='timebox'>
                                    <span>数据时间</span>
                                    <RangePicker
                                        defaultValue={[start_time, end_time]}
                                        onChange={that.handleTimeChange}
                                    />
                                </div>
                            }
                            className='indent-tabs'
                            defaultActiveKey="1"
                        >
                            <TabPane tab="店铺分析" key="1">
                                {shopInfo(that)}
                            </TabPane>
                            <TabPane tab="单品分析" key="2">
                                {itemInfo(that)}
                            </TabPane>
                            <TabPane tab="会员分析" key="3">
                                {vipInfo(that)}
                            </TabPane>
                        </Tabs>
                    </div>
                </div>
                <Add getShop={() => that.getShopImportantList()} getItem={() => that.getImportantProductData()} ref={that.AddModal} />
            </div>
        </ContentBox>
    )
})
const shopInfo = (that) => {
    const {
        shopSalesRank,
        productSalesRank,
        shopImportantList,
        shopImportantDefaultKey,
    } = that.state
    return (
        <div className='shop-info'>
            <Wrapper
                className="shop-rank-list"
                title="店铺销售额排名"
                layout={[4, 12, 8]}
                fields={['排名', '店铺名称', '销售额']}
                showField={['shop_name', 'money']}
                data={shopSalesRank.list}
                pageNo={shopSalesRank.pageNo}
                // pageSize={10}
                totalElements={shopSalesRank.totalElements}
                pageChange={that.handlePageChange.bind(that, 'getShopSalesRank')}
            />
            {/* <Card className='shop-rank-list' title="店铺销售额排名">
        
            </Card> */}
            {/* <Card className='hot-shop-rank-list' extra={<a><Icon style={{color:'#108CEE',verticalAlign: 'middle',marginRight: '4px'}} type="plus-circle" />添加店铺</a>} title="重点关注店铺热销商品排名">
            </Card> */}
            <Card className='hot-shop-rank-list' extra={<a onClick={() => that.AddModal.current.showModal('shopVisible', true)} ><Icon style={{ color: '#108CEE', verticalAlign: 'middle', marginRight: '4px' }} type="plus-circle" />添加店铺</a>} title="重点关注店铺热销商品排名">
                {
                    shopImportantList.length ?

                        <React.Fragment>
                            <Tabs defaultActiveKey={shopImportantDefaultKey} onChange={that.handleTabChange.bind(that, '1')}>
                                {
                                    shopImportantList.map(v => (
                                        <TabPane tab={v.shop_name} key={v.id}></TabPane>
                                    ))
                                }
                            </Tabs>
                            <div style={{ padding: 20 }}>
                                <Wrapper
                                    // className="shop-rank-list"
                                    // title="店铺销售额排名"
                                    flag={true}
                                    layout={[4, 2, 12, 2, 4]}
                                    fields={['排名', '', '商品信息', '销量', '销售额']}
                                    showField={['itempic', 'itemtitle', 'bnum', 'money']}
                                    data={productSalesRank.list}
                                    pageNo={productSalesRank.pageNo}
                                    // pageSize={10}
                                    totalElements={productSalesRank.totalElements}
                                    pageChange={that.handlePageChange.bind(that, 'getProductSalesRank')}
                                />
                            </div>
                        </React.Fragment>
                        :
                        <p style={{ textAlign: 'center', lineHeight: '100px', fontSize: 16 }}>请先添加重点关注店铺</p>
                }
            </Card>
        </div>
    )
}
const itemInfo = (that) => {
    const { hotProductSalesRank, categorySalesRank, importantProductList, importantProductDefaultKey, importantShopSalesRank, importantVipPercent } = that.state
    return (
        <div className='item-info'>
            <div className='item-info-box'>
                <Wrapper
                    className="hot-item-list"
                    title="热销单品销售额排名"
                    layout={[4, 14, 6]}
                    fields={['排名', '单品', '销售额']}
                    showField={['product_name', 'trade_money']}
                    data={hotProductSalesRank.list}
                    pageNo={hotProductSalesRank.pageNo}
                    // pageSize={10}
                    totalElements={hotProductSalesRank.totalElements}
                    pageChange={that.handlePageChange.bind(that, 'getHotProductSalesRank')}
                />
                <Wrapper
                    className="item-sales-list"
                    title="分类销售额排名"
                    layout={[4, 14, 6]}
                    fields={['排名', '分类', '销售额']}
                    showField={['product_classify_name', 'trade_money']}
                    data={categorySalesRank.list}
                    pageNo={categorySalesRank.pageNo}
                    // pageSize={10}
                    totalElements={categorySalesRank.totalElements}
                    pageChange={that.handlePageChange.bind(that, 'getCategorySalesRank')}
                />
                {/* <Card className='hot-item-list' title="热销单品销售额排名">
                
                </Card> */}
                {/* <Card className='item-sales-list' title="分类销售额排名">
                
                </Card> */}
            </div>
            <Card className='important-item-list' extra={<a onClick={() => that.AddModal.current.showModal('itemVisible', true)}><Icon style={{ color: '#108CEE', verticalAlign: 'middle', marginRight: '4px' }} type="plus-circle" />添加单品</a>} title="重点关注单品">
                {
                    importantProductList.length ?

                        <React.Fragment>
                            <Tabs defaultActiveKey={importantProductDefaultKey} onChange={that.handleTabChange.bind(that, '2')}>
                                {
                                    importantProductList.map(v => (
                                        <TabPane tab={v.product_name} key={v.id}></TabPane>
                                    ))
                                }
                            </Tabs>
                            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0 92px 20px 20px' }}>
                                <section className="left-content" style={{ flex: '36% 0 0' }}>
                                    <Wrapper
                                        // className="item-sales-list"
                                        // title=""
                                        layout={[4, 14, 6]}
                                        fields={['排名', '店铺名称', '销售额']}
                                        showField={['shop_name', 'trade_money']}
                                        data={importantShopSalesRank.list}
                                        pageNo={importantShopSalesRank.pageNo}
                                        // pageSize={10}
                                        totalElements={importantShopSalesRank.totalElements}
                                        pageChange={that.handlePageChange.bind(that, 'getImportantShopSalesRank')}
                                    />
                                </section>
                                <section className="right-content" style={{ flex: '36% 0 0' }}>
                                    <Wrapper
                                        // className="item-sales-list"
                                        // title=""
                                        layout={[4, 8, 8, 4]}
                                        fields={['排名', '城市', '数量', '占比']}
                                        showField={['city', 'buyer_num', 'zhanbi']}
                                        data={importantVipPercent.list}
                                        pageNo={importantVipPercent.pageNo}
                                        // pageSize={10}
                                        totalElements={importantVipPercent.totalElements}
                                        pageChange={that.handlePageChange.bind(that, 'getImportantVipPercent')}
                                    />
                                </section>
                            </div>
                        </React.Fragment>
                    : 
                    <p style={{ textAlign: 'center', lineHeight: '100px', fontSize: 16 }}>请先添加重点关注单品</p>
                }
            </Card>
        </div>
    )
}
const vipInfo = (that) => {
    const { vipProvincePercent, vipCityPercent } = that.state
    return (
        <div className='vip-info'>
            <Wrapper
                className="vip-province-list"
                title="会员省份分布数量占比排名"
                layout={[4, 8, 8, 4]}
                fields={['排名', '地区', '商品数', '占比']}
                showField={['strict', 'count', 'zhanbi']}
                data={vipProvincePercent.list}
                pageNo={vipProvincePercent.pageNo}
                // pageSize={10}
                totalElements={vipProvincePercent.totalElements}
                pageChange={that.handlePageChange.bind(that, 'getVipProvincePercent')}
            />
            <Wrapper
                className="vip-city-list"
                title="会员城市分布数量占比排名"
                layout={[4, 8, 8, 4]}
                fields={['排名', '地区', '商品数', '占比']}
                showField={['city', 'count', 'zhanbi']}
                data={vipCityPercent.list}
                pageNo={vipCityPercent.pageNo}
                // pageSize={10}
                totalElements={vipCityPercent.totalElements}
                pageChange={that.handlePageChange.bind(that, 'getVipCityPercent')}
            />
            {/* <Card className='vip-province-list' title="会员省份分布数量占比排名">
            
            </Card> */}
            {/* <Card className='vip-city-list' title="会员城市分布数量占比排名">
            
            </Card> */}
        </div>
    )
}

export default Tpl