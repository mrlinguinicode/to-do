import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Switch from "@mui/material/Switch";

function App() {
  return (
    <div>
      <div className="title">
        <h1>TODO LIST</h1>
      </div>

      <div className="todo-input">
        <TextField placeholder="Enter task" multiline />
        <div className="add">
          <Button className="add" variant="contained" size="large">
            Add
          </Button>
        </div>
      </div>

      <div className="todo-items">
        <div className="item">
          <p className="text">hello</p>
          <div className="delete">
            <Button variant="contained" color="success">
              Completed
            </Button>
            <Button variant="contained" color="error">
              Delete
            </Button>
          </div>
        </div>
        <div className="item">
          <p>waddup</p>
          <div className="delete">
            <Button variant="contained" color="success">
              Completed
            </Button>
            <Button variant="contained" color="error">
              Delete
            </Button>
          </div>
        </div>
        <div className="item">
          <p>hello</p>
          <div className="delete">
            <Button variant="contained" color="success">
              Completed
            </Button>
            <Button variant="contained" color="error">
              Delete
            </Button>
          </div>
        </div>
        <div className="item">
          <p>waddup</p>
          <div className="delete">
            <Button variant="contained" color="success">
              Completed
            </Button>
            <Button variant="contained" color="error">
              Delete
            </Button>
          </div>
        </div>
        <div className="item">
          <p>hello</p>
          <div className="delete">
            <Button variant="contained" color="success">
              Completed
            </Button>
            <Button variant="contained" color="error">
              Delete
            </Button>
          </div>
        </div>
        <div className="item">
          <p>waddup</p>
          <div className="delete">
            <Button variant="contained" color="success">
              Completed
            </Button>
            <Button variant="contained" color="error">
              Delete
            </Button>
          </div>
        </div>
        <div className="item">
          <p>waddup</p>
          <div className="delete">
            <Button variant="contained" color="success">
              Completed
            </Button>
            <Button variant="contained" color="error">
              Delete
            </Button>
          </div>
        </div>
        <div className="item">
          <p>waddup</p>
          <div className="delete">
            <Button variant="contained" color="success">
              Completed
            </Button>
            <Button variant="contained" color="error">
              Delete
            </Button>
          </div>
        </div>
        <div className="item">
          <p>waddup</p>
          <div className="delete">
            <Button variant="contained" color="success">
              Completed
            </Button>
            <Button variant="contained" color="error">
              Delete
            </Button>
          </div>
        </div>
        <div className="item">
          <p>waddup</p>
          <div className="delete">
            <Button variant="contained" color="success">
              Completed
            </Button>
            <Button variant="contained" color="error">
              Delete
            </Button>
          </div>
        </div>
        <div className="item">
          <p>waddup</p>
          <div className="delete">
            <Button variant="contained" color="success">
              Completed
            </Button>
            <Button variant="contained" color="error">
              Delete
            </Button>
          </div>
        </div>
        <div className="item">
          <p>waddup</p>
          <div className="delete">
            <Button variant="contained" color="success">
              Completed
            </Button>
            <Button variant="contained" color="error">
              Delete
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
