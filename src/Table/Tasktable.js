import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const TaskTable = ({ data }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Todo</TableCell>
            <TableCell>Options</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item) => {
            return (
              <TableRow key={item.id}>
                <TableCell component="th" scope="row">
                  {item.task}
                </TableCell>
                <TableCell>Edit</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TaskTable;
