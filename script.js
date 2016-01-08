$(function () {
  $('#graph1').highcharts({
    chart: {
      type: 'column'
    },
    title: {
      text: 'What school are you currently enrolled in?'
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
});
