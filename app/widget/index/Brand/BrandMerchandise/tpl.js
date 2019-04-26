import './BrandMerchandise.less'
import ThatMain from '../../../HOC/That';
import Copyright from "../../../components/Copyright";
import platform from '../../../components/platform'
import { Card, Table, Pagination, Carousel, Icon, Row, Col } from "antd"
const Tpl = ThatMain((that) => {
    const CardStylex = {
        cursor: "pointer",
        border: "1px solid dodgerblue"
    }
    const CardStyles = {
        cursor: "pointer",
        border: "1px solid #fff"
    }
    const style=[ "rgba(24,144,255,1)","rgba(55,203,203,1)","rgba(250,211,55,1)","rgba(242,99,123,1)","rgba(151,95,228,1)","#ccc"]
    // console.log(that.state.shopGroupData)
    return (
        <div className='BrandMerchandise'>

            <div className='content'>
                <div className="contentBox">
                    <Card bodyStyle={{ padding: '0px', display: 'flex', flexGrow: '1' }} title="品牌商品库信息概览" bordered={false} style={{ width: '100%', display: 'flex', height: "100%", flexDirection: 'column', color: "#333" }}>

                        <div>
                            <Icon type="left" theme="outlined" style={{ fontSize: '30px', lineHeight: "344px", margin: "0px 5px", color: "#D9D9D9" }} onClick={that.handlePrev} />
                        </div>
                        {
                            that.state.JingPinPTx != "" ? <Carousel style={{ width: "95%", height: "320px" }} dots={false} beforeChange={that.beforeChange} afterChange={that.onChange} ref={that.refx}>
                                <div style={{ height: "320px", marginTop: "10px" }}>
                                    <Row gutter={16}>
                                        <Col span={7} style={{ padding: "0px", background: "rgba(255,255,255,1)", boxShadow: "0px 3px 8px 0px rgba(11,72,120,0.15)", marginLeft: "20px" }}>
                                            <Card style={that.state.CardStyle == that.state.JingPinPTx[0].platform_code ? CardStylex : CardStyles} onClick={() => that.CardStyle(that.state.JingPinPTx[0].platform_code)} title={<div style={{ width: "150px",marginLeft:"30%" }}> {platform('TB', { float: "left",  width: "34px", height: "34px" })} <b style={{ fontSize: "14px", color: "#666", float: "left", marginTop: " 5px", marginLeft: "6px" }}>{that.state.JingPinPTx[0].platform_name}</b></div>} bordered={false}>
                                                <div className="CardDivs" style={{ float: "left", textAlign: "left" }}>
                                                    <h4>店铺数</h4>
                                                    <h5>商品数  </h5>
                                                    <h5>平均铺货密度</h5>
                                                </div>
                                                <div className="CardDivs" style={{ float: "right", textAlign: "right" }}>
                                                    <h5>{that.state.JingPinPTx[0].my_brand.shopcount} </h5>
                                                    <h5>{that.state.JingPinPTx[0].my_brand.itemcount}</h5>
                                                    <h5>{that.state.JingPinPTx[0].my_brand.shopcount > 0 ? parseInt(that.state.JingPinPTx[0].my_brand.itemcount / that.state.JingPinPTx[0].my_brand.shopcount) : 0}个/店</h5>
                                                </div>
                                            </Card>
                                        </Col>
                                        <Col span={7} style={{ padding: "0px", background: "rgba(255,255,255,1)", boxShadow: "0px 3px 8px 0px rgba(11,72,120,0.15)", margin: "0 30px" }}>
                                            <Card style={that.state.CardStyle == that.state.JingPinPTx[3].platform_code ? CardStylex : CardStyles} onClick={() => that.CardStyle(that.state.JingPinPTx[3].platform_code)} title={<div style={{width: "150px",marginLeft:"30%" }}>{platform('JD', { float: "left",  width: "34px", height: "34px" })} <b style={{ fontSize: "14px", color: "#666", float: "left", marginTop: " 5px", marginLeft: "6px" }}>{that.state.JingPinPTx[3].platform_name}</b></div>} bordered={false}>
                                                <div className="CardDivs" style={{ float: "left", textAlign: "left" }}>
                                                    <h4>店铺数</h4>
                                                    <h5>商品数  </h5>
                                                    <h5>平均铺货密度</h5>
                                                </div>
                                                <div className="CardDivs" style={{ float: "right", textAlign: "right" }}>
                                                    <h5>{that.state.JingPinPTx[3].my_brand.shopcount} </h5>
                                                    <h5>{that.state.JingPinPTx[3].my_brand.itemcount}</h5>
                                                    <h5>{that.state.JingPinPTx[3].my_brand.shopcount > 0 ? parseInt(that.state.JingPinPTx[3].my_brand.itemcount / that.state.JingPinPTx[3].my_brand.shopcount) : 0}个/店</h5>
                                                </div>
                                            </Card>
                                        </Col>
                                        <Col span={7} style={{ padding: "0px", background: "rgba(255,255,255,1)", boxShadow: "0px 3px 8px 0px rgba(11,72,120,0.15)", marginRight: "30px" }}>
                                            <Card style={that.state.CardStyle == that.state.JingPinPTx[4].platform_code ? CardStylex : CardStyles} onClick={() => that.CardStyle(that.state.JingPinPTx[4].platform_code)} title={<div style={{width: "150px",marginLeft:"30%" }}> {platform('PDD', { float: "left",  width: "34px", height: "34px" })} <b style={{ fontSize: "14px", color: "#666", float: "left", marginTop: " 5px", marginLeft: "6px" }}>{that.state.JingPinPTx[4].platform_name}</b></div>} bordered={false}>
                                                <div className="CardDivs" style={{ float: "left", textAlign: "left" }}>
                                                    <h4>店铺数</h4>
                                                    <h5>商品数  </h5>
                                                    <h5>平均铺货密度</h5>
                                                </div>
                                                <div className="CardDivs" style={{ float: "right", textAlign: "right" }}>
                                                    <h5>{that.state.JingPinPTx[4].my_brand.shopcount} </h5>
                                                    <h5>{that.state.JingPinPTx[4].my_brand.itemcount}</h5>
                                                    <h5>{that.state.JingPinPTx[4].my_brand.shopcount > 0 ? parseInt(that.state.JingPinPTx[4].my_brand.itemcount / that.state.JingPinPTx[4].my_brand.shopcount) : 0}个/店</h5>
                                                </div>
                                            </Card>

                                        </Col>

                                    </Row>
                                </div>
                                <div style={{ height: "320px", marginTop: "10px" }}>
                                    <Row gutter={16}>
                                        <Col span={7} style={{ padding: "0px", background: "rgba(255,255,255,1)", boxShadow: "0px 3px 8px 0px rgba(11,72,120,0.15)", marginLeft: "20px" }}>
                                            <Card style={that.state.CardStyle == that.state.JingPinPTx[1].platform_code ? CardStylex : CardStyles} onClick={() => that.CardStyle(that.state.JingPinPTx[1].platform_code)} title={<div style={{width: "150px",marginLeft:"30%" }}> {platform('1688', { float: "left",  width: "34px", height: "34px" })} <b style={{ fontSize: "14px", color: "#666", float: "left", marginTop: " 5px", marginLeft: "6px" }}>{that.state.JingPinPTx[1].platform_name}</b></div>} bordered={false}>
                                                <div className="CardDivs" style={{ float: "left", textAlign: "left" }}>
                                                    <h4>店铺数</h4>
                                                    <h5>商品数  </h5>
                                                    <h5>平均铺货密度</h5>
                                                </div>
                                                <div className="CardDivs" style={{ float: "right", textAlign: "right" }}>
                                                    <h5>{that.state.JingPinPTx[1].my_brand.shopcount} </h5>
                                                    <h5>{that.state.JingPinPTx[1].my_brand.itemcount}</h5>
                                                    <h5>{that.state.JingPinPTx[1].my_brand.shopcount > 0 ? parseInt(that.state.JingPinPTx[1].my_brand.itemcount / that.state.JingPinPTx[1].my_brand.shopcount) : 0}个/店</h5>
                                                </div>
                                            </Card>
                                        </Col>
                                        <Col span={7} style={{ padding: "0px", background: "rgba(255,255,255,1)", boxShadow: "0px 3px 8px 0px rgba(11,72,120,0.15)", margin: "0 30px" }}>
                                            <Card style={that.state.CardStyle == that.state.JingPinPTx[5].platform_code ? CardStylex : CardStyles} onClick={() => that.CardStyle(that.state.JingPinPTx[5].platform_code)} title={<div style={{width: "150px",marginLeft:"30%" }}>{platform('SN', { float: "left",  width: "34px", height: "34px" })} <b style={{ fontSize: "14px", color: "#666", float: "left", marginTop: " 5px", marginLeft: "6px" }}>{that.state.JingPinPTx[5].platform_name}</b></div>} bordered={false}>
                                                <div className="CardDivs" style={{ float: "left", textAlign: "left" }}>
                                                    <h4>店铺数</h4>
                                                    <h5>商品数  </h5>
                                                    <h5>平均铺货密度</h5>
                                                </div>
                                                <div className="CardDivs" style={{ float: "right", textAlign: "right" }}>
                                                    <h5>{that.state.JingPinPTx[5].my_brand.shopcount} </h5>
                                                    <h5>{that.state.JingPinPTx[5].my_brand.itemcount}</h5>
                                                    <h5>{that.state.JingPinPTx[5].my_brand.shopcount > 0 ? parseInt(that.state.JingPinPTx[5].my_brand.itemcount / that.state.JingPinPTx[5].my_brand.shopcount) : 0}个/店</h5>
                                                </div>
                                            </Card>
                                        </Col>
                                        <Col span={7} style={{ padding: "0px", background: "rgba(255,255,255,1)", boxShadow: "0px 3px 8px 0px rgba(11,72,120,0.15)", marginRight: "30px" }}>
                                            <Card style={that.state.CardStyle == that.state.JingPinPTx[2].platform_code ? CardStylex : CardStyles} onClick={() => that.CardStyle(that.state.JingPinPTx[2].platform_code)} title={<div style={{width: "150px",marginLeft:"30%" }}> {platform('DD', { float: "left",  width: "34px", height: "34px" })} <b style={{ fontSize: "14px", color: "#666", float: "left", marginTop: " 5px", marginLeft: "6px" }}>{that.state.JingPinPTx[2].platform_name}</b></div>} bordered={false}>
                                                <div className="CardDivs" style={{ float: "left", textAlign: "left" }}>
                                                    <h4>店铺数</h4>
                                                    <h5>商品数  </h5>
                                                    <h5>平均铺货密度</h5>
                                                </div>
                                                <div className="CardDivs" style={{ float: "right", textAlign: "right" }}>
                                                    <h5>{that.state.JingPinPTx[2].my_brand.shopcount} </h5>
                                                    <h5>{that.state.JingPinPTx[2].my_brand.itemcount}</h5>
                                                    <h5>{that.state.JingPinPTx[2].my_brand.shopcount > 0 ? parseInt(that.state.JingPinPTx[2].my_brand.itemcount / that.state.JingPinPTx[2].my_brand.shopcount) : 0}个/店</h5>
                                                </div>
                                            </Card>

                                        </Col>

                                    </Row>
                                </div>
                                <div style={{ height: "320px", marginTop: "10px" }}>
                                    <Row gutter={16}>
                                        <Col span={7} style={{ padding: "0px", background: "rgba(255,255,255,1)", boxShadow: "0px 3px 8px 0px rgba(11,72,120,0.15)", marginLeft: "20px" }}>
                                            <Card style={that.state.CardStyle == that.state.JingPinPTx[7].platform_code ? CardStylex : CardStyles} onClick={() => that.CardStyle(that.state.JingPinPTx[7].platform_code)} title={<div style={{width: "150px",marginLeft:"30%" }}> {platform('XY', { float: "left",  width: "34px", height: "34px" })} <b style={{ fontSize: "14px", color: "#666", float: "left", marginTop: " 5px", marginLeft: "6px" }}>{that.state.JingPinPTx[7].platform_name}</b></div>} bordered={false}>
                                                <div className="CardDivs" style={{ float: "left", textAlign: "left" }}>
                                                    <h4>店铺数</h4>
                                                    <h5>商品数  </h5>
                                                    <h5>平均铺货密度</h5>
                                                </div>
                                                <div className="CardDivs" style={{ float: "right", textAlign: "right" }}>
                                                    <h5>{that.state.JingPinPTx[7].my_brand.shopcount} </h5>
                                                    <h5>{that.state.JingPinPTx[7].my_brand.itemcount}</h5>
                                                    <h5>{that.state.JingPinPTx[7].my_brand.shopcount > 0 ? parseInt(that.state.JingPinPTx[7].my_brand.itemcount / that.state.JingPinPTx[7].my_brand.shopcount) : 0}个/店</h5>
                                                </div>
                                            </Card>
                                        </Col>
                                        <Col span={7} style={{ padding: "0px", background: "rgba(255,255,255,1)", boxShadow: "0px 3px 8px 0px rgba(11,72,120,0.15)", margin: "0 30px" }}>
                                            <Card style={that.state.CardStyle == that.state.JingPinPTx[6].platform_code ? CardStylex : CardStyles} onClick={() => that.CardStyle(that.state.JingPinPTx[6].platform_code)} title={<div style={{width: "150px",marginLeft:"30%" }}>{platform('WPH', { float: "left",  width: "34px", height: "34px" })} <b style={{ fontSize: "14px", color: "#666", float: "left", marginTop: " 5px", marginLeft: "6px" }}>{that.state.JingPinPTx[6].platform_name}</b></div>} bordered={false}>
                                                <div className="CardDivs" style={{ float: "left", textAlign: "left" }}>
                                                    <h4>店铺数</h4>
                                                    <h5>商品数  </h5>
                                                    <h5>平均铺货密度</h5>
                                                </div>
                                                <div className="CardDivs" style={{ float: "right", textAlign: "right" }}>
                                                    <h5>{that.state.JingPinPTx[6].my_brand.shopcount} </h5>
                                                    <h5>{that.state.JingPinPTx[6].my_brand.itemcount}</h5>
                                                    <h5>{that.state.JingPinPTx[6].my_brand.shopcount > 0 ? parseInt(that.state.JingPinPTx[6].my_brand.itemcount / that.state.JingPinPTx[6].my_brand.shopcount) : 0}个/店</h5>
                                                </div>
                                            </Card>
                                        </Col>
                                        <Col span={7} style={{ padding: "0px", background: "rgba(255,255,255,1)", boxShadow: "0px 3px 8px 0px rgba(11,72,120,0.15)", marginRight: "30px" }}>


                                        </Col>

                                    </Row>
                                </div>
                            </Carousel> : <Carousel style={{ width: "95%", height: "320px" }} dots={false} beforeChange={that.beforeChange} afterChange={that.onChange} ref={that.refx}>
                                    <div style={{ height: "320px", marginTop: "10px" }}>

                                    </div>
                                </Carousel>}
                        <div>
                            <Icon type="right" theme="outlined" style={{ fontSize: '30px', lineHeight: "344px", margin: "0px 5px", color: "#D9D9D9" }} onClick={that.handleNext} />
                        </div>
                    </Card>
                </div>
                <div className="contentBoxs" style={{ width: "40%" }}>
                    <Card bodyStyle={{ padding: '0px', display: 'flex', flexGrow: '1' }} title="授权、白名单店铺占比" bordered={false} style={{ width: '100%', display: 'flex', flex: "1", height: "100%", flexDirection: 'column', color: "#333" }}>
                        <div style={{ width: "100%", marginTop: "10px" }}>
                            <div style={{height:"200px"}}>
                            <div className="echarts">
                                <div>
                                    <h4>{that.state.shopGroupData != "" && that.state.shopGroupData != undefined ? that.state.shopGroupData.authlist[1].value : 0}</h4>
                                    <h5>授权店铺</h5>
                                </div>
                            </div>
                            <div id='echartsxx' style={{ background: "#fff" }}>

                            </div>
                            </div>

                            <div style={{height:"200px"}}>
                            <div className="echartsb">
                                <div>
                                    <h4>{that.state.shopGroupData != "" && that.state.shopGroupData != undefined ? that.state.shopGroupData.whitelist[1].value : 0}</h4>
                                    <h5>白名单店铺</h5>
                                </div>

                            </div>
                            <div id='echartsxxb' style={{ background: "#fff" }}>

                            </div>
                            </div>
                        </div>
                    </Card>
                </div>
                <div className="contentBoxs" style={{ width: "57%", marginLeft: "30px",overflowX: "scroll" }}>
                    <Card bodyStyle={{ padding: '0px', display: 'flex', flexGrow: '1',width:"1000px" }} title="价格区间内商品数量及占比分布" bordered={false} style={{ width: '100%', display: 'flex', flex: "1", height: "100%", flexDirection: 'column', color: "#333" }}>
                        <div id="container" style={{ width: "1000px" }}>

                        </div>
                    </Card>
                </div>
                <div className="contentBoxs" style={{ width: "45%", height: "690px" }}>
                    <Card bodyStyle={{ padding: '0px', display: 'flex', flexGrow: '1' }} title="商品所在地排行" bordered={false} style={{ width: '100%', display: 'flex', flex: "1", height: "100%", flexDirection: 'column', color: "#333" }}>
                        <Table pagination={false} style={{ width: "100%", marginTop: "10px" }} columns={that.state.columns} dataSource={that.state.Tabledata} />
                        <Pagination pageSize={that.state.pageSize} current={that.state.pageNo} total={that.state.totalNum} onChange={that.changePagination} onShowSizeChange={that.onPaginationSize} />

                    </Card>
                </div>

                <div className="contentBoxs" style={{ width: "52%", height: "690px", marginLeft: "30px" }}>
                    <Card bodyStyle={{ padding: '0px', display: 'flex', flexGrow: '1' }} title="店铺等级占比" bordered={false} style={{ width: '100%', display: 'flex', flex: "1", height: "100%", flexDirection: 'column', color: "#333" }}>
                        <div style={{ width: "70%", marginTop: "50px" }}>
                            <div id='carvarCard' style={{ background: "#fff" }}>

                            </div>

                        </div>
                        <div style={{ width: "30%", marginTop: "50px" }}>
                            {
                                that.state.shopLevelZhanbi ? <ul style={{ marginTop: "50%" }}>
                                    {
                                        that.state.shopLevelZhanbi.map((v,i)=>{
                                            return   <li key={i} style={{ display: "flex", marginTop: "10px" }}><span style={{ flex: "1" }}><span style={{ display: "inline-block", width: "10px", height: "10px",  borderRadius: "50%", marginRight: "10px",background:style[i]}}></span>{v.name}</span><span style={{ flex: "1" }}>{v.value}（{(v.total!=0 ? v.value/v.total*100 : v.total).toFixed(2)}%）</span></li>
                                        })
                                    }
                                    {/* <li style={{ display: "flex", marginTop: "10px" }}><span style={{ flex: "1" }}><span style={{ display: "inline-block", width: "10px", height: "10px", background: "rgba(24,144,255,1)", borderRadius: "50%", marginRight: "10px" }}></span>天猫</span><span style={{ flex: "1" }}>0（0%）</span></li>
                                    <li style={{ display: "flex", marginTop: "10px" }}><span style={{ flex: "1" }}><span style={{ display: "inline-block", width: "10px", height: "10px", background: "rgba(55,203,203,1)", borderRadius: "50%", marginRight: "10px" }}></span>黄冠级</span><span style={{ flex: "1" }}>0（0%）</span></li>
                                    <li style={{ display: "flex", marginTop: "10px" }}><span style={{ flex: "1" }}><span style={{ display: "inline-block", width: "10px", height: "10px", background: "rgba(250,211,55,1)", borderRadius: "50%", marginRight: "10px" }}></span>蓝冠级</span><span style={{ flex: "1" }}>0（0%）</span></li>
                                    <li style={{ display: "flex", marginTop: "10px" }}><span style={{ flex: "1" }}><span style={{ display: "inline-block", width: "10px", height: "10px", background: "rgba(242,99,123,1)", borderRadius: "50%", marginRight: "10px" }}></span>钻级</span><span style={{ flex: "1" }}>0（0%）</span></li>
                                    <li style={{ display: "flex", marginTop: "10px" }}><span style={{ flex: "1" }}><span style={{ display: "inline-block", width: "10px", height: "10px", background: "rgba(151,95,228,1)", borderRadius: "50%", marginRight: "10px" }}></span>星级</span><span style={{ flex: "1" }}>0（0%）</span></li> */}

                                </ul> : <ul style={{ marginTop: "50%" }}>
                                    <li style={{ display: "flex", marginTop: "10px" }}><span style={{ flex: "1" }}><span style={{ display: "inline-block", width: "10px", height: "10px", background: "rgba(24,144,255,1)", borderRadius: "50%", marginRight: "10px" }}></span>天猫</span><span style={{ flex: "1" }}>0（0%）</span></li>
                                    <li style={{ display: "flex", marginTop: "10px" }}><span style={{ flex: "1" }}><span style={{ display: "inline-block", width: "10px", height: "10px", background: "rgba(55,203,203,1)", borderRadius: "50%", marginRight: "10px" }}></span>黄冠级</span><span style={{ flex: "1" }}>0（0%）</span></li>
                                    <li style={{ display: "flex", marginTop: "10px" }}><span style={{ flex: "1" }}><span style={{ display: "inline-block", width: "10px", height: "10px", background: "rgba(250,211,55,1)", borderRadius: "50%", marginRight: "10px" }}></span>蓝冠级</span><span style={{ flex: "1" }}>0（0%）</span></li>
                                    <li style={{ display: "flex", marginTop: "10px" }}><span style={{ flex: "1" }}><span style={{ display: "inline-block", width: "10px", height: "10px", background: "rgba(242,99,123,1)", borderRadius: "50%", marginRight: "10px" }}></span>钻级</span><span style={{ flex: "1" }}>0（0%）</span></li>
                                    <li style={{ display: "flex", marginTop: "10px" }}><span style={{ flex: "1" }}><span style={{ display: "inline-block", width: "10px", height: "10px", background: "rgba(151,95,228,1)", borderRadius: "50%", marginRight: "10px" }}></span>心级</span><span style={{ flex: "1" }}>0（0%）</span></li>

                                </ul>
                            }


                        </div>
                    </Card>
                </div>
            </div>
            <Copyright clazzName='copyright' />
        </div>
    )
})

export default Tpl