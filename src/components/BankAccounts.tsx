import { mockData } from "../mockData/mockData";

export function BankAccounts() {
	return (
		<div className="header-container">
			<h2>Bank Accounts</h2>
			<div className="bank-accounts">
				<div>
					Checking: ${mockData.financial_data.bank_account_balance.checking}{" "}
				</div>
				<div>
					Savings: ${mockData.financial_data.bank_account_balance.savings}{" "}
				</div>
			</div>
		</div>
	);
}
