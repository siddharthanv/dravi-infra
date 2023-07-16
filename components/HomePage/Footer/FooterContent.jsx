import React from "react";
import { Box, Container, Grid } from "@material-ui/core";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import EmailIcon from "@material-ui/icons/Email";
import classes from "./FooterContent.module.css";

function FooterContent() {
  return (
    <div className={classes.footerContentStyle}>
      <Container>
        <Grid container spacing={2}>
          <Grid item md={4} sm={12}>
            <h2 className={classes.h2}>About Us</h2>
            <p>
              DraviInfra is your reliable partner for all your Real Estate needs and deals. Our team of experts can help
              you out smooth transaction of any value or complications.
            </p>
          </Grid>
          <Grid item md={4} sm={12} style={{ width: "100%" }}>
            <h2 className={classes.h2}>Useful Links</h2>
            <ul style={{ listStyleType: "none", margin: "0px", padding: "0px", width: "100%" }}>
              <li>Home</li>
              <li>Buy Property</li>
              <li>Sell Property</li>
              <li>Find SRO</li>
            </ul>
          </Grid>
          <Grid item md={4} sm={12}>
            <h2 className={classes.h2}>Get in Touch</h2>
            <p className={classes.address}>
              <Box display="flex">
                <LocationOnIcon className={classes.icon} />
                Villa No: 4, Sri Harsha, No 30 Church Main Road, Kandhanchavadi, Perungudi, Chennai - 96
              </Box>
            </p>
            <p className={classes.address}>
              <Box display="flex">
                <PhoneAndroidIcon className={classes.icon} /> 9500029622/ 6381293871
              </Box>
            </p>
            <p className={classes.address}>
              <Box display="flex">
                <EmailIcon className={classes.icon} /> enquiry@DraviInfra.com
              </Box>
            </p>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default FooterContent;
