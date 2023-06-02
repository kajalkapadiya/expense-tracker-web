import { useRef, useState } from "react";
import { Button } from "react-bootstrap";
import GetExpenses from "./GetExpenses";

const Expenses = (props) => {
  const [toggleButton, setToggleButoon] = useState(true);
  const [editKey, setEditKey] = useState(null);
  const [data, setData] = useState({
    amount: "",
    description: "",
    category: "",
  });

  const amountRef = useRef();
  const descriptionRef = useRef();
  const categoryRef = useRef();

  const inputHandler = () => {
    setData({
      amount: amountRef.current.value,
      description: descriptionRef.current.value,
      category: categoryRef.current.value,
    });
  };

  const expenseHandler = async (e) => {
    e.preventDefault();
    const amount = data.amount;
    const description = data.description;
    const category = data.category;

    // add to firebase.

    if (toggleButton) {
      const response = await fetch(
        "https://expensetracker-677bd-default-rtdb.firebaseio.com/expenses.json",
        {
          method: "POST",
          body: JSON.stringify({
            amount,
            description,
            category,
          }),
          headers: { "Content-type": "application/json" },
        }
      );
      console.log(response);
    } else {
      await fetch(
        `https://expensetracker-677bd-default-rtdb.firebaseio.com/expenses/${editKey}.json`,
        {
          method: "PUT",
          body: JSON.stringify({
            amount: data.amount,
            description: data.description,
            category: data.category,
          }),
          headers: { "content-type": "application/json" },
        }
      );
      console.log(data.amount);

      setToggleButoon(true);
      setData({ amount: "", description: "", category: "" });
    }
  };

  const editHandler = (key) => {
    setToggleButoon(false);
    setEditKey(key);
    console.log(`key is ${key}`);
  };

  // const editKey = (e) => {
  //   console.log(e);
  // };

  return (
    <>
      <form>
        <div>
          <input
            type="number"
            placeholder="Amount"
            ref={amountRef}
            onChange={inputHandler}
            value={data.amount}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="description "
            ref={descriptionRef}
            onChange={inputHandler}
            value={data.description}
          />
        </div>
        <label>category</label>
        <select ref={categoryRef} onChange={inputHandler} value={data.category}>
          <option>none</option>
          <option>Food</option>
          <option>petrol</option>
          <option>general</option>
          <option>home</option>
          <option>salary</option>
        </select>
        {toggleButton ? (
          <Button variant="primary" onClick={expenseHandler}>
            submit
          </Button>
        ) : (
          <Button variant="primary" onClick={expenseHandler}>
            Edit
          </Button>
        )}
      </form>
      <div>
        <GetExpenses
          getData={data}
          editHandler={editHandler}
          // editHandler={editKey}
        />
      </div>
    </>
  );
};
export default Expenses;
