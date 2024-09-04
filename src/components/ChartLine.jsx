
import React, { useEffect } from 'react';
import Chart from "chart.js";

const ChartLine = () => {

    useEffect(() => {
        var config = {
            type: "line",
            data: {
                labels: [
                    "January",
                    "February",
                    "March",
                    "April",
                    "May",
                    "June",
                    "July",
        
                ],
                datasets: [
                    {
                        label: new Date().getFullYear(),
                        backgroundColor: "#3182ce",
                        borderColor: "red",
                        data: [65, 78, 66, 24, 56, 67, 75],
                        fill: false,
                    },
                    {
                        label: new Date().getFullYear(),
                        backgroundColor: "#3182ce",
                        borderColor: "#3CD856",
                        data: [65, 88, 70, 70, 86, 57, 65],
                        fill: false,
                    },
                    {
                        label: new Date().getFullYear() - 1,
                        fill: false,
                        backgroundColor: "#edf2f7",
                        borderColor: "#A700FF",
                        data: [60, 68, 86, 74, 56, 60, 87],
                    },
                ],
            },
            options: {
                maintainAspectRatio: false,
                responsive: true,
                title: {
                    display: false,
                },
                legend: {
                    labels: {
                        fontColor: "#000", 
                    },
                    align: "end",
                    position: "bottom",
                },
                tooltips: {
                    mode: "index",
                    intersect: false,
                    backgroundColor: "rgba(0, 0, 0, 0.8)",
                    titleFontColor: "#000",
                    bodyFontColor: "#000", 
                },
                hover: {
                    mode: "nearest",
                    intersect: true,
                },
                scales: {
                    xAxes: [
                        {
                            ticks: {
                                fontColor: "#000", 
                            },
                            display: true,
                            scaleLabel: {
                                display: false,
                            },
                            gridLines: {
                                display: false,
                                color: "rgba(255, 255, 255, 0.7)", 
                            },
                        },
                    ],
                    yAxes: [
                        {
                            ticks: {
                                fontColor: "#000", 
                            },
                            display: true,
                            scaleLabel: {
                                display: false,
                            },
                            gridLines: {
                                color: "rgba(255, 255, 255, 0.9)", 
                            },
                        },
                    ],
                },
            },
        };
        var ctx = document.getElementById("line-chart").getContext("2d");
        window.myLine = new Chart(ctx, config);
    }, []);

    return (
        <>
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-blueGray-700 text-black h-full">
                <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
                    <div className="flex flex-wrap items-center">
                        <div className="relative w-full max-w-full flex-grow flex-1">
                            <h2 className="text-xl font-semibold">Visitor Insights</h2>
                        </div>
                    </div>
                </div>
                <div className=" flex-auto h-full">
                    {/* Chart */}
                    <div className="relative h-500-px h-64 "> 
                        <canvas id="line-chart"></canvas>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ChartLine;
