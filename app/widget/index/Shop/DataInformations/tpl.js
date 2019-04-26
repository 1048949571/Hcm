import './DataInformations.less'
import ThatMain from '../../../HOC/That';
import ContentBox from '../../../components/Layout'
import Footer from "../../../components/Copyright"
import chinaCode from '../../../../static/chinaCode.json'

import { Table, Button,Popover, Input, Cascader, Modal, Icon, Form, Select, DatePicker, Pagination, Breadcrumb } from 'antd';
const { RangePicker } = DatePicker;

const FormItem = Form.Item;


const Tpl = ThatMain((that) => {
    const { getFieldDecorator } = that.props.form;

    const content = (
        <div>
          <img style={{width:"200px"}} src={that.state.ticket} alt=""/>
        </div>
      )

    
    return (
        <ContentBox
            breadcrumbList={['个人中心', '资料信息']}
            linkList={['', '']}
        >
        <div className='DataInformations'>
            {/* <div className='Breadcrumb'>
                <Breadcrumb>
                    <Breadcrumb.Item>
                        <a style={{ margin: '0' }} onClick={that.HistoryGo}>
                            个人中心
                                </a>

                    </Breadcrumb.Item>
                    <Breadcrumb.Item>资料信息</Breadcrumb.Item>
                </Breadcrumb>

            </div> */}
            <div className="ChangeHistoryBOXs">
                <div className="ChangeBody">
                    <h5>{that.state.wangwang}</h5>
                    <p>平台：{that.state.dict_name}</p>
                    <p>店铺首页地址：{that.state.shop_url}</p>
                    <p>经销商名称：{that.state.dealername}</p>
                    {
                        that.props.currentBrand.apply_status === 'DISAGREE' ?
                        <Button style={{marginTop:'20px'}} type="primary" onClick={() => {that.props.history.push('/')}}>返回首页</Button> :
                        null
                    }
                </div>
                {/* <span className="BJbtn" onClick={that.BJBtn}><Icon type="form" />编辑</span> */}
            </div>
            <div className="ChangeHistoryBOXs">
                <div className="ChangeBody">

                    <p><img src="../../../../img/DataInformation/Personal center_username.png" style={{width:"18px",height:"18px"}} alt="" /><span>用户名：{that.state.username}</span>  <a onClick={that.ModifyPassword}>修改密码></a></p><br />
                    <p><img src="../../../../img/DataInformation/Personal center_ipone.png" style={{width:"18px",height:"18px"}}  alt="" /><span>绑定手机：{that.state.mobile}</span> <a onClick={that.ModifyPhone}>{that.state.BTNtit}</a></p><br />
                    <p><img src="../../../../img/DataInformation/Personal center_wechat.png" style={{width:"18px",height:"18px"}}  alt="" />
                        <span>绑定微信：{that.state.WEIXING}</span>
                        {/* <Popover content={content} title="绑定微信" trigger="click">
                            <a onClick={that.BDWEIxing}>绑定微信></a>
                        </Popover> */}
                        {
                            that.state.PopoWei ?  <a onClick={that.JBWEIxing}>立即解绑></a>
                            :  <Popover content={content} title="绑定微信" trigger="click">
                                <a onClick={that.BDWEIxing}>绑定微信></a>
                            </Popover>
                                   
                               
                        }
                    </p><br />
                </div>
            </div>
            <div className="ChangeHistoryBOXs">
                <div className="ChangeBody">
                    {/* <div className="Hdiv"><h4><span>备注名称：{that.state.memo}</span></h4><h4><span>负责人：{that.state.principal}</span></h4><h4><span>地区：{that.state.region}</span></h4></div>
                     */}
                    {
                        that.state.titleList.length ?  
                        <div className="Hdiv">
                            <h4>
                                
                                {
                                    that.state.titleList.map((v,i)=>{
                                        return <span key={i} style={{display:"inline-block",marginTop: "10px",marginRight:"20px"}}>
                                            
                                            {v.fieldname}:{that.state.add_field[v.fieldvalue]&&that.state.add_field[v.fieldvalue]} <br/>
                                                                                      
                                    </span>
                                    })
                                }
                            </h4>
                        </div> 
                        :null
                    }
                    


                </div>
            </div>
            <div id="ChangeHistoryBOXs">

            </div>
            

        </div>
        </ContentBox>
    )
})
export default Tpl