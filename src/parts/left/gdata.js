export function arrNullTo(e) {
    let Arr = []
    for (let i = 0; i <= e; i++)
        Arr.push(i)
    return Arr
}

export const gStartData = {
    labels: arrNullTo(5),
    datasets: [{
        label: 'Значение',
        data: [],
        backgroundColor: 'rgba(251, 213, 217, 0.2)',
        borderColor: 'rgba(255, 206, 86, 1)',
        borderWidth: 5
    }]
}

export const gStartOptions = {
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true
            },
            scaleLabel: {
                display: true,
                labelString: "Pk"
            }
        }],
        xAxes:[
            {
                scaleLabel: {
                    display: true,
                    labelString: "k"
                }
            }
        ]
    },
    legend: {
        display: false
    },
    defauts: {
        global: {
            animation: {
                duration: 1000,
                easing: 'easeInOutQuint'
            }
        }
    }
}