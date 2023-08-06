import * as React from "react";
import {
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableContainer,
  Paper,
  Card,
  Button,
  Stack,
  TableCell,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import classes from "../App.module.scss";

const items = [
  { desc: "Item 1", qty: "10", price: "1000", sum: "" },
  { desc: "Item 2", qty: "10", price: "1000", sum: "" },
  { desc: "Item 3", qty: "10", price: "1000", sum: "" },
  { desc: "Item 4", qty: "10", price: "1000", sum: "" },
  { desc: "Item 5", qty: "10", price: "1000", sum: "" },
];

const ProductTable = () => {
  return (
    <Card>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="spanning table">
          <TableHead>
            <TableRow>
              <TableCell align="center" colSpan={3}>
                Details
              </TableCell>
              <TableCell align="right">Price</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Desc</TableCell>
              <TableCell align="right">Qty.</TableCell>
              <TableCell align="right">Unit</TableCell>
              <TableCell align="right">Sells</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map((item) => (
              <TableRow key={item.desc}>
                <TableCell>{item.desc}</TableCell>
                <TableCell align="right">{item.qty}</TableCell>
                <TableCell align="right">{item.price}</TableCell>
                <TableCell align="right">{item.sum}</TableCell>
              </TableRow>
            ))}

            <TableRow>
              <TableCell rowSpan={3} />
              <TableCell colSpan={2}>Over-All</TableCell>
              <TableCell align="right">0000</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
};

export default ProductTable;
