"use client"
import React from 'react';
import ReactApexChart from 'react-apexcharts';

const ApexChartCoulm = () => {
    const series = [
        {
            name: 'Net Profit',
            data: [44, 55, 57, 56, 61, 58]
        },
        {
            name: 'Revenue',
            data: [76, 85, 101, 98, 87, 105]
        },
    ];

    const options = {
        chart: {
            type: 'bar',
            height: 350
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '70%', 
                endingShape: 'rounded'
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            show: true,
            width: 2,
            colors: ['transparent']
        },
        xaxis: {
            categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
            labels: {
                style: {
                    colors: '#9a9a9a',
                    fontSize: '12px'
                }
            }
        },
        yaxis: {
            title: {
                text: '$ (thousands)'
            }
        },
        fill: {
            opacity: 1
        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return "$ " + val + " thousands";
                }
            }
        },
        grid: {
            show: true
        },
        colors: ['#4AB58E', '#FFCF00'] 
    };

    return (
        <div>
            <div id="chart">
                <h1 className='px-3 font-semibold text-xl'>Target vs Reality</h1>
                <ReactApexChart options={options} series={series} type="bar" height={350} />
            </div>
            <div id="html-dist"></div>
        </div>
    );
};

export default ApexChartCoulm;
