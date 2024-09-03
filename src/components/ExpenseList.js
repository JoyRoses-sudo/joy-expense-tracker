
import React from 'react';
import ExpenseItem from './ExpenseItem';
import '../styles/ExpenseList.css';

function ExpenseList({ expenses }) {
  return (
    <div className="list-container">
      {expenses.length === 0 ? (
        <p>No expenses added yet.</p>
      ) : (
        <ul>
          {expenses.map((expense, index) => (
            <ExpenseItem key={index} expense={expense} />
          ))}
        </ul>
      )}
    </div>
  );
}

export default ExpenseList;
