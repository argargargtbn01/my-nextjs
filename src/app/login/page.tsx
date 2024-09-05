'use client'
import {
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Typography,
  Link,
  Box,
  Grid,
} from "@mui/material";
import { useState } from "react";
import { auth } from "../firebase/firebase-client";
import { signInWithEmailAndPassword, UserCredential } from "firebase/auth";

export default function Login() {
  const [email, setEmail] = useState("a");
  const [password, setPassword] = useState("a");
  const [error, setError] = useState("a");
  const handleSubmit = async () => {
    // e.preventDefault();
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    // const user = userCredential.user;
    // const token = await user.getIdToken(); // Fetch Firebase JWT token

    // Send token to BE for validation
    // const response = await fetch("/api/login", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ token }),
    // });

    // if (response.ok) {
    //   // Handle successful login (e.g., redirect)
    // } else {
    //   throw new Error("Failed to authenticate");
    // }
  };
  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      {/* Left Side Image */}
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: "url(/image.png)", // Your image file
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Right Side - Login Form */}
      <Grid item xs={12} sm={8} md={5}>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="Email Address"
              label="Email Address"
              name="Email Address"
              autoComplete="Email Address"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Save password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Login
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/register" variant="body2">
                  {"Don't have account? Register"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
