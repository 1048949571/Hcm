import ThatMain from '../../../HOC/That'
import ContentBox from '../../../components/Layout'
import platform from '../../../components/platform'
import { Row, Col, Card, Button, Icon, Popover } from 'antd'

const Tpl = ThatMain(that => {
  const {
    detailType,
    status,
    breadcrumbName,
    
    myActivityDetail,
    proDetail,
    shopDetail,
  } = that.state

  const ActivityBaseInfo = props => {
    const {
      apply_price,
      price_map={},
      actual_price,
      gift_situation,
      campaign_type,
      play_content,
      campaignExamine,
      isShowMorePrice,
    } = props
    return (
      <Row className="activity-baseinfo-wrapper">
        <Col span={8} className="item">
          <span>申请标价：</span>
          <span>{apply_price}</span>
          {
            Object.keys(price_map).length && isShowMorePrice?
            <Popover
              content={
                <React.Fragment>
                  {
                    Object.entries(price_map).map(([key, val]) => (
                      <p key={key}>{`${key}：${val}`}</p>
                    ))
                  }
                </React.Fragment>
              }
            >
              <Icon className="icon" type="question-circle" />
            </Popover>:
            null
          }
        </Col>
        <Col span={8} className="item"><span>实际成交价：</span><span>{actual_price}</span></Col>
        <Col span={8} className="item"><span>赠品情况：</span><span>{gift_situation}</span></Col>
        <Col span={8} className="item"><span>活动类型：</span><span>{campaign_type}</span></Col>
        <Col span={8} className="item"><span>玩法说明：</span><span>{play_content}</span></Col>
        {
          campaignExamine?
          <Col className="review-info" span={24}>
            <Row className="content">
              <Col span={8}>
                <span>审核结果：</span>
                {
                  campaignExamine.examine_result==='审核通过'?
                  <Button type="primary" style={{backgroundColor:'#52C41A',borderColor:'#52C41A'}}><Icon type="check-circle" />通过</Button>:
                  <Button type="primary" style={{backgroundColor:'#FAAD14',borderColor:'#FAAD14'}}><Icon type="rollback" />驳回</Button>
                }
              </Col>
              <Col span={8}>
                <span>审核意见：{campaignExamine.examine_view}</span>
                <span></span>
              </Col>
              <Col span={8}>
                <span>审核人：{campaignExamine.examine_username}</span>
                <span></span>
              </Col>
            </Row>
          </Col>:
          null
        }
      </Row>
    )
  }

  const ProductBaseInfo = props => {
    const {
      product_name,
      brand_name,
    } = props.data
    const FILTER_FIELD = ['product_name', 'brand_name', 'floor_transaction_price', 'floor_price']
    return (
      <Row className="activity-product-baseinfo-wrapper">
        <Col span={24} className="title">{product_name}</Col>
        <Col span={8} className="item"><span>品牌：</span><span>{brand_name}</span></Col>
        {
          Object.entries(props.data).map(([key, val]) => {
            if (!FILTER_FIELD.includes(key)) {
              return <Col key={key} span={8} className="item"><span>{key}：</span><span>{val}</span></Col>
            }
          })
        }
      </Row>
    )
  }

  const ShopBaseInfo = props => {
    return (
      <div className="shop-baseinfo-wrapper">
        <h5 className="title">{props.shop_name}</h5>
        <div className="info">共有<span>{props.act_count}</span>商品正在活动</div>
      </div>
    )
  }

  const ReviewStatus = props => {
    const {
      campaign_name,
      start_time,
      end_time,
      campaign_desc,
      createtime,
    } = props
    return (
      <Row className="review-status-wrapper">
        <Col span={24} className="title">{campaign_name}</Col>
        <Col span={8} className="item">活动时间：{`${moment(start_time).format('YYYY-MM-DD HH:mm')} ~ ${moment(end_time).format('YYYY-MM-DD HH:mm')}`}</Col>
        <Col span={16} className="item">申请时间：{moment(createtime).format('YYYY-MM-DD HH:mm:ss')}</Col>
        <Col span={8} className="item">活动说明：{campaign_desc}</Col>
        <div className="status-icon">
          <span className={`icon ${status==='活动待审核'||status==='待审核已过期'?'inspecting':'inspected'}`}></span>
          <span className="text">{status}</span>
        </div>
      </Row>
    )
  }

  const ProductItem = props => {
    const {
      isShowTitle=true,
      product_name,
      product_url,
      shop_name,
      start_time,
      end_time,
      ping_name,
      isShowMorePrice=false,
    } = props
    return (
      <div className="product-item-wrapper">
        {
          isShowTitle?
          <h5 className="title">
            店铺名称：{shop_name}
            {
              !!ping_name && window.can.platform.filter(v => v.dictName === ping_name).length ?
              platform(window.can.platform.filter(v => v.dictName === ping_name)[0].dictCode):
              ''
            }
          </h5>:
          null
        }
        <Card
          className="content"
          title={
            detailType==='review'?
            <Row className="card-title">
              <Col span={10} className="item">产品信息：{product_name}</Col>
              <Col span={10} className="item over-ellipsis">商品链接：<a href={product_url} target="_blank">{product_url}</a></Col>
              <Col span={4} style={{fontSize:'14px',color:'#333'}}>
                {
                  status === '活动待审核' ?
                  <React.Fragment>
                    <Icon style={{color:'#FAAD14',marginRight:'10px',fontSize:'16px'}} type="clock-circle" theme="filled" />
                    {status}
                  </React.Fragment>:
                  (
                    status === '待审核已过期' ?
                    <React.Fragment>
                      <Icon style={{color:'#FAAD14',marginRight:'10px',fontSize:'16px'}} type="minus-circle" theme="filled" />
                      {status}
                    </React.Fragment>:
                    null
                  )
                }
              </Col>
            </Row>:
            <Row className="card-title">
              <Col span={12} className="item">活动时间：{`${moment(start_time).format('YYYY-MM-DD HH:mm')} ~ ${moment(end_time).format('YYYY-MM-DD HH:mm')}`}</Col>
              <Col span={12} className="item">链接地址：<a href={product_url} target="_blank">{product_url}</a></Col>
            </Row>
          }
        >
          <ActivityBaseInfo isShowMorePrice={isShowMorePrice} {...props} />
        </Card>
      </div>
    )
  }

  return (
    <ContentBox
      breadcrumbList={['活动信息', breadcrumbName, '活动详情']}
      linkList={['','1','']}
      history={that.props.history}
    >
      <div className="activity-detail-wrapper">
        {
          detailType==='review'?
          <section className="detail-type-review-wrapper">
            <ReviewStatus {...myActivityDetail} />
            {
              myActivityDetail.cplist && myActivityDetail.cplist.length?
              myActivityDetail.cplist.map(v => {
                return <ProductItem key={v.campaign_id} isShowTitle={false} {...v} />
              }):
              null
            }
          </section>:
          null
        }
        {
          detailType==='shop'?
          <section className="detail-type-shop-wrapper">
            {
              that.props.location.state?
              <ShopBaseInfo {...that.props.location.state} />:
              null
            }
            {
              shopDetail && shopDetail.list && shopDetail.list.length ?
              shopDetail.list.map((v, i) => {
                return (
                  <div className="detail-type-shop-item" key={i}>
                    <ProductItem isShowMorePrice={true} {...v} />
                  </div>
                )
              }):
              null
            }
          </section>:
          null
        }
        {
          detailType==='product'?
          <section className="detail-type-product-wrapper">
            {
              proDetail && proDetail.pro_list ?
              <ProductBaseInfo data={proDetail.pro_list}  />:
              null
            }
            {
              proDetail && proDetail.list && proDetail.list.length ?
              proDetail.list.map((v, i) => {
                return (
                  <div className="detail-type-product-item" key={i}>
                    <ProductItem {...v} />
                  </div>
                )
              }):
              null
            }
          </section>:
          null
        }
        {
          (
            (detailType === 'shop' && shopDetail.count > shopDetail.pageNum*shopDetail.pageSize) ||
            (detailType === 'product' && proDetail.count > proDetail.pageNum*proDetail.pageSize)
          ) ?
          <div className="more-btn">
            <Button 
            onClick={that.handleMoreClick.bind(that, detailType==='shop'?shopDetail.pageNum+1:proDetail.pageNum+1)}>
              加载更多
            </Button>
          </div>:
          null
        }
      </div>
    </ContentBox>
  )
})

export default Tpl