import { Pagination, Table, message, Button, DatePicker } from 'antd';
import ajax from '../../../../js/common/ajax';
import ContentBox from '../../../components/Layout';
import CONFIG from './CONFIG';
const { RangePicker } = DatePicker;
class App extends React.Component {
    constructor(props) {
        super(props)
        let { type } = props.match.params;
        this.state = {
            type: type,
            date: [moment().subtract(1, 'months'), moment().subtract(1, 'months')],
            data: [],
            pageNumber: 1,
            pageSize: 10,
            totalElements: 0,
        }
    }

    componentDidMount() {
        this.getList()
    }
    getList = () => {
        let { type, pageNumber, pageSize, date } = this.state;
        let params = {
            activities: {
                params: {
                    start_time: date[0].format('YYYY-MM'),
                    end_time: date[1].format('YYYY-MM'),
                }
            },
            other: {
                params: {
                    pageNo: pageNumber,
                    pageSize: pageSize,
                    start_time: date[0].format('YYYY-MM'),
                    end_time: date[1].format('YYYY-MM'),
                }
            }
        }
        ajax.get(CONFIG[type].url, type=='activities'?params.activities:params.other)
            .then((response) => {
                let { status, message, data } = response.data;
                if (status == '10000') {
                    if (type == 'activities') {
                        this.setState({
                            data
                        })
                    }else if(type == 'order') {
                        this.setState({
                            data:data.content,
                            pageNumber: data.pageNumber,
                            pageSize: data.pageSize,
                            totalElements: data.totalElements,
                        })
                    }else if(type == 'hotGoods') {
                        this.setState({
                            data:data.content,
                            pageNumber: data.pageNumber,
                            pageSize: data.pageSize,
                            totalElements: data.totalElements,
                        })
                    }else if(type == 'hotShops') {
                        this.setState({
                            data:data.content,
                            pageNumber: data.pageNumber,
                            pageSize: data.pageSize,
                            totalElements: data.totalElements,
                        })
                    }
                } else {
                    message.warning(message)
                }
            }).catch((error) => {
                message.error(error.statusText);
            });
    }

    handlePanelChange = (value, type) => {
        if (value[1].diff(value[0], 'months') > 11) {
            message.error('时间区间请小于12个月')
            return
        }
        this.setState({
            date: value
        })
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

        let { type, data, pageNumber, pageSize, totalElements, date } = this.state;
        
        return (
            <ContentBox
                breadcrumbList={['数据中心', '数据分析', CONFIG[type].name]}
                linkList={['', '1', '']}
                history={this.props.history}
            >
                <div className='dataAnalysisInfo'>
                    <div className='action-box'>
                        <Button href={`${CONFIG[type].downloadUrl}?start_time=${date[0].format('YYYY-MM')}&end_time=${date[1].format('YYYY-MM')}`}>下载数据</Button>
                        <div>
                            <span>选择月份&nbsp;&nbsp;</span>
                            <RangePicker
                                mode={['month', 'month']}
                                format={"YYYY-MM"}
                                onPanelChange={this.handlePanelChange}
                                onOpenChange={(status) => { !status && this.getList() }}
                                value={date}
                            />
                        </div>


                    </div>
                    <div className='tab-box'>
                        <Table rowKey={CONFIG[type].rowKey} pagination={false} columns={CONFIG[type].columns} dataSource={data}  />
                        {
                            type == 'activities' ?
                                null :
                                <div className='footer'>
                                    <div className='info'>
                                        {`共 ${totalElements} 条记录 `}
                                        &nbsp;&nbsp;
                                    {`第  ${pageNumber}  / ${Math.ceil(totalElements / pageSize)} 页`}
                                    </div>
                                    <Pagination pageSize={pageSize} current={pageNumber} total={totalElements} onChange={this.changePagination} onShowSizeChange={this.onPaginationSize} showSizeChanger showQuickJumper />
                                </div>
                        }

                    </div>
                </div>
            </ContentBox>
        )
    }
}
export default App;
