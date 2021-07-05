$(function(){
	changeBar();
})
function changeBar(){
	var myChart= echarts.init(document.getElementById('bar'), "infographic");
	var changebaroption ={
    title: {
        // text: '生源分布柱状图'
    },
    tooltip: {
        trigger: 'axis',
        backgroundColor: 'rgba(255,255,255,0.7)',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },

    toolbox: {
        show: true,
        feature: {
            // dataView:
            //     {show: true,
            //         readOnly: false
            //     },
            magicType: {
                show: true,
                type: ['line', 'bar']
            },
        }
                },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            data: [],
            axisTick: {
                alignWithLabel: true
            },
            axisLabel: {
                interval:0,
                rotate:40
}
        }
    ],
    yAxis: [
        {
            type: 'log'
        }
    ],
    series: [
        {
            name: '人数',
            type: 'bar',
            barWidth: '60%',
            data: []
        }
    ]
};
 $.ajax({
        url:"/bar",
        success: function(data) {
            changebaroption.xAxis[0].data=data.continent
            changebaroption.series[0].data=data.Count
            myChart.setOption(changebaroption)
            myChart.hideLoading();
		},
		error: function(xhr, type, errorThrown) {

		}
    })
myChart.clear();
    myChart.off('click')
	myChart.on('click', function (){
	    	var myChart1= echarts.init(document.getElementById('bar'), "infographic");
	var changebar1option ={
    title: { text: '生源分布柱状图'},
    tooltip: {
        trigger: 'axis',
        backgroundColor: 'rgba(255,255,255,0.7)',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },

    toolbox: {
        show: true,
        feature: {
            // dataView:
            //     {show: true,
            //
            //         readOnly: false}
            //         ,
            magicType: {show: true,
                type: ['line', 'bar']}, } },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            data: [],
            axisTick: {
                alignWithLabel: true
            },
            axisLabel: {
                interval:0,
                rotate:40
}
        }
    ],
    yAxis: [
        {
            type: 'log'
        }
    ],
    series: [
        {
            name: '人数',
            type: 'bar',
            barWidth: '60%',
            data: []
        }
    ]
};
 $.ajax({
        url:"/bar",
        success: function(data) {
            changebar1option.xAxis[0].data=data.continent
            changebar1option.series[0].data=data.Count
            myChart1.setOption(changebar1option)
            myChart1.hideLoading();
		},
		error: function(xhr, type, errorThrown) {

		}
    })
        myChart1.setOption(changebar1option)
        myChart1.on('click', function (params){
				   changeBar();
			   });
    })
	myChart.setOption(changebaroption);
 	window.addEventListener("resize",function(){
        myChart.resize();
   });
}
