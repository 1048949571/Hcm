import { List, Card, Row, Col } from 'antd'

import './index.less'

// props: {
//   layout: [1,2,3]
//   title: '',
//   data: [{},{}],
//   showField: ['',''],
//   fields: ['','']
// }

const WrapperList = props => {
  const {
    className="",
    title="",
    flag=false,

    layout,
    fields,

    data,
    showField,

    pageNo,
    pageSize=10,
    totalElements,
    pageChange,
  } = props
  const itemLayout = (...param) => {
    return (
      layout.map((v,i) => {
        if (i==1&&flag) {
          return (
            <Col span={v} key={i}><img src={param[i]} width="50" height="50" /></Col>
          )
        }
        return (
          <Col span={v} key={i}><span className={param[0]<4?'icon':''}>{param[i]}</span></Col>
        )
      })
    )
  }
  return (
    <Card
      bordered={false}
      className={`wrapper-list-component ${className}`}
      title={title}
    >
      <List
        className="wrapper-list"
        bordered={false}
        dataSource={data}
        header={
          <Row>
            {
              itemLayout(...fields)
            }
          </Row>
        }
        renderItem={
          (item, index) => {
            const arr = []
            showField.forEach(v => {
              arr.push(item[v])
            })
            return (
              <Row className="item-container">
                {
                  itemLayout(pageSize*(pageNo-1)+index+1, ...arr)
                }
              </Row>
            )
          }
        }
        pagination={{
          simple: true,
          current: pageNo,
          // pageSize: 2,
          total: totalElements,
          onChange: pageChange,
        }}
      />
    </Card>
  )
}

export default WrapperList