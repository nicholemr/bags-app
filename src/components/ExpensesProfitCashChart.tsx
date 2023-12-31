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
			text: "Revenue vs Expenses vs Cash Flow",
			font: {
				size: 20,
			},
		},
		zoom: {
			limits: {
				x: { min: 0, max: 13, minRange: 50 },
				y: { min: 20000, max: 55000, minRange: 50 },
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
			label: "revenue",
			data: Object.values(mockData.financial_data.revenue),
			borderColor: "rgb(53, 162, 235)",
			backgroundColor: "rgba(53, 162, 235, 0.5)",
		},
		{
			label: "expenses",
			data: Object.values(mockData.financial_data.expenses),
			borderColor: "rgb(255, 99, 132)",
			backgroundColor: "rgba(255, 99, 132, 0.5)",
		},
		{
			label: "cash flow",
			data: Object.values(mockData.financial_data.cash_flow),
			borderColor: "green",
			backgroundColor: "#4ca04c",
		},
	],
};

export function ExpensesProfitCashChart() {
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
