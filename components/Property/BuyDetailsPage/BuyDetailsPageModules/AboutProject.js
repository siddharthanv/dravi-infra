import { Container, Grid, Typography } from "@material-ui/core";
import classes from "./AboutProject.module.css";

function AboutProject() {
  return (
    <div style={{ marginBottom: "30px" }}>
      <Container maxWidth="md">
        <Typography className={classes.AboutHeading}>About Property</Typography>
        <Grid container spacing={2}>
          <Grid item md={4}></Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default AboutProject;
