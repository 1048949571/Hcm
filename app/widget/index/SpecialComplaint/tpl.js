import './SpecialComplaint.less'
import ThatMain from '../../HOC/That';
import ContentBox from '../../components/Layout';
import { AddIcon } from '../../components/Component';

import Loading from '../../components/Loading';
//import PicturesWall from '../../components/PicturesWall/PicturesWall';
import { Popover,Timeline ,Tabs, Steps, Input, Select, Button, DatePicker, Alert, Table, Pagination, Drawer, Modal, Row, Col, Upload, message, Icon } from 'antd';
const Dragger = Upload.Dragger;

const Tpl = ThatMain((that) => {
    return (
        <ContentBox
            title="维权服务"
            breadcrumbList={['维权服务', '特殊投诉处理']}
            linkList={['', '']}
            className="activity-review-wrapper"
        >
            <div className='specialComplaint'>
                <SpecialComplaint that={that} />
            </div>
        </ContentBox>

    )
})
//上传图片
const PicturesWall = ThatMain((that) => {
    let { previewVisible, previewImage, fileList } = that.state;
    const uploadButton = (
      <div>
        <Icon type="plus" />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    return (
        <div className="clearfix">
            <Upload
                name = 'file'
                action="/hcm/hcmWorkOrder/headImgUpload"
                listType="picture-card"
                fileList={fileList}
                onPreview={that.handlePreview}
                onChange={(info)=>that.handleChange(info)}
                beforeUpload = {that.ImgUpload}
            >
            {fileList.length >= 9 ? null : uploadButton}
            </Upload>
            <Modal visible={previewVisible} footer={null} onCancel={that.handleCancel}>
            <img alt="example" style={{ width: '100%' }} src={previewImage} />
            </Modal>
      </div>

    )
})
//批量导入
const UploadModal = ThatMain((that) => {
    // const { uploading,  fileList, percent } = that.state;
    let {uploadVisible,fileList,uploading } = that.state;
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
            {/* {
                percent ?
                    <Progress percent={percent} />
                    : null
            } */}
        </Modal>
    )
})
//主体
const SpecialComplaint = ThatMain((that) => {
    let {platform,queryTIMEp,queryTIMEn,newlogisticsNum,newcomplainNum,totalArr,tabskey,newZT,Identity,totalElements,historyList,upfileList,Remark,statusAll1,statusAll2,statusAll3,statusAll4, checkAll,selectedRowKeys,shopname,status,shoplink,processing_times,id,Shopicon, platformData, pageNo, pageSize, newPT,newSP,newSJ,querySJ,SCdata } = that.state;
    //选项卡
    const TabPane = Tabs.TabPane;
    const Step = Steps.Step;
    //Select下拉选择
    const Option = Select.Option;
    //日历
    const RangePicker = DatePicker.RangePicker;
    const { MonthPicker } = DatePicker;



    //内容列表
    const columns = [{
        title: '序号',
        dataIndex: 'onumber',
        className:'onumber',
        width:'57px'
    }, {
        title: '商家名称',
        dataIndex: 'shopname',
        render: (text,e) =>{
            return <a href="javascript:;" onClick={()=>{that.showDrawer(e.id,e.shopname,e.status,e.shoplink,e.processing_times,e.platform)}}>{text}</a>
        } ,
        className: 'shopname',
         width:'200px'
    },{
        title: null,
        dataIndex: 'pticon',//平台图标
        className: 'pticon',
        width:'25px'
    },{
        title: null,
        dataIndex: 'ptchat',//聊天
        render: (text,e) =>{
            return <a target="_blank" href={e.shopid == '10003'?'javascript:;':e.platform == 'JD'?'https://jdcs.jd.com/index.action?pid=' + e.shopid:e.platform == '1688'?'https://amos.alicdn.com/getcid.aw?v=3&groupid=0&s=1&charset=utf-8&uid=' + e.shopname + '&site=cnalichn':'https://amos.alicdn.com/getcid.aw?v=3&groupid=0&s=1&charset=utf-8&uid=' + e.shopname + '&site=cntaobao'}>{text}</a>
        } ,
        className: 'ptchat',
        width:'25px'
    }, {
        title: '商品链接',
        dataIndex: 'shoplink',
        render: (text,e) =>{
            return <a target="_blank" href={text} >{text}</a>
        } ,
        className: 'shoplink',
    }, {
        title: '处理状态',
        dataIndex: 'tableStatus',
        className: 'tableStatus',
        width:'100px'
    }, {
        title: null,
        dataIndex: 'clockstatus', 
        render: (text,e) =>{
            return <Popover 
                        content={<div>
                                    <div style={{fontWeight:"bold",marginBottom:'4px'}}>已到达提醒时间</div>
                                    <div>{moment(e.againtime).format('YYYY-MM-DD HH:mm:ss')}<span style={{marginLeft:'10px'}} onClick = {that.bubblehidden}><a href="javascript:;" onClick={()=>{that.showDrawer(e.id,e.shopname,e.status,e.shoplink,e.processing_times,e.platform)}}>查看</a></span></div>
                                </div>
                                }  
                        trigger="click"
                        className='remind'
                        style={{zIndex:9}}
                    >
                        {Identity == 'KEFU'?text:null}
                    </Popover>
            // <a href="javascript:;" onClick={()=>{that.showDrawer(e.id,e.shopname,e.status,e.shoplink,e.processing_times,e.platform)}}>{text}</a>
        } ,
        className: 'clockstatus',
        width:'46px'
    },{
        title: '最后修改时间',
        dataIndex: 'updatetime', 
        className: 'updatetime',
        width:'160px'
    }];
    const rowSelection = {
        selectedRowKeys,
        onChange: (selectedRowKeys) => {
            // console.log(selectedRowKeys)
            that.onTableCheckChange(selectedRowKeys)
        },
    };
    //上传文件
    const props = {
        name: 'file',
        action: '/hcm/hcmWorkOrder/headUpload',
        headers: {
            authorization: 'authorization-text',
        },
        onChange: that.upfilechange,
        beforeUpload: that.upfile
        
    };
    //渲染商家平台下拉菜单
    let platformDatalist = platformData.map((e, i) => {
        return <Option key={i} value={e.dictCode}>{e.dictName}</Option>
    })
    //渲染投诉历史记录
    let HistoryList = historyList.map((e,i)=>{
        return <Timeline.Item key = {i}>
                    <div className='Latesttime'>{moment(e.createtime).format('YYYY-MM-DD HH:mm:ss')} <span>{Identity == 'KEFU'?e.deleteState?<img onClick={()=>that.deleNewesthistory(e.id)} src="../../../img/icon/icon_operating_del.png" alt=""/>:null:null}</span></div>
                    <div className='lszt'>处理状态：{e.status == '1'?'第' + e.sendNumber + '次':null}{tabskey == '1'?statusAll1[e.status]:tabskey == '2'?statusAll2[e.status]:tabskey=='3'?statusAll3[e.status]:statusAll4[e.status]} 
                        {
                            historyList[0].status == '4' && tabskey == '1' || historyList[0].status == '4' && tabskey == '3' || historyList[0].status == '4' && tabskey == '4' || historyList[0].status == '9' && tabskey == '2'?
                                <span><i></i> {e.status == '4' && tabskey == '1' || e.status == '4' && tabskey == '3' || e.status == '4' && tabskey == '4' || e.status == '9' && tabskey == '2'?null:'耗时：'}{e.timeConsuming}</span>
                            :i == '0'?//只有一条数据的时候没有耗时
                                null
                            :<span><i></i> 耗时：{e.timeConsuming}</span>
                        }
                          
                        {/* {historyList[0].status == '4' ?<span><i style={{borderRight:'1px solid #ccc',display:'inline-block',marginTop:'3px',height:'11px',margin:'3px 17px 0 17px'}}></i> {e.status == '4'?null:'耗时：'}{e.timeConsuming}</span>:i == '0'?null:<span><i style={{borderRight:'1px solid #ccc',display:'inline-block',marginTop:'3px',height:'11px',margin:'3px 17px 0 17px'}}></i> 耗时：{e.timeConsuming}</span>} */}
                    </div>
                    {
                        e.image?
                            <div className = 'lsimg'>
                                <ul>
                                    {e.image.split(',').map((el,ii)=>{
                                        return <li key= {ii}><img onClick={()=>that.handleComImageClick({bl:true,urls:e.image.split(','),index:ii,close:true})} src={el} alt="" /></li>
                                    })}
                                </ul>
                            </div>
                        :null
                    }
                    <div className = 'lsbz'>备注：&nbsp;{e.remark?e.remark:'无'}</div>
                    {
                        e.file?
                            <div className = 'lsfj'> 附件：{
                                e.file.split(',').map((el,ii)=>{
                                    return <span key={ii} style={{position:'relative'}}><img style={{position:'absolute',top:'1px'}} src="../../../img/icon1.1/Enclosure.svg" alt=""/><a  href={'/hcm/hcmWorkOrder/downLoadFile?filename=' + el.split('/////')[0]} style={{marginRight:'10px',marginLeft:'20px'}}>{el.split('/////')[1]}</a>
                                    </span>
                                })
                            }</div>
                        :null
                    }
                    {
                        tabskey == '2'?e.logistics?(JSON.parse(e.logistics).status) == '0'?
                        <div className='logistics'>
                            <div className='logisticsTitle'>
                                <img src="../../../img/icon1.1/Logistics.png" alt=""/>
                                <span className='logisticsInfo'>物流信息</span>
                                <span className='courierNum'>物流单号：{e.logisticsNumber}</span>
                            </div>
                            <Timeline  className='logisticsContent loglist'>
                                {JSON.parse(e.logistics).result.list.map((el,it)=>{
                                    return  <Timeline.Item key={it}>
                                                <p className='logisticsContentInfo'>{el.status}</p>
                                                <p className = 'logisticsContentTime'>{el.time}</p>
                                            </Timeline.Item>
                                
                                })}
                                
                            </Timeline> 
                            <div className='openret' style={{display:'flex',justifyContent:'center'}}>
                                <a onClick = {that.openLogistics} href="javascript:;">展开 </a><span style = {{margin:'4px 0 0 7px'}}><img className='active' src="../../../img/icon1.1/open.png" alt=""/><img  src="../../../img/icon1.1/retract.png" alt=""/></span>
                            </div>
                        </div>
                        
                    : <div>快递单号错误</div>:null:null
                    }
                    {
                        tabskey == '2'?e.details == '未获取到对应品牌方的投诉信息'?<div>未获取到平台处理详情</div>:e.details?
                            <div className='logistics'>
                                <div className='logisticsTitle'>
                                    <img src="../../../img/icon1.1/platform.png" alt=""/>
                                    <span className='logisticsInfo'>平台处理详情</span>
                                    <span className='courierNum'>投诉单号：{e.details.data.batchId}</span>
                                </div>
                                <Timeline className='logisticsContent Complaintnumber'>
                                    {e.details.data.log.map((el,it)=>{
                                        return  <Timeline.Item key={it}>
                                                    <p className='logisticsContentInfo'>{el.type}</p>
                                                    {/* <p className = 'logisticsContentTime'>{el.time}</p> */}
                                                </Timeline.Item>
                                    
                                    })}
                                    
                                </Timeline>
                                
                            </div>
                            
                        :null:null
                    }
                    {e.againtime?<div><span style={{color:'#000'}}>下次跟进时间：</span>{moment(e.againtime).format('YYYY-MM-DD HH:mm:ss')}</div>:null}
                </Timeline.Item>
    })
    
    //内容区共用搜索
    const content_search = (
        <div>
            <div className='search_row' style={{ height: '74px', padding: '23px 24px 0px 24px' }}>
                <div className='ser_row'>
                    商家名称
                    <Input placeholder="请输入" value={querySJ} onChange={that.querysj} className='sj' maxLength='24'/>
                </div>
                <div className='ser_row' >
                    处理状态
                    {
                        tabskey == '1'?
                            <Select  labelInValue defaultValue={{ key: '请选择' }} style={{ width: 120 }} onChange={that.queryzt}>
                                <Option value="请选择">请选择</Option>
                                <Option value="0">邮件待发送</Option>
                                <Option value="1">邮件已发送</Option>
                                <Option value="2">邮件已驳回</Option>
                                <Option value="3">邮件已回复</Option>
                                <Option value="4">完结</Option>
                            </Select>
                        :null
                    }{
                        tabskey == '2'?
                            <Select  labelInValue defaultValue={{ key: '请选择' }} style={{ width: 120 }} onChange={that.queryzt}>
                                <Option value="请选择">请选择</Option>
                                <Option value="0">购买中</Option>
                                <Option value="1">已购买，发货中</Option>
                                <Option value="2">卖家已发货</Option>
                                <Option value="3">未发货：申请退款中</Option>
                                <Option value="4">未发货：举报中</Option>
                                <Option value="5">退款完成</Option>
                                <Option value="6">发错货：申请退/换货中</Option>
                                <Option value="7">已到货，报告制作中</Option>
                                <Option value="8">报告已提交平台处理</Option>
                                <Option value="9">完结</Option>
                            </Select>
                        :null
                    }{
                        tabskey == '3'?
                            <Select  labelInValue defaultValue={{ key: '请选择' }} style={{ width: 120 }} onChange={that.queryzt}>
                                <Option value="请选择">请选择</Option>
                                <Option value="0">通知进行中</Option>
                                <Option value="1">已通知待整改</Option>
                                <Option value="2">卖家拒绝整改</Option>
                                <Option value="3">卖家已整改</Option>
                                <Option value="4">完结</Option>
                            </Select>
                        :null
                    }{
                        tabskey == '4'?
                            <Select  labelInValue defaultValue={{ key: '请选择' }} style={{ width: 120 }} onChange={that.queryzt}>
                                <Option value="请选择">请选择</Option>
                                <Option value="0">举报中</Option>
                                <Option value="1">已举报</Option>
                                <Option value="2">举报成功</Option>
                                <Option value="3">举报失败</Option>
                                <Option value="4">完结</Option>
                            </Select>
                        :null
                    }
                </div>
                <div className='ser_row' style={{ display: 'flex' }}>
                    <div style={{ width: '86px', fontSize: '14px', float: 'left', lineHeight: '34px' }}>最后修改时间</div>
                    <RangePicker
                    allowClear={false}
                        // rangesranges={{ Today: [moment(), moment()], 'This Month': [moment(), moment().endOf('month')] }}
                        onChange={that.selecttime}
                        // defaultValue = {[moment().subtract(3, 'months'), moment()]}
                        value = {[moment(queryTIMEp,'YYYY-MM-DD'),moment(queryTIMEn,'YYYY-MM-DD')]}
                    />
                </div>
            </div>
            <div className='search_row' style={{ height: '52px', padding: '0 24px' }}>
                <div className='ser_row'>
                    商家平台
                    <Select labelInValue defaultValue={{ key: '请选择' }} style={{ width: 120 }} onChange={that.querypt}>
                        <Option value="请选择">请选择</Option>
                        {platformDatalist}
                    </Select>
                </div>
                <div className='ser_btn'>
                    <Button type="primary" onClick={()=>that.querycontent('query')} ghost>查询</Button>
                </div>
            </div>
            <div style={{ height: '20px', width: '100%' }}></div>
        </div>
    )
    //操作按钮
    const btngroup = (
        <div className='content_Sbtn'>
            <Button className=' btn1-main' onClick={() => that.showModal()} style={{ marginRight: '10px', color: '#fff' }} ><AddIcon style={{ paddingRight: '8px' }} />新增</Button>
            <Button onClick={() => that.DeleteComplaint()} style={{ marginRight: '10px' }} >批量删除</Button>
            <Button onClick={() => that.onuploadVisible(true)} style={{ marginRight: '10px' }} >批量导入</Button>
            <a href={'/hcm/hcmWorkOrder/downLoadFile?filename=' + (tabskey == '1'?'ceshi/1544405931287_20181128y.xlsx' : tabskey == '2'? 'ceshi/1544405999959_20181128g.xlsx' : tabskey == '3'?'ceshi/1544406027106_20181128t.xlsx':'ceshi/1544406048585_20181128z.xlsx')}><Button  style={{ marginRight: '10px' }} >导入模板下载</Button></a>
        </div>
    )
    //非客服历史记录
    const hisList = (
        <Timeline className='kefuHistorical'>        
            {HistoryList}
        </Timeline>
    )
    //客服历史记录及新增
    const KEFUhisList = (
        <Tabs
                    defaultActiveKey="1"
                    onChange={that.Drawertabschange}
                    animated={false}
                    className='DrawerTabs'
                >
                    <TabPane tab="更改状态" key="1" className='newAHistory'>
                        <div className='newstate'>
                            <div className='newstate_left' >处理状态<span style={{color:'red'}}>*</span></div>
                            {
                                tabskey == '1'?
                                    <Select labelInValue defaultValue={{ key: status }} style={{ width: 195 }} onChange={that.newState}>
                                        <Option value="0">邮件待发送</Option>
                                        <Option value="1">邮件已发送</Option>
                                        <Option value="2">邮件已驳回</Option>
                                        <Option value="3">邮件已回复</Option>
                                        <Option value="4">完结</Option>
                                    </Select>
                                :null
                            }{
                                tabskey == '2'?
                                    <Select labelInValue defaultValue={{ key: status }} style={{ width: 195 }} onChange={that.newState}>
                                        <Option value="0">购买中</Option>
                                        <Option value="1">已购买，发货中</Option>
                                        <Option value="2">卖家已发货</Option>
                                        <Option value="3">未发货：申请退款中</Option>
                                        <Option value="4">未发货：举报中</Option>
                                        <Option value="5">退款完成</Option>
                                        <Option value="6">发错货：申请退/换货中</Option>
                                        <Option value="7">已到货，报告制作中</Option>
                                        <Option value="8">报告已提交平台处理</Option>
                                        <Option value="9">完结</Option>
                                    </Select>
                                :null
                            }{
                                tabskey == '3'?
                                    <Select labelInValue defaultValue={{ key: status }} style={{ width: 195 }} onChange={that.newState}>
                                        <Option value="0">通知进行中</Option>
                                        <Option value="1">已通知待整改</Option>
                                        <Option value="2">卖家拒绝整改</Option>
                                        <Option value="3">卖家已整改</Option>
                                        <Option value="4">完结</Option>
                                    </Select>
                                :null
                            }{
                                tabskey == '4'?
                                    <Select labelInValue defaultValue={{ key: status }} style={{ width: 195 }} onChange={that.newState}>
                                        <Option value="0">举报中</Option>
                                        <Option value="1">已举报</Option>
                                        <Option value="2">举报成功</Option>
                                        <Option value="3">举报失败</Option>
                                        <Option value="4">完结</Option>
                                    </Select>
                                :null
                            }
                            
                        </div>
                        {
                            tabskey == '2' && newZT == '2'?<div className='newstate'>
                                                <div className='newstate_left'>物流单号<span style={{color:'red'}}>*</span></div>
                                                <Input style={{width:'195px'}} placeholder="请输入" value={newlogisticsNum} onChange={that.newLogisticsNum} className='' maxLength='24'/>
                                            </div>:null
                        }
                        
                        {
                            tabskey == '2' && newZT == '8' && platform == 'TB' || tabskey == '2' && newZT == '8' && platform == 'TM'?<div className='newstate'>
                                                <div className='newstate_left'>投诉单号*</div>
                                                <Input style={{width:'195px'}} placeholder="请输入" value={newcomplainNum} onChange={that.newComplainNum} className='' maxLength='24'/>
                                            </div>:null
                        }
                        
                        <div className='newstate'>
                            <div className='newstate_left'>下次跟进时间</div>
                            <DatePicker
                                // showTime
                                disabled = {newZT == '4'?true:false}
                                format="YYYY-MM-DD HH:mm:ss"
                                placeholder="请选择时间"
                                onChange={that.nexttime}
                                onOk={that.onOk}
                                disabledDate={(currentDate) => currentDate && currentDate < moment().subtract(1, 'days')}
                                showTime={{ defaultValue: moment(moment().format('HH:mm:ss'), 'HH:mm:ss') }}
                            />
                        </div>
                        <div className='newstate newImg'>
                            <div className='newstate_left' style={{lineHeight:'24px'}}>上传截图</div>
                            <PicturesWall  that={that} />
                        </div>
                        <div className='newstate Attachment'>
                            <div className='newstate_left' >上传附件</div>
                            <Upload 
                            {...props}
                            fileList = {upfileList}
                            >
                                <Button className='imgupload'>
                                    <Icon type="upload" />选择文件
                                </Button>
                            </Upload>
                        </div>
                        <div className='newstate'>
                            <p className='tips'>支持扩展名：xls.xlsx.ppt.rar.zip.doc.docx.pdf.文件不得超过20M。</p>

                        </div>
                        <div className='newstate'>
                            <div className='newstate_left' style={{lineHeight:'24px'}} >备注</div>
                            <textarea name="" id="" cols="63" rows="6" maxLength='200' value={Remark} onChange={that.remark}></textarea>
                        </div>
                        <div className='newstate'>
                            <div className='newbutton' >
                                <Button onClick={that.onClose} style={{ float: 'right' }}>取消</Button>
                                <Button onClick={that.newHistory} className='btn2-main' type="primary" style={{ float: 'right', marginRight: 20 }}>确定</Button>
                            </div>

                        </div>
                    </TabPane>
                    
                    <TabPane tab="历史记录" key="2" className='Historical'>
                        <Timeline>
                            
                            {HistoryList}

                        </Timeline>
                    </TabPane>
                </Tabs>
            
    )
    const bubble = (
        <div>
          <p>{shopname}</p>
          
        </div>
    );
    return (
        <div className='content SpecialComplaint'>
            {/* 抽屉 */}
            <Drawer
                title={null}
                placement="right"
                closable={false}
                onClose={that.onClose}
                // maskClosable = {false}
                visible={that.state.Draweroff}
                className='SpecialComplaint_Drawer'
                closable={true}
                destroyOnClose = {true}
                // zIndex = {1030}
            >
                <div className='D_title'>
                    <Row className='D_title_rowt'>
                        <Col span={9} className='D_title_row_c9 '>
                        <Popover content={bubble} >
                            <h3 className='titleowhidenn' style={{maxWidth:'243px'}}>{shopname}</h3>
                        </Popover>
                            <span style={{float:'left'}}>{Shopicon}</span>
                            {/* <h3 >{shopname}<span>{Shopicon}</span></h3> */}
                        </Col>
                        <Col span={15} className='D_title_row_c15' style={{paddingLeft:'35px'}}>
                            <p>当前状态：{tabskey == '1'?statusAll1[status]:tabskey == '2'?statusAll2[status]:tabskey=='3'?statusAll3[status]:statusAll4[status]}</p>
                        </Col>
                    </Row>
                    <Row className='D_title_rowa'>
                        <Col span={17} className='D_title_row_c15' style={{}}>
                            <span style={{ float: 'left' }}>商品链接：</span><a style={{WebkitBoxOrient:'vertical'}} target="_blank" href={shoplink}>{shoplink}</a>
                        </Col>
                        <Col span={4} className='D_title_row_c9' style={{ float: 'right' }}>
                            <p>第<span>(</span><span>{processing_times}</span>)<span></span>次处理</p>
                        </Col>
                    </Row>
                </div>
                
                {Identity == 'KEFU'?null:hisList}
                {Identity == 'KEFU'?KEFUhisList:null}
                
            </Drawer>
            {/* 新增弹窗 */}
            <Modal
                title="新增"
                visible={that.state.NewComplaint}
                onOk={that.Newcomplaints}
                onCancel={that.Closecomplaints}
                className='newC'
                destroyOnClose={true}
            >
                <div className='new_pss'>
                    <div style={{ width: '70px', float: 'left' }}><span >平台：</span></div>

                    <Select labelInValue defaultValue={{ key: '请选择' }} style={{ width: 120 }} onChange={that.newAchange}>
                        <Option value="请选择">请选择</Option>
                        {platformDatalist}
                    </Select>
                </div>
                <div className='new_pss'>
                    <div style={{ width: '70px', float: 'left' }}><span >商家名称：</span></div>
                    <Input placeholder="请输入（阿里系请填写旺旺名称）" value={newSJ} onChange={that.newsj} style={{ width: '300px' }} maxLength='24'/>
                </div>
                <div className='new_pss'>
                    <div style={{ width: '70px', float: 'left' }}><span >商品链接：</span></div>
                    <Input placeholder="请输入" value={newSP} onChange={that.newsp} style={{ width: '300px' }} maxLength='200'/>
                </div>
            </Modal>
            {/* 批量导入 */}
            <UploadModal that={that} />
            
            <Tabs defaultActiveKey="1"
                animated={false}
                onChange={that.tabsKey}
            >
                <TabPane tab={'邮件处理(' + totalArr[0] + ')'} key="1">
                    {/* 内容区搜索 */}
                    {content_search}
                    <div className='content_S' >
                        {/* 搜索下面button按钮客服启用非客服隐藏 */}
                        {Identity == 'KEFU'?btngroup:null}
                        {/* button下选择提示框客服状态下启用 */}
                        {
                            Identity == 'KEFU'?<div >
                                                    <Alert className='checkNumber' message={<div>共 <a>{totalElements}</a> 项，已选择 <a>{selectedRowKeys.length == 0 ? 0 :checkAll == true ? totalElements :selectedRowKeys.length}</a> 项 <a onClick={() => that.DelecheckAll(true)}>勾选全部</a>/<a onClick={() => that.cancelcheckAll(false)}>取消勾选</a></div>} type="info" showIcon />
                                                </div>:null
                        }
                        {/* columns内容title SCdata数据内容，rowSelection checked的客服启用 */}
                        <Table pagination={false} rowSelection={Identity == 'KEFU'?rowSelection:null} columns={columns} dataSource={SCdata} />
                        <div className='footer'>
                            <div className='info'>
                            </div>
                            <Pagination total={totalElements} pageSize={pageSize} current={pageNo} showSizeChanger showQuickJumper onChange = {that.changePagination} onShowSizeChange={that.onPaginationSize}/>
                        </div>
                    </div>
                </TabPane>
                <TabPane tab={'购买鉴定(' + totalArr[1] + ')'} key="2">
                    {/* 内容区搜索 */}
                    {content_search}
                    <div className='content_S' >
                        {/* 搜索下面button按钮客服启用非客服隐藏 */}
                        {Identity == 'KEFU'?btngroup:null}
                        {/* button下选择提示框客服状态下启用 */}
                        {
                            Identity == 'KEFU'?<div >
                                                    <Alert className='checkNumber' message={<div>共 <a>{totalElements}</a> 项，已选择 <a>{selectedRowKeys.length == 0 ? 0 :checkAll == true ? totalElements :selectedRowKeys.length}</a> 项 <a onClick={() => that.DelecheckAll(true)}>勾选全部</a>/<a onClick={() => that.cancelcheckAll(false)}>取消勾选</a></div>} type="info" showIcon />
                                                </div>:null
                        }
                        {/* columns内容title SCdata数据内容，rowSelection checked的客服启用 */}
                        <Table pagination={false} rowSelection={Identity == 'KEFU'?rowSelection:null} columns={columns} dataSource={SCdata} />
                        <div className='footer'>
                            <div className='info'>
                            </div>
                            <Pagination total={totalElements} pageSize={pageSize} current={pageNo} showSizeChanger showQuickJumper onChange = {that.changePagination} onShowSizeChange={that.onPaginationSize}/>
                        </div>
                    </div>
                </TabPane>
                <TabPane tab={'通知处理(' + totalArr[2] + ')'} key="3">
                        {/* 内容区搜索 */}
                    {content_search}
                    <div className='content_S' >
                        {/* 搜索下面button按钮客服启用非客服隐藏 */}
                        {Identity == 'KEFU'?btngroup:null}
                        {/* button下选择提示框客服状态下启用 */}
                        {
                            Identity == 'KEFU'?<div >
                                                    <Alert className='checkNumber' message={<div>共 <a>{totalElements}</a> 项，已选择 <a>{selectedRowKeys.length == 0 ? 0 :checkAll == true ? totalElements :selectedRowKeys.length}</a> 项 <a onClick={() => that.DelecheckAll(true)}>勾选全部</a>/<a onClick={() => that.cancelcheckAll(false)}>取消勾选</a></div>} type="info" showIcon />
                                                </div>:null
                        }
                        {/* columns内容title SCdata数据内容，rowSelection checked的客服启用 */}
                        <Table pagination={false} rowSelection={Identity == 'KEFU'?rowSelection:null} columns={columns} dataSource={SCdata} />
                        <div className='footer'>
                            <div className='info'>
                            </div>
                            <Pagination total={totalElements} pageSize={pageSize} current={pageNo} showSizeChanger showQuickJumper onChange = {that.changePagination} onShowSizeChange={that.onPaginationSize}/>
                        </div>
                    </div>
                </TabPane>
                <TabPane tab={'直接举报(' + totalArr[3] + ')'} key="4">
                        {/* 内容区搜索 */}
                    {content_search}
                    <div className='content_S' >
                        {/* 搜索下面button按钮客服启用非客服隐藏 */}
                        {Identity == 'KEFU'?btngroup:null}
                        {/* button下选择提示框客服状态下启用 */}
                        {
                            Identity == 'KEFU'?<div >
                                                    <Alert className='checkNumber' message={<div>共 <a>{totalElements}</a> 项，已选择 <a>{selectedRowKeys.length == 0 ? 0 :checkAll == true ? totalElements :selectedRowKeys.length}</a> 项 <a onClick={() => that.DelecheckAll(true)}>勾选全部</a>/<a onClick={() => that.cancelcheckAll(false)}>取消勾选</a></div>} type="info" showIcon />
                                                </div>:null
                        }
                        {/* columns内容title SCdata数据内容，rowSelection checked的客服启用 */}
                        <Table pagination={false} rowSelection={Identity == 'KEFU'?rowSelection:null} columns={columns} dataSource={SCdata} />
                        <div className='footer'>
                            <div className='info'>
                            
                            </div>
                            <Pagination total={totalElements} pageSize={pageSize} current={pageNo} showSizeChanger showQuickJumper onChange = {that.changePagination} onShowSizeChange={that.onPaginationSize}/>
                        </div>
                    </div>
                </TabPane>

            </Tabs>


        </div>
    )
})



export default Tpl