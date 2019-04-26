import { Modal, message, Row, Col, Select,Icon,Button,Cascader } from 'antd';
const Option = Select.Option;
import ajax from '../../../../js/common/ajax';
class Add extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: null,
            itemVisible: false,
            shopVisible: false,
            shopData: {
                selectData: [],
                listData: []
            },
            itemData:{
                selectData: [],
                listData: [],
            }

        }
    }
    componentDidMount() {

    }
    showModal = (type, bl) => {
        this.setState({
            [type]: bl
        }, () => {
            if (this.state.shopVisible) {
                this.getShopList()
            }else if(this.state.itemVisible){
                this.getSingletProList()
                this.getProductClassify()
            }
        })
    }
    addShop = () =>{
        let shopData = this.state.shopData;
        shopData.selectData.push({
            id: "",
            shop_name: "123"
        })
        this.setState({
            shopData
        })
    }
    rmShop = (index) =>{
        let shopData = this.state.shopData;
        if( shopData.selectData.length==1){
            message.warning('最少保留一条')
            return
        }
        shopData.selectData.splice(index, 1);
        this.setState({
            shopData
        })
    }
    onShopSelect = (e,index)=>{
        let shopData = this.state.shopData;
        
        shopData.selectData[index] = shopData.listData.filter(item=>item.id==e)[0];
        this.setState({
            shopData
        })
    }
    getShopList = () => {
        ajax.get('/hcm/hcmShop/getShopListByBmcid')
        .then((response) => {
            if (response.data.status == '10000') {
                
                let shopData = this.state.shopData;
                let data = response.data.data;
                shopData.selectData = data.filter((item, index) => item.focus)
                shopData.listData = data
                this.setState({
                    shopData
                })
            } else {
                message.error(response.data.message);
            }
        }).catch((error) => {
            message.error(error.statusText);
        });
    }
    handleshopOk = ()=>{
        let shopData = this.state.shopData;
        let arr = shopData.selectData.map(item=>item.id);
        if(shopData.selectData.length==0){
            message.warning('最少添加一个重点关注店铺')
            return
        }
        for(let i = 0 ; i<arr.length ; i++){
            if(arr[i]==''){
                message.warning(`第${i+1}条数据未选择店铺，请选择后提交！`)
                return
            }
        }
        ajax.post('/hcm/hcmShop/setFocusShop',{
            shopids:arr.join(',')
        })
        .then((response) => {
            if (response.data.status == '10000') {
                this.showModal('shopVisible', false)
                message.success(response.data.message);
                this.props.getShop()
            } else {
                message.error(response.data.message);
            }
        }).catch((error) => {
            message.error(error.statusText);
        });
    }
    handleItemOk = ()=>{
        let itemData = this.state.itemData;
        let arr = itemData.selectData.map(item=>item.id);
        if(itemData.selectData.length==0){
            message.warning('最少添加一个重点关注单品')
            return
        }
        for(let i = 0 ; i<arr.length ; i++){
            if(arr[i]==''){
                message.warning(`第${i+1}条数据未选择单品，请选择后提交！`)
                return
            }
        }
        ajax.post('/hcm/hcmProduct/updateSingletPro',{
            product_id:arr.join(',')
        })
        .then((response) => {
            if (response.data.status == '10000') {
                this.showModal('itemVisible', false)
                this.props.getItem()
                message.success(response.data.message);
            } else {
                message.error(response.data.message);
            }
        }).catch((error) => {
            message.error(error.statusText);
        });
    }
    getSingletProList = () =>{
        ajax.get('/hcm/hcmProduct/findSingletProList')
        .then((response) => {
            if (response.data.status == '10000') {
                let itemData = this.state.itemData;
                let data = response.data.data;
                itemData.selectData = data
                this.setState({
                    itemData
                })
            } else {
                message.error(response.data.message);
            }
        }).catch((error) => {
            message.error(error.statusText);
        });
    }
    getProductClassify = () =>{
        ajax.get('/hcm/ProductClassify/list')
        .then((response) => {
            if (response.data.status == '10000') {
                let itemData = this.state.itemData;
                let data = response.data.data;
                itemData.listData = data.map(v => Object.assign({}, v, {isLeaf: false, label: v.productClassifyName, value: v.id}))
                this.setState({
                    itemData
                })
            } else {
                message.error(response.data.message);
            }
        }).catch((error) => {
            message.error(error.statusText);
        });
    }
    getlistByClass = (product_classify_id,callback) =>{
        ajax.get('/hcm/hcmProduct/listByClass',{
            params:{
                product_classify_id
            }
        })
        .then((response) => {
            if (response.data.status == '10000') {
                callback(response.data.data)
            } else {
                message.error(response.data.message);
            }
        }).catch((error) => {
            message.error(error.statusText);
        });
    }
    onChangeCascaders = (value, selectedOptions,index) => {
        console.log(value, selectedOptions);
        if(value.length==2){
            let itemData = this.state.itemData;
            itemData.selectData[index]={
                brand_name:selectedOptions[1].brandName,
                id:value[1],
                product_classify_id:value[0],
                product_classify_name: selectedOptions[0].productClassifyName,
                product_name:selectedOptions[0].productClassifyName+'/'+selectedOptions[1].productName,
            }
            this.setState({
                itemData
            })
        }
        
        
    }
    loadData = (selectedOptions) => {
        const targetOption = selectedOptions[selectedOptions.length - 1];
        targetOption.loading = true;
        
        this.getlistByClass(targetOption.id, data => {
            let itemData = this.state.itemData;
            targetOption.loading = false;
            const list = data.map( v =>  Object.assign({}, v, {label:v.productName,value:v.id}))
            if(list.length){
                targetOption.children = list;
            }else{
                targetOption.disabled = true;
                targetOption.isLeaf=true;
            }
            
            itemData.listData = [...this.state.itemData.listData];
            this.setState({
                itemData
            })
        })
        
      }
    addItem = ()=>{
        let itemData = this.state.itemData;
        itemData.selectData.push({
            brand_name:'',
            id:'',
            product_classify_id:'',
            product_classify_name: '',
            product_name:'',
        })
        this.setState({
            itemData
        })
    }
    rmItem = (index) =>{
        let itemData = this.state.itemData;
        if( itemData.selectData.length==1){
            message.warning('最少保留一条')
            return
        }
        itemData.selectData.splice(index, 1);
        this.setState({
            itemData
        })
    }
   
    render() {
        let { itemVisible, shopVisible,shopData,itemData } = this.state;
        
        return (
            <React.Fragment>
                <Modal
                    title="重点关注店铺管理"
                    okButtonProps={{ className: 'btn2-main' }}
                    cancelButtonProps={{ className: 'btn2-sub' }}
                    className='add-shop-modal'
                    visible={shopVisible}
                    onCancel={() => this.showModal('shopVisible', false)}
                    onOk={this.handleshopOk}
                >
                    <Row>
                        <Col className='text-right' span={5}>
                            <span style={{paddingRight:10,verticalAlign:'-4px'}}>
                                店铺名称:
                            </span>
                        </Col>
                        <Col span={17} offse={1}>


                            {
                                
                                shopData.selectData&&shopData.selectData.map((item,index)=>{
                                    return(
                                        <div key={index} style={{marginBottom:'10px', display: 'flex', alignItems: 'center'}}>
                                            <Select
                                                showSearch
                                                value={item.id}
                                                style={{ width: '100%' }}
                                                onChange={(e)=>{this.onShopSelect(e,index)}}
                                                filterOption={(input, option) => option.props.children[0].toLowerCase().indexOf(input.toLowerCase()) >= 0}
                                            >
                                                {
                                                    shopData.listData.map((item2,index2)=>{
                                                        return (
                                                            <Option  
                                                                key={index2} 
                                                                disabled={item2.isauthed=='NOTAUTH'|| shopData.selectData.filter(item3=>item3.id==item2.id).length ? true:false} 
                                                                value={item2.id}
                                                            >
                                                                    {item2.shop_name} {item2.isauthed=='NOTAUTH'?' (未订购) ':null}
                                                            </Option>
                                                        )
                                                    })
                                                }
                                            </Select>
                                            <Icon onClick={(e)=>this.rmShop(index)} type="minus-circle" />
                                        </div>
                                    )
                                })
                            }
                            
                            <div className='addshop'>
                                <Button style={{width:'100%'}} disabled={shopData.selectData.length>=5} onClick={this.addShop} type="dashed">添加</Button>
                            </div>
                        </Col>
                    </Row>
                </Modal>
                <Modal
                    title="重点关注单品管理"
                    className='add-shop-modal'
                    okButtonProps={{ className: 'btn2-main' }}
                    cancelButtonProps={{ className: 'btn2-sub' }}
                    visible={itemVisible}
                    onOk={this.handleItemOk}
                    onCancel={() => this.showModal('itemVisible', false)}
                >
                    <Row>
                        <Col className='text-right' span={5}>
                            <span style={{paddingRight:10,verticalAlign:'-4px'}}>
                                商品名称:
                            </span>
                        </Col>
                        <Col span={17} offse={1}>
                            {
                                itemData.selectData.map((item,index)=>{
                                    return(
                                        <div key={index} style={{marginBottom:'10px', display: 'flex', alignItems: 'center'}}>
                                            <Cascader
                                                style={{ width: '100%' }}
                                                value={[item.product_classify_id,item.id]}
                                                options={itemData.listData}
                                                onChange={(value, selectedOptions)=>this.onChangeCascaders(value, selectedOptions,index)}
                                                loadData={this.loadData}
                                                changeOnSelect
                                            />
                                            <Icon onClick={(e)=>this.rmItem(index)} type="minus-circle" />
                                        </div>
                                    )
                                })
                            }
                            <div className='addshop'>
                                <Button style={{width:'100%'}} disabled={itemData.selectData.length>=5} onClick={this.addItem} type="dashed">添加</Button>
                            </div>
                        </Col>
                    </Row>
                </Modal>
            </React.Fragment>
        )
    }
}
export default Add;
