//防止变量名冲突，采用立即执行函数
//监控模块
(function () {
    //事件委托
    document.querySelector('.monitor .tabs').addEventListener('click', e => {
        if (e.target.tagName === 'A') {
            //排他思想
            document.querySelector('.monitor .tabs a.active').classList.remove('active')
            e.target.classList.add('active')
            // console.log(e.target.dataset.id);
            document.querySelector('.block').classList.remove('block')
            //e.target.dataset.id转化为数字型，不然无法获取对象
            const i = +e.target.dataset.id
            document.querySelector(`.monitor .content:nth-of-type(${i + 1})`).classList.add('block')
        }
    })
})();

//点位分布模块
(function () {
    const myCharts = echarts.init(document.querySelector('.pie'))
    const option = {
        // 提示框组件
        tooltip: {
            // trigger 触发方式。  非轴图形，使用item的意思是放到数据对应图形上触发提示
            trigger: 'item',
            // 格式化提示内容：
            // a 代表series系列图表名称  
            // b 代表series数据名称 data 里面的name    
            // c 代表series数据值 data 里面的value   
            // d代表  当前数据/总数据的比例
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        color: ['#006cff', '#60cda0', '#ed8884', '#ff9f7f', '#0096ff', '#9fe6b8', '#32c5e9', '#1d9dff'],
        series: [
            {
                name: '点位统计',
                type: 'pie',
                radius: [10, 70],
                center: ['50%', '50%'],
                roseType: 'area',

                data: [
                    { value: 20, name: "云南" },
                    { value: 26, name: "北京" },
                    { value: 24, name: "山东" },
                    { value: 25, name: "河北" },
                    { value: 20, name: "江苏" },
                    { value: 25, name: "浙江" },
                    { value: 30, name: "四川" },
                    { value: 42, name: "湖北" }
                ],
                label: {
                    fontSize: 10
                },
                labelLine: {
                    length: 6,
                    length2: 8
                }
            }
        ]
    }
    myCharts.setOption(option)
    // 当浏览器缩放时图标也跟着缩放
    window.addEventListener('resize', function () {
        myCharts.resize();
    })
})();

// 用户模块
(function () {
    const myCharts = echarts.init(document.querySelector('.bar'))
    const option = {
        tooltip: {
            trigger: 'item',
            extraCssText: 'box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);'
        },
        grid: {
            left: '3%',
            right: '3%',
            bottom: '3%',
            //  图表位置紧贴画布边缘是否显示刻度以及label文字 防止坐标轴标签溢出跟grid 区域有关系
            containLabel: true,
            //是否显示边缘网格
            show: true,
            //设置网格边框颜色
            borderColor: 'rgba(0, 240, 255, 0.3)'
        },
        xAxis: [
            {
                type: 'category',
                data: ['上海', '广州', '北京', '深圳', '合肥', '', '......', '', '杭州', '厦门', '济南', '成都', '重庆'],
                axisTick: {
                    //柱子是否在刻度中间
                    alignWithLabel: false,
                    //是否显示刻度
                    show: false
                },
                // x轴标签文字颜色
                axisLable: {
                    color: '#4c9bfd'
                },
                //x轴线条样式
                axisLine: {
                    lineStyle: {
                        color: 'rgba(0, 240, 255, 0.3)',
                        // width:8,  x轴线的粗细
                        // opcity: 0,   如果不想显示x轴线 则改为 0
                    }
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                splitLine: {
                    lineStyle: {
                        color: 'rgba(0, 240, 255, 0.3)'
                    }
                },
                // 刻度设置
                axisTick: {
                    // 不显示刻度
                    show: false
                },
                // y坐标轴文字标签样式设置
                axisLabel: {
                    color: '#4c9bfd'
                },
                axisLine: {
                    lineStyle: {
                        color: 'rgba(0, 240, 255, 0.3)',
                        // width:8,  x轴线的粗细
                        // opcity: 0,   如果不想显示x轴线 则改为 0
                    }
                },
            }

        ],
        // 修改线性渐变色方式 1
        color: new echarts.graphic.LinearGradient(
            // (x1,y2) 点到点 (x2,y2) 之间进行渐变
            0, 0, 0, 1,
            [
                { offset: 0, color: '#00fffb' }, // 0 起始颜色
                { offset: 1, color: '#0061ce' }  // 1 结束颜色
            ]
        ),
        series: [
            {
                name: 'Direct',
                type: 'bar',
                barWidth: '60%',
                data: [2100,
                    1900,
                    1700,
                    1560,
                    1400,
                    {
                        name: '',
                        value: 1200,
                        // 柱子颜色
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
                        },
                    },
                    {
                        name: '',
                        value: 1200,
                        // 柱子颜色
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
                        },
                    },
                    {
                        name: '',
                        value: 1200,
                        // 柱子颜色
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
                        },
                    },
                    900,
                    750,
                    600,
                    480,
                    240]
            }
        ],

    };
    myCharts.setOption(option)
    // 当浏览器缩放时图标也跟着缩放
    window.addEventListener('resize', function () {
        myCharts.resize();
    })
})();

//订单模块
(function () {
    // document.querySelector('.filter').addEventListener('click', e => {
    //     if (e.target.tagName === 'A') {
    //         //排他思想
    //         document.querySelector('.order .filter a.active').classList.remove('active')
    //         e.target.classList.add('active')
    //         //e.target.dataset.id转化为数字型，不然无法获取对象
    //         const i = +e.target.dataset.id
    //         document.querySelector('.flex').classList.remove('flex')
    //         // console.log(document.querySelector(`.data:nth-of-type(${i})`))
    //         document.querySelector(`.order .data:nth-of-type(${i})`).classList.add('flex')
    //     }
    // })

    //点击切换
    const as = document.querySelectorAll('.filter a')
    // 遍历数组注册点击事件
    as.forEach((item, index) => {
        item.addEventListener('click', function () {
            // 排他思想
            document.querySelector('.order .filter a.active').classList.remove('active')
            item.classList.add('active')
            document.querySelector('.order .flex').classList.remove('flex')
            // index从0开始所以加1
            document.querySelector(`.order .data:nth-of-type(${index + 1})`).classList.add('flex')
        })
    })

    //自动切换
    let i = 0
    let timerId = setInterval(function () {
        i++
        if (i >= 4) i = 0;
        as[i].click()
    }, 1000);

    // 鼠标经过sales，关闭定时器，离开开启定时器
    document.querySelector('.order').addEventListener('mouseenter', function () {
        clearInterval(timerId)
    })
    document.querySelector('.order').addEventListener('mouseleave', function () {
        timerId = setInterval(function () {
            i++
            if (i >= 4) i = 0;
            as[i].click()
        }, 1000);
    })
})();

//销售模块
(function () {
    const myCharts = echarts.init(document.querySelector('.line'))
    const data = {
        year: [
            [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
            [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
        ],
        quarter: [
            [23, 75, 12, 97, 21, 67, 98, 21, 43, 64, 76, 38],
            [43, 31, 65, 23, 78, 21, 82, 64, 43, 60, 19, 34]
        ],
        month: [
            [34, 87, 32, 76, 98, 12, 32, 87, 39, 36, 29, 36],
            [56, 43, 98, 21, 56, 87, 43, 12, 43, 54, 12, 98]
        ],
        week: [
            [43, 73, 62, 54, 91, 54, 84, 43, 86, 43, 54, 53],
            [32, 54, 34, 87, 32, 45, 62, 68, 93, 54, 54, 24]
        ]
    }
    const option = {
        tooltip: {
            trigger: 'axis'
        },
        grid: {
            top: '20%',
            left: '3%',
            right: '4%',
            bottom: '3%',
            show: true,
            borderColor: "#012f4a",
            containLabel: true
        },
        legend: {
            textStyle: {
                color: '#4c9bfd' // 图例文字颜色
            },
            right: '10%' // 距离右边10%
        },
        xAxis: {
            type: 'category',
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
            axisTick: {
                show: false // 去除刻度线
            },
            axisLabel: {
                color: '#4c9bfd' // 文本颜色
            },
            axisLine: {
                show: false // 去除轴线
            },
            boundaryGap: false  // 去除轴内间距
        },
        yAxis: {
            type: 'value',
            axisTick: {
                show: false  // 去除刻度
            },
            axisLabel: {
                color: '#4c9bfd' // 文字颜色
            },
            splitLine: {
                lineStyle: {
                    color: '#012f4a' // 分割线颜色
                }
            }
        },
        series: [
            {
                name: '邮件营销',
                type: 'line',
                stack: 'Total',
                data: data.year[0],
                smooth: true
            },
            {
                name: '广告营销',
                type: 'line',
                stack: 'Total',
                data: data.year[1],
                smooth: true
            },
        ]
    };
    myCharts.setOption(option)
    // 当浏览器缩放时图标也跟着缩放
    window.addEventListener('resize', function () {
        myCharts.resize();
    })

    // document.querySelector('.caption').addEventListener('click', e => {
    //     if (e.target.tagName === 'A') {
    //         //排他思想
    //         document.querySelector('.caption .active').classList.remove('active')
    //         e.target.classList.add('active')
    //         const arr = data[e.target.dataset.type]
    //         // console.log(e.target.dataset.type);
    //         option.series[0].data = arr[0]
    //         option.series[1].data = arr[1]
    //         //重新渲染
    //         myCharts.setOption(option)
    //     }


    // 点击切换
    const as = document.querySelectorAll('.caption a')
    as.forEach(item => {
        item.addEventListener('click', function () {
            document.querySelector('.caption .active').classList.remove('active')
            item.classList.add('active')
            const arr = data[item.dataset.type]
            option.series[0].data = arr[0]
            option.series[1].data = arr[1]
            myCharts.setOption(option)
        })
    })


    //自动切换
    let i = 0
    let timerId = setInterval(function () {
        i++
        if (i >= 4) i = 0;
        as[i].click()
    }, 1000);

    // 鼠标经过sales，关闭定时器，离开开启定时器
    document.querySelector('.sales').addEventListener('mouseenter', function () {
        clearInterval(timerId)
    })
    document.querySelector('.sales').addEventListener('mouseleave', function () {
        timerId = setInterval(function () {
            i++
            if (i >= 4) i = 0;
            as[i].click()
        }, 1000);
    })


})();

//销售渠道模块
(function () {
    const myCharts = echarts.init(document.querySelector('.radar'))
    const data = [[90, 19, 56, 11, 34]];

    const lineStyle = {
        normal: {
            width: 1,
            opacity: 0.5
        }
    };

    const option = {
        // visualMap: {
        //     show: true,
        //     min: 0,
        //     max: 20,
        //     dimension: 6,
        //     inRange: {
        //         colorLightness: [0.5, 0.8]
        //     }
        // },
        tooltip: {
            show: true,
            // 控制提示框组件的显示位置
            position: ['60%', '10%'],
            backgroundColor: 'rgba(50,50,50,0.7)',
            borderColor: 'rgba(50,50,50,0.7)'
        },
        radar: {
            // 雷达图的指示器 内部填充数据
            indicator: [
                { name: '机场', max: 100 },
                { name: '商场', max: 100 },
                { name: '火车站', max: 100 },
                { name: '汽车站', max: 100 },
                { name: '地铁', max: 100 }
            ],

            center: ['50%', '50%'],
            // 外半径占据容器大小
            radius: '50%',
            shape: 'circle',
            // 分割的圆圈个数
            splitNumber: 4,
            name: {
                textStyle: {
                    color: '#4c9bfd'
                }
            },
            //修饰分割线条样式
            splitLine: {
                lineStyle: {
                    color: "rgba(255, 255, 255, 0.5)",
                }
            },
            splitArea: {
                show: false
            },
            //修改坐标轴线条样式
            axisLine: {
                lineStyle: {
                    color: 'rgba(255, 255, 255, 0.5)'
                }
            },
        },
        series: [
            {
                name: '北京',
                type: 'radar',
                // 线条样式
                lineStyle: {
                    normal: {
                        color: "#fff",
                        width: 1,
                        opacity: 0.5
                    }
                },
                data: [[90, 19, 56, 11, 34]],
                symbol: 'none',
                // 设置图形标记 （拐点）
                symbol: "circle",
                // 这个是设置小圆点大小
                symbolSize: 5,
                // 设置小圆点颜色
                itemStyle: {
                    color: "#fff"
                },
                // 在圆点上显示相关数据
                label: {
                    show: true,
                    color: '#fff',
                    fontSize: 8
                },
                // 修饰区域填充的背景颜色
                areaStyle: {
                    color: "rgba(238, 197, 102, 0.6)"
                },
            },

        ]
    };
    myCharts.setOption(option)
    // 当浏览器缩放时图标也跟着缩放
    window.addEventListener('resize', function () {
        myCharts.resize();
    })
})();

// 季度
(function () {
    const myCharts = echarts.init(document.querySelector('.gauge'))
    const option = {
        series: [
            {
                name: '销售进度',
                type: 'pie',
                radius: ['130%', '150%'], //内部圆半径和外部圆半径
                // 移动下位置  套住50%文字
                center: ['48%', '80%'],
                emphasis: {
                    label: {
                        show: true,
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                },
                labelLine: {
                    show: false
                },
                // 起始角度，支持范围[0, 360]
                startAngle: 180,
                // 鼠标经过不变大
                hoverOffset: 0,
                data: [
                    {
                        value: 100,
                        itemStyle: {
                            // 颜色渐变#00c9e0->#005fc1
                            color: new echarts.graphic.LinearGradient(
                                // (x1,y2) 点到点 (x2,y2) 之间进行渐变
                                0,
                                0,
                                0,
                                1,
                                [
                                    { offset: 0, color: "#00c9e0" }, // 0 起始颜色
                                    { offset: 1, color: "#005fc1" } // 1 结束颜色
                                ]
                            )
                        }
                    },
                    { value: 100, itemStyle: { color: '#12274d' } }, // 颜色#12274d
                    { value: 200, itemStyle: { color: 'transparent' } } // 透明隐藏第三块区域
                ]
            }
        ]
    };
    myCharts.setOption(option)
    // 当浏览器缩放时图标也跟着缩放
    window.addEventListener('resize', function () {
        myCharts.resize();
    })
})();

//全国热榜全省热销
(function () {
    const hotData = [
        {
            city: '北京',  // 城市
            sales: '25, 179',  // 销售额
            flag: true, //  上升还是下降
            brands: [   //  品牌种类数据
                { name: '可爱多', num: '9,086', flag: true },
                { name: '娃哈哈', num: '8,341', flag: true },
                { name: '喜之郎', num: '7,407', flag: false },
                { name: '八喜', num: '6,080', flag: false },
                { name: '小洋人', num: '6,724', flag: false },
                { name: '好多鱼', num: '2,170', flag: true },
            ]
        },
        {
            city: '河北',
            sales: '23,252',
            flag: false,
            brands: [
                { name: '可爱多', num: '3,457', flag: false },
                { name: '娃哈哈', num: '2,124', flag: true },
                { name: '喜之郎', num: '8,907', flag: false },
                { name: '八喜', num: '6,080', flag: true },
                { name: '小洋人', num: '1,724', flag: false },
                { name: '好多鱼', num: '1,170', flag: false },
            ]
        },
        {
            city: '上海',
            sales: '20,760',
            flag: true,
            brands: [
                { name: '可爱多', num: '2,345', flag: true },
                { name: '娃哈哈', num: '7,109', flag: true },
                { name: '喜之郎', num: '3,701', flag: false },
                { name: '八喜', num: '6,080', flag: false },
                { name: '小洋人', num: '2,724', flag: false },
                { name: '好多鱼', num: '2,998', flag: true },
            ]
        },
        {
            city: '江苏',
            sales: '23,252',
            flag: false,
            brands: [
                { name: '可爱多', num: '2,156', flag: false },
                { name: '娃哈哈', num: '2,456', flag: true },
                { name: '喜之郎', num: '9,737', flag: true },
                { name: '八喜', num: '2,080', flag: true },
                { name: '小洋人', num: '8,724', flag: true },
                { name: '好多鱼', num: '1,770', flag: false },
            ]
        },
        {
            city: '山东',
            sales: '20,760',
            flag: true,
            brands: [
                { name: '可爱多', num: '9,567', flag: true },
                { name: '娃哈哈', num: '2,345', flag: false },
                { name: '喜之郎', num: '9,037', flag: false },
                { name: '八喜', num: '1,080', flag: true },
                { name: '小洋人', num: '4,724', flag: false },
                { name: '好多鱼', num: '9,999', flag: true },
            ]
        }
    ]

    //点击切换
    const lis = document.querySelectorAll('.sup li')
    // 遍历数组注册点击事件
    lis.forEach((item, index) => {
        item.addEventListener('click', function () {
            // 排他思想
            document.querySelector('.sup li.active').classList.remove('active')
            item.classList.add('active')
            //渲染数据
            render(hotData[index].brands)
        })
    })

    // 渲染函数
    const render = function (arr) {
        document.querySelector('.sub').innerHTML = arr.map(item => `
        <li><span>${item.name}</span><span>${item.num}<s class="icon-up"></s></span></li>`).join('')
    }
    //进入页面默认点击第一个
    document.querySelector('.sup li:nth-child(1)').click()

    //自动切换
    let i = 0
    let timerId = setInterval(function () {
        i++
        if (i >= hotData.length) i = 0;
        lis[i].click()
    }, 1000);

    // 鼠标经过top，关闭定时器，离开开启定时器
    document.querySelector('.top').addEventListener('mouseenter', function () {
        clearInterval(timerId)
    })
    document.querySelector('.top').addEventListener('mouseleave', function () {
        timerId = setInterval(function () {
            i++
            if (i >= hotData.length) i = 0;
            lis[i].click()
        }, 1000);
    })
})();

