import { Container, Typography } from "@material-ui/core";
import classes from "./PopularProperties.module.css";
import PopularPropertiesCard from "./PopularPropertiesCard/PopularPropertiesCard";
import Heading from "../HomePageSectionHeading/Heading";

function PopularProperties(props) {
  return (
    <div className={classes.PopularPropertiesFullStyle}>
      <Container>
        {/* <div className={classes.popularServicesHeading}>
          <Typography variant="body2" style={{ color: "#259AC4" }}>
            PROPERTY
          </Typography>
          <Typography variant="h5">BUY AND SELL</Typography>
        </div> */}
        <Heading subHeading="Property" heading="Buy and Sell" />
        <PopularPropertiesCard BuyImage={props.BuyImage} SellImage={props.SellImage} />
      </Container>
    </div>
  );
}

export default PopularProperties;
