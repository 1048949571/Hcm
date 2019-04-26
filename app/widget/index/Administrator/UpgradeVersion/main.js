import Tpl from './tpl';
import { message as Msg } from 'antd';
import ajax from '../../../../js/common/ajax';

class App extends React.Component {
    constructor(props) {
        super(props)
        const columns = [{
            title: '序号',
            render: (content, record, index) => (
                <span key={index}>
                    {index + 1}
                </span>
            )
        }, {
            title: '公司名称',
            dataIndex: 'companyname'
        }, {
            title: '用户名',
            dataIndex: 'username'
        }, {
            title: '联系方式',
            width: "200px",
            dataIndex: "phonenum"

        }, {
            title: '当前使用版本',
            dataIndex: "current_version"
        }, {
            title: '提交时间',
            dataIndex: "createtime",
            render: (content, record, index) => (

                <span>
                    {moment(record.createtime).format('YYYY-MM-DD HH:mm:ss')}
                </span>
            )

        }, {
            title: '需要升级版本',
            dataIndex: "upgrade_version"
        }]
        this.state = {
            ProductInformation_list: columns,
            link_taobao: [],
            pageSize: 10,
            totalNum: 0,
            pageNo: 1

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
            begintime: this.GetDateStr(-30) + " 00:00:00",
            endtime: this.GetDateStr(0) + " 23:59:59",
        })
        this.getListByBmcid(this.GetDateStr(-30) + " 00:00:00", this.GetDateStr(0) + " 23:59:59", this.state.pageSize, this.state.pageNo)

    }
    getListByBmcid = (begintime, endtime, pageSize, pageNo) => {
        ajax.get("/hcm/HcmUpgradedVersion/getList", {
            params: {
                begintime: begintime,
                endtime: endtime,
                pageSize: pageSize,
                pageNo: pageNo
            }
        }).then((res) => {
            console.log(res)
            if (res.data.status == 10000) {

                if (res.data.data.content.length > 0) {
                    this.setState({
                        link_taobao: res.data.data.content,
                        totalNum: res.data.data.totalElements,
                    })
                }

            } else {

                message.error(res.data.message)
            }
        })
    }
    onChange = (date, dateString) => {//投诉时间
        console.log(date, dateString)
        if (date != "" && date != [] && date != undefined) {
            this.setState({
                start_time: dateString[0] + " 00:00:00",
                end_time: dateString[1] + " 23:59:59",
                link_taobao: [],
                pageSize: 10,
                totalNum: 0,
                pageNo: 1
            }, () => {
                this.getListByBmcid(this.state.start_time, this.state.end_time, this.state.pageSize, this.state.pageNo)

            })
        } else {
            this.setState({
                start_time: this.GetDateStr(-90),
                end_time: this.GetDateStr(0),
                link_taobao: [],
                pageSize: 10,
                totalNum: 0,
                pageNo: 1
            }, () => {
                this.getListByBmcid(this.state.start_time, this.state.end_time, this.state.pageSize, this.state.pageNo)

            })

        }

    }
    changePagination = (current, b) => {
        this.setState({
            pageNo: current,
            link_taobao: []
        }, () => {
            this.getListByBmcid(this.state.start_time, this.state.end_time, this.state.pageSize, this.state.pageNo)

        })
    }
    onPaginationSize = (a, pageSize) => {
        this.setState({
            pageSize: pageSize,
            link_taobao: []
        }, () => {
            this.getListByBmcid(this.state.start_time, this.state.end_time, this.state.pageSize, this.state.pageNo)

        })
    }

    render() {
        return <Tpl that={this} />
    }
}
export default App;
