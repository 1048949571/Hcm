import './home.less'
import ThatMain from '../../../HOC/That';
import ContentBox from '../../../components/Layout'
// import Copyright from "../../../components/Copyright";

import { List, Card, Row, Col } from 'antd'
const LIST = [
    {
        title: '品牌商品库待设置',
        subTitle: '品牌商品库待设置客户',
        columnName: '',
        key: 'brandProductLib',
        f: 'getBrandProductLibData',
    },
    {
        title: '竞品商品库待设置',
        subTitle: '竞品商品库待设置客户',
        columnName: '待设置竞品品牌',
        key: 'competProductLib',
        f: 'getCompetProductLibData',
    },
    {
        title: '关键词监控待设置',
        subTitle: '关键词监控待设置客户',
        columnName: '待设置关键词',
        key: 'keywordMonitor',
        f: 'getKeywordMonitorData'
    },
    {
        title: '售价表监控待设置',
        subTitle: '售价表监控待设置客户',
        columnName: '待设置产品',
        key: 'salesTableMonitor',
        f: 'getSalesTableMonitorData'
    },
    {
        title: '商品链接待打标',
        subTitle: '商品链接待打标客户',
        columnName: '待打标商品',
        key: 'linkMark',
        f: 'getLinkMarkData'
    },
    {
        title: '今日进行的活动待稽查',
        subTitle: '今日活动待稽查客户',
        columnName: '待稽查活动',
        key: 'activityUninspection',
        f: 'getActivityUninspectionData'
    },
]

const Tpl = ThatMain((that) => {
    const renderItem = (data, key, subTitle, columnName, title, funName) => {
        const {
            // title,
            // subTitle,
            list,
            pageNo,
            pageSize,
            totalElements,
            // total,
        } = data
        return (
            <Card
                title={title}
            >
                <div className="sub-title-wrapper">
                    <span className="total">{totalElements}</span>
                    <span className="sub-title">{subTitle}</span>
                </div>
                <List
                    className="list-wrapper"
                    header={
                        <Row>
                            <Col span={3}>序号</Col>
                            <Col span={key==='brandProductLib'?18:14}>客户</Col>
                            {
                                key === 'brandProductLib' ?
                                null:
                                <Col span={7}>{columnName}</Col>
                            }
                        </Row>
                    }
                    bordered={false}
                    dataSource={list}
                    renderItem={(item, index) => (
                        <Row className="list-item-wrapper">
                            <Col span={3}>{pageSize*(pageNo-1)+index+1}</Col>
                            <Col span={key==='brandProductLib'?18:14}>{item.companyname}</Col>
                            {
                                key === 'brandProductLib' ?
                                null:
                                <Col span={7}>{item.count}</Col>
                            }
                        </Row>
                    )}
                    pagination={{
                        simple: true,
                        total: totalElements,
                        current: pageNo,
                        // pageSize: 3,
                        onChange: that.handlePageChange.bind(that, data, funName)
                    }}
                />
            </Card>
        )
    }
    return (
        <ContentBox
            breadcrumbList={[]}
            linkList={[]}
            className="service-wrapper"
        >
        <div className='KEFUhome-wrapper'>
            <Row gutter={10}>
                {
                    LIST.map(v => {
                        if (Object.keys(that.state[v.key]).length) {
                            return (
                                <Col span={8} key={v.key}>
                                    {renderItem(that.state[v.key], v.key, v.subTitle, v.columnName, v.title, v.f)}
                                </Col>
                            )
                        }
                    })
                }
            </Row>
        </div>
        </ContentBox>
    )
})

export default Tpl