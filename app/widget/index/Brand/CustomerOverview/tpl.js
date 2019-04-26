import './CustomerOverview.less';
import ThatMain from '../../../HOC/That';
import ContentBox from '../../../components/Layout'
import ChartPie from './ChartPie'
import ShopPie from './ShopPie'
import NoneData from '../../../components/NoneData'

import { Select, Icon, Input, Tabs, Card, List, Row, Col, Popover, Progress, Tree } from 'antd';

import ChartTree from './ChartTree'
const Search = Input.Search;
const TabPane = Tabs.TabPane
const Option = Select.Option
const TreeNode = Tree.TreeNode

const COLORS = [
    '#3AA0FF', '#36CBCB', '#4FCA78', '#FAD43B',
    '#F2657D', '#9962E4', '#FD8838', '#726FFC',
]

const Tpl = ThatMain((that) => {
    const { 
        tabKey, 
        platformList, 
        chinaCodeTree, 
        shopInPlatformData, 
        shopProductsRank, 
        shopLoyalRank, 
        brainData, 
        departmentTree,
        searchValue,
        expandedKeys,
        autoExpandParent,
        platform_code,
        orderExceptionRank,
        salesRank,
        currentSelectedKeys,
    } = that.state;
    let arr = []
    expandedKeys
    const renderTreeNode = (list, flag) => {
        return list.map(v => {

            if (v.children && v.children.length) {
                arr.push(v.id)
                return (
                    <TreeNode 
                        title={
                            <span className={`${flag?'':'parentNode'} ${currentSelectedKeys.includes(v.id)?'activeTreeNode':''}`}>
                                {v.name}
                            </span>
                        } 
                        key={v.id}>
                        {renderTreeNode(v.children, true)}
                    </TreeNode>
                )
            }
            return (
                <TreeNode 
                    title={
                        <span className={`${flag?'':'parentNode'} ${currentSelectedKeys.includes(v.id)?'activeTreeNode':''}`}>
                            {v.name}
                        </span>
                    } 
                    key={v.id} />
            )
        })
    }
    return (
        <ContentBox
            breadcrumbList={['渠道盘点', '渠道总览']}
            linkList={['', '']}
        >
        <div className='CustomerOverview'>
            <Tabs defaultActiveKey={tabKey} className="tabs-wrapper">
                <TabPane key="shop" tab="店铺档案信息总览" className="tabs-item-wrapper">
                        <div className="content-wrapper">
                            <section className="top-container">
                            <Card 
                                className="dealer-shop-percent-wrapper"
                                title="客户店铺平台占比" 
                                bordered={false} 
                                style={{width:'66.22%',float:'left'}}>
                                <div id="shop-pie-wrapper">
                                    {
                                        shopInPlatformData.length?
                                        <ShopPie data={shopInPlatformData} nodeDom="shop-pie-wrapper" />:
                                        <NoneData style={{marginTop:'50px'}} />
                                    }
                                </div>
                            </Card>
                            <Card 
                                title="店铺近30天销售额排名" 
                                bordered={false} 
                                className="shop-sales-rank-wrapper"
                                style={{width:'33.11%',float:'right'}}>
                                <List 
                                    dataSource={salesRank}
                                    locale={{emptyText: <NoneData />}}
                                    renderItem={(item, index) => (
                                        <Row className="list-item-row">
                                            <Col span={3}>
                                                <span className={`index-num ${index+1<4?'active':''}`}>{index+1}</span>
                                            </Col>
                                            <Col span={11} className="overflow-ellipsis">{item.shop_name}</Col>
                                            <Col span={10} style={{textAlign:'right'}}>
                                                {`${item.sales!==undefined?'￥'+item.sales:'暂无销量'}`}
                                            </Col>
                                        </Row>
                                    )}
                                />
                            </Card>
                            </section>
                            <section className="middle-container">
                                <Card
                                    title={
                                        <span>
                                            品牌忠诚度排名&nbsp;
                                            <Popover content="店铺内本品牌商品占店铺总商品数的比例" trigger="hover">
                                                <Icon style={{verticalAlign:'middle',cursor:'pointer'}} type="exclamation-circle" />
                                            </Popover>
                                        </span>
                                    }
                                    bordered={false}
                                >
                                    <Row className="progress-wrapper">
                                        {
                                            shopLoyalRank.length?
                                            shopLoyalRank.map((v, i) => (
                                                i<8?
                                                <Col span={3} key={i}>
                                                    <span className={`rank-num ${i+1<4?'active':''}`}>{i+1}</span>
                                                    <Progress 
                                                        strokeLinecap="square" 
                                                        strokeColor={COLORS[i]} 
                                                        strokeWidth={12} 
                                                        type="circle" 
                                                        format={percent => <span style={{color:'#333',fontSize:16}}>{percent}</span>}
                                                        percent={v.bili==null?0:v.bili*100} />
                                                    <p className="shop-name">{v.shop_nick}</p>
                                                </Col>:
                                                null
                                            )):
                                            null
                                        }
                                    </Row>
                                </Card>
                            </section>
                            <section className="bottom-container">
                                <Card
                                    title="店铺订单异常次数排名"
                                    bordered={false}
                                >
                                    {
                                        <List
                                            dataSource={orderExceptionRank}
                                            renderItem={(item, index) => (
                                                <Row className="list-item-wrapper">
                                                    <Col span={3}>
                                                        <span className={`list-index ${index+1<4?'bg-container index'+(index+1):''}`}>
                                                            {index+1<4?'':index+1}
                                                        </span>
                                                    </Col>
                                                    <Col span={9} className="overflow-ellipsis">{item.shop_name}</Col>
                                                    <Col span={12}>
                                                        <Progress 
                                                            format={percent => percent+''}
                                                            percent={item.lowprice==null?0:item.lowprice} />
                                                    </Col> 
                                                </Row>
                                            )}
                                        />
                                    }
                                </Card>
                                <Card
                                    title="店铺活动商品数排名"
                                    bordered={false}
                                >
                                    <List
                                        dataSource={shopProductsRank}
                                        renderItem={(item, index) => (
                                            <Row className="list-item-wrapper">
                                                <Col span={3}>
                                                    <span className={`list-index ${index+1<4?'bg-container index'+(index+1):''}`}>
                                                        {index+1<4?'':index+1}
                                                    </span>
                                                </Col>
                                                <Col span={9} className="overflow-ellipsis">{item.shop_name}</Col>
                                                <Col span={12}>
                                                    <Progress 
                                                        format={percent => percent+''}
                                                        percent={parseInt(item.camcount, 10)} />
                                                </Col> 
                                            </Row>
                                        )}
                                    />
                                </Card>
                            </section>
                        </div>
                    </TabPane>
                <TabPane key="dealer" tab="经销商档案信息总览" className="tabs-item-wrapper">
                    <Tabs tabPosition="left">
                        <TabPane key="1" tab="经销商店铺关系概览" className="sub-tabpane-item shop-document-info">
                            <div className="condition-container">
                                <Select defaultValue={platform_code} style={{width:280}} onChange={that.handlePlatformChange}>
                                    <Option value="">全部</Option>
                                    {
                                        platformList.map(v => (
                                            <Option key={v.dictCode} value={v.dictCode}>{v.dictName}</Option>
                                        ))
                                    }
                                </Select>
                                <Search 
                                    placeholder="请搜索"
                                    onSearch={value => that.ChartTree.current.inChart(value.toUpperCase())}
                                />
                            </div>
                            <div id="tree-container">
                                {
                                    Object.keys(brainData).length?
                                    <ChartTree ref={that.ChartTree} data={brainData} nodeDom='#tree-container' />:
                                    null
                                }
                            </div>
                        </TabPane>
                        <TabPane key="2" tab="经销商所属部门层级概览" className="sub-tabpane-item">
                            <div className="department-search-container">
                                <h6>{localStorage.getItem('realname')}</h6>
                                <Search 
                                    onSearch={that.searchDepartment}
                                    style={{width:280}} 
                                    placeholder="请搜索" />
                            </div>
                            <Tree 
                                showLine
                                onExpand={that.handleExpand}
                                expandedKeys={expandedKeys}
                                autoExpandParent={autoExpandParent}
                                className="tree-container"
                            >
                                {
                                    departmentTree.length?
                                    renderTreeNode(departmentTree):
                                    null
                                }
                            </Tree>
                        </TabPane>
                        <TabPane key="3" tab="经销商所在大区分布" className="sub-tabpane-item">
                            <div id="piechart-container">
                                <ChartPie data={chinaCodeTree} nodeDom="piechart-container" />
                            </div>
                        </TabPane>
                    </Tabs>
                </TabPane>
            </Tabs>
        </div>
        </ContentBox>
    )
})
export default Tpl

