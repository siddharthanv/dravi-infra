/* eslint-disable @next/next/link-passhref */
import { Container, Typography, Grid, Button } from "@material-ui/core";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import classes from "./RegisterOffice.module.css";
import EachRegisterOfficeCard from "./RegisterOfficeModule/EachRegisterOfficeCard";
import Link from "next/link";
import Heading from "../HomePageSectionHeading/Heading";

function RegisterOffice(props) {
  const { registerOfficeDetails } = props;
  return (
    <div>
      <Container>
        {/* <div className={classes.popularServicesHeading}>
          <Typography variant="body2" style={{ color: "#259AC4" }}>
            SRO IN CHENNAI
          </Typography>
          <Typography variant="h5">SUB REGISTRAR OFFICES</Typography>
        </div> */}
        <Heading subHeading="SROs in Tamil Nadu" heading="Sub Registrar Office" />
        <Grid container spacing={4} className={classes.sroListGrid}>
          {registerOfficeDetails.map((detail, index) => (
            <Grid item lg={4} md={6} xs={12} key={index}>
              <EachRegisterOfficeCard
                registerOfficeName={detail.sroName}
                title={detail.sroName}
                image={detail.image}
                registerOfficeAddress={detail.address}
                slug={detail.sroName}
                srNo={detail.srNo}
                SRO1={props.SRO1}
                SRO2={props.SRO2}
                SRO3={props.SRO3}
                SRO4={props.SRO4}
              />
            </Grid>
          ))}
        </Grid>
        <div className={classes.buttonSeeMoreSRODiv}>
          <Link href="/sro-list" className={classes.aTagSeeMoreSROStyle}>
            <Button variant="contained" color="primary" className={classes.buttonSeeMoreSROs}>
              See More SROs
              <ArrowRightAltIcon style={{ paddingLeft: "10px" }} />
            </Button>
          </Link>
        </div>
      </Container>
    </div>
  );
}

export default RegisterOffice;
