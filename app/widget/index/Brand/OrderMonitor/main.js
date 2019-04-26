import Tpl from './tpl';
import { message as Msg } from 'antd';
import ajax from '../../../../js/common/ajax';

const DEFAULT_PAGE = {
    pageNo: 1,
    pageSize: 12,
}

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            inviteLinkStatus:false,
            shop_name: '',
            order_situation: '',
            buy_status: '',
            suspentOrderCount: 0,
            pagination: { ...DEFAULT_PAGE },
            shopList: [],
        }
    }
    componentDidMount() {
        this.getSuspentOrderCount()
        this.getShopList({
            shopName: this.state.shop_name,
            isauthed: this.state.buy_status,
            ...DEFAULT_PAGE
        })
    }
    searchChange = (key, type, e) => {
        // console.log(key, type)
        if (type === 'input') {
            this.setState({
                [key]: e.target.value,
            })
        }
        if (type === 'select') {
            this.setState({
                [key]: e,
            })
        }
    }
    // 获取数据
    getShopList = params => {
        // console.log(params)
        // return
        LoadingModal({bl:true})
        ajax.get('/hcm/hcmShopMonitor/findShopListByPage', {params}).then(res => {
            LoadingModal({bl:false})
            const { data, status, message } = res.data
            if (status === '10000') {
                this.setState({
                    shopList: data.content,
                    pagination: Object.assign({}, this.state.pagination, {
                        pageNo: data.pageNumber,
                        pageSize: data.pageSize,
                        totalElements: data.totalElements,
                    })
                })
            } else {
                Msg.error(message)
            }
        }).catch(err => {
            LoadingModal({bl:false})
            Msg.error('系统繁忙，请稍后再试！')
        })
    }
    handleSearch = () => {
        const { shop_name, buy_status } = this.state
        const data = {
            shopName: shop_name,
            isauthed: buy_status,
            pageNo: DEFAULT_PAGE.pageNo,
            pageSize: DEFAULT_PAGE.pageSize,
        }
        this.getShopList(data)
    }
    handlePageChange = page => {
        // console.log(page)
        this.setState({
            pagination: Object.assign({}, this.state.pagination, {
                pageNo: page,
            })
        }, () => {
            const { shop_name, pagination, buy_status } = this.state
            this.getShopList({
                shopName: shop_name,
                isauthed: buy_status,
                pageNo: pagination.pageNo,
                pageSize: pagination.pageSize,
            })
        })
    }
    goTo = path => {
        this.props.history.push(path)
    }
    clearInputFn = () => {
        this.setState({
            shop_name: ''
        })
    }
    inviteLinkStatus = (bl) => {
        this.setState({
            inviteLinkStatus: bl
        })
    }
    // 获取疑似订单数量
    getSuspentOrderCount = () => {
        ajax.get('/hcm/hcmShopMonitor/getHcmShopMonitorOrderErrCount').then(res => {
            const { data, status, message } = res.data
            if (status === '10000') {
                this.setState({
                    suspentOrderCount: data,
                })
            } else {
                Msg.error(message)
            }
        }).catch(err => {
            Msg.error('系统繁忙，请稍后再试！')
        })
    }
    render() {
        return <Tpl that={this} />
    }
}
export default App
