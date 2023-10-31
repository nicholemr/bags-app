import "./App.css";
import { BankAccounts } from "./components/BankAccounts";
import { DebtComponent } from "./components/DebtComponent";
import { ExpensesProfitCashChart } from "./components/ExpensesProfitCashChart";
import { RevenueChart } from "./components/RevenueChart";

function App() {
	return (
		<div className="App">
			<h1>Sample Business Inc. Financial Stats</h1>
			<body>
				<header>
					<DebtComponent />
					<BankAccounts />
				</header>
				<main>
					<ExpensesProfitCashChart />
					<RevenueChart />
				</main>
			</body>
		</div>
	);
}

export default App;
