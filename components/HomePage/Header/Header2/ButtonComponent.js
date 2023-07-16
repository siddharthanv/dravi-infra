import { Button, Link } from "@material-ui/core";
import classes from "./ButtonComponent.module.css";

function ButtonComponent(props) {
  return (
    <Button className={classes.buttonNavKey} value={props.categoryName}>
      {props.categoryName}
    </Button>
  );
}

export default ButtonComponent;
