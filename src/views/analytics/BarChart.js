import React from 'react'
import { Bar } from 'react-chartjs-2'

function listMonthsStartingFromCurrentMonth() {
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ]

  const currentMonth = new Date().getMonth()
  const orderedMonths = [...months.slice(currentMonth), ...months.slice(0, currentMonth)]

  return orderedMonths
}

const monthlySalesData = {
  labels:listMonthsStartingFromCurrentMonth(),
  datasets: [
    {
      label: 'Monthly Sales',
      backgroundColor: 'rgba(116, 105, 239, 0.5)',
      borderColor: 'rgba(116, 105, 239, 0.5)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(116, 105, 239, 255)',
      hoverBorderColor: 'rgba(116, 105, 239, 255)',
      data: [65, 29, 60, 91, 56, 45, 60, 30, 56, 40, 73, 15]
    }
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
      grid: {
        display: false 
      }
    }
  }
}

// monthlySalesData.datasets[0].barPercentage = 0.7 
// monthlySalesData.datasets[0].categoryPercentage = 0.7 

const BarChart = () => {
  
  return (
    <div className=' mb-2 ' style={{ height: '500px' }}>
      <Bar
        data={monthlySalesData}
        width={100}
        height={50}
        options={chartOptions}
      />
    </div>
  )
}

export default BarChart