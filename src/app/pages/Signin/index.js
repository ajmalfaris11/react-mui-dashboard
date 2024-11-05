import { Box, Button, TextField, Typography } from '@mui/material';
import React from 'react'

export default function SignInPage() {
  return (
    <Box
    sx={{
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <Box
      sx={{
        width: 400,
        textAlign: 'center',
        padding: 5,
        backgroundColor: 'white',
        boxShadow: 3,
        borderRadius: 2,
        
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: 'black',
          },
          '&:hover fieldset': {
            borderColor: 'darkgray',
          },
          '&.Mui-focused fieldset': {
            borderColor: 'black',
          },
        },
      }}
    >
      <Typography variant="h5" sx={{ mb: 3 }}>
        Sign In
      </Typography>
      <TextField
        label="Email Address"
        variant="outlined"
        fullWidth
        sx={{ mb: 2 }}
        color='black'
      />
      <TextField
        label="Password"
        variant="outlined"
        type="password"
        fullWidth
        sx={{ mb: 3 }}
        color='black'
      />
      <Button
        variant="contained"
        color="primary"
        fullWidth
        sx={{
          backgroundColor: 'black',
          '&:hover': {
            backgroundColor: '#333',
          },
        }}
      >
        SIGN IN
      </Button>
    </Box>
  </Box>
);
}

 