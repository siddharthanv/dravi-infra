/* eslint-disable @next/next/link-passhref */
import { Grid, Card, CardActionArea, CardMedia } from "@material-ui/core";
import Carousel from "react-material-ui-carousel";
import classes from "./PopularServiceCard.module.css";
import Link from "next/link";
import Image from "next/image";

function PopularServiceCard(props) {
  return (
    <div>
      <div className={classes.popularServicesCardStyle}>
        <Carousel animation="slide" interval="7000" indicators={false}>
          <div>
            <Grid container spacing={5}>
              <Grid item lg={4}>
                <Link color="inherit" href="/services/sale-deed">
                  <div className={classes.myWrapper}>
                    <Image src={props.img1} alt="" layout="intrinsic" />
                  </div>
                </Link>
              </Grid>
              <Grid item lg={4}>
                <Link color="inherit" href="/services/sale-agreement">
                  <div className={classes.myWrapper}>
                    <Image src={props.img2} alt="" layout="intrinsic" />
                  </div>
                </Link>
              </Grid>
              <Grid item lg={4}>
                <Link color="inherit" href="/services/construction-agreement">
                  <div className={classes.myWrapper}>
                    <Image src={props.img3} alt="" layout="intrinsic" />
                  </div>
                </Link>
              </Grid>
            </Grid>
          </div>
          <div>
            <Grid container spacing={5}>
              <Grid item lg={4}>
                <Link color="inherit" href="/services/lease-deed">
                  <div className={classes.myWrapper}>
                    <Image src={props.img4} alt="" layout="intrinsic" />
                  </div>
                </Link>
              </Grid>
              <Grid item lg={4}>
                <Link color="inherit" href="/services/simple-mortgage">
                  <div className={classes.myWrapper}>
                    <Image src={props.img5} alt="" layout="intrinsic" />
                  </div>
                </Link>
              </Grid>
              <Grid item lg={4}>
                <Link color="inherit" href="/services/modt-registration">
                  <div className={classes.myWrapper}>
                    <Image src={props.img6} alt="" layout="intrinsic" />
                  </div>
                </Link>
              </Grid>
            </Grid>
          </div>
          <div>
            <Grid container spacing={5}>
              <Grid item lg={4}>
                <Link color="inherit" href="/services/gift-deed">
                  <div className={classes.myWrapper}>
                    <Image src={props.img7} alt="" layout="intrinsic" />
                  </div>
                </Link>
              </Grid>
              <Grid item lg={4}>
                <Link color="inherit" href="/services/dtcp-approval">
                  <div className={classes.myWrapper}>
                    <Image src={props.img8} alt="" layout="intrinsic" />
                  </div>
                </Link>
              </Grid>
              <Grid item lg={4}>
                <Link color="inherit" href="/services/partition-deed">
                  <div className={classes.myWrapper}>
                    <Image src={props.img9} alt="" layout="intrinsic" />
                  </div>
                </Link>
              </Grid>
            </Grid>
          </div>
        </Carousel>
      </div>
      <div className={classes.popularServicesCardStyleForMobile}>
        <Carousel animation="slide" interval="3000" indicators={false}>
          <Link color="inherit" href="/services/sale-deed">
            <div className={classes.myWrapperForMobile}>
              <Image src={props.img1} alt="" layout="intrinsic" />
            </div>
          </Link>
          <Link color="inherit" href="/services/sale-agreement">
            <div className={classes.myWrapperForMobile}>
              <Image src={props.img2} alt="" layout="intrinsic" />
            </div>
          </Link>
          <Link color="inherit" href="/services/construction-agreement">
            <div className={classes.myWrapperForMobile}>
              <Image src={props.img3} alt="" layout="intrinsic" />
            </div>
          </Link>
          <Link color="inherit" href="/services/sale-deed">
            <div className={classes.myWrapperForMobile}>
              <Image src={props.img4} alt="" layout="intrinsic" />
            </div>
          </Link>
          <Link color="inherit" href="/services/lease-deed-registration">
            <div className={classes.myWrapperForMobile}>
              <Image src={props.img4} alt="" layout="intrinsic" />
            </div>
          </Link>
          <Link color="inherit" href="/services/simple-mortgage">
            <div className={classes.myWrapperForMobile}>
              <Image src={props.img5} alt="" layout="intrinsic" />
            </div>
          </Link>
        </Carousel>
      </div>
    </div>
  );
}

export default PopularServiceCard;
