import { Container, Grid } from "@material-ui/core";
import classes from "./BuyPropertyPage.module.css";
import BannerAndSearch from "./BuyPropertyPageModules/BannerAndSearch";
import LatestPropertySection from "./BuyPropertyPageModules/LatestPropertySection";
import Heading from "../../HomePage/HomePageSectionHeading/Heading";

function BuyPropertyPage(props) {
  const { propertiesFullList } = props;
  return (
    <div>
      <BannerAndSearch BuyPropertyBanner={props.BuyPropertyBanner} />
      <Container>
        <Heading heading="Latest Properties" />
        <Grid container spacing={1}>
          {propertiesFullList.map((list, index) => (
            <Grid item lg={3} md={4} sm={12}>
              <LatestPropertySection
                key={index}
                prop1={list.prop1}
                propertyPrice={list.propertyPrice}
                bhk={list.bhk}
                bath={list.bath}
                carParking={list.carParking}
                propertyName={list.propertyName}
                propertyLocation={list.propertyLocation}
                propertyId={list.propertyId}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default BuyPropertyPage;
