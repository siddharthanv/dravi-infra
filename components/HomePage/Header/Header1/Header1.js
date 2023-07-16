import { Box, Button, Container, Typography } from "@material-ui/core";
import classes from "./Header1.module.css";

import Link from "next/link";

function Header1() {
  return (
    <div>
      <Container className={classes.flexboxNav}>
        <Link href="/properties/sell/add-property">
          <Box display="flex" alignItems="center">
            <Typography className={classes.postProperty}>
              Post Property <span className={classes.postPropertyFree}>Free</span>
            </Typography>
          </Box>
        </Link>
        <Button className={classes.callButton} href="tel:9500029622" size="small" variant="outlined">
          Call 9500029622
        </Button>
        <Button className={classes.enquiryButton} href="#enquiryForm" size="small" variant="contained">
          Enquiry
        </Button>
      </Container>
    </div>
  );
}

export default Header1;
