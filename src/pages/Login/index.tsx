import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  FilledInput,
  FormControl,
  IconButton,
  InputAdornment,
  Typography,
} from "@mui/material";
import React, { FormEvent } from "react";
import { Link } from "react-router-dom";
import KeySvg from "~assets/KeySvg";
import LoginSvg from "~assets/LoginSvg";
import MailSvg from "~assets/MailSvg";

const Login = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleLogin = (event: FormEvent) => {
    event.preventDefault();
    // const formData = new FormData(event.target as HTMLFormElement);
    // const email = formData.get("email");
    // const password = formData.get("password");
  };
  return (
    <Box sx={{ backgroundColor: "#F4F4F4" }} height="100vh" width="100%">
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          height: "100%",
          width: "100%",
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            display: {
              xs: "none",
              sm: "none",
              md: "block",
              lg: "block",
              xl: "block",
            },
          }}
        >
          <LoginSvg />
        </Box>

        <Box
          sx={{
            backgroundColor: "#ffffff",
            height: "80vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",

            position: "relative",
            zIndex: "10",

            padding: "30px",
            width: "45%",
            minWidth: "400px",

            margin: {
              xs: "auto",
              sm: "auto",
              md: "0 0 0 auto",
              lg: "0 0 0 auto",
              xl: "0 0 0 auto",
            },
          }}
        >
          <Box>
            <Typography
              color="#2F2F2F"
              fontSize={{
                xs: "32px",
                sm: "32px",
                md: "32px",
                lg: "32px",
                xl: "32px",
              }}
            >
              Welcome to
            </Typography>
            <Typography
              color="#0091ac"
              fontSize={{
                xs: "46px",
                sm: "46px",
                md: "46px",
                lg: "46px",
                xl: "46px",
              }}
              sx={{
                margin: "auto",
              }}
            >
              CEHSOFT
            </Typography>
          </Box>

          <form onSubmit={handleLogin}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <FormControl variant="filled">
                <FilledInput
                  placeholder="Enter email"
                  type="text"
                  startAdornment={
                    <InputAdornment position="start">
                      <MailSvg />
                    </InputAdornment>
                  }
                />
              </FormControl>

              <FormControl variant="filled">
                <FilledInput
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter password"
                  startAdornment={
                    <InputAdornment position="start">
                      <KeySvg />
                    </InputAdornment>
                  }
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
            </Box>

            <Box sx={{ mt: 3 }}>
              <Button
                variant="outlined"
                size="large"
                sx={{
                  backgroundColor: "#ffffff",
                  color: "#0091ac",
                  width: "100%",
                  ":hover": {
                    backgroundColor: "#0091ac",
                    color: "#ffffff",
                  },
                }}
              >
                Login
              </Button>
            </Box>

            <Box
              sx={{ display: "flex", justifyContent: "space-between", mt: 5 }}
            >
              <Typography sx={{ textDecoration: "none" }}>
                Don’t have an account?
                <Typography
                  component={Link}
                  to="/register"
                  color="#0091ac"
                  sx={{ textDecoration: "none", marginLeft: "2px" }}
                >
                  Register
                </Typography>
              </Typography>

              <Typography
                component={Link}
                to="#forgot-password"
                color="#0091ac"
                sx={{ textDecoration: "none" }}
              >
                Forgot Password?
              </Typography>
            </Box>
          </form>
        </Box>
      </Container>
    </Box>
  );
};

export default Login;
