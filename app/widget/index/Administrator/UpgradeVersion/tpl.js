import './UpgradeVersion.less'
import ThatMain from '../../../HOC/That';
import ContentBox from '../../../components/Layout'
// import Copyright from "../../../components/Copyright";

import { Button, Breadcrumb, Table, Pagination, DatePicker } from 'antd'

const Tpl = ThatMain((that) => {

    const { RangePicker } = DatePicker;
    const dateFormat = 'YYYY-MM-DD';
    return (
        <div className="UpgradeVersion">
            <div className="Breadcrumb">
                <Breadcrumb >
                    <Breadcrumb.Item>
                        系统设置
                            </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        升级版本客户

                    </Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <div className="content">
                <div style={{ marginBottom: "20px" }}>
                    <a href={`/hcm/HcmUpgradedVersion/downUpgradedVersionlist?begintime=${that.state.begintime}&endtime=${that.state.endtime}&pageSize=${that.state.pageSize}&pageNo=${that.state.pageNo}`}>
                        <Button className="btn6">
                            下载数据

                             </Button>
                    </a>
                    <span style={{ float: "right"}}>
                        提交时间：
                        <RangePicker
                        style={{ width: "300px" }}
                        defaultValue={[moment(Date.now() - 720 * 60 * 60 * 1000),
                        moment(Date.now())]}
                        onChange={that.onChange}
                        format={dateFormat}
                    />
                    </span>
                    
                </div>
                <Table
                    pagination={false}
                    rowKey="id"
                    scroll={{ x: (that.state.ProductInformation_list.length - 1) * 200 }}
                    columns={that.state.ProductInformation_list}
                    dataSource={that.state.link_taobao}
                />

                <div className="ProductInformationFooter">
                    <div className='footer'>
                        <div className='info'>
                            {`共 ${that.state.totalNum} 条记录 `}
                            &nbsp;&nbsp;
                        {`第  ${that.state.pageNo}  / ${Math.ceil(that.state.totalNum / that.state.pageSize)} 页`}

                        </div>
                        <Pagination pageSize={that.state.pageSize} current={that.state.pageNo} total={that.state.totalNum} onChange={that.changePagination} onShowSizeChange={that.onPaginationSize} showSizeChanger showQuickJumper />

                    </div>
                </div>

            </div>
        </div>
    )
})

export default Tpl