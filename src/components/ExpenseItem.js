import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css"

function ExpenseItem(props) {
  return (
    <div className="expense-item d-flex justify-content-between align-items-center p-2">
      <ExpenseDate
        className="expense-item__date"
        date={props.date}
      ></ExpenseDate>
      <div className="expense-item__title">{props.title}</div>
      <div className="expense-item__amount">{props.amount}</div>
    </div>
  );
}

export default ExpenseItem;
