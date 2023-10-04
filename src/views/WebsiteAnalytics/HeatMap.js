import React from 'react'
import ReactApexChart from 'react-apexcharts'

class HeatMap extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            options: {
                chart: {
                    type: 'heatmap',
                    height: 350
                },
                plotOptions: {
                    heatmap: {
                        colorScale: {
                            ranges: [
                                {
                                    from: 0,
                                    to: 30,
                                    name: 'Low',
                                    color: '#FF5722'
                                  },
                                  {
                                    from: 31,
                                    to: 60,
                                    name: 'Medium',
                                    color: '#FFC107'
                                  },
                                  {
                                    from: 61,
                                    to: 90,
                                    name: 'High',
                                    color: '#4CAF50'
                                  }
                            ]
                        }
                    }
                },
                xaxis: {
                    type: 'category', // Specify the X-axis type as 'category'
                    categories: [
                        'Monday',
                        'Tuesday',
                        'Wednesday',
                        'Thursday',
                        'Friday',
                        'Saturday',
                        'Sunday'
                    ]
                },
                dataLabels: {
                    enabled: false
                },
                title: {
                    text: ''
                }
            },
            series: [
                {
                    name: 'Series 1',
                    data: [[1, 35], [2, 85], [3, 10], [4, 70], [5, 50], [6, 80], [7, 25]]
                },
                {
                    name: 'Series 2',
                    data: [[1, 35], [2, 45], [3, 60], [4, 10], [5, 50], [6, 20], [7, 55]]
                }
            ]
        }
    }

    render() {
        return (
            <div className="heatmap-chart">
                <ReactApexChart
                    options={this.state.options}
                    series={this.state.series}
                    type="heatmap"
                    height={350}
                />
            </div>
        )
    }
}

export default HeatMap
