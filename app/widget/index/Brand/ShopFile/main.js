import Tpl from './tpl';
import { message, Menu, Dropdown, Divider, Modal, Tooltip } from 'antd';
import ajax from '../../../../js/common/ajax';
import platform  from '../../../components/platform'
const confirm = Modal.confirm;
class App extends React.Component {
    constructor(props) {
        super(props)
        this.ShopFile_SetTable = React.createRef()
        this.shopDetail = React.createRef()
        this.state = {
            inviteLinkStatus:false,
            errorListStatus:false,
            errorList:{},
            fileList: [],
            percent: null,
            uploading: false,
            uploadVisible: false,
            formatColumn: [],
            selectedRowKeys: [],


            addStatus: false,
            visible: false,
            dataList: [],

            setTableVisible: false,

            dealername: null,
            isauthed: null,
            platform_code: null,
            shopname: null,
            oldSearch:{
                dealername: null,
                isauthed: null,
                platform_code: null,
                shopname: null,
            },
            platForm:[],
            pageNo: 1,
            pageSize: 10,
            checkAll: false,
            totalElements: null,
        }
    }
    componentDidMount() {
        this.getList()
        this.getByProduct()
        this.getPlatform()
    }
    inviteLinkStatus = (bl) => {
        this.setState({
            inviteLinkStatus: bl
        })
    }
    errorListStatus = (bl) => {
        this.setState({
            errorListStatus: bl
        })
    }
    getPlatform = () => {
        // ajax.get('/hcm/sys/GetList', {
        //     params: {
        //         dictcode: 'platform'
        //     }
        // }).then((response) => {
        //     if (response.data.status == '10000') {
                this.setState({
                    platForm: can.platform||[]
                })
        //     }

        // }).catch((error) => {
        //     message.error(error.statusText);
        // });
    }
    onSearch = (bl=false) => {
        this.setState({
            pageNo: 1,
            dealername:bl ? null : this.state.dealername,
            isauthed: bl ? null : this.state.isauthed,
            platform_code: bl ? null : this.state.platform_code,
            shopname: bl ? null : this.state.shopname,
            
            oldSearch:{
                dealername:bl ? null : this.state.dealername,
                isauthed: bl ? null : this.state.isauthed,
                platform_code: bl ? null : this.state.platform_code,
                shopname: bl ? null : this.state.shopname,
            },
        }, () => {
            this.getList()
        })
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
    onChange = (e, type) => {
        let state = this.state;
        state[type] = e.target.value
        this.setState(state)
    }
    onsChange = (e, type) => {
        let state = this.state;
        state[type] = e
        this.setState(state)
    }
    handleClearIconClick = (type) => {
        let state = this.state;
        state[type] = null;
        this.setState(state);
    }
    getList = () => {
        let { pageNo, pageSize,dealername, isauthed, platform_code, shopname, totalNum, id } = this.state;
        ajax.get('/hcm/hcmShop/getPageByBmc', {
            params: {
                dealername, isauthed, platform_code, shopname,
                pageNo: pageNo,
                pageSize: pageSize,
            }
        }).then((response) => {
            let { content, pageNumber, pageSize, totalElements, obj } = response.data.data;
            this.setState({
                selectedRowKeys: [],
                checkAll:false,
                dataList: content,
                pageNumber,
                pageSize,
                totalElements
            })
        }).catch((error) => {
            message.error(error.statusText);
        });
    }
    rmAll = () => {
        let that = this;
        let { checkAll, selectedRowKeys, totalElements } = this.state;
        let {dealername, isauthed, platform_code, shopname,} = this.state.oldSearch;
        if (selectedRowKeys.length == 0) {
            message.error('至少选择一条')
            return
        }
        confirm({
            title: null,
            content: <div>
                        <div className='tips'>提示</div>
                        <div className='pline'></div>
                        <p className='Dtitle'>你确认要删除勾选的{checkAll ? totalElements : selectedRowKeys.length}个店铺吗？</p>
                        <p>删除后<span className='red'>相关店铺将无法找回</span></p>
                    </div>,
            okText: '确定',
            cancelText: '取消',
            okButtonProps: {className:'btn2-main'},
            cancelButtonProps: {className:'btn2-sub'},
            className:'alert-item-confirm',
            onOk() {
                ajax.post('/hcm/hcmShop/Delete', {
                    ids: checkAll ? 'checkAll' : selectedRowKeys.join(','),
                    dealername: checkAll ? dealername : '', 
                    isauthed: checkAll ? isauthed : '', 
                    platform_code: checkAll ? platform_code : '', 
                    shopname: checkAll ? shopname : '',
                    
                }).then((response) => {
                    message.success(response.data.message);
                    that.onSearch(true)

                }).catch((error) => {
                    message.error(error.statusText);
                })
            }
        })

    }
    rmItem = (item) => {
        let { id } = this.state;
        let that = this;
        confirm({
            title: null,
            content: <div>
                        <div className='tips'>提示</div>
                        <div className='pline'></div>
                        <p className='Dtitle'>你确认要删除该店铺吗？</p>
                        <p>删除后<span className='red'>该店铺将无法找回</span></p>
                </div>,
            okText: '确定',
            cancelText: '取消',
            okButtonProps: {className:'btn2-main'},
            cancelButtonProps: {className:'btn2-sub'},
            className:'alert-item-confirm',
            onOk() {
                ajax.post('/hcm/hcmShop/Delete', {
                    ids:item.shopdealerid
                }).then((response) => {
                    message.success(response.data.message);
                    that.getList()

                }).catch((error) => {
                    message.error(error.statusText);
                });
            }
        })

    }
    getByProduct = () => {
        ajax.get('/hcm/hcmCustomModel/getBybmcidAndModule', {
            params: {
                module:'SHOP'
            }
        }).then((response) => {
            let productList = response.data.data;
            this.setState({
                formatColumn: this.formAtDom(productList)
            })
        }).catch((error) => {
            message.error(error.statusText);
        });
    }

    formAtDom = (data) => {
        let { name, id, setTableVisible } = this.state;
        let arr = [{
            title: '序号',
            dataIndex: 'index',
            fixed: 'left',
            sort: 0,
            width: 80,
            key: 'index',
            render: (text, item, index) => index + 1,
        }];
        for (const key in data) {
            data[key].data.forEach((item, index) => {
                if (item.isChecked&&item.fieldvalue != 'platformname') {
                    item.target = [key, index, item]
                    return (
                        arr.push({
                            title: item.fieldname,
                            dataIndex: item.fieldvalue,
                            key: item.id,
                            sort: item.sort,
                            className: 'item-column',
                            render: (text, record, index) => {
                                
                                return(
                                    (item.fieldvalue === 'dealername' ?
                                            JSON.stringify(record.status) == '{}' ?
                                                <span>{text}</span>
                                                :
                                                <div>
                                                    <span style={{paddingRight:10}}>{text}</span>
                                                    <Tooltip placement="bottom" title={record.status.info}>
                                                    <span className={record.status.info_type}>{record.status.title}</span>
                                                    </Tooltip>
                                                </div>
                                        :
                                        item.fieldvalue === 'shopName' ?
                                            <div>
                                                <a  onClick={()=>this.shopDetail.current.onShow(record.id,record.dealerid)} style={{paddingRight:10}}>{text}</a>
                                                {
                                                    record.isauthed == 'AUTHED' ? 
                                                    <img style={{verticalAlign: 'bottom',paddingRight:10}} src='../../../../img/dinggou.jpg' />
                                                    :null
                                                }
                                                {platform(record.platform_code,{verticalAlign: 'bottom',width:'20px',height:'20px'})}
                                            </div>
                                        :item.fieldvalue === 'shopUrl' ?
                                         <a className='urlHide' target='_blank' href={record.shopUrl} >{record.shopUrl}</a>
                                        : 
                                        item.fieldvalue === 'productclassifyid' ?
                                        <div className='table-tb-box'>
                                            <Tooltip placement="bottom" title={record.productClassifyName ? record.productClassifyName.join(','):null}>
                                            {record.productClassifyName ? record.productClassifyName.join(',') :null}
                                            </Tooltip>
                                        </div>
                                        : 
                                        <div className='table-tb-box'>
                                            <Tooltip placement="bottom" title={text}>
                                                {text}
                                            </Tooltip>
                                        </div>
                                    )
                                )
                                
                                
                            }
                        })
                    )
                }

            })
        }
        arr.push({
            title: '操作',
            dataIndex: 'action',
            key: 'action',
            sort: 999999,
            width: 180,
            align: 'center',
            fixed: 'right',
            render: (text, item, index) => <div>
                <a href={`index.html#/ActionShopFile/edit/${item.dealerid}/${item.id}`}>
                    <img style={{ verticalAlign: 'text-bottom', paddingRight: '6px' }} src='../../../img/icon/icon_operating_edit.png' />
                    编辑
                </a>
                <Divider type="vertical" />
                <Dropdown overlay={<Menu>
                    <Menu.Item>
                        <a className='A-COLOR' onClick={() => this.rmItem(item)}>
                            <img style={{ verticalAlign: 'text-bottom', paddingRight: '6px' }} src='../../../img/icon/icon_operating_del.png' />
                            删除
                        </a>
                    </Menu.Item>
                    <Menu.Item>
                        <a className='A-COLOR' onClick={() => this.ChangeHis(item)}>
                            <img style={{ verticalAlign: 'text-bottom', paddingRight: '4px' }} src='../../../img/icon/icon_operating_history.png' />
                            变更历史
                        </a>
                    </Menu.Item>
                </Menu>}>
                    <a >··· &nbsp;更多</a>
                </Dropdown>
            </div>,
        })
        return arr
    }
    ChangeHis = (item) => {
        window.location = "/index.html#/ChangeHistorys/HcmShopBmcDealer/" + item.shopName + "/" + item.shopdealerid
    }
    ProduHistory = () => {
        window.location = "/index.html#/ChangeHistoryx/HcmShopBmcDealer/"
    }
    checkAll = (bl) => {
        let selectedRowKeys = this.state.selectedRowKeys;
        if (bl) {
            this.state.dataList.forEach((item, index) => {
                selectedRowKeys.push(item.shopdealerid)
            })

        } else {
            selectedRowKeys = []
        }
        this.setState({
            checkAll: bl,
            selectedRowKeys: selectedRowKeys
        })
    }
    handleUpload = () => {
        const { fileList } = this.state;
        const formData = new FormData();
        fileList.forEach((file) => {
            formData.append('file', file);
        });

        this.setState({
            uploading: true,
        });
        ajax({
            method: 'post',
            url: '/hcm/hcmShop/readExcelFile',
            headers: { 'Content-Type': 'multipart/form-data' },
            data: formData,
            onUploadProgress: (progressEvent) => {
                let percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total)

                this.setState({
                    percent: percentCompleted
                })
            }
        })
            .then((rep) => {
                this.setState({
                    fileList: [],
                    uploading: false,
                    uploadVisible: false,
                });
                this.getList()
                if(rep.data.status=='10000'){
                    
                    if(rep.data.data&&rep.data.data.length){
                        message.warning(rep.data.message);
                        this.errorListStatus(true)
                        this.setState({
                            errorList:rep.data
                        })
                    }else{
                        message.success(rep.data.message);
                    }
                    
                }else{
                    message.warning(rep.data.message);
                }
                
            })
            .catch(() => {
                this.setState({
                    uploading: false,
                });
                message.error('upload failed.');
            });
    }
    propsUpload = () => {
        return {
            action: '/hcm/hcmShop/readExcelFile',
            accept: 'application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
            onRemove: (file) => {
                this.setState(({ fileList }) => {
                    const index = fileList.indexOf(file);
                    const newFileList = fileList.slice();
                    newFileList.splice(index, 1);
                    return {
                        fileList: newFileList,
                    };
                });
            },
            beforeUpload: (file) => {
                this.setState(() => ({
                    fileList: [file],
                }));
                return false;
            },
            fileList: this.state.fileList,
        }
    }
    onuploadVisible = (bl) => {
        this.setState({
            uploadVisible: bl,
            fileList: [],
            uploading: false,
            percent: null
        })
    }
    onShowSetTable = (bl, type) => {
        if (type == 'getlist') {
            this.getByProduct()
            this.onSearch()
        }
        this.setState({
            setTableVisible: bl
        },()=>{
            bl ? this.ShopFile_SetTable.current.getByProduct():null
        })
    }
    render() {
        return <Tpl that={this} />
    }
}
export default App;
