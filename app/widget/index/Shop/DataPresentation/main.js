import Tpl from './tpl';
import ajax from '../../../../js/common/ajax'
import { Form, message } from 'antd';
class DataPresentation extends React.Component {
    constructor(props) {
        super(props)
        const columns = [{
            title: '序号',
            dataIndex: 'entity_owner_name',
            render: (content, record, index) => (
                <span key={index}>
                    {index+1}
                </span>
            )
        }, {
            title: '数据时间',
            dataIndex: 'platform_code',
            render: (content, record, index) => (
                <span key={index}>
                    <a href={`/index.html#/DataDetails/${moment(parseInt(record.daydate)).format('YYYY-MM-DD')}`}>
                    {moment(parseInt(record.daydate)).format('YYYY-MM-DD')} 销售数据报表
                    </a>
                  
                </span>
            )
        }, {
            title: '提报时间',
            width: "200px",
            render: (content, record, index) => (
                <span key={index}>
                {
                    record.submit_status=="1" ? <span> {moment(parseInt(record.submit_time)).format('YYYY-MM-DD HH:mm:ss')}</span> : null
                }
                </span>
            )
        }, {
            title: '状态',
            render: (content, record, index) => (
                <span key={index}>
                  {
                      record.submit_status=="0" ? <span>未提报 <a href={`/index.html#/DataDetails/${moment(parseInt(record.daydate)).format('YYYY-MM-DD')}`}>立即提报></a></span> : 
                      <span>已提报 <a href={`/index.html#/DataDetails/${moment(parseInt(record.daydate)).format('YYYY-MM-DD')}`}>查看详情</a></span>
                  }
                </span>
            )
        }]
        this.state = {
            ProductInformation_list:columns,
            link_taobao:[],
            pageNo:1,
            totalNum:0,
            pageSize:10,
            obj:""
        }


    }
    GetDateStr = (AddDayCount) => {
        var dd = new Date(); dd.setDate(dd.getDate() + AddDayCount);
        var y = dd.getFullYear(); var m = (dd.getMonth() + 1) < 10 ? "0" + (dd.getMonth() + 1) : (dd.getMonth() + 1);
        var d = dd.getDate() < 10 ? "0" + dd.getDate() : dd.getDate();
        return y + "-" + m + "-" + d;
    }
    
    componentDidMount() {
        this.setState({
            start_time:this.GetDateStr(-31),
            end_time:this.GetDateStr(-1)
        },()=>{
            this.shopDataDayReportPageList(this.state.pageNo,this.state.pageSize,this.state.start_time,this.state.end_time)
        })
       
      
    }
    shopDataDayReportPageList=(pageNo,pageSize,start_time,end_time)=>{
        ajax.post("/hcm/dayReport/shopDataDayReportPageList", {
            pageNo:pageNo,
            pageSize:pageSize,
            start_time:start_time,
            end_time:end_time
        }).then((res) => {
            console.log(res)
            if (res.data.status == 10000) {
                
                if (res.data.data.content.length) {
                    this.setState({
                        link_taobao: res.data.data.content,
                        totalNum:res.data.data.totalElements,
                    }, () => {
                        

                    })
                }
                this.setState({
                    obj:res.data.data.obj
                })

            } else {

                message.error(res.data.message)
            }
        })
    }
    zrsj=()=>{
        ajax.post("/hcm/dayReport/shopZRReportTJ").then((res) => {
        
            if (res.data.status == 10000) {
                
                    message.success("昨日数据提报统计成功")
                   // this.shopDataDayReportPageList(this.state.pageNo,this.state.pageSize,this.GetDateStr(-30),this.GetDateStr(0))
                   this.shopDataDayReportPageList(this.state.pageNo,this.state.pageSize,this.state.start_time,this.state.end_time)
              
             
            } else {

                message.error(res.data.message)
            }
        })
    }
    onChange=(date,dateString)=>{
        if (date != "" && date != [] && date != undefined) {
            this.setState({
                start_time: dateString[0],
                end_time: dateString[1],
                link_taobao: [],
                totalNum:0
            }, () => {
                this.shopDataDayReportPageList(this.state.pageNo,this.state.pageSize,this.state.start_time,this.state.end_time)
            })
        } else {
            this.setState({
                start_time: this.GetDateStr(-30),
                end_time: this.GetDateStr(0),
                link_taobao: [],
                totalNum:0
            }, () => {
                this.shopDataDayReportPageList(this.state.pageNo,this.state.pageSize,this.state.start_time,this.state.end_time)
            })

        }
    }
    SwitchonChange=()=>{
        if(this.state.obj=="0"){
            ajax.post("/hcm/dayReport/shopAutoSubmit", {
                state:"1"
            }).then((res) => {
                console.log(res)
                if (res.data.status == 10000) {
    
                    message.success("已开启自动提报")
                    this.shopDataDayReportPageList(this.state.pageNo,this.state.pageSize,this.GetDateStr(-30),this.GetDateStr(0))
  
                } else {
    
                    message.error(res.data.message)
                }
            })
        }else{
            ajax.post("/hcm/dayReport/shopAutoSubmit", {
                state:"0"
            }).then((res) => {
                console.log(res)
                if (res.data.status == 10000) {
    
                    message.success("已关闭自动提报")
                    this.shopDataDayReportPageList(this.state.pageNo,this.state.pageSize,this.GetDateStr(-30),this.GetDateStr(0))
  
                } else {
    
                    message.error(res.data.message)
                }
            })
        }
        
    }
    onPaginationSize=(current, pageSize)=>{
        this.setState({
            pageSize:pageSize,
            link_taobao:[]
        },()=>{
            this.shopDataDayReportPageList(this.state.pageNo,this.state.pageSize,this.state.start_time,this.state.end_time)
        })
    }
    changePagination=(current, pageSize)=>{
        this.setState({
            pageNo:current,
            link_taobao:[]
        },()=>{
            this.shopDataDayReportPageList(this.state.pageNo,this.state.pageSize,this.state.start_time,this.state.end_time)
       
        })
    }
    render() {
        return <Tpl that={this} />
    }
}
export default Form.create()(DataPresentation)