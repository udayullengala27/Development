import React from 'react'
import { Line } from 'react-chartjs-2'

const LineChart2 = () => {
    // Sample data for the chart
    const data = {
        labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        datasets: [
            {
                label: 'Monthly Sales',
                data: [50, 70, 60, 65, 90, 58, 78, 30, 55, 36, 71, 27],
                fill: false,
                borderColor: 'red', // Line color
                pointBorderWidth: 0,
                pointRadius: 0
            }
        ]
    }

    // Configuration options for the chart
    const options = {
        scales: {
            y: {
                display: true,
                beginAtZero: true,
                grid: {
                    display: true
                }
            },
            x: {
                display: true,
                beginAtZero: true,
                grid: {
                    display: true
                }
            }
        },
        plugins: {
            legend: {
                display: false
            }
        }
    }

    return (
        <div>
            <Line data={data} options={options}/>
        </div>
    )
}

export default LineChart2