import {Chart} from 'chart.js';

export const drawChart = (chartData, chartElemId, title, xlabel, ylabel, param) => {    
    var ctx = document.getElementById(chartElemId).getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: chartData.map( (item) => { return  param === 'density' ? item.density : item.numberOfVerticles}),
            datasets: [{
                label: 'time',
                data: chartData.map( (item) => { return item.time}),
                fill: false,               
                borderColor: [ 'rgba(255,99,132,1)'],
                borderWidth: 2
            }]
        },
        options: {
            title: {
                display: true,
                text: title
            },       
            legend: {
                display: false               
            },     
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    },
                    scaleLabel: {
                        display: true,
                        labelString: ylabel
                      }                 
                }],
                xAxes: [{                   
                    scaleLabel: {
                        display: true,
                        labelString: xlabel
                      }                 
                }]
            }
        }
    });
};

export const drawTable = (chartData, th1, th2, param) => {
    let ret = chartData.map( item => {
        return param === 'density' ?  '<tr><td>'+ item.density +'</td><td>'+ item.time +'</td></tr>':
         '<tr><td>'+ item.numberOfVerticles +'</td><td>'+ item.time +'</td></tr>'
    });
    
    return '<table border=2><th>'+ th1 +'</th><th>'+ th2 +'</th>' + ret.join('') + '</table>';
}