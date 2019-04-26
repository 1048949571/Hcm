import Tpl from './tpl';
import { message as MSG } from 'antd';
import ajax from '../../../../js/common/ajax';
import {info} from './CONFIG';
class App extends React.Component {
    constructor(props) {
        super(props)
        let { type, form } = props.match.params;
        this.state = {
            type,
            form,
            header: [],
            list: [],
            pageNumber: 1,
            pageSize: 10,
            totalElements: 0,
            date:[ type=='month' ?moment().subtract(1, 'years').subtract(1, 'months'):moment().subtract(1, 'months').add(1, 'days'),moment()]
        }
    }
    componentDidMount() {
        this.getList()
    }
    componentWillReceiveProps(nextprops) {
        let params = nextprops.match.params;
        let { type, form } = this.state;
        if (params.type != type || params.form != form) {
            this.setState({
                type: params.type,
                form: params.form,
                header: [],
                list: [],
                pageNumber: 1,
                pageSize: 10,
                totalElements: 0,
                date:[ params.type=='month' ?moment().subtract(1, 'years').subtract(1, 'months'):moment().subtract(1, 'months').add(1, 'days'),moment()]
            },()=>{
                this.getList()
            })
        }
    }
    onChangePicker = (date) =>{
        if(date[1].diff(date[0],'days')>30){
            MSG.error('时间区间请小于31天')
            return
        }
        this.setState({
            date
        },()=>{
            this.getList()
        })
    }
    handlePanelChange = (value, mode)=>{
        if(value[1].diff(value[0],'months')>11){
            MSG.error('时间区间请小于12个月')
            return
        }
        this.setState({
            date:value
        })
    }
    getList = () => {
        let {type,form,pageNumber,pageSize,date} = this.state;

        ajax.get(info[type][form].url,{
            params:{
                type:info[type][form].type,
                start_time: type=='month'?date[0].format('YYYY-MM'):date[0].format('YYYY-MM-DD'),
                end_time: type=='month'?date[1].format('YYYY-MM'):date[1].format('YYYY-MM-DD'),
                pageNumber,
                pageSize
            }
        })
            .then((response) => {
                let { status, message, data } = response.data;
                if (status == '10000') {
                    this.setState({
                        header: data.head,
                        list: data.page.content,
                        pageNumber: data.page.pageNumber,
                        pageSize: data.page.pageSize,
                        totalElements: data.page.totalElements,
                    })
                } else {
                    MSG.warning(message)
                }
            }).catch((error) => {
                MSG.error(error.statusText);
            });
    }
    getColumns = (header, list) => {
        let {type,form} = this.state;
        let columns = []
        for (let i = 0; i < header.length; i++) {
            switch (header[i]) {
                case info[type][form].case:
                    columns.push({
                        title: header[i], 
                        dataIndex:'name',
                        className:'name',
                        width: 150, 
                        fixed: 'left',
                        render: (value, row, index) => {
                            const obj = {
                              children: <span style={row.isauthed=='NOTAUTH'?{color:'#999'}:{}}>{value}</span>,
                              props: {},
                            };
                            if(index%2==0){
                               obj.props.rowSpan = 2;
                            }else{
                              obj.props.rowSpan = 0;
                            }
                            return obj;
                        },
                    })
                    break;
                case "类别":
                    columns.push({
                        title: header[i], 
                        dataIndex:'type',
                        className:'type',
                        width: 150, 
                        fixed: 'left'
                    })
                    break;

                case "合计":
                    columns.push({
                        title: header[i], 
                        dataIndex:'total',
                        className:'total',
                        width: 100, 
                        fixed: 'right'
                    })
                    break;
                default:
                    columns.push({
                        title: header[i], 
                        dataIndex:header[i]
                    })
            }
        }
        return columns
    }
    changePagination = (page, pageSize) => {
        this.setState({
            pageNumber: page,
            pageSize: pageSize,
        }, () => {
            this.getList()
        })
    }
    onPaginationSize = (current, size) => {
        this.setState({
            pageNumber: 1,
            pageSize: size,
        }, () => {
            this.getList()
        })
    }
    render() {
        return <Tpl that={this} />
    }
}
export default App;
