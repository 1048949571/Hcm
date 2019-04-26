import Tpl from './tpl';
import { Modal, message,Divider, Menu, Dropdown, Icon,Tooltip } from 'antd';
import ajax from '../../../js/common/ajax';
import Shopicon from '../../components/platform';
import Ptchat from '../../components/ptchat';
import { ImgModal } from '../../components/ImgModal/ImgModal'
// import Loading from '../../components/Loading';
// import PlatformLink from '../../components/platformLink';
const confirm = Modal.confirm;


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            totalArr:[0,0,0,0],
            tabskey:'1',
            Identity:'',//用户身份信息
            size: 'large',
            checkAll: false,
            selectedRowKeys: [],
            Draweroff: false,//抽屉是否可见
            NewComplaint: false,//新增对话框是否可见
            uploadVisible:false,
            platformData:[],
            endValue: null,//下次跟进时间
            endOpen: false,//下次跟进时间
            startValue: null,
            newPT:'',//商家平台
            newSJ:'',//商家名称
            newSP:'',//商品链接
            shopid:'10003',//商品ID，10003为默认不存在商品ID唤醒对话框
            newSPD:'',//新增商品短连接
            querySJ:'',//查询商家名称
            queryPT:'',//查询商家平台
            queryZT:'',//查询状态
            queryTIMEp:'',//查询时间上个
            queryTIMEn:'',//查询时间下个
            querybtnSJ:'',//查询商家名称缓存
            querybtnPT:'',//查询商家平台缓存
            querybtnZT:'',//查询状态缓存
            querybtnTIMEp:'',//查询时间上个缓存
            querybtnTIMEn:'',//查询时间下个缓存
            pageNumber:1,//页码
            pageNo:1,//页码
            pageSize:10,//数量
            SCdata:[],//table数据
            shopname:'',//抽屉店铺名
            status:'',//抽屉店铺状态
            tableStatus:'',//列表状态
            Remark:'',//备注
            statusAll1:['邮件待发送','邮件已发送','邮件已驳回','邮件已回复','完结'],
            statusAll2:['购买中','已购买，发货中','卖家已发货','未发货：申请退款中','未发货：举报中','退款完成','发错货：申请退/换货中','已到货，报告制作中','报告已提交平台处理','完结'],
            statusAll3:['通知进行中','已通知待整改','卖家拒绝整改','卖家已整改','完结'],
            statusAll4:['举报中','已举报','举报成功','举报失败','完结'],
            shoplink:'',//抽屉店铺链接
            processing_times:'',//抽屉第几次处理
            id:'',//数据库ID
            Shopicon:null,//抽屉平台图标
            newZT:'',//抽屉添加时状态
            nextTIME:'',//新增历史记录下次跟进时间
            previewVisible: false,//shanchuan
            previewImage: '',
            fileList: [],
            upfileList:[],
            totalElements:0,//列表总条数
            idAll:[],//删除ID数组
            historyList:[],//历史记录数组
            uploading:false,
            fileList:[],//批量导入
            newlogisticsNum:'',//抽屉快递单号
            newcomplainNum:'',//抽屉投诉单号
            platform:''
        }
    }
    componentDidMount(){
        this.platform()
        this.querycontent()
        this.getinfo()
    }
    //tab栏切换
    tabsKey = (key) =>{
        let {tabskey} = this.state;
        // console.log(key)
        this.setState({tabskey:key,querySJ:'',queryPT:'',queryZT:'',queryTIMEp:'',queryTIMEn:'',querybtnSJ:'',querybtnPT:'',querybtnZT:'',querybtnTIMEp:'',querybtnTIMEn:'',pageSize:10,pageNo:1,checkAll:false,selectedRowKeys:[],queryTIMEp:'',queryTIMEn:''},()=>{
            this.querycontent()
        })
    }
    //获取用户身份信息
    getinfo = () =>{
        let {Identity} = this.state;
        Identity = localStorage.getItem("logintype")
        this.setState({Identity})
    }
    //获取平台信息
    platform = async()=>{
        let {platform,platformData} = this.state;
        this.setState({
            platformData:can.platform||[]
        })
    }


    //搜索商家名称change
    querysj = (ev) =>{
        let {querySJ} = this.state;
        querySJ = ev.target.value
        // let {value:querySJ} = ev.target;
        // querySJ
        this.setState({querySJ})
        // console.log(querySJ)
    }
    //搜索下拉框状态选择change
    queryzt = (value) =>{
        let {queryZT} = this.state;
        if (value.key == '请选择') {
            queryZT = '';
        } else {
            queryZT = value.key;
        }
        // console.log(queryZT)
        this.setState({queryZT})
    }
    //时间选择框change
    selecttime = (dates, dateStrings) => {
        let {queryTIMEp,queryTIMEn} = this.state;
        //判断是否有选择时间 上一个时间dateStrings[0] 下一个时间dateStrings[1]
        if (dateStrings[0]) {
            queryTIMEp = dateStrings[0] + ' 00:00:00'
            queryTIMEn = dateStrings[1] + ' 23:59:59'
            // console.log('有树枝')
        } else {
            queryTIMEp = ''
            queryTIMEn = ''
        }
        this.setState({queryTIMEp,queryTIMEn})
    }
    //平台change
    querypt = (value) =>{
        let {queryPT} = this.state
        if (value.key == '请选择') {
            queryPT = '';
        } else {
            queryPT = value.key;
        }
        
        this.setState({queryPT})

    }

    
    //查询按钮
    querycontent = async (que) =>{
        // console.log(que)
        let {selectedRowKeys,checkAll,totalArr,tabskey,querySJ,queryPT,queryZT,queryTIMEp,queryTIMEn,querybtnSJ,querybtnPT,querybtnZT,querybtnTIMEp,querybtnTIMEn,pageSize,SCdata,pageNo,totalElements,statusAll1,statusAll2,statusAll3,statusAll4} = this.state
        querySJ = querySJ.replace(/(^\s*)|(\s*$)/g, "")
        if (que == 'query') {
            selectedRowKeys = []
        }
        if (queryTIMEn != '' && queryTIMEp != '' ) {
            LoadingModal({bl:true})
            ajax.get('/hcm/hcmComplaintHandling/getList', {
                params: {
                    shopName:que == 'query'?querySJ:querybtnSJ == ''?null:querybtnSJ,
                    platform:que == 'query'?queryPT:querybtnPT == ''?null:querybtnPT,
                    status:que == 'query'?queryZT:querybtnZT == '' ? null :querybtnZT,
                    pageNo:que == 'query'?'1':pageNo,
                    pageSize:pageSize,
                    begintime:que == 'query'?queryTIMEp:querybtnTIMEp == ''?queryTIMEp : querybtnTIMEp,
                    endtime:que == 'query'?queryTIMEn:querybtnTIMEn == '' ? queryTIMEn : querybtnTIMEn,
                    processingtype:tabskey
                }
            }).then(res => {
                // console.log(res)
                LoadingModal({bl:false})
                // console.log('111111111111')
                if(res.data.status == 10000){
                    let data = res.data.data.content;
                    totalElements = res.data.data.totalElements
                    totalArr = res.data.data.obj
                    totalArr.splice(tabskey-1,1,totalElements)
                    // console.log(data,res,totalElements,totalArr)
                    SCdata = data.map((e,i)=>{
                        return {
                            key:que == 'query'?i+1:pageSize*(pageNo-1) + (i+1),
                            onumber:que == 'query'?i+1:pageSize*(pageNo-1) + (i+1),
                            pticon:Shopicon(e.platform),
                            ptchat:Ptchat(e.platform),
                            shopname:e.shop_name,
                            shoplink:e.shoplink,
                            shopid:e.shopid,
                            bmcid:e.bmcid,
                            clockstatus:e.clockstatus == '1'?<img style={{cursor:'pointer'}} src="../../../img/icon1.1/Alarm_clock.png" alt=""/>:null,//脑中线是状态
                            // clockstatus:<img src="../../../img/icon1.1/Alarm_clock.png" alt=""/>,
                            send_number:e.send_number,
                            againtime:e.againtime,
                            // status:statusAll[e.status],
                            status:e.status,
                            tableStatus:tabskey == '1'?statusAll1[e.status]:tabskey == '2'?statusAll2[e.status]:tabskey=='3'?statusAll3[e.status]:statusAll4[e.status],
                            updatetime:moment(e.updatetime).format('YYYY-MM-DD HH:mm:ss'),
                            id:e.id,
                            processing_times:e.processing_times,
                            platform:e.platform
                        }
                    })
                    if (que == 'query') {
                        this.setState({totalArr,SCdata,totalElements,querybtnSJ:querySJ,querybtnPT:queryPT,querybtnZT:queryZT,querybtnTIMEp:queryTIMEp,querybtnTIMEn:queryTIMEn,pageNo:1,checkAll:false,selectedRowKeys})
                    } else {
                        this.setState({totalArr,SCdata,totalElements,queryTIMEp,queryTIMEn},()=>{
                            if (checkAll) {
                                this.DelecheckAll()
                                this.setState({checkAll:true})
                            }
                        })
                    }
                }
            })
            .catch(() => {
                LoadingModal({bl:false})
                message.error('获取信息失败');
            });
            // console.log(queryTIMEn,queryTIMEp)
        } else {
            queryTIMEp = moment().subtract(3, 'months').format('YYYY-MM-DD ') + '00:00:00'
            queryTIMEn = moment().format('YYYY-MM-DD ') +  '23:59:59'
            // console.log(queryTIMEp,queryTIMEn)
            LoadingModal({bl:true})
            ajax.get('/hcm/hcmComplaintHandling/getList', {
                params: {
                    shopName:que == 'query'?querySJ:querybtnSJ == ''?null:querybtnSJ,
                    platform:que == 'query'?queryPT:querybtnPT == ''?null:querybtnPT,
                    status:que == 'query'?queryZT:querybtnZT == '' ? null :querybtnZT,
                    pageNo:que == 'query'?'1':pageNo,
                    pageSize:pageSize,
                    begintime:que == 'query'?queryTIMEp:querybtnTIMEp == ''?queryTIMEp : querybtnTIMEp,
                    endtime:que == 'query'?queryTIMEn:querybtnTIMEn == '' ? queryTIMEn : querybtnTIMEn,
                    processingtype:tabskey
                }
            }).then(res => {
                // console.log(res)
                LoadingModal({bl:false})
                if(res.data.status == 10000){
                    let data = res.data.data.content;
                    totalElements = res.data.data.totalElements
                    totalArr = res.data.data.obj
                    totalArr.splice(tabskey-1,1,totalElements)
                    // console.log(data,res,totalElements,totalArr)
                    SCdata = data.map((e,i)=>{
                        return {
                            key:que == 'query'?i+1:pageSize*(pageNo-1) + (i+1),
                            onumber:que == 'query'?i+1:pageSize*(pageNo-1) + (i+1),
                            pticon:Shopicon(e.platform),
                            ptchat:Ptchat(e.platform),
                            shopname:e.shop_name,
                            shoplink:e.shoplink,
                            shopid:e.shopid,
                            bmcid:e.bmcid,
                            clockstatus:e.clockstatus == '1'?<img style={{cursor:'pointer'}} src="../../../img/icon1.1/Alarm_clock.png" alt=""/>:null,//脑中线是状态
                            send_number:e.send_number,
                            againtime:e.againtime,
                            tableStatus:tabskey == '1'?statusAll1[e.status]:tabskey == '2'?statusAll2[e.status]:tabskey=='3'?statusAll3[e.status]:statusAll4[e.status],
                            status:e.status,
                            updatetime:moment(e.updatetime).format('YYYY-MM-DD HH:mm:ss'),
                            id:e.id,
                            processing_times:e.processing_times,
                            platform:e.platform
                        }
                    })
                    if (que == 'query') {
                        this.setState({totalArr,SCdata,totalElements,querybtnSJ:querySJ,querybtnPT:queryPT,querybtnZT:queryZT,querybtnTIMEp:queryTIMEp,querybtnTIMEn:queryTIMEn,pageNo:1,checkAll:false,selectedRowKeys})
                    } else {
                        this.setState({totalArr,SCdata,totalElements,queryTIMEp,queryTIMEn},()=>{
                            if (checkAll) {
                                this.DelecheckAll()
                                this.setState({checkAll:true})
                            }
                        })
                    }
                }
                
            })
            .catch(() => {
                LoadingModal({bl:false})
                message.error('获取信息失败');
            });
        }

    }
    //内容勾选框
    onTableCheckChange = (selectedRowKeys) => {
        let {SCdata,pageSize} = this.state;
        let idAll = [];
        // console.log(selectedRowKeys)
        selectedRowKeys.forEach((e,i)=>{
            idAll.push(SCdata[(selectedRowKeys[i]%10?selectedRowKeys[i]%10:10)-1].id)
        })
        // console.log(SCdata,idAll,selectedRowKeys)
        this.setState({
            selectedRowKeys: selectedRowKeys,
            checkAll: false,
            idAll
        });
    }
    //取消勾选全部
    cancelcheckAll = (status) =>{
        let {selectedRowKeys} = this.state;
        selectedRowKeys.length=0;
        this.setState({checkAll:status,selectedRowKeys})
    }
    //勾选全部
    // DelecheckAll = (status) =>{
    //     let {selectedRowKeys,SCdata,pageNo,pageSize} = this.state;
    //     selectedRowKeys = [];
    //     for (let i = pageSize*(pageNo-1); i < pageSize*pageNo; i++) {
    //         selectedRowKeys.push(i+1)
    //     }
    //     console.log(selectedRowKeys)
    //     this.setState({selectedRowKeys,checkAll:status})
    // }
    DelecheckAll = (status) =>{
        let {selectedRowKeys,SCdata,pageNo,pageSize} = this.state;
        selectedRowKeys = [];
        for (let i = pageSize*(pageNo-1); i < pageSize*(pageNo-1)+SCdata.length; i++) {
            selectedRowKeys.push(i+1)
        }
        // console.log(selectedRowKeys)
        this.setState({selectedRowKeys,checkAll:status})
    }
    //批量删除对话框
    DeleteComplaint = (item)=>{
        let {tabskey,querybtnSJ,querybtnPT,querybtnZT,querybtnTIMEp,querybtnTIMEn,selectedRowKeys,totalElements,checkAll,idAll,querySJ,queryPT,queryZT,queryTIMEp,queryTIMEn} =this.state;
        let that = this;
        idAll = checkAll == true?'checkAll':idAll.join(",")
        if (selectedRowKeys.length == 0) {
            message.error('请选择删除的数据');
            return
        }
        confirm({
            title: null,
            className:'alert-item-confirm YellowWhite',
            content:<div><div className='tips'>提示</div><div className='pline'></div><p className='Dtitle'>你确认要删除这{selectedRowKeys.length == 0 ? 0 :checkAll == true ? totalElements :selectedRowKeys.length}项吗?</p><p >删除后<span className='red'>将无法恢复!</span></p></div>,
            okText: '确定',
            cancelText: '取消',
            onOk() {
                LoadingModal({bl:true})
                // console.log(querySJ+'----1',queryPT+'----2',queryZT+'----3',queryTIMEp+'------4',queryTIMEn+'----5')
                // console.log(idAll+'----1',querybtnSJ+'----2',querybtnPT+'----3',querybtnZT+'------4',querybtnTIMEp+'----5',querybtnTIMEn)
                ajax.post('/hcm/hcmComplaintHandling/delectHcmComplaintHandling', {
                    ids:idAll,
                    shopName:checkAll == true?querybtnSJ == '' ?null:querybtnSJ:null,
                    platform:checkAll == true?querybtnPT == '' ?null:querybtnPT:null,
                    status:checkAll == true?querybtnZT == '' ?null:querybtnZT:null,
                    begintime:checkAll == true?querybtnTIMEp == '' ?queryTIMEp:querybtnTIMEp:null,
                    endtime:checkAll == true?querybtnTIMEn == '' ?queryTIMEn:querybtnTIMEn:null,
                    processingtype:checkAll == true?tabskey:null
                })
                .then((response) => {
                    // console.log(response)
                    LoadingModal({bl:false})
                    if(response.data.status=='10000'){
                        that.querycontent()
                        that.setState({selectedRowKeys:[]})
                        message.success(response.data.message);
                    }else{
                        message.error(response.data.message);
                    }
                })
                .catch((error) => {
                    LoadingModal({bl:false})
                    message.error('删除失败');
                });
            }
        });
    }
    
    //点击查看气泡hidden
    bubblehidden = (ev) =>{
        let grandfather = ev.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode
        grandfather.className = 'ant-popover  ant-popover-placement-top  ant-popover-hidden'    
    }
    
    ///打开抽屉
    showDrawer = (id,shopname,status,shoplink,processing_times,platform) => {
        // console.log(id,shopname,status,shoplink,processing_times,platform)
        let remind = document.querySelector('.remind')
        // remind.style.display = 'none'
        let {historyList} = this.state;
        let ic = Shopicon(platform,{width:'15px',height:'15px',marginLeft: '5px',marginTop: '4px',})
        // console.log(platform)
        LoadingModal({bl:true})
        ajax.get('/hcm/hcmComplaintHandling/selectHistoryList', {
            params: {
                handlingid:id
            }
        }).then(res => {
            // console.log(res)
            LoadingModal({bl:false})
            if(res.data.status == 10000){
                historyList = res.data.data.list
                // console.log(historyList)
                this.setState({historyList})
            }
            
        })
        .catch(() => {
            LoadingModal({bl:false})
            message.error('获取信息失败');
        });
        
        this.setState({
            Draweroff: true,
            shopname,
            status,
            shoplink,
            processing_times,
            id,
            Shopicon:ic,
            platform
        });
       
        
    };
    //抽屉投诉状态处理
    newState = (value) =>{
        let {newZT} = this.state;
        // console.log(value.key)
        this.setState({newZT:value.key})
    }
    upfilechange = (info) => {
        let {upfileList} = this.state;
        upfileList = info.fileList;
        // console.log(upfileList)
        if(this.upfile(info.file,false)){
            this.setState({ upfileList });
        }
    }
    upfile = (file,bl=true) => {
        let type = '.rar .zip .doc .docx .xls .xlsx .ppt .pptx .pdf';
        let filename = file.name;
        var index = filename.lastIndexOf(".");
        var ext = filename.substr(index+1);
        const isLt20M = file.size / 1024 / 1024 < 20;
        if(!isLt20M){
            message.error(`文件不能大于20MB!`);
            return false;
        }
        if(type.indexOf(ext)===-1){
            if(bl){
                message.error(`暂不支持${filename}文件格式`);
            }
            return false
        }
        return true
        
    }
    // 抽屉备注
    remark =(ev) =>{
        let {Remark} = this.state;
        Remark = ev.target.value.replace(/(^\s*)|(\s*$)/g, "");
        this.setState({Remark})
        // console.log(Remark)
    }
    //历史记录新增确定
    newHistory = () =>{
        let {newlogisticsNum,newcomplainNum,tabskey,newZT,status,id,Remark,nextTIME,fileList,upfileList,processing_times} = this.state;
        // console.log(status)
        if(status == '4' && tabskey == '1' || status == '9' && tabskey == '2' || status == '4' && tabskey == '3' || status == '4' && tabskey == '4'){
            message.warning('流程已完结');
            return
        }
        if(newZT == '2' && tabskey == '2' && newlogisticsNum == ''){
            message.warning('请输入物流单号');
            return
        }
        if(newZT == '8' && tabskey == '2' && newcomplainNum == ''){
            message.warning('请输入投诉单号');
            return
        }
        // console.log(moment(nextTIME).isBefore(moment().format('YYYY-MM-DD HH:mm:ss')))
        if (moment(nextTIME).isBefore(moment().format('YYYY-MM-DD HH:mm:ss'))) {
            message.warning('下次跟进时间已过,请重新选择时间');
            return 
        }
        // console.log()
        if (newZT != status && newZT != '') {
            LoadingModal({bl:true})
            ajax.post('/hcm/hcmComplaintHandling/saveHistory', {
                handlingid:id,
                status:newZT,
                againtime:nextTIME?nextTIME:null,//// 下次跟进时间,
                image:fileList.length ? fileList.map((item,index)=>item.response.data.data).join(','): null,
                file:upfileList.length ? upfileList.map((item,index)=>item.response.data.data + '/////' + item.name).join(','): null,// 附件,
                remark:Remark?Remark:null,// 备注,
                processingTimes:processing_times,// 链接处理次数 必传
                processingtype:tabskey,
                logisticsNumber:newlogisticsNum?newlogisticsNum:null,
                complaintsId:newcomplainNum?newcomplainNum:null

            })
            .then((res) => {
                // console.log(res)
                LoadingModal({bl:false})
                if(res.data.status =='10000'){
                    message.success(res.data.message);
                    this.querycontent()
                    this.setState({Draweroff:false,newZT:'',nextTIME:'',fileList:[],upfileList:[],Remark:'',newlogisticsNum:'',newcomplainNum:''})
                }else{
                    message.error(res.data.message);
                }
            })
            .catch((error) => {
                LoadingModal({bl:false})
                message.error(error.statusText);
            });
            
        } else {
            message.error('状态不能与当前状态一致');
        }
    }
    //快递单号input change事件
    newLogisticsNum = (ev) =>{
        let {newlogisticsNum} = this.state;
        newlogisticsNum = ev.target.value.replace(/(^\s*)|(\s*$)/g, "").replace(/[^\w\.\/]/ig,'');
        // console.log(newlogisticsNum)
        this.setState({newlogisticsNum})
    }
    //投诉单号input change事件
    newComplainNum = (ev) =>{
        let {newcomplainNum} = this.state;
        newcomplainNum = ev.target.value.replace(/(^\s*)|(\s*$)/g, "").replace(/[^\w\.\/]/ig,'')
        // console.log(newcomplainNum)
        this.setState({newcomplainNum})
    }
    //最新历史记录删除
    deleNewesthistory = (hisid) =>{
        let {id} =this.state;
        // console.log(id)
        LoadingModal({bl:true})
        ajax.post('/hcm/hcmComplaintHandling/delectHandlingHistory', {
            id:hisid
        }).then(res => {
            LoadingModal({bl:false})
            // console.log(res)
            if(res.data.status == 10000){
                message.success(res.data.message);
                this.querycontent()
                this.setState({Draweroff:false})
            } else {
                message.error(res.data.message);
            }
            
        })
        .catch(() => {
            LoadingModal({bl:false})
            message.error('删除失败');
        });
    }
    //历史记录获取
    // Drawertabschange = (key) => {
    //     console.log(key);
    //     let {id,historyList} = this.state;
    //     // if (key == '2') {
    //         LoadingModal({bl:true})
    //         ajax.get('/hcm/hcmComplaintHandling/selectHistoryList', {
    //             params: {
    //                 handlingid:id
    //             }
    //         }).then(res => {
    //             console.log(res)
    //             LoadingModal({bl:false})
    //             if(res.data.status == 10000){
    //                 historyList = res.data.data.list
    //                 console.log(historyList)
    //                 this.setState({historyList})
    //             }
                
    //         })
    //         .catch(() => {
    //             LoadingModal({bl:false})
    //             message.error('获取信息失败');
    //         });
    //     // }
    // }
    ///关闭抽屉
    onClose = () => {
        this.setState({
            Draweroff: false,newZT:'',nextTIME:'',fileList:[],upfileList:[],Remark:'',newlogisticsNum:'',newcomplainNum:''
        });
    };


    //新增对话框
    //--新增平台下拉change
    newAchange =(value)=> {
        let {newPT,op} =this.state;
        // console.log(value);
        this.setState({newPT:value.key})
    }
    newsj = (ev) => {
        let {value:newSJ} =ev.target;
        // newSJ = newSJ.replace(/(^\s*)|(\s*$)/g, "")
        this.setState({newSJ})
    }
    newsp = (ev) => {
        let {shopid,newSPD} = this.state
        let {value:newSP} =ev.target;
        let SP = newSP.replace(/\s+/g,'')
        
        // console.log(SP)
        this.setState({newSP:SP,newSPD:SP})
        
    }
    //打开新增对话框
    showModal = () => {
        this.setState({
            NewComplaint: true,
        });
      }
    //新增确定按钮事件
    Newcomplaints = () => {
        let {tabskey,newPT,newSPD,newSJ,shopid,} = this.state;
        //淘宝天猫
        // console.log(newSPD)
        if(newPT == 'TB' || newPT == 'TM' || newPT == '1688'){
            shopid = '10009'
        }
        newSJ = newSJ.replace(/(^\s*)|(\s*$)/g, "")
        if(newSPD.indexOf('.com') == -1 && newSPD.indexOf('.cn') == -1 && newSPD.indexOf('.net') == -1 && newSPD.indexOf('.vip') == -1 &&  newSPD.indexOf('.top') == -1 &&  newSPD.indexOf('.hk') == -1) {
            message.error('链接格式不正确或者有空白项');
            return
        } 
        if (newSPD.indexOf('tmall.com') != -1 || newSPD.indexOf('taobao.com') != -1 || newSPD.indexOf('tmall.hk') != -1) {
            // console.log(newSPD)
            if (newSPD.indexOf('?') != -1 ) {
                let Website = newSPD.split('?')[0]
                if (newSPD.indexOf('?') != -1  && newSPD.indexOf('&') != -1 ) {
                    let arr = newSPD.split('?')[1].split('&').map(e=>{
                        return e.split('=')
                    })
                    let id = ''
                    arr.forEach((e,i)=>{
                        if(e[0] == 'id'){
                            id = e[1]
                        }
                    })
    
                    newSPD = Website + '?id=' + id;
                    shopid = id;
                    // console.log(newSPD,id)
                } else  {
                    shopid = '10009'
                }
                
            }
        } else if(newSPD.indexOf('jd.com') != -1){
            shopid = newSPD.replace(/[^0-9]/ig,"")
            newSPD = newSPD
            // console.log(shopid,newSPD)
        } else if(newSPD.indexOf('1688.com') != -1){
            if (newSPD.indexOf('?') != -1 ) {
                newSPD = newSPD.split('?')[0]
            } else {
                newSPD = newSPD
            }
            shopid = '1688'
            // console.log(newSPD)
        } else if(newSPD.indexOf('suning.com') != -1 || newSPD.indexOf('gome.com') != -1 || newSPD.indexOf('amazon') != -1 || newSPD.indexOf('vip.com') != -1 || newSPD.indexOf('aliexpress.com') != -1 || newSPD.indexOf('ule.com') != -1 || newSPD.indexOf('mogujie.com') != -1 || newSPD.indexOf('jumeiglobal.com') != -1){
            if (newSPD.indexOf('?') != -1 ) {
                newSPD = newSPD.split('?')[0]
                // console.log(shopid,newSPD)
                this.setState({newSPD})
            }
        } else if(newSPD.indexOf('yangkeduo.com') != -1){
            if (newSPD.indexOf('?') != -1 ) {
                let Website = newSPD.split('?')[0]
                if (newSPD.indexOf('?') != -1  && newSPD.indexOf('&') != -1 ) {
                    let arr = newSPD.split('?')[1].split('&').map(e=>{
                        return e.split('=')
                    })
                    let goods_id = ''
                    arr.forEach((e,i)=>{
                        if(e[0] == 'goods_id'){
                            goods_id = e[1]
                        }
                    })
                   
                    newSPD = Website + '?goods_id=' + goods_id
                    // console.log(newSPD)
                    this.setState({newSPD})
                }
                
            }
        }
        // console.log(newPT,newSPD,newSJ)
        if(newPT && newSPD && newSJ){
            // console.log(newPT,newSJ,newSPD,shopid)
            LoadingModal({bl:true})
            ajax.post('/hcm/hcmComplaintHandling/save', {
                
                platform:newPT,
                shopName:newSJ,
                shoplink:newSPD, 
                shopid:shopid,
                processingtype:tabskey
               
            }).then(res => {
                // console.log(res)
                LoadingModal({bl:false})
                if(res.data.status == 10000){
                    message.success(res.data.message);
                    
                    this.setState({newSJ:'',newSP:'',newPT:''},()=>{
                        this.querycontent()
                    })
                } else {
                    message.error(res.data.message);
                    this.setState({newSJ:'',newSP:'',newPT:''})
                }
                
            })
            .catch(() => {
                LoadingModal({bl:false})
                message.error('新增失败');
            });
            this.setState({
                NewComplaint: false,
                selectedRowKeys:[],
                checkAll:false
            });
        }else {
            message.error('至少有一项未填');
        }
        
    }
    //关闭对话框事件
    Closecomplaints = () => {
        let {NewComplaint,newSJ,newSP} = this.state;
        this.setState({
            NewComplaint: false,
            newSJ:'',
            newSP:'',
            newPT:''
        });
    }



    //批量导入按钮
    onuploadVisible = (zt) =>{
        this.setState({uploadVisible:zt,fileList:[]})
    }
    //
    propsUpload = () =>{
        let {fileList} = this.state;
        return {
            action: '/hcm/hcmComplaintHandling/readExcelFile',
            accept: 'application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
            onRemove: (file) => {
                // console.log(file)
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
                // console.log(file)
                // this.setState(() => ({
                //     fileList: [file],
                // }));
                this.setState({fileList: [file]})
                return false;
            },
            fileList: fileList,
        }
    }
    //批量导入导入按钮
    handleUpload = () => {
        let { fileList,tabskey,selectedRowKeys} = this.state;
        const formData = new FormData();
        fileList.forEach((file) => {
            formData.append('file', file);
            formData.append('processingtype', tabskey);
        });
        // console.log(formData)

        // this.setState({
        //     uploading: true,
        // });
        LoadingModal({bl:true})
        ajax({
            method: 'post',
            url: '/hcm/hcmComplaintHandling/readExcelFile',
            headers: { 'Content-Type': 'multipart/form-data' },
            data:formData,
            onUploadProgress: (progressEvent) => {
                let percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total)

                this.setState({
                    percent: percentCompleted
                })
            }
        })
        .then((rep) => {
            // console.log(fileList)
            LoadingModal({bl:false})
            if(rep.data.status=='10000'){
                
                // console.log(rep)
                message.success(rep.data.message);
            }else{
                message.warning(rep.data.message);
                // console.log(rep)
            }
            this.setState({
                fileList: [],
                uploading: false,
                uploadVisible: false,
                selectedRowKeys:[],
                checkAll:false
            },()=>{
                this.querycontent()
            });
        })
        .catch(() => {
            LoadingModal({bl:false})
            this.setState({
                uploading: false,
            });
            message.error('upload failed.');
        });
    }


    //未来时间选择
    nexttime = (value, dateString) =>{
        let {nextTIME} = this.state;
        // console.log(dateString)
        this.setState({nextTIME:dateString})
    }
    
    onOk = (value) => {
        // console.log('onOk: ', value);
    }
    disabledDate =(current)=> {
        // Can not select days before today and today
        // console.log(moment().endOf('day'),current)
        return current && current < moment().endOf('day');
      }
    
    range = (start, end)=> {
        const result = [];
        for (let i = start; i < end; i++) {
          result.push(i);
        }
        return result;
      }

    //图片上传
    handleCancel = () => this.setState({ previewVisible: false })

    handlePreview = (file) => {
        // console.log(file.thumbUrl,file.url)
        this.setState({
            previewImage: file.url || file.thumbUrl,
            previewVisible: true,
        });
    }
    handleChange = (info) => {
        // console.log(fileList)
        // this.setState({ fileList })
        // console.log(info)
        const type = 'image/jpeg image/jpg image/png';
        const iStype = info.file.type.length ? type.indexOf(info.file.type) == -1 ? false : true :false;
        if (info.file.size / 1024 / 1024 < 10&&iStype) {
            this.setState({
                fileList:info.fileList
            })
        }
    }
    ImgUpload = (file)=>{
        // console.log(file)
        const isLt10M = file.size / 1024 / 1024 < 10;
        const type = 'image/jpeg image/jpg image/png';
        const iStype = file.type.length ? type.indexOf(file.type) == -1 ? false : true :false;
        
        if (!isLt10M) {
            message.error('图片不能大于10MB!');
        }
        if (!iStype) {
            message.error('支持图片格式jpeg，jpg，png请重新选择');
        }
        
        return isLt10M&&iStype;
    }


    

    //页码跳转
    changePagination = (page, pageSize) =>{
        // console.log(page, pageSize)
        let {checkAll,selectedRowKeys} = this.state;
        
        this.setState({pageNo:page,pageSize:pageSize,selectedRowKeys:[]},()=>{
            this.querycontent()
            if (checkAll) {
                this.DelecheckAll()
                this.setState({checkAll:true})
            }
        })
    }
    onPaginationSize = (page, pageSize) => {
        let {checkAll,selectedRowKeys} = this.state;
        // console.log(page,pageSize)
        
        this.setState({pageNo:page,pageSize:pageSize,selectedRowKeys:[]},()=>{
            this.querycontent()
            // if (checkAll) {
            //     this.DelecheckAll()
            //     this.setState({checkAll:true})
            // }
        })
        
    }
    //查看图片大图
    handleComImageClick = params => {
        // console.log(params)
        ImgModal(params)
      }
    //展开关闭物流记录
    openLogistics = (ev) =>{
        let evBrother = ev.target.parentNode.previousElementSibling;
        let me = ev.target;
        if (evBrother.className == 'ant-timeline logisticsContent loglist') {
            evBrother.className = 'ant-timeline logisticsContent loglist active';
            me.innerHTML = '收起';
            me.nextElementSibling.children[0].className = '';
            me.nextElementSibling.children[1].className = 'active'
        } else {
            evBrother.className = 'ant-timeline logisticsContent loglist';
            me.innerHTML = '展开';
            me.nextElementSibling.children[0].className = 'active';
            me.nextElementSibling.children[1].className = '';
        }
    }
    render() {
        return <Tpl that={this} />
    }
}
export default App;