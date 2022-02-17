import { useEffect, useState } from "react";
import Axios from "axios";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import TaskTable from "./Table/TaskTable";
import TableEdit from "./Table/TableEdit";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import CompletedTable from "./Table/CompletedTable";

//need to fix adjustable height of page

function App() {
  const [data, setData] = useState([]);
  const [todoItem, setTodoItem] = useState("");
  const [reset, setReset] = useState(true);
  const [editId, setEditId] = useState(null);
  const [update, setUpdate] = useState("");
  const [status, setStatus] = useState("incomplete");

  const markComplete = (item) => {
    Axios.put("https://01c2-2601-4c0-4180-3460-00-faa3.ngrok.io/api/update", {
      id: item.id,
      completed: 1,
    }).then(() => {
      setReset(!reset);
    });
  };

  const undoComplete = (item) => {
    Axios.put("https://01c2-2601-4c0-4180-3460-00-faa3.ngrok.io/api/update", {
      id: item.id,
      completed: 0,
    }).then(() => {
      setReset(!reset);
    });
  };

  const handleEdit = (event, item) => {
    event.preventDefault();
    setEditId(item.id);
    console.log(editId);
  };

  const deleteAll = () => {
    Axios.delete(
      "https://01c2-2601-4c0-4180-3460-00-faa3.ngrok.io/api/deleteall",
      {
        data: { empty: null },
      }
    ).then(() => {
      setReset(!reset);
    });
  };

  const updateTask = (item, newTask) => {
    Axios.put("https://01c2-2601-4c0-4180-3460-00-faa3.ngrok.io/api/update", {
      id: item.id,
      task: newTask,
    }).then(() => {
      setEditId(null);
      setReset(!reset);
    });
  };

  const deleteTask = (item) => {
    //when using axios.delete must have "data:" for it to send the body content to server
    Axios.delete(
      `https://01c2-2601-4c0-4180-3460-00-faa3.ngrok.io/api/delete/${item.id}`
    ).then(() => {
      setReset(!reset);
    });
  };

  const submitTodo = () => {
    if (todoItem) {
      Axios.post(
        "https://01c2-2601-4c0-4180-3460-00-faa3.ngrok.io/api/insert",
        {
          todoItem: todoItem,
        }
      )
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
    Axios.get("https://01c2-2601-4c0-4180-3460-00-faa3.ngrok.io/api/get").then(
      (response) => {
        setData(response.data);
        console.log(response.data);
      }
    );
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
        <div className="status">
          <button onClick={() => setStatus("inprogress")}>In-progress</button>
          <button onClick={() => setStatus("complete")}>Complete</button>
        </div>
        <div className="task-table">
          <TableContainer component={Paper}>
            <Table className="task-table">
              <TableHead>
                <TableRow>
                  <TableCell className="todo-cell">Todo</TableCell>
                  <TableCell align="center">Options</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((item) => {
                  if (status === "complete") {
                    return (
                      <>
                        {item.completed ? (
                          <CompletedTable
                            item={item}
                            undoComplete={undoComplete}
                          />
                        ) : null}
                      </>
                    );
                  } else {
                    if (!item.completed) {
                      return (
                        <>
                          {editId !== item.id ? (
                            <TaskTable
                              item={item}
                              handleEdit={handleEdit}
                              deleteTask={deleteTask}
                              markComplete={markComplete}
                            />
                          ) : (
                            <TableEdit item={item} updateTask={updateTask} />
                          )}
                        </>
                      );
                    } else {
                      return null;
                    }
                  }
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
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
