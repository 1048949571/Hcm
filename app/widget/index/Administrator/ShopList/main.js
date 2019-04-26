import Tpl from './tpl';
import { message, Switch, Icon, Modal } from 'antd';
import crypto from '../../../../js/common/crypto';
const confirm = Modal.confirm;
import ajax from '../../../../js/common/ajax';
import lib from '../../../../js/common/lib';
import platform  from '../../../components/platform'
class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            platform_code: null,
            shopname: null,
            username: null,
            status: null,
            oldSearch:{
                platform_code: null,
                shopname: null,
                username: null,
                status: null,
            },

            dataList: [],
            pageNo: 1,
            pageSize: 10,
            totalNum: 0,
            checkAll: false,
            selectedRowKeys: [],

            editShop:false,
            targetData:{},
            password:null

        }
    }
    componentDidMount() {
        this.getList()
    }
    onSearch= (bl=false) =>{
        this.setState({
            pageNo:1,
            platform_code:  bl ? null : this.state.platform_code,
            shopname:  bl ? null : this.state.shopname,
            username:  bl ? null : this.state.username,
            status:  bl ? null : this.state.status,
            oldSearch:{
                platform_code:  bl ? null : this.state.platform_code,
                shopname:  bl ? null : this.state.shopname,
                username:  bl ? null : this.state.username,
                status:  bl ? null : this.state.status,
            },
        },()=>{
            this.getList()
        })
    }
    getList = () => {
        let { pageNo, pageSize, platform_code, shopname, username, status } = this.state;
        ajax.get('/hcm/hcmShop/getPageByAdmin', {
            params: {
                platform_code, shopname, username, status,
                pageNo: pageNo,
                pageSize: pageSize,
            }

        }).then((response) => {
            this.setState({
                dataList: response.data.data.content,
                pageNo: response.data.data.pageNumber,
                pageSize: response.data.data.pageSize,
                totalNum: response.data.data.totalElements,
                checkAll: false,
                selectedRowKeys: []
            })
        }).catch((error) => {
            message.error(error.statusText);
        });
    }
    chSearchIpt = (e, type) => {
        let state = this.state;
        state[type] = e.target.value;
        this.setState(state)

    }
    handleClearIconClick =  (type) => {
        let state = this.state;
        state[type] = null;
        this.setState(state);
    }
    handleChange = (e, type) => {
        let state = this.state;
        state[type] = e;
        this.setState(state)

    }

    onTableCheckChange = (selectedRowKeys) => {
        // console.log(selectedRowKeys)
        this.setState({
            selectedRowKeys: selectedRowKeys,
            checkAll: false
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
    formatColumn = () => {

        let column = [{
            title: 'No',
            dataIndex: 'index',
            width: '80px',
            key: 'index',
            render: (text, record, index) => <div style={{ width: '40px' }}>{index + 1}</div>
        }, {
            title: '平台',
            dataIndex: 'platformname',
            key: 'platformname',
            render:(text, record, index)=><div>{platform(record.platformcode,{verticalAlign: 'bottom',width:'20px',height:'20px'})}&nbsp;{text}</div>
        }, {
            title: '店铺名称',
            dataIndex: 'shopname',
            key: 'shopname',
            render: (text, record, index) => <a target='_blank' href={record.shopurl}>{text}</a>
        }, {
            title: '用户名',
            dataIndex: 'username',
            key: 'username',
        }, {
            title: '绑定手机',
            dataIndex: 'mobile',
            key: 'mobile',
            render: (text, item) => <div>{lib.encryption(text)}{text && text.length ? <span onClick={() => this.unBindPhone(item)} className='unphone'><Icon type="link" />解绑手机</span> : null}</div>
        }, {
            title: '最近登陆',
            dataIndex: 'logintime',
            key: 'logintime',
            render: (text) => text?moment(text).format('YYYY年MM月DD日 HH:mm:ss'):'--'
        }, {
            title: '状态',
            dataIndex: 'status',
            key: 'status',
            render: (text, item, index) => <Switch loading={item.loading} onChange={(checked) => this.changeSwitch(checked, item, index)} checkedChildren="开" unCheckedChildren="关" checked={text ? true : false} />
        }, {
            title: '操作',
            dataIndex: 'action',
            key: 'action',
            render: (text, item, index) => (
                <div>
                    <a onClick={()=>this.stateEditService(true,item)}>
                        <img style={{verticalAlign:'text-bottom',paddingRight:'4px'}} src='../../../img/icon/icon_operating_edit.png' />
                        编辑
                    </a>
                </div>
            )
        }]
        return column
    }
    allStopStart = (bl) => {
        let { selectedRowKeys,totalNum,checkAll} = this.state;
        let {shopname,platform_code,username,status} = this.state.oldSearch;
        let that = this;
        if(selectedRowKeys.length==0){
            message.warning('至少选择一项')
            return
        }
        confirm({

            title: null,
            content: <div><div className='tips'>提示</div><div className='pline'></div><p className='Dtitle'>你确认要{bl?'启用':'禁用'}{checkAll ? totalNum :selectedRowKeys.length}项吗</p></div>,
            okText: '确定',
            cancelText: '取消',
            className:'alert-item-confirm',
            onOk() {
                ajax.post('/hcm/hcmShop/stopOrOpenShopByAdmin', {
                    ids: checkAll ? 'checkAll':selectedRowKeys.join(','),
                    sostatus: bl,
                    shopname:checkAll ? shopname :'',
                    platform_code:checkAll ? platform_code :'',
                    username:checkAll ? username :'',
                    status:checkAll ? status :'',
                })
                    .then((response) => {
                        if (response.data.status == '10000') {
                            that.onSearch(true)
                            message.success(response.data.message);
                        }else{
                            message.error(response.data.message);
                        }
                    })
                    .catch((error) => {
                        message.error(error.statusText);
                    });
            }
        });
    }
    unBindPhone = (item) => {
        let that = this;
        confirm({

            title: null,
            content:<div><div className='tips'>提示</div><div className='pline'></div><p className='Dtitle'>你确认要解绑手机吗</p></div>,
            okText: '确定',
            okType: 'danger',
            cancelText: '取消',
            className:'alert-item-confirm',
            onOk() {
                ajax.get('/hcm/user/UnbindPhone', {
                    params: {
                        mobiles: item.userid,
                        usertype: 'c'
                    }
                })
                    .then((response) => {
                        
                        if (response.data.status == '10000') {
                            that.getList()
                            message.success(response.data.message);
                        }else{
                            message.error(response.data.message);
                        }
                        
                    })
                    .catch((error) => {
                        message.error(error.statusText);
                    });
            }
        });

    }

    changeSwitch = (checked, item, index) => {
        let dataList = this.state.dataList;
        dataList[index].loading = true;
        this.setState({
            dataList
        }, () => {
            ajax.post('/hcm/hcmShop/stopOrOpenShopByAdmin', {
                ids: item.id,
                sostatus: checked ? 1 : 0,
            })
                .then((response) => {
                    message.success(response.data.message);
                    if (response.data.status == '10000') {
                        this.getList()
                    }
                })
                .catch((error) => {
                    message.error(error.statusText);
                    dataList[index].loading = false;
                    this.setState({
                        dataList
                    })
                });
        })

    }
    checkAll = (bl) => {
        let selectedRowKeys = this.state.selectedRowKeys;
        if (bl) {
            this.state.dataList.forEach((item, index) => {
                selectedRowKeys.push(item.id)
            })

        } else {
            selectedRowKeys = []
        }
        this.setState({
            checkAll: bl,
            selectedRowKeys: selectedRowKeys
        })
    }
    stateEditService = (bl,targetData={})=>{
        console.log(bl,targetData)
        this.setState({
            editShop:bl,
            password:null,
            targetData:bl?targetData:{}
        },()=>{
            console.log(this.state.targetData)
        })
    }

    onSubMit=()=>{
        let {targetData,password} = this.state;
        
        if(password==null||password==''){
            message.warning('密码不可为空')
            return
        }
        if(!lib.checkPassword(password)){
            message.warning('密码长度不符')
            return
        }
        ajax.post('/hcm/hcmShop/updatePassword', {
            username: targetData.username,
            password: crypto.Encrypt(password.trim())
        })
            .then((response) => {
                message.success(response.data.message);
                if (response.data.status == '10000') {
                    this.stateEditService(false)
                }
            })
            .catch((error) => {
                message.error(error.statusText);
            });
    }
    render() {
        return <Tpl that={this} />
    }
}
export default App