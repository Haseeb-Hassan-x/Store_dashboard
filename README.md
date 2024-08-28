# Payouts Dashboard

This project is a React-based dashboard for managing payouts, orders, and transactions. The application features a sidebar for navigation, a top bar for quick search and user options, and various components to display an overview of financial data, transactions, and other relevant information.

## Project Structure

The project is structured as follows:


## Components

### `App.jsx`

The main application component that combines all the other components to form the dashboard layout. It includes:

- `Sidebar` for navigation
- `Topbar` for search and user actions
- `Overview` for displaying financial summaries
- `Transactions` and `Table` for detailed transaction data
- `Footer` with developer information

### `Overview.jsx`

Displays an overview section with various financial cards (e.g., next payout, amount pending, amount processed).

### `Table.jsx`

Contains a table that lists orders with details such as Order ID, status, transaction ID, refund date, and order amount.

### `Sidebar.jsx`

A sidebar for navigation, including links to various sections such as Home, Orders, Products, Delivery, and more.

### `Footer.jsx`

A footer with the developer's name and a link to the source code.

### `BlueCard.jsx` & `RevenueCard.jsx`

Reusable components to display financial data cards.

### `Transactions.jsx`

Displays a summary of transactions for the current month.

### `Tabletop.jsx`

Contains search and sorting functionality for the table.

## Data

The `data.jsx` file contains sample data for populating the orders table. This can be replaced with real data from an API or a database.

## Styling

The project uses Tailwind CSS for styling. The classes are applied directly within the JSX components for a utility-first CSS approach.

## Contributing

Contributions are welcome! If you have any ideas or improvements, feel free to submit a pull request.
