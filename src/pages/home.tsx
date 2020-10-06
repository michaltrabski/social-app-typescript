import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import axios from "axios";
import Scream from "../components/Scream";
import ScreamInterface from "../interfaces/Scream.interface";
import { screamSchema } from "../schema/screamSchema";

interface Props {}

interface State {
  screams: ScreamInterface[] | null;
}
export class Home extends Component<Props, State> {
  state: State = {
    screams: null,
  };

  componentDidMount() {
    axios
      .get("/screams")
      .then((res) => {
        console.log("res.data", res.data);
        this.setState({ screams: res.data });
      })
      .catch((err) => console.log(err));
  }
  render() {
    const { screams } = this.state;

    return (
      <Grid container spacing={10}>
        <Grid item sm={8} xs={12}>
          <p>Content </p>
        </Grid>
        <Grid item sm={4} xs={12}>
          <p>Profile</p>
          {/* {recentScreamsMarkup} */}
        </Grid>
        <Grid item sm={4} xs={12}>
          {console.log("xxx", screams)}
          {screams
            ? screams.map((scream) => (
                <Scream
                  screamId={scream.screamId}
                  body={scream.body}
                  createdAt={scream.createdAt}
                  userHandle={scream.userHandle}
                />
              ))
            : "no scream"}
        </Grid>
      </Grid>
    );
  }
}

export default Home;
