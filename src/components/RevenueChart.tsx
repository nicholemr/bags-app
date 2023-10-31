import { Line } from "react-chartjs-2";
import { mockData } from "../mockData/mockData.js";
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

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
	Colors
);

export const options = {
	responsive: true,
	plugins: {
		legend: {
			position: "top" as const,
		},
		title: {
			display: true,
			text: "Revenue Growth",
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
		},
		{
			label: "projected growth +10%",
			data: getProjectedGrowth(),
			borderColor: "purple",
			backgroundColor: "purple",
		},
		{
			label: "projected growth +20%",
			data: getProjectedGrowth(1.02),
			borderColor: "green",
			backgroundColor: "green",
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
	return (
		<div style={{ height: "350px", minWidth: "300px" }}>
			<Line
				options={options}
				data={financialData}
			/>
		</div>
	);
}
