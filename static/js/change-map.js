$(function(){
	changeMap();
})
function changeMap(){
	var myChart= echarts.init(document.getElementById('map'), "infographic");
	var provinceoption = {
    title: {
        text: '生源分布',
        subtext: '',
        x: 'left'
    },
    tooltip: {
        backgroundColor: 'rgba(255,255,255,0.7)',
        alwaysShowContent: false,
        trigger: 'item'
    },
    toolbox: {
        show: true,
        feature: {
            dataView: {readOnly: false},
            saveAsImage: {}
        }
    },
    //     layoutCenter: ['50%', '40%'],
	// layoutSize: 600,
    //左侧小导航图标
    visualMap: {
        show: true,
        x: 'left',
        y: 'center',
        textStyle: {
            fontSize: 8,
        },
        splitList: [{ start: 1,end: 5 },
            {start: 5, end: 10 },
			{ start: 10, end: 15 },
            {  start: 15, end: 20 },
            {  start: 20, end: 30 },
            { start: 50 }],
        color: ['#8A3310', '#C64918', '#E55B25', '#F2AD92', '#F9DCD1']
    },
    //配置属性
    series: [{
        name: '人数',
        type: 'map',
        mapType: 'china',
        zoom:1,
        roam: false, //拖动和缩放
        itemStyle: {
            normal: {
                borderWidth: .5, //区域边框宽度
                borderColor: '#009fe8', //区域边框颜色
                areaColor: "#ffefd5", //区域颜色
            },
            emphasis: { //鼠标滑过地图高亮的相关设置
                borderWidth: .5,
                borderColor: '#4b0082',
                areaColor: "#fff",
            }
        },
        label: {
            normal: {
                show: true, //省份名称
                fontSize: 11,
            },
            emphasis: {
                show: true,
                fontSize: 11,
            }
        },
        data:[] //mydata //数据
    }]
};
 $.ajax({
        url:"/map",
        success: function(data) {
            provinceoption.series[0].data=data.prodata
            myChart.setOption(provinceoption)
		},
		error: function(xhr, type, errorThrown) {

		}
    })
	var Province = "";
    myChart.clear();
    myChart.off('click')
	myChart.on('click', function (params){
		var myChart= echarts.init(document.getElementById('map'), "infographic");

		Province = params.name;
		var cityoption = {
		     title: {
        text: '生源分布',
        subtext: '',
        x: 'left'
    },
		    tooltip: {
		        backgroundColor: 'rgba(255,255,255,0.7)',
		        alwaysShowContent: false,
		        trigger: 'item'
		    },

            // layoutCenter: ['50%', '40%'],
			// layoutSize: 500,
            visualMap: {
        show: true,
        x: 'left',
        y: 'center',
        textStyle: {
            fontSize: 8,
        },
        splitList: [{ start: 1,end: 5 },
            {start: 5, end: 10 },
			{ start: 10, end: 15 },
            {  start: 15, end: 20 },
            {  start: 20, end: 30 },
            { start: 50 }],
        color: ['#8A3310', '#C64918', '#E55B25', '#F2AD92', '#F9DCD1']
    },
		    series: [
		        {
		            name: '人数',
		            type: 'map',
		            mapType: Province,
		            selectedMode : 'single',
                    zoom:0.8,
                    itemStyle: {
            normal: {
                borderWidth: .5, //区域边框宽度
                borderColor: '#009fe8', //区域边框颜色
                areaColor: "#ffefd5", //区域颜色
            },
            emphasis: { //鼠标滑过地图高亮的相关设置
                borderWidth: .5,
                borderColor: '#4b0082',
                areaColor: "#fff",
            }
        },
        label: {
            normal: {
                show: true, //省份名称
                fontSize: 11,
            },
            emphasis: {
                show: true,
                fontSize: 11,
            }
        },
		             data:[]
		        }
		    ]
		};
		$.ajax({
        url:"/map",
        success: function(data) {
            cityoption.series[0].data=data.citydata
            myChart.setOption(cityoption)
		},
		error: function(xhr, type, errorThrown) {

		}
    })
		myChart.on('contextmenu', function(params) {
		myChart.clear();
        changeMap();
      });

        myChart.clear();
		myChart.on('click', function (params){
		    $.getJSON("https://geo.datav.aliyun.com/areas_v2/bound/"+cityMap[params.name]+"_full.json",function(map){
			// $.getJSON("./citys/"+cityMap[params.name]+".json",function(map){
			var myChart1 = echarts.init(document.getElementById('map'));
			echarts.registerMap(params.name,map);
			var city1option = {
			     title: {
        text: '生源分布',
        subtext: '',
        x: 'left'
    },
				    tooltip: {
				        backgroundColor: 'rgba(255,255,255,0.7)',
				        alwaysShowContent: false,
				        trigger: 'item'
				    },

            //     layoutCenter: ['50%', '40%'],
			// layoutSize:500,
			        visualMap: {
			    show: true,
			    x: 'left',
			    y: 'center',
			    textStyle: {
			        fontSize: 8,
			    },
			    splitList: [{ start: 1,end: 5 },
            {start: 5, end: 10 },
			{ start: 10, end: 15 },
            {  start: 15, end: 20 },
                    {  start: 20, end: 30 },
            { start: 50 }],
			    color: ['#8A3310', '#C64918', '#E55B25', '#F2AD92', '#F9DCD1']
			},
				    series: [
				        {
				            name: '人数',
				            type: "map",
				            // mapType: "map",
				            selectedMode : 'single',
                            zoom:0.8,
			                itemStyle: {
			        normal: {
			            borderWidth: .5, //区域边框宽度
			            borderColor: '#009fe8', //区域边框颜色
			            areaColor: "#ffefd5", //区域颜色
			        },
			        emphasis: { //鼠标滑过地图高亮的相关设置
			            borderWidth: .5,
			            borderColor: '#4b0082',
			            areaColor: "#fff",
			        }
			    },
			    label: {
			        normal: {
			            show: true, //省份名称
			            fontSize: 11,
			        },
			        emphasis: {
			            show: true,
			            fontSize: 11,
			        }
			    },
				             data:[]
				        }
				    ]
				};
	$.ajax({
        url:"/map",
        success: function(data) {
            city1option.series[0].data=data.condata
            myChart1.setOption(city1option)
		},
		error: function(xhr, type, errorThrown) {

		}
	})

	});
		        myChart.off('click')
			   myChart1.on('click', function (){
			       mychart1.clear();
				   changeMap();
			   });
			   myChart1.setOption(city1option);
		});
		myChart.setOption(cityoption);
 		window.addEventListener("resize",function(){
       	 	myChart.resize();
   		});
	});
	myChart.setOption(provinceoption);
 	window.addEventListener("resize",function(){
        myChart.resize();
   });
}
