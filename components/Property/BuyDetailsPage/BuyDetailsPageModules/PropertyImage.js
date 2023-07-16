import { Grid, Typography, Box, Container, Card, CardContent, Button } from "@material-ui/core";
import Image from "next/image";
import classes from "./PropertyImage.module.css";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import PhoneIphoneIcon from "@material-ui/icons/PhoneIphone";

function PropertyImage(props) {
  return (
    // <div>
    //   <Grid container>
    //     <Grid item md={6}>
    //       <div className={classes.propNameSection}>
    //         <Box display="flex" alignItems="center" justifyContent="center" style={{ height: "100%" }}>
    //           <div>
    //             <Typography variant="h4" className={classes.propName}>
    //               Palm House
    //             </Typography>
    //             <Typography variant="body1" className={classes.propAddress}>
    //               <Box display="flex" alignItems="center" justifyContent="flex-start">
    //                 <LocationOnIcon /> Anna Nagar, Chennai
    //               </Box>
    //             </Typography>
    //           </div>
    //         </Box>
    //       </div>
    //     </Grid>
    //     <Grid item md={6}>
    //       <div className={classes.myWrapper}>
    //         <Image src={props.prop1} layout="intrinsic" alt="Image" />
    //       </div>
    //     </Grid>
    //   </Grid>
    // </div>
    <div>
      {/* <Container>
        <Box display="flex" justifyContent="center" className={classes.imageBox}>
          <div className={classes.myWrapper}>
            <Image src={props.prop1} layout="intrinsic" alt="Image" />
          </div>
        </Box>
      </Container> */}
      <Container>
        <div className={classes.container}>
          <div style={{ textAlign: "center" }}>
            <div className={classes.myWrapper}>
              <Image src={props.prop1} layout="intrinsic" alt="Image" />
            </div>
          </div>
          <Card className={classes.floatingCard}>
            <CardContent>
              <Box display="flex">
                <Box display="flex" flexGrow="1">
                  <div>
                    <Typography variant="body2" className={classes.propDetailSubHeading}>
                      PROPERTY NAME
                    </Typography>
                    <Typography variant="h5" className={classes.propDetailHeading}>
                      {props.propertyName}
                    </Typography>
                  </div>
                </Box>
                <Box display="flex" justifyContent="flex-end">
                  <div>
                    <Box display="flex" justifyContent="flex-end">
                      <Typography variant="body2" className={classes.propDetailSubHeading}>
                        PROPERTY COST
                      </Typography>
                    </Box>
                    <Box display="flex" justifyContent="flex-end">
                      <Typography variant="h5" className={classes.propDetailHeading}>
                        {props.propertyPrice}
                      </Typography>
                    </Box>
                  </div>
                </Box>
              </Box>
              <Box display="flex">
                <Box display="flex" flexGrow="1">
                  <div>
                    <Box display="block">
                      <Button size="small" variant="outlined" className={classes.buttonContact1}>
                        <WhatsAppIcon /> <span style={{ marginLeft: "3px" }}>Whatsapp</span>
                      </Button>
                    </Box>
                    <Box display="block">
                      <Button size="small" variant="outlined" className={classes.buttonContact2}>
                        <PhoneIphoneIcon /> <span style={{ marginLeft: "3px" }}>Call Us</span>
                      </Button>
                    </Box>
                  </div>
                </Box>
                <Box display="flex" justifyContent="flex-end" alignItems="center">
                  <div>
                    <Box display="flex" justifyContent="flex-end">
                      <Button variant="contained" className={classes.buttonContact3}>
                        Book an Apppointment
                      </Button>
                    </Box>
                  </div>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </div>
      </Container>
    </div>
  );
}

export default PropertyImage;
