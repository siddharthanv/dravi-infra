import { Divider, Typography } from "@material-ui/core";
import classes from "./Heading.module.css";

function Heading() {
  return (
    <div className={classes.headerCenter}>
      <Typography className={classes.heading1}>Testimonial</Typography>
      <Typography className={classes.heading2}>What our Customers say</Typography>
      <Divider className={classes.divider} />
    </div>
  );
}

export default Heading;
