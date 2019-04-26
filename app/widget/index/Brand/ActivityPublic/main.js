import Tpl from './tpl'
import axios from '../../../../js/common/ajax'
import { message as Msg } from 'antd'
import moment from 'moment'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      sevenDayNums: [],
      shopBtnList: [],
      currentDateIndex: 0,
      currentDate: moment().format('YYYY-MM-DD'),
      currentShopBtnIndex: 0,
      activityList: [],
      pagination: {
        pageNum: 1,
        pageSize: 10,
        count: 0
      },
      type: null,
    ser_day: null,
    pageSize: null,
    pageNum: null,
    campaign_node:'已审核',
    shopid:''
      // isExpandPrice: false
    }
  }
  componentWillMount() {
    this.getSevenDayActivity()
    this.getReviewedShop({
      type: 1,
      date: this.state.currentDate
    })
    this.getActivityList({
      type: 1,
      date: this.state.currentDate,
      pageNum: this.state.pagination.pageNum,
      pageSize: this.state.pagination.pageSize
    })
  }
  handleDateChange = params => {
    this.setState({
      currentDateIndex: params.index,
      currentDate: params.date,
      currentShopBtnIndex: 0
    }, () => {
      // console.log(params.date, this.state.currentDate)
      this.getReviewedShop({
        type: params.date === moment().format('YYYY-MM-DD') ? 1 : 2,
        date: params.date
      })
      this.getActivityList({
        type: params.date === moment().format('YYYY-MM-DD') ? 1 : 2,
        date: params.date,
        ...this.state.pagination
      })
    })
  }
  handleTogglePriceClick = (_index) => {
    // console.log(123)
    const { activityList } = this.state
    const list = activityList.slice()
    list[_index]._isExpandPrice = !list[_index]._isExpandPrice
    this.setState({
      // isExpandPrice: !this.state.isExpandPrice
      activityList: list
    })
  }
  handleLoadMoreBtnClick = () => {
    console.log()
    let {
        campaign_node,
        type,
        ser_day,
        pageSize,
        pageNum,
        activityList,
        pagination,
        shopid
      } = this.state;
      pageNum++
      LoadingModal({bl:true})
      axios.post('/hcm/campgign/ScheduleBMC', {
        campaign_node,
        type,
        ser_day,
        pageSize,
        pageNum,
        shop_id:shopid?shopid:null
    }).then(res=>{
        console.log(res)
        LoadingModal({bl:false})
        if (res.data.status == '10000') {
            console.log(pageNum)
            pagination.pageNum = pageNum
            this.setState({activityList:res.data.data.list,pageNum,pagination})
        }
    }).catch(()=>{
        LoadingModal({bl:false})
        message.error('获取信息失败')
    })

  }
//   组件的事件-----备注为了好看
  handleShopBtnChange = params => {
    this.setState({
      currentShopBtnIndex: params.index
    })
    // shop_id需要格式'id','id'...
    this.getActivityList({
      type: moment().format('YYYY-MM-DD') === this.state.currentDate ? 1 : 2,
      date: this.state.currentDate,
      shop_id: params.shop_id === undefined ? '' : `'${params.shop_id}'`,
      ...this.state.pagination
    })
  }
  // 获取活动列表
  getActivityList = params => {
      console.log(params)
    let data = {
      campaign_node: '已审核',
      type: params.type,
      ser_day: params.date,
      pageSize: params.pageSize,
      pageNum: params.pageNum
    }
    let {pagination} = this.state;
    if (params.shop_id !== undefined && params.shop_id !== '') {
      data.shop_id = params.shop_id
    }
    axios({
      method: 'post',
      url: '/hcm/campgign/ScheduleBMC',
      data
    }).then(res => {
      const { data, status, message } = res.data
      if (status === '10000') {
        // pagination.pageNum = 1
        let {shopid} = this.state;
        if (params.shop_id !== undefined && params.shop_id !== '') {
            shopid = params.shop_id
        } else{
            shopid = ''
        }
        this.setState({
          activityList: !!data.list.length?data.list.map(v => Object.assign({},v,{_isExpandPrice:false})):[],
          pagination: Object.assign({}, this.state.pagination, {count: data.count,pageNum:1}),
          type: params.type,
          ser_day: params.date,
          pageSize: params.pageSize,
          pageNum: 1,
          shopid
        })
      }
    }).catch()
  }
  // 获取已审核店铺
  getReviewedShop = params => {
    axios({
      method: 'post',
      url: '/hcm/campgign/PublicShops',
      data: {
        campaign_node: "已审核",
        type: params.type,
        ser_day: params.date
      }
    }).then(res => {
      const { data, status, message } = res.data
      if (status === '10000') {
        this.setState({
          shopBtnList: data
        })
      }
    }).catch()
  }
  // 获取七日活动信息
  getSevenDayActivity = () => {
    axios({
      method: 'post',
      url: '/hcm/campgign/ScheduleBMCSeven',
    }).then(res => {
      const { data, status, message } = res.data
      if (status === '10000') {
        this.setState({
          sevenDayNums: data
        })
      }
    }).catch()
  }
  render() {
    return <Tpl that={this} />
  }
}

export default App