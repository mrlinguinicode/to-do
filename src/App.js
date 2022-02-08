import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function App() {
  return (
    <div>
      <div className="title">
        <h1>TODO LIST</h1>
      </div>

      <div className="todo-input">
        <TextField placeholder="Enter text" multiline />
        <div>
          <Button className="add" variant="contained" size="large">
            Add
          </Button>
        </div>
      </div>

      <div className="todo-items">
        <div className="item">
          <p>hello</p>
        </div>
        <div className="item">
          <p>waddup</p>
        </div>
        <div className="item">
          <p>hello</p>
        </div>
        <div className="item">
          <p>waddup</p>
        </div>
        <div className="item">
          <p>hello</p>
        </div>
        <div className="item">
          <p>waddup</p>
        </div>
      </div>
    </div>
  );
}

export default App;
