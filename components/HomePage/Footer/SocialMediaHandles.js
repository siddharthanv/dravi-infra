import React from "react";
import { Container, Box, Link } from "@material-ui/core";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import classes from "./SocialMediaHandles.module.css";

function SocialMediaHandles() {
  return (
    <div>
      <Container>
        <Box display="flex" justifyContent="center">
          {/* <Box display="flex" justifyContent="center" alignItems="center" className={classes.socialMediaHandlesStyles}>
            <TwitterIcon onClick={(event) => (window.location.href = "https://twitter.com/propdealz")} />
          </Box> */}
          <Box display="flex" justifyContent="center" alignItems="center">
            <Link href="https://www.facebook.com/propdealzchennai" target="_blank">
              <div className={classes.socialMediaHandlesStyles}>
                <FacebookIcon />
              </div>
            </Link>
          </Box>
          <Box display="flex" justifyContent="center" alignItems="center">
            <Link href="https://www.linkedin.com/company/propdealz" target="_blank">
              <div className={classes.socialMediaHandlesStyles}>
                <LinkedInIcon />
              </div>
            </Link>
          </Box>
          <Box display="flex" justifyContent="center" alignItems="center">
            <Link href="https://www.instagram.com/propdealz/" target="_blank">
              <div className={classes.socialMediaHandlesStyles}>
                <InstagramIcon />
              </div>
            </Link>
          </Box>
        </Box>
      </Container>
    </div>
  );
}

export default SocialMediaHandles;
