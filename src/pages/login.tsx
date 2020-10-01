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

import AppIcon from "../images/icon.png";
import Button from "@material-ui/core/Button";
import axios from "axios";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > *": {
        margin: theme.spacing(1),
      },
    },
  })
);

interface Props {}
const Login = (props: Props) => {
  const [credentials, setcredentials] = useState({ email: "", password: "" });
  const classes = useStyles();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(credentials);
    axios
      .post("/login", credentials)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.persist();
    setcredentials((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <Grid container justify="center" spacing={1}>
        <Grid xs={12} md={4} item></Grid>
        <Grid xs={12} md={4} item>
          <div>
            <img src={AppIcon} alt="AppIcon" />
          </div>
          <form
            onSubmit={handleSubmit}
            className={classes.root}
            noValidate
            autoComplete="off"
          >
            <Typography variant="h3" component="h1">
              Login
            </Typography>
            <FormControl>
              <InputLabel htmlFor="email">Email</InputLabel>
              <Input
                id="email"
                name="email"
                value={credentials.email}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl>
              <InputLabel htmlFor="password">Password</InputLabel>
              <Input
                id="password"
                name="password"
                type="password"
                value={credentials.password}
                onChange={handleChange}
              />
            </FormControl>
            <Button type="submit" variant="contained" color="primary">
              Primary
            </Button>
          </form>
        </Grid>
        <Grid xs={12} md={4} item></Grid>
      </Grid>

      {/* <FormControl>
          <InputLabel htmlFor="component-helper">Name</InputLabel>
          <Input
            id="component-helper"
            value={name}
            onChange={handleChange}
            aria-describedby="component-helper-text"
          />
          <FormHelperText id="component-helper-text">
            Some important helper text
          </FormHelperText>
        </FormControl>
        <FormControl disabled>
          <InputLabel htmlFor="component-disabled">Name</InputLabel>
          <Input id="component-disabled" value={name} onChange={handleChange} />
          <FormHelperText>Disabled</FormHelperText>
        </FormControl>
        <FormControl error>
          <InputLabel htmlFor="component-error">Name</InputLabel>
          <Input
            id="component-error"
            value={name}
            onChange={handleChange}
            aria-describedby="component-error-text"
          />
          <FormHelperText id="component-error-text">Error</FormHelperText>
        </FormControl>
        <FormControl variant="outlined">
          <InputLabel htmlFor="component-outlined">Name</InputLabel>
          <OutlinedInput
            id="component-outlined"
            value={name}
            onChange={handleChange}
            label="Name"
          />
        </FormControl>
        <FormControl variant="filled">
          <InputLabel htmlFor="component-filled">Name</InputLabel>
          <FilledInput
            id="component-filled"
            value={name}
            onChange={handleChange}
          />
        </FormControl> */}
    </>
  );
};

export default Login;
