import { useEffect, useState } from "react";
import Axios from "axios";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import TaskTable from "./Table/Tasktable";
import TableEdit from "./Table/TableEdit";

//need to fix adjustable height of page

function App() {
  const [data, setData] = useState([]);
  const [todoItem, setTodoItem] = useState("");
  const [reset, setReset] = useState(true);
  const [edit, setEdit] = useState(false);
  const [update, setUpdate] = useState("");

  const deleteAll = () => {
    Axios.delete("http://localhost:3030/api/deleteall", {
      data: { empty: null },
    }).then(() => setReset(!reset));
  };

  const updateTask = (oldtask, newtask) => {
    Axios.put("http://localhost:3030/api/update", {
      oldtask: oldtask,
      newtask: newtask,
    }).then(() => {
      setReset(!reset);
    });
  };

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
        <div className="title-container">
          <div className="title">
            <h1>TODO LIST</h1>
          </div>
        </div>

        <div className="remove-all">
          <Button
            onClick={() => deleteAll()}
            variant="contained"
            size="medium"
            color="error"
          >
            Remove All Tasks
          </Button>
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
        <div>
          <TaskTable data={data} />
        </div>
        <TableEdit />

        {/* <div className="todo-items">
          {data.map((item, index) => {
            const task = item.task;
            return (
              <div key={index} className="item">
                {edit ? (
                  <TextField
                    className="edit-text"
                    multiline
                    rows={5}
                    disabled={false}
                    defaultValue={task}
                  />
                ) : (
                  <p className="text">{task}</p>
                )}
                <input onChange={(e) => setUpdate(e.target.value)}></input>
                <button onClick={() => updateTask(task, update)}>edit</button>
                <div className="delete">
                  <Button
                    onClick={() => {
                      console.log(index);
                      setEdit(!edit);
                    }}
                    variant="contained"
                    color="success"
                  >
                    Mark as Complete
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
        </div> */}
      </div>
    );
  } else {
    return (
      <div>
        <div className="title-container">
          <div className="title">
            <h1>TODO LIST</h1>
          </div>
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
