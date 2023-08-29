import React from 'react'
import { Line } from 'react-chartjs-2'

const LineChart = () => {
  const createGradient = () => {
    const ctx = document.createElement('canvas').getContext('2d')
    const gradient = ctx.createLinearGradient(0, 0, 0, 200)
    gradient.addColorStop(0, 'rgba(70, 141, 224, 0.3)')
    gradient.addColorStop(1, 'rgba(255, 255,255, 1)')
    return gradient
  }

  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Send',
        data: [1000, 1500, 1500, 2300, 2800, 3200],
        backgroundColor: createGradient(),
        borderColor: 'rgba(70, 141, 224, 255)',
        borderWidth: 2,
        fill: true,
        pointBackgroundColor: (context) => {
          const index = context.dataIndex
          return index === context.dataset.data.length - 1 ? 'rgba(70, 141, 224, 255)' : 'transparent'
        }, // Set color for the last point
        pointBorderWidth: 2,
        pointRadius: (context) => {
          const index = context.dataIndex
          return index === context.dataset.data.length - 1 ? 4 : 0
        }
      }
    ]
  }

  const options = {
    maintainAspectRatio: false,
    scales: {
      x: {
        beginAtZero: false,
        grid: {
          display: false
        }
      },
      y: {
        display: false,
        beginAtZero: false,
        grid: {
          display: false
        }
      }
    },
    plugins: {
      legend: {
        display: false
      }
    },
    elements: {
      point: {
        radius: 0 // Remove circles at intersection points
      }
    }
  } 

  return (
    <div className='h-75' style={{width: "60%"}}>
      <Line data={data} options={options} />
    </div>
  )
}

export default LineChart
