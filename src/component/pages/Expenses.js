import { useRef } from "react";
import { Button } from "react-bootstrap";

const Expenses = () => {
  const amountRef = useRef();
  const descriptionRef = useRef();
  const categoryRef = useRef();

  const expenseHandler = (e) => {
    e.preventDefault();
    const amount = amountRef.current.value;
    const description = descriptionRef.current.value;
    const category = categoryRef.current.value;
    localStorage.setItem("amount", amount);
    localStorage.setItem("description", description);
    localStorage.setItem("category", category);
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
      <p>
        <h4>{localStorage.getItem("description")}</h4>
        <h4>{localStorage.getItem("category")}</h4>
        <h4>{localStorage.getItem("amount")}</h4>
      </p>
    </>
  );
};
export default Expenses;
