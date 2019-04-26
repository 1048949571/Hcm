export default (name,style={width:'20px',height:'20px'})=>{
    let data = {
        "TB":<img style={style} src='../../../../img/platform/1_taobao.svg'/>,
        "TM":<img style={style} src='../../../../img/platform/2_tall.svg'/>,
        "JD":<img style={style} src='../../../../img/platform/3_jd.svg'/>,
        "SN":<img style={style} src='../../../../img/platform/4_suning.svg'/>,
        "GM":<img style={style} src='../../../../img/platform/5_gome.svg'/>,
        "PDD":<img style={style} src='../../../../img/platform/6_pinduoduo.svg'/>,
        "AMAZON":<img style={style} src='../../../../img/platform/7_a.svg'/>,
        "WPH":<img style={style} src='../../../../img/platform/8_weipinhui.svg' />,
        "1688":<img style={style} src='../../../../img/platform/9_1688.svg'/>,
        "SMT":<img style={style} src='../../../../img/platform/10_sumaitong.svg'/>,
        "DD":<img style={style} src='../../../../img/platform/11_dangdang.svg'/>,
        "ALST":<img style={style} src='../../../../img/platform/12_lingshoutong.svg'/>,
        "1HD":<img style={style} src='../../../../img/platform/13_1haodian.svg'/>,
        "YJWD":<img style={style} src='../../../../img/platform/14_yunji.svg'/>,
        "YLW":<img style={style} src='../../../../img/platform/15_youle.svg'/>,
        "XY":<img style={style} src='../../../../img/platform/16_xainyu.svg'/>,
        "WECD":<img style={style} src='../../../../img/platform/17_weixin.svg'/>,
        "MGJ":<img style={style} src='../../../../img/platform/18_mogujie.svg'/>,
        "JMYP":<img style={style} src='../../../../img/platform/19_jumei.svg'/>,
        "CCJ":<img style={style} src='../../../../img/platform/20_chuchujie.svg'/>,
        "BBWG":<img style={style} src='../../../../img/platform/21_beibeiwang.svg'/>,
        "platform_OTHER":<img style={style} src='../../../../img/platform/22_qita.svg'/>,
    }
    return data[name]
}
