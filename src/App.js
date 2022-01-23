import './App.css';
import ExpenseItem from './components/ExpenseItem';

function App() {
  const itemsArr = [
    {id:123,title:'Car insurance', amount: 100, date: '20.20.2022'},
    {id:55,title:'Car insurance', amount: 300, date: '20.20.2022'},
    {id:33,title:'Car insurance', amount: 105, date: '20.20.2022'},
    {id:12223,title:'Car insurance', amount: 45, date: '20.20.2022'},
  ]
  return (
    <div className="App">
    {itemsArr.map( item => (  
        <ExpenseItem name={item.title} amount={item.amount} date={item.date} key={item.id}></ExpenseItem>
    ))}  
    </div>
  );
}

export default App;
