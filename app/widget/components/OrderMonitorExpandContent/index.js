import { Button } from 'antd'
import './index.less'

const ExpandContent = props => {
  const {
    itempic,
    itemtitle,
    itemprice,
    buyNum,
    itemskuprop,
    floorTransactionPrice,
    brandName,
    productName,
    lowpriceStatus,
    lowpriceType,
    lowpriceUname,
    lowpriceTime,
  } = props.data
  return (
    !!props.data?
    <div className="expand-content-wrapper">
      <div className="left-img">
        <img src={itempic} />
      </div>
      <div className="right-info">
        <div className="top">
          <p>商品名称：{itemtitle}</p>
          <p>
            <span>价格：¥{itemprice}</span>
            <span style={{marginLeft:50}}>数量：{buyNum}</span>
          </p>
          <p>SKU信息：{itemskuprop}</p>
        </div>
        <div className="bottom">
          <p>所属产品：{brandName} / {productName}</p>
          <p>最低成交价：¥{floorTransactionPrice}</p>
        </div>
      </div>
      <div className="result-content">
        {
          // 1待处理 2处理异常 0处理正常
          lowpriceStatus == 1 ?
          <div className="none-deal-order">
            <div className="tips">
              <i></i><span>本订单的价格可能存在异常，请您确认是否异常？</span>
            </div>
            <div className="btns">
              <Button onClick={props.handleOrder.bind(this, props.orderId, 2)}>异常订单</Button>
              <Button onClick={props.handleOrder.bind(this, props.orderId, 0)}>正常订单</Button>
            </div>
          </div>:
          (
            lowpriceStatus == 2 ?
            <div className="exception-order">
              {
                // 1人工确认异常 2系统确认异常
                lowpriceType == 1?
                <React.Fragment>
                  <p><i></i><span>{lowpriceUname}于{lowpriceTime ? moment(lowpriceTime).format('YYYY-MM-DD HH:mm:ss'):' --'}</span></p>
                  <p>本订单为：异常订单</p>
                </React.Fragment>:
                <React.Fragment>
                  <p><i></i><span>本订单已超过3天期限</span></p>
                  <p>{lowpriceTime ? "于"+moment(lowpriceTime).format('YYYY-MM-DD HH:mm:ss'):''}被系统默认判定为：异常订单</p>
                </React.Fragment>
              }
            </div>:
            (
              lowpriceStatus == 0 ?
              <div className="normal-order">
                <p><i></i><span>{lowpriceUname}{lowpriceTime?"于"+moment(lowpriceTime).format('YYYY-MM-DD HH:mm:ss'):''}</span></p>
                <p>本订单为：正常订单</p>
              </div>:
              null
            )
          )
        }
      </div>
    </div>:
    <div>暂无详情数据</div>
  )
}

export default ExpandContent