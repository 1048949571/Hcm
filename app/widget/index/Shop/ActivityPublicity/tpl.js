import ThatMain from '../../../HOC/That'
import ContentBox from '../../../components/Layout'
import { Button, Input, Divider, Row, Col, Avatar, List } from 'antd'

const ButtonGroup = Button.Group

const CATEGORY = {
  shop: 'shop',
  pro: 'pro',
}
const WEEKS = ['星期日','星期一','星期二','星期三','星期四','星期五','星期六']
const FILTER_FIELD = ['brand_name','floor_price','floor_transaction_price','product_name']

const Tpl = ThatMain(that => {
  const {
    sevenDayCards,
    currentDay,
    currentCat,
    inputValue,

    products,
    shops,
  } = that.state
  return (
    <ContentBox
      breadcrumbList={['活动信息','活动公示']}
      linkList={['','']}
    >
      <div className="shop-activity-publicity-wrapper">
        <section className="day-cards-wrapper">
          {
            sevenDayCards.map((v, i) => {
              const dateObj = moment(v.my_date)
              return (
                <div 
                  onClick={that.handleChangeDay.bind(that, v.my_date)}
                  key={v.my_date} 
                  className={`item ${dateObj.format('YYYY-MM-DD')===moment(currentDay).format('YYYY-MM-DD')?'active':''}`}>
                    <div className="top">
                      <span className="week">
                        {WEEKS[dateObj.day()]}
                        {
                          i===0?
                          <span className="currentDay">今日</span>:
                          null
                        }
                      </span>
                      <span className="day">{dateObj.format('DD')}</span>
                    </div>
                    <div className="bottom">{`${i===0?'进行中':'已审核'}活动（${v.all_count}）`}</div>
                </div>
              )
            })
          }
        </section>
        <section className="main-content">
          <div className="condition">
            <ButtonGroup className="btns">
              <Button type={currentCat===CATEGORY.pro?'primary':'default'} onClick={that.handleBtnClick.bind(that, CATEGORY.pro)}>按活动产品展示</Button>
              <Button type={currentCat===CATEGORY.shop?'primary':'default'} onClick={that.handleBtnClick.bind(that, CATEGORY.shop)}>按活动店铺展示</Button>
            </ButtonGroup>
            <Input.Search 
              onSearch={that.handleSearch}
              defaultValue={inputValue}
              style={{width:242}}
              placeholder={`请输入${currentCat===CATEGORY.pro?'产品':'店铺'}名称`} />
          </div>
          <Divider style={{backgroundColor:'#E1E1E1',margin:'12px 0'}} />
          {
            currentCat===CATEGORY.shop?
            <Row gutter={20} className="shops">
              {
                shops.list && shops.list.length ?
                shops.list.map(v => {
                  return (
                    <Col 
                      span={8} 
                      key={v.shop_id}
                      className="shop-item" 
                      onClick={that.goTo.bind(that, `/PubActivityDetail/publicity/shop/${v.shop_id}`, Object.assign({},v,{_date:currentDay}))}>
                      <div>
                        <div className="info">
                          <Avatar className="avatar">{v.shop_name?v.shop_name.substr(0,1):''}</Avatar>
                          <h5 className="title">{v.shop_name}</h5>
                        </div>
                        <p className="desc">共有<span>{v.act_count}</span>商品正在活动</p>
                      </div>
                    </Col>
                  )
                }):
                <div style={{textAlign:'center',margin:'50px 0'}}>暂无数据</div>
              }
              {
                shops.list && shops.length && shops.count > shops.pageNum*shops.pageSize ?
                <div className="more-btn">
                  <Button onClick={that.handleMoreClick.bind(that, shops.pageNum+1)}>加载更多</Button>
                </div>:
                null
              }
            </Row>:
            <div className="products">
              <List 
                className="list-content"
                bordered
                dataSource={products.list}
                renderItem={item => {
                  return (
                    <div className="pro-item" onClick={that.goTo.bind(that, `/PubActivityDetail/publicity/product/${item.product_id}`, {_date:currentDay})}>
                      <div className="left">
                        <h5 className="title">{item.product_map.product_name}</h5>
                        <div className="infos">
                          <span className="item">产品分类：{item.class_name}</span>
                          <span className="item">品牌：{item.product_map.brand_name}</span>
                          {
                            Object.entries(item.product_map).map(([key, val]) => {
                              if (!FILTER_FIELD.includes(key)) {
                                return <span key={key} className="item">{`${key}：${val}`}</span>
                              }
                            })
                          }
                        </div>
                      </div>
                      <div className="right">
                        活动商品数：<span>{item.ins_count}</span>
                      </div>
                    </div>
                  )
                }}
              />
              {
                products.list && products.list.length && products.count > products.pageNum*products.pageSize ?
                <div className="more-btn">
                  <Button onClick={that.handleMoreClick.bind(that, products.pageNum+1)}>加载更多</Button>
                </div>:
                null
              }
            </div>
          }
        </section>
      </div>
    </ContentBox>
  )
})

export default Tpl