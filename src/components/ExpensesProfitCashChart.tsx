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
			text: "Revenue vs Expenses vs Cash Flow",
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
		},
		{
			label: "expenses",
			data: Object.values(mockData.financial_data.expenses),
			borderColor: "purple",
			backgroundColor: "purple",
		},
		{
			label: "cash flow",
			data: Object.values(mockData.financial_data.cash_flow),
			borderColor: "green",
			backgroundColor: "green",
			pointHoverBackgroundColor: "light green",
		},
	],
};

export function ExpensesProfitCashChart() {
	return (
		<div style={{ height: "350px", minWidth: "300px" }}>
			<Line
				options={options}
				data={financialData}
			/>
		</div>
	);
}
