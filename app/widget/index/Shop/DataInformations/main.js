import Tpl from './tpl';
import ajax from '../../../../js/common/ajax'
import { Form, message } from 'antd';
import { connect } from 'react-redux'

const mapState = state => ({
    currentBrand: state.dealer.currentBrand
})
@connect(mapState)
class DataInformations extends React.Component {
    constructor(props) {
        // document.title = '资料信息';
        super(props)
        this.state = {
            visible: false,//新增弹框
            confirmLoading: false,
            dealername: "",
            dict_name: "",
            id: "",
            memo: "",
            mobile: "",
            principal: "",
            region: "",
            shop_url: "",
            username: "",
            wangwang: "",
            PopoWei: "",
            userid: "",

            strict: "",
            BTNtit: "",
            WEIXING: "未绑定",
            titleList:[],
            add_field:{}
        }


    }
    componentDidMount() {
        this.DidMountText()
        this.getBybmcidAndModule()
    }
    ModifyPhone = () => {
        if (this.state.mobile != "" && this.state.mobile != undefined) {
            window.location = "/index.html#/ModifyBindings/c/" + this.state.mobile + "/n"
        } else {
            window.location = "/index.html#/ModifyPhone/c/" + this.state.mobile
        }
    }
    HistoryGo = () => {
        window.history.go(-1)
    }
    JBWEIxing = () => {
        ajax.post('/hcm/user/unbindWX', {
            userid: this.state.userid,
            usertype: "c"
        })
            .then((res) => {
                console.log(res)
                if (res.data.status == 10000) {
                    this.setState({
                        WEIXING: "未绑定"
                    }, () => {
                        this.DidMountText()
                    })
                } else {
                    message.error(res.data.message)
                }

            })
    }
    BDWEIxing = () => {
        console.log(1)
        ajax.post('/hcm/wechat/getQRcode', {
            userid: this.state.userid,
            usertype: "c"
        })
            .then((res) => {
                //console.log(res)
                if (res.data.status == 10000) {
                    this.setState({
                        ticket: "https://mp.weixin.qq.com/cgi-bin/showqrcode?ticket=" + res.data.data
                    }, () => {
                        this.DidMountText()
                    })
                } else {
                    message.error(res.data.message)
                }

            })
    }
    getBybmcidAndModule=()=>{
        ajax.get('/hcm/hcmCustomModel/getBybmcidAndModule',{
            params: {
                module: 'SHOP'
            }
        }).then(res => {
            const { data, status, message } = res.data
            if (status === '10000') {
                this.setState({
                    titleList:data.add.data
                })

            }
        }).catch(err => {
            
            message.error('系统繁忙，请稍后再试！')
        })
    }
    DidMountText = () => {

        ajax.post('/hcm/dealer/findById')
            .then((res) => {
                if (res.data.status == 10000) {
                    if (res.data.data != null && res.data.data != undefined) {
                       
                        var jsonObject = JSON.parse(res.data.data.add_field); 
                        // var valuex=[]
                        // var keys=[]
                        // console.log(jsonObject)
                        // for (var p in jsonObject){
                        //     valuex.push(jsonObject[p]);
                        //     keys.push(p);

                        // }
                        
                        this.setState({
                            add_field: jsonObject,
                            dealername: res.data.data.dealername,
                            dict_name: res.data.data.dict_name,
                            id: res.data.data.id,
                            memo: res.data.data.memo,
                            mobile: res.data.data.mobile,
                            principal: res.data.data.principal,
                            region: res.data.data.region,
                            shop_url: res.data.data.shop_url,
                            username: res.data.data.username,
                            wangwang: res.data.data.wangwang,
                            PopoWei: res.data.data.unionid,
                            userid: res.data.data.userid,

                        })
                        if (this.state.PopoWei != "" && this.state.PopoWei != undefined) {
                            this.setState({
                                WEIXING: res.data.data.nickname
                            })
                        }
                        if (this.state.mobile != "" && this.state.mobile != undefined) {
                            this.setState({
                                BTNtit: "修改绑定>"
                            })

                        } else {
                            this.setState({
                                BTNtit: "绑定手机>"
                            })
                        }
                    } else {
                        this.setState({
                            BTNtit: "绑定手机>"
                        })
                    }
                } else {
                    message.error(res.data.message)
                    this.setState({
                        BTNtit: "绑定手机>"
                    })

                }
            })

    }
    BJBtn = () => {

        this.setState({
            visible: true,
            confirmLoading: true
        })
    }
    ForgetSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            console.log(values)
            if (values.province[0] != "" && values.province[0] != undefined) {
                if (values.contact != "" && values.contact != undefined) {
                    if (values.take_people != "" && values.take_people != undefined) {
                        if (values.contact.length <= 50) {
                            const han = /[\u4E00-\u9FA5]/i;
                            if (!han.test(values.contact)) {
                                if (values.take_people.length <= 32) {
                                    if (values.address.length <= 100) {
                                        ajax.post('/hcm/dealer/updateDealer', {
                                            id: this.state.id,
                                            province: values.province[0],
                                            city: values.province[1],
                                            strict: values.province[2],
                                            address: values.address,
                                            contact: values.contact,
                                            takePeople: values.take_people
                                        })
                                            .then((res) => {
                                                if (res.data.status == 10000) {
                                                    console.log(res)
                                                    this.setState({
                                                        visible: false,
                                                        confirmLoading: false
                                                    })
                                                    this.DidMountText()
                                                } else if (res.data.status == 12003) {
                                                    message.error(res.data.message)
                                                }
                                            })
                                    } else {
                                        message.error("详情地址限制100个字符以内！")
                                    }
                                } else {
                                    message.error("对接人限制32个字符以内！")
                                }
                            } else {
                                message.error("联系方式不可以输入汉字！")
                            }

                        } else {
                            message.error("联系方式限制50个字以内！")
                        }

                    } else {
                        message.error("请输入对接人！")
                    }
                } else {
                    message.error(" 请输入联系方式！")
                }
            } else {
                message.error(" 请输入所在地区！")
            }

        })
    }


    ModifyPassword = () => {

        window.location = "/index.html#/ModifyPassword/" + this.state.username
    }
    handleCancel = () => {
        this.setState({
            visible: false,
            confirmLoading: false
        })
    }
    render() {
        return <Tpl that={this} />
    }
}
export default Form.create()(DataInformations)