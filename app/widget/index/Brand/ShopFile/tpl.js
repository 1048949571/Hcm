
import ThatMain from '../../../HOC/That';
import SetTable from './SetTable';
import { CopyToClipboard } from 'react-copy-to-clipboard';
// import Copyright from "../../../components/Copyright";
import platform  from '../../../components/platform'
import ShopDetail from '../ShopDetail/main'
import ContentBox from '../../../components/Layout'
import { AddIcon } from '../../../components/Component';

import { Breadcrumb,message,Tooltip, Button, Select, Table, Progress, Input, Icon, Alert, Modal, Upload, Pagination } from 'antd';
const Option = Select.Option;
const Dragger = Upload.Dragger;

const Tpl = ThatMain((that) => {
    let {dataList,platForm, formatColumn,checkAll, selectedRowKeys, setTableVisible,dealername, isauthed, platform_code, shopname, pageNo, pageSize, totalElements } = that.state;
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
        that.state[fieldName]&&that.state[fieldName].length?
        <Icon
            type="close-circle"
            onClick={()=>that.handleClearIconClick(fieldName)}
            style={clearIconStyle}
        />
        :null
    )
    return (
        <ContentBox
        breadcrumbList={['店铺档案']}
        linkList={['']}
        history={that.props.history}
        >
        <div className='ShopFile'>
            {/* <div className='Breadcrumb'>
                <Breadcrumb>
                    
                    <Breadcrumb.Item>
                        <a href='/index.html#/PriceNotice'>售价公示</a>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>{name}</Breadcrumb.Item>
                </Breadcrumb>
            </div> */}
           
            <div className='search-box'>
                <div className='input-box'>
                    <div className='item'>
                        <span className='lab'>店铺名称:</span>
                        <Input 
                            placeholder='请输入'
                            onChange={(e) => that.onChange(e, 'shopname')} 
                            value={shopname} 
                            suffix={clearIcon('shopname')} 
                            className='ipt' />
                    </div>
                    <div className='item'>
                        <span className='lab'>经销商名称:</span>
                        <Input 
                            placeholder='请输入'
                            onChange={(e) => that.onChange(e, 'dealername')} 
                            value={dealername} 
                            suffix={clearIcon('dealername')} 
                            className='ipt' />
                    </div>
                    <div className='item'>
                        <span className='lab'>平台:</span>
                        <Select value={platform_code} style={{ width: 350 }} onChange={(e) => that.onsChange(e, 'platform_code')} >
                            <Option  value={null}>全部</Option>
                            {
                                platForm.map((item, index) => {
                                    return (
                                        <Option key={index} value={item.dictCode}>{item.dictName}</Option>
                                    )
                                })
                            }
                        </Select>
                       
                    </div>
                </div>
                <div className='input-box'>
                    <div className='item'>
                        <span className='lab'>应用订购:</span>
                        <Select value={isauthed} style={{ width: 350 }} onChange={(e) => that.onsChange(e, 'isauthed')} >
                            <Option  value={null}>全部</Option>
                            <Option  value={'NOTAUTH'}>未订购</Option>
                            <Option  value={'AUTHED'}>已订购</Option>
                        </Select>
                       
                    </div>
                    
                    <div style={{ justifyContent: 'flex-end' }} className='item'>
                        <Button className='btn6 seh' onClick={e => that.onSearch()}>查询</Button>
                    </div>
                </div>
            </div>
            <div className='content'>
                <div className='button-box'>
                    <div className='action'>
                        <a href={`index.html#/ActionShopFile/add`}>
                            <Button className="btn1-main" type="primary"><AddIcon style={{paddingRight:'8px'}} />新增</Button>
                        </a>
                        <Button className="btn1-sub" onClick={()=>that.rmAll()}>批量删除</Button>
                       
                        <Button style={{marginRight:10}} href={`/hcm/hcmShop/exportExcelShops?dealername=${dealername||''}&isauthed=${isauthed||''}&platform_code=${platform_code||''}&shopname=${shopname||''}`} className="btn1-sub" >下载数据</Button>
                        
                        <Button className="btn1-sub" onClick={() => that.onuploadVisible(true)}>批量导入</Button>
                        
                        <Button href='/hcm/hcmShop/exportExcel' className="btn1-sub" icon="download">导入模版下载</Button>
                        
                    </div>
                    <div className='info'>
                        <Tooltip placement="top" title={'店铺安装后台应用后才能才能查看店铺的订单数据，请尽快邀请店铺订购'}>
                            <Button onClick={() => that.inviteLinkStatus(true)}>应用订购链接</Button>
                        </Tooltip>
                        <a style={{ margin: '0' }} onClick={that.ProduHistory}>
                            <Button className="btn1-sub" >变更历史</Button>
                        </a>
                        <Icon onClick={() => that.onShowSetTable(true)} type="setting" />
                    </div>
                </div>
                <div>
                <Alert message={<div>共 <a>{totalElements}</a> 项，已选择 <a>{checkAll ? totalElements : selectedRowKeys.length}</a> 项 <a onClick={() => that.checkAll(true)}>勾选全部</a>/<a onClick={() => that.checkAll(false)}>取消勾选</a></div>} type="info" showIcon />
                </div>
                {
                    formatColumn.length ?
                        <React.Fragment>
                            <Table rowKey='shopdealerid' pagination={false} scroll={ { x: (formatColumn.length-1) * 230 }} rowSelection={rowSelection} columns={formatColumn.sort((a,b)=>a.sort-b.sort)} dataSource={dataList} />
                            <div className='footer'>
                                <div className='info'>
                                    {`共 ${totalElements} 条记录 `}
                                    &nbsp;&nbsp;
                                    {`第  ${pageNo}  / ${Math.ceil(totalElements / pageSize)} 页`}
                                </div>
                                <Pagination pageSize={pageSize} current={pageNo} total={totalElements} onChange={that.changePagination} onShowSizeChange={that.onPaginationSize} showSizeChanger showQuickJumper />
                            </div>
                        </React.Fragment>
                    : null
                }

            </div>
            <SetTable ref={that.ShopFile_SetTable} onShow={(bl,type) => that.onShowSetTable(bl,type)} visible={setTableVisible} params={that.props.match.params} />
            {/* <Copyright clazzName='copyright' /> */}
            <UploadModal that={that} />
            <InviteLink that={that} />
            <ErrorList that={that} />
            
            <ShopDetail  inviteLinkStatus={() => that.inviteLinkStatus(true)} ref={that.shopDetail} />
        </div>
        </ContentBox>
    )
})

export default Tpl

const UploadModal = ThatMain((that) => {
    const { uploading, uploadVisible, fileList, percent } = that.state;
    return (
        <Modal
            title="批量导入"
            visible={uploadVisible}
            maskClosable={false} 
            onCancel={() => that.onuploadVisible(false)}
            footer={[
                <Button key="back2" className="btn2-main upload-demo-start" type="primary" onClick={() => that.handleUpload()} disabled={fileList.length === 0} loading={uploading} >
                    {uploading ? '上传中' : '上传'}
                </Button>,
                <Button className="btn2-sub noneFloat" key="back" onClick={() => that.onuploadVisible(false)}>取消</Button>,
            ]}
        >

            <Dragger multiple={false} {...that.propsUpload()}>
                <p className="ant-upload-drag-icon">
                    {/* <Icon type="file-excel" /> */}
                    <img style={{paddingTop:20}} src='../../../img/upload_files.png'/>
                </p>
                <p className="ant-upload-text">点击这里选择文件上传</p>
                <p className="ant-upload-hint">支持扩展名：.xls .xlsx</p>


            </Dragger>
            {
                percent ?
                    <Progress percent={percent} />
                    : null
            }
        </Modal>
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

const ErrorList = ThatMain((that) => {
    let { errorListStatus,errorList={data:[],message:''}} = that.state;
    const columns = [{
        title: '平台',
        dataIndex: 'platformCode',
        key: 'platformCode',
        width:'10%',
        render:(text,item,index)=>platform(text)
      }, {
        title: '店铺名称',
        dataIndex: 'shopName',
        width:'10%',
        key: 'shopName',
      }, {
        title: '经销商名称',
        dataIndex: 'dealer_name',
        key: 'dealer_name',
        width:'26%'
    }, {
        title: '店铺首页地址',
        dataIndex: 'shopUrl',
        key: 'shopUrl',
        width:'40%'
    }, {
        title: '错误说明',
        dataIndex: 'err_info',
        key: 'err_info',
        className:'err',
        width:'14%'
    }];
    return (
        <Modal
            title={'导入结果说明'}
            visible={errorListStatus}
            maskClosable={false} 
            footer={[
                <Button key="back" onClick={() => that.errorListStatus(false)}>关闭</Button>,
            ]}
            className='errorListbox'
            onCancel={() => that.errorListStatus(false)}
        >
            <div className='errorList'>
                <Alert message={errorList.message} type="error" />
                <Table rowKey={record=>record.shopUrl+record.dealerid+record.shopName} pagination={false} columns={columns} dataSource={errorList.data} />
            </div>
        </Modal>)
})