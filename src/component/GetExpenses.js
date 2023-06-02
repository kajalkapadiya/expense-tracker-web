import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

const GetExpenses = (props) => {
  const [list, setList] = useState({});
  const arr = Object.entries(list);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(
        "https://expensetracker-677bd-default-rtdb.firebaseio.com/expenses.json"
      );

      const response = await data.json();
      // console.log(response);
      setList(response);
    };

    fetchData();
  }, [arr]);

  const deleteHandler = (key) => {
    console.log(key);
    fetch(
      `https://expensetracker-677bd-default-rtdb.firebaseio.com/expenses/${key}.json`,
      { method: "DELETE", headers: { "content-type": "application/json" } }
    );
  };

  const editHandler = async (key, amount, desc, cat) => {
    //  props.editKey = key;
    console.log(key);
    try {
      const res = await fetch(
        `https://expensetracker-677bd-default-rtdb.firebaseio.com/expenses/${key}.json`,
        {
          method: "PUT",
          body: JSON.stringify({
            amount: amount,
            description: desc,
            category: cat,
          }),
          headers: { "content-type": "application/json" },
        }
      );
      const data = await res.json();

      // console.log(props.getData.amount);

      props.getData.amount = data.amount;
      props.getData.description = data.description;
      props.getData.category = data.category;

      console.log(props.getData.amount);
      props.editHandler(key);

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <ul>
        {arr.map((result) => {
          return (
            <div key={result[0]}>
              <li>
                {result[1].description} {result[1].amount} {result[1].category}
                <Button
                  style={{ marginLeft: "5px" }}
                  variant="danger"
                  onClick={() => {
                    editHandler(
                      result[0],
                      result[1].amount,
                      result[1].description,
                      result[1].category
                    );
                  }}
                >
                  Edit
                </Button>
                <Button
                  style={{ marginLeft: "5px" }}
                  variant="danger"
                  onClick={() => {
                    deleteHandler(result[0]);
                  }}
                >
                  delete
                </Button>
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default GetExpenses;
