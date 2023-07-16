import { Typography } from "@material-ui/core";
import classes from "./InputLabel.module.css";

function InputLabel(props) {
  return (
    <div>
      <Typography className={classes.labelText}>
        {props.labelName}
        <span className={classes.asterisk}>{props.star}</span>
      </Typography>
    </div>
  );
}

export default InputLabel;
