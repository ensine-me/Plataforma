import * as React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs) {
  return { name, calories, fat, carbs };
}

export default function CustomizedTables({
  array1child,
  array2child,
  array3child,
  array4child
}) {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const updateRows = () => {
      // const array1 = JSON.parse(sessionStorage.getItem("array1"));
      // const array2 = JSON.parse(sessionStorage.getItem("array2"));
      // const array3 = JSON.parse(sessionStorage.getItem("array3"));
      // const array4 = JSON.parse(sessionStorage.getItem("array4"));

      const array1 = array1child;
      const array2 = array2child;
      const array3 = array3child;
      const array4 = array4child;

      // console.log("array1: " + array1);
      // console.log("array2: " + array2);
      // console.log("array3: " + array3);
      // console.log("array4: " + array4);

      let newRows = [];
      if (array1 !== null) {
        newRows = array1.map((_, index) => {
          return createData(array1[index], array2[index], 'R$: ' + array3[index], array4[index]);
        });
      }

      setRows(newRows);
    };

    updateRows();

    window.addEventListener("sessionStorageUpdate", updateRows);

    return () => {
      window.removeEventListener("sessionStorageUpdate", updateRows);
    };
  }, [array1child, array2child, array3child, array4child]);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 600 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Título</StyledTableCell>
            <StyledTableCell align="left">Data</StyledTableCell>
            <StyledTableCell align="left">Valor&nbsp;</StyledTableCell>
            <StyledTableCell align="left">Materia&nbsp;</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="left">{row.calories}</StyledTableCell>
              <StyledTableCell align="left">{row.fat}</StyledTableCell>
              <StyledTableCell align="left">{row.carbs}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}