import { Divider, Typography } from "@material-ui/core";
import classes from "./Heading.module.css";

function Heading(props) {
  return (
    <div className={classes.header}>
      <Typography className={classes.heading1}>{props.subHeading}</Typography>
      <Typography className={classes.heading2}>{props.heading}</Typography>
      <Divider className={classes.divider} />
    </div>
  );
}

export default Heading;
