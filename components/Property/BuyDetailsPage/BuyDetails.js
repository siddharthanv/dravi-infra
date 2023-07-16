import PropertyImage from "./BuyDetailsPageModules/PropertyImage";
import PropertyDetails from "./BuyDetailsPageModules/PropertyDetails";
import PropertyDescription from "./BuyDetailsPageModules/PropertyDescription";
import Amenities from "./BuyDetailsPageModules/Amenities";
import AboutProject from "./BuyDetailsPageModules/AboutProject";
import PropertyLocation from "./BuyDetailsPageModules/PropertyLocation";
import { Container, Typography, Grid } from "@material-ui/core";
import classes from "./BuyDetails.module.css";

function BuyDetails(props) {
  return (
    <div>
      <PropertyImage prop1={props.prop1} propertyName={props.propertyName} propertyPrice={props.propertyPrice} />
      <PropertyDetails
        propertyArea={props.propertyArea}
        bhk={props.bhk}
        bath={props.bath}
        carParking={props.carParking}
      />
      <PropertyDescription propertyDescription={props.propertyDescription} />
      <Amenities
        furnished={props.furnished}
        swimmingPool={props.swimmingPool}
        gym={props.gym}
        gatedCommunity={props.gatedCommunity}
        playArea={props.playArea}
        CCTVCamera={props.CCTVCamera}
        trashRemoval={props.trashRemoval}
      />
      <Container maxWidth="md">
        <Typography className={classes.AboutHeading}>About Property</Typography>
        <Grid container spacing={2}>
          <ul className={classes.listOfAboutProperty}>
            <Grid item md={4}>
              <li>{props.property}</li>
            </Grid>
          </ul>
        </Grid>
      </Container>
      <PropertyLocation city={props.city} state={props.state} />
    </div>
  );
}

export default BuyDetails;
