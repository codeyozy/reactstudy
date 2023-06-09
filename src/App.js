// import logo from './logo.svg';
// import './App.css';
// import Hello from "./components/hello";
import './App.css';
import { Component } from "react";
import ExpenseItem from './components/ExpenseItem';

const expenses = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date("2020, 7, 14"),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date("2021, 2, 12") },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date("2021, 2, 28"),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date("2021, 5, 12"),
  },
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}></ExpenseItem>
        <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}></ExpenseItem>
        <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}></ExpenseItem>
        <ExpenseItem title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date}></ExpenseItem>
      </div>
    )
  }
}
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
// function App() {
//   return <Hello title = "Hello, React" />;
// }
export default App;
