import React from "react";
import { Container, Grid, Link } from "@material-ui/core";

function FooterBottom() {
  return (
    <div>
      <Container>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <p style={{ textAlign: "center", color: "#fff", padding: "30px 0px" }}>
              Copyright &copy; {new Date().getFullYear()}{" "}
              <span>
                {" "}
                <Link color="inherit" underline="none" href="/">
                  PropDealz.
                </Link>
              </span>{" "}
              All Rights Reserved.
            </p>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default FooterBottom;
