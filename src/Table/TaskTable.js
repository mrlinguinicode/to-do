import React from "react";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

const TaskTable = ({ item, handleEdit, deleteTask, markComplete }) => {
  return (
    <TableRow key={item.id}>
      <TableCell component="th" scope="row">
        {item.task}
      </TableCell>
      <TableCell align="center">
        <button onClick={(event) => handleEdit(event, item)}>edit</button> /{" "}
        <button
          onClick={() => {
            console.log(item);
            deleteTask(item);
          }}
        >
          delete
        </button>{" "}
        /{" "}
        <button
          onClick={() => {
            console.log(item);
            markComplete(item);
          }}
        >
          complete
        </button>
      </TableCell>
    </TableRow>
  );
};

export default TaskTable;
