import Tpl from './tpl';
import ajax from '../../../../js/common/ajax';
import { message as Msg } from 'antd'

class CustomerOverview extends React.Component {
    constructor(props) {
        super(props)
        this.ChartTree = React.createRef();
        this.state = {
            platform_code: '',
            tabKey: 'shop',
            platformList: [],
            shopInPlatformData: [],
            shopLoyalRank: [],
            shopProductsRank: [],
            salesRank: [],
            orderExceptionRank: [],
            
            chinaCodeTree: [],
            brainData: {},
            departmentTree: [], // 嵌套数据
            departmentList: [], // 平行数据
            searchValue: '',
            expandedKeys: [],
            autoExpandParent: true,
            currentSelectedKeys: [],
        }
    }

    componentWillMount() {
        this.getPlatformList()
        this.getShopInPlatformPercent()

        this.getChinaCodeTree()
        this.getDepartmentData()
        this.getBrainData({platformcode: this.state.platform_code})
    }
    // 切换平台
    handlePlatformChange = value => {
        this.setState({
            platform_code: value,
        })
        this.getBrainData({platformcode: value, noFirst: true,})
    }
    // 获取店铺所在平台占比数据
    getShopInPlatformPercent = () => {
        ajax.get('/hcm/hcmShop/getHcmShopProportionByPlatform').then(res => {
            const { data, status, message } = res.data
            if (status === '10000') {
                this.setState({
                    shopInPlatformData: data.shopsGroupPing,
                    shopLoyalRank: data.markPrenctList,
                    shopProductsRank: data.goodsList,
                    orderExceptionRank: data.lowpriceList,
                    salesRank: data.salesList,
                })
            } else {
                Msg.error(message)
            }
        }).catch(err => {
            Msg.error('系统繁忙，请稍后再试！')
        })
    }
    // 获取脑图数据
    getBrainData = (params) => {
        ajax.get('/hcm/hcmShop/getDealerShopByPlatform', {params}).then(res => {
            const { data, status, message } = res.data
            if (status === '10000') {
                this.setState({
                    brainData: data,
                }, () => {
                    params.noFirst && this.ChartTree.current.inChart()
                })
            } else {
                Msg.error(message)
            }
        }).catch(err => {
            Msg.error('系统繁忙，请稍后再试！')
        })
    }
    // 获取部门结构数据
    getDepartmentData = () => {
        ajax.get('/hcm/department/getTree').then(res => {
            // console.log('---res', res)
            const { data, status, message } = res.data
            if (status === '10000') {
                this.setState({
                    departmentTree: data
                })
                this.generateList(data)
            } else {
                Msg.error(message)
            }
        }).catch(err => {
            Msg.error('系统繁忙，请稍后再试！')
        })
    }
    generateList = (tree) => {
        tree.forEach(v => {
            this.state.departmentList.push({name: v.name, id: v.id})
            this.state.expandedKeys.push(v.id)
            if (v.children && v.children.length) {
                this.generateList(v.children)
            }
        })

    }
    handleExpand = expandedKeys => {
        this.setState({
            expandedKeys,
            autoExpandParent: false,
        })
    }
    getParentKey = (key, tree) => {
        let parentKey;
        for (let i = 0; i < tree.length; i++) {
            const node = tree[i];
            if (node.children && node.children.length) {
                if (node.children.some(item => item.id === key)) {
                    parentKey = node.id;
                } else if (this.getParentKey(key, node.children)) {
                    parentKey = this.getParentKey(key, node.children);
                }
            }
        }
        return parentKey;
    }
    // 获取平台数据
    getPlatformList = () => {
        // ajax.get('/hcm/sys/GetList', {
        //     params: {
        //         dictcode: 'platform'
        //     }
        // }).then(res => {
        //     const { data, status, message } = res.data
        //     if (status === '10000') {
                this.setState({
                    platformList: can.platform||[],
                })
        //     } else {
        //         Msg.error(message)
        //     }
        // }).catch(err => {
        //     Msg.error('系统繁忙，请稍后再试！')
        // })
    }
    // 品牌部门搜索
    searchDepartment = (value, e) => {
        const { departmentList, departmentTree } = this.state
        let arr = []
        const expandedKeys = departmentList.map(v => {
            if (value !== '' && v.name.indexOf(value) > -1) {
                arr.push(v.id)
                return this.getParentKey(v.id, departmentTree)
            }
            return null
        }).filter((item, i, self) => item && self.indexOf(item) === i)
        this.setState({
            expandedKeys,
            searchValue: value,
            autoExpandParent: true,
            currentSelectedKeys: arr,
        });
    }
    // 获取大区数据
    getChinaCodeTree = () => {
        ajax.get('/hcm/chinaCode/getChinaCodeTree').then(res => {
            this.setState({
                chinaCodeTree: res.data
            })
        }).catch(err => {
            Msg.error('系统繁忙，请稍后再试！')
        })
    }

    handleTabChange = key => {
        this.setState({
            tabKey: key,
        })
    }
    

    render() {
        return <Tpl that={this} />
    }
}
export default CustomerOverview