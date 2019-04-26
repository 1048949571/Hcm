import Tpl from './tpl';
import { message,Icon,Tooltip } from 'antd';
import ajax from '../../../../js/common/ajax';
class App extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {
            pageNo: 1,
            pageSize: 10,
            totalNum: 0,

            date: moment(),
            priceList: [],
            dataList: [],
            classInfo: {},
            targetItem: {}

        }
    }
    componentDidMount() {
        this.getClassInfo()
        this.getList()
    }
    
    getList = () => {
        let { date, pageNo, pageSize, targetItem } = this.state;
        LoadingModal({bl:true})
        ajax.get('/hcm/priceMonitor/Detail', {
            params: {
                pageNo,
                pageSize,
                price_type: targetItem.plat_code,
                id: this.props.match.params.id,
                my_date: moment(date).format('YYYY-MM-DD')
            }
        }).then((response) => {
            LoadingModal({bl:false})
            if (response.data.status == '10000') {

                this.setState({
                    pageNo: response.data.data.pageNumber,
                    pageSize: response.data.data.pageSize,
                    totalNum: response.data.data.totalElements,
                    dataList: response.data.data.content,
                    priceList: response.data.data.obj,
                    targetItem: JSON.stringify(targetItem)=='{}' ? response.data.data.obj[0] : targetItem
                })
            } else {
                message.error(response.data.message);
            }
        }).catch((error) => {
            LoadingModal({bl:false})
            message.error(error.statusText);
        });
    }
    
    editDate = (e) => {
        this.setState({
            date: e,
            pageNo:1
        }, () => {
            this.getList()
        })
    }
    getClassInfo = () => {
        ajax.get('/hcm/priceMonitor/DetailCount', {
            params: {
                id: this.props.match.params.id
            }
        }).then((response) => {
            this.setState({
                classInfo: response.data.data
            })
        }).catch((error) => {
            message.error(error.statusText);
        });
    }
    changePagination = (page, pageSize) => {
        this.setState({
            pageNo: page,
            pageSize: pageSize,
        }, () => {
            this.getList()
        })
    }
    onPaginationSize = (current, size) => {
        this.setState({
            pageNo: 1,
            pageSize: size,
        }, () => {
            this.getList()
        })
    }

    onScrollLeft = (bl) => {
        let num = $('.price-item').length * 240;
        let left = $('.price-list').scrollLeft();
        $('.price-list').stop(true, true);
        if (bl) {
            $('.price-list').animate({ scrollLeft: left + 900 }, 300)
        } else {
            $('.price-list').animate({ scrollLeft: left - 900 }, 300)
        }
    }
    onSelectItem = (item) => {
        this.setState({
            pageNo:1,
            pageSize:10,
            targetItem: item,
            dataList: [],
        }, () => {
            this.getList()
        })
    }

    onExpand = (expanded, record) => {
        if (expanded) {
            let dataList = this.state.dataList;
            let num = null;
            dataList.forEach((item, index) => {
                if (item.num_iid == record.num_iid) {
                    num = index;
                }

            })
            let {targetItem } = this.state;
            ajax.get('/hcm/priceMonitor/DetailExp', {
                params: {
                    shopmainid:record.shopmainid,
                    price_type: record.platform,
                    id: this.props.match.params.id,
                    product_id: record.product_id,
                    wangwang:record.nickname
                }
            }).then((response) => {
                if (response.data.status == '10000') {
                    dataList[num].info = response.data.data;
                    this.setState({ dataList })
                } else {
                    message.error(response.data.message);
                }
            }).catch((error) => {
                message.error(error.statusText);
            });
            // dataList[num].info = 'ggggg'
            // this.setState({ dataList })
            //record => <p style={{ margin: 0 }}>{record.info}</p>
        }

    }
    rowRender = (record, index, indent, expanded)=>{
        
        if(record.info){
            let {floor_price,floor_transaction_price,brand_name,product_name,custom_my,...list} = record.info;
            let dataList = Object.entries(list)
            console.log(dataList)
            return (
            <div className='rowRender'>
                {
                    record.platform =='TB'|| record.platform =='TM'||record.platform =='1688'? 
                    <div className='a-info'>
                        <h6>旺旺名称：{record.nickname}</h6>
                        <h6>所属客户：{custom_my}</h6>
                    </div>
                    :
                    <div className='a-info'>
                        <h6>所属经销商{custom_my}</h6>
                    </div>
                }
                <ul className='list-info'>
                    <li>品牌:{brand_name}</li>
                    <li>品名:{product_name}</li>
                    <li>最低标价:{floor_price}</li>
                    <li>最低成交价:{floor_transaction_price}</li>
                    {
                        dataList.map((item,index)=>{
                            return(
                                <li key={index}>{item[0]}:{item[1]}</li>
                            )
                        })
                    }
                </ul>
            </div>
            )
        }
        
    }
    render() {
        return <Tpl that={this} />
    }
}
export default App;
