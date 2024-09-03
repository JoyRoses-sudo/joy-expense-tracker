
import React from 'react';
import '../styles/ExpenseItem.css';

function ExpenseItem({ expense }) {
  return (
    <li className="expense-item">
      <span>{expense.description}: </span>
      <strong>${expense.amount.toFixed(2)}</strong>
    </li>
  );
}

export default ExpenseItem;
