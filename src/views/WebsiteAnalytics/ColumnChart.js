import React from 'react'
import ReactApexChart from 'react-apexcharts'

class ColumnChart extends React.Component {
    constructor(props) {
        super(props)

        this.state = {

            series: [
                {
                    name: 'Q1 Budget',
                    group: 'budget',
                    data: [15000, 5000, 17000, 10000, 15000, 7000, 12500]
                },
                {
                    name: 'Q2 Budget',
                    group: 'budget',
                    data: [2000, 2000, 3000, 3000, 3000, 2000, 2500]
                }
            ],
            options: {
                chart: {
                    type: 'bar',
                    height: 350,
                    stacked: true,
                    toolbar: {
                        show: false // Hide the toolbar
                    },
                    animations: {
                        enabled: false // Disable animations
                    }
                },
                stroke: {
                    width: 1,
                    colors: ['#fff']
                },
                dataLabels: {
                    enabled: false
                },
                plotOptions: {
                    bar: {
                        horizontal: false,
                        barWidth: '60%'
                    }
                },
                xaxis: {
                    categories: [
                        'Sun',
                        'Mon',
                        'Tue',
                        'Wed',
                        'Thu',
                        'Fri',
                        'Sat'
                    ]
                },
                fill: {
                    opacity: 1
                },
                colors: ['#5b9af7', '#8fd2eb'],
                yaxis: {
                    labels: {
                        formatter: (val) => `${(val / 1000).toFixed(0)}K` // Modify the Y-axis label format here
                    },
                    min: 0, // Set the minimum Y-axis value
                    max: 20000, // Set the maximum Y-axis value
                    tickAmount: 4 // Set the number of ticks on the Y-axis
                },
                legend: {
                    show: false // Hide the legend
                },
                title: {
                    text: 'Audience Report'
                }
            }
        }
    }

    render() {
        return (


            <div id="chart">
                <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={300} />
            </div>


        )
    }
}

export default ColumnChart