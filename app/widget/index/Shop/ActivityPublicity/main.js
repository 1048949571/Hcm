import { message as Msg } from 'antd'
import Tpl from './tpl'
import ajax from '../../../../js/common/ajax'

const CATEGORY = {
  shop: 'shop',
  pro: 'pro',
}

const DEFAULT_PAGE = {
  pageNum: 1,
  pageSize: 10,
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      sevenDayCards: [],
      currentDay: Date.now(),
      currentCat: CATEGORY.pro,
      inputValue: '',

      products: {},
      shops: {},
    }
  }
  componentDidMount() {
    this.getSevenDayCardsData()
    this.getProductPublicListShop(DEFAULT_PAGE)
    this.getCampaignShopsPageList(DEFAULT_PAGE)
  }
  goTo = (path, data) => {
    const pathObj = {
      pathname: path,
    }
    if (this.state.currentCat === CATEGORY.shop) {
      pathObj.state = {
        shop_name: data.shop_name,
        act_count: data.act_count,
        ser_day: data._date,
      }
    }
    if (this.state.currentCat === CATEGORY.pro) {
      pathObj.state = {
        ser_day: data._date,
      }
    }
    this.props.history.push(pathObj)
  }
  handleMoreClick = (pageNum) => {
    if (this.state.currentCat === CATEGORY.pro) {
      const pagination = Object.assign({}, DEFAULT_PAGE, {pageNum})
      this.getProductPublicListShop(pagination)
    }
    if (this.state.currentCat === CATEGORY.shop) {
      const pagination = Object.assign({}, DEFAULT_PAGE, {pageNum})
      this.getCampaignShopsPageList(pagination)
    }
  }
  handleBtnClick = flag => {
    this.setState({
      currentCat: flag,
    })
  }
  handleSearch = (value, event) => {
    // console.log(value, event)
    this.setState({
      inputValue: value,
    }, () => {
      if (this.state.currentCat === CATEGORY.pro) {
        this.getProductPublicListShop(DEFAULT_PAGE)
      }
      if (this.state.currentCat === CATEGORY.shop) {
        this.getCampaignShopsPageList(DEFAULT_PAGE)
      }
    })
    
  }
  // 切换日期
  handleChangeDay = timestamp => {
    this.setState({
      currentDay: timestamp,
    }, () => {
      this.getCampaignShopsPageList(DEFAULT_PAGE)
      this.getProductPublicListShop(DEFAULT_PAGE)
    })
  }
  // 获取店铺分类活动
  getCampaignShopsPageList = (pagination) => {
    const params = {
      ser_day: moment(this.state.currentDay).format('YYYY-MM-DD'),
      shop_name: this.state.inputValue,
      // ...DEFAULT_PAGE,
      campaign_node: '已审核',
      ...pagination,
    }
    ajax.get('/hcm/campgign/findCampaignShopsPageList',{params}).then(res => {
      const { data, status, message } = res.data
      if (status === '10000') {
        this.setState({
          shops: Object.assign({}, data, pagination)
        })
      } else {
        Msg.error(message)
      }
    }).catch(err => {
      Msg.error('系统繁忙，请稍后再试！')
    })
  }
  // 获取产品分类活动
  getProductPublicListShop = (pagination) => {
    const params = {
      ser_day: moment(this.state.currentDay).format('YYYY-MM-DD'),
      product_name: this.state.inputValue,
      // ...DEFAULT_PAGE,
      ...pagination,
    }
    ajax.get('/hcm/campgign/findProductPublicListShop', {params}).then(res => {
      const { data, status, message } = res.data
      if (status === '10000') {
        this.setState({
          products: Object.assign({}, data, pagination)
        })
      } else {
        Msg.error(message)
      }
    }).catch(err => {
      Msg.error('系统繁忙，请稍后再试！')
    })
  }
  // 获取7日卡片数据
  getSevenDayCardsData = () => {
    ajax.get('/hcm/campgign/ScheduleBMCSeven').then(res => {
      const { data, status, message } = res.data
      if (status === '10000') {
        this.setState({
          sevenDayCards: data,
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