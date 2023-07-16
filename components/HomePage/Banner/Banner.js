import Carousel from "react-material-ui-carousel";
import Image from "next/image";
import classes from "./Banner.module.css";
import { Button } from "@material-ui/core";

function Banner(props) {
  return (
    <div>
      <div className={classes.desktopBanner}>
        <Carousel animation="slide" interval="6000" indicators={false}>
          <div>
            <div className={classes.bannerWrapper}>
              <Image src={props.banner1} alt="" />
            </div>
            <div className={classes.content}>
              <Button
                size="small"
                href="tel:9500029622"
                variant="contained"
                className={classes.cta}
                style={{ borderRadius: "25px" }}
              >
                Call Us
              </Button>
            </div>
          </div>
          <div>
            <div className={classes.bannerWrapper}>
              <Image src={props.banner2} alt="" />
            </div>
            <div className={classes.content}>
              <Button
                size="small"
                href="tel:9500029622"
                variant="contained"
                className={classes.cta}
                style={{ borderRadius: "25px" }}
              >
                Call Us
              </Button>
            </div>
          </div>
        </Carousel>
      </div>
      <div className={classes.mobileBanner}>
        <div>
          <div className={classes.bannerWrapperForMobile}>
            <Image src={props.mobileBanner} alt="" />
          </div>
          <div className={classes.contentMobile}>
            <Button
              size="small"
              href="tel:9500029622"
              variant="contained"
              className={classes.ctaMobile}
              style={{ borderRadius: "25px" }}
            >
              Call Us
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
