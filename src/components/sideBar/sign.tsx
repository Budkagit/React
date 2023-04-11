import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Button, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Home from "./alert";
export default function SignIn() {
  const [data, setData] = useState("");
  const [text, setText] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event: any) => {
    const user = {
      username: text,
      password: password,
    };
    // alert("a");
    axios.post("http://localhost:4000/auth/login", user).then((res) => {
      setData(res.data);
      navigate("/home", {
        state: {
          username: res.data.username
        }
      });

      localStorage.setItem("token", res.data.token);
      console.log(res.data);
    });
  };
  // const handleData = (event:any)=>{
  //     setData(event.target.value)
  // }

  return (
    <Container className="container" component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Sign in 
        </Typography>
        {/* <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}> */}
        <Home></Home>
        <TextField
          margin="normal"
          required
          fullWidth
          id="username"
          label="Username"
          // value={text}

          onChange={(e) => {
            setText(e.target.value);
          }}
          name="username"
          autoComplete="username"
          autoFocus
        />
        <TextField
          margin="normal"
          required
          fullWidth
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          name="password"
          label="Password"
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
          Sign In
        </Button>
        <Grid container>
          <Grid item xs>
            <Link href="#" variant="body2">
              Forgot password?
            </Link>
          </Grid>
          <Grid item>
            <Link href="#" variant="body2">
              {"Don't have an account? Sign Up"}
            </Link>
          </Grid>
        </Grid>
        {/* </Box> */}
      </Box>
    </Container>
  );
}
