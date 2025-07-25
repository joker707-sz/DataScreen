$(window).load(function(){$(".loading").fadeOut()})

const data_list =
[
    [                                                                       
        ['1', '2', '3', '4', '5','6', '7', '8', '9', '10','11', '12'],
        ['单位：人次','单位：人次','单位：人次'],
        //echarts_211
        [503, 660, 300, 520, 720, 513, 430, 860, 530, 730, 930, 830],
        //echarts_212
        [305, 260, 130, 250, 270, 153, 340, 680, 350, 370, 390, 380],
        //echarts_213
        [80, 120, 60, 70, 90, 63, 70, 140, 80, 100, 120, 110],
    ],
    [                                                                       
        ['第一季度', '第二季度', '第三季度', '第四季度'],
        //echarts_221
        [56, 73, 63, 51],
        //echarts_222
        [33, 27, 18, 35],
        //echarts_223
        [19, 26, 37, 43],
    ],
    [
        ['1', '2', '3', '4', '5','6', '7', '8', '9', '10','11', '12'],
        //echarts_231
        [35, 47, 43, 39, 41, 51, 31, 35, 29, 41, 45, 49],
        //echarts_232
        [53, 74, 34, 93, 14, 15, 13, 53, 92, 14, 54, 94],
        //echarts_233
        [38, 41, 37, 42, 35, 36, 34, 38, 41, 35, 39, 43],
    ],
    //echarts_1
    [
        ['苏州张家港营服','苏州吴江支公司','苏州昆山支公司','苏州太仓营服','苏州分公司','苏州常熟营服',],
        [205, 252, 435, 510, 681, 1267],
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
        ['去年同期', '2025年'],
        ['单位：亿元'],
        ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
        [198.3, 72.4, 86.1, 50.1, 52.3, 77.2, 66.8, 70.42, 64.9, 40.5, 47.8, 55.2 ],
        [190.1, 78.8, 88.8, 54.2, 65.1, '', '', '', '', '', '', ''],
    ],
    //echarts_4
    [
        ['总体','第一季度','第二季度','第三季度','第四季度'],
        ['527人',135, 93, 112, 87],
        ['{c|{c}人}', '{b|{b}}'],
    ],
]


$(
    function () 
    {
        echarts_211();
        echarts_212();
        echarts_213();
        echarts_221();
        echarts_222();
        echarts_223();
        echarts_231();
        echarts_232();
        echarts_233();
        echarts_1();
        echarts_2();
        echarts_3();
        echarts_4();


        function echarts_211() 
        {
            const chartDom = document.getElementById('echart211');
            let myChart = chartDom.myChart; // 缓存到DOM元素的属性中
            if (!myChart)
            {
                // 首次初始化时创建实例
                myChart = echarts.init(chartDom);
                chartDom.myChart = myChart; // 缓存实例
            }
            else
            {
                // 非首次调用时，清除旧数据（触发动画）
                myChart.clear();
            }
            option_211 = 
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
                            formatter: '{value}人',
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
                        data: data_list[0][2],
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
            myChart.setOption(option_211);
            /*window.addEventListener
            (
                "resize",function()
                {
                myChart.resize();
                }
            );*/
        }

        function echarts_212() 
        {
            const chartDom = document.getElementById('echart212');
            let myChart = chartDom.myChart; // 缓存到DOM元素的属性中
            if (!myChart)
            {
                // 首次初始化时创建实例
                myChart = echarts.init(chartDom);
                chartDom.myChart = myChart; // 缓存实例
            }
            else
            {
                // 非首次调用时，清除旧数据（触发动画）
                myChart.clear();
            }
            option_212 = 
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
                            formatter: '{value}人',
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
                        data: data_list[0][2],
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
            myChart.setOption(option_212);
            /*window.addEventListener
            (
                "resize",function()
                {
                myChart.resize();
                }
            );*/
        }

        function echarts_213() 
        {
            const chartDom = document.getElementById('echart213');
            let myChart = chartDom.myChart; // 缓存到DOM元素的属性中
            if (!myChart)
            {
                // 首次初始化时创建实例
                myChart = echarts.init(chartDom);
                chartDom.myChart = myChart; // 缓存实例
            }
            else
            {
                // 非首次调用时，清除旧数据（触发动画）
                myChart.clear();
            }
            option_213 = 
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
                            formatter: '{value}人',
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
                        data: data_list[0][3],
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
            myChart.setOption(option_213);
            /*window.addEventListener
            (
                "resize",function()
                {
                myChart.resize();
                }
            );*/
        }

        function echarts_221() 
        {
            // 基于准备好的dom，初始化echarts实例
            const chartDom = document.getElementById('echart221');
            let myChart = chartDom.myChart; // 缓存到DOM元素的属性中
            if (!myChart)
            {
                // 首次初始化时创建实例
                myChart = echarts.init(chartDom);
                chartDom.myChart = myChart; // 缓存实例
            }
            else
            {
                // 非首次调用时，清除旧数据（触发动画）
                myChart.clear();
            }
            option_221 = 
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
                            formatter: '{value} %',
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
            myChart.setOption(option_221);
            /*window.addEventListener
            (
                "resize",function()
                {
                myChart.resize();
                }
            );*/
        }

        function echarts_222() 
        {
            // 基于准备好的dom，初始化echarts实例
            const chartDom = document.getElementById('echart222');
            let myChart = chartDom.myChart; // 缓存到DOM元素的属性中
            if (!myChart)
            {
                // 首次初始化时创建实例
                myChart = echarts.init(chartDom);
                chartDom.myChart = myChart; // 缓存实例
            }
            else
            {
                // 非首次调用时，清除旧数据（触发动画）
                myChart.clear();
            }
            option_222 = 
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
                            formatter: '{value} %',
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
                        data: data_list[1][2],
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
            myChart.setOption(option_222);
            /*window.addEventListener
            (
                "resize",function()
                {
                myChart.resize();
                }
            );*/
        }

        function echarts_223() 
        {
            // 基于准备好的dom，初始化echarts实例
            const chartDom = document.getElementById('echart223');
            let myChart = chartDom.myChart; // 缓存到DOM元素的属性中
            if (!myChart)
            {
                // 首次初始化时创建实例
                myChart = echarts.init(chartDom);
                chartDom.myChart = myChart; // 缓存实例
            }
            else
            {
                // 非首次调用时，清除旧数据（触发动画）
                myChart.clear();
            }
            option_223 = 
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
                            formatter: '{value} %',
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
                        data: data_list[1][3],
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
            myChart.setOption(option_223);
            /*window.addEventListener
            (
                "resize",function()
                {
                myChart.resize();
                }
            );*/
        }

        function echarts_231() 
        {
            // 基于准备好的dom，初始化echarts实例
            const chartDom = document.getElementById('echart231');
            let myChart = chartDom.myChart; // 缓存到DOM元素的属性中
            if (!myChart)
            {
                // 首次初始化时创建实例
                myChart = echarts.init(chartDom);
                chartDom.myChart = myChart; // 缓存实例
            }
            else
            {
                // 非首次调用时，清除旧数据（触发动画）
                myChart.clear();
            }
            option_231 = 
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
                            formatter: '{value} %',
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
            myChart.setOption(option_231);
            /*window.addEventListener
            (
                "resize",function()
                {
                myChart.resize();
                }
            );*/
        }

        function echarts_232() 
        {
            // 基于准备好的dom，初始化echarts实例
            const chartDom = document.getElementById('echart232');
            let myChart = chartDom.myChart; // 缓存到DOM元素的属性中
            if (!myChart)
            {
                // 首次初始化时创建实例
                myChart = echarts.init(chartDom);
                chartDom.myChart = myChart; // 缓存实例
            }
            else
            {
                // 非首次调用时，清除旧数据（触发动画）
                myChart.clear();
            }
            option_232 = 
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
                            formatter: '{value} %',
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
                        data: data_list[2][2],
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
            myChart.setOption(option_232);
            /*window.addEventListener
            (
                "resize",function()
                {
                myChart.resize();
                }
            );*/
        }

        function echarts_233() 
        {
            // 基于准备好的dom，初始化echarts实例
            const chartDom = document.getElementById('echart233');
            let myChart = chartDom.myChart; // 缓存到DOM元素的属性中
            if (!myChart)
            {
                // 首次初始化时创建实例
                myChart = echarts.init(chartDom);
                chartDom.myChart = myChart; // 缓存实例
            }
            else
            {
                // 非首次调用时，清除旧数据（触发动画）
                myChart.clear();
            }
            option_233 = 
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
                            formatter: '{value} %',
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
                        data: data_list[2][3],
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
            myChart.setOption(option_233);
            /*window.addEventListener
            (
                "resize",function()
                {
                myChart.resize();
                }
            );*/
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
            /*window.addEventListener
            (
                "resize",function()
                {
                myChart.resize();
                }
            );*/
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
                        color: "rgba(255,255,255,.6)"
                    },
                    itemWidth: 12,
                    itemHeight: 10,
                },

                xAxis: 
                [
                    {
                        type: "category",
                        data: ['2022', '2023', '2024', '2025'],
                        axisLine:{ show: false,},
                        axisLabel:  
                        { 
                            textStyle: 
                            {
                                fontSize:14,
                                color: "rgba(255,255,255,.6)",
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
                            "color": "rgba(255,255,255,.6)", // 例如 "#ffffff" 或 "rgba(255,255,255,0.8)"
                            "fontSize": 14, // 可选，调整名称字号
                        },
                        axisTick: {show: false},
                        splitLine: { show: false,},
                        axisLine: { show: false,},
                        axisLabel:
                        {
                            "show": true,
                            fontSize:14,
                            color: "rgba(255,255,255,.6)"
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
                            color: "rgba(255,255,255,.6)"},
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
            /*window.addEventListener
            (
                "resize",function()
                {
                myChart.resize();
                }
            );*/
        }

        function echarts_3() 
        {
            // 基于准备好的dom，初始化echarts实例
            var myChart = echarts.init(document.getElementById('echart3'));
            option = 
            {
                tooltip: 
                {
                    trigger: 'axis',
                    axisPointer: {type: 'shadow'},
                    // formatter:'{c}' ,
                },

                grid: 
                {
                    left: '10',
                    top: '30',
                    right: '20',
                    bottom: '0',
                    containLabel: true
                },

                legend:
                {
                    data: data_list[5][0],
                    right: 'center',
                    top:0,
                    textStyle:
                    {
                        color: "#fff"
                    },
                    itemWidth: 12,
                    itemHeight: 10,
                    // itemGap: 35
                },
                xAxis: 
                [
                    {
                        type: 'category',
                        data: data_list[5][2],
                        boundaryGap: true,
                        axisLabel:  
                        {
                            //rotate: -90,
                            textStyle:
                            {
                                color: "rgba(255,255,255,.6)",
                                fontSize:14,
                            },
                        },
                        axisLine: 
                        {
                            lineStyle: 
                            { 
                                color: 'rgba(255,255,255,.1)'
                            }
                        },
                    }, 
                    {
                        axisPointer: {show: false},
                        axisLine: {show: false},
                        position: 'bottom',
                        offset: 20,
                    }
                ],

                yAxis: 
                [
                    {
                        type: 'value',
                        name: data_list[5][1][0],
                        nameTextStyle: 
                        {
                            color: "rgba(255,255,255,.5)", // 例如 "#ffffff" 或 "rgba(255,255,255,0.8)"
                            fontSize: 14, // 可选，调整名称字号
                        },
                        axisTick: {show: false},
                    // splitNumber: 6,
                        axisLine: 
                        {
                            lineStyle: 
                            {
                                color: 'rgba(255,255,255,.1)'
                            }
                        },
                        axisLabel:  
                        {
                            formatter: "{value}",
                            textStyle: 
                            {
                                color: "rgba(255,255,255,.6)",
                                fontSize:14,
                            },
                        },
                        splitLine: 
                        {
                            lineStyle: 
                            {
                                color: 'rgba(255,255,255,.1)'
                            }
                        }
                    }
                ],

                series: 
                [
                    {
                        name: data_list[5][0][0],
                        type: 'line',
                        smooth: true,
                        symbol: 'circle',
                        symbolSize: 5,
                        showSymbol: false,
                        lineStyle: 
                        {
                            normal: 
                            {
                                color: 'rgba(228, 228, 126, 1)',
                                width: 2
                            }
                        },
                        areaStyle: 
                        {
                            normal: 
                            {
                                color: new echarts.graphic.LinearGradient
                                (
                                0, 0, 0, 1, 
                                [
                                    {
                                    offset: 0,
                                    color: 'rgba(228, 228, 126, .2)'
                                    }, 
                                    {
                                    offset: 1,
                                    color: 'rgba(228, 228, 126, 0)'
                                    }
                                ], 
                                false
                                ),
                                shadowColor: 'rgba(0, 0, 0, 0.1)',
                            }
                        },
                        itemStyle: 
                        {
                            normal: 
                            {
                                color: 'rgba(228, 228, 126, 1)',
                                borderColor: 'rgba(228, 228, 126, .1)',
                                borderWidth: 12
                            }
                        },
                        data: data_list[5][3]
                    }, 
                    {
                        name: data_list[5][0][1],
                        type: 'line',
                        smooth: true,
                        symbol: 'circle',
                        symbolSize: 5,
                        showSymbol: true,
                        lineStyle: 
                        {
                            normal: 
                            {
                                color: 'rgba(255, 128, 128, 1)',
                                width: 2
                            }
                        },
                        areaStyle: 
                        {
                            normal: 
                            {
                                color: new echarts.graphic.LinearGradient
                                (
                                0, 0, 0, 1, 
                                [
                                    {
                                    offset: 0,
                                    color: 'rgba(255, 128, 128,.2)'
                                    }, 
                                    {
                                    offset:1,
                                    color: 'rgba(255, 128, 128, 0)'
                                    }
                                ],
                                false
                                ),
                                shadowColor: 'rgba(0, 0, 0, 0.1)',
                            }
                        },
                        itemStyle: 
                        {
                            normal: 
                            {
                                color: 'rgba(255, 128, 128, 1)',
                                borderColor: 'rgba(255, 128, 128, .1)',
                                borderWidth: 12
                            }
                        },
                        label: 
                        {
                            show: true,
                            zlevel: 10000,
                            position: 'top',
                            padding: 6,
                            color: 'rgba(255, 255, 255, 0.6)',
                            fontSize: 14,
                            formatter: '{c}',
                            fontWeight: 'bold'
                        },
                        data: data_list[5][4]
                    }, 
                ]
            };
            // 使用刚指定的配置项和数据显示图表。
            myChart.setOption(option);
            /*window.addEventListener
            (
                "resize",function()
                {
                myChart.resize();
                }
            );*/
        }

        function echarts_4() 
        {
            // 基于准备好的dom，初始化echarts实例
            var myChart = echarts.init(document.getElementById('echart4'));
            option = 
            {
                title:
                {
                    text:data_list[6][1][0],
                    subtext: data_list[6][0][0],
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
                                value: data_list[6][1][1],
                                name: data_list[6][0][1]
                            }, 
                            {
                                value: data_list[6][1][2],
                                name: data_list[6][0][2]
                            },
                            {
                                value: data_list[6][1][3],
                                name: data_list[6][0][3]
                            },
                            {
                                value: data_list[6][1][4],
                                name: data_list[6][0][4]
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
                                formatter: data_list[6][2].join('\n'),
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
            /*window.addEventListener
            (
                "resize",function()
                {
                myChart.resize();
                }
            );*/
        }

//定时刷新函数
        $(document).ready(function()
        {
            let dataIndex_a = dataIndex_b = dataIndex_c = 0;
            // 定义标签选择器数组
            const selectors_a = ['.jsy1', '.jsy2', '.jsy3'];
            const selectors_b = ['.tr01', '.tr02', '.tr03'];
            const selectors_c = ['.st01', '.st02', '.st03'];
            const element_a = ['echart211','echart212','echart213'];
            const element_b = ['echart221','echart222','echart223'];
            const element_c = ['echart231','echart232','echart233'];

            //先初始化一次
            $(element_a.map(id => '#' + id).join(',')).removeClass('active');
            $(element_b.map(id => '#' + id).join(',')).removeClass('active');
            $(element_c.map(id => '#' + id).join(',')).removeClass('active');
            $('#' + element_a[dataIndex_a]).addClass('active');
            $('#' + element_b[dataIndex_b]).addClass('active');
            $('#' + element_c[dataIndex_c]).addClass('active');

            // 定时刷新函数，每5秒切换一次（5000毫秒）
            setInterval(function() 
            {
                // 移除所有标签的active类
                $(selectors_a.join(',')).removeClass('active');
                $(selectors_b.join(',')).removeClass('active');
                $(selectors_c.join(',')).removeClass('active');
                $(element_a.map(id => '#' + id).join(',')).removeClass('active');
                $(element_b.map(id => '#' + id).join(',')).removeClass('active');
                $(element_c.map(id => '#' + id).join(',')).removeClass('active');
                // 更新索引，循环切换（0→1→2→0...）
                dataIndex_a = (dataIndex_a + 1) % 3;
                dataIndex_b = (dataIndex_b + 1) % 3;
                dataIndex_c = (dataIndex_c + 1) % 3;
                // 给当前索引对应的标签添加active类
                $(selectors_a[dataIndex_a]).addClass('active');
                $(selectors_b[dataIndex_b]).addClass('active');
                $(selectors_c[dataIndex_c]).addClass('active');
                $('#' + element_a[dataIndex_a]).addClass('active');
                $('#' + element_b[dataIndex_b]).addClass('active');
                $('#' + element_c[dataIndex_c]).addClass('active');
                echarts_211();
                echarts_212();
                echarts_213();
                echarts_221();
                echarts_222();
                echarts_223();
                echarts_231();
                echarts_232();
                echarts_233();
            }, 10000); // 5000毫秒 = 5秒，可根据需要调整时间间隔
        })

//点击事件函数
        $('.jsy1, .jsy2, .jsy3').click(function(e) {
            e.preventDefault();
            // 移除同组所有标签的active类
            $(this).siblings().removeClass('active');
            // 给当前点击的标签添加active类
            $(this).addClass('active');
            const element = ['echart211','echart212','echart213'];
            // 根据点击的标签更新图表数据
            $(element.map(id => '#' + id).join(',')).removeClass('active');
            if ($(this).hasClass('jsy1')) {
                // 更新为第一种数据
                $('#' + element[0]).addClass('active');
                echarts_211();
            } else if ($(this).hasClass('jsy2')) {
                // 更新为第二种数据
                $('#' + element[1]).addClass('active');
                echarts_212();
            } else {
                // 更新为第三种数据
                $('#' + element[2]).addClass('active');
                echarts_213();
            }
        });

        $('.tr01, .tr02, .tr03').click(function(e) {
            e.preventDefault();
            // 移除同组所有标签的active类
            $(this).siblings().removeClass('active');
            // 给当前点击的标签添加active类
            $(this).addClass('active');
            const element = ['echart221','echart222','echart223'];
            // 根据点击的标签更新图表数据
            $(element.map(id => '#' + id).join(',')).removeClass('active');
            if ($(this).hasClass('tr01')) {
                // 更新为第一种数据
                $('#' + element[0]).addClass('active');
                echarts_221();
            } else if ($(this).hasClass('tr02')) {
                // 更新为第二种数据
                $('#' + element[1]).addClass('active');
                echarts_222();
            } else {
                // 更新为第三种数据
                $('#' + element[2]).addClass('active');
                echarts_223();
            }
        });

        $('.st01, .st02, .st03').click(function(e) {
            e.preventDefault();
            // 移除同组所有标签的active类
            $(this).siblings().removeClass('active');
            // 给当前点击的标签添加active类
            $(this).addClass('active');
            const element = ['echart231','echart232','echart233'];
            // 根据点击的标签更新图表数据
            $(element.map(id => '#' + id).join(',')).removeClass('active');
            if ($(this).hasClass('st01')) {
                // 更新为第一种数据
                $('#' + element[0]).addClass('active');
                echarts_231();
            } else if ($(this).hasClass('st02')) {
                // 更新为第二种数据
                $('#' + element[1]).addClass('active');
                echarts_232();
            } else {
                // 更新为第三种数据
                $('#' + element[2]).addClass('active');
                echarts_233();
            }
        });
//
        function handleResize() 
        {
            // 遍历所有缓存的图表实例并执行 resize
            document.querySelectorAll('[myChart]').forEach(chartDom => 
                {
                    const myChart = chartDom.myChart;
                    if (myChart && typeof myChart.resize === 'function') 
                    {
                        myChart.resize();
                    }
                }
            );
        }
// 添加防抖包装
        const debouncedResize = 
        (
            function() 
            {
                let timer = null;
                return function(delay = 100) 
                {
                    clearTimeout(timer);
                    timer = setTimeout(handleResize, delay);
                };
            }
        )();
        // 只绑定一次全局事件
        window.addEventListener('resize', debouncedResize);
    }
)



		
		
		


		









