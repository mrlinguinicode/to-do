import { useEffect, useState } from "react";
import Axios from "axios";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Switch from "@mui/material/Switch";

//need to fix adjustable height of page

function App() {
  const [data, setData] = useState([]);
  const [todoItem, setTodoItem] = useState("");
  const [reset, setReset] = useState(true);

  const deleteTask = (props) => {
    //when using axios.delete must have "data:" for it to send the body content to server
    Axios.delete("http://localhost:3030/api/delete", {
      data: { task: props },
    }).then(() => {
      setReset(!reset);
    });
  };

  const submitTodo = () => {
    if (todoItem) {
      Axios.post("http://localhost:3030/api/insert", {
        todoItem: todoItem,
      })
        .then(() => {
          setReset(!reset);
          setTodoItem("");
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      return;
    }
  };

  useEffect(() => {
    Axios.get("http://localhost:3030/api/get").then((response) => {
      setData(response.data);
    });
  }, [reset]);

  if (data.length !== 0) {
    return (
      <div>
        <div className="title">
          <h1>TODO LIST</h1>
        </div>

        <div className="todo-input">
          <TextField
            value={todoItem}
            onChange={(e) => {
              setTodoItem(e.target.value);
            }}
            maxRows={4}
            placeholder="Enter task"
            multiline
          />
          <div className="add">
            <Button
              onClick={() => submitTodo()}
              className="add"
              variant="contained"
              size="large"
            >
              Add
            </Button>
          </div>
        </div>

        <div className="todo-items">
          {data.map((item, index) => {
            const task = item.task;
            return (
              <div key={index} className="item">
                <p className="text">{task}</p>
                <div className="delete">
                  <Button variant="contained" color="success">
                    Completed
                  </Button>
                  <Button
                    onClick={() => {
                      deleteTask(task);
                    }}
                    variant="contained"
                    color="error"
                  >
                    Delete
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className="title">
          <h1>TODO LIST</h1>
        </div>

        <div className="todo-input">
          <TextField
            onChange={(e) => {
              setTodoItem(e.target.value);
            }}
            maxRows={4}
            placeholder="Enter task"
            multiline
          />
          <div className="add">
            <Button
              onClick={() => submitTodo()}
              className="add"
              variant="contained"
              size="large"
            >
              Add
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
