import { mockData } from "../mockData/mockData";

export function DebtComponent() {
	return (
		<div className="header-container">
			<h2> Total Debt: ${mockData.financial_data.total_debt} </h2>
			<p> Total Minimum Monthly Payment: $20</p>
		</div>
	);
}
