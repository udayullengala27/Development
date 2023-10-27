import React from 'react'
import { Line } from 'react-chartjs-2'

const LineChart = () => {
    // Sample data for the chart
    const data = {
        labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
        datasets: [
            {
                label: 'Monthly Sales',
                data: [50, 70, 60, 65, 90, 58, 78, 30, 55, 36, 71, 27, 78, 44, 89],
                fill: false,
                borderColor: 'white', // Line color
                pointBorderWidth: 0,
                pointRadius: 0
            }
        ]
    }

    // Configuration options for the chart
    const options = {
        scales: {
            y: {
                display: false,
                beginAtZero: true,
                grid: {
                    display: false
                }
            },
            x: {
                display: false,
                beginAtZero: true,
                grid: {
                    display: false
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
            <Line data={data} options={options} />
        </div>
    )
}

// --------------------second line chart-------------------------

const LineChart2 = (props) => {

    const { date } = props
    // Sample data for the chart
    const formattedDate = date?.active_users?.map(item => {
        const DateArray = item.visit_date.split("-")
        return DateArray[DateArray.length - 1]
    })
    // console.log(formattedDate)
    const data = {
        labels: formattedDate,
        datasets: [
            {
                label: 'Monthly Sales',
                data: date?.active_users?.map(item => Math.round(item.cust_visit)),
                fill: false,
                borderColor: 'red', // Line color
                pointBorderWidth: 0,
                pointRadius: 0

            }
        ]
    }

    // Configuration options for the chart
    const options = {
        maintainAspectRatio: false,
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
        <div style={{ height: "15rem" }}>
            <Line data={data} options={options} style={{ height: "15rem" }} />
        </div>
    )
}

export { LineChart, LineChart2 }