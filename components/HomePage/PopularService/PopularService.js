import PopularServiceCard from "./CardsForPopularServices/PopularServiceCard";
import { Container, Typography } from "@material-ui/core";
import classes from "./PopularService.module.css";
import Heading from "../HomePageSectionHeading/Heading";

function PopularService(props) {
  return (
    <div>
      <Container>
        {/* <div className={classes.popularServicesHeading}>
          <Typography variant="body2" style={{ color: "#259AC4" }}>
            SERVICES
          </Typography>
          <Typography variant="h5">POPULAR SERVICES</Typography>
        </div> */}
        <Heading subHeading="What do we offer?" heading="Popular Services" />
        <PopularServiceCard
          img1={props.img1}
          img2={props.img2}
          img3={props.img3}
          img4={props.img4}
          img5={props.img5}
          img6={props.img6}
          img7={props.img7}
          img8={props.img8}
          img9={props.img9}
        />
      </Container>
    </div>
  );
}

export default PopularService;
