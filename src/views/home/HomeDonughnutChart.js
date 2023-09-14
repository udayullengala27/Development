import React from 'react'
import Chart from 'react-apexcharts'
const HomeDonughnutChart = () => {
    const chartData = {
        plotOptions: {
            pie: {
                donut: {
                    labels: {
                        show: true,
                        total:{
                            show:true
                        }
                    }
                }
            }
        },
        dataLabels: {
            enabled: false // This hides the values on each section
        },
        legend: {
            show: false // This hides the legend
        },
        color:["#008080", '#5edc1f', '#3fff00', '#00FF00', '#009e60', '#77dd77']
    }
    return (
        <div>
        <Chart
            type='donut'
            width={300}
            height={180}
            series={[50, 50, 40, 60, 6, 25]}
            options={chartData}
            />
            </div>
    )
}

export default HomeDonughnutChart