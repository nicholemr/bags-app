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
} from "chart.js";

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
);

export const options = {
	responsive: true,
	plugins: {
		legend: {
			position: "top" as const,
		},
		title: {
			display: true,
			text: "Revenue Line Chart",
		},
	},
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];
const financialData = {
	labels,
	datasets: [
		{ label: "revenue", data: Object.values(mockData.financial_data.revenue) },
	],
	borderColor: "rgb(255, 99, 132)",
	backgroundColor: "rgba(255, 99, 132, 0.5)",
};

export function RevenueChart() {
	return (
		<Line
			options={options}
			data={financialData}
		/>
	);
}
