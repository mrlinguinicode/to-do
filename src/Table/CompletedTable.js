import React from "react";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

const CompletedTable = ({ item, undoComplete }) => {
  return (
    <TableRow key={item.id}>
      <TableCell component="th" scope="row">
        {item.task}
      </TableCell>
      <TableCell align="center">
        <button
          onClick={() => {
            undoComplete(item);
          }}
        >
          undo
        </button>
      </TableCell>
    </TableRow>
  );
};

export default CompletedTable;
