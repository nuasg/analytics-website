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

  $('#graph4').highcharts({
    chart: {
      type: 'column'
    },
    title: {
      text: 'What is your major in McCormick?'
    },
    xAxis: {
      categories: ['Biomedical Engineering',
                   'Chemical and Biological Engineering',
                   'Civil and Environmental Engineering',
                   'Electrical Engineering and Computer Science',
                   'Engineering Sciences and Applied Mathematics',
                   'Industrial Engineering and Management Sciences',
                   'Material Science and Engineering',
                   'Mechanical Engineering',
                   'Undeclared'],
    },
    yAxis: {
      min: 0,
      max: 25,
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
      y: 40,
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
      data: [12.5, 10.4, 7.3, 19.4, 2.4, 15.1, 7.6, 20.8, 4.5]
    }]
  });
  $('#graph6').highcharts({
    chart: {
      type: 'column'
    },
    title: {
      text: 'What is your motivation for picking your major? Pick the three most important factors influencing your decision.'
    },
    xAxis: {
      categories: ['Desirable GPA',
                   'Prestige of Major(s)',
                   'Future Salary',
                   'Career Direction',
                   'Number of Credits Transferable',
                   'Subject Interest',
                   'Previous Connections with Professors',
                   'Others\' Recommendation'],
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
      data: [7.6, 26.5, 27.2, 77.5, 2.5, 89.5, 6.0, 13.3]
    }]
  });
  $('#graph8').highcharts({
    chart: {
      type: 'column'
    },
    title: {
      text: 'Are you an international student?'
    },
    xAxis: {
      categories: ['Yes',
                   'No',
                   'I don\'t know'],
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
      data: [4.9, 94.3, 7.2]
    }]
  });
  $('#graph9').highcharts({
    chart: {
      type: 'column'
    },
    title: {
      text: 'Do you receive need-based financial aid from Northwestern?'
    },
    xAxis: {
      categories: ['Yes',
                   'No',
                   'Prefer not to respond'],
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
      data: [49.3, 47.6, 3.1]
    }]
  });
  $('#graph14').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'How important are the following aspects of CTECs to you when making class registration decisions?'
        },
        xAxis: {
            categories: [
                'Composite score',
                'Time survey question (number of hours per week)',
                'Free response question (general class impression question)',
                'Demographic questions (year in school, etc)'
            ],
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
        series: [{
            name: 'Not at all important',
            data: [1.2, 3.1, 0.7, 20.7]

        }, {
            name: 'Slightly unimportant',
            data: [3.4, 11.5, 1.5, 25.9]

        }, {
            name: 'Neither Important nor Unimportant',
            data: [3.6, 15.6, 3.4, 24.8]

        }, {
            name: 'Slightly Important',
            data: [43.5, 43.4, 32.8, 24.7]

        }, {
            name: 'Extremely Important',
            data: [48.3, 26.4, 61.7, 3.9]
        }]
    });
});
