import React from "react";
import { Grid, Card, CardContent, Typography } from "@material-ui/core";
import HouseIcon from "@material-ui/icons/House";
import SearchIcon from "@material-ui/icons/Search";
import PeopleIcon from "@material-ui/icons/People";
import classes from "./WhyUs.module.css";
import Heading from "../HomePageSectionHeading/Heading";

function WhyUsCard() {
  return (
    <div>
      <Card elevation={0} style={{ backgroundColor: "#f7f7f7" }}>
        {/* <Typography
          variant="body2"
          className={`${classes.colorBlue} ${classes.center}`}
          style={{ textAlign: "center", paddingTop: "50px" }}
        >
          ALWAYS SATISFIED
        </Typography>
        <Typography variant="h5" style={{ textAlign: "center" }}>
          WHY US?
        </Typography> */}
        <Heading subHeading="Why Us?" heading="Always Satisfied" />
        <Grid container style={{ padding: "20px" }} className={classes.WhyUsContainer}>
          <Grid item md={4} sm={12}>
            <CardContent className={classes.center}>
              <SearchIcon className={`${classes.icon50} ${classes.colorBlue} ${classes.whyUsIcon}`} />
              <Typography variant="h5" className={classes.mBottom10}>
                20 years of expertise.
              </Typography>
              <Typography variant="body2" className={`${classes.mBottom20} ${classes.lh1p6}`}>
                Our executives at PropDealz are specialized in the registration process who have handled more than 10000
                registrations
              </Typography>
            </CardContent>
          </Grid>
          <Grid item md={4} sm={12}>
            <CardContent className={classes.center}>
              <PeopleIcon className={`${classes.icon50} ${classes.colorBlue} ${classes.whyUsIcon}`} />
              <Typography variant="h5" className={classes.mBottom10}>
                Professional and friendly agent
              </Typography>
              <Typography variant="body2" className={`${classes.mBottom20} ${classes.lh1p6}`}>
                Unlike traditional agents, Our Executives are professional and Client friendly. For us at PropDealz,
                Customer is God.
              </Typography>
            </CardContent>
          </Grid>
          <Grid item md={4} sm={12}>
            <CardContent className={classes.center}>
              <HouseIcon className={`${classes.icon50} ${classes.colorBlue} ${classes.whyUsIcon}`} />
              <Typography variant="h5" className={classes.mBottom10}>
                Door Step Services
              </Typography>
              <Typography variant="body2" className={`${classes.mBottom20} ${classes.lh1p6}`}>
                PropDealz gives doorstep services to all registration and sub-registrar-based services at your Doorstep.
                Don't make sweat to get your job done.
              </Typography>
            </CardContent>
          </Grid>
        </Grid>
      </Card>
    </div>
  );
}

export default WhyUsCard;
