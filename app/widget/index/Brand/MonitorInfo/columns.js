import { ImgModal } from '../../../components/ImgModal/ImgModal';
const render = (text, item, index)=>{
    return(
        <p>
            <span>{text}</span>
            {
                item.accept_my!=''? 
                <img style={{margin:'0 10px'}} src='../../../../img/Authorized.png' />
                :
                null
            }
            {
                item.white_my!=''? 
                <span className='white_my'>
                    白名单
                </span>
                :
                null
            }
        </p>
    )
}
export default {
    TB: [{
            title: '序号',
            dataIndex: 'index',
            key: 'index',
            render: (text, item, index) => index + 1,
            align: 'left',
            width: '7%'
        },{
            title: '平台',
            dataIndex: 'dict_name',
            key: 'dict_name',
            width: '10%'
        },
        {
            title: '商品名称',
            dataIndex: 'title',
            key: 'title',
            render: (text, item, index) =>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img onClick={() => ImgModal({ bl: true, urls: [item.pic_url], index: 0, close: true })} style={{ width: '50px', height: '50px', marginRight: '10px' }} src={item.pic_url} />
                    <a onClick={()=>{window.open(item.item_url)}}>{item.title}</a>
                </div>,
            align: 'left',
            width: '40%'
        },
        {
            title: '店铺名称',
            dataIndex: 'shop_name',
            key: 'shop_name',
            render:render,
            align: 'right',
            width: '15%'
        },
        {
            title: '价格',
            dataIndex: 'price',
            key: 'price',
            align: 'right',
            width: '10%'
        },
        {
            title: '销量',
            dataIndex: 'salesvolume',
            key: 'salesvolume',
            align: 'right',
            width: '10%'
        },
        {
            title: '发货地',
            dataIndex: 'state;',
            key: 'state;',
            render: (text, item, index) => <div style={{ width: '150px' }}>{item.state} {item.area}</div>,
            align: 'right',
            width: '15%'
        },
    ],
    TM: [
        {
            title: '序号',
            dataIndex: 'index',
            key: 'index',
            render: (text, item, index) => index + 1,
            align: 'left',
            width: '7%'
        },
        {
            title: '平台',
            dataIndex: 'dict_name',
            key: 'dict_name',
            width: '10%'
        },
        {
            title: '商品名称',
            dataIndex: 'title',
            key: 'title',
            render: (text, item, index) =>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img onClick={() => ImgModal({ bl: true, urls: [item.pic_url], index: 0, close: true })} style={{ width: '50px', height: '50px', marginRight: '10px' }} src={item.pic_url} />
                    <a onClick={()=>{window.open(item.item_url)}}>{item.title}</a>
                </div>,
            align: 'left',
            width: '40%'
        },
        {
            title: '店铺',
            dataIndex: 'shop_name',
            key: 'shop_name',
            render:render,
            align: 'right',
            width: '15%'
        },
        {
            title: '价格',
            dataIndex: 'price',
            key: 'price',
            align: 'right',
            width: '10%'
        },
        {
            title: '销量',
            dataIndex: 'salesvolume',
            key: 'salesvolume',
            align: 'right',
            width: '10%'
        },
        {
            title: '发货地',
            dataIndex: 'state;',
            key: 'state;',
            render: (text, item, index) => <div style={{ width: '150px' }}>{item.state} {item.area}</div>,
            align: 'right',
            width: '15%'
        },
    ],
    1688: [
        {
            title: '序号',
            dataIndex: 'index',
            key: 'index',
            render: (text, item, index) => index + 1,
            align: 'left',
            width: '7%'
        },
        {
            title: '商品信息',
            dataIndex: 'title',
            key: 'title',
            render: (text, item, index) =>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img onClick={() => ImgModal({ bl: true, urls: [item.pic_url], index: 0, close: true })} style={{ width: '50px', height: '50px', marginRight: '10px' }} src={item.pic_url} />
                    <a onClick={()=>{window.open(item.item_url)}}>{item.title}</a>
                </div>,
            align: 'left',
            width: '40%'
        },
        {
            title: '公司名称',
            dataIndex: 'nickname',
            key: 'nickname',
            render:render,
            align: 'right',
            width: '18%'
        },
        {
            title: '价格',
            dataIndex: 'price',
            key: 'price',
            align: 'right',
            width: '15%'
        },
        {
            title: '销量',
            dataIndex: 'salesvolume',
            key: 'salesvolume',
            align: 'right',
            width: '10%'
        },
        {
            title: '发货地',
            dataIndex: 'itemarea',
            key: 'itemarea',
            align: 'right',
            width: '15%'
        },
    ],
    PDD: [
        {
            title: '序号',
            dataIndex: 'index',
            key: 'index',
            render: (text, item, index) => index + 1,
            align: 'left',
            width: '7%'
        },
        {
            title: '商品信息',
            dataIndex: 'title',
            key: 'title',
            render: (text, item, index) =>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img onClick={() => ImgModal({ bl: true, urls: [item.pic_url], index: 0, close: true })} style={{ width: '50px', height: '50px', marginRight: '10px' }} src={item.pic_url} />
                    <a  onClick={()=>{window.open(item.item_url)}}>{item.title}</a>
                </div>,
            align: 'left',
            width: '40%'
        },
        {
            title: '店铺名称',
            dataIndex: 'nickname',
            key: 'nickname',
            render:render,
            align: 'right',
            width: '18%'
        },
        {
            title: '拼单价',
            dataIndex: 'price',
            key: 'price',
            align: 'right',
            width: '15%'
        },
        {
            title: '已拼件数',
            dataIndex: 'salesvolume',
            key: 'salesvolume',
            align: 'right',
            width: '10%'
        },
        {
            title: '评价数',
            dataIndex: 'ratenum',
            key: 'ratenum',
            align: 'right',
            width: '15%'
        },
    ],
    JD: [
        {
            title: '序号',
            dataIndex: 'index',
            key: 'index',
            render: (text, item, index) => index + 1,
            align: 'left',
            width: '7%'
        },
        {
            title: '商品信息',
            dataIndex: 'title',
            key: 'title',
            render: (text, item, index) =>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img onClick={() => ImgModal({ bl: true, urls: [item.pic_url], index: 0, close: true })} style={{ width: '50px', height: '50px', marginRight: '10px' }} src={item.pic_url} />
                    <a  onClick={()=>{window.open(item.item_url)}}>{item.title}</a>
                </div>,
            align: 'left',
            width: '40%'
        },
        {
            title: '店铺名称',
            dataIndex: 'nickname',
            key: 'nickname',
            render:render,
            align: 'right',
            width: '18%'
        },
        {
            title: '价格',
            dataIndex: 'price',
            key: 'price',
            align: 'right',
            width: '15%'
        },
        {
            title: '评价数',
            dataIndex: 'ratenum',
            key: 'ratenum',
            align: 'right',
            width: '15%'
        },
    ],
    SN: [
        {
            title: '序号',
            dataIndex: 'index',
            key: 'index',
            render: (text, item, index) => index + 1,
            align: 'left',
            width: '7%'
        },
        {
            title: '商品信息',
            dataIndex: 'title',
            key: 'title',
            render: (text, item, index) =>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img onClick={() => ImgModal({ bl: true, urls: [item.pic_url], index: 0, close: true })} style={{ width: '50px', height: '50px', marginRight: '10px' }} src={item.pic_url} />
                    <a  onClick={()=>{window.open(item.item_url)}}>{item.title}</a>
                </div>,
            align: 'left',
            width: '40%'
        },
        {
            title: '店铺名称',
            dataIndex: 'nickname',
            render:render,
            key: 'nickname',
            align: 'right',
            width: '18%'
        },
        {
            title: '价格',
            dataIndex: 'price',
            key: 'price',
            align: 'right',
            width: '15%'
        },
        {
            title: '评价数',
            dataIndex: 'ratenum',
            key: 'ratenum',
            align: 'right',
            width: '15%'
        },
    ],
    DD: [
        {
            title: '序号',
            dataIndex: 'index',
            key: 'index',
            render: (text, item, index) => index + 1,
            align: 'left',
            width: '7%'
        },
        {
            title: '商品信息',
            dataIndex: 'title',
            key: 'title',
            render: (text, item, index) =>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img onClick={() => ImgModal({ bl: true, urls: [item.pic_url], index: 0, close: true })} style={{ width: '50px', height: '50px', marginRight: '10px' }} src={item.pic_url} />
                    <a onClick={()=>{window.open(item.item_url)}}>{item.title}</a>
                </div>,
            align: 'left',
            width: '40%'
        },
        {
            title: '店铺名称',
            dataIndex: 'nickname',
            key: 'nickname',
            render:render,
            align: 'right',
            width: '18%'
        },
        {
            title: '价格',
            dataIndex: 'price',
            key: 'price',
            align: 'right',
            width: '15%'
        },
        {
            title: '评价数',
            dataIndex: 'ratenum',
            key: 'ratenum',
            align: 'right',
            width: '15%'
        },
    ],
    WPH: [
        {
            title: '序号',
            dataIndex: 'index',
            key: 'index',
            render: (text, item, index) => index + 1,
            align: 'left',
            width: '7%'
        },
        {
            title: '商品信息',
            dataIndex: 'title',
            key: 'title',
            render: (text, item, index) =>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img onClick={() => ImgModal({ bl: true, urls: [item.pic_url], index: 0, close: true })} style={{ width: '50px', height: '50px', marginRight: '10px' }} src={item.pic_url} />
                    <a  onClick={()=>{window.open(item.item_url)}}>{item.title}</a>
                </div>,
            align: 'left',
            width: '40%'
        },
        {
            title: '公司名称',
            dataIndex: 'nickname',
            key: 'nickname',
            render:render,
            align: 'right',
            width: '15%'
        },
        {
            title: '价格',
            dataIndex: 'discount_price',
            key: 'discount_price',
            align: 'right',
            width: '10%'
        },
        {
            title: '原价',
            dataIndex: 'price',
            key: 'price',
            align: 'right',
            width: '10%'
        },
        {
            title: '折扣率',
            dataIndex: 'discount',
            key: 'discount',
            align: 'right',
            width: '15%'
        },
    ],
}