import "./App.css";
import { DebtComponent } from "./components/DebtComponent";
import { ExpensesProfitCashChart } from "./components/ExpensesProfitCashChart";
import { RevenueChart } from "./components/RevenueChart";

function App() {
	return (
		<div className="App">
			<h1>Sample Business Inc. Financial Stats</h1>
			<body
				style={{
					border: "1px solid red",
					padding: "20px",
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					gap: "15px",
					height: "fit-content",
				}}>
				<div
					style={{
						display: "flex",
						gap: "20px",
						border: "1px solid blue",
						justifyContent: "center",
					}}>
					<RevenueChart />
					<DebtComponent />
				</div>
				<div
					style={{
						display: "flex",
						gap: "20px",
						border: "1px solid blue",
						justifyContent: "center",
					}}>
					<ExpensesProfitCashChart />
				</div>
			</body>
		</div>
	);
}

export default App;
