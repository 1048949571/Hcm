
import ThatMain from '../../../HOC/That';
import ContentBox from '../../../components/Layout'
import platformIcon from '../../../components/platform'
// import Copyright from "../../../components/Copyright";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Pagination, message, Button, Input, Select, Icon, Modal, Row, Col} from 'antd';

const Option = Select.Option;

const clearIconStyle = {
    width: '14px',
    height: '14px',
    opacity: 0.25,
    cursor: 'pointer'
}

const Tpl = ThatMain((that) => {
    const {
        shop_name,
        order_situation,
        buy_status,
        suspentOrderCount,
        shopList,
        pagination,
    } = that.state
    return (
        <ContentBox
            breadcrumbList={['数据中心', '订单监控']}
            linkList={['', '']}
        >
        <div className='ordermonitor-wrapper'>
            <section className="exception-order-num">
                <span className="num-wrapper">{suspentOrderCount}</span>
                <span>疑似异常订单待处理数,</span>
                <span className="immediate-treatment" onClick={that.goTo.bind(that, '/SuspentExceptionOrder')}>立即处理>></span>
            </section>
            <section className="order-monitor-main-content">
                <Row className="search-condition-wrapper">
                    <Col span={8} className="condition-field">
                        <span>店铺名称</span>
                        <Input 
                            placeholder="请输入" 
                            style={{width:242}} 
                            value={shop_name}
                            onChange={that.searchChange.bind(that, 'shop_name', 'input')}
                            suffix={
                                shop_name === '' ?
                                null :
                                <Icon
                                    type="close-circle"
                                    onClick={that.clearInputFn}
                                    style={clearIconStyle}
                                />
                            } 
                        />
                    </Col>
                    {/* <Col span={8} className="condition-field"> */}
                        {/* <span>订单情况</span>
                        <Select 
                            getPopupContainer={trigger => trigger.parentNode}
                            defaultValue={order_situation} 
                            style={{width:242}}>
                            <Option value="">全部</Option>
                            <Option value="1">异常</Option>
                            <Option value="2">正常</Option>
                        </Select> */}
                    {/* </Col> */}
                    <Col span={12} className="condition-field">
                        <span>应用订购</span>
                        <Select 
                            getPopupContainer={trigger => trigger.parentNode}
                            defaultValue={buy_status} 
                            onChange={that.searchChange.bind(that, 'buy_status', 'select')}
                            style={{width:242}}>
                            <Option value="">全部</Option>
                            <Option value="AUTHED">已订购</Option>
                            <Option value="NOTAUTH">暂未订购</Option>
                        </Select>
                        <Button className="btn6" onClick={that.handleSearch}>查询</Button>
                    </Col>
                </Row>
                <div className="buy-link">
                    <Button onClick={that.inviteLinkStatus.bind(that, true)}>应用订购链接</Button>
                    <span className="tips">
                        <i className="laba"></i><span>小提示：店铺安装后台应用后才能才能查看店铺的订单数据，请尽快邀请店铺订购。</span>
                    </span>
                </div>
                <Row className="content-list-wrapper" gutter={20}>
                    {
                        shopList.length?
                        shopList.map(v => {
                            return (
                                <Col 
                                    key={v.id} 
                                    span={8} 
                                    className="list-item" 
                                    onClick={that.goTo.bind(that, `/OrderInformation/${v.id}/${v.shopName}/${v.wangwang}`)}>
                                    <div>
                                        <div className="top">
                                            <div className="shop">
                                                <h3>{v.shopName}</h3>
                                                {
                                                    v.wangwang !== '' ?
                                                    <React.Fragment>
                                                        <i></i>
                                                        <span>{v.wangwang}</span>
                                                    </React.Fragment>:
                                                    null
                                                }
                                            </div>
                                            <span className="icon">
                                                { platformIcon(v.platformCode, {width:18,height:18}) }
                                                {
                                                    // 店铺状态 0正常 1异常
                                                    v.state == 1 ?
                                                    <i className="exception"></i> :
                                                    null
                                                }
                                                {
                                                    // 店铺订购状态 NOTAUTH未订购 AUTHED已订购
                                                    v.isauthed === 'AUTHED' ?
                                                    <i className="buy"></i> :
                                                    <i className="no-buy"></i>
                                                }
                                            </span>
                                        </div>
                                        <div className="bottom">
                                            <span className="sales">近30天销售额<i>￥{v.money}</i></span>
                                            <span className="percent">
                                                环比
                                                {
                                                    v.ratio == 0 ?
                                                    <span style={{marginLeft:10}}>--</span>:
                                                    <React.Fragment>
                                                        <i className={parseInt(v.ratio, 10) > 0?'green':'red'}></i>
                                                        <i className={parseInt(v.ratio, 10) > 0?'green':'red'}>{`${v.ratio}%`}</i>
                                                    </React.Fragment>
                                                }
                                            </span>
                                        </div>
                                    </div>
                                </Col>
                            )
                        }):
                        <div style={{margin:'50px 0',textAlign:'center'}}>暂无数据</div>
                    }
                </Row>
                {
                    shopList.length?
                    <Pagination 
                        style={{marginTop:20,textAlign:'right'}}
                        showQuickJumper
                        onChange={that.handlePageChange}
                        current={pagination.pageNo}
                        pageSize={pagination.pageSize}
                        total={pagination.totalElements}
                    />:
                    null
                }
            </section>
            <InviteLink  that={that} />
        </div>
        </ContentBox>
    )
})

const InviteLink = ThatMain((that) => {
    let { inviteLinkStatus} = that.state;

    return (
        <Modal
            title={'获取应用订购链接'}
            visible={inviteLinkStatus}
            maskClosable={false} 
            footer={[
                <Button key="back" onClick={() => that.inviteLinkStatus(false)}>取消</Button>,
            ]}
            onCancel={() => that.inviteLinkStatus(false)}
        >

            <div className='inviteLinkbox'>
                
                <div className='item'>
                    <span className='title'>订购链接：</span>
                    <p>
                        <Input onChange={() => null} value={`https://tb.cn/5VFmCNw`} />
                    </p>
                </div>
                <div className='item' style={{ padding: '0 0 10px 100px',marginTop:'13px' }}>
                    <CopyToClipboard text={`https://tb.cn/5VFmCNw`}
                        onCopy={() => message.success('链接成功复制至粘贴板')}>
                        <Button>复制订购链接</Button>
                    </CopyToClipboard>
                </div>

                <p style={{ padding: '0 0 10px 100px' }}>复制订购链接，发送给经销商店铺订购应用</p>
            </div>
        </Modal>)
})


export default Tpl