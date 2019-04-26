
import ThatMain from '../../../HOC/That';
import ContentBox from '../../../components/Layout'
import Copyright from "../../../components/Copyright";
import { Tooltip, Icon, Button, Pagination, Table, Select, DatePicker } from 'antd';

const Option = Select.Option;

import columns from './columns'

const Tpl = ThatMain((that) => {
    let { date, totalNum, pageSize, pageNo, classInfo, priceList, dataList, targetItem } = that.state;
    return (
        <ContentBox
            breadcrumbList={['售价监控', '监控详情']}
            linkList={['1', '']}
            history={that.props.history}
        >
            <div className='monitorinfo'>
                <div className='content'>
                    <div className='class-info'>
                        <h3>
                            {classInfo.productClassifyName}
                        </h3>
                        <ul className='info'>
                            <li>监控时间：<span>{classInfo.monitorDate}</span></li>
                            <li>频次：<span>{classInfo.frequency}</span></li>
                        </ul>
                    </div>
                    <div className='price-list-box'>
                        <Icon onClick={() => that.onScrollLeft(false)} type="left" />
                        <ul className='price-list'>
                            <li className='space'></li>
                            {
                                priceList.map((item, index) => {
                                    return (
                                        <li onClick={() => that.onSelectItem(item)} className={item.plat_name === targetItem.plat_name ? 'price-item active' : 'price-item'} key={index}>
                                            <strong>{item.plat_name}</strong>
                                            <p><span>低价商品数量</span><span style={{ fontSize: '24px', color: '#000' }}>{item.my_count}</span></p>
                                        </li>
                                    )
                                })
                            }
                            <li className='space'></li>
                        </ul>
                        <Icon onClick={() => that.onScrollLeft(true)} type="right" />
                    </div>
                    <div className='data-list-box'>
                        <div className='buts'>
                            <Button href={`/hcm/monitorPrice/downLoad?price_type=${targetItem.plat_code}&id=${that.props.match.params.id}&my_date=${moment(date).format('YYYY-MM-DD')}`}>下载数据</Button>
                            <DatePicker allowClear={false} onChange={(e) => that.editDate(e)} value={date} />
                        </div>
                        <Table
                            columns={columns[targetItem.plat_code]}
                            pagination={false}
                            rowKey='num_iid'
                            expandRowByClick={true}
                            onExpand={(expanded, record) => that.onExpand(expanded, record)}
                            expandedRowRender={(record, index, indent, expanded) => that.rowRender(record, index, indent, expanded)}
                            dataSource={dataList}
                        />
                        <div className='footer'>
                            <div className='info'>
                                {`共 ${totalNum} 条记录 `}
                                &nbsp;&nbsp;
                                {`第  ${pageNo}  / ${Math.ceil(totalNum / pageSize)} 页`}
                            </div>
                            <Pagination pageSize={pageSize} current={pageNo} total={totalNum} onChange={that.changePagination} onShowSizeChange={that.onPaginationSize} showSizeChanger showQuickJumper />
                        </div>
                    </div>
                </div>
                {
                    localStorage.logintype =='HCM' ?
                    <div className='feedback'>
                        <a className='AddFeedback' href='./index.html#/AddFeedback'>
                            <Icon style={{color:'#BDA571',fontSize:20,paddingRight:10}} type="message" />
                            <div>
                                
                                <p>
                                监控数据不精准,
                                </p>
                                <p>点我反馈！</p>
                            </div>
                        </a>
                    </div>
                    :null
                }
                
            </div>
        </ContentBox>
    )
})



export default Tpl
