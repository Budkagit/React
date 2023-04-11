import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Button, TextField, Typography } from "@mui/material";
import axios from "axios"
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
export default function SignUp() {
  const [data,setData] = useState("");
  const [text,setText]=useState("");
  const [phone,setPhone]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const navigate = useNavigate()
  const  user = {
    username: text,
    phone:text,
    email:email,
    password:password,
}
console.log(user)
  const handleSubmit = (event: any) => {

    
  axios.post("http://localhost:4000/auth/signup",user)
  

   .then((res) => {
      
 navigate("/sign")
      console.log(res.data);
    })
    
  };

  
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        {/* <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}> */}
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            // value={text}
            
            onChange ={ (e)=>{
              setText(e.target.value)
            }}
            name="username"
            autoComplete="username"
            autoFocus
          />
             <TextField
            margin="normal"
            required
            fullWidth
            onChange ={ (e)=>{
              setPhone(e.target.value)
            }}
            name="phone"
            label="phone"
            type="phone"
            id="phone"
            autoComplete="phone"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            onChange ={ (e)=>{
              setEmail(e.target.value)
            }}
            name="email"
            label="email"
            type="email"
            id="email"
            autoComplete="email"
          />
           <TextField
            margin="normal"
            required
            fullWidth
            onChange ={ (e)=>{
              setPassword(e.target.value)
            }}
            name="password"
            label="password"
            type="password"
            id="password"
            autoComplete="current-password"
          />

          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            onClick={handleSubmit}
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
      </Box>
    </Container>
  );
}

