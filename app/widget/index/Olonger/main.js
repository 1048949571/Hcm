import Tpl from './tpl';
import { message } from 'antd';
import ajax from '../../../js/common/ajax';
class Olonger extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            propsMatch: "",
            visible: false,
            visibleValue: "",
            brandPone: null,
            math: "",
            version: ""
        }
    }
    componentDidMount() {
        // console.log(this.props)
        // this.setState({
        //     propsMatch:this.props.match.path
        // })
        this.checkCookie()
    }

    getCookie = (name) => {
        var arr;
        var reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
        if (arr = document.cookie.match(reg))
            return unescape(arr[2]);
        else
            return null;
    }
    checkCookie = () => {

        if (document.cookie.length > 0) {

            if (this.getCookie("version") != null && this.getCookie("version") != "" && this.getCookie("version") != undefined) {
                this.setState({
                    version: this.getCookie("version")
                }, () => {
                    //  console.log(this.state.version)
                })
            }

        }

    }
    handleOk = () => {
        if (this.state.brandPone != "" && this.state.brandPone != undefined && this.state.brandPone.length == 11) {
            ajax.post("/hcm/HcmUpgradedVersion/save", {
                phonenum: this.state.brandPone,
                upgradeVersion: this.state.visibleValue
            }).then((res) => {
                if (res.data.status == "10000") {
                    message.success(res.data.message)
                    this.setState({
                        visible: false
                    });
                }
                //console.log(res)
            })
        } else {
            message.error("请输入手机号,并且长度11位！")
        }


    }
    handleInputChange = (e) => {
        this.setState({
            brandPone: e.target.value
        }, () => {
            //  console.log(this.state.brandPone)
        })
    }
    handleCancel = () => {

        this.setState({
            visible: false,
        });
    }
    onChange = (a, b, c) => {
        console.log(a, b, c);
    }
    onClickbtnLJ = (e) => {
        //console.log(e.target.value)
        this.setState({
            visible: true,
            visibleValue: e.target.value
        });
    }
    imgclick = () => {
         var FormatUpgradeCar = document.getElementById("FormatUpgrade")
     
         document.getElementById('FormatUpgradeCar').scrollIntoView();
        
}

render() {
    return <Tpl that={this} />
}
}
export default Olonger;
