$(function () {
    
for (var i = 0; i < data.length; i++) {
    var graphid = "graph" + i+1;    // id for the chart container
    var qText = data[i].text        // question text
    var qCategories = [];           // array of responses
    var qData = [];                 // array of data
    for (var j = 0; j < data[i].responses.length; j++) {
        qCategories.push(data[i].responses[j].text);    // populate array of responses
    }
    for (var j = 0; j < data[i].responses.length; j++) {
        qData.push(data[i].responses[j].bar);     // populate array of data
    }
    
    var div = index.createElement("div");   // create div for index.html
    div.id = graphid;                       // populate div
    div.class = "container";
    div.style.minWidth = "400px";
    div.style.maxWidth = "800px";
    div.style.height = "400px";
    div.style.margin = "0 auto";
    index.body.appendChild(div);
    
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
    
    
    
  $('#graph1').highcharts({
    chart: {
      type: 'column'
    },
    title: {
      text: qText
    },
    xAxis: {
      categories: ['Weinberg College of Arts and Sciences',
                   'McCormick School of Engineering and Applied Sciences',
                   'Medill School of Journalism',
                   'School of Communication',
                   'School of Education and Social Policy',
                   'Bienen School of Music'],
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
      data: [50.6, 22.0, 10.2, 12.5, 6.0, 3.6]
    }]
  });
    
    
  $('#graph2').highcharts({
    chart: {
      type: 'column'
    },
    title: {
      text: 'What year are you?'
    },
    xAxis: {
      categories: ['Freshman', 
                   'Sophomore', 
                   'Junior', 
                   'Senior', 
                   'Fifth year student'],
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
      name: '2014-2015',
      data: [33.5, 26.1, 19.8, 19.2, 1.4]
    }]
  });
});
