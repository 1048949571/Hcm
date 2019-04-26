import echarts from 'echarts'

class ShopPie extends React.Component {

  componentDidMount() {
    const dom = $(`#${this.props.nodeDom}`)
    $('#shop-pie-container').css({
      width: `${dom.width()}px`,
      height: `${dom.height()}px`,
    })
    this.myChart()
  }
  myChart = () => {
    let shopGroupData = this.props.data;
    const myChart = echarts.init(document.getElementById('shop-pie-container'));
    let totnum = 0;
    if (shopGroupData.length) {
        shopGroupData.forEach(v => {
          totnum += parseInt(v.value, 10)
        })
    }

    myChart.setOption({
        tooltip: {
            trigger: 'item',
            formatter: "{b}: {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            right: '20%',
            top: 'center',
            itemGap: 20,
            data: shopGroupData.map(item => item.name),
            icon: 'pin'
        },
        series: [
            {
                name: '店铺总数量',
                type: 'pie',
                radius: ['0%', '30%'],
                center: ['38%', '50%'],
                color: ['#fff'],
                silent: true,
                label: {
                    position: 'center',
                    formatter: '{c| {c}}\n{a|{a}}',
                    color: '#333',
                    fontSize: 20,
                    rich: {
                        a: {
                            fontSize: 14,
                            color: '#999',
                            align: 'center'
                        },
                        c: {
                            color: '#333',
                            fontSize: 20,
                            padding: 10,
                            align: 'center'
                        }
                    }
                },
                data: [
                    { value: totnum, name: '' }
                ]
            },
            {
                type: 'pie',
                radius: ['35%', '45%'],
                center: ['38%', '50%'],
                avoidLabelOverlap: true,
                label: {
                    formatter: '{b}：{c}\n占比：{d}%',
                },
                color: ['#55a0f8', '#66c8ca', '#72c77c', '#f4d358', '#e17c7d', '#8e66dd'],
                data: shopGroupData
            }
        ]
    })

  }
  render() {
    return <div id="shop-pie-container"> </div>
  }
}

export default ShopPie