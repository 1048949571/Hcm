import Tpl from './tpl';
import { message,TreeSelect, Modal } from 'antd';
const confirm = Modal.confirm;
import ajax from '../../../../js/common/ajax';
import lib from '../../../../js/common/lib';
// import {LoadingModal} from '../../../components/LoadingModal/LoadingModal';
class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            addStatus: false,
            visible: false,
            visibleBJ:false,

            productClassifyId:"",
            pageNo: 1,
            pageSize: 15,
            totalElements: 0,
            productClassifyName: null,
            addDroductClassifyName: null,
            productClassifyNamex:"",
            dataList: [],
            classfiyUpdate: {
                MonitorDate: moment(`${moment().hour()}:00'`, 'HH:mm'),
                // platform_code:'TB',
                productClassifyName: null,
                frequency: '1次/24H',
                monitor_range: '授权店铺',
                id: null,
            },
            leaderId: [],
            leaderIdArray: [],
            brandList: []
        }
    }
    editOnchange = (e, type) => {
        let classfiyUpdate = this.state.classfiyUpdate;
        classfiyUpdate[type] = e;
        this.setState({
            classfiyUpdate: classfiyUpdate
        })
    }
    componentDidMount() {
        this.getList()
        this.brandList()
    }
    onChange = (e, type) => {
        let state = this.state;
        state[type] = e.target.value
        this.setState(state)
    }
    handleClearIconClick = (type) => {
        let state = this.state;
        state[type] = null;
        this.setState(state);
    }
    addSubmit = () => {
        let { addDroductClassifyName, leaderIdArray } = this.state;
        addDroductClassifyName = addDroductClassifyName.replace(/(^\s*)|(\s*$)/g, "")
        console.log(addDroductClassifyName)
        console.log(leaderIdArray)
        if (!addDroductClassifyName || !addDroductClassifyName.length) {
            message.error('分类名不可为空');
            return
        }
        if (!lib.legnthCheck(addDroductClassifyName, 'INPUT')) {
            message.error('分类名长度不允许超过50');
            return
        }

        LoadingModal({ bl: true, text: '保存中,请稍后...' })
        ajax.get('/hcm/ProductClassify/save', {
            params: {
                productClassifyName: addDroductClassifyName,
                leaderId: leaderIdArray
            }
        }).then((response) => {
            if (response.data.status == '10000') {
                this.setState({
                    addDroductClassifyName: null,
                    addStatus: false,
                    leaderIdArray: [],
                    leaderId: []
                })
                this.getList()
                message.success(response.data.message);
            } else {
                message.warning(response.data.message);
            }

            LoadingModal({ bl: false })
        }).catch((error) => {
            message.error(error.statusText);
            LoadingModal({ bl: false })
        });
    }
    getMore = () => {
        this.setState({
            pageNo: this.state.pageNo + 1
        }, () => {
            this.getList()
        })
    }
    onSearch = () => {
        this.setState({
            pageNo: 1
        }, () => {
            this.getList()
        })
    }
    getList = () => {
        let { pageNo, pageSize, productClassifyName } = this.state;
        ajax.get('/hcm/ProductClassify/seletProductClassify', {
            params: {
                pageNum: pageNo,
                pageSize: pageSize,
                productClassifyName: productClassifyName,
            }
        }).then((response) => {
            let { count, list } = response.data.data.data;

            this.setState({
                dataList: list,
                totalElements: count,
            })
        }).catch((error) => {
            message.error(error.statusText);
        });
    }
    onRmItem = (item) => {
        let that = this;
        confirm({
            title: null,
            content: <div><div className='tips'>提示</div><div className='pline'></div><p className='Dtitle'>你确认要删除该产品分类吗？</p><p>删除后<span className='red'>录入的公示信息将会被删除</span></p></div>,
            okText: '确定',
            cancelText: '取消',
            className: 'alert-item-confirm',
            okButtonProps: { className: 'btn2-main' },
            cancelButtonProps: { className: 'btn2-sub' },
            onOk() {
                ajax.get('/hcm/ProductClassify/deleteById', {
                    params: {
                        id: item.id
                    }
                }).then((response) => {
                    message.success(response.data.message)
                    that.getList()
                }).catch((error) => {
                    message.error(error.statusText);
                });
            }
        });
    }

    onMonitorStop = (item) => {
        let that = this;
        confirm({
            title: '你确认要停止该产品分类监控吗？',
            okText: '确定',
            cancelText: '取消',
            okButtonProps: { className: 'btn2-main' },
            cancelButtonProps: { className: 'btn2-sub' },
            onOk() {
                ajax.get('/hcm/priceMonitor/MonitorStop', {
                    params: {
                        id: item.id,
                        productClassifyName: item.productClassifyName
                    }
                }).then((response) => {
                    message.success(response.data.message)
                    that.getList()
                }).catch((error) => {
                    message.error(error.statusText);
                });
            }
        });
    }
    onUpdateMonitoring = () => {
        let that = this;
        let { MonitorDate, platform_code, frequency, monitor_range, id, productClassifyName } = this.state.classfiyUpdate;

        ajax.post('/hcm/priceMonitor/ClassfiyUpdate', {
            MonitorDate: moment(MonitorDate).format('HH:mm'),
            // platform_code:platform_code,
            frequency: frequency,
            monitor_range: monitor_range,
            type: '1',
            id: id,
            productClassifyName,
        }).then((response) => {

            that.onVisible(false)
            if (response.data.status == '10000') {
                message.success(response.data.message)
                that.getList()
            } else {
                message.warning(response.data.message)
            }
        }).catch((error) => {
            message.error(error.statusText);
        });
    }
    productClassify=(e)=>{
        //console.log(e.target.value)
        this.setState({
            productClassifyNamex:e.target.value
        })
    }
    onEditItem = (item) => {
       // console.log(item)
        this.setState({
            visibleBJ: true,
            leaderIdArray:item.leaderId,
            leaderId:item.leaderName,
            productClassifyNamex:item.productClassifyName,
            productClassifyId:item.id
        },()=>{
           //  console.log(this.state.productClassifyNamex)
            // confirm({
            //     content: <div>
            //         <input style={{ width: '90%' }} id='edit-item-input' defaultValue={item.productClassifyName} /><br></br>
            //         <TreeSelect
            //             style={{width:"90%",marginTop:"10px"}}
            //             value={that.state.leaderId}
            //             dropdownStyle={{ maxHeight: 200, overflow: 'auto' }}
            //             treeData={that.state.brandList}
            //             placeholder="请选择负责人"
            //             treeDefaultExpandAll
            //             onChange={that.handleChangeleaderId}
            //         />
            //     </div>,
            //     okText: '确定',
            //     className: 'edit-item-confirm',
            //     okButtonProps: { className: 'btn2-main' },
            //     cancelButtonProps: { className: 'btn2-sub' },
            //     cancelText: '取消',
            //     onOk(close) {
    
            //         if (!lib.legnthCheck(document.getElementById('edit-item-input').value, 'INPUT')) {
            //             message.error('分类名长度不允许超过50');
    
            //         } else {
            //             ajax.get('/hcm/ProductClassify/save', {
            //                 params: {
            //                     productClassifyName: document.getElementById('edit-item-input').value,
            //                     id: item.id,
            //                     leaderId:that.state.leaderIdArray
            //                 }
            //             }).then((response) => {
            //                 if (response.data.status == '10000') {
            //                     message.success(response.data.message)
            //                     that.getList()
            //                     close()
            //                 } else {
            //                     message.warning(response.data.message)
            //                 }
            //             }).catch((error) => {
            //                 message.error(error.statusText);
            //             });
            //         }
            //     }
            // });
        })
        
    }
    onVisible = (bl, item) => {
        let classfiyUpdate = this.state.classfiyUpdate;
        if (item) {
            classfiyUpdate.id = item.id
            classfiyUpdate.productClassifyName = item.productClassifyName
        }
        this.setState({
            visible: bl,
            classfiyUpdate
        })
    }
    createJson = (prop, val, str) => {
        if (typeof val === "undefined") {
            delete str[prop];
        }
        else {
            str[prop] = val;
        }
    }
    lolo = (v) => {
        v.children.forEach((vs, i) => {
            if (vs.type === "dept") {
                this.createJson("disabled", true, vs);
                if (vs.children != null) {
                    this.lolo(vs)
                }

            } else if (vs.type === "user") {
                this.createJson("disabled", false, vs);
            }
        })
    }
    brandList = () => {
        ajax.post('/hcm/userout/getAllUserTreeByDepartId', {
        }).then((response) => {
            //console.log(response)
            if (response.data.status == '10000') {
                response.data.data.forEach((v, i) => {
                    //   console.log(v,i)
                    if (v.type === "dept") {
                        //  console.log(1)
                        this.createJson("disabled", true, v);
                        ///  console.log(v)
                        if (v.children != null) {
                            this.lolo(v)
                        }

                    } else if (v.type === "user") {
                        this.createJson("disabled", false, v);
                    }
                    // console.log(v,"21")
                })
                this.setState({
                    brandList: response.data.data
                })
            } else {
                message.warning(response.data.message)
            }

        }).catch((error) => {
            message.error(error.statusText);
        });
    }
    onAddStatus = (bl) => {
        this.setState({
            addStatus: bl,
            addDroductClassifyName: null,
            leaderIdArray: [],
            leaderId: []
        })
    }
    handleChangeleaderId = (value, titlex) => {
        //console.log(value, titlex)
        this.setState({
            leaderIdArray: value,
            leaderId: titlex
        })
        
    }

    
      handleOk = (e) => {
      let {productClassifyNamex} = this.state;
      productClassifyNamex = productClassifyNamex.replace(/(^\s*)|(\s*$)/g, "")
      if (!productClassifyNamex) {
        message.error('分类名不能为空');
          return
      }
        if (!lib.legnthCheck(document.getElementById('edit-item-input').value, 'INPUT')) {
            message.error('分类名长度不允许超过50');

        } else {
            if(document.getElementById('edit-item-input').value!="" && document.getElementById('edit-item-input').value!=undefined){
                ajax.get('/hcm/ProductClassify/save', {
                    params: {
                        // productClassifyName: document.getElementById('edit-item-input').value,
                        productClassifyName:productClassifyNamex,
                        id: this.state.productClassifyId,
                        leaderId:this.state.leaderIdArray
                    }
                }).then((response) => {
                    if (response.data.status == '10000') {
                        message.success(response.data.message)
                        this.getList()
                        this.setState({
                            visibleBJ: false,
                            leaderIdArray:[],
                            leaderId:[],
                            productClassifyNamex:null,
                            productClassifyId:""
                        });
                        close()
                    } else {
                        this.setState({
                            visibleBJ: false,
                            leaderIdArray:[],
                            leaderId:[],
                            productClassifyNamex:null,
                            productClassifyId:""
                        });
                        message.warning(response.data.message)
                    }
                }).catch((error) => {
                    message.error(error.statusText);
                    this.setState({
                        visibleBJ: false,
                        leaderIdArray:[],
                        leaderId:[],
                        productClassifyNamex:null,
                        productClassifyId:""
                    });
                });
            }else{
                message.error("不能为空！")
            }
            
        }
      }
    
      handleCancel = (e) => {
        //console.log(e);
        this.setState({
            visibleBJ: false,
            leaderIdArray:[],
            leaderId:[],
            productClassifyNamex:"",
            productClassifyId:""
        });
      }
    
    render() {
        return <Tpl that={this} />
    }
}
export default App;
