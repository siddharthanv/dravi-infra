import { Card, Grid, Typography } from "@material-ui/core";
import classes from "./ReviewCard.module.css";
import Image from "next/image";
import Carousel from "react-material-ui-carousel";

function ReviewCard(props) {
  return (
    <div>
      <div className={classes.reviewForDesktop}>
        <Carousel animation="slide" interval="2000" autoPlay={false} navButtonsAlwaysVisible={true}>
          <div style={{ paddingTop: "30px" }}>
            <Grid container spacing={10}>
              <Grid item lg={6}>
                <div style={{ position: "relative", display: "flex", justifyContent: "flex-end" }}>
                  <Typography className={classes.fontLilly}>{"‘‘"}</Typography>
                  <Card className={classes.cardStyle}>
                    <div className={classes.cardInner}>
                      <Typography className={classes.cardTypography}>
                        DraviInfra helped me getting the Legal Heir Certificate on time. They were extremely
                        communicative and easy to reach. Thank you DraviInfra!
                      </Typography>
                    </div>
                    <div className={classes.myWrapper}>
                      <Image src={props.boy1} alt="" />
                    </div>
                    <Typography>Ram Krishna</Typography>
                  </Card>
                </div>
              </Grid>
              <Grid item lg={6}>
                <div style={{ position: "relative" }}>
                  <Typography className={classes.fontLilly1}>{"‘‘"}</Typography>
                  <Card className={classes.cardStyle1}>
                    <div className={classes.cardInner}>
                      <Typography className={classes.cardTypography}>
                        Being an NRI, it was difficult for me to process the Patta Name Transfer for my property in
                        hometown. DraviInfra gave me full assistance and helped me greatly in getting one. Nice work.
                      </Typography>
                    </div>
                    <div className={classes.myWrapper}>
                      <Image src={props.boy2} alt="" />
                    </div>
                    <Typography>Venkatesh Prasad</Typography>
                  </Card>
                </div>
              </Grid>
            </Grid>
          </div>
          <div style={{ paddingTop: "30px" }}>
            <Grid container spacing={10}>
              <Grid item lg={6}>
                <div style={{ position: "relative", display: "flex", justifyContent: "flex-end" }}>
                  <Typography className={classes.fontLilly}>{"‘‘"}</Typography>
                  <Card className={classes.cardStyle}>
                    <div className={classes.cardInner}>
                      <Typography className={classes.cardTypography}>
                        This company was remarkably helpful in getting me the Will Deed in less time than I anticipated.
                        I highly recommend them.
                      </Typography>
                    </div>
                    <div className={classes.myWrapper}>
                      <Image src={props.girl1} alt="" />
                    </div>
                    <Typography>Sailaja</Typography>
                  </Card>
                </div>
              </Grid>
              <Grid item lg={6}>
                <div style={{ position: "relative" }}>
                  <Typography className={classes.fontLilly1}>{"‘‘"}</Typography>
                  <Card className={classes.cardStyle1}>
                    <div className={classes.cardInner}>
                      <Typography className={classes.cardTypography}>
                        They have wide variety of properties that are best for futuristic investment ideas Highly
                        recommended property dealers.
                      </Typography>
                    </div>
                    <div className={classes.myWrapper}>
                      <Image src={props.boy1} alt="" />
                    </div>
                    <Typography>Linga Moorthy</Typography>
                  </Card>
                </div>
              </Grid>
            </Grid>
          </div>
          <div style={{ paddingTop: "30px" }}>
            <Grid container spacing={10}>
              <Grid item lg={6}>
                <div style={{ position: "relative", display: "flex", justifyContent: "flex-end" }}>
                  <Typography className={classes.fontLilly}>{"‘‘"}</Typography>
                  <Card className={classes.cardStyle}>
                    <div className={classes.cardInner}>
                      <Typography className={classes.cardTypography}>
                        The registration process for my property was completed within a day. They are well organised and
                        cooperative.
                      </Typography>
                    </div>
                    <div className={classes.myWrapper}>
                      <Image src={props.boy3} alt="" />
                    </div>
                    <Typography>Seshadri</Typography>
                  </Card>
                </div>
              </Grid>
              <Grid item lg={6}>
                <div style={{ position: "relative" }}>
                  <Typography className={classes.fontLilly1}>{"‘‘"}</Typography>
                  <Card className={classes.cardStyle1}>
                    <div className={classes.cardInner}>
                      <Typography className={classes.cardTypography}>
                        I struggling to sell my property for long time. Dravi Infra sell my property easily. Good
                        company!
                      </Typography>
                    </div>
                    <div className={classes.myWrapper}>
                      <Image src={props.girl2} alt="" />
                    </div>
                    <Typography>Sankari</Typography>
                  </Card>
                </div>
              </Grid>
            </Grid>
          </div>
        </Carousel>
      </div>
      <div className={classes.reviewForMobile}>
        <Carousel animation="slide" interval="2000" indicators={false}>
          <div style={{ position: "relative" }}>
            <Typography className={classes.fontLillyForMobile}>{"‘‘"}</Typography>
            <Card className={classes.cardStyleForMobile}>
              <div className={classes.cardInnerForMobile}>
                <Typography className={classes.cardTypographyForMobile}>
                  The registration process for my property was completed within a day. They are well organised and
                  cooperative.
                </Typography>
              </div>
              <div className={classes.myWrapperForMobile}>
                <Image src={props.boy3} alt="" />
              </div>
              <Typography>Seshadri</Typography>
            </Card>
          </div>
          <div style={{ position: "relative" }}>
            <Typography className={classes.fontLillyForMobile}>{"‘‘"}</Typography>
            <Card className={classes.cardStyleForMobile}>
              <div className={classes.cardInnerForMobile}>
                <Typography className={classes.cardTypographyForMobile}>
                  I struggling to sell my property for long time. Dravi Infra sell my property easily. Good company!
                </Typography>
              </div>
              <div className={classes.myWrapperForMobile}>
                <Image src={props.girl2} alt="" />
              </div>
              <Typography>Sankari</Typography>
            </Card>
          </div>
          <div style={{ position: "relative" }}>
            <Typography className={classes.fontLillyForMobile}>{"‘‘"}</Typography>
            <Card className={classes.cardStyleForMobile}>
              <div className={classes.cardInnerForMobile}>
                <Typography className={classes.cardTypographyForMobile}>
                  They have wide variety of properties that are best for futuristic investment ideas Highly recommended
                  property dealers.
                </Typography>
              </div>
              <div className={classes.myWrapperForMobile}>
                <Image src={props.boy1} alt="" />
              </div>
              <Typography>Linga Moorthy</Typography>
            </Card>
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default ReviewCard;
