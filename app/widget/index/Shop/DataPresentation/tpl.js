import './DataPresentation.less'
import ThatMain from '../../../HOC/That';
import ContentBox from '../../../components/Layout'
import Footer from "../../../components/Copyright"

import { Table, Button, Switch, Form, DatePicker, Pagination } from 'antd';
const { RangePicker } = DatePicker;

const FormItem = Form.Item;


const Tpl = ThatMain((that) => {
    const { getFieldDecorator } = that.props.form;
    const dateFormat = 'YYYY-MM-DD';
    
    return (
        <ContentBox
            breadcrumbList={['数据中心', '数据提报']}
            linkList={['', '']}
            history={that.props.history}
        >
            <div className='DataPresentation'>
                <div className='ChangeHistoryBOXs'>
                    <div className="DataTit">
                        <span style={{ color: "#333", fontSize: "16px", fontWeight: "bold", marginTop: "10px", display: "inline-block" }}>每日销售数据报表提报记录</span>
                         <span className="DataSpan">
                                <Button style={{marginRight:"10px"}} onClick={that.zrsj}>昨日数据提报统计</Button>
                                {/* <span style={{ marginTop: "10px", marginRight: "10px" }}>自动提报</span>
                          {
                            that.state.link_taobao.length>0 ?      
                                <Switch checkedChildren="开" style={{ marginTop: "5px", float: "right" }} onChange={e => that.SwitchonChange("1")} defaultChecked={that.state.obj != "1" ? false : true} unCheckedChildren="关" /> : null
                           }    */}
                            </span>
                        

                    </div>
                    <div className="DataTits" style={{marginBottom:"20px"}}>
                        {/* <span style={{ marginTop: "5px", display: "inline-block", color: "#FAAD14", fontSize: "12px", fontWeight: "bold", background: "rgba(250,173,20,0.05)", padding: "5px 10px" }}> <img src="../../../../img/lalababa.png" alt="" /> 开启自动提报后，不需要每日手动提报，系统会定点自动提报。</span> */}
                        <span className="DataSpan" style={{ fontWeight: "500", fontSize: "14px" }}>
                            数据时间
                        <RangePicker
                                defaultValue={[moment(Date.now() - 744 * 60 * 60 * 1000),
                                moment(Date.now()- 24 * 60 * 60 * 1000)]}
                                style={{ marginLeft: "10px", width: "250px" }}
                                onChange={that.onChange}
                                format={dateFormat}

                            />
                        </span>
                    </div>
                    <Table
                        pagination={false}
                        rowKey="daydate"
                        scroll={{ x: (that.state.ProductInformation_list.length - 1) * 200 }}
                        columns={that.state.ProductInformation_list}
                        dataSource={that.state.link_taobao}
                    />

                    <div className='footer'>
                        <div className='info'>
                            {`共 ${that.state.totalNum} 条记录 `}
                            &nbsp;&nbsp;
                        {`第  ${that.state.pageNo}  / ${Math.ceil(that.state.totalNum / that.state.pageSize)} 页`}

                        </div>
                        <Pagination pageSize={that.state.pageSize} current={that.state.pageNo} total={that.state.totalNum} onChange={that.changePagination} onShowSizeChange={that.onPaginationSize} showSizeChanger showQuickJumper />

                    </div>
                </div>

                {/* <Footer className='Copyright'></Footer> */}

            </div>
        </ContentBox>
    )
})
export default Tpl