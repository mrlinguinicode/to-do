import React from "react";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { TextField } from "@mui/material";
import { useState } from "react";

const TableEdit = ({ item, updateTask }) => {
  const [edit, setEdit] = useState("");

  return (
    <TableRow key={item.id}>
      <TableCell component="th" scope="row">
        <TextField
          onChange={(e) => setEdit(e.target.value)}
          defaultValue={item.task}
        />
      </TableCell>
      <TableCell>
        <button onClick={() => updateTask(item, edit)}>save</button>
      </TableCell>
    </TableRow>
  );
};

export default TableEdit;
