import { message, Breadcrumb, Button, Icon,Tooltip } from 'antd';
import ajax from '../../../js/common/ajax';
import Copyright from "../../components/Copyright";

// 引入编辑器以及编辑器样式
import BraftEditor from 'braft-editor';
import 'braft-editor/dist/braft.css';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: {
                noticeDepartsList: [],
                attach_urls: [],
                dealist:[]
            }
        }
    }
    componentDidMount() {
        this.getDetail()
    }

    getDetail = () => {

        ajax.get('/hcm/notice/Detail', {
            params: {
                notice_id: this.props.match.params.id
            }
        })
        .then((response) => {
            response.data.data.attach_urls = JSON.parse(response.data.data.attach_urls);
            // console.log(response.data.data)
            this.setState({
                data:response.data.data
            })
        })
        .catch((error) => {
            message.error(error.statusText);
        });
    }

    render() {
        let { data } = this.state;
        const editorProps = {
            contentFormat: 'html',
            disabled: true,
            height: '100%',
            controls: [],
            initialContent: data.notice_content
        }
        let {noticeDepartsList = [],dealist=[],notice_send_type,noticeClassifysList=[],shoplist} = data;
        let newnoticeDepartsList = noticeDepartsList?noticeDepartsList.map((item,index)=>{
            return  noticeDepartsList.length > 1 && noticeDepartsList.length-1 != index?item.depart_name + ' 、':item.depart_name
        }):null
        let newnoticeClassifysList = noticeClassifysList?noticeClassifysList.map((item,index)=>{
            return  noticeClassifysList.length > 1 && noticeClassifysList.length-1 != index?item.product_classify_name + ' 、':item.product_classify_name
        }):null
        return (
            <div className='info-announcements'>
                <div className='Breadcrumb'>
                    <Breadcrumb>
                        <Breadcrumb.Item><a href='/index.html#/Announcements'>通知公告</a></Breadcrumb.Item>
                        <Breadcrumb.Item>公告详情</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
                <div className='content'>
                    <header className='header-box'>
                        <h5 className='title'>{data.notice_title}</h5>
                        <div className='info-text'>
                            <div style={{ display: 'flex', width: '100%' }}>
                                <span >{data.notice_typename}<i style={{borderRight:"1px solid #D9D9D9",marginLeft:'16px'}}></i></span>
                                <span>{moment(data.createtime).format('YYYY-MM-DD HH:mm:ss')}<i style={{borderRight:"1px solid #D9D9D9",marginLeft:'16px'}}></i></span>
                                {
                                localStorage.logintype == "HCM"||localStorage.logintype == "HCMSUB" ? 
                                <React.Fragment>
                                <span>From：{data.user_name}<i style={{borderRight:"1px solid #D9D9D9",marginLeft:'16px'}}></i></span>
                                <Tooltip overlayStyle={{maxWidth:'inherit'}} placement="bottom" title={`To${notice_send_type?'品类':'部门'}：${notice_send_type?newnoticeClassifysList.join(''):newnoticeDepartsList.join('')}`}>
                                    <span className='departs'>To{notice_send_type?'品类':'部门'}：{ notice_send_type?newnoticeClassifysList:newnoticeDepartsList}</span>
                                </Tooltip>
                                
                                </React.Fragment>
                                :null
                                }
                            </div>
                            <div className='unread'>
                                {
                                localStorage.logintype == "HCM"||localStorage.logintype == "HCMSUB" ? 
                                    <React.Fragment>
                                    <Tooltip 
                                        placement="bottom" 
                                        title={
                                            <div>
                                                {dealist?dealist.length?<p>经销商（{dealist.length}）</p>:null:null}
                                                <ul>{dealist? dealist.map((item,index)=><li key = {index} >{item}</li>):null}</ul>
                                                {shoplist?shoplist.length?<p>店铺（{shoplist.length}）</p>:null:null}
                                                <ul>{shoplist? shoplist.map((item,index)=><li key = {index} >{item}</li>):null}</ul>
                                            </div>
                                        }
                                    >
                                        <span className=''>共 {(dealist? dealist.length:0) + (shoplist? shoplist.length:0)} 人未读</span>
                                    </Tooltip>
                                    </React.Fragment>
                                :null
                                }
                            </div>
                            
                            
                        </div>
                    </header>
                    <div className='editor-box'>
                        <BraftEditor {...editorProps} />
                    </div>
                    {
                        data.attach_urls.length ?
                            <ul className='attach-urls' style={{width:'100%'}}>
                                <li className='attach-header'>
                                    <span style={{ fontSize: '22px' }}>附件（{data.attach_urls.length}）</span>
                                    {/* <span>共 {
                                        data.attach_urls.length
                                    } 个附件</span> */}
                                </li>
                                {
                                    data.attach_urls.map((item, index) => {
                                        console.log(item)
                                        return (
                                            <li key={index}><Icon type="paper-clip" /><a href={`/hcm/hcmWorkOrder/downLoadFile?filename=${item.response.data.data}`}>{item.name}</a></li>
                                        )
                                    })
                                }
                            </ul>
                            : null
                    }

                </div>
                <Copyright clazzName='copyright' />
            </div>
        )
    }
}
export default App