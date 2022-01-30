import react from "react";
import ExpenseForm from "./ExpenseForm";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import './NewExpense.css'

function NewExpense({onSetNewExpense}) {
    const saveExpense = (data) => {
        const expenseData = {
            ...data,
            id: Math.random().toString(),
        }
        onSetNewExpense(expenseData);
    }
    const setYear = (year) => {
        console.log(year);
    }
    return (
        <div className="new-expense">
            <ExpensesFilter onYearChange={setYear}></ExpensesFilter>
            <ExpenseForm saveExpenseDataHandler={saveExpense} />
        </div>
    );
};

export default NewExpense;