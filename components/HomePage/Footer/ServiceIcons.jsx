// import React from "react";
import ShutterSpeedIcon from "@material-ui/icons/ShutterSpeed";
import ClearAllIcon from "@material-ui/icons/ClearAll";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import DockIcon from "@material-ui/icons/Dock";
// function ServiceIcons() {
//   return (
//     <div>
//
//       <ShutterSpeedIcon className="icon50 whyUsIcon" />
//       <DockIcon className="icon50 whyUsIcon" />
//       <ClearAllIcon className="icon50 whyUsIcon" />
//       <VerifiedUserIcon className="icon50 whyUsIcon" />
//     </div>
//   );
// }

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    opacity: 1,
    color: "#eeeeee",
    padding: "100px",
    marginLeft: "150px",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function ServiceIcons() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid spacing={11} container justify="center" className="colorGrey">
        <Grid item xs={2}>
          <ShutterSpeedIcon className="icon50 whyUsIcon" />
        </Grid>
        <Grid item xs={2}>
          <DockIcon className="icon50 whyUsIcon" />
        </Grid>
        <Grid item xs={2}>
          <ClearAllIcon className="icon50 whyUsIcon" />
        </Grid>
        <Grid item xs={2}>
          <VerifiedUserIcon className="icon50 whyUsIcon" />
        </Grid>
        <Grid item xs={2}>
          <VerifiedUserIcon className="icon50 whyUsIcon" />
        </Grid>
        <Grid item xs={2}>
          <ClearAllIcon className="icon50 whyUsIcon" />
        </Grid>
      </Grid>
    </div>
  );
}
