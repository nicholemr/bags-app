import { Line } from "react-chartjs-2";
import { mockData } from "../mockData/mockData.js";
import zoomPlugin from "chartjs-plugin-zoom";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
	Colors,
} from "chart.js";
import { useRef } from "react";

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
	Colors,
	zoomPlugin
);

export const options = {
	responsive: true,
	plugins: {
		legend: {
			position: "top" as const,
			labels: {
				font: {
					size: 12,
				},
			},
		},
		title: {
			display: true,
			text: "Revenue Growth",
			font: {
				size: 20,
			},
		},
		zoom: {
			limits: {
				x: { min: 0, max: 30, minRange: 50 },
				y: { min: 0, max: 25000, minRange: 50 },
			},
			pan: {
				enabled: true,
				mode: "xy" as const,
			},
			animation: {
				duration: 1000,
				easing: "easeOutCubic",
			},
			zoom: {
				wheel: {
					enabled: true,
				},
				pinch: {
					enabled: true,
				},
			},
		},
	},
};

const labels = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December",
];
const financialData = {
	labels,
	datasets: [
		{
			label: "current growth",
			data: Object.values(mockData.financial_data.revenue),
			borderColor: "rgb(53, 162, 235)",
			backgroundColor: "rgba(53, 162, 235, 0.5)",
		},
		{
			label: "projected growth +10%",
			data: getProjectedGrowth(),
			borderColor: "rgb(255, 99, 132)",
			backgroundColor: "rgba(255, 99, 132, 0.5)",
		},
		{
			label: "projected growth +20%",
			data: getProjectedGrowth(1.02),
			borderColor: "green",
			backgroundColor: "#4ca04c",
		},
	],
};

function getProjectedGrowth(percentage = 1.01) {
	let growth: number[] = [Object.values(mockData.financial_data.revenue)[0]];
	for (let i = 1; i < labels.length; i++) {
		let calc = Object.values(mockData.financial_data.revenue)[i] * percentage;
		growth.push(calc);
	}
	return growth;
}

export function RevenueChart() {
	const chartRef = useRef(null);
	const handleResetZoom = () => {
		if (chartRef && chartRef.current) {
			// @ts-ignore
			chartRef.current.resetZoom();
		}
	};
	return (
		<div className="chart-container">
			<Line
				ref={chartRef}
				options={options}
				data={financialData}
			/>
			<button onClick={handleResetZoom}>Reset Zoom</button>
		</div>
	);
}
