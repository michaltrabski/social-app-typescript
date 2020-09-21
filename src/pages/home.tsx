import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import axios from "axios";

interface Props {}

interface Scream {
  screamId: string;
  body: string;
  createdAt: string;
  userHandle: string;
}

interface State {
  screams: Scream[] | null;
}
export class Home extends Component<Props, State> {
  state: Readonly<State> = {
    screams: null,
  };

  componentDidMount() {
    axios.get("/screams").then((res) => {
      console.log("res.data", res.data);
      this.setState({ screams: res.data }, () =>
        console.log("this.state.screams", this.state.screams)
      );
    });
  }
  render() {
    const { screams } = this.state;
    let recentScreamsMarkup = screams ? (
      screams.map((scream) => <p>{scream.screamId}</p>)
    ) : (
      <p>Loading...</p>
    );

    return (
      <Grid container spacing={10}>
        <Grid item sm={8} xs={12}>
          <p>Content </p>
        </Grid>
        <Grid item sm={4} xs={12}>
          <p>Profile</p>
          {recentScreamsMarkup}
        </Grid>
      </Grid>
    );
  }
}

export default Home;
