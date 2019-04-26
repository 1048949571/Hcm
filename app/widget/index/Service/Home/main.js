import Tpl from './tpl';
import { message as Msg } from 'antd';
import ajax from '../../../../js/common/ajax';

const DEFAULT_PAGE = {
    pageNo: 1,
    pageSize: 10,
}

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            brandProductLib: {},    // 品牌商品库
            competProductLib: {},   // 竞品商品库
            keywordMonitor: {},     // 关键词监控
            salesTableMonitor: {},  // 销售数据报表
            linkMark: {},           // 链接打标
            activityUninspection: {},   // 活动待稽查
        }
    }
    componentDidMount() {
        this.getBrandProductLibData(DEFAULT_PAGE)
        this.getCompetProductLibData(DEFAULT_PAGE)
        this.getKeywordMonitorData(DEFAULT_PAGE)
        this.getSalesTableMonitorData(DEFAULT_PAGE)
        this.getLinkMarkData(DEFAULT_PAGE)
        this.getActivityUninspectionData(DEFAULT_PAGE)
    }

    handlePageChange = (data, funName, pageNo) => {
        // console.log(data, funName, pageNo)
        this[funName]({
            pageNo,
            pageSize: DEFAULT_PAGE.pageSize,
        })
    }

    // 获取品牌商品库数据
    getBrandProductLibData = (params) => {
        const url = '/hcm/Index/kefuIndexBrandKeyword'
        this.getFn(url, 'brandProductLib', params)
    }
    // 获取竞品商品库数据
    getCompetProductLibData = (params) => {
        const url = '/hcm/Index/kefuIndexJingpinKeyword'
        this.getFn(url, 'competProductLib', params)
    }
    // 获取关键词监控数据
    getKeywordMonitorData = (params) => {
        const url = '/hcm/Index/kefuIndexKeywordMonitor'
        this.getFn(url, 'keywordMonitor', params)
    }
    // 获取销售报表数据
    getSalesTableMonitorData = (params) => {
        const url = '/hcm/Index/kefuIndexProductSetting'
        this.getFn(url, 'salesTableMonitor', params)
    }
    // 获取链接打标数据
    getLinkMarkData = (params) => {
        const url = '/hcm/Index/kefuIndexItemMark'
        this.getFn(url, 'linkMark', params)
    }
    // 获取活动稽查数据
    getActivityUninspectionData = (params) => {
        const url = '/hcm/Index/kefuIndexInspectSetting'
        this.getFn(url, 'activityUninspection', params)
    }

    getFn = (url, key, params) => {
        ajax.get(url, {params}).then(res => {
            const { data, status, message } = res.data
            if (status === '10000') {
                this.setState({
                    [key]: {
                        list: data.content,
                        // total: data.obj,
                        pageNo: data.pageNumber,
                        pageSize: data.pageSize,
                        totalElements: data.totalElements,
                    }
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
export default App;
