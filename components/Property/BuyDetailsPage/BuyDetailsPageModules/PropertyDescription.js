import { Container, Typography } from "@material-ui/core";
import classes from "./PropertyDescription.module.css";

function PropertyDescription(props) {
  return (
    <div style={{ marginBottom: "30px" }}>
      <Container maxWidth="md">
        <Typography variant="h5" className={classes.descriptionHeading}>
          Property Description
        </Typography>
        <Typography variant="body2" className={classes.descriptionBody}>
          {props.propertyDescription}
        </Typography>
      </Container>
    </div>
  );
}

export default PropertyDescription;
