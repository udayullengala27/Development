import React from 'react'
import ReactApexChart from 'react-apexcharts'

class HeatMap extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            options: {
                chart: {
                    type: 'heatmap',
                    height: 350,
                    toolbar: {
                        show: false // Hide the toolbar
                    }
                },
                plotOptions: {
                    heatmap: {
                        shadeIntensity: 0.5,
                        colorScale: {
                            ranges: [
                                {
                                    from: 0,
                                    to: 50,
                                    name: 'Low',
                                    color: '#deebfc' // Light blue
                                },
                                {
                                    from: 51,
                                    to: 100,
                                    name: 'High',
                                    color: '#5b9af7' // Blue
                                }
                            ]
                        }
                    }
                },
                xaxis: {
                    type: 'category', // Specify the X-axis type as 'category'
                    categories: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
                    labels: {
                        show: true
                    }
                },
                dataLabels: {
                    enabled: false
                },
                title: {
                    text: ''
                },
                legend: {
                    show: false // Hide the legend
                }

            },
            series: [
                {
                    name: '',
                    data: [
                        { x: 'S', y: 55 },
                        { x: 'M', y: 25 },
                        { x: 'T', y: 55 },
                        { x: 'W', y: 25 },
                        { x: 'T', y: 55 },
                        { x: 'F', y: 25 },
                        { x: 'S', y: 55 }
                    ]
                },
                {
                    name: '',
                    data: [
                        { x: 'S', y: 25 },
                        { x: 'M', y: 55 },
                        { x: 'T', y: 25 },
                        { x: 'W', y: 55 },
                        { x: 'T', y: 25 },
                        { x: 'F', y: 55 },
                        { x: 'S', y: 25 }
                    ]
                },
                {
                    name: '',
                    data: [
                        { x: 'S', y: 55 },
                        { x: 'M', y: 25 },
                        { x: 'T', y: 55 },
                        { x: 'W', y: 25 },
                        { x: 'T', y: 55 },
                        { x: 'F', y: 25 },
                        { x: 'S', y: 55 }
                    ]
                },
                {
                    name: '',
                    data: [
                        { x: 'S', y: 25 },
                        { x: 'M', y: 55 },
                        { x: 'T', y: 25 },
                        { x: 'W', y: 55 },
                        { x: 'T', y: 25 },
                        { x: 'F', y: 55 },
                        { x: 'S', y: 25 }
                    ]
                },
                {
                    name: '',
                    data: [
                        { x: 'S', y: 55 },
                        { x: 'M', y: 25 },
                        { x: 'T', y: 55 },
                        { x: 'W', y: 25 },
                        { x: 'T', y: 55 },
                        { x: 'F', y: 25 },
                        { x: 'S', y: 55 }
                    ]
                },
                {
                    name: '',
                    data: [
                        { x: 'S', y: 25 },
                        { x: 'M', y: 55 },
                        { x: 'T', y: 25 },
                        { x: 'W', y: 55 },
                        { x: 'T', y: 25 },
                        { x: 'F', y: 55 },
                        { x: 'S', y: 25 }
                    ]
                }
            ]
        }
    }

    render() {
        return (
            <div className="heatmap-chart w-100 ">
                <ReactApexChart
                    options={this.state.options}
                    series={this.state.series}
                    type="heatmap"
                    height={300}
                />
            </div>
        )
    }
}

export default HeatMap
