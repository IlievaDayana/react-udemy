import { calculateNewValue } from "@testing-library/user-event/dist/utils";
import react from "react";
import { useState } from "react/cjs/react.development";
import './ExpenseForm.css'
function ExpenseForm({saveExpenseDataHandler}) {
    /************ two ways to declare STATE and CHANGE it */

    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');
    // let [userInput, setUserInput] = useState({
    //     title:'',
    //     amount:'',
    //     date:'',
    // });

    const handleTitleInput = (event) => {
        setTitle(event.target.value);

        // setUserInput({
        //     ...userInput,
        //     title: event.target.value
        // });

        /*********** IMPORTANT */
        // react does not update the state instantly so if we want the exact state we use  the callback 
        // so we make sure that we control the exact value;
        // setUserInput((prevValue)=>{
        //     if (prevValue.title === "a"){
        //         console.log('a');
        //     }
        //     return {
        //         ...prevValue,
        //         title:event.target.value
        //     }
        // })
    }

    const handleAmountInput = (event) => {
        setAmount(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     amount: event.target.value
        // });
    }

    const handleDateInput = (event) => {
        setDate(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     date: event.target.value
        // });
    }

    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title, amount, date
        }
        saveExpenseDataHandler(expenseData);
        setTitle('');
        setAmount('');
        setDate('');
    }
    return (

        <form onSubmit={submitHandler} className="new-expense__controls">
            <div className="new-expense__control">
                <label>
                    Title
                </label>
                <input onChange={handleTitleInput} value={title} type="text" />
            </div>
            <div className="new-expense__control">
                <label>
                    amount
                </label>
                <input type="number" onChange={handleAmountInput} value={amount} min="0" />
            </div>
            <div className="new-expense__control">
                <label>
                    date
                </label>
                <input type="date" onChange={handleDateInput} value={date} min="2020-12-20" />
            </div>
            <button type="submit">Add expense</button>
        </form>
    );
};

export default ExpenseForm;