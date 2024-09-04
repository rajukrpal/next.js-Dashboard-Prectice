"use client"
import React, { useEffect, useRef } from 'react';
import Chart from "chart.js";

const ChartAverage = () => {
    const chartRef = useRef();
    const chartInstanceRef = useRef(null);

    useEffect(() => {
        if (chartRef && chartRef.current) {
            const myChartRef = chartRef.current.getContext("2d");
            // Destroy previous chart instance
            if (chartInstanceRef.current !== null) {
                chartInstanceRef.current.destroy();
            }
            chartInstanceRef.current = new Chart(myChartRef, {
                type: "bar",
                data: {
                    labels: [
                        "Monday",
                        "Tuesday",
                        "Wednesday",
                        "Thursday",
                        "Friday",
                        "Saturday",
                        "Sunday",
                    ],
                    datasets: [
                        {
                            label: new Date().getFullYear(),
                            backgroundColor: "#0095FF",
                            borderColor: "#4a5568",
                            data: [30, 78, 56, 34, 100, 45, 13],
                            barThickness: 20, // Adjust this value for bar width
                        },
                        {
                            label: new Date().getFullYear() - 1,
                            backgroundColor: "#00E096",
                            borderColor: "#3182ce",
                            data: [27, 68, 86, 74, 10, 4, 87],
                            barThickness: 20, // Adjust this value for bar width
                        },
                    ],
                },
                options: {
                    maintainAspectRatio: false,
                    responsive: true,
                    title: {
                        display: false,
                        text: "Orders Chart",
                    },
                    tooltips: {
                        mode: "index",
                        intersect: false,
                    },
                    hover: {
                        mode: "nearest",
                        intersect: true,
                    },
                    legend: {
                        labels: {
                            fontColor: "rgba(0,0,0,.4)",
                        },
                        align: "end",
                        position: "bottom",
                    },
                    scales: {
                        x: {
                            barPercentage: 40,
                            categoryPercentage: 20,
                            grid: {
                                display: false,
                            },
                            ticks: {
                                display: false,
                            },
                        },
                        y: {
                            grid: {
                                borderDash: [2],
                                drawBorder: false,
                                borderDashOffset: [2],
                                color: "rgba(33, 37, 41, 0.2)",
                                zeroLineColor: "rgba(33, 37, 41, 0.15)",
                                zeroLineBorderDash: [2],
                                zeroLineBorderDashOffset: [2],
                            },
                        },
                    },
                },

            });
            // Clean up function
            return () => {
                // Destroy chart instance when component unmounts
                if (chartInstanceRef.current !== null) {
                    chartInstanceRef.current.destroy();
                }
            };
        }
        let ctx = document.getElementById("bar-chart").getContext("2d");
        new Chart(ctx, config);
    }, []);

    return (
        <>
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded h-full">
                <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
                    <div className="flex flex-wrap items-center">
                        <div className="relative w-full max-w-full flex-grow flex-1">
                            <h6 className="uppercase text-blueGray-400 mb-1 text-xs font-semibold">
                                Performance
                            </h6>
                            <h2 className="text-blueGray-700 text-xl font-semibold">
                                Total orders
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="p-4 flex-auto">
                    {/* Chart */}
                    <div className="relative h-350-px h-72">
                        <canvas ref={chartRef} id="bar-chart"></canvas>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ChartAverage;
