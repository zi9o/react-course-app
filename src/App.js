import "./App.css";
import Expenses from "./components/Expenses";
import Modal from "./components/Modal";
import Todo from "./components/Todo";

function App() {
  const expenses = [
    {
      id: "1",
      title: "first",
      date: new Date(2022, 2, 24),
      amount: 435.87,
    },
    {
      id: "2",
      title: "second",
      date: new Date(2022, 2, 24),
      amount: 23.87,
    },
  ];

  return (
    <div className="d-flex flex-column align-items-center">
      <div>Getting started</div>
      <Expenses expenses={expenses}></Expenses>
    </div>
  );
}

export default App;
