
export default (name,style={width:'16px',height:'16px'})=>{
    let data = {
        "TB":<img style={style} src='../../../../img/icon1.1/tao_mes.png'/>,
        "TM":<img style={style} src='../../../../img/icon1.1/tao_mes.png'/>,
        "1688":<img style={style} src='../../../../img/icon1.1/tao_mes.png'/>,
        "JD":<img style={style} src='../../../../img/icon1.1/jd_mes.png'/>
    }
    if (name == 'TB' || name == 'TM' || name == '1688' || name == 'JD' ) {
        return data[name]
    }
    
}
