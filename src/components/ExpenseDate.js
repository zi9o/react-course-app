import React from "react";

function ExpenseDate(props) {
  let month = props.date.toLocaleString("en-US", { month: "long" });
  let day = props.date.toLocaleString("en-US", { day: "numeric" });
  let year = props.date.toLocaleString("en-US", { year: "numeric" });
  //   React.useEffect(() => {
  //     month = props.date.toLocalString("en-US", { month: "long" });
  //     day = props.date.toLocalString("en-US", { day: "numeric" });
  //     year = props.date.toLocalString("en-US", { year: "numeric" });
  //   }, [props]);

  return (
    <div className="align-items-center d-flex flex-column justify-content-center mx-2 px-3 py-2">
      <div className="expense__month">{month}</div>
      <div className="expense__day">{day}</div>
      <div className="expense__year">{year}</div>
    </div>
  );
}

export default ExpenseDate;
