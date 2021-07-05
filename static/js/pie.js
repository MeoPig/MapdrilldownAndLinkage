var myChart = echarts.init(document.getElementById('pie'), "infographic");
var pie_option ={
    title: {
		text: "",
		textStyle: {

		},

		left: 'left',
	},
    tooltip: {
        backgroundColor: 'rgba(255,255,255,0.7)',
        trigger: 'item'
    },
    //  toolbox: {
    //     show: true,
    //     feature: {
    //         dataView: {readOnly: false},
    //         restore: {},
    //         saveAsImage: {}
    //     }
    // },
    legend: {
        itemHeight: 10,
         type: 'scroll',
         orient: 'vertical',
        left: 'left',
        top:'bottom',
    },
    series: [
        {
            name: '人数',
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            itemStyle: {
                borderRadius: 10,
                borderColor: '#fff',
                borderWidth: 2
            },
            label: {
                show: false,
                position: 'center'
            },
            emphasis: {
                label: {
                    show: false,
                    fontSize: '40',
                    fontWeight: 'bold'
                }
            },
            labelLine: {
                show: false
            },
            data:[]
        }
    ]
};
$.ajax({
        url: "/pie",
        success: function (data) {
            var piedata=[];
            var city=data.city;
            var count=data.count;
            for (var i = 0; i < data.city.length; i++) {
                piedata.push({"value":count[i],"name":city[i]});
            }
            pie_option.series[0].data = piedata;
            myChart.setOption(pie_option);
        },
            error: function(xhr, type, errorThrown) {
        }
    })
$.ajax({    //使用JQuery内置的Ajax方法
         url : "/tabl",
         success : function(data) {
                var tableInfos = document.getElementById('tabl');
                var code1='<b>全校学生信息</b>'
                 var code = code1+'<TABLE style="width:95%;height:95%;" border="1" bgcolor="#fffdfd">';
                 code += '<TR><TH>学号</TH><TH>姓名</TH><TH>专业</TH><TH>市</TH><TH>县</TH></TR>';
                  for(var i=0;i<data.alldata1.length;i++){

                        code += '<TR><TD>'+data.alldata1[i]+'</TD><TD>'+data.alldata2[i]+'</TD><TD>'+data.alldata3[i]+'</TD><TD>'+data.alldata4[i]+'</TD><TD>'+data.alldata5[i]+'</TD></TR>';
                     }
                 tableInfos.innerHTML = code + '</TABLE>';
                   },
            error: function(xhr, type, errorThrown) {
        }
    })
var cityname = "";
    myChart.clear();
    myChart.off('click')
	myChart.on('click', function (params){
		var myChart1= echarts.init(document.getElementById('bar'), "infographic");
		console.log(params.name);
		cityname = params.name;
		var changebar1option = {
    title: {
        text: cityname+'人数'
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
            dataView:
                {show: true,
                    readOnly: false},
                    saveAsImage: {}
                    , magicType: {show: true,
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
            switch (cityname) {
                case "山东":
                    changebar1option.xAxis[0].data = data.shandongcontinent
                    changebar1option.series[0].data = data.shandongCount
                    myChart1.setOption(changebar1option)
                    myChart1.hideLoading();
                    break;
                case "陕西":
                    changebar1option.xAxis[0].data = data.shanxicontinent
                    changebar1option.series[0].data = data.shanxiCount
                    myChart1.setOption(changebar1option)
                    myChart1.hideLoading();
                    break;
                case "山西":
                    changebar1option.xAxis[0].data = data.shanxi1continent
                    changebar1option.series[0].data = data.shanxi1Count
                    myChart1.setOption(changebar1option)
                    myChart1.hideLoading();
                    break;
                case "西藏":
                    changebar1option.xAxis[0].data = data.xizangcontinent
                    changebar1option.series[0].data = data.xizangCount
                    myChart1.setOption(changebar1option)
                    myChart1.hideLoading();
                    break;
                case "河北":
                    changebar1option.xAxis[0].data = data.hebeicontinent
                    changebar1option.series[0].data = data.hebeiCount
                    myChart1.setOption(changebar1option)
                    myChart1.hideLoading();
                    break;
                case "湖南":
                    changebar1option.xAxis[0].data = data.hunancontinent
                    changebar1option.series[0].data = data.hunanCount
                    myChart1.setOption(changebar1option)
                    myChart1.hideLoading();
                    break;
                case "广西":
                    changebar1option.xAxis[0].data = data.guangxicontinent
                    changebar1option.series[0].data = data.guangxiCount
                    myChart1.setOption(changebar1option)
                    myChart1.hideLoading();
                    break;
                case "四川":
                    changebar1option.xAxis[0].data = data.sichuancontinent
                    changebar1option.series[0].data = data.sichuanCount
                    myChart1.setOption(changebar1option)
                    myChart1.hideLoading();
                    break;
                case "云南":
                    changebar1option.xAxis[0].data = data.yunnancontinent
                    changebar1option.series[0].data = data.yunnanCount
                    myChart1.setOption(changebar1option)
                    myChart1.hideLoading();
                    break;
                case "河南":
                    changebar1option.xAxis[0].data = data.henancontinent
                    changebar1option.series[0].data = data.henanCount
                    myChart1.setOption(changebar1option)
                    myChart1.hideLoading();
                    break;
                case "湖北":
                    changebar1option.xAxis[0].data = data.hubeicontinent
                    changebar1option.series[0].data = data.hubeiCount
                    myChart1.setOption(changebar1option)
                    myChart1.hideLoading();
                    break;
                case "江苏":
                    changebar1option.xAxis[0].data = data.jiangsucontinent
                    changebar1option.series[0].data = data.jiangsuCount
                    myChart1.setOption(changebar1option)
                    myChart1.hideLoading();
                    break;
                case "浙江":
                    changebar1option.xAxis[0].data = data.zhejiangcontinent
                    changebar1option.series[0].data = data.zhejiangCount
                    myChart1.setOption(changebar1option)
                    myChart1.hideLoading();
                    break;
                default:
                    changebar1option.xAxis[0].data = data.continent
                    changebar1option.series[0].data = data.Count
                    myChart1.setOption(changebar1option)
                    myChart1.hideLoading();

            }},

		error: function(xhr, type, errorThrown) {

		}
    })
        $.ajax({    //使用JQuery内置的Ajax方法
         url : "/tabl",
         success : function(data) {
                  switch (cityname) {
                case "山东":
                var tableInfos = document.getElementById('tabl');
                var code1='<b>'+cityname+'学生信息</b>'
                 var code = code1+'<TABLE style="width:95%;height:95%;" border="1" bgcolor="#fffdfd">';
                 code += '<TR><TH>学号</TH><TH>姓名</TH><TH>专业</TH><TH>市</TH><TH>县</TH></TR>';
                  for(var i=0;i<data.shandong1.length;i++){

                        code += '<TR><TD>'+data.shandong1[i]+'</TD><TD>'+data.shandong2[i]+'</TD><TD>'+data.shandong3[i]+'</TD><TD>'+data.shandong4[i]+'</TD><TD>'+data.shandong5[i]+'</TD></TR>';
                     }
                 tableInfos.innerHTML = code + '</TABLE>';
                    break;
                case "陕西":
                var tableInfos = document.getElementById('tabl');
                var code1='<b>'+cityname+'学生信息</b>'
                 var code = code1+'<TABLE style="width:95%;height:95%;" border="1" bgcolor="#fffdfd">';
                 code += '<TR><TH>学号</TH><TH>姓名</TH><TH>专业</TH><TH>市</TH><TH>县</TH></TR>';
                  for(var i=0;i<data.shanxi1.length;i++){

                        code += '<TR><TD>'+data.shanxi1[i]+'</TD><TD>'+data.shanxi2[i]+'</TD><TD>'+data.shanxi3[i]+'</TD><TD>'+data.shanxi4[i]+'</TD><TD>'+data.shanxi5[i]+'</TD></TR>';
                     }
                 tableInfos.innerHTML = code + '</TABLE>';
                    break;
                case "山西":
                var tableInfos = document.getElementById('tabl');
                var code1='<b>'+cityname+'学生信息</b>'
                 var code = code1+'<TABLE style="width:95%;height:95%;" border="1" bgcolor="#fffdfd">';                 code += '<TR><TH>学号</TH><TH>姓名</TH><TH>专业</TH><TH>市</TH><TH>县</TH></TR>';
                  for(var i=0;i<data.shanxi11.length;i++){

                        code += '<TR><TD>'+data.shanxi11[i]+'</TD><TD>'+data.shanxi12[i]+'</TD><TD>'+data.shanxi13[i]+'</TD><TD>'+data.shanxi14[i]+'</TD><TD>'+data.shanxi15[i]+'</TD></TR>';
                     }
                 tableInfos.innerHTML = code + '</TABLE>';
                    break;
                case "西藏":
                  var tableInfos = document.getElementById('tabl');
                var code1='<b>'+cityname+'学生信息</b>'
                 var code = code1+'<TABLE style="width:95%;height:95%;" border="1" bgcolor="#fffdfd">';                 code += '<TR><TH>学号</TH><TH>姓名</TH><TH>专业</TH><TH>市</TH><TH>县</TH></TR>';
                  for(var i=0;i<data.xizang1.length;i++){

                        code += '<TR><TD>'+data.xizang1[i]+'</TD><TD>'+data.xizang2[i]+'</TD><TD>'+data.xizang3[i]+'</TD><TD>'+data.xizang4[i]+'</TD><TD>'+data.xizang5[i]+'</TD></TR>';
                     }
                 tableInfos.innerHTML = code + '</TABLE>';
                    break;
                case "河北":
                var tableInfos = document.getElementById('tabl');
                var code1='<b>'+cityname+'学生信息</b>'
                 var code = code1+'<TABLE style="width:95%;height:95%;" border="1" bgcolor="#fffdfd">';                 code += '<TR><TH>学号</TH><TH>姓名</TH><TH>专业</TH><TH>市</TH><TH>县</TH></TR>';
                  for(var i=0;i<data.hebei1.length;i++){

                        code += '<TR><TD>'+data.hebei1[i]+'</TD><TD>'+data.hebei2[i]+'</TD><TD>'+data.hebei3[i]+'</TD><TD>'+data.hebei4[i]+'</TD><TD>'+data.hebei5[i]+'</TD></TR>';
                     }
                 tableInfos.innerHTML = code + '</TABLE>';
                    break;
                case "湖南":
                var tableInfos = document.getElementById('tabl');
                var code1='<b>'+cityname+'学生信息</b>'
                 var code = code1+'<TABLE style="width:95%;height:95%;" border="1" bgcolor="#fffdfd">';                 code += '<TR><TH>学号</TH><TH>姓名</TH><TH>专业</TH><TH>市</TH><TH>县</TH></TR>';
                  for(var i=0;i<data.hunan1.length;i++){

                        code += '<TR><TD>'+data.hunan1[i]+'</TD><TD>'+data.hunan2[i]+'</TD><TD>'+data.hunan3[i]+'</TD><TD>'+data.hunan4[i]+'</TD><TD>'+data.hunan5[i]+'</TD></TR>';
                     }
                 tableInfos.innerHTML = code + '</TABLE>';
                    break;
                case "广西":
                var tableInfos = document.getElementById('tabl');
                var code1='<b>'+cityname+'学生信息</b>'
                 var code = code1+'<TABLE style="width:95%;height:95%;" border="1" bgcolor="#fffdfd">';                 code += '<TR><TH>学号</TH><TH>姓名</TH><TH>专业</TH><TH>市</TH><TH>县</TH></TR>';
                  for(var i=0;i<data.guangxi1.length;i++){

                        code += '<TR><TD>'+data.guangxi1[i]+'</TD><TD>'+data.guangxi2[i]+'</TD><TD>'+data.guangxi3[i]+'</TD><TD>'+data.guangxi4[i]+'</TD><TD>'+data.guangxi5[i]+'</TD></TR>';
                     }
                 tableInfos.innerHTML = code + '</TABLE>';
                    break;
                case "四川":
                var tableInfos = document.getElementById('tabl');
                var code1='<b>'+cityname+'学生信息</b>'
                 var code = code1+'<TABLE style="width:95%;height:95%;" border="1" bgcolor="#fffdfd">';                 code += '<TR><TH>学号</TH><TH>姓名</TH><TH>专业</TH><TH>市</TH><TH>县</TH></TR>';
                  for(var i=0;i<data.sichuan1.length;i++){

                        code += '<TR><TD>'+data.sichuan1[i]+'</TD><TD>'+data.sichuan2[i]+'</TD><TD>'+data.sichuan3[i]+'</TD><TD>'+data.sichuan4[i]+'</TD><TD>'+data.sichuan5[i]+'</TD></TR>';
                     }
                 tableInfos.innerHTML = code + '</TABLE>';
                    break;
                case "云南":
                 var tableInfos = document.getElementById('tabl');
                var code1='<b>'+cityname+'学生信息</b>'
                 var code = code1+'<TABLE style="width:95%;height:95%;" border="1" bgcolor="#fffdfd">';                 code += '<TR><TH>学号</TH><TH>姓名</TH><TH>专业</TH><TH>市</TH><TH>县</TH></TR>';
                  for(var i=0;i<data.yunnan1.length;i++){

                        code += '<TR><TD>'+data.yunnan1[i]+'</TD><TD>'+data.yunnan2[i]+'</TD><TD>'+data.yunnan3[i]+'</TD><TD>'+data.yunnan4[i]+'</TD><TD>'+data.yunnan5[i]+'</TD></TR>';
                     }
                 tableInfos.innerHTML = code + '</TABLE>';
                    break;
                case "河南":
                 var tableInfos = document.getElementById('tabl');
                var code1='<b>'+cityname+'学生信息</b>'
                 var code = code1+'<TABLE style="width:95%;height:95%;" border="1" bgcolor="#fffdfd">';                 code += '<TR><TH>学号</TH><TH>姓名</TH><TH>专业</TH><TH>市</TH><TH>县</TH></TR>';
                  for(var i=0;i<data.henan1.length;i++){

                        code += '<TR><TD>'+data.henan1[i]+'</TD><TD>'+data.henan2[i]+'</TD><TD>'+data.henan3[i]+'</TD><TD>'+data.henan4[i]+'</TD><TD>'+data.henan5[i]+'</TD></TR>';
                     }
                 tableInfos.innerHTML = code + '</TABLE>';
                    break;
                case "湖北":
                var tableInfos = document.getElementById('tabl');
                var code1='<b>'+cityname+'学生信息</b>'
                 var code = code1+'<TABLE style="width:95%;height:95%;" border="1" bgcolor="#fffdfd">';                 code += '<TR><TH>学号</TH><TH>姓名</TH><TH>专业</TH><TH>市</TH><TH>县</TH></TR>';
                  for(var i=0;i<data.hubei1.length;i++){

                        code += '<TR><TD>'+data.hubei1[i]+'</TD><TD>'+data.hubei2[i]+'</TD><TD>'+data.hubei3[i]+'</TD><TD>'+data.hubei4[i]+'</TD><TD>'+data.hubei5[i]+'</TD></TR>';
                     }
                 tableInfos.innerHTML = code + '</TABLE>';
                    break;
                case "江苏":
                var tableInfos = document.getElementById('tabl');
                var code1='<b>'+cityname+'学生信息</b>'
                 var code = code1+'<TABLE style="width:95%;height:95%;" border="1" bgcolor="#fffdfd">';                 code += '<TR><TH>学号</TH><TH>姓名</TH><TH>专业</TH><TH>市</TH><TH>县</TH></TR>';
                  for(var i=0;i<data.jiangsu1.length;i++){

                        code += '<TR><TD>'+data.jiangsu1[i]+'</TD><TD>'+data.jiangsu2[i]+'</TD><TD>'+data.jiangsu3[i]+'</TD><TD>'+data.jiangsu4[i]+'</TD><TD>'+data.jiangsu5[i]+'</TD></TR>';
                     }
                 tableInfos.innerHTML = code + '</TABLE>';
                    break;
                case "浙江":
                var tableInfos = document.getElementById('tabl');
                var code1='<b>'+cityname+'学生信息</b>'
                 var code = code1+'<TABLE style="width:95%;height:95%;" border="1" bgcolor="#fffdfd">';                 code += '<TR><TH>学号</TH><TH>姓名</TH><TH>专业</TH><TH>市</TH><TH>县</TH></TR>';
                  for(var i=0;i<data.zhejiang1.length;i++){

                        code += '<TR><TD>'+data.zhejiang1[i]+'</TD><TD>'+data.zhejiang2[i]+'</TD><TD>'+data.zhejiang3[i]+'</TD><TD>'+data.zhejiang4[i]+'</TD><TD>'+data.zhejiang5[i]+'</TD></TR>';
                     }
                 tableInfos.innerHTML = code + '</TABLE>';
                    break;

            }
                     },
		error: function(xhr, type, errorThrown) {
		}
    })
 	window.addEventListener("resize",function(){
        myChart.resize();
   });
 		myChart1.setOption(changebar1option);

 		window.addEventListener("resize",function(){
       	 	myChart1.resize();
   		});
	});
myChart.setOption(pie_option);
