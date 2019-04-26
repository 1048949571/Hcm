import ThatMain from '../../../HOC/That'
import ContentBox from '../../../components/Layout'
import ExpandContent from '../../../components/OrderMonitorExpandContent'

import { Input, Select, DatePicker, Button, Row, Col, Icon, Table } from 'antd'

const Option = Select.Option
const RangePicker = DatePicker.RangePicker

const clearIconStyle = {
  width: '14px',
  height: '14px',
  opacity: 0.25,
  cursor: 'pointer'
}

const Tpl = ThatMain(that => {
  const {
    shopId,
    shopName,
    wangwang,
    startTime,
    endTime,
    orderId,
    // shopInfo,
    status,
    // result,
    expandedRowKeys,
    // expanded,
    dataList,
    // buyerName,
    highPrice,
    lowPrice,
    pagination,
  } = that.state

  const columns = [
    {
      title: '序号',
      render: (text, record, index) => index + 1,
      key: 'xuhao',
      className: 'table-column-item',
    },
    {
      title: '订单编号',
      dataIndex: 'tid',
      render: (text, record) => (
        <React.Fragment>
          {
            // 异常待处理显示异常图标 0已处理正常 1待处理 2已处理异常
            record.lowpriceStatus == 1 ?
            <i className="exception-icon"></i> :
            null
          }
          <span style={{marginLeft:10}}>{text}</span>
        </React.Fragment>
      ),
      key: 'order_num',
      className: 'table-column-item',
    },
    {
      title: '订单金额',
      dataIndex: 'tradeMoney',
      render: text => `￥${text}`,
      key: 'order-money',
      className: 'table-column-item',
    },
    {
      title: '付款时间',
      dataIndex: 'paytime',
      render: text => text?moment(text).format('YYYY-MM-DD HH:mm:ss'):'--',
      key: 'pay_time',
      className: 'table-column-item',
    },
    // {
    //   title: '买家昵称',
    //   dataIndex: 'nick',
    //   key: 'buy_name',
    //   className: 'table-column-item',
    // },
    {
      title: '地区',
      dataIndex: 'strict',
      key: 'address',
      className: 'table-column-item',
    },
    {
      title: '订单时间',
      dataIndex: 'tradecreated',
      render: text => moment(text).format('YYYY-MM-DD HH:mm:ss'),
      key: 'order_time',
      className: 'table-column-item',
    },
    {
      title: '订单状态',
      dataIndex: 'status',
      key: 'status',
      className: 'table-column-item',
    },
  ]

  return (
    <ContentBox
      breadcrumbList={['监控中心', '订单监控', '监控详情']}
      linkList={['', '1', '']}
      history={that.props.history}
    >
      <div className="order-information-wrapper">
        <section className="search-container">
          <div className="shopname-title">
            <span className="shopname">{shopName}</span>
            <i></i>
            <span className="wangwang">{wangwang}</span>
          </div>
          <Row className="row-content">
              <Col span={8} className="item">
                <span>订单编号</span>
                <Input 
                  suffix={
                    orderId===""?
                    null:
                    <Icon
                      type="close-circle"
                      onClick={that.clearInputFn.bind(that, 'orderId')}
                      style={clearIconStyle}
                    />
                  }
                  onChange={that.searchChange.bind(that, 'orderId', 'input')}
                  value={orderId}
                  placeholder="请输入" 
                  style={{width:242}} />
              </Col>
              <Col span={8} className="item">
                <span>订单状态</span>
                <Select
                  onChange={that.searchChange.bind(that, 'status', 'select')}
                  defaultValue={status}
                  style={{width:242}}
                  getPopupContainer={trigger => trigger.parentNode}
                >
                  <Option value="">全部</Option>
                  <Option value="交易成功">交易成功</Option>
                  <Option value="交易关闭">交易关闭</Option>
                  <Option value="创建关闭">创建关闭</Option>
                  <Option value="卖家已发货">卖家已发货</Option>
                  <Option value="等待买家付款">等待买家付款</Option>
                  <Option value="买家已付款">买家已付款</Option>
                </Select>
              </Col>
              {/* <Col span={8} className="item">
                <span>买家昵称</span>
                <Input 
                  suffix={
                    buyerName===""?
                    null:
                    <Icon
                      type="close-circle"
                      onClick={that.clearInputFn.bind(that, 'buyerName')}
                      style={clearIconStyle}
                    />
                  }
                  onChange={that.searchChange.bind(that, 'buyerName', 'input')}
                  value={buyerName}
                  style={{width:242}}
                  placeholder="请输入" />
              </Col> */}
              <Col span={8} className="item">
                <span>订单时间</span>
                <RangePicker 
                  onChange={that.searchChange.bind(that, '', 'time')}
                  style={{width:242}}
                  getCalendarContainer={trigger => trigger.parentNode}
                  defaultValue={startTime===''?[]:[startTime, endTime]}
                />
              </Col>
              <Col span={8} className="item" style={{display:'flex',alignItems:'center'}}>
                <span>订单金额</span>
                <Input.Group style={{width:242}}>
                  <Col span={12}>
                    <Input
                      suffix={
                        lowPrice===""?
                        null:
                        <Icon
                          type="close-circle"
                          onClick={that.clearInputFn.bind(that, 'lowPrice')}
                          style={clearIconStyle}
                        />
                      }
                      value={lowPrice}
                      onChange={that.searchChange.bind(that, 'lowPrice', 'input')}
                      placeholder="请输入" />
                  </Col>
                  <Col span={12}>
                    <Input
                      suffix={
                        highPrice===""?
                        null:
                        <Icon
                          type="close-circle"
                          onClick={that.clearInputFn.bind(that, 'highPrice')}
                          style={clearIconStyle}
                        />
                      }
                      value={highPrice}
                      onChange={that.searchChange.bind(that, 'highPrice', 'input')}
                      placeholder="请输入" />
                  </Col>
                </Input.Group>
              </Col>
              <Col span={8} className="item">
                {/* <span>订单状态</span>
                <Select
                  onChange={that.searchChange.bind(that, 'status', 'select')}
                  defaultValue={status}
                  style={{width:242}}
                  getPopupContainer={trigger => trigger.parentNode}
                >
                  <Option value="">全部</Option>
                  <Option value="交易成功">交易成功</Option>
                  <Option value="交易关闭">交易关闭</Option>
                  <Option value="创建关闭">创建关闭</Option>
                  <Option value="卖家已发货">卖家已发货</Option>
                  <Option value="等待买家付款">等待买家付款</Option>
                  <Option value="买家已付款">买家已付款</Option>
                </Select> */}
              </Col>
              <Col span={8} className="item">
                <Button className="btn6" onClick={that.handleSearch}>查询</Button>
              </Col>
            </Row>
        </section>
        <section className="table-content-wrapper">
          <a 
            href={
              `/hcm/hcmShopMonitor/getOrderShopListDownload?shopId=${shopId}&orderNo=${orderId}&orderState=${status}&firstDate=${startTime.format('YYYY-MM-DD')}&lastDate=${endTime.format('YYYY-MM-DD')}&fmoney=${lowPrice}&lmoney=${highPrice}`
            }>
            <Button>下载数据</Button>
          </a>
          <Table 
            className="table"
            rowKey={record => record.id}
            pagination={{
              showQuickJumper: true,
              current: pagination.pageNo,
              total: pagination.totalElements,
              pageSize: pagination.pageSize,
              onChange: that.handlePageChange,
            }}
            dataSource={dataList}
            columns={columns}
            onExpand={that.handleExpand}
            expandedRowKeys={expandedRowKeys}
            expandedRowRender={(record, index, indent, expanded) => {
              return (
                <ExpandContent handleOrder={that.handleOrder} data={record._detail || {}} orderId={record.id} />
              )
            }}
          />
        </section>
      </div>
    </ContentBox>
  )
})

export default Tpl