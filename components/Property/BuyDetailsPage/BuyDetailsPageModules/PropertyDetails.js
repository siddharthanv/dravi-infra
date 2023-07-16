import classes from "./PropertyDetails.module.css";
import { Box, Container, Typography } from "@material-ui/core";
import SquareFootIcon from "@material-ui/icons/SquareFoot";
import MeetingRoomIcon from "@material-ui/icons/MeetingRoom";
import BathtubIcon from "@material-ui/icons/Bathtub";
import DirectionsCarIcon from "@material-ui/icons/DirectionsCar";

function PropertyDetails(props) {
  return (
    <div style={{ marginBottom: "50px" }}>
      <Container maxWidth="md">
        <Box display="flex">
          <Box display="flex" flexGrow="1">
            <div className={classes.basicDetails}>
              <SquareFootIcon />
              <Typography className={classes.textDetail}>Square Feet</Typography>
              <Typography className={classes.numberText}>{props.propertyArea}</Typography>
            </div>
          </Box>
          <Box display="flex" flexGrow="1">
            <div className={classes.basicDetails}>
              <MeetingRoomIcon />
              <Typography className={classes.textDetail}>No. of BedRooms</Typography>
              <Typography className={classes.numberText}>{props.bhk}</Typography>
            </div>
          </Box>
          <Box display="flex" flexGrow="1">
            <div className={classes.basicDetails}>
              <BathtubIcon />
              <Typography className={classes.textDetail}>No. of BathRooms</Typography>
              <Typography className={classes.numberText}>{props.bath}</Typography>
            </div>
          </Box>
          <Box>
            <div className={classes.basicDetails}>
              <DirectionsCarIcon />
              <Typography className={classes.textDetail}>No. of Car Parking</Typography>
              <Typography className={classes.numberText}>{props.carParking}</Typography>
            </div>
          </Box>
        </Box>
      </Container>
    </div>
  );
}

export default PropertyDetails;
