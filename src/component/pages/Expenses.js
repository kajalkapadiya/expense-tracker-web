import { useRef, useState } from "react";
import { Button } from "react-bootstrap";

const Expenses = () => {
  const [data, setData] = useState();
  const amountRef = useRef();
  const descriptionRef = useRef();
  const categoryRef = useRef();

  const expenseHandler = async (e) => {
    e.preventDefault();
    const amount = amountRef.current.value;
    const description = descriptionRef.current.value;
    const category = categoryRef.current.value;

    // add to firebase.

    const response = await fetch(
      "https://expensetracker-677bd-default-rtdb.firebaseio.com/expenses.json",
      {
        method: "POST",
        body: JSON.stringify({
          amount,
          description,
          category,
        }),
        headers: { "content-type": "application/json" },
      }
    );
    console.log(response);
    if (response) {
      setData({
        amount: amount,
        description: description,
        category: category,
      });
    } else {
      alert("fill the data");
    }
    console.log(data);
  };

  return (
    <>
      <form>
        <div>
          <input type="number" placeholder="Amount" ref={amountRef} />
        </div>
        <div>
          <input type="text" placeholder="description " ref={descriptionRef} />
        </div>
        <label>category</label>
        <select ref={categoryRef}>
          <option>Food</option>
          <option>petrol</option>
          <option>salary</option>
        </select>
        <Button variant="primary" onClick={expenseHandler}>
          submit
        </Button>
      </form>
     
    </>
  );
};
export default Expenses;
