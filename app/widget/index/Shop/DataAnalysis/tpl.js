
import ThatMain from '../../../HOC/That';
import ContentBox from '../../../components/Layout';
import Wrapper from '../../../components/WrapperList'
import { Card, Button, Select,Table, Tabs, Icon, DatePicker, Progress,Row,Col} from 'antd';
const Option = Select.Option;
const { RangePicker } = DatePicker;
const TabPane = Tabs.TabPane;

const Tpl = ThatMain((that) => {
    let {activityDate,activityData,hotDate,hotData,hotShopDate,hotShopData} = that.state;
    return (
        <ContentBox
            breadcrumbList={['数据中心', '数据分析']}
            linkList={['', '']}
            history={that.props.history}
        >
            <div className='dataanalysis'>
                <div className='content'>
                    <div className='chart-box'>
                        <Card
                            style={{width:'70%',display: 'flex',flexDirection: 'column'}}
                            bodyStyle={{ padding:'0px 16px 16px', flex: '1 0' }}
                            hoverable={true}
                            extra={<a href="./index.html#/DataAnalysisInfo/order"><Icon type="ellipsis" /></a>}
                            title={'订单销售额趋势'}
                        >
                            <div className='chart-info'>
                                <div id='chart-bar'>

                                </div>

                            </div>
                        </Card>
                        <Card
                            style={{width:'30%',marginLeft:10,display: 'flex',flexDirection: 'column'}}
                            bodyStyle={{ padding: 16, flex: '1 0' }}
                            hoverable={true}
                            extra={<a href="./index.html#/DataAnalysisInfo/activities"><Icon type="ellipsis" /></a>}
                            title={'活动商品数占比'}
                        >
                            <div className='Activities-box'>
                                <RangePicker 
                                    mode= {['month', 'month']}
                                    format={"YYYY-MM"}
                                    onPanelChange={(e)=>that.handlePanelChange(e,'activityDate')}
                                    onOpenChange={(status)=>{!status&&that.getfindCamItemZB()}}
                                    value={activityDate} 
                                />
                                <div className='Activities-Progress'>
                                    <Progress  strokeLinecap="square" width={150} strokeWidth={10} status='active' type="circle" percent={Math.round(activityData.my_count/activityData.all_count*100)} />
                                    <p>活动商品占比</p>
                                </div>
                                <div className='Activities-info'>
                                    <div>
                                        <span>{activityData.all_count}</span>
                                        <p>共活动商品数</p>
                                    </div>
                                    <div>
                                        <span>{activityData.my_count}</span>
                                        <p>我活动商品数</p>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                    <div style={{display:'flex',minHeight:300,    flex: '0 0'}}>
                        <Card
                            style={{width:'70%'}}
                            bodyStyle={{ padding: 16, flex: '1 0',display: 'flex',flexDirection: 'column',background: 'white' }}
                            hoverable={true}
                            extra={<a href="./index.html#/DataAnalysisInfo/hotGoods"><Icon type="ellipsis" /></a>}
                            title={'热销商品排名'}
                        >
                            <div style={{textAlign:'right'}}>
                                <RangePicker 
                                    mode= {['month', 'month']}
                                    format={"YYYY-MM"}
                                    onPanelChange={(e)=>that.handlePanelChange(e,'hotDate')}
                                    onOpenChange={(status)=>{!status&&that.getHotTop()}}
                                    value={hotDate} 
                                />
                            </div>
                            <div>
                                <Table 
                                className='hot-goods-table'
                                rowKey='num_iid'
                                pagination={
                                    {
                                        simple:true,
                                        pageSize:hotData.pageSize,
                                        total:hotData.totalElements,
                                        current:hotData.pageNumber,
                                        onChange:(page, pageSize)=>that.changePagination(page, pageSize,'hotData',that.getHotTop)
                                    }
                                } 
                                columns={that.columns()} 
                                dataSource={hotData.content} 
                                />
                            </div>
                        </Card>
                        <Card
                            style={{width:'30%',marginLeft:10}}
                            bodyStyle={{ padding: 16, flex: '1 0',display: 'flex',flexDirection: 'column',background: 'white' }}
                            hoverable={true}
                            extra={<a href="./index.html#/DataAnalysisInfo/hotShops"><Icon type="ellipsis" /></a>}
                            title={'热卖店铺排名'}
                        >
                            <RangePicker
                                mode= {['month', 'month']}
                                format={"YYYY-MM"}
                                onPanelChange={(e)=>that.handlePanelChange(e,'hotShopDate')}
                                onOpenChange={(status)=>{!status&&that.getHotShopTop()}}
                                value={hotShopDate} 
                            />
                            <Table 
                                className='hot-shop-table'
                                rowKey='shop_id'
                                pagination={
                                    {
                                        simple:true,
                                        pageSize:hotShopData.pageSize,
                                        total:hotShopData.totalElements,
                                        current:hotShopData.pageNumber,
                                        onChange:(page, pageSize)=>that.changePagination(page, pageSize,'hotShopData',that.getHotShopTop)
                                    }
                                } 
                                columns={that.shopColumns()} 
                                dataSource={hotShopData.content} 
                                />
                        </Card>
                    </div>
                </div>
            </div>
        </ContentBox>
    )
})
export default Tpl