import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Controller, FormProvider, useForm } from "react-hook-form";
import {useDispatch} from "react-redux";
import {useNavigate} from 'react-router-dom';
import { Register } from '../Store/authSlice';
import {Dropdown} from 'rsuite';



const theme = createTheme();

export default function SignUp() {

  const dispatch=useDispatch();
  const navigate=useNavigate();

  const formObjects=useForm({
    mode:'onSubmit',
    reValidateMode:'onChange',
    defaultValues:{
      email:"",
      userName:"",
      password:"",
      firstName:"",
      lastName:"",
      gender:"",
      address:"",
      phNo:""
    }
  })
  const { register, handleSubmit, control } = formObjects;
  const onSubmit = data => {
    dispatch(Register(data)).then((action)=>{
      navigate('/signIn')
      // if(action.payload.status==="Success"){
      //   console.log(action.payload.status);
      //   navigate('/signIn');
      // }
      // else{
      //   console.log(action.payload.status);
      // }
    })
    console.log(data)
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Register
          </Typography>
          <FormProvider {...formObjects}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
                <Controller
                render={({field})=>(
                    <TextField
                    {...field}
                      autoComplete="given-name"
                      required
                      fullWidth
                      //id="userName"
                      label="First Name"
                      autoFocus
                    />
                )}
                name='firstName'
                control={control}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <Controller
                render={({field})=>(
                    <TextField
                    {...field}
                      autoComplete="given-name"
                      required
                      fullWidth
                      //id="userName"
                      label="Last Name"
                      autoFocus
                    />
                )}
                name='lastName'
                control={control}
                />
              </Grid>
 
              
              <Grid item xs={12}>
              <Controller
                render={({field})=>(
                    <TextField
                    {...field}
                      autoComplete="given-name"
                      required
                      fullWidth
                      //id="email"
                      label="Email Address"
                      autoFocus
                    />
                )}
                name='email'
                control={control}
                />
                
              </Grid>

              <Grid item xs={12}>
              <Controller
                render={({field})=>(
                    <TextField
                    {...field}
                      autoComplete="given-name"
                      required
                      fullWidth
                      //id="email"
                      label="Phone no"
                      autoFocus
                    />
                )}
                name='phNo'
                control={control}
                />
                
              </Grid>
              <Grid item xs={12} sm={12}>
                <Controller
                render={({field})=>(
                    <TextField
                    {...field}
                      autoComplete="given-name"
                      required
                      fullWidth
                      //id="userName"
                      label="Address"
                      autoFocus
                    />
                )}
                name='address'
                control={control}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <Controller
                render={({field})=>(
                    <TextField
                    {...field}
                      autoComplete="given-name"
                      required
                      fullWidth
                      //id="userName"
                      label="User Name"
                      autoFocus
                    />
                )}
                name='userName'
                control={control}
                />
              </Grid>
              <Grid item xs={12}>
              <Controller
                render={({field})=>(
                    <TextField
                    {...field}
                      autoComplete="given-name"
                      required
                      fullWidth
                      //id="password"
                      label="Password"
                      autoFocus
                      type="password"
                    />
                )}
                name='password'
                control={control}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="receive updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/signin" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </form>
          </FormProvider>
        </Box>
      </Container>
    </ThemeProvider>
  );
}