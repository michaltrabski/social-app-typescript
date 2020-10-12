import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import axios from "axios";
import Scream from "../components/Scream";
import ScreamInterface from "../interfaces/Scream.interface";
import { screamSchema } from "../schema/screamSchema";
import { ApiUrl } from "../const/const";

interface Props {}

interface State {
  screams: ScreamInterface[];
}
export class Home extends Component<Props, State> {
  state: State = {
    screams: [],
  };

  componentDidMount() {
    axios
      .get(`${ApiUrl}/screams`)
      .then((res) => {
        // console.log("res", res);
        // console.log("res.data", res.data);
        if (res.data) this.setState({ screams: res.data });
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
          {console.log("xxx", screams.length, screams)}
          {screams.length > 0
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
