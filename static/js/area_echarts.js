// 动态生成地图
function echarts_map() 
{
    var myChart = echarts.init(document.getElementById('map_1'));
    var suzhou = "static/js/area_szmap.json";
    $.get
    (
        suzhou, function(tjJson) 
        {
            echarts.registerMap('suzhou', tjJson);
            myChart.setOption
            (
                {
                    series: 
                    [
                        {
                            type: 'map',
                            map: 'suzhou'
                        }
                    ]
                }
            );

            var geoCoordMap = 
            {
                '虎丘区': [120.41453,31.342948],
                '吴中区': [120.369662,31.164625],
                '相城区': [120.631082,31.44481],
                '姑苏区': [120.597994,31.318955],
                '吴江区': [120.63197,31.008452],
                '常熟市': [120.822992,31.658797],
                '张家港市':[120.62796,31.903366],
                '昆山市': [120.959322,31.32247],
                '太仓市': [121.151577,31.569315],
            };
            var goData = 
            [
                {name: '虎丘区',value: 1681},
                {name: '吴中区',value: 1432},
                {name: '相城区',value: 1768},
                {name: '吴江区',value: 2152},
                {name: '常熟市',value: 9867},
                {name: '张家港市',value: 1705},
                {name: '昆山市',value: 3235},
                {name: '太仓市',value: 4010},
            ];
        
            var goTotal=0;//计算总人数
            goData.forEach(function(item){goTotal+=item.value;})

            var planePath = 'arrow';

            var convertData = function(name, data) 
            {
                var res = [];
                for (var i = 0; i < data.length; i++) 
                {
                    var fromCoord = geoCoordMap[name];
                    var toCoord = geoCoordMap[data[i].name];
                    if (fromCoord && toCoord)
                    {
                        res.push({coords: [fromCoord, toCoord]});//对换即可调整方向
                    }
                }
                return res;
            };
            var series = [];
            [
                ['姑苏区', goData],
            ].forEach
            (
                function(item, i)
                {
                    series.push
                    (
                        {
                            name: item[0],
                            type: 'lines',
                            zlevel: 2,
                            //线特效配置
                            effect: 
                            {
                                show: true,
                                period: 6,
                                trailLength: 0.1,
                                symbol: planePath, //标记类型
                                symbolSize: 10
                            },
                            lineStyle: 
                            {
                                normal: 
                                {
                                    width: 1,
                                    opacity: 0.4,
                                    curveness: 0.2, //弧线角度
                                    color: 'rgba(255,255,255,.1)'
                                }
                            },
                            data: convertData(item[0], item[1])
                        }, 
                        {   //终点
                            name: item[0],
                            type: 'scatter',
                            coordinateSystem: 'geo',
                            zlevel: 2,
                            label: 
                            {
                                normal: 
                                {
                                    show: true,
                                    color: 'rgba(255,255,255,.5)',
                                    position: 'right',
                                    formatter: '{b}'
                                }
                            },
                            symbol: 'circle',
                            //圆点大小
                            symbolSize: function(val) 
                            {
                                return 12.5;
                            },
                            itemStyle: 
                            {
                                normal: 
                                {
                                    show: true
                                }
                            },
                            data: item[1].map
                            (
                                function(dataItem)
                                {
                                    console.log(dataItem)
                                    return {name: dataItem.name, value: geoCoordMap[dataItem.name].concat([dataItem.value])};
                                }
                            )
                        }, 
                        {   //起点
                            name: 'item[0]',
                            type: 'scatter',
                            coordinateSystem: 'geo',
                            zlevel: 2,
                            label: 
                            {
                                normal: 
                                {
                                    show: true,
                                    position: 'right',
                                    formatter: '{b}'
                                }
                            },
                            symbolSize: function(val) 
                            {
                                return 15;
                            },
                            symbol: 'circle',

                            itemStyle: 
                            {
                                normal: 
                                {
                                    show: true
                                }
                            },
                            data: 
                            [
                                {
                                    name: item[0],
                                    value: geoCoordMap[item[0]].concat([2131])
                                }
                            ]
                        }
                    )
                }
            );
            

            option = 
            {
            //  backgroundColor: '#FDF7F2',
                title: 
                {
                    text: '苏州地区本年度营销数据分布图',
                    subtext: '单位:万元',
                    left: 'center',
                    top:'1%',
                    padding: [0, 0, 130, 0],
                    //bottom: '10px',
                    textStyle: 
                    {
                        color: '#fff',
                        fontSize:28,
                    }
                },
        
                tooltip: 
                {
                    trigger: 'item',
                    formatter: function(params) 
                    {
                        // params.value 即为 {c} 对应的数组
                        const firstElement = params.value[2]; // 获取数组第一个元素
                        return firstElement; // 显示第一个元素
                    }
                },
                //线颜色及飞行轨道颜色
                visualMap: 
                {
                    show: false,
                    min: 0,
                    max: 100,
                    color: ['#fff']
                },
                //地图相关设置
                geo: 
                {
                    map: 'suzhou',
                    top: '15%',
                    //视角缩放比例
                    zoom: 1,
                    //显示文本样式
                    label: 
                    {
                        normal: 
                        {
                            show: true,
                            textStyle: 
                            {
                                //color: 'rgba(255,255,255,.3)'
                                color: 'rgba(255,255,255,0)'
                            }
                        },
                        emphasis: 
                        {
                            textStyle: 
                            {
                                // color: '#fff'
                                color: 'rgba(255,255,255,0)' 
                            }
                        }
                    },
                //鼠标缩放和平移
                    roam: false,
                    itemStyle: 
                    {
                        normal: 
                        {
                            areaColor: '#4256ff',
                            borderColor: '#404a59'
                        },
                        emphasis: 
                        {
                            areaColor: '#4256ff',
                            //areaColor: '#2539f5'
                        }
                    }
                },
                series: series
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
    )       
}
		
$(window).load(function(){echarts_map()}) 
      
 
