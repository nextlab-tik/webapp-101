const loadTime = new Date();
const timeFormat = 'MM/DD/YYYY HH:mm:ss';
const ctx = document.getElementById("chart").getContext('2d');
const chart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [
            moment(loadTime).add(0, 'm').toDate(),
            moment(loadTime).add(15, 'm').toDate(),
        ],
        datasets: [{
            label: 'Google',
            data: [],
            backgroundColor: 'transparent',
            borderColor: 'rgba(255,99,132,1)',
            fill: false,
            pointRadius: 0,
            lineTension: 0,
            borderWidth: 1,
        }]
    },
    options: {
        animation: {
            duration: 2000,
            easing: 'linear',
        },
        zoom: {
            enabled: true,
            mode: 'x',
        },
        pan: {
            enabled: true,
            mode: 'x',
            rangeMin: {
                x: loadTime,
            },
        },
        title: {
            display: true,
            text: 'Wall Street Stock Exchange'
        },
        tooltips: {
            mode: 'index',
            intersect: false,
        },
        hover: {
            mode: 'nearest',
            intersect: true
        },
        responsive: true,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    suggestedMax: 100,
                    suggestedMin: 0,
                },
                scaleLabel: {
                    display: true,
                    labelString: 'Capital ($)'
                }
            }],
            xAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Month'
                },
                type: 'time',
                time: {
                    format: timeFormat,
                    tooltipFormat: 'll HH:mm'
                },
            }],
        },
    }
});

function addData() {
    const l = new Date();
    const x = moment(l).format(timeFormat);
    chart.data.datasets.forEach((dataset) => {
        dataset.data.push({
            y: Math.round(Math.random() * 100),
            x,
        });
    })
    chart.update();
}
addData();
setInterval(addData, 2000);
