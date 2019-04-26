
import ThatMain from '../../../HOC/That';
import ContentBox from '../../../components/Layout';
import { Modal,Row,Col, Input, Button, Select, Alert, Table, Pagination, Icon } from 'antd';
const Option = Select.Option;

const Tpl = ThatMain((that) => {
    let { pageNo, pageSize, totalNum, checkAll, platform_code, shopname, username, status, selectedRowKeys, dataList } = that.state;
    const rowSelection = {
        selectedRowKeys,
        onChange: (selectedRowKeys) => that.onTableCheckChange(selectedRowKeys),
    };
    const clearIconStyle = {
        width: '14px',
        height: '14px',
        opacity: 0.25,
        cursor: 'pointer'
    }
    const clearIcon = fieldName => (
        that.state[fieldName] && that.state[fieldName].length ?
            <Icon
                type="close-circle"
                onClick={() => that.handleClearIconClick(fieldName)}
                style={clearIconStyle}
            />
            : null
    )
    return (
        <ContentBox
            breadcrumbList={['用户管理', '店铺账号']}
            linkList={['', '']}
            history={that.props.history}
        >
            <div className='shoplist'>

                <div className='content'>
                    <div className='search-box'>
                        <div className='input-box'>
                            <div  style={{ position: 'relative' }} id="platform_code" className='item'>
                                <span className='lab'>平台名称:</span>
                                <Select 
                                    style={{ width: '100%' }} 
                                    value={platform_code} 
                                    onChange={(e) => that.handleChange(e, 'platform_code')} 
                                    getPopupContainer={() => document.getElementById('platform_code')}
                                >
                                    <Option value={null}>全部</Option>
                                    {
                                        can.platform.map((item,index)=>{
                                            return(
                                                <Option key={index} value={item.dictCode}>{item.dictName}</Option>
                                            )
                                        })
                                    }
                                </Select>
                            </div>

                            <div className='item'>
                                <span className='lab'>店铺名称:</span>
                                <Input onChange={(e) => that.chSearchIpt(e, 'shopname')} value={shopname} suffix={clearIcon('shopname')} className='ipt' />
                            </div>
                            <div className='item'>
                                <span className='lab'>用户名:</span>
                                <Input onChange={(e) => that.chSearchIpt(e, 'username')} value={username} suffix={clearIcon('username')} className='ipt' />
                            </div>
                        </div>
                        <div className='input-box'>

                            <div style={{ position: 'relative' }} id="status" className='item'>
                                <span className='lab'>状态:</span>
                                <Select style={{ width: '100%' }} value={status} onChange={(e) => that.handleChange(e, 'status')} getPopupContainer={() => document.getElementById('status')}>
                                    <Option value={null}>全部</Option>
                                    <Option value={1}>启用</Option>
                                    <Option value={0}>禁用</Option>
                                </Select>
                            </div>
                            <div style={{ justifyContent: 'flex-end' }} className='item'>
                                <Button onClick={e => that.onSearch()}>查询</Button>
                            </div>
                        </div>
                    </div>
                    <div className='list-box'>
                        <div>
                            <div>
                                <Button onClick={() => that.allStopStart(1)} style={{ marginRight: '10px' }} >批量启用</Button>
                                <Button onClick={() => that.allStopStart(0)} type="danger">批量停用</Button>
                            </div>
                            <div style={{ padding: '10px 0px' }}>
                                <Alert message={<div>共 <a>{totalNum}</a> 项，已选择 <a>{checkAll ? totalNum : selectedRowKeys.length}</a> 项 <a onClick={() => that.checkAll(true)}>勾选全部</a>/<a onClick={() => that.checkAll(false)}>取消勾选</a></div>} type="info" showIcon />
                            </div>

                            <Table rowKey='id' pagination={false} rowSelection={rowSelection} columns={that.formatColumn()} dataSource={dataList} />
                        </div>
                        <div className='footer'>
                            <div className='info'>
                                {`共 ${totalNum} 条记录 `}
                                &nbsp;&nbsp;
                            {`第  ${pageNo}  / ${Math.ceil(totalNum / pageSize)} 页`}
                            </div>
                            <Pagination pageSize={pageSize} current={pageNo} total={totalNum} onChange={that.changePagination} onShowSizeChange={that.onPaginationSize} showSizeChanger showQuickJumper />
                        </div>
                    </div>
                </div>
            </div>
            <EditShop that={that} />
        </ContentBox>
    )
})
const EditShop= ThatMain((that) => {
    let {editShop,targetData,password} = that.state;
    return (
        <Modal
            maskClosable={false}
            title={'编辑'}
            okButtonProps={{className:'btn2-main'}}
            cancelButtonProps={{className:'btn2-sub'}}
            onCancel={() => that.stateEditService(false)}
            onOk={that.onSubMit}
            visible={editShop}
            
        >
            <div className='edit-shop'>
                <Row style={{marginBottom:20}} type="flex" align='middle'>
                    <Col className='text-right' span={6}>店铺名称：</Col>
                    <Col span={15}>
                        <Input disabled value={targetData.shopname} />
                    </Col>
                </Row>
                <Row style={{marginBottom:20}} type="flex" align='middle'>
                    <Col className='text-right' span={6}>用户名：</Col>
                    <Col span={15}>
                        <Input disabled value={targetData.username} />
                    </Col>
                </Row>
                <Row style={{marginBottom:5}} type="flex" align='middle'>
                    <Col className='text-right' span={6}><span className='required'>密码：</span></Col>
                    <Col span={15}>
                        <Input value={password} onChange={e=>that.chSearchIpt(e,'password')} type='password' />
                    </Col>
                </Row>
                <Row style={{marginBottom:5,fontSize:12}} type="flex" align='middle'>
                    <Col push={6} span={15}>
                        6 - 16  个字符，区分大小写。初始密码：123456
                    </Col>
                </Row>
            </div>

        </Modal>
    )
})
export default Tpl