import { mockData } from "../mockData/mockData";

export function DebtComponent() {
	return (
		<div
			style={{
				border: "1px solid",
				borderRadius: "10px",
				padding: "10px",
				height: "fit-content",
				// alignSelf: "center",
			}}>
			<div style={{ borderBottom: "1px solid" }}>
				<h2> Total Debt: ${mockData.financial_data.total_debt} </h2>
				<p> Total Minimum Monthly Payment: $20</p>
			</div>
		</div>
	);
}
