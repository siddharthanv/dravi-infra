import { Container, Typography, Card, CardContent, Grid } from "@material-ui/core";
import classes from "./PropertyLocation.module.css";

function PropertyLocation(props) {
  return (
    <div>
      <Container maxWidth="md">
        <Typography variant="h5" className={classes.propertyLocationHeading}>
          Property Location
        </Typography>
        <Card className={classes.cardPropertyLocation}>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item lg={3}>
                <div style={{ textAlign: "center" }}>
                  <Typography className={classes.propertyLocationIconHeading}>City</Typography>
                  <Typography className={classes.propertyLocationAvailability}>{props.city}</Typography>
                </div>
              </Grid>
              <Grid item lg={3}>
                <div style={{ textAlign: "center" }}>
                  <Typography className={classes.propertyLocationIconHeading}>State</Typography>
                  <Typography className={classes.propertyLocationAvailability}>{props.state}</Typography>
                </div>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
}

export default PropertyLocation;
