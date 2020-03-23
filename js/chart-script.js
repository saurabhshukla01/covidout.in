/* Line Chart */

$("#linechart-container").insertFusionCharts({
    type: "line",
    width: "100%",
    height: "400",
    dataFormat: "json",
    dataSource: {
      chart: {
        caption: "",
        yaxisname: "Effected Person",
        subcaption: "",
        numbersuffix: " ",
        rotatelabels: "1",
        setadaptiveymin: "1",
        theme: "fusion"
      },
      data: [
        {
          label: "30 Jan 2020",
          value: "0"
        },
        {
          label: "02 Feb 2020",
          value: "50"
        },
        {
          label: "03 Mar 2020",
          value: "100"
        },
        {
          label: "05 Mar 2020",
          value: "150"
        },
        {
          label: "07 Mar 2020",
          value: "200"
        },
        {
          label: "09 Mar 2020",
          value: "250"
        },
        {
          label: "11 Mar 2020",
          value: "300"
        },
        {
          label: "13 Mar 2020",
          value: "350"
        },
        {
          label: "15 Mar 2020",
          value: "400"
        },
        {
          label: "17 Mar 2020",
          value: "450"
        },
        {
          label: "19 Mar 2020",
          value: "500"
        },
        {
          label: "22 Mar 2020",
          value: "550"
        }
      ]
    }
  });

/* Bar Chart */


//STEP 2 - Chart Data
const chartData = [{
    "label": "Maharastha",
    "value": "290"
}, {
    "label": "UP",
    "value": "260"
}, {
    "label": "Delhi",
    "value": "180"
}, {
    "label": "Kerala",
    "value": "140"
}, {
    "label": "Bihar",
    "value": "115"
}, {
    "label": "Haryana",
    "value": "100"
}, {
    "label": "Gujarat",
    "value": "30"
}, {
    "label": "UP",
    "value": "260"
}, {
    "label": "Delhi",
    "value": "180"
}, {
    "label": "Kerala",
    "value": "140"
}, {
    "label": "Bihar",
    "value": "115"
}, {
    "label": "Haryana",
    "value": "100"
}, {
    "label": "Gujarat",
    "value": "30"
}, {
    "label": "Rajasthan",
    "value": "30"
}];

//STEP 3 - Chart Configurations
const chartConfig = {
type: 'column2d',
renderAt: 'chart-container',
width: '100%',
height: '400',
dataFormat: 'json',
dataSource: {
    // Chart Configuration
    "chart": {
        "caption": "States and UTs",
        "subCaption": "Carona Effect",
        "xAxisName": "State",
        "yAxisName": "Effected Person",
        "numberSuffix": "",
        "theme": "fusion",
        },
    // Chart Data
    "data": chartData
    }
};
FusionCharts.ready(function(){
var fusioncharts = new FusionCharts(chartConfig);
fusioncharts.render();
});






/* Pie Chart */

$("#piechart-container").insertFusionCharts({
    type: "pie2d",
    width: "100%",
    height: "400",
    dataFormat: "json",
    dataSource: {
      chart: {
        caption: "Nationality",
        plottooltext: "<b>$percentValue</b> Patients",
        showlegend: "1",
        showpercentvalues: "1",
        legendposition: "bottom",
        usedataplotcolorforlabels: "1",
        theme: "fusion"
      },
      data: [
        {
          label: "Indian",
          value: "296"
        },
        {
          label: "Foreigner",
          value: "41"
        }
      ]
    }
  });
  




  /* Double bar Chart */


  $("#doublechart-container").insertFusionCharts({
    type: "scrollstackedcolumn2d",
    width: "100%",
    height: "400",
    dataFormat: "json",
    dataSource: {
      chart: {
        caption: "Confirmed COVID-19 Cases",
        yaxisname: "",
        subcaption: "(30th Jan to Till Date)",
        flatscrollbars: "0",
        scrollheight: "12",
        numvisibleplot: "8",
        plottooltext:
          "<b>$dataValue</b> people $seriesName in $label",
        theme: "umber"
      },
      categories: [
        {
          category: [
            {
              label: "26 Feb 2020"
            },
            {
              label: "02 Mar 2020"
            },
            {
              label: "06 Mar 2020"
            },
            {
              label: "10 Mar 2020"
            },
            {
              label: "14 Mar 2020"
            },
            {
              label: "18 Mar 2020"
            },
            {
              label: "22 Mar 2020"
            }
          ]
        }
      ],
      dataset: [
        {
          seriesname: "Hospitalized",
          data: [
            {
              value: "10"
            },
            {
              value: "20"
            },
            {
              value: "40"
            },
            {
              value: "60"
            },
            {
              value: "80"
            },
            {
              value: "100"
            },
            {
              value: "120"
            },
            {
              value: "140"
            },
            {
              value: "160"
            },
            {
              value: "180"
            },
            {
              value: "200"
            },
            {
              value: "220"
            },
            {
              value: "240"
            },
            {
              value: "260"
            },
            {
              value: "280"
            },
            {
              value: "300"
            },
            {
              value: "320"
            },
            {
              value: "340"
            },
            {
              value: "360"
            },
            {
              value: "380"
            },
            {
              value: "400"
            },
            {
              value: "420"
            },
            {
              value: "440"
            },
            {
              value: "460"
            }
          ]
        },
        {
          seriesname: "Recovered",
          data: [
            {
              value: "5"
            },
            {
              value: "10"
            },
            {
              value: "15"
            },
            {
              value: "20"
            },
            {
              value: "25"
            },
            {
              value: "30"
            },
            {
              value: "35"
            },
            {
              value: "40"
            },
            {
              value: "45"
            },
            {
              value: "50"
            },
            {
              value: "55"
            },
            {
              value: "60"
            },
            {
              value: "65"
            },
            {
              value: "70"
            },
            {
              value: "75"
            },
            {
              value: "80"
            },
            {
              value: "85"
            },
            {
              value: "90"
            },
            {
              value: "95"
            },
            {
              value: "100"
            },
            {
              value: "105"
            },
            {
              value: "110"
            },
            {
              value: "115"
            },
            {
              value: "120"
            }
          ]
        }
      ]
    }
  });
  