
import { message, Select, Icon, Input, Button } from 'antd';
import ajax from '../../../../js/common/ajax';
import lib from '../../../../js/common/lib';
import ContentBox from '../../../components/Layout';
const { TextArea } = Input;
const Option = Select.Option;
class App extends React.Component {
    constructor(props) {
        super(props)
        let { id, dealerid, type } = this.props.match.params;
        this.state = {
            id, dealerid, type,
            shopUrlStatus:false,
            shopUrlCheck:type == 'edit'?true:false,
            formatColumn: {},
            product_classify_id: null,
            bmcid: 1,
            product_name: null,
            platformCode:null,
            shopmainid:null,
            brand_name: null,
            productclassifyid:[],
            addField: {},
            platForm: [],
            platTarget:{},
            brandList:[],
            mcids:""

        }
    }
    componentWillMount() {
        let { type } = this.props.match.params;
        this.getPlatform()
        this.getByProduct()
        if (type == 'add') {

        } else {
            this.getInfo()
        }
        this.brandList()

    }
    componentDidMount() {

    }
    getUrlInfo = () => {
        let {shopUrl,platformCode} = this.state;
        if(!shopUrl||!lib.checkUrl(shopUrl)){
            message.error('首页地址验证不通过,请输入正确的首页地址！')
            return
        } 
        if(!platformCode||!(platformCode.trim().length)){
            message.error('平台不可为空')
            return
        }
        this.setState({
            shopUrlStatus:true,
        },()=>{
            ajax.get('/hcm/hcmShop/searchShopPy', {
                params: {
                    shopUrls:shopUrl,
                    platform:platformCode
                }
            }).then((response) => {
                if (response.data.status == '10000') {
                    let data = response.data.data[0]
                    if(data.success=='True'){
                        this.setState({
                            shopUrlStatus:false,
                            wangwang:data.wangwang,
                            shopUrl:data.resultShopUrl,
                            shopName:data.shopName,
                            shopmainid:data.shopmainid,
                            shopUrlCheck:true
                        })
                        message.success('店铺信息获取成功')
                    }else{
                        this.setState({
                            shopUrlStatus:false
                        })
                        message.error('店铺信息获取失败，请检查首页地址是否正确')
                    }
                }else{
                    this.setState({
                        shopUrlStatus:false
                    })
                    message.error(response.data.message)
                }
            }).catch((error) => {
                message.error(error.statusText);
            });
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
                    platForm:can.platform||[]
                })
        //     }

        // }).catch((error) => {
        //     message.error(error.statusText);
        // });
    }
    getInfo() {
        let { id ,dealerid} = this.props.match.params;
        ajax.get('/hcm/hcmShop/getById', {
            params: {
                shopId: id,
                dealerid,
                getType: 'UPDATE'
            }
        }).then((response) => {
            let {shopUrl, dealername, wangwang, platformCode,shopmainid, shopName,productclassifyid, status,productClassifyName, platformname, id, ...addField } = response.data.data;
            this.setState({
                shopUrl, dealername, wangwang, platformCode, shopName,shopmainid, addField,productclassifyid:productclassifyid ? productclassifyid.split(',') :[]
            })

        }).catch((error) => {
            message.error(error.statusText);
        });
    }
    getByProduct = () => {
        ajax.get('/hcm/hcmCustomModel/getBybmcidAndModule', {
            params: {
                module: 'SHOP'
            }
        }).then((response) => {
            let productList = response.data.data;
            this.setState({
                formatColumn: productList
            })
        }).catch((error) => {
            message.error(error.statusText);
        });
    }
    fixedIptChange(e, type) {
        let state = this.state;
        if(type=='shopUrl'){
            
            state.shopUrlStatus=false;
            state.shopUrlCheck=state.platTarget.pricename=='main'?false:true;
            state.wangwang=null;
            state.shopName=null;
            state.shopmainid=null;
        }
        state[type] = e.target.value;
        this.setState(state)
    }
    iptChange(e, type) {

        let addField = this.state.addField;
        console.log(e.target.value)
        addField[type.fieldvalue] = e.target.value;
        this.setState({
            addField: addField
        })
    }
    onSubmit() {
        let {shopUrlCheck, id, type, shopUrl, dealername, wangwang,shopmainid, platformCode, shopName, addField, formatColumn } = this.state;
        if(!platformCode||!(platformCode.trim().length)){
            message.error('平台不可为空')
            return
        }
        if(!shopUrl||!lib.checkUrl(shopUrl)){
            message.error('首页地址验证不通过')
            return
        }
        if(!shopUrlCheck){
            message.error('请先获取店铺信息')
            return
        }
        if(!shopName||!(shopName.trim().length)){
            message.error('店铺名不可为空')
            return
        }
        if(!dealername||!(dealername.trim().length)){
            message.error('经销商名称不可为空')
            return
        }
        if(platformCode&&(platformCode=='TB'||platformCode=='TM'||platformCode=='1688')&&(!wangwang||!(wangwang.trim().length))){
            message.error('请输入旺旺名称')
            return
        }
        LoadingModal({ bl: true, text: '保存中,请稍后...' })
        ajax.post('/hcm/hcmShop/saveHcmShopByBmc', {

            shopUrl, dealername, wangwang, platformCode, shopName,shopmainid, addField: JSON.stringify(addField),productclassifyid:this.state.mcids,
            id: type == 'add' ? null : id
        }).then((response) => {

            
            if (response.data.status == '10000') {
                message.success(response.data.message)
                if (type == 'add') {
                    this.setState({
                        shopUrl: null,
                        dealername: null,
                        wangwang: null,
                        platformCode: null,
                        shopUrlStatus:false, 
                        shopUrlCheck:false, 
                        shopName: null,
                        shopmainid:null,
                        productclassifyid:[],
                        addField: {},
                        platTarget:{}
                    })
                } else {
                    window.location.href = `/index.html#/ShopFile`;
                }
            } else {
                console.log(response)
                message.warning(response.data.message)
            }

            LoadingModal({ bl: false })
        }).catch((error) => {
            LoadingModal({ bl: false })
            message.error(error.statusText);
        });
    }
    onChangeSlect = (e)=>{
        
        this.setState({ 
            platformCode: e, 
            shopUrlStatus:false, 
            shopUrlCheck:false, 
            wangwang: null,
            shopName: null,
            platTarget:can.platform.filter(item=>item.dictCode==e)[0]
        },()=>{
            let platTarget = this.state.platTarget;
            if(platTarget.pricename!='main'){
                this.setState({
                    shopUrlCheck:true
                },()=>{
                    console.log(1,this.state.shopUrlCheck)
                })
            }
        })
    }
    brandList=()=>{
        ajax.post('/hcm/ProductClassify/list', {
        }).then((response) => {
            //console.log(response)
            if (response.data.status == '10000') {
               this.setState({
                brandList:response.data.data
               })
            } else {
                message.warning(response.data.message)
            }

        }).catch((error) => {
            message.error(error.statusText);
        });
    }
    handleChangesx = (value,a) => {
        console.log(value,a)
        this.setState({
            mcids: value.join(","),
            productclassifyid:value
        })

    }
    render() {
        let { id, type, addField,shopUrlStatus,shopUrlCheck,platTarget, formatColumn, platForm } = this.state;

        let { add, basic } = formatColumn;
        const OPtionchildren = this.state.brandList.map((d, i) => <Option key={d.id}>{d.productClassifyName}</Option>)
        return (
            <ContentBox
                breadcrumbList={['店铺档案', type == 'add' ? '新增店铺档案' : '编辑店铺档案']}
                linkList={['1', '']}
                history={this.props.history}
            >
                <div className='ActionShopFile'>
                    
                    <div className='content'>
                        <div className='box'>
                            {/* shopUrl,memo,region,principal,dealername,wangwang,platformCode,shopName, */}
                            <div className='items'>
                                <div className='item'>
                                    <span className='text red'>平台</span>
                                    <Select  disabled={ type == 'add' ? shopUrlStatus:true } value={this.state.platformCode} style={{ width: 350 }} onChange={this.onChangeSlect}>
                                        <Option  value={null}>请选择</Option>
                                        {
                                            platForm.map((item, index) => {
                                                return (
                                                    <Option key={index} value={item.dictCode}>{item.dictName}</Option>
                                                )
                                            })
                                        }
                                    </Select>
                                </div>
                                <div style={{position:'relative'}} className='item'>
                                    <span className='text red'>店铺首页地址</span>
                                    <Input disabled={ type == 'add' ? shopUrlStatus:true } maxLength={512} placeholder="请输入" onChange={e => this.fixedIptChange(e, 'shopUrl')} value={this.state.shopUrl} className='input' />
                                    {
                                        platTarget.pricename=='main' ? 
                                        <Button disabled={shopUrlCheck} onClick={this.getUrlInfo} style={{position:'absolute',right:'-150px'}}>
                                            {
                                                shopUrlCheck  ? 
                                                <React.Fragment>
                                                    信息获取成功
                                                    <Icon type="check-circle"  style={{paddingLeft:'9px',color:'rgba(0,0,0,0.3)'}}/>
                                                    
                                                </React.Fragment>
                                                :
                                                <React.Fragment>
                                                    获取店铺信息  
                                                    {
                                                        shopUrlStatus ? 
                                                        <Icon spin type="loading" />
                                                        :
                                                        null
                                                    }                                  
                                                </React.Fragment>
                                                
                                            }
                                        </Button>
                                        :null
                                    }
                                </div>
                                <div className='item'>
                                    <span className='text red'>店铺名称</span>
                                    <Input 
                                        maxLength={512} 
                                        disabled={type == 'add' ? platTarget.pricename=='main':true} 
                                        placeholder={platTarget.pricename=='main'?"店铺名称根据首页地址获取":"请输入店铺名称"} 
                                        onChange={e => this.fixedIptChange(e, 'shopName')}  
                                        value={this.state.shopName} 
                                        className='input' 
                                    />
                                </div>
                                <div className='item'>
                                    <span className={this.state.platformCode=='TB'||this.state.platformCode=='TM'||this.state.platformCode=='1688'?'text red':'text '}>旺旺名称</span>
                                    <Input 
                                        maxLength={32} 
                                        disabled={type == 'add' ? platTarget.pricename=='main':true} 
                                        placeholder={platTarget.pricename=='main'?"旺旺名称根据首页地址获取":"请输入旺旺名称"} 
                                        onChange={e => this.fixedIptChange(e, 'wangwang')} 
                                        value={this.state.wangwang} 
                                        className='input' 
                                    />
                                </div>
                                <div className='item'>
                                    <span className='text red'>经销商名称</span>
                                    <Input maxLength={32} placeholder="请输入" disabled={type == 'add' ? false : true} onChange={e => this.fixedIptChange(e, 'dealername')} value={this.state.dealername} className='input' />
                                </div>
                                <div className='item'>
                                    <span className='text'>经营品类</span>
                                   <div  className='input'>
                                   <Select
                                            mode="multiple"
                                            placeholder="请选择经营品类"
                                            onChange={this.handleChangesx}
                                            onFocus={this.onFocusChang}
                                            value={this.state.productclassifyid}
                                        >
                                            {OPtionchildren}
                                        </Select>
                                   </div>
                                </div>
                                {/* {
                                    basic ?
                                        basic.data.map((item, index) => {
                                            if (item.fieldvalue !== "shopName"&&item.fieldvalue !== "shopUrl"&&item.fieldvalue !== "wangwang" && item.fieldvalue !== "dealername" && item.fieldvalue !== "platformname") {
                                                return (
                                                    <div key={'basic' + index} className='item'>
                                                        <span className='text'>{item.fieldname}</span>
                                                        <Input maxLength={32} placeholder="请输入" onChange={e => this.fixedIptChange(e, item.fieldvalue)} value={this.state[item.fieldvalue]} className='input' />
                                                    </div>
                                                )
                                            }
                                        })
                                        : null
                                } */}
                                {
                                    add ?
                                        add.data.map((item, index) => {
                                            if (item.fieldvalue !== "brand_name" && item.fieldvalue !== "product_name") {
                                                return (
                                                    <div key={'add' + index} className='item'>
                                                        <span className='text'>{item.fieldname}</span>
                                                        <Input  maxLength={item.fieldvalue=='memo'?128:32}placeholder="请输入" onChange={e => this.iptChange(e, item)} value={addField[item.fieldvalue]} className='input' />
                                                    </div>
                                                )
                                            }
                                        })
                                        : null
                                }
                            </div>

                            <div className='items'>
                                <div className='item'>
                                    <span className='text'></span>
                                    <Button className="btn2-main" onClick={() => this.onSubmit()} style={{ marginLeft: '20px' }}>确认</Button>
                                    <a href={`/index.html#/ShopFile`}><Button className="btn2-sub noneFloat" >取消</Button></a>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </ContentBox>
        )
    }
}
export default App;
