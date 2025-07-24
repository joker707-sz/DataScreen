$(window).load(function(){$(".loading").fadeOut()})

const data_list =
[
    //echarts_21
    [                                                                       
        ['1', '2', '3', '4', '5','6', '7', '8', '9', '10','11', '12'],
        //echarts_211
        [503, 660, 300,520,720, 513, 430, 860, 530,730, 930, 830],
        //echarts_212
        [503, 660, 300,520,720, 513, 430, 860, 530,730, 930, 830],
        //echarts_213
        [503, 660, 300,520,720, 513, 430, 860, 530,730, 930, 830],
    ],
    //echarts_22
    [                                                                       
        ['第一季度', '第二季度', '第三季度', '第四季度'],
        [56, 73, 63, 51],
    ],
    //echarts_23
    [
        ['1', '2', '3', '4', '5','6', '7', '8', '9', '10','11', '12'],
        [35, 47, 43, 39, 41, 51, 31, 35, 29, 41, 45, 49],
    ],
    //echarts_1
    [
        ['苏州张家港营服','苏州吴江支公司','苏州昆山支公司','苏州太仓营服','苏州分公司','苏州常熟营服',],
        [1705, 2112, 3235, 4310, 4981, 9867],
    ],
    //echarts_2
    [
        ['个险', '银保', '团险', '总保费增幅' ,'单位:万元'],
        [7363.6,7587.80, 7709.84, 7914.60],
        [8242.8,8377.1, 8513.2, 8652.3],
        [4121.2,3215.1, 3376.85, 3450.9],
        [3, 1, 5, 2.3],
    ],
    //echarts_3
    [
        ['总体','第一季度','第二季度','第三季度','第四季度'],
        ['527人',135, 93, 112, 87],
        ['{c|{c}人}', '{b|{b}}'],
    ],
]


$(
    function () 
    {
        echarts_21();
        echarts_22();
        echarts_23();
        echarts_1();
        echarts_2();
        echarts_3();


        function echarts_21() 
        {
            // 基于准备好的dom，初始化echarts实例
            var myChart = echarts.init(document.getElementById('echart21'));
            option1 = 
            {
                tooltip:
                {
                    trigger: 'axis',
                    axisPointer: { type: 'shadow'}
                },
                grid: 
                {
                    left: '0%',
                    top:'10px',
                    right: '0%',
                    bottom: '0px',
                    containLabel: true
                },
                xAxis: 
                [
                    {
                        type: 'category',
                        data: data_list[0][0],
                        axisLine: 
                        {
                            show: true,
                            lineStyle: 
                            {
                                color: "rgba(255,255,255,.1)",
                                width: 1,
                                type: "solid"
                            },
                        },
                        axisTick: 
                        {
                            show: false,
                        },
                        axisLabel:  
                        {
                            interval: 0,
                        // rotate:50,
                            show: true,
                            splitNumber: 15,
                            textStyle: 
                            {
                                color: "rgba(255,255,255,.6)",
                                fontSize: '12',
                            },
                        },
                    }
                ],
                yAxis: 
                [
                    {
                        type: 'value',
                        axisLabel: 
                        {
                        //formatter: '{value} %'
                            show:true,
                            textStyle: 
                            {
                                color: "rgba(255,255,255,.6)",
                                fontSize: '12',
                            },
                        },
                        axisTick: 
                        {
                            show: false,
                        },
                        axisLine: 
                        {
                            show: true,
                            lineStyle: 
                            {
                                color: "rgba(255,255,255,.1	)",
                                width: 1,
                                type: "solid"
                            },
                        },
                        splitLine: 
                        {
                            lineStyle: 
                            {
                                color: "rgba(255,255,255,.1)",
                            }
                        }
                    }
                ],
                series: 
                [
                    {
                        type: 'line',
                        data: data_list[0][1],
                        itemStyle: 
                        {
                            normal: 
                            {
                                color:'#37a3ff',
                                opacity: 1,
                                BorderRadius: 3,
                            }
                        }
                    }
                ]
            };
        
            // 使用刚指定的配置项和数据显示图表。
            myChart.setOption(option1);
            window.addEventListener
            (
                "resize",function()
                {
                    myChart.resize();
                }
            );
        }

        function echarts_22() 
        {
            // 基于准备好的dom，初始化echarts实例
            var myChart = echarts.init(document.getElementById('echart22'));
            option1 = 
            {
                //backgroundColor: '#00265f',
                tooltip:
                {
                    trigger: 'axis',
                    axisPointer: { type: 'shadow'}
                },
                grid:
                {
                    left: '0%',
                    top:'10px',
                    right: '0%',
                    bottom: '0px',
                    containLabel: true
                },
                xAxis: 
                [
                    {
                        type: 'category',
                        data: data_list[1][0],
                        axisLine:
                        {
                            show: true,
                            lineStyle:
                            {
                                color: "rgba(255,255,255,.1)",
                                width: 1,
                                type: "solid"
                            },
                        },
                        axisTick:
                        {
                            show: false,
                        },
                        axisLabel:
                        {
                            interval: 0,
                            // rotate:50,
                            show: true,
                            splitNumber: 15,
                            textStyle: 
                            {
                                color: "rgba(255,255,255,.6)",
                                fontSize: '12',
                            },
                        },
                    }
                ],
                yAxis: 
                [
                    {
                        type: 'value',
                        axisLabel: 
                        {
                            //formatter: '{value} %'
                            show:true,
                            textStyle: 
                            {
                                color: "rgba(255,255,255,.6)",
                                fontSize: '12',
                            },
                        },
                        axisTick: 
                        {
                            show: false,
                        },
                        axisLine: 
                        {
                            show: true,
                            lineStyle:
                            {
                                color: "rgba(255,255,255,.1	)",
                                width: 1,
                                type: "solid"
                            },
                        },
                        splitLine: 
                        {
                            lineStyle: 
                            {
                                color: "rgba(255,255,255,.1)",
                            }
                        }
                    }
                ],
                series: 
                [
                    {
                        type: 'line',
                        data: data_list[1][1],
                        itemStyle:
                        {
                            normal:
                            {
                                color:'#37a3ff',
                                opacity: 1,
                                barBorderRadius: 3,
                            }
                        }
                    }
                ]
            };
            // 使用刚指定的配置项和数据显示图表。
            myChart.setOption(option1);
            window.addEventListener
            (
                "resize",function()
                {
                    myChart.resize();
                }
            );
        }

        function echarts_23() 
        {
            // 基于准备好的dom，初始化echarts实例
            var myChart = echarts.init(document.getElementById('echart23'));
            option1 = 
            {
                //backgroundColor: '#00265f',
                tooltip: 
                {
                    trigger: 'axis',
                    axisPointer: { type: 'shadow'}
                },
                grid: 
                {
                    left: '0%',
                    top:'10px',
                    right: '0%',
                    bottom: '0px',
                    containLabel: true
                },
                xAxis: 
                [
                    {
                        type: 'category',
                        data: data_list[2][0],
                        axisLine: 
                        {
                            show: true,
                            lineStyle:
                            {
                                color: "rgba(255,255,255,.1)",
                                width: 1,
                                type: "solid"
                            },
                        },
            
                        axisTick: 
                        {
                            show: false,
                        },
                        axisLabel:  
                        {
                            interval: 0,
                        // rotate:50,
                            show: true,
                            splitNumber: 15,
                            textStyle: 
                            {
                                color: "rgba(255,255,255,.6)",
                                fontSize: '12',
                            },
                        },
                    }
                ],
                yAxis: 
                [
                    {
                        type: 'value',
                        axisLabel: 
                        {
                            //formatter: '{value} %'
                            show:true,
                            textStyle: 
                            {
                                color: "rgba(255,255,255,.6)",
                                fontSize: '12',
                            },
                        },
                        axisTick: 
                        {
                            show: false,
                        },
                        axisLine: 
                        {
                            show: true,
                            lineStyle: 
                            {
                                color: "rgba(255,255,255,.1	)",
                                width: 1,
                                type: "solid"
                            },
                        },
                        splitLine: 
                        {
                            lineStyle: 
                            {
                                color: "rgba(255,255,255,.1)",
                            }
                        }
                    }
                ],
                series: 
                [
                    {
                        type: 'line',
                        data: data_list[2][1],
                        itemStyle: 
                        {
                            normal: 
                            {
                                color:'#37a3ff',
                                opacity: 1,
                                barBorderRadius: 3,
                            }
                        }
                    }
                ]
            };
            // 使用刚指定的配置项和数据显示图表。
            myChart.setOption(option1);
            window.addEventListener
            (
                "resize",function()
                {
                    myChart.resize();
                }
            );
        }

        function echarts_1() 
        {
            // 基于准备好的dom，初始化echarts实例
            var myChart = echarts.init(document.getElementById('echart1'));
            option = 
            {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: 
                [
                    {
                        offset: 0,
                        color: 'rgba(41, 121, 255, 1)'
                    }, 
                    {
                        offset: 1,
                        color: 'rgba(0, 192, 255, 1)'
                    }  
                ],
                globalCoord: false
            }

            var option = 
            {
                tooltip: 
                {
                    show: false
                },
                grid: 
                {
                    top: '0%',
                    left: '110',
                    right: '50',
                    bottom: '0%',
                },
                xAxis: 
                {
                    min: 0,
                    //max: 12000,
                    splitLine: 
                    {
                        show: false
                    },
                    axisTick: 
                    {
                        show: false
                    },
                    axisLine: 
                    {
                        show: false
                    },
                    axisLabel: 
                    {
                        show: false
                    }
                },
                yAxis: 
                {
                    data: data_list[3][0],
                    //offset: 15,
                    axisTick: 
                    {
                        show: false
                    },

                    axisLine: 
                    {
                        show: false
                    },

                    axisLabel: 
                    {
                        color: 'rgba(255,255,255,.6)',
                        fontSize: 14,
                    }
                },
                series: 
                [
                    {
                        type: 'bar',
                        label: 
                        {
                            show: true,
                            zlevel: 10000,
                            position: 'right',
                            padding: 6,
                            color: '#4e84a1',
                            fontSize: 14,
                            formatter: '{c}',
                            fontWeight: 'bold'
                        },
                        itemStyle: 
                        {
                            barBorderRadius: 25,
                            color:'#3facff'
                        },
                        barWidth: '15',
                    
                        data: data_list[3][1],
                        z: 6
                    }
                ],
            };
    
            // 使用刚指定的配置项和数据显示图表。
            myChart.setOption(option);
            window.addEventListener
            (
                "resize",function()
                {
                    myChart.resize();
                }
            );
        }

        function echarts_2() 
        {
            // 基于准备好的dom，初始化echarts实例
            var myChart = echarts.init(document.getElementById('echart2'));
            option = 
            {
                tooltip: 
                {
                    trigger: 'axis',
                    axisPointer: {type: 'shadow'},
                },
                "grid": 
                {
                    "top": "20%",
                    "right":"50",
                    "bottom":"20",
                    "left":"50",
                },
                legend: 
                {
                    data: data_list[4][0],
                    right: 'center', width:'100%',
                    textStyle: 
                    {
                        color: "rgba(255,255,255,.5)"
                    },
                    itemWidth: 12,
                    itemHeight: 10,
                },

                "xAxis": 
                [
                    {
                        "type": "category",
                        data: ['2022', '2023', '2024', '2025'],
                        axisLine:{ show: false,},
                        axisLabel:  
                        { 
                            textStyle: 
                            {
                                fontSize:14,
                                color: "rgba(255,255,255,.5)",
                            },
                        },
                    },
                ],
                "yAxis": 
                [
                    {
                        "type": "value",
                        "name": data_list[4][0][4],
                        "nameTextStyle": 
                        {
                            "color": "rgba(255,255,255,.5)", // 例如 "#ffffff" 或 "rgba(255,255,255,0.8)"
                            "fontSize": 14, // 可选，调整名称字号
                        },
                        axisTick: {show: false},
                        splitLine: { show: false,},
                        axisLine: { show: false,},
                        "axisLabel":
                        {
                            "show": true,
                            fontSize:14,
                            color: "rgba(255,255,255,.5)"
                        },
                        axisLine: 
                        {
                            min:0,
                            max:10,
                            show:false
                        },//左线色
                    },
                    {
                        "type": "value",
                        //"name": "增速",
                        "show": true,
                        "axisLabel": 
                        {
                            formatter: "{value} %",
                            fontSize:14,
                            color: "rgba(255,255,255,.5)"},
                            axisTick: {show: false},
                            splitNumber:3,
                            axisLine: {show:false},//右线色
                            splitLine: {lineStyle: {color:'rgba(255,255,255,.05)'}
                        },//x轴线
                    },
                ],
                "series": 
                [
                    {
                        "name": data_list[4][0][0],
                        "type": "bar",
                        "data": data_list[4][1],
                        "barWidth": "10%",
                        "itemStyle": 
                        {
                            "normal": 
                            {
                                barBorderRadius:15,
                                color: new echarts.graphic.LinearGradient
                                (
                                    0, 0, 0, 1, 
                                    [
                                        {
                                            offset: 0,
                                            color: '#8bd46e'
                                        }, 
                                        {
                                            offset: 1,
                                            color: '#09bcb7'
                                        }
                                    ]
                                ),
                            }
                        },
                        "barGap": "0.2"
                    },
                    {
                        "name": data_list[4][0][1],
                        "type": "bar",
                        "data":data_list[4][2],
                        "barWidth": "10%",
                        "itemStyle": 
                        {
                            "normal":
                            {
                                barBorderRadius: 15,
                                color: new echarts.graphic.LinearGradient
                                (
                                    0, 0, 0, 1, 
                                    [
                                        {
                                            offset: 0,
                                            color: '#248ff7'
                                        }, 
                                        {
                                            offset: 1,
                                            color: '#6851f1'
                                        }
                                    ]
                                ),
                            }
                        },
                        "barGap": "0.2"
                    },
                    {
                        "name": data_list[4][0][2],
                        "type": "bar",
                        "data":data_list[4][3],
                        "barWidth": "10%",
                        "itemStyle": 
                        {
                            "normal": 
                            {
                                barBorderRadius: 15,
                                color: new echarts.graphic.LinearGradient
                                (
                                    0, 0, 0, 1, 
                                    [
                                        {
                                            offset: 0,
                                            color: '#fccb05'
                                        }, 
                                        {
                                            offset: 1,
                                            color: '#f5804d'
                                        }
                                    ]
                                ),
                            }
                        },
                        "barGap": "0.2"
                    },
                    {
                        "name": data_list[4][0][3],
                        "type": "line",
                        "yAxisIndex": 1,
                    
                        "data": data_list[4][4],
                        lineStyle: 
                        {
                            normal: 
                            {
                                width: 2
                            },
                        },
                        "itemStyle": 
                        {
                            "normal": 
                            {
                                "color": "#3496f8",
                            }
                        },
                        //"smooth": true,
                        symbolSize:0,
                    }
                ]
            };
                    
            // 使用刚指定的配置项和数据显示图表。
            myChart.setOption(option);
            window.addEventListener
            (
                "resize",function()
                {
                myChart.resize();
                }
            );
        }

        function echarts_3() 
        {
            // 基于准备好的dom，初始化echarts实例
            var myChart = echarts.init(document.getElementById('echart3'));
            option = 
            {
                title:
                {
                    text:data_list[5][1][0],
                    subtext: data_list[5][0][0],
                    x:'center',
                    y:'40%',
                    textStyle:
                    {
                        color:'#fff',
                        fontSize:22,
                        lineHeight:10,
                    },
                    subtextStyle: 
                    {
                        color:'#fff',
                        fontSize:16,
                        lineHeight:10,
                        fontWeight: 'bold',
                    },
                },

                tooltip: 
                {
                    trigger: 'item',
                    formatter: "{b} : {c} ({d}%)"
                },

                visualMap: 
                {
                    show: false,
                    min: 500,
                    max: 600,
                    inRange: 
                    {
                        //colorLightness: [0, 1]
                    }
                },

                series: 
                [
                    {
                        name: '访问来源',
                        type: 'pie',
                        radius: ['50%', '70%'],
                        center: ['50%', '50%'],
                        color: ['#1DB7E5','rgb(131,249,103)', '#FBFE27', '#FE5050'], //'#FBFE27','rgb(11,228,96)','#FE5050'
                        data: 
                        [
                            {
                                value: data_list[5][1][1],
                                name: data_list[5][0][1]
                            }, 
                            {
                                value: data_list[5][1][2],
                                name: data_list[5][0][2]
                            },
                            {
                                value: data_list[5][1][3],
                                name: data_list[5][0][3]
                            },
                            {
                                value: data_list[5][1][4],
                                name: data_list[5][0][4]
                            },
                        ].sort
                        (
                            function(a, b) 
                            {
                                return a.value - b.value
                            }
                        ),
                        roseType: 'radius',
                        label: 
                        {
                            normal: 
                            {
                                formatter: data_list[5][2].join('\n'),
                                rich: 
                                {
                                    c: 
                                    {
                                        color: 'rgb(241,246,104)',
                                        fontSize: 20,
                                        fontWeight:'bold',
                                        lineHeight: 5
                                    },
                                    b: 
                                    {
                                        color: '#fff',
                                        fontSize: 14,
                                        height: 44
                                    },
                                },
                            }
                        },
                        labelLine: 
                        {
                            normal: 
                            {
                                lineStyle: 
                                {
                                    color: 'rgb(98,137,169)',
                                },
                                smooth: 0.2,
                                length: 10,
                                length2: 20,
                            }
                        }
                    }
                ]
            };
            // 使用刚指定的配置项和数据显示图表。
            myChart.setOption(option);
            window.addEventListener
            (
                "resize",function()
                {
                myChart.resize();
                }
            );
        } 
    }
)



		
		
		


		









