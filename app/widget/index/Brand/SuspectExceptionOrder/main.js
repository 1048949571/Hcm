import Tpl from './tpl'
import { message as Msg } from 'antd'
import axios from '../../../../js/common/ajax'

const DEFAULT_PAGE = {
  pageNo: 1,
  pageSize: 10,
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orderId: '',
      // shopInfo: '',
      status: '',
      // result: '',
      startTime: moment().subtract(6, 'd'),
      endTime: moment(),
      expandedRowKeys: [],
      // expanded: false,

      dataList: [],
      pagination: { ...DEFAULT_PAGE },
    }
  }
  componentDidMount() {
    this.getSuspentOrderList(this.commonSearchCondition(DEFAULT_PAGE))
  }
  clearInputFn = key => {
    this.setState({
      [key]: ''
    })
  }
  handlePageChange = page => {
    this.setState({
      pagination: Object.assign({}, this.state.pagination, {
        pageNo: page,
      })
    }, () => {
      const data = this.commonSearchCondition(this.state.pagination)
      if (data) {
        this.getSuspentOrderList(data)
      }
    })
  }
  searchChange = (key, type, param) => {
    switch(type) {
      case 'input':
        // console.log(param.target.value)
        this.setState({
          [key]: param.target.value,
        })
        break
      case 'select':
        // console.log(param)
        this.setState({
          [key]: param,
        })
        break
      case 'time':
        // console.log(param)
        if (param.length === 0) {
          this.setState({
            startTime: '',
            endTime: '',
          })
        } else {
          this.setState({
            startTime: param[0],
            endTime: param[1],
          })
        }
      default:
        null
    }
  }
  // 处理订单
  handleOrder = (orderId, flag) => {
    // console.log(flag)
    LoadingModal({bl:true})
    axios.post('/hcm/hcmShopMonitor/updateOrderAbnormal', {
      orderId,
      orderState: flag,
    }).then(res => {
      LoadingModal({bl:false})
      const { data, status, message } = res.data
      if (status === '10000') {
        data == 1 && Msg.success(message)
        this.getSuspentOrderList(this.commonSearchCondition(DEFAULT_PAGE))
      } else {
        Msg.error(message)
      }
    }).catch(err => {
      LoadingModal({bl:false})
      Msg.error('系统繁忙，请稍后再试！')
    })
  }
  getSuspentOrderList = (params) => {
    // console.log(params)
    // return
    axios.get('/hcm/hcmShopMonitor/findOrderAbnormalListByPage', {params}).then(res => {
      const { data, status, message } = res.data
      if (status === '10000') {
        this.setState({
          dataList: data.content.length===0?[]:data.content.map(v => Object.assign({}, v, {_isExpand: false})),
          pagination: Object.assign({}, this.state.pagination, {
            pageNo: data.pageNumber,
            pageSize: data.pageSize,
            totalElements: data.totalElements,
          }),
          expandedRowKeys: [],
        })
      } else {
        Msg.error(message)
      }
    }).catch(err => {
      Msg.error('系统繁忙，请稍后再试！')
    })
  }
  commonSearchCondition = (pagination) => {
    const {
      orderId,
      // shopInfo,
      status,
      // result,
      startTime,
      endTime,
    } = this.state
    if (startTime === '' || endTime === '') {
      Msg.warning('时间不能为空，请选择时间！')
      return undefined
    }
    const data = {
      orderNo: orderId,
      // shopInfo,
      orderState: status,
      // result,
      firstDate: startTime.format('YYYY-MM-DD'),
      lastDate: endTime.format('YYYY-MM-DD'),
      pageNo: pagination.pageNo,
      pageSize: pagination.pageSize,
    }
    return data
  }
  handleSearch = () => {
    const data = this.commonSearchCondition(DEFAULT_PAGE)
    if (data) {
      this.getSuspentOrderList(data)
    }
  }
  handleExpand = async (expanded, record) => {
    const { dataList } = this.state
    const index = dataList.findIndex(v => v.id == record.id)
    if (index < 0) {
      Msg.error('系统异常，请稍后再试！')
      return
    }
    const copyDataList = [...dataList]
    const copyObj = Object.assign({}, copyDataList[index])
    copyObj._isExpand = !record._isExpand
    if (!record._isExpand && record._detail === undefined) {
      // 请求额外数据并且添加到当前数据中
      try {
        LoadingModal({bl:true})
        const res = await axios.get('/hcm/hcmShopMonitor/getOrderDetailById', {params: { orderId: record.id }})
        LoadingModal({bl:false})
        if (res.data.status !== '10000') {
          Msg.error(res.data.message)
          return
        }
        copyObj._detail = {...res.data.data}
      } catch (error) {
        LoadingModal({bl:false})
        Msg.error(error.statusText)
        return
      }
    }
    copyDataList[index] = copyObj
    const showTableList = copyDataList.filter(v => v._isExpand)
    const expandedRowKeys = showTableList.length?showTableList.map(v => v.id):[]
    this.setState({
      expandedRowKeys,
      dataList: copyDataList,
    })
  }
  render() {
    return <Tpl that={this} />
  }
}

export default App