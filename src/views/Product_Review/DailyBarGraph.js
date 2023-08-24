import React from 'react'
import { Bar } from 'react-chartjs-2'

const data = {
    labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
    datasets: [
        {
            data: [20, 40, 60, 80, 100, 80, 60],
            backgroundColor: '#d5f7da',
            barThickness: 12,
            borderRadius: 7
        }
        // {
        //     data: [100], // Data for the specific bar
        //     backgroundColor: '#00ff26', // Background color for the specific bar
        //     borderWidth: 7,
        //     barThickness: 12
        //   }
    ]
}

const chartOptions = {
    maintainAspectRatio: false,
    scales: {
        x: {
            grid: {
                display: false
            }
        },
        y: {
            beginAtZero: true,
            display: false,
            grid: {
                display: false
            }
        }
    }
}

const DailyBarGraph = () => {
    
data.datasets[0].barPercentage = 0.5
data.datasets[0].barPercentage = 0.2
    return (
        <div style={{width: "300px", height: "200px"}}>
            <Bar data={data} width={100} height={50} options={chartOptions}></Bar>
        </div>
    )
}

export default DailyBarGraph