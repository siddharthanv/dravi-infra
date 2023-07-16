import { Box, Button, Container, Grid, Typography, Link } from "@material-ui/core";
import Image from "next/image";
import classes from "./SellPropertySignup.module.css";

function SellPropertySignup(props) {
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
                    Sign Up Page
                  </Typography>
                </Box>
                <div className={classes.formGroup}>
                  <Typography variant="body1" className={classes.formLabel}>
                    Name<span className={classes.asteriskStyle}>*</span>
                  </Typography>
                  <input className={classes.formInput} required />
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
                  <Button variant="contained" className={classes.formSubmitButton}>
                    Create Account
                  </Button>
                </Box>
                <Box display="flex" justifyContent="center">
                  <Typography variant="body1" className={classes.formSignInText}>
                    Already Have an Account?{" "}
                    <Link href="signin" className={classes.signInButton}>
                      Sign in
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

export default SellPropertySignup;
