import { Skeleton } from "@mui/material";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

function Expenses(props) {
  console.log(props)
  return (
    <div className="expenses d-flex flex-column">
      {props.expenses
        ? props.expenses.map((exp) => 
            (<ExpenseItem key={exp.id}
              title={exp.title}
              date={exp.date}
              amount={exp.amount}
            />)
          )
        : (
          <Skeleton color="red"></Skeleton>
        )}
    </div>
  );
}

export default Expenses;
