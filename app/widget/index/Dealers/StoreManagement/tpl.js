import './StoreManagement.less'
import ThatMain from '../../../HOC/That'
import ContentBox from '../../../components/Layout';
import { AddIcon } from '../../../components/Component';
import platform from '../../../components/platform'
import { Form, Modal, Input, Button, Select, Breadcrumb } from 'antd';


const Tpl = ThatMain((that) => {

    const Option = Select.Option;
    const FormItem = Form.Item;
    const { getFieldDecorator } = that.props.form;
    const Search = Input.Search;
    const Wang = that.state.WangWAN ? "block" : "none"
    const WangWang = {
        display: Wang,
        float: "left",
        marginLeft: "26px"
    }

    const subBox = {
        float: 'left',
        width: '100%',
        textAlign: 'right',
        paddingRight: '22px'
    }
    const currentData = that.props.brandList.filter(x => {

        return x.apply_status === "APPROVED";
    });



    const OPtionchildren = currentData ? currentData.map((d, i) => <Option key={d.bmcid}>{d.companyname}</Option>) : ""
    return (
        <ContentBox

            breadcrumbList={['店铺档案']}
            linkList={['']}
            history={that.props.history}
        >
            <div className='StoreManagement'>
                {/* <div className="InformationNav">
            <Breadcrumb>
                    <Breadcrumb.Item>店铺管理</Breadcrumb.Item>
                </Breadcrumb>
            </div> */}
                <div className="StoreManagementBOX">
                    <div className="StoreManagementtit">

                        <div className="DIV" style={{height:"40px"}}>

                            {/* <Button type="primary" onClick={() => that.addStore()}><AddIcon style={{paddingRight:'8px'}} />新增</Button> */}

                            <Search
                                className="SEAR"
                                placeholder="请输入店铺或旺旺名"
                                onSearch={value => that.SearchFun(value)}
                                style={{ width: 215, fontSize: "12px" }}
                            />
                            {/* <Button onClick={that.BtnFun} className="SEARsx">清除</Button> */}
                        </div>
                    </div>
                    {
                            that.state.StoreManagement_list!="" && that.state.StoreManagement_list!=undefined ?  <div className="StoreManagementTXT">
                        
                                <ul>
                                    {
                                        that.state.StoreManagement_list.map((item, index) => {
                                            return (
                                                <li key={index} className="StoreManagementLI">
                                                    <h6>{item.shop_name}<span>{item.wangwang}</span></h6>
                                                    <div>
                                                        <span style={{paddingRight: '20%'}}>平台：{item.platform_name}</span>
                                                        <span>店铺首页地址：</span><a href={item.shop_url}>{item.shop_url}</a>
                                                    </div>
                                                </li>
                                            )
                                        })
                                    }

                                </ul>
                                
                        
                    </div> : <div className="StoreManagementTXT" style={{ background:"#fff",textAlign: "center"}}>暂无数据</div>}
                    <Modal title={that.state.type}
                        visible={that.state.visible}
                        footer={null}
                        maskClosable={false}
                        confirmLoading={that.state.confirmLoading}
                        onCancel={() => that.handleCancel()}
                    >
                        <Form onSubmit={that.ForgetSubmit} className="forget-form" style={{ display: "inline-block", width: "100%" ,paddingLeft:20}}>
                            {
                                that.state.StoreManagement ?
                                    <div className="FORMtit" style={{
                                        float: "left", marginLeft: "56px"
                                    }} > <div className="FORMus" style={{ width: "auto", float: "left", lineHeight: "40px" }}> <b style={{ fontSize: "14px", color: "red" }}>*</b> <b>平台：</b></div>
                                        <FormItem className="tops" style={{
                                            width: "320px",
                                            height: "40px",
                                            float: "left", borderRadius: "2px"
                                        }}>
                                            {getFieldDecorator('FieldName', {
                                                initialValue: { "key": that.state.FieldID, "label": that.state.FieldName }
                                            })(

                                                <Select
                                                    labelInValue
                                                    showSearch
                                                    initialValue={{ key: 'lucy', value: "a" }}
                                                    style={{ width: 320 }}
                                                    placeholder="请选择平台"
                                                    optionFilterProp="children"
                                                    onChange={that.handleChange}
                                                    filterOption={(input, option) => this.option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                                                >
                                                    {that.state.childrenx}
                                                </Select>

                                            )}
                                        </FormItem>
                                    </div> : null
                            }
                            <div className="FORMtit" style={{
                                float: "left", marginLeft: "26px"
                            }}> <div className="FORMus" style={{ width: "auto", float: "left", lineHeight: "40px" }}><b style={{ fontSize: "14px", color: "red" }}>*</b> <b>店铺名称：</b></div>
                                <FormItem className="tops" style={{
                                    width: "320px",
                                    height: "40px",
                                    float: "left", borderRadius: "2px"
                                }}>
                                    {getFieldDecorator('shop_name', {
                                        initialValue: that.state.shop_name || ""
                                    })(
                                        <Input className='user-name'
                                            maxLength="50"
                                            placeholder="请输入店铺名称"
                                        />
                                    )}
                                </FormItem>
                            </div>
                            <div className="FORMtit" style={WangWang}>
                                <div className="FORMus" style={{ width: "auto", float: "left", lineHeight: "40px" }}><b style={{ fontSize: "14px", color: "red" }}>*</b> <b>旺旺名称：</b></div>
                                <FormItem className="tops" style={{
                                    width: "320px",
                                    height: "40px",
                                    float: "left", borderRadius: "2px"
                                }}>
                                    {getFieldDecorator('wangwang', {
                                        initialValue: that.state.wangwang || ""
                                    })(
                                        <Input className='user-name'
                                            maxLength="50"
                                            placeholder="请输入旺旺名称"
                                        />
                                    )}
                                </FormItem>
                            </div>
                            <div className="FORMtit" style={{
                                float: "left"
                            }}> <div className="FORMus" style={{ width: "auto", float: "left", lineHeight: "40px" }}><b style={{ fontSize: "14px", color: "red" }}>*</b> <b>店铺首页地址：</b></div>
                                <FormItem className="tops" style={{
                                    width: "320px",
                                    height: "40px",
                                    float: "left", borderRadius: "2px"
                                }}>
                                    {getFieldDecorator('shop_url', {
                                        initialValue: that.state.shop_url || ""
                                    })(
                                        <Input className='user-name'
                                            maxLength="500"
                                            placeholder="请输入店铺地址"
                                        />
                                    )}
                                </FormItem>
                            </div>
                            <div className="FORMtit" style={{
                                float: "left", marginLeft: "26px"
                            }}> <div className="FORMus" style={{ width: "auto", float: "left", lineHeight: "40px" }}><b style={{ fontSize: "14px", color: "red" }}>*</b> <b>店铺类型：</b></div>
                                <FormItem className="tops" style={{
                                    width: "320px",
                                    height: "40px",
                                    float: "left", borderRadius: "2px"
                                }}>
                                    {getFieldDecorator('shop_type', {
                                        initialValue: that.state.shop_type || ""
                                    })(
                                        <Select
                                            showSearch
                                            style={{ width: 320 }}
                                            placeholder="请选择店铺类型"
                                            optionFilterProp="children"
                                            filterOption={(input, option) => this.option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                                        >
                                            <Option value="自营店铺">自营店铺</Option>
                                            <Option value="分销店铺">分销店铺</Option>
                                        </Select>
                                    )}
                                </FormItem>
                            </div>
                            <div className="FORMtit" style={{
                                float: "left", marginLeft: "15px"
                            }}> <div className="FORMus" style={{ width: "auto", float: "left", lineHeight: "40px" }}><b style={{ fontSize: "14px", color: "red" }}>*</b> <b>授权品牌方：</b></div>
                                <FormItem className="tops" style={{
                                    width: "320px",
                                    height: "40px",
                                    float: "left", borderRadius: "2px"
                                }}>
                                    {getFieldDecorator('mcids', {
                                        initialValue: that.state.bmcShopList.map((item, index) => item.bmcid)
                                    })(
                                        <Select
                                            mode="multiple"
                                            style={{ width: '100%' }}
                                            placeholder="请选择授权品牌方"
                                            onChange={that.handleChangesx}
                                            onFocus={that.onFocusChang}
                                        >
                                            {OPtionchildren}
                                        </Select>
                                    )}
                                </FormItem>
                            </div>
                            <div className="FORMtit " style={subBox}>
                                <Button className='btn2-main' style={{
                                   
                                    marginRight: "20px"
                                }} htmlType="submit">确认</Button>
                                <Button className='btn2-sub' onClick={() => that.handleCancel()}>取消</Button>
                            </div>
                        </Form>
                    </Modal>

                </div>
                {/* <Footer className='Copyright'></Footer> */}

            </div>
        </ContentBox>
    )
})
export default Tpl