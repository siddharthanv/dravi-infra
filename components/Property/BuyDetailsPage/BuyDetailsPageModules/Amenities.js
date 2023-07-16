import { Card, CardContent, Container, Divider, Grid, Typography } from "@material-ui/core";
import classes from "./Amenities.module.css";

function Amenities(props) {
  return (
    <div style={{ marginBottom: "50px" }}>
      <Container maxWidth="md">
        <Typography variant="h5" className={classes.amenitiesHeading}>
          Amenities
        </Typography>
        <Card className={classes.cardAmenities}>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item lg={3}>
                <div style={{ textAlign: "center" }}>
                  <Typography className={classes.amenitieslistheading}>Furnished</Typography>
                  <Typography className={classes.amenitieslistAvailability}>{props.furnished}</Typography>
                </div>
              </Grid>
              <Grid item lg={3}>
                <div style={{ textAlign: "center" }}>
                  <Typography className={classes.amenitieslistheading}>Swimming Pool</Typography>
                  <Typography className={classes.amenitieslistAvailability}>{props.swimmingPool}</Typography>
                </div>
              </Grid>
              <Grid item lg={3}>
                <div style={{ textAlign: "center" }}>
                  <Typography className={classes.amenitieslistheading}>Gym</Typography>
                  <Typography className={classes.amenitieslistAvailability}>{props.gym}</Typography>
                </div>
              </Grid>
              <Grid item lg={3}>
                <div style={{ textAlign: "center" }}>
                  <Typography className={classes.amenitieslistheading}>Gated Community</Typography>
                  <Typography className={classes.amenitieslistAvailability}>{props.gatedCommunity}</Typography>
                </div>
              </Grid>
              <Grid item lg={3}>
                <div style={{ textAlign: "center" }}>
                  <Typography className={classes.amenitieslistheading}>Play Area</Typography>
                  <Typography className={classes.amenitieslistAvailability}>{props.playArea}</Typography>
                </div>
              </Grid>
              <Grid item lg={3}>
                <div style={{ textAlign: "center" }}>
                  <Typography className={classes.amenitieslistheading}>CCTV Camera</Typography>
                  <Typography className={classes.amenitieslistAvailability}>{props.CCTVCamera}</Typography>
                </div>
              </Grid>
              <Grid item lg={3}>
                <div style={{ textAlign: "center" }}>
                  <Typography className={classes.amenitieslistheading}>Trash Removal</Typography>
                  <Typography className={classes.amenitieslistAvailability}>{props.trashRemoval}</Typography>
                </div>
              </Grid>
              {/* <Grid item lg={3}>
                <Typography style={{ textAlign: "center" }}>Amenities2</Typography>
              </Grid>
              <Grid item lg={3}>
                <Typography style={{ textAlign: "center" }}>Amenities3</Typography>
              </Grid>
              <Grid item lg={3}>
                <Typography style={{ textAlign: "center" }}>Amenities4</Typography>
              </Grid> */}
            </Grid>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
}

export default Amenities;
