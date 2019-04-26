
import ThatMain from '../../../HOC/That';
import ContentBox from '../../../components/Layout';
import { Card, Button, Select, Alert, Icon,Table,DatePicker,Pagination } from 'antd';
const Option = Select.Option;
const {RangePicker } = DatePicker;
import {info} from './CONFIG';
const Tpl = ThatMain((that) => {
    let {type,form,header,list,pageNumber,pageSize,totalElements,date} = that.state;

    return (
        <ContentBox
            breadcrumbList={['数据中心',info[type][form].name]}
            linkList={['','']}
            history={that.props.history}
        >
            <div className='orderanalysis'>
                <div className='content'>
                    <Card
                        className='analysis-box'
                        extra={''}
                        bodyStyle={{ padding: 16, flex: '1 0',display: 'flex',flexDirection: 'column', }}
                        hoverable={true}
                        title={info[type][form].title}
                    >
                        <div className='analysis-sheader'>
                            {
                                form == 'shop' ?
                                <p className='msg'>
                                    <img src="../../../../img/laba.png" style={{margin: "0 5px",float: "left"}} alt=""/>
                                    <b>灰色店铺为未安装后台应用的店铺。店铺数据某日为空，可能是店铺没有及时提报当日的销售数据，可以由店铺补报后查看.</b>
                                </p>
                                :null
                            }
                            <div className='action-box'>
                                <div>
                                    数据时间 &nbsp;
                                    <RangePicker 
                                        mode= {type=='month' ?['month', 'month']:['date', 'date']}
                                        format={type=='month' ? "YYYY-MM":"YYYY-MM-DD"} 
                                        onChange={(date)=>that.onChangePicker(date)}
                                        onPanelChange={that.handlePanelChange}
                                        onOpenChange={(status)=>{!status&&type=='month'&&that.getList()}}
                                        value={date} 
                                    />
                                </div>
                                <Button href={`${info[type][form].downloadUrl}?type=${info[type][form].type}&start_time=${type=='month'?date[0].format('YYYY-MM'):date[0].format('YYYY-MM-DD')}&end_time=${type=='month'?date[1].format('YYYY-MM'):date[1].format('YYYY-MM-DD')}`}>下载数据</Button>
                            </div>
                        </div>
                        <div className='tab-box'>
                            <Table rowKey='id' onRow={(record) => {}}  pagination={false} scroll={{ x: (header.length+1)*150 }} columns={that.getColumns(header,list)} dataSource={list} bordered />
                            <div className='footer'>
                                <div className='info'>
                                    {`共 ${totalElements} 条记录 `}
                                    &nbsp;&nbsp;
                                    {`第  ${pageNumber}  / ${Math.ceil(totalElements / pageSize)} 页`}
                                </div>
                                <Pagination pageSize={pageSize} current={pageNumber} total={totalElements} onChange={that.changePagination} onShowSizeChange={that.onPaginationSize} showSizeChanger showQuickJumper />
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </ContentBox>
    )
})

export default Tpl