/* eslint-disable @next/next/link-passhref */
import { Card, CardMedia, Container, Grid, Typography } from "@material-ui/core";
import Link from "next/link";
import Image from "next/image";
import classes from "./PopularPropertiesCard.module.css";

function PopularPropertiesCard(props) {
  return (
    <div>
      <Grid container>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <Link href="/properties/buy">
            <div style={{ position: "relative" }}>
              <div className={classes.myWrapper}>
                <Image src={props.BuyImage} alt="" layout="intrinsic" />
              </div>
              <div className={classes.nameCenter}>
                <Typography>Buy Property</Typography>
              </div>
            </div>
          </Link>
        </Grid>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <Link href="/properties/sell/add-property">
            <div style={{ position: "relative" }}>
              <div className={classes.myWrapper}>
                <Image src={props.SellImage} alt="" layout="intrinsic" />
              </div>
              <div className={classes.nameCenter}>
                <Typography>Sell Property</Typography>
              </div>
            </div>
          </Link>
        </Grid>
      </Grid>
    </div>
  );
}

export default PopularPropertiesCard;
