import './DataDetails.less'
import ThatMain from '../../../HOC/That';
import ContentBox from '../../../components/Layout'
import Footer from "../../../components/Copyright"

import { Table, Button, Switch,Form, DatePicker, Pagination } from 'antd';
const { RangePicker } = DatePicker;

const FormItem = Form.Item;


const Tpl = ThatMain((that) => {
    const { getFieldDecorator } = that.props.form;
    const dateFormat = 'YYYY-MM-DD';
    console.log(that)
    return (
        <ContentBox
            breadcrumbList={['数据中心', '数据提报','数据详情']}
            linkList={['', '1','']}
            history={that.props.history}
        >
            <div className='DataDetails'>
                <div className='ChangeHistoryBOXs'>
                <div className="DataTit">
                    <span style={{color:"#333",fontSize:"16px",fontWeight:"bold",marginTop: "10px",display: "inline-block"}}>{that.state.daydate} 销售数据报表</span>
                  
                </div>
                <div className="DataTits">
                    <span style={{marginTop: "5px",display: "inline-block",color:"#FAAD14",fontSize:"12px",fontWeight:"bold",background:"rgba(250,173,20,0.05)",padding:"5px 10px"}}> <img src="../../../../img/lalababa.png" alt=""/> 本模块数据报表专门用于向当前品牌方提报销售数据，不涉及其他品牌数据。</span>
                    
                </div>
                <Table
                        pagination={false}
                        rowKey="id"
                        columns={that.state.shopDataReportSubmit}
                        dataSource={that.state.link_shopDataReport}
                        footer={(currentPageData)=>{
                            return <div>
                                <span style={{display:"inline-block",width:"200px"}}>合计</span>   
                                <span style={{display:"inline-block",width:"200px",marginLeft:"34%"}}>{that.state.SUM}</span>   
                                <span style={{display:"inline-block",width:"200px",marginLeft:"66px"}}>{that.state.trade_money}</span>   
                                </div> 
                        }}
                    />

                    <Button onClick={that.yesButton} className="btn2-main" style={{position: "absolute",bottom: "20px",right: "10px"}}>确认提报</Button>
                </div>

                {/* <Footer className='Copyright'></Footer> */}

            </div>
        </ContentBox>
    )
})
export default Tpl