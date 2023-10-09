import React, { useState } from 'react'
import ReactApexChart from 'react-apexcharts'
import './BarChart.css'

function BarChart() {
    const [chartData] = useState({
        series: [
            {
                data: [1200, 900, 500]
            }
        ],
        options: {
            chart: {
                type: 'bar',
                height: 100,
                barHeight: 50,
                toolbar: {
                    show: false // Hide the toolbar
                }
            },
            plotOptions: {
                bar: {
                    borderRadius: 1,
                    horizontal: true
                }
            },
            dataLabels: {
                enabled: false
            },
            xaxis: {
                categories: ['USA', 'FRN', 'IND']
            },
            yaxis: {
                categories: ['0%', '5%', '10%', '15%', '20%', '25%']
            },
            title: {
                text: 'Session by Country'
            },
            colors: ['#5b9af7']
        }
    })

    return (
        <div id="chart">
            <ReactApexChart
                options={chartData.options}
                series={chartData.series}
                type="bar"
                height={230}
            />
        </div>
    )
}

export default BarChart
