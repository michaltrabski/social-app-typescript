import React, { Component } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import ScreamInterface from "../interfaces/Scream.interface";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    marginBottom: 20,
  },
  media: {
    height: 140,
  },
});

const Scream: React.FC<ScreamInterface> = ({
  screamId,
  body,
  createdAt,
  userHandle,
}) => {
  const classes = useStyles();
  console.log(classes);
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://images.unsplash.com/photo-1600737903649-aa645bb935ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography
            variant="h5"
            component={Link}
            to={`/users/${userHandle}`}
            color="primary"
          >
            {userHandle}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {createdAt}
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p">
            {body}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
// export class Scream extends Component<ScreamI> {
//   render() {
//     const { screamId, body, createdAt, userHandle } = this.props;
//     return (
//       <Card>
//         <p>screamId = {screamId}</p>

//         <p>at = {createdAt}</p>
//         <p>handle = {userHandle}</p>

//         <CardContent>
//           <Typography gutterBottom variant="h5" component="h2">
//             Lizard
//           </Typography>
//           <Typography variant="body2" color="textSecondary" component="p">
//             {body}
//           </Typography>
//         </CardContent>
//       </Card>
//     );
//   }
// }

export default Scream;
