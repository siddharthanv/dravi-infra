import { Button, Card, CardContent, CardMedia, Container, Typography } from "@material-ui/core";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import classes from "./Partners.module.css";
import Image from "next/image";
import Heading from "../HomePageSectionHeading/Heading";

function Partners(props) {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 720 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 720, min: 0 },
      items: 1,
    },
  };
  return (
    <Container className={classes.partnerContainer}>
      <Heading heading="Associated Partners" subHeading="Prop Dealz" />
      <Carousel
        responsive={responsive}
        ssr={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        infinite={true}
        removeArrowOnDeviceType={["tablet", "mobile"]}
      >
        <div className={classes.cardPartner}>
          <div className={classes.container}>
            <div className={classes.myWrapper}>
              <Image src={props.arivalagan} alt="" layout="intrinsic" />
            </div>
            <div className={classes.topRight}>
              <Typography variant="h6">Arivalagan</Typography>
              <Typography variant="body1">Advocate, Arivalagan Associates LLP</Typography>
            </div>
          </div>
        </div>
        <div className={classes.cardPartner}>
          <div className={classes.container}>
            <div className={classes.myWrapper}>
              <Image src={props.vaithya} alt="" layout="intrinsic" />
            </div>
            <div className={classes.topRight}>
              <Typography variant="h6">Vaithya Sambandham K</Typography>
              <Typography variant="body1">Real Estate Consultant</Typography>
            </div>
          </div>
        </div>
        <div className={classes.cardPartner}>
          <div className={classes.container}>
            <div className={classes.myWrapper}>
              <Image src={props.professionalImage} alt="" layout="intrinsic" />
            </div>
            <div className={classes.topRight}>
              <Typography variant="h6">Karthik Raja</Typography>
              <Typography variant="body1">Advocate, Karthik Associates LLP</Typography>
            </div>
          </div>
        </div>
      </Carousel>
      {/* <div className={classes.buttonViewAllPartnersContainer}>
        <Button variant="contained" className={classes.buttonViewAllPartners}>
          View All Partners
        </Button>
      </div> */}
    </Container>
  );
}

export default Partners;
