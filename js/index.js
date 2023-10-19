// 监控逻辑
(function () {
    // 监控区域 - 切换功能
    $('.content').eq(0).show()
    $('.monitor .tabs span').click(function () {
        const _index = $(this).index()
        $(this).addClass('active').siblings('span').removeClass("active")
        $('.content').eq(_index).show().siblings('.content').hide()
    })

    // each 遍历dom
    $('.marquee').each(function () {
        const rows = $(this).children().clone()
        $(this).append(rows)
    })
})();

//点位 饼图
(function () {
    const pie = document.querySelector('.pie')
    const echartsInstance = echarts.init(pie)
    const option = {
        color: ['#006cff', '#60cda0', '#ed8884', '#ff9f7f', '#0096ff', '#9fe6b8', '#32c5e9', '#1d9dff'],
        tooltip: {
            trigger: "item",
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        series: [
            {
                name: '销售统计',
                type: 'pie',
                radius: ["10%", "70%"],
                center: ['50%', '50%'],
                roseType: 'radius',
                itemStyle: {
                    borderRadius: 5
                },
                label: {
                    fontSize: 10
                },
                labelLine: {
                    // 连接到图形的线长度
                    length: 6,
                    // 连接到文字的线长度
                    length2: 8
                },
                data: [
                    { value: 20, name: "云南" },
                    { value: 26, name: "北京" },
                    { value: 24, name: "山东" },
                    { value: 25, name: "河北" },
                    { value: 20, name: "江苏" },
                    { value: 25, name: "浙江" },
                    { value: 30, name: "四川" },
                    { value: 42, name: "湖北" }
                ]
            }
        ]
    }
    echartsInstance.setOption(option)
    window.addEventListener("resize", () => {
        echartsInstance.resize()
    })
})();

// 柱状图
(function () {

    const bar = document.querySelector(".bar")
    const echartsInstance = echarts.init(bar)
    const item = {
        value: 1200,
        itemStyle: {
            color: '#254065'
        },
        // 鼠标经过柱子颜色
        emphasis: {
            itemStyle: {
                color: '#254065'
            }
        },
        // 工具提示隐藏
        tooltip: {
            extraCssText: 'opacity:0'
        }
    };

    const option = {
        tooltip: {
            trigger: 'item'
        },
        color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
                {
                    offset: 0,
                    color: '#00fffb'
                },
                {
                    offset: 1,
                    color: '#0061ce'
                }
            ],
            global: false
        },
        grid: {
            top: '3%',
            left: '0',
            right: '3%',
            bottom: '3%',
            containLabel: true,
            show: true,
            borderColor: 'rgba(0, 240, 255, 0.3)'
        },
        xAxis: {
            type: 'category',
            data: ['上海', '广州', '北京', '深圳', '合肥', '', '......', '', '杭州', '厦门', '济南', '成都', '重庆'],
            axisTick: { show: false, alignWithLabel: false },
            axisLabel: {
                color: '#4c9bfd',
                fontSize: 8
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(0, 240, 255, 0.3)'
                }
            }
        },
        yAxis: {
            type: 'value',
            axisTick: {
                show: false
            },
            axisLabel: {
                color: '#4c9bfd'
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(0, 240, 255, 0.3)',
                }
            },
            splitLine: {
                lineStyle: {
                    color: 'rgba(0, 240, 255, 0.3)'
                }
            }
        },
        series: [
            {
                barWidth: "50%",
                data: [
                    2100,
                    1900,
                    1700,
                    1560,
                    1400,
                    item,
                    item,
                    item,
                    900,
                    750,
                    600,
                    480,
                    240
                ],
                type: 'bar'
            }
        ]
    }
    echartsInstance.setOption(option)
    window.addEventListener("resize", () => {
        echartsInstance.resize()
    })

})();

//订单逻辑
(function () {
    var data = {
        day365: { order: '20,301,987', amount: '99834' },
        day90: { order: '301,987', amount: '9834' },
        day30: { order: '1,987', amount: '3834' },
        day1: { order: '987', amount: '834' }
    }

    // 获取显示的数据
    const h4order = $('.order h4').eq(0)
    const h4Amount = $('.order h4').eq(1)
    h4order.html(data['day365'].order)
    h4Amount.html(data['day365'].amount)
    let i=0;
    // tabs数据切换
    $('.order .filter span').click(function(){
        let _index = $(this).index()
        i=_index
        const key = $(this).attr('data-key')
        $(this).addClass('active').siblings('span').removeClass('active')
        h4order.html(data[key].order)
        h4Amount.html(data[key].amount)
    })


    
    function autoToggle(){
        timer = setInterval(()=>{
            i++;
            if(i>3){
                i=0
            }
            $('.order .filter span').eq(i).click()
        },1000)
    }
    autoToggle()

    $(".order").hover(function(){
        clearInterval(timer)
      },function(){
        autoToggle()
      })
})();

//销售额逻辑
(function(){

    var dataly = {
        // 年
        year: [
          [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
          [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
        ],
        // 季
        quarter: [
          [23, 75, 12, 97, 21, 67, 98, 21, 43, 64, 76, 38],
          [43, 31, 65, 23, 78, 21, 82, 64, 43, 60, 19, 34]
        ],
        // 月
        month: [
          [34, 87, 32, 76, 98, 12, 32, 87, 39, 36, 29, 36],
          [56, 43, 98, 21, 56, 87, 43, 12, 43, 54, 12, 98]
        ],
        // 周
        week: [
          [43, 73, 62, 54, 91, 54, 84, 43, 86, 43, 54, 53],
          [32, 54, 34, 87, 32, 45, 62, 68, 93, 54, 54, 24]
        ]
      }
    const line = document.querySelector('.line')
    const echartsInstance = echarts.init(line)
    const option = {
        title: {
          text: '单位：万',
          textStyle:{
            color:'#438be6',
            fontSize:13
          },
          left: '5%'
        },
        color:['#00eeee','#e83e35'],
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['预期销售额', '实际销售额'],
          textStyle:{
            color:'#5aabff'
          }
        },
        grid: {
            top:'25%',
          left: '1%',
          right: '1%',
          bottom: 0,
          containLabel: true
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          axisTick:{
            show:false,
            alignWithLabel: false
          },
          axisLabel: {
            color: '#4c9bfd'
        },
          data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
        },
        yAxis: {
          type: 'value',
          axisTick: {
            show: false
        },
        axisLabel: {
            color: '#4c9bfd'
        },
        },
        series: [
          {
            name: '预期销售额',
            type: 'line',
            stack: 'Total',
            data: dataly['year'][0],
            smooth: true
          },
          {
            name: '实际销售额',
            type: 'line',
            stack: 'Total',
            data: dataly['year'][1],
            smooth: true
          }
        ]
      };
    echartsInstance.setOption(option)
    window.addEventListener("resize", () => {
        echartsInstance.resize()
      })

      let i = 0;
      $('.sales .caption span').click(function(){
        let _index = $(this).index()
        i=_index-1
        const key = $(this).attr('data-index')
        $(this).addClass('active').siblings('span').removeClass('active')
        const setoption = {
            series:[{
                data:dataly[key][0]
            },{
                data:dataly[key][1]
            }]
        }
        echartsInstance.setOption(setoption)
    })
    function autoToggle(){
        timer = setInterval(()=>{
            i++;
            if(i>3){
                i=0
            }
            $('.sales .caption span').eq(i).click()
        },1000)
    }
    autoToggle()

    $(".sales").hover(function(){
        clearInterval(timer)
      },function(){
        autoToggle()
      })
})();