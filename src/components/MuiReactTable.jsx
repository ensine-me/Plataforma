import * as React from 'react';
import { useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { sleep } from '@supabase/gotrue-js/dist/module/lib/helpers';

var array1 = JSON.parse(sessionStorage.getItem("array1"));
var array2 = JSON.parse(sessionStorage.getItem("array2"));
var array3 = JSON.parse(sessionStorage.getItem("array3"));
var array4 = JSON.parse(sessionStorage.getItem("array4"));

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

  // const rows = array1.map((_, index) => {
  //   return createData(array1[index], array2[index], 'R$: '+array3[index], array4[index]);
  // });

  const rows = [
    createData('Marcelo', '20/10/2023 - 19h30', 'R$20,00', 'Matemática'),
    createData('Vannucchi', '20/10/2023 - 19h30', 'R$20,00', 'Matemática'),
    createData('Marcelo', '20/10/2023 - 19h30', 'R$20,00', 'Matemática'),
    createData('Marcelo', '20/10/2023 - 19h30', 'R$20,00', 'Matemática'),
    createData('Marcelo', '20/10/2023 - 19h30', 'R$20,00', 'Matemática'),
  ];



export default function CustomizedTables() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 600 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Solicitante</StyledTableCell>
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