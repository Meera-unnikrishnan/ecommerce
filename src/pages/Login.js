import React from 'react';
import { Grid, Paper, Avatar, TextField, Button, Typography, Link } from '@material-ui/core'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom';
import '../App.css';
import Navbar from '../components/Nav';
import {FormHelperText} from '@material-ui/core'


const Login = () => {
    const paperStyle = { padding: 20, height: '70vh', width: 350, margin: "20px auto" }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const bstyle = { margin: '8px 0' }
    const initialValues = {
        Username: '',
        Password: '',
        Rememberme: false
    }
    const validationSchema = Yup.object().shape({
        Username: Yup.string().email('please enter valid email').required("Required"),
        Password: Yup.string().min(8).max(12).required("Required"),
        Rememberme:Yup.string().oneOf(["true"],"Please Tick the Checkbox")
    })
    const navigate= useNavigate()
    const onSubmit = ( props) => {
        
        // setTimeout(() => {
        //     props.resetForm()
        //     props.setSubmitting(false)
        // }, 2000)
        console.log(props)
        navigate('/home');
        // fetch("http://localhost:3000/user",{

        //     method:"POST",

        //     headers:{'content-type': 'application/json'},
        //     body:JSON.stringify(props)

        // }).then((res)=>{

        //     alert("Login Successfully")

        //     navigate('/category');

        // })
        //.catch((err)=>{

        //     alert("Login fail")

        // });
       
    }
    return (
        <>
        <Navbar/>
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}><LockOutlinedIcon /></Avatar>
                    <h2>Sign In</h2>
                </Grid>
                <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                    {(props) => (
                        <Form>

                            <Field as={TextField} label='Username' name='Username' placeholder='Enter Username' fullWidth required helperText={<ErrorMessage name="Username"/>}
                            />
                            <Field as={TextField} label='Password' name='Password' placeholder='Enter Password' type='Password' fullWidth required helperText={<ErrorMessage name="Password"/>}
                            />
                            <FormControlLabel
                            control={<Field as={Checkbox} name="Rememberme" />}
                            label="Remember Me"
                        />
                        <FormHelperText>{<ErrorMessage name="Rememberme" />}</FormHelperText>
                            <Button type='submit' color='primary' variant='contained' disabled={props.isSubmitting} style={bstyle} fullWidth>{props.isSubmitting ? "Loading" : "Sign in"}</Button>

                        </Form>
                    )}
                </Formik>

                <Typography>
                    <Link href="#">
                        Forgot password ?
                    </Link>
                </Typography>
                <Typography>   Do you have an account ?
                    <Link href="/registration" >
                        Sign Up
                    </Link>
                </Typography>
            </Paper>
        </Grid>
        </>

    )
}
export default Login

