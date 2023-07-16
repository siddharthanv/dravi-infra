import { Typography, Grid, Card, Box, Avatar, Button } from "@material-ui/core";
import Image from "next/image";
import PinDropIcon from "@material-ui/icons/PinDrop";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneIcon from "@material-ui/icons/Phone";
import DirectionsIcon from "@material-ui/icons/Directions";
import EmailIcon from "@material-ui/icons/Email";
import classes from "./SRODetailsCard.module.css";
import { PinDropSharp } from "@material-ui/icons";

function SRODetailsCard(props) {
  return (
    <div style={{ paddingTop: "30px" }}>
      <Grid container spacing={4} style={{ marginBottom: "50px" }}>
        <Grid item lg={5} md={12} xs={12}>
          <Card className={classes.SRONameCard}>
            <Box style={{ height: "100%" }}>
              <Box className={classes.SRONameCardAvatarBox}>
                <div className={classes.myWrapper}>
                  <Image src={props.SRO1} alt="" />
                </div>
              </Box>
              <Box style={{ display: "flex", justifyContent: "center", height: "40%", alignItems: "flex-end" }}>
                <div>
                  <Typography variant="h6" className={classes.SRONameCardBoxText}>
                    {props.sroName}
                  </Typography>
                  <Typography variant="body1" className={classes.SRONameCardBoxTextSecondary}>
                    Sub Registrar Office
                  </Typography>
                </div>
              </Box>
            </Box>
          </Card>
        </Grid>
        <Grid item lg={6} md={12} xs={12}>
          <Card className={classes.SRODetailCard}>
            <div className={classes.SRODetailCardInnerDivCover}>
              <Typography className={classes.SRODetailCardDetailsText}>
                <Box display="flex" style={{ height: "100%", alignItems: "center" }}>
                  <LocationOnIcon className={classes.SRODetailCardIcon} />
                  {props.address}
                </Box>
              </Typography>
              <Typography className={classes.SRODetailCardDetailsText}>
                <Box display="flex" style={{ height: "100%", alignItems: "center" }}>
                  <PinDropIcon className={classes.SRODetailCardIcon} />
                  {props.district}
                </Box>
              </Typography>
              <Typography className={classes.SRODetailCardDetailsText}>
                <Box display="flex" style={{ height: "100%", alignItems: "center" }}>
                  <PhoneIcon className={classes.SRODetailCardIcon} />
                  {props.contactNo}
                </Box>
              </Typography>
              <Typography className={classes.SRODetailCardDetailsText}>
                <Box display="flex" style={{ height: "100%", alignItems: "center" }}>
                  <EmailIcon className={classes.SRODetailCardIcon} />
                  {props.email}
                </Box>
              </Typography>
              <Button href={"tel:" + props.contactNo} variant="contained" className={classes.SRODetailCardButton}>
                Call to SRO
              </Button>
            </div>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default SRODetailsCard;
