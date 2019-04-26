import './Olonger.less'
import ThatMain from '../../HOC/That';
import { Carousel, Button, Modal, Input } from 'antd';
const Tpl = ThatMain((that) => {
   // console.log(that.props.match.path)
    return (
        <div className='Olonger'>
            <div id="FormatUpgrade">
                <div>
                    {
                        that.props.match.path == "/CustomerOverview" || that.props.match.path == "/ShopFile" || that.props.match.path == "/ClientCheck" ? <img onClick={that.imgclick} src="../../../img/banner/1134/banner1.png" alt="" />
                            : that.props.match.path == "/PriceNotice" ? <img onClick={that.imgclick} src="../../../img/banner/1134/banner2.png" alt="" />
                                : that.props.match.path == "/ActivityReview" || that.props.match.path == "/ActivityPublic" || that.props.match.path == "/ActivityInspect" ? <img onClick={that.imgclick} src="../../../img/banner/1134/banner3.png" alt="" />
                                    : that.props.match.path == "/StoreSearch" || that.props.match.path == "/PlatformRetrieval" || that.props.match.path == "/SalesReports" || that.props.match.path == "/CommodityStore" || that.props.match.path == "/PlatformRetrievalJS" || that.props.match.path == "/OrderAnalysis" ? <img onClick={that.imgclick} src="../../../img/banner/1134/banner4.png" alt="" />
                                        : that.props.match.path == "/keywordMonitor" || that.props.match.path == "/UrlMonitor" || that.props.match.path == "/PriceMonitor" || that.props.match.path == "/OrderMonitor" ? <img onClick={that.imgclick} src="../../../img/banner/1134/banner5.png" alt="" />
                                            : that.props.match.path == "/Announcements" ? <img onClick={that.imgclick} src="../../../img/banner/1134/banner6.png" alt="" /> : null
                    }

                </div>
                <div className="FormatUpgradeCar">
                    <div className="CarHeader">
                        <span>——————</span><span>核心功能</span><span>——————</span>
                    </div>
                    {
                        that.props.match.path == "/CustomerOverview" || that.props.match.path == "/ShopFile" || that.props.match.path == "/ClientCheck" ? <div className="CarBody">
                            <ul>
                                <li className="Carlione">
                                    <h4 className="one">店铺总览</h4>
                                    <p>可视化图表多维度展示授权终端店铺数据，对所有店铺进行各项指标汇总、对比和排名，让渠道大盘情况清晰简洁，一目了然。</p>
                                </li>
                                <li className="Carlione">
                                    <h4 className="one">经销商总览</h4>
                                    <p>直观展示线上渠道各经销商和店铺间的网状结构、部门管理结构、地区分布图等，让经销网络现于眼前，印于脑海。</p>
                                </li>
                            </ul>
                            <ul>
                                <li className="Carlione">
                                    <h4 className="two">店铺档案</h4>
                                    <p>为每个授权店铺建立终身档案，记录店铺全生命周期的各管理场景数据，如基本信息、每日销售额、活动申报情况、订单异常情况等。可随时回查各项历史记录。经销商档案</p>
                                </li>
                                <li className="Carlione">
                                    <h4 className="four">经销商档案</h4>
                                    <p>为每个经销商建立终身档案，记录经销商全生命周期的各管理场景数据，如基本信息、授权店铺、销售数据、活动情况、订单异常情况等。可随时回查各项历史记录。</p>
                                </li>
                            </ul>
                        </div>
                            : that.props.match.path == "/PriceNotice" ? <div className="CarBody">
                                <ul>
                                    <li className="Carlione">
                                        <h4 className="one">价格自动通知同步</h4>
                                        <p>省去以往价格变动需反复与经销商沟通确认的烦恼，品牌方更改售价表，系统自动通知经销商价格变动。</p>
                                    </li>
                                    <li className="Carlione">
                                        <h4 className="six">售价一键监控</h4>
                                        <p>无需任何设置，点击“一键监控”，开始全网售价监控，自己控制监控时间。</p>
                                    </li>
                                    <li className="Carlione">
                                        <h4 className="two">标价全网监控</h4>
                                        <p>可通过售价表设置标准价格，全网监控，异常提醒。</p>
                                    </li>
                                </ul>
                            </div>
                                : that.props.match.path == "/ActivityReview" || that.props.match.path == "/ActivityPublic" || that.props.match.path == "/ActivityInspect" ? <div className="CarBody">
                                    <ul>
                                        <li className="Carlione">
                                            <h4 className="one">活动审核</h4>
                                            <p>加强对店铺营销活动管理，规范店铺的活动行为。活动开展前，对经销商申报活动进行审核，确保活动的合理性。</p>
                                        </li>
                                        <li className="Carlione">
                                            <h4 className="six">活动公示</h4>
                                            <p>品牌活动公开展示，杜绝品牌各店铺相互猜忌，也方便品牌方统一管理营销活动，为之后的营销决策提供依据。</p>
                                        </li>
                                        <li className="Carlione">
                                            <h4 className="two">活动稽查</h4>
                                            <p>系统自动稽查正在进行的活动，审核活动实施是否与申报活动一致，确保活动的真实性，准确性。</p>
                                        </li>
                                    </ul>
                                </div>
                                    : that.props.match.path == "/StoreSearch" || that.props.match.path == "/PlatformRetrieval" || that.props.match.path == "/SalesReports" || that.props.match.path == "/CommodityStore" || that.props.match.path == "/PlatformRetrievalJS" || that.props.match.path == "/OrderAnalysis" ? <div className="CarBody">
                                        <ul>
                                            <li className="Carlione">
                                                <h4 className="one">销售报表</h4>
                                                <p>以日、月报的形式，从店铺、单品、分类三个维度来统计销售数据，直观了解品牌销售情况，为品牌运营、推广提供数据支撑，优化策略方案提供依据。</p>
                                            </li>

                                            <li className="Carlione">
                                                <h4 className="six">订单店铺分析</h4>
                                                <p>可查看店铺销售额及其排名，店铺热销商品销量及其排名，为店铺营销活动投入资源提供依据。</p>
                                            </li>

                                        </ul>
                                        <ul>
                                            <li className="Carlione">
                                                <h4 className="two">订单单品分析</h4>
                                                <p>可查看单品销售额及其排名、单品的店铺销售分布和销售地区分布情况，通过对各个单品订单销售情况，为单品推广提供依据。</p>
                                            </li>
                                            <li className="Carlione">
                                                <h4 className="four">订单会员分析</h4>
                                                <p>从会员维度分析，了解主要客户的地域分布情况，优化店铺发货方案，为营销活动采用地区策略提供依据。</p>
                                            </li>
                                        </ul>
                                    </div>
                                        : that.props.match.path == "/keywordMonitor" || that.props.match.path == "/UrlMonitor" || that.props.match.path == "/PriceMonitor" || that.props.match.path == "/OrderMonitor" ? <div className="CarBody">
                                            <ul>
                                                <li className="Carlione">
                                                    <h4 className="one">售价表监控</h4>
                                                    <p>无需任何设置，点击“一键监控”，开始全网售价监控，自己控制监控时间。</p>
                                                </li>
                                                <li className="Carlione">
                                                    <h4 className="six">低价订单提醒</h4>
                                                    <p>对品牌方所属店铺的全部订单信息进行监控，并实时提醒低价成交订单，协助品牌方从订单层面对店铺进行价格管控，杜绝低价乱价现象。</p>
                                                </li>
                                            </ul>
                                        </div>
                                            : that.props.match.path == "/Announcements" ? <div className="CarBody">
                                                <ul>
                                                    <li className="Carlione">
                                                        <h4 className="one">通知公告</h4>
                                                        <p>以平台通知的方式代替传统邮件通知方式，支持指定人群发送、附件发送以及未读情况查看，方便有效的了解通知详细情况。</p>
                                                    </li>
                                                    <li className="Carlione">
                                                        <h4 className="six">微信公告</h4>
                                                        <p>集PC和移动端为一体，支持微信查看，通过微信公众号的形式提示经销商收到通知，方便随时随地查看通知，避免公告漏看造成损失。</p>
                                                    </li>
                                                </ul>
                                            </div> : null
                    }

                </div>
                <div className="FormatUpgradeCar">
                    <div className="CarHeader">
                        <span>——————</span><span>产品演示</span><span>——————</span>
                    </div>
                    <div className="CarBody" style={{ marginTop: "20px" }}>
                        {
                            that.props.match.path == "/CustomerOverview" || that.props.match.path == "/ShopFile" || that.props.match.path == "/ClientCheck" ? <Carousel afterChange={that.onChange}>
                                <div className="imgx"><img style={{ width: "auto", display: "inline-block", height: "100%" }} src="../../../img/Carousel/Carousel_1.png" alt="" /></div>
                                <div className="imgx"><img style={{ width: "auto", display: "inline-block", height: "100%" }} src="../../../img/Carousel/Carousel_2.png" alt="" /></div>
                                <div className="imgx"><img style={{ width: "auto", display: "inline-block", height: "100%" }} src="../../../img/Carousel/Carousel_3.png" alt="" /></div>
                                <div className="imgx"><img style={{ width: "auto", display: "inline-block", height: "100%" }} src="../../../img/Carousel/Carousel_4.png" alt="" /></div>
                            </Carousel>
                                : that.props.match.path == "/PriceNotice" ? <Carousel afterChange={that.onChange}>
                                    <div className="imgx"><img style={{ width: "auto", display: "inline-block", height: "100%" }} src="../../../img/Carousel2/Carousel_1.png" alt="" /></div>
                                    <div className="imgx"><img style={{ width: "auto", display: "inline-block", height: "100%" }} src="../../../img/Carousel2/Carousel_2.png" alt="" /></div>
                                    <div className="imgx"><img style={{ width: "auto", display: "inline-block", height: "100%" }} src="../../../img/Carousel2/Carousel_3.png" alt="" /></div>
                                </Carousel>
                                    : that.props.match.path == "/ActivityReview" || that.props.match.path == "/ActivityPublic" || that.props.match.path == "/ActivityInspect" ? <Carousel afterChange={that.onChange}>
                                        <div className="imgx"><img style={{ width: "auto", display: "inline-block", height: "100%" }} src="../../../img/Carousel3/Carousel_1.png" alt="" /></div>
                                        <div className="imgx"><img style={{ width: "auto", display: "inline-block", height: "100%" }} src="../../../img/Carousel3/Carousel_2.png" alt="" /></div>
                                        <div className="imgx"><img style={{ width: "auto", display: "inline-block", height: "100%" }} src="../../../img/Carousel3/Carousel_3.png" alt="" /></div>
                                        <div className="imgx"><img style={{ width: "auto", display: "inline-block", height: "100%" }} src="../../../img/Carousel3/Carousel_4.png" alt="" /></div>
                                    </Carousel>
                                        : that.props.match.path == "/StoreSearch" || that.props.match.path == "/PlatformRetrieval" || that.props.match.path == "/SalesReports" || that.props.match.path == "/CommodityStore" || that.props.match.path == "/PlatformRetrievalJS" || that.props.match.path == "/OrderAnalysis" ? <Carousel afterChange={that.onChange}>
                                            <div className="imgx"><img style={{ width: "auto", display: "inline-block", height: "100%" }} src="../../../img/Carousel4/Carousel_1.png" alt="" /></div>
                                            <div className="imgx"><img style={{ width: "auto", display: "inline-block", height: "100%" }} src="../../../img/Carousel4/Carousel_2.png" alt="" /></div>
                                            <div className="imgx"><img style={{ width: "auto", display: "inline-block", height: "100%" }} src="../../../img/Carousel4/Carousel_3.png" alt="" /></div>
                                            <div className="imgx"><img style={{ width: "auto", display: "inline-block", height: "100%" }} src="../../../img/Carousel4/Carousel_4.png" alt="" /></div>
                                        </Carousel>
                                            : that.props.match.path == "/keywordMonitor" || that.props.match.path == "/UrlMonitor" || that.props.match.path == "/PriceMonitor" || that.props.match.path == "/OrderMonitor" ? <Carousel afterChange={that.onChange}>
                                                <div className="imgx"><img style={{ width: "auto", display: "inline-block", height: "100%" }} src="../../../img/Carousel5/Carousel_1.png" alt="" /></div>
                                                <div className="imgx"><img style={{ width: "auto", display: "inline-block", height: "100%" }} src="../../../img/Carousel5/Carousel_2.png" alt="" /></div>
                                                <div className="imgx"><img style={{ width: "auto", display: "inline-block", height: "100%" }} src="../../../img/Carousel5/Carousel_3.png" alt="" /></div>
                                            </Carousel>
                                                : that.props.match.path == "/Announcements" ? <Carousel afterChange={that.onChange}>
                                                    <div className="imgx"><img style={{ width: "auto", display: "inline-block", height: "100%" }} src="../../../img/Carousel6/Carousel_1.png" alt="" /></div>
                                                    <div className="imgx"><img style={{ width: "auto", display: "inline-block", height: "100%" }} src="../../../img/Carousel6/Carousel_2.png" alt="" /></div>
                                                    <div className="imgx"><img style={{ width: "auto", display: "inline-block", height: "100%" }} src="../../../img/Carousel6/Carousel_3.png" alt="" /></div>
                                                </Carousel> : <Carousel afterChange={that.onChange}>
                                                        <div>暂无数据</div>
                                                    </Carousel>
                        }

                    </div>

                </div>
                <div className="FormatUpgradeCar" id="FormatUpgradeCar">
                    <div className="CarHeader">
                        <span>——————</span><span>版本介绍</span><span>——————</span>
                    </div>
                    <div className="CarBody" style={{ marginTop: "20px" }}>
                        <ul>
                            <li className="Carlitwo">
                                <img src="../../../img/Professionalversion.png" alt="" />
                                <h4 className="litwoh">·功能服务</h4>
                                <ul className="ul">
                                    <li>渠道盘点</li>
                                    <li>售价公示</li>
                                    <li>活动报备、公示</li>
                                    <li>通知公告</li>
                                    <li>品牌商品库</li>
                                    <li>竞品分析</li>
                                    <li>子账号系统【20人】</li>
                                    <li>售价表监控【2次/天】</li>
                                    <li>单链接监控【200条】/【12次/天】</li>
                                </ul>
                                <ul className="uls">
                                    <li>专属客服支持【工作日9:00-18:00】</li>
                                    <li>维权服务系统</li>
                                    <li>渠道管理插件</li>
                                    <Button className="btnLJ" style={that.state.version=="1049" || that.state.version=="1050" || that.state.version=="1051" ? {background:"#ccc"} : {background:"rgba(189,165,113,1)"}} disabled={that.state.version=="1049" || that.state.version=="1050" || that.state.version=="1051" ? true : false}  value="1049" onClick={that.onClickbtnLJ}>立即体验</Button>
                                </ul>
                               
                            </li>
                            <li className="Carlitwo">
                                <img src="../../../img/DeluxeEdition.png" alt="" />
                                <h4 className="litwoh">·功能服务</h4>
                                <ul className="ul">
                                    <li>渠道盘点</li>
                                    <li>售价公示</li>
                                    <li>活动报备、公示</li>
                                    <li>通知公告</li>
                                    <li>品牌商品库</li>
                                    <li>竞品分析</li>
                                    <li>子账号系统【50人】</li>
                                    <li>售价表监控【4次/天】</li>
                                    <li>单链接监控【500条】/【24次/天】</li>
                                    <li>订单监控</li>
                                    <li>订单分析</li>
                                    <li>销售报表</li>
                                    <li>自动活动稽查</li>
                                    <li>线上黑名单摸排</li>
                                </ul>
                                <ul className="uls">
                                    <li>专属客服支持【工作日9:00-18:00】</li>
                                    <li>维权服务系统</li>
                                    <li>渠道管理插件</li>
                                    <li>鹰智BRM小程序</li>
                                    <Button className="btnLJ"  style={that.state.version=="1050" || that.state.version=="1051" ? {background:"#ccc"} : {background:"rgba(189,165,113,1)"}}  disabled={that.state.version=="1051" || that.state.version=="1050" ? true :false} value="1050" onClick={that.onClickbtnLJ}>立即体验</Button>
                                </ul>
                            </li>
                            <li className="Carlitwo">
                                <img src="../../../img/Privateversion.png" alt="" />
                                <h4 className="litwoh">·功能服务</h4>
                                <ul className="ul">
                                    <li>渠道盘点</li>
                                    <li>售价公示</li>
                                    <li>活动报备、公示</li>
                                    <li>通知公告</li>
                                    <li>品牌商品库</li>
                                    <li>竞品分析</li>
                                    <li>子账号系统【100人】</li>
                                    <li>售价表监控【8次/天】</li>
                                    <li>单链接监控【1200条】/【24次/天】</li>
                                    <li>订单监控</li>
                                    <li>订单分析</li>
                                    <li>销售报表</li>
                                    <li>自动活动稽查</li>
                                    <li>线上黑名单摸排</li>
                                </ul>
                                <ul className="uls">
                                    <li>专属客服支持【工作日9:00-18:00】</li>
                                    <li>维权服务系统</li>
                                    <li>渠道管理插件</li>
                                    <li>鹰智BRM小程序</li>
                                    <li>品牌数据大脑</li>
                                    <li>专属企业功能</li>
                                    <Button className="btnLJ"  style={that.state.version=="1051" ? {background:"#ccc"} : {background:"rgba(189,165,113,1)"}} disabled={that.state.version=="1051" ? true :false } value="1051" onClick={that.onClickbtnLJ}>立即体验</Button>
                                </ul>
                                <Modal
                                    title="您的联系方式"
                                    visible={that.state.visible}
                                    onOk={that.handleOk}
                                    onCancel={that.handleCancel}
                                >
                                    <p>联系方式：  <Input style={{width:"380px"}} placeholder="请输入手机号"
                                        onChange={that.handleInputChange}
                                        value={that.state.brandPone}></Input> </p>
                                    <p style={{marginTop:"20px"}}>请写下您的联系方式，我们的工作人员会第一时间联系您，为您升级版本。</p>
                                </Modal>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="FormatUpgradeCar">
                    <div className="CarHeader">
                        <span>——————</span><span>合作品牌</span><span>——————</span>
                    </div>
                    <div className="CarBody">
                        <ul>
                            <li className="Carlitwo">
                                <img style={{ width: "100%", height: "100%" }} src="../../../img/HZ/logo1.png" alt="" />
                            </li>
                            <li className="Carlitwo">
                                <img style={{ width: "100%", height: "100%" }} src="../../../img/HZ/logo2.png" alt="" />
                            </li>
                            <li className="Carlitwo">
                                <img style={{ width: "100%", height: "100%" }} src="../../../img/HZ/logo3.png" alt="" />
                            </li>
                            <li className="Carlitwo">
                                <img style={{ width: "100%", height: "100%" }} src="../../../img/HZ/logo4.png" alt="" />
                            </li>
                            <li className="Carlitwo">
                                <img style={{ width: "100%", height: "100%" }} src="../../../img/HZ/logo5.png" alt="" />
                            </li>
                            <li className="Carlitwo">
                                <img style={{ width: "100%", height: "100%" }} src="../../../img/HZ/logo6.png" alt="" />
                            </li>
                        </ul>
                        <ul>
                            <li className="Carlitwo">
                                <img style={{ width: "100%", height: "100%" }} src="../../../img/HZ/logo7.png" alt="" />
                            </li>
                            <li className="Carlitwo">
                                <img style={{ width: "100%", height: "100%" }} src="../../../img/HZ/logo8.png" alt="" />
                            </li>
                            <li className="Carlitwo">
                                <img style={{ width: "100%", height: "100%" }} src="../../../img/HZ/logo9.png" alt="" />
                            </li>
                            <li className="Carlitwo">
                                <img style={{ width: "100%", height: "100%" }} src="../../../img/HZ/logo10.png" alt="" />
                            </li>
                            <li className="Carlitwo">
                                <img style={{ width: "100%", height: "100%" }} src="../../../img/HZ/logo11.png" alt="" />
                            </li>
                            <li className="Carlitwo">
                                <img style={{ width: "100%", height: "100%" }} src="../../../img/HZ/logo12.png" alt="" />
                            </li>
                        </ul>
                    </div>
                </div>

            </div>

        </div>
    )
})

export default Tpl