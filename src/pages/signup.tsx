import React, { useState } from "react";

import Grid, { GridSpacing } from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import FilledInput from "@material-ui/core/FilledInput";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import TextField from "@material-ui/core/TextField";

import AppIcon from "../images/icon.png";
import Button from "@material-ui/core/Button";
import axios from "axios";
import { useHistory } from "react-router";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > *": {
        margin: theme.spacing(1),
      },
    },
    form: {
      textAlign: "center",
    },
    textField: { marginBottom: "10px" },
    button: {
      marginTop: "20px",
    },
    customError: {
      color: theme.palette.error.main,
      fontSize: "0.8rem",
    },
    spinner: {
      color: "white",
    },
  })
);

interface Props {}

const Signup = (props: Props) => {
  let history = useHistory();

  const [credentials, setCredentials] = useState({
    email: "xx@xx.pl",
    password: "123123",
    confirmPassword: "123123",
    handle: "xx",
  });
  const [loading, setLoading] = useState(false);

  const initialErrors = {
    email: "",
    password: "",
    general: "",
    confirmPassword: "",
    handle: "",
  };
  const [errors, setErrors] = useState(initialErrors);

  const classes = useStyles();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    axios
      .post("/signup", credentials)
      .then((res) => {
        localStorage.setItem("FBIdToken", `Bearer ${res.data.token}`);
        history.push("/");
      })
      .catch((err) => {
        // console.log(err.response.data);
        setErrors({ ...initialErrors, ...err.response.data });
        setLoading(false);
      });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.persist();
    setCredentials((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <Grid container justify="center" spacing={1}>
        <Grid xs={12} md={4} item></Grid>
        <Grid xs={12} md={4} item>
          <img src={AppIcon} alt="AppIcon" />
          <form
            onSubmit={handleSubmit}
            className={classes.form}
            noValidate
            autoComplete="off"
          >
            <Typography variant="h3" component="h1">
              Signup
            </Typography>
            <TextField
              id="handle"
              name="handle"
              type="text"
              label="Handle"
              className={classes.textField}
              value={credentials.handle}
              onChange={handleChange}
              helperText={errors.handle !== "" && errors.handle}
              error={errors.handle !== ""}
              fullWidth
            />
            <TextField
              id="email"
              name="email"
              type="email"
              label="Email"
              className={classes.textField}
              value={credentials.email}
              onChange={handleChange}
              helperText={errors.email !== "" && errors.email}
              error={errors.email !== ""}
              fullWidth
            />
            <TextField
              id="password"
              name="password"
              type="password"
              label="Password"
              className={classes.textField}
              value={credentials.password}
              onChange={handleChange}
              helperText={errors.password !== "" && errors.password}
              error={errors.password !== ""}
              fullWidth
            />
            <TextField
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              label="Confirm password"
              className={classes.textField}
              value={credentials.confirmPassword}
              onChange={handleChange}
              helperText={
                errors.confirmPassword !== "" && errors.confirmPassword
              }
              error={errors.confirmPassword !== ""}
              fullWidth
            />

            {errors.general !== "" && (
              <Typography variant="body2" className={classes.customError}>
                {errors.general}
              </Typography>
            )}
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.button}
              fullWidth
            >
              {loading ? (
                <CircularProgress
                  className={classes.spinner}
                  color="secondary"
                />
              ) : (
                "Signup"
              )}
            </Button>
            <Typography variant="body2">
              Allready have an account? <Link to="/login">Login here</Link>.
            </Typography>
          </form>
        </Grid>
        <Grid xs={12} md={4} item></Grid>
      </Grid>
    </>
  );
};

export default Signup;
