import React from 'react'
import ReactApexChart from 'react-apexcharts'
import './MultiDataProgressBar.css'

class ApexChart extends React.Component {
    constructor(props) {
        super(props)

        this.state = {

            series: [
                {
                    name: 'Personalized',
                    data: [44]
                }, {
                    name: 'Non- Personalized',
                    data: [53]
                }, {
                    name: 'Fallback',
                    data: [12]
                }
                
            ],
            options: {
                chart: {
                    type: 'bar',
                    height: 350,
                    stacked: true,
                    stackType: '100%',
                    toolbar: {
                        tools: {
                            download: false
                        }
                    }
                },
                yaxis: {
                    show: false // Set show to false to hide the y-axis line.
                },
                plotOptions: {
                    bar: {
                        horizontal: true
                    }
                },
                stroke: {
                    width: 0,
                    colors: ['#fff']
                },
                title: {
                    text: ''
                    // margin:0
                },
                xaxis: {
                    // categories: [2008],
                    labels: {
                        show: false // Set show to false to hide x-axis labels.
                    }
                },
                fill: {
                    opacity: 1

                },
                legend: {
                    position: 'bottom',
                    horizontalAlign: 'left',
                    offsetX: 40
                },
                dataLabels: {
                    borderRadius: "15rem" // Adjust the curve radius as needed
                }
            }
        }
    }

    render() {
        return (

            <div id="chart">
                <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={100} />
            </div>

        )
    }
}
export default ApexChart