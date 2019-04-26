import Tpl from './tpl'
import { message as Msg } from 'antd'
import ajax from '../../../../js/common/ajax'

const DEFAULT_PAGE = {
  pageNum: 1,
  pageSize: 10,
}

const COMMON = {
  publicity: '活动公示',
  myActivity: '我的活动',

  shop: 'shop',
  product: 'product',
  review: 'review',
}

// detailTYpe    shop:店铺活动详情 product:产品活动详情 review:我的活动详情

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      breadcrumbName: COMMON[props.match.params.breadcrumbName],
      detailType: props.match.params.type,
      id: props.match.params.id,
      status: props.match.params.status,

      myActivityDetail: {},
      proDetail: {},
      shopDetail: {},
    }
  }

  componentDidMount() {
    if (this.state.detailType === COMMON.review) {
      // 我的活动详情页面
      this.getMyActivityDetailInfo()
    }
    if (this.state.detailType === COMMON.product) {
      if (!this.props.location.state) {
        Msg.warning('当前页面数据失效，准备跳往活动公示页面！', 1.5, () => {
          this.props.history.push('/ActivityPublicity')
        })
      } else {
        this.getCamDetailPro(DEFAULT_PAGE)
      }
    }
    if (this.state.detailType === COMMON.shop) {
      if (!this.props.location.state) {
        Msg.warning('当前页面数据失效，准备跳往活动公示页面！', 1.5, () => {
          this.props.history.push('/ActivityPublicity')
        })
      } else {
        this.getCamDetailShop(DEFAULT_PAGE)
      }
    }
  }
  handleMoreClick = pageNum => {
    if (this.state.detailType === 'shop') {
      const pagination = Object.assign({}, DEFAULT_PAGE, {pageNum})
      this.getCamDetailShop(pagination)
    } 
    if (this.state.detailType === 'product') {
      const pagination = Object.assign({}, DEFAULT_PAGE, {pageNum})
      this.getCamDetailPro(pagination)
    }
  }
  // 获取活动公示店铺详情
  getCamDetailShop = (pagination) => {
    const params = {
      ser_day: moment(this.props.location.state.ser_day).format('YYYY-MM-DD'),
      type: moment(this.props.location.state.ser_day).format('YYYY-MM-DD') === moment().format('YYYY-MM-DD') ? 1 : 2,
      shop_id: `'${this.state.id}'`,
      campaign_node: '已审核',
      ...pagination,
    }
    ajax.get('/hcm/campgign/ScheduleBMC', {params}).then(res => {
      const { data, status, message } = res.data
      if (status === '10000') {
        this.setState({
          shopDetail: Object.assign({}, data, pagination),
        })
      } else {
        Msg.error(message)
      }
    }).catch(err => {
      Msg.error('系统繁忙，请稍后再试！')
    })
  }
  // 获取活动公示产品详情
  getCamDetailPro = (pagination) => {
    const params = {
      ser_day: moment(this.props.location.state.ser_day).format('YYYY-MM-DD'),
      product_id: this.state.id,
      ...pagination,
    }
    ajax.get('/hcm/campgign/findCamDetailPro',{params}).then(res => {
      const { data, status, message } = res.data
      if (status === '10000') {
        this.setState({
          proDetail: Object.assign({}, data, pagination),
        })
      } else {
        Msg.error(message)
      }
    }).catch(err => {
      Msg.error('系统繁忙，请稍后再试！')
    })
  }
  // 获取我的活动详情信息
  getMyActivityDetailInfo = () => {
    const params = {
      id: this.state.id,
    }
    ajax.get('/hcm/campgign/Detail', {params}).then(res => {
      const { data, status, message } = res.data
      if (status === '10000') {
        this.setState({
          myActivityDetail: Object.assign({}, data)
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