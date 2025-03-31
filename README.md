# Monthly Budget Tracker - Student Notes

A simple web application to help user track their monthly expenses and income. Built with HTML, JavaScript, and Tailwind CSS.

## Features

-   Set initial budget
-   Track income and expenses
-   Real-time balance calculation
-   Transaction history with categorization
-   Responsive design for mobile and desktop
-   Input validation and error handling

## Key Functionalities

1. **Initial Budget Setting**

    - Must set initial budget before adding transactions
    - Initial budget appears in bold in the transaction list

2. **Transaction Management**

    - Add income and expenses
    - Categorize transactions
    - Prevents adding expenses greater than available balance
    - Maintains a detailed transaction history

3. **Financial Summary**
    - Shows initial budget
    - Displays total income
    - Shows total expenses
    - Calculates real-time balance

## Safety Features 🛡️

-   Prevents negative balance
-   Requires initial budget before transactions
-   Input validation for all forms
-   Amount must be greater than zero
-   All fields are required

## User Interface 🎨

-   Clean, modern design using Tailwind CSS
-   Two-column layout on desktop
-   Responsive design for mobile devices
-   Clear transaction history table
-   Easy-to-read financial summary

## How to Use 📝

1. **Set Initial Budget**

    - Enter your starting budget amount
    - Click "Add" to set initial budget

2. **Add Transactions**

    - Fill in transaction details:
        - Name
        - Category
        - Type (Income/Expense)
        - Amount
    - Click "Submit" to add transaction

3. **View Summary**
    - Check current balance
    - Monitor income and expenses
    - Review transaction history

## Technical Details 🔧

-   Built with vanilla JavaScript
-   Styled with Tailwind CSS
-   No database required (in-memory storage)
-   Mobile-first responsive design

## Installation 🚀

1. Clone the repository
2. Open index.html in your browser
3. No additional installation required

## Dependencies 📦

-   Tailwind CSS (via CDN)
-   No other external dependencies

## Browser Support 🌐

-   Chrome
-   Firefox
-   Safari
-   Edge
-   Other modern browsers

## Future Improvements 🔮

-   Data persistence using localStorage
-   Export transactions to CSV
-   Monthly budget planning
-   Transaction categories customization
-   Data visualization with charts
