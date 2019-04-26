import Tpl from './tpl';
import ajax from '../../../../js/common/ajax'
import { Form, message } from 'antd';
import { bindActionCreators } from 'redux';

const mapStateToProps = (state, ownProps) => {
    console.log(state)
    return {
        collapsed: state.collapsed
    }
}

class DataPresentation extends React.Component {
    constructor(props) {
        super(props)
        const columns = [{
            title: '序号',
            width: "100px",
            dataIndex: 'entity_owner_name',
            render: (content, record, index) => (
                <span key={index}>
                    {index + 1}
                </span>
            )
        }, {
            title: '商品',
            dataIndex: 'itemtitle',
            width: "40%"
        }, {
            title: '销量（件）',
            width: "200px",
            dataIndex: "buy_num"

        }, {
            title: '销售金额（元）',
            width: "200px",
            render: (content, record, index) => (
                <span key={index}>
                    {record.trade_money}
                </span>
            )
        }]
        this.state = {
            shopDataReportSubmit: columns,
            link_shopDataReport: [],
            daydate: "",
            SUM:0,
            trade_money:0,
            stateError:false
        }


    }

    componentDidMount() {
        this.setState({
            daydate: this.props.match.params.daydate
        }, () => {
            this.shopDataDayReportPageList(this.state.daydate)
        })
    }
    shopDataDayReportPageList = (daydate) => {
        ajax.post("/hcm/dayReport/shopDataDayReportDetailList", {
            daydate: daydate
        }).then((res) => {
            console.log(res)
            if (res.data.status == 10000) {

                if (res.data.data.length) {
                    var sum = 0;
                    var money=0;
                    for (var i = 0; i < res.data.data.length; i++) {
                        sum = sum + res.data.data[i].buy_num
                        money=money+res.data.data[i].trade_money
                    }
                    this.setState({
                        link_shopDataReport: res.data.data,
                        SUM:sum,
                        trade_money:money.toFixed(2)
                    })
                   
                }

            } else {

                message.error(res.data.message)
            }
        })
    }
    yesButton=()=>{
        LoadingModal({ bl: true })
        ajax.post("/hcm/dayReport/shopDataReportSubmit", {
            buy_num:this.state.SUM,
            submit_money:this.state.trade_money,//    总额
            daydate:this.state.daydate     //日期
        }).then((res) => {

            if (res.data.status == 10000) {

                message.success("提报成功")
                    setTimeout(()=>{
                        window.location = "/index.html#/DataPresentation" 
                    },2000)
            } else {
               
                message.error("提报失败")
                setTimeout(()=>{
                    window.location = "/index.html#/DataPresentation" 
                },2000)
            }
            LoadingModal({ bl: false })
        }).catch(()=>{
            LoadingModal({ bl: false })
            setTimeout(()=>{
                window.location = "/index.html#/DataPresentation" 
            },2000)
        })
    }
    render() {
        return <Tpl that={this} />
    }
}
export default Form.create()(DataPresentation)