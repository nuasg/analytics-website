function graphData(data, seriesName) {
  for (var i = 0; i < data.length; i++) {
    var graphid = "graph" + i+1;
    var div = document.createElement("div");
    div.id = graphid;
    div.className = "graph";
    $('.graphs').append(div);

    type = data[i].type;
    var qText = data[i].text.replace("&nbsp;", " ");
    var qCategories = [];
    var qData = [];
    for (var j = 0; j < data[i].responses.length; j++) {
      qCategories.push(data[i].responses[j].text);
      qData.push(data[i].responses[j].bar);
    }
    if (type == "Multiple Choice" || type == "Multiple Selection") {
      $('#'+graphid).highcharts({
        chart: {
          type: 'column'
        },
        title: {
          text: qText
        },
        subtitle: {
          text: type
        },
        xAxis: {
          categories: qCategories
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
          name: seriesName,
          data: qData
        }],
      });
    }
    else if ((type == "Preference") || (type == "Rank")) {
      qSeries = [];
      for (j = 0; j < data[i].responses[0].choices.length; j++) {
        var obj = {};
        obj.name = data[i].responses[0].choices[j].choice;
        obj.data = [];
        qSeries.push(obj);
      }
      for (j = 0; j < data[i].responses.length; j++) {
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
        subtitle: {
          text: type
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
        credits: false,
        series: qSeries
      });
    } else if (type == "Point Allocation") {
      $('#'+graphid).highcharts({
        chart: {
          type: 'column'
        },
        title: {
          text: qText,
          style: {
            fontSize: "1em"
          }
        },
        subtitle: {
          text: type
        },
        xAxis: {
          categories: qCategories
        },
        yAxis: {
          min: 0,
          title: {
            text: 'Average Number of Points Allocated',
            align: 'middle'
          },
          labels: {
            overflow: 'justify'
          }
        },
        tooltip: {
          pointFormat: '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:.1f} points</b><br/>',
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
          name: seriesName,
          data: qData
        }],
      });
    }
  }
}

var url = window.location.href.split("/");
if (url[url.length - 1] === "results-2014-2015.html") {
  $.getJSON("data/2014-2015.json", function(json) {
    graphData(json, '2014-2015');
  });
}
else if (url[url.length - 1] === "results-2015-2016.html") {
  $.getJSON("data/2015-2016.json", function(json) {
    graphData(json, '2015-2016');
  });
}
