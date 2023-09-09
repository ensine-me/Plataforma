import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function MultilineTextFields({onChange}) {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
       
        <TextField
          id="outlined-multiline-static"
          label="Descrição da aula"
          multiline
          rows={4}
          defaultValue=""
          onChange={onChange}
        />
      </div>
    </Box>
  );
}