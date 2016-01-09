$(function () {
  for (var i = 0; i < data.length; i++) {
    var graphid = "graph" + i+1;
    var div = document.createElement("div");
    div.id = graphid;
    div.className = "container graph";
    document.body.appendChild(div);

    type = data[i].type;
    var qText = data[i].text;
    var qCategories = [];
    var qData = [];
    for (var j = 0; j < data[i].responses.length; j++) {
        qCategories.push(data[i].responses[j].text);
    }
    for (var j = 0; j < data[i].responses.length; j++) {
        qData.push(data[i].responses[j].bar);
    }
    if (type == "Multiple Choice") {
      $('#'+graphid).highcharts({
          chart: {
              type: 'column'
          },
          title: {
              text: qText
          },
          xAxis: {
              categories: qCategories
          },
          yAxis: {
              min: 0,
              max: 100,
              title: {
                  text: 'Percent',
                  align: 'middle'
              },
              labels: {
                  overflow: 'justify'
              }
          },
          tooltip: {
              pointFormat: '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:.1f}%</b><br/>',
          },
          legend: {
              layout: 'vertical',
              align: 'right',
              verticalAlign: 'top',
              x: -40,
              y: 80,
              floating: true,
              borderWidth: 1,
              backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
              shadow: true
          },
          credits: {
              enabled: false
          },
          series: [{
              name: '2014-2015',
              data: qData 
          }]
      });
    }
    else if ((type == "Preference") || (type == "Rank")) {
      qSeries = []
      for (var j = 0; j < data[i].responses[0].choices.length; j++) {
        var obj = {};
        obj.name = data[i].responses[0].choices[j].choice;
        obj.data = [];
        qSeries.push(obj);
      }
      for (var j = 0; j < data[i].responses.length; j++) {
        for (var k = 0; k < qSeries.length; k++) {
          qSeries[k].data.push(data[i].responses[j].choices[k].bar);
        }
      }

      $('#'+graphid).highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: qText
        },
        xAxis: {
            categories: qCategories,
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Percent',
                align: 'middle'
            },
            labels: {
              overflow: 'justify'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f}%</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: qSeries
      });
    }
  }
});