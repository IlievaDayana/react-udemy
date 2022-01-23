import Card from './Card';
import './ExpenseItem.css';
import {useState} from 'react';

function ExpenseItem(props) {

   const [name,setName] = useState(props.name)
    const clickFunction = () => {
        setName('new')
        console.log('hello')
    }
    return (
        <Card className='expense-item'>
            <Card>{name}</Card>
            <Card className='expense-item__description'>
                <h2 onClick={clickFunction}>{props.date}</h2>
                <Card className='expense-item__price'>{props.amount}$</Card>
            </Card>
        </Card>);
}

export default ExpenseItem;