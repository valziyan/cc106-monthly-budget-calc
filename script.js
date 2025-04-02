// Create a Budget tracker object
const BudgetTracker = {
    // 1. Data Storage
    initialBudget: 0,
    transactions: [],
    totalIncome: 0,
    totalExpense: 0,

    // 2. Core Methods
    createTransaction: function (name, category, type, amount) {
        return {
            name: name,
            category: category,
            type: type,
            amount: amount,
            date: new Date(),
        };
    },

    setInitialBudget: function (amount) {
        this.initialBudget = amount;
        const initialTransaction = this.createTransaction(
            "Initial Budget",
            "Starting Balance",
            "Initial Money",
            amount
        );
        this.transactions.push(initialTransaction);
        this.updateDisplay();
    },

    addTransaction: function (name, category, type, amount) {
        const newTransaction = this.createTransaction(
            name,
            category,
            type,
            amount
        );
        this.transactions.push(newTransaction);

        if (type === "Income") {
            this.totalIncome += amount;
        } else {
            this.totalExpense += amount;
        }

        this.updateDisplay();
    },

    // 3. Calculations
    calculateBalance: function () {
        return this.initialBudget + this.totalIncome - this.totalExpense;
    },

    // 4. Display Updates
    updateDisplay: function () {
        this.updateSummary();
        this.updateTransactionTable();
        console.log(this.transactions);
    },

    updateSummary: function () {
        document.getElementById("summary").innerHTML = `
            <p>Initial Budget: P ${this.initialBudget.toFixed(2)}</p>
            <p>Income: + P ${this.totalIncome.toFixed(2)}</p>
            <p>Expense: - P ${this.totalExpense.toFixed(2)}</p>
            <p>Total Balance: P ${this.calculateBalance().toFixed(2)}</p>
        `;
    },

    updateTransactionTable: function () {
        const tableBody = document.getElementById("transactionTable");
        tableBody.innerHTML = "";

        this.transactions.forEach((transaction, rowIndex) => {
            const row = tableBody.insertRow();
            const cells = [
                transaction.name,
                transaction.category,
                transaction.type,
                transaction.amount.toFixed(2),
            ].map((content) => {
                const cell = row.insertCell();
                cell.textContent = content;
                cell.className = "p-3 border border-gray-800";
                // Make first row bold
                if (rowIndex === 0) {
                    cell.className += " font-bold";
                }
                return cell;
            });
        });
    },

    // 5. Form Handling
    handleInitialBudgetForm: function (event) {
        event.preventDefault();
        const amount = parseFloat(
            document.getElementById("initialBudget").value
        );

        if (amount && amount > 0) {
            this.setInitialBudget(amount);
            document.getElementById("budgetForm").reset();
        } else {
            alert("Please enter a valid amount");
        }
    },

    handleTransactionForm: function (event) {
        event.preventDefault();

        // Check if initial budget is set
        if (this.initialBudget <= 0) {
            alert(
                "Please set your initial budget first before adding transactions!"
            );
            return;
        }

        const transactionData = {
            name: document.getElementById("transactionName").value,
            category: document.getElementById("category").value,
            type: document.querySelector('input[name="type"]:checked').value,
            amount: parseFloat(document.getElementById("amount").value),
        };

        // Check if form fields has value
        if (
            !transactionData.name ||
            !transactionData.category ||
            !transactionData.amount ||
            transactionData.amount <= 0
        ) {
            alert("Please fill all fields with valid values");
            return;
        }

        // Check if expense is greater than total balance
        if (
            transactionData.type === "Expense" &&
            transactionData.amount > this.calculateBalance()
        ) {
            alert(
                "Insufficient balance! Cannot add expense greater than total balance."
            );
            return;
        }

        this.addTransaction(
            transactionData.name,
            transactionData.category,
            transactionData.type,
            transactionData.amount
        );

        document.getElementById("transactionForm").reset();
    },

    // Initialization method
    init: function () {
        // Bind form submit handlers
        document
            .getElementById("budgetForm")
            .addEventListener("submit", (event) => {
                this.handleInitialBudgetForm(event);
            });

        document
            .getElementById("transactionForm")
            .addEventListener("submit", (event) => {
                this.handleTransactionForm(event);
            });

        // Add form validation
        const forms = document.querySelectorAll("form");
        forms.forEach((form) => {
            form.addEventListener("submit", function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add("was-validated");
            });
        });
    },
};

// Initialize the budget tracker when the page loads
document.addEventListener("DOMContentLoaded", function () {
    BudgetTracker.init();
});
