import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';
import TextField from '@material-ui/core/TextField';
import Alert from '@material-ui/lab/Alert';
// import '../App1.css';

export const AddTransaction = () => {

    const [amount, setAmount] = useState(0);
    const [errorText, setErrorText] = useState("")
    const { addTransaction, updateBalance, balance } = useContext(GlobalContext);

    const getCurrentDate = () => new Date().toISOString();


    const addExpenseClick = e => {
        e.preventDefault();
        if ((balance - amount) < 0) {
            document.querySelector('.err-trans-amount').style.display = 'flex';
            setErrorText("Insufficient balance")

        }
        else if (amount <= 0) {

            document.querySelector('.err-trans-amount').style.display = 'flex'
            setErrorText("Please enter a valid amount")

        } else {
            document.querySelector('.err-trans-amount').style.display = 'none'
            const newTransaction = {

                id: Math.floor(Math.random() * 1000000),
                text: getCurrentDate(),
                amount: -amount
            }

            addTransaction(newTransaction)
            updateBalance()
            setAmount(0);
        }
    }


    const addIncomeClick = e => {
        e.preventDefault();
        if (amount <= 0) {
            document.querySelector('.err-trans-amount').style.display = 'flex'
            setErrorText("Please enter a valid amount")
        } else {
            document.querySelector('.err-trans-amount').style.display = 'none'
            const newTransaction = {
                id: Math.floor(Math.random() * 1000000),
                text: getCurrentDate(),
                amount: +amount
            }

            addTransaction(newTransaction)
            updateBalance()
            setAmount(0);
        }

    }

    return (
        <>
            <form >

                <div className="form-control">
                    <Alert severity="error" className="err-trans-amount" style={{ display: 'none' }}>{errorText}</Alert>
                    <TextField type="number" id="outlined-basic" style={{ marginTop: '10px' }}  fullWidth={true} label="Add new transaction amount" variant="outlined" value={amount} onChange={(e) => { setAmount(Math.abs(e.target.value)) }} />
                </div>
                <div className="text-center margin-10">
                    <button className="income-btn submit-btn" onClick={addIncomeClick}>Add</button>
                    <button className="expense-btn submit-btn" onClick={addExpenseClick}>Remove</button>
                </div>
            </form>

        </>
    )
}
