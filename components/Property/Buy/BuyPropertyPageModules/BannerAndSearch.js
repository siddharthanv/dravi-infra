/* eslint-disable jsx-a11y/alt-text */
import { Button, Container, Grid } from "@material-ui/core";
import classes from "./BannerAndSearch.module.css";
import Image from "next/image";

function BannerAndSearch(props) {
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.myWrapper}>
          <Image src={props.BuyPropertyBanner} layout="intrinsic" />
        </div>
        <div className={classes.search}>
          <div className={classes.searchBox}>
            <div className={classes.searchBoxInnerDiv}>
              <Grid container spacing={2}>
                <Grid item md={6}>
                  <label className={classes.label}>Purpose</label>
                  <select name="purpose" id="purpose" className={classes.selectFields}>
                    <option value="sale">For Own Use</option>
                    <option value="investment">For Investment</option>
                  </select>
                  <label className={classes.label}>MaxPrice</label>
                  <input type="text" placeholder="₹5,00,000" className={classes.inputFields} />
                </Grid>
                <Grid item md={6}>
                  <label className={classes.label}>Type</label>
                  <select name="type" id="type" className={classes.selectFields}>
                    <option value="Individual">Individual House</option>
                    <option value="Apartment">Apartment</option>
                    <option value="Commercial">Commercial Space</option>
                  </select>
                  <label className={classes.label}>MinPrice</label>
                  <input type="text" placeholder="₹5,00,00,000" className={classes.inputFields} />
                </Grid>
              </Grid>
              <Button className={classes.Button} variant="contained">
                Search
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BannerAndSearch;
