import { Box, Button, Container, Grid, Typography, Link } from "@material-ui/core";
import Image from "next/image";
import classes from "./SellPropertySignin.module.css";

function SellPropertySignin(props) {
  return (
    <div>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid lg={6}>
            <Box display="flex" justifyContent="center">
              <div className={classes.myWrapper}>
                <Image src={props.loginImage} layout="intrinsic" alt="loginImage" />
              </div>
            </Box>
          </Grid>
          <Grid lg={6}>
            <Box display="flex" justifyContent="center" alignItems="center" style={{ height: "100%" }}>
              <div>
                <Box display="flex" justifyContent="center">
                  <Typography variant="h1" className={classes.signUpHeading}>
                    Sign in page
                  </Typography>
                </Box>
                <div className={classes.formGroup}>
                  <Typography variant="body1" className={classes.formLabel}>
                    Mobile Number<span className={classes.asteriskStyle}>*</span>
                  </Typography>
                  <input className={classes.formInput} required />
                  <Typography variant="body1" className={classes.formLabel}>
                    Password<span className={classes.asteriskStyle}>*</span>
                  </Typography>
                  <input className={classes.formInput} required />
                </div>
                <Box display="flex" justifyContent="center">
                  <Button href="add-property" variant="contained" className={classes.formSubmitButton}>
                    Sign in
                  </Button>
                </Box>
                <Box display="flex" justifyContent="center">
                  <Typography variant="body1" className={classes.formSignInText}>
                    Don't Have an Account?{" "}
                    <Link href="signup" className={classes.signInButton}>
                      Sign up
                    </Link>
                  </Typography>
                </Box>
              </div>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default SellPropertySignin;
