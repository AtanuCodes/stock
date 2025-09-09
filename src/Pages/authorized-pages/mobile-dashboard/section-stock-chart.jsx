import React from 'react';
import Chart from "react-apexcharts";
import moment from "moment";
const chartData =  [

    { x: new Date("2023-05-15T10:00:00").getTime(), y: 6264.52 },
    { x: new Date("2023-05-15T10:15:00").getTime(), y: 6251.78 },
    { x: new Date("2023-05-15T10:30:00").getTime(), y: 6290.92 },
    { x: new Date("2023-05-15T10:45:00").getTime(), y: 6245.36 },
    { x: new Date("2023-05-15T11:00:00").getTime(), y: 6252.14 },
    { x: new Date("2023-05-15T11:15:00").getTime(), y: 6258.47 },
    { x: new Date("2023-05-15T11:30:00").getTime(), y: 6253.89 },
    { x: new Date("2023-05-15T11:45:00").getTime(), y: 6249.21 },
    { x: new Date("2023-05-15T12:00:00").getTime(), y: 6295.63 },
    { x: new Date("2023-05-15T12:15:00").getTime(), y: 6261.42 },
    { x: new Date("2023-05-15T12:30:00").getTime(), y: 6257.85 },
    { x: new Date("2023-05-15T12:45:00").getTime(), y: 6263.19 },
    { x: new Date("2023-05-15T13:00:00").getTime(), y: 6268.74 },
    { x: new Date("2023-05-15T13:15:00").getTime(), y: 6272.56 },
    { x: new Date("2023-05-15T13:30:00").getTime(), y: 6269.83 },
    { x: new Date("2023-05-15T13:45:00").getTime(), y: 6275.41 },
    { x: new Date("2023-05-15T14:00:00").getTime(), y: 6279.27 },
    { x: new Date("2023-05-15T14:15:00").getTime(), y: 6282.65 },
    { x: new Date("2023-05-15T14:30:00").getTime(), y: 6271.12 },
];

// const chartCategories = [
//     '10:00', '10:05', '10:10', '10:15', '10:20', '10:25', '10:30', '10:35', '10:40', '10:45',
//     '10:50', '10:55', '11:00', '11:05', '11:10', '11:15', '11:20', '11:25', '11:30', '11:35',
//     '11:40', '11:45', '11:50', '11:55', '12:00', '12:05', '12:10', '12:15', '12:20'
// ];

const SectionStockChart = () => {
    const chartOptions = {
        series: [
            {
                name: "DSE Index",
                data: chartData,
            },
        ],
        chart: {
            id: "area-datetime",
            type: "area",
            height: 350,
            zoom: {
                autoScaleYaxis: true,
            },
            toolbar: {
                show: false,
            },
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: "smooth",
            width: 2,
            colors: ["#00E396"],
        },
        selection: {
            enabled: false,
        },
        events: {
            click: function () {
                return false;
            },
        },
        fill: {
            type: "gradient",
            gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.7,
                opacityTo: 0.3,
                stops: [0, 100],
            },
        },
        xaxis: {
            type: "datetime",
            labels: {
                format: "HH:mm",
            },
            tooltip: {
                enabled: true,
                formatter: function (value) {
                    return moment(value).format("HH:mm");
                },
            },
        },
        yaxis: {
            title: {
                text: "Index Value",
            },
            labels: {
                formatter: function (value) {
                    return parseInt(value);
                },
            },
        },
        tooltip: {
            x: {
                format: "dd MMM yyyy HH:mm",
            },
        },
        colors: ["#00E396"],
        grid: {
            borderColor: "#f1f1f1",
            strokeDashArray: 5,
        },
        annotations: {
            yaxis: [
                {
                    y: chartData[0].y,
                    borderColor: "#999",
                    label: {
                        show: true,
                        style: {
                            color: "#fff",
                            background: "#775DD0",
                        },
                    },
                },
            ],
        },
    };

    const chartSeries = [{
        name: 'DSE Index',
        data: chartData
    }];
    return (
        <div className="w-full h-64">
            <Chart
                options={chartOptions}
                series={chartSeries}
                type="line"
                height={250}
            />
        </div>

    );
};

export default SectionStockChart;