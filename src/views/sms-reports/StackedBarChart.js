import React from 'react'
import { Bar } from 'react-chartjs-2'

const smsData = [
    [100, 200, 300, 450, 600, 200, 100, 100, 200, 300, 450, 600, 200, 100, 230, 140, 300],
    [150, 250, 350, 650, 400, 300, 100, 150, 250, 350, 650, 400, 300, 100, 200, 400, 350],
    [150, 250, 350, 650, 400, 300, 100, 150, 250, 350, 650, 400, 300, 100, 300, 200, 400],
    [150, 250, 350, 650, 400, 300, 100, 150, 250, 350, 650, 400, 300, 100, 400, 300, 200]
]

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"]

function getLastXDays(x) {
    const today = new Date()
    const lastXDays = []

    for (let i = 1; i <= x; i++) {
        const date = new Date(today)
        date.setDate(today.getDate() - i)
        lastXDays.push(date.toLocaleDateString())
    }

    return lastXDays
}

function getLastXMonths(x) {
    const today = new Date()
    const lastXMonths = []

    for (let i = 1; i <= x; i++) {
        const date = new Date(today)
        date.setMonth(today.getMonth() - i)
        lastXMonths.push(date)
    }
    const formattedMonths = lastXMonths.map((date) => {
        const year = date.getFullYear()
        const month = months[date.getMonth()]
        return `${month} ${year}`
    })
    return formattedMonths
}

function generateDataset(label, data, backgroundColor, hoverBackgroundColor, hoverBorderColor) {
    return {
        label,
        data,
        backgroundColor,
        borderWidth: 1,
        hoverBackgroundColor,
        hoverBorderColor
    }
}

const chartInfo = {
    Sends: {
        Day: {
            labels: getLastXDays(7),
            datasets: [
                generateDataset('Dataset 1', smsData[0].slice(0, 7).reverse(), 'rgba(255,69,96,1)', 'rgba(255,69,96,0.5)', 'rgba(255,69,96,1)'),
                generateDataset('Dataset 2', smsData[1].slice(0, 7).reverse(), 'rgba(255, 217, 61,1)', 'rgba(255, 217, 61,0.5)', 'rgba(255, 217, 61,1)'),
                generateDataset('Dataset 3', smsData[2].slice(0, 7).reverse(), 'rgba(0,227,150,255)', 'rgba(0,227,150,0.6)', 'rgba(0,227,150,255)'),
                generateDataset('Dataset 4', smsData[3].slice(0, 7).reverse().reverse(), 'rgba(0,143,251,255)', 'rgba(0,143,251,0.6)', 'rgba(0,143,251,255)')
            ]
        },
        Month: {
            labels: getLastXDays(15),
            datasets: [
                generateDataset('Dataset 1', smsData[0].slice(0, 15).reverse(), 'rgba(255,69,96,1)', 'rgba(255,69,96,0.5)', 'rgba(255,69,96,1)'),
                generateDataset('Dataset 2', smsData[1].slice(0, 15).reverse(), 'rgba(255, 217, 61,1)', 'rgba(255, 217, 61,0.5)', 'rgba(255, 217, 61,1)'),
                generateDataset('Dataset 3', smsData[2].slice(0, 15).reverse(), 'rgba(0,227,150,255)', 'rgba(0,227,150,0.6)', 'rgba(0,227,150,255)'),
                generateDataset('Dataset 4', smsData[3].slice(0, 15).reverse(), 'rgba(0,143,251,255)', 'rgba(0,143,251,0.6)', 'rgba(0,143,251,255)')
            ]
        },
        Quarter: {
            labels: getLastXMonths(6),
            datasets: [
                generateDataset('Dataset 1', smsData[0].slice(0, 6).reverse(), 'rgba(255,69,96,1)', 'rgba(255,69,96,0.5)', 'rgba(255,69,96,1)'),
                generateDataset('Dataset 2', smsData[1].slice(0, 6).reverse(), 'rgba(255, 217, 61,1)', 'rgba(255, 217, 61,0.5)', 'rgba(255, 217, 61,1)'),
                generateDataset('Dataset 3', smsData[2].slice(0, 6).reverse(), 'rgba(0,227,150,255)', 'rgba(0,227,150,0.6)', 'rgba(0,227,150,255)'),
                generateDataset('Dataset 4', smsData[3].slice(0, 6).reverse(), 'rgba(0,143,251,255)', 'rgba(0,143,251,0.6)', 'rgba(0,143,251,255)')
            ]
        },
        Year: {
            labels: getLastXMonths(12),
            datasets: [
                generateDataset('Dataset 1', smsData[0].slice(0, 12).reverse(), 'rgba(255,69,96,1)', 'rgba(255,69,96,0.5)', 'rgba(255,69,96,1)'),
                generateDataset('Dataset 2', smsData[1].slice(0, 12).reverse(), 'rgba(255, 217, 61,1)', 'rgba(255, 217, 61,0.5)', 'rgba(255, 217, 61,1)'),
                generateDataset('Dataset 3', smsData[2].slice(0, 12).reverse(), 'rgba(0,227,150,255)', 'rgba(0,227,150,0.6)', 'rgba(0,227,150,255)'),
                generateDataset('Dataset 4', smsData[3].slice(0, 12).reverse(), 'rgba(0,143,251,255)', 'rgba(0,143,251,0.6)', 'rgba(0,143,251,255)')
            ]
        }
    },
    Delivered: {
        Day: {
            labels: getLastXDays(7),
            datasets: [
                generateDataset('Dataset 1', smsData[0].slice(0, 7), 'rgba(255,69,96,1)', 'rgba(255,69,96,0.5)', 'rgba(255,69,96,1)'),
                generateDataset('Dataset 2', smsData[1].slice(0, 7), 'rgba(255, 217, 61,1)', 'rgba(255, 217, 61,0.5)', 'rgba(255, 217, 61,1)'),
                generateDataset('Dataset 3', smsData[2].slice(0, 7), 'rgba(0,227,150,255)', 'rgba(0,227,150,0.6)', 'rgba(0,227,150,255)'),
                generateDataset('Dataset 4', smsData[3].slice(0, 7), 'rgba(0,143,251,255)', 'rgba(0,143,251,0.6)', 'rgba(0,143,251,255)')
            ]
        },
        Month: {
            labels: getLastXDays(15),
            datasets: [
                generateDataset('Dataset 1', smsData[0].slice(0, 15), 'rgba(255,69,96,1)', 'rgba(255,69,96,0.5)', 'rgba(255,69,96,1)'),
                generateDataset('Dataset 2', smsData[1].slice(0, 15), 'rgba(255, 217, 61,1)', 'rgba(255, 217, 61,0.5)', 'rgba(255, 217, 61,1)'),
                generateDataset('Dataset 3', smsData[2].slice(0, 15), 'rgba(0,227,150,255)', 'rgba(0,227,150,0.6)', 'rgba(0,227,150,255)'),
                generateDataset('Dataset 4', smsData[3].slice(0, 15), 'rgba(0,143,251,255)', 'rgba(0,143,251,0.6)', 'rgba(0,143,251,255)')
            ]
        },
        Quarter: {
            labels: getLastXMonths(6),
            datasets: [
                generateDataset('Dataset 1', smsData[0].slice(0, 6), 'rgba(255,69,96,1)', 'rgba(255,69,96,0.5)', 'rgba(255,69,96,1)'),
                generateDataset('Dataset 2', smsData[1].slice(0, 6), 'rgba(255, 217, 61,1)', 'rgba(255, 217, 61,0.5)', 'rgba(255, 217, 61,1)'),
                generateDataset('Dataset 3', smsData[2].slice(0, 6), 'rgba(0,227,150,255)', 'rgba(0,227,150,0.6)', 'rgba(0,227,150,255)'),
                generateDataset('Dataset 4', smsData[3].slice(0, 6), 'rgba(0,143,251,255)', 'rgba(0,143,251,0.6)', 'rgba(0,143,251,255)')
            ]
        },
        Year: {
            labels: getLastXMonths(12),
            datasets: [
                generateDataset('Dataset 1', smsData[0].slice(0, 12), 'rgba(255,69,96,1)', 'rgba(255,69,96,0.5)', 'rgba(255,69,96,1)'),
                generateDataset('Dataset 2', smsData[1].slice(0, 12), 'rgba(255, 217, 61,1)', 'rgba(255, 217, 61,0.5)', 'rgba(255, 217, 61,1)'),
                generateDataset('Dataset 3', smsData[2].slice(0, 12), 'rgba(0,227,150,255)', 'rgba(0,227,150,0.6)', 'rgba(0,227,150,255)'),
                generateDataset('Dataset 4', smsData[3].slice(0, 12), 'rgba(0,143,251,255)', 'rgba(0,143,251,0.6)', 'rgba(0,143,251,255)')
            ]
        }
    }
}

const StackedBarChart = (props) => {
    const { timeLine, smsMode } = props
    const data = chartInfo[smsMode][timeLine]

    const chartOptions = {
        maintainAspectRatio: false,
        scales: {
            x: {
                stacked: true,
                grid: {
                    display: false
                }
            },
            y: {
                stacked: true,
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
        <div className='my-3' style={{ height: "60vh" }}>
            <Bar
                data={data}
                options={chartOptions}
            />
        </div>
    )
}

export default StackedBarChart
