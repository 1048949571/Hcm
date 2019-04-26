import ThatMain from '../../../HOC/That'
import ContentBox from '../../../components/Layout'
import ExpandContent from '../../../components/OrderMonitorExpandContent'

import { Input, Select, DatePicker, Button, Row, Col, Icon, Table, Popover } from 'antd'

const Option = Select.Option
const RangePicker = DatePicker.RangePicker

const clearIconStyle = {
  width: '14px',
  height: '14px',
  opacity: 0.25,
  cursor: 'pointer'
}
const ORDER_STATUS = {
  0: '已处理（正常）',
  1: '待处理',
  2: '已处理（异常）',
}

const Tpl = ThatMain(that => {
  const {
    startTime,
    endTime,
    orderId,
    shopInfo,
    status,
    result,
    expandedRowKeys,
    // expanded,
    dataList,
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
      title: '店铺信息',
      dataIndex: 'shopName',
      render: (text, record) => (
        <Popover
          placement="topLeft"
          content={
            <React.Fragment>
              <p>平台：{record.platformName}</p>
              <p>链接地址：<a href={record.shopUrl} target="_blank">{record.shopUrl}</a></p>
              <p>店铺名称：{text}</p>
              <p>旺旺名称：{record.wangwang}</p>
              <p>所属经销商：{record.dealerName}</p>
            </React.Fragment>
          }
        >
          <span style={{display:'inline-block',width:'60%',whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis'}}>{text}</span>
        </Popover>
      ),
      key: 'shop_info',
      className: 'table-column-item',
    },
    {
      title: '订单时间',
      dataIndex: 'paytime',
      render: text => moment(text).format('YYYY-MM-DD HH:mm:ss'),
      key: 'order_time',
      className: 'table-column-item',
    },
    {
      title: '状态',
      dataIndex: 'orderStatus',
      render: text => `${ORDER_STATUS[text]||''}`,
      key: 'status',
      className: 'table-column-item',
    },
    // {
    //   title: '处理结果',
    //   render: text => ``,
    //   key: 'result',
    //   className: 'table-column-item',
    // },
    {
      title: '操作',
      render: (text, record) => (
        <span 
          style={{cursor:'pointer',color:'#108CEE'}}
          onClick={that.handleExpand.bind(that, null, record)}>
          {`${record.orderStatus == 1 ? '立即处理' : '订单详情'}`}
        </span>
      ),
      key: 'options',
      className: 'table-column-item',
    }
  ]

  return (
    <ContentBox
      breadcrumbList={['监控中心', '订单监控', '疑似异常订单处理']}
      linkList={['', '1', '']}
      history={that.props.history}
    >
      <div className="suspent-exception-order-wrapper">
        <section className="search-container">
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
              <span>状态</span>
              <Select
                onChange={that.searchChange.bind(that, 'status', 'select')}
                defaultValue={status}
                style={{width:242}}
                getPopupContainer={trigger => trigger.parentNode}
              >
                <Option value="">全部</Option>
                <Option value="0">已处理（正常）</Option>
                <Option value="2">已处理（异常）</Option>
                <Option value="1">待处理</Option>
              </Select>
            </Col>
            <Col span={8} className="item">
              <span>订单时间</span>
              <RangePicker 
                onChange={that.searchChange.bind(that, '', 'time')}
                style={{width:242}}
                getCalendarContainer={trigger => trigger.parentNode}
                defaultValue={startTime===''?[]:[startTime, endTime]}
              />
              <Button style={{marginLeft:10}} className="btn6" onClick={that.handleSearch}>查询</Button>
            </Col>
            {/* <Col span={8} className="item"> */}
              {/* <span>店铺信息</span>
              <Input 
                suffix={
                  shopInfo===""?
                  null:
                  <Icon
                    type="close-circle"
                    onClick={that.clearInputFn.bind(that, 'shopInfo')}
                    style={clearIconStyle}
                  />
                }
                onChange={that.searchChange.bind(that, 'shopInfo', 'input')}
                value={shopInfo}
                placeholder="请输入" 
                style={{width:242}} /> */}
            {/* </Col> */}
            {/* <Col span={8} className="item"> */}
              {/* <span>处理结果</span>
              <Select
                onChange={that.searchChange.bind(that, 'result', 'select')}
                defaultValue={result}
                style={{width:242}}
                getPopupContainer={trigger => trigger.parentNode}
              >
                <Option value="">全部</Option>
              </Select> */}
            {/* </Col> */}
            {/* <Col span={8} className="item">
              <Button className="btn6" onClick={that.handleSearch}>查询</Button>
            </Col> */}
          </Row>
        </section>
        <section className="table-content-wrapper">
          <Table 
            className="table"
            rowKey={record => record.id}
            dataSource={dataList}
            pagination={{
              showQuickJumper: true,
              current: pagination.pageNo,
              total: pagination.totalElements,
              onChange: that.handlePageChange,
            }}
            columns={columns}
            onExpand={that.handleExpand}
            expandedRowKeys={expandedRowKeys}
            expandedRowRender={(record, index, indent, expanded) => {
              return (
                <ExpandContent handleOrder={that.handleOrder} orderId={record.id} data={record._detail || {}} />
              )
            }}
          />
        </section>
      </div>
    </ContentBox>
  )
})

export default Tpl