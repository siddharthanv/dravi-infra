/* eslint-disable @next/next/link-passhref */
/* eslint-disable jsx-a11y/alt-text */
import { Box, Button, Card, Container, Divider, Grid, Typography } from "@material-ui/core";
import classes from "./LatestPropertySection.module.css";

import Image from "next/image";
import MeetingRoomIcon from "@material-ui/icons/MeetingRoom";
import BathtubIcon from "@material-ui/icons/Bathtub";
import DirectionsCarIcon from "@material-ui/icons/DirectionsCar";
import Link from "next/link";

function LatestPropertySection(props) {
  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <div className={classes.container}>
          <div className={classes.myWrapper}>
            <Image src={props.prop1} layout="intrinsic" />
          </div>
          <span className={classes.topLeft}>For Sale</span>
          <span className={classes.bottomRight}>{props.propertyPrice}</span>
        </div>
        <div>
          <Box display="flex" alignItems="center" className={classes.amenities}>
            <Box display="flex" alignItems="center" flexGrow="1">
              <MeetingRoomIcon />
              <Typography variant="body2">{props.bhk}</Typography>
            </Box>
            <Box display="flex" alignItems="center" flexGrow="1">
              <BathtubIcon />
              <Typography variant="body2">{props.bath}</Typography>
            </Box>
            <Box display="flex" alignItems="center">
              <DirectionsCarIcon />
              <Typography variant="body2">{props.carParking}</Typography>
            </Box>
          </Box>
        </div>
        <Divider />
        <div className={classes.title}>
          <Typography variant="h6" className={classes.title1}>
            {props.propertyName}
          </Typography>
          <Typography variant="body2" className={classes.title2}>
            {props.propertyLocation}
          </Typography>
        </div>
        <Box display="flex">
          <Box display="flex" flexGrow="1">
            <Button href="tel:9500029622" variant="contained" className={classes.button1}>
              Call Us
            </Button>
          </Box>
          <Link href={`buy/${props.propertyId}`}>
            <Box display="flex">
              <Button variant="contained" className={classes.button2}>
                Know More
              </Button>
            </Box>
          </Link>
        </Box>
      </Card>
      {/* <Grid lg={3} md={4}>
            <Card className={classes.card}>
              <div className={classes.container}>
                <div className={classes.myWrapper}>
                  <Image src={props.prop1} layout="intrinsic" />
                </div>
                <span className={classes.topLeft}>For Sale</span>
                <span className={classes.bottomRight}>{propertyList.propertyPrice}</span>
              </div>
              <div>
                <Box display="flex" alignItems="center" className={classes.amenities}>
                  <Box display="flex" alignItems="center" flexGrow="1">
                    <MeetingRoomIcon />
                    <Typography variant="body2">{propertyList.bhk}</Typography>
                  </Box>
                  <Box display="flex" alignItems="center" flexGrow="1">
                    <BathtubIcon />
                    <Typography variant="body2">4</Typography>
                  </Box>
                  <Box display="flex" alignItems="center">
                    <DirectionsCarIcon />
                    <Typography variant="body2">2</Typography>
                  </Box>
                </Box>
              </div>
              <Divider />
              <div className={classes.title}>
                <Typography variant="h6" className={classes.title1}>
                  Palm House
                </Typography>
                <Typography variant="body2" className={classes.title2}>
                  Anna Nagar, Chennai
                </Typography>
              </div>
              <Box display="flex">
                <Box display="flex" flexGrow="1">
                  <Button href="tel:9500029622" variant="contained" className={classes.button1}>
                    Call Us
                  </Button>
                </Box>
                <Link href="buy/prop1">
                  <Box display="flex">
                    <Button variant="contained" className={classes.button2}>
                      Know More
                    </Button>
                  </Box>
                </Link>
              </Box>
            </Card>
          </Grid>
          <Grid lg={3} md={4}>
            <Card className={classes.card}>
              <div className={classes.container}>
                <div className={classes.myWrapper}>
                  <Image src={props.prop2} layout="intrinsic" />
                </div>
                <span className={classes.topLeft}>For Sale</span>
                <span className={classes.bottomRight}>₹5.7 Crores</span>
              </div>
              <div>
                <Box display="flex" alignItems="center" className={classes.amenities}>
                  <Box display="flex" alignItems="center" flexGrow="1">
                    <MeetingRoomIcon />
                    <Typography variant="body2">3BHK</Typography>
                  </Box>
                  <Box display="flex" alignItems="center" flexGrow="1">
                    <BathtubIcon />
                    <Typography variant="body2">4</Typography>
                  </Box>
                  <Box display="flex" alignItems="center">
                    <DirectionsCarIcon />
                    <Typography variant="body2">2</Typography>
                  </Box>
                </Box>
              </div>
              <Divider />
              <div className={classes.title}>
                <Typography variant="h6" className={classes.title1}>
                  Stone House
                </Typography>
                <Typography variant="body2" className={classes.title2}>
                  Perungudi, Chennai
                </Typography>
              </div>
              <Box display="flex">
                <Box display="flex" flexGrow="1">
                  <Button href="tel:9500029622" variant="contained" className={classes.button1}>
                    Call Us
                  </Button>
                </Box>
                <Box display="flex">
                  <Link href="buy/prop2">
                    <Button variant="contained" className={classes.button2}>
                      Know More
                    </Button>
                  </Link>
                </Box>
              </Box>
            </Card>
          </Grid>
          <Grid lg={3} md={4}>
            <Card className={classes.card}>
              <div className={classes.container}>
                <div className={classes.myWrapper}>
                  <Image src={props.prop3} layout="intrinsic" />
                </div>
                <span className={classes.topLeft}>For Sale</span>
                <span className={classes.bottomRight}>₹6 Crores</span>
              </div>
              <div>
                <Box display="flex" alignItems="center" className={classes.amenities}>
                  <Box display="flex" alignItems="center" flexGrow="1">
                    <MeetingRoomIcon />
                    <Typography variant="body2">3BHK</Typography>
                  </Box>
                  <Box display="flex" alignItems="center" flexGrow="1">
                    <BathtubIcon />
                    <Typography variant="body2">4</Typography>
                  </Box>
                  <Box display="flex" alignItems="center">
                    <DirectionsCarIcon />
                    <Typography variant="body2">2</Typography>
                  </Box>
                </Box>
              </div>
              <Divider />
              <div className={classes.title}>
                <Typography variant="h6" className={classes.title1}>
                  Rock House
                </Typography>
                <Typography variant="body2" className={classes.title2}>
                  ECR, Chennai
                </Typography>
              </div>
              <Box display="flex">
                <Box display="flex" flexGrow="1">
                  <Button href="tel:9500029622" variant="contained" className={classes.button1}>
                    Call Us
                  </Button>
                </Box>
                <Box display="flex">
                  <Link href="buy/prop3">
                    <Button variant="contained" className={classes.button2}>
                      Know More
                    </Button>
                  </Link>
                </Box>
              </Box>
            </Card>
          </Grid>
          <Grid lg={3} md={4}>
            <Card className={classes.card}>
              <div className={classes.container}>
                <div className={classes.myWrapper}>
                  <Image src={props.prop4} layout="intrinsic" />
                </div>
                <span className={classes.topLeft}>For Sale</span>
                <span className={classes.bottomRight}>₹4.3 Crores</span>
              </div>
              <div>
                <Box display="flex" alignItems="center" className={classes.amenities}>
                  <Box display="flex" alignItems="center" flexGrow="1">
                    <MeetingRoomIcon />
                    <Typography variant="body2">3BHK</Typography>
                  </Box>
                  <Box display="flex" alignItems="center" flexGrow="1">
                    <BathtubIcon />
                    <Typography variant="body2">4</Typography>
                  </Box>
                  <Box display="flex" alignItems="center">
                    <DirectionsCarIcon />
                    <Typography variant="body2">2</Typography>
                  </Box>
                </Box>
              </div>
              <Divider />
              <div className={classes.title}>
                <Typography variant="h6" className={classes.title1}>
                  Beach House
                </Typography>
                <Typography variant="body2" className={classes.title2}>
                  Tiruvanmiyur, Chennai
                </Typography>
              </div>
              <Box display="flex">
                <Box display="flex" flexGrow="1">
                  <Button href="tel:9500029622" variant="contained" className={classes.button1}>
                    Call Us
                  </Button>
                </Box>
                <Box display="flex">
                  <Link href="buy/prop4">
                    <Button variant="contained" className={classes.button2}>
                      Know More
                    </Button>
                  </Link>
                </Box>
              </Box>
            </Card>
          </Grid>
          <Grid lg={3} md={4}>
            <Card className={classes.card}>
              <div className={classes.container}>
                <div className={classes.myWrapper}>
                  <Image src={props.prop5} layout="intrinsic" />
                </div>
                <span className={classes.topLeft}>For Sale</span>
                <span className={classes.bottomRight}>₹8 Crores</span>
              </div>
              <div>
                <Box display="flex" alignItems="center" className={classes.amenities}>
                  <Box display="flex" alignItems="center" flexGrow="1">
                    <MeetingRoomIcon />
                    <Typography variant="body2">3BHK</Typography>
                  </Box>
                  <Box display="flex" alignItems="center" flexGrow="1">
                    <BathtubIcon />
                    <Typography variant="body2">4</Typography>
                  </Box>
                  <Box display="flex" alignItems="center">
                    <DirectionsCarIcon />
                    <Typography variant="body2">2</Typography>
                  </Box>
                </Box>
              </div>
              <Divider />
              <div className={classes.title}>
                <Typography variant="h6" className={classes.title1}>
                  Garden House
                </Typography>
                <Typography variant="body2" className={classes.title2}>
                  Tiruvanmiyur, Chennai
                </Typography>
              </div>
              <Box display="flex">
                <Box display="flex" flexGrow="1">
                  <Button href="tel:9500029622" variant="contained" className={classes.button1}>
                    Call Us
                  </Button>
                </Box>
                <Box display="flex">
                  <Link href="buy/prop5">
                    <Button variant="contained" className={classes.button2}>
                      Know More
                    </Button>
                  </Link>
                </Box>
              </Box>
            </Card>
          </Grid>
          <Grid lg={3} md={4}>
            <Card className={classes.card}>
              <div className={classes.container}>
                <div className={classes.myWrapper}>
                  <Image src={props.prop6} layout="intrinsic" />
                </div>
                <span className={classes.topLeft}>For Sale</span>
                <span className={classes.bottomRight}>₹6 Crores</span>
              </div>
              <div>
                <Box display="flex" alignItems="center" className={classes.amenities}>
                  <Box display="flex" alignItems="center" flexGrow="1">
                    <MeetingRoomIcon />
                    <Typography variant="body2">3BHK</Typography>
                  </Box>
                  <Box display="flex" alignItems="center" flexGrow="1">
                    <BathtubIcon />
                    <Typography variant="body2">4</Typography>
                  </Box>
                  <Box display="flex" alignItems="center">
                    <DirectionsCarIcon />
                    <Typography variant="body2">2</Typography>
                  </Box>
                </Box>
              </div>
              <Divider />
              <div className={classes.title}>
                <Typography variant="h6" className={classes.title1}>
                  Tree House
                </Typography>
                <Typography variant="body2" className={classes.title2}>
                  Mogappair, Chennai
                </Typography>
              </div>
              <Box display="flex">
                <Box display="flex" flexGrow="1">
                  <Button href="tel:9500029622" variant="contained" className={classes.button1}>
                    Call Us
                  </Button>
                </Box>

                <Box display="flex">
                  <Link href="buy/prop6">
                    <Button variant="contained" className={classes.button2}>
                      Know More
                    </Button>
                  </Link>
                </Box>
              </Box>
            </Card>
          </Grid>
          <Grid lg={3} md={4}>
            <Card className={classes.card}>
              <div className={classes.container}>
                <div className={classes.myWrapper}>
                  <Image src={props.prop1} layout="intrinsic" />
                </div>
                <span className={classes.topLeft}>For Sale</span>
                <span className={classes.bottomRight}>₹7 Crores</span>
              </div>
              <div>
                <Box display="flex" alignItems="center" className={classes.amenities}>
                  <Box display="flex" alignItems="center" flexGrow="1">
                    <MeetingRoomIcon />
                    <Typography variant="body2">3BHK</Typography>
                  </Box>
                  <Box display="flex" alignItems="center" flexGrow="1">
                    <BathtubIcon />
                    <Typography variant="body2">4</Typography>
                  </Box>
                  <Box display="flex" alignItems="center">
                    <DirectionsCarIcon />
                    <Typography variant="body2">2</Typography>
                  </Box>
                </Box>
              </div>
              <Divider />
              <div className={classes.title}>
                <Typography variant="h6" className={classes.title1}>
                  Palm House
                </Typography>
                <Typography variant="body2" className={classes.title2}>
                  Anna Nagar, Chennai
                </Typography>
              </div>
              <Box display="flex">
                <Box display="flex" flexGrow="1">
                  <Button href="tel:9500029622" variant="contained" className={classes.button1}>
                    Call Us
                  </Button>
                </Box>
                <Box display="flex">
                  <Link href="buy/prop7">
                    <Button variant="contained" className={classes.button2}>
                      Know More
                    </Button>
                  </Link>
                </Box>
              </Box>
            </Card>
          </Grid>
          <Grid lg={3} md={4}>
            <Card className={classes.card}>
              <div className={classes.container}>
                <div className={classes.myWrapper}>
                  <Image src={props.prop2} layout="intrinsic" />
                </div>
                <span className={classes.topLeft}>For Sale</span>
                <span className={classes.bottomRight}>₹14 Crores</span>
              </div>
              <div>
                <Box display="flex" alignItems="center" className={classes.amenities}>
                  <Box display="flex" alignItems="center" flexGrow="1">
                    <MeetingRoomIcon />
                    <Typography variant="body2">3BHK</Typography>
                  </Box>
                  <Box display="flex" alignItems="center" flexGrow="1">
                    <BathtubIcon />
                    <Typography variant="body2">4</Typography>
                  </Box>
                  <Box display="flex" alignItems="center">
                    <DirectionsCarIcon />
                    <Typography variant="body2">2</Typography>
                  </Box>
                </Box>
              </div>
              <Divider />
              <div className={classes.title}>
                <Typography variant="h6" className={classes.title1}>
                  Stone House
                </Typography>
                <Typography variant="body2" className={classes.title2}>
                  Perungudi, Chennai
                </Typography>
              </div>
              <Box display="flex">
                <Box display="flex" flexGrow="1">
                  <Button href="tel:9500029622" variant="contained" className={classes.button1}>
                    Call Us
                  </Button>
                </Box>
                <Box display="flex">
                  <Link href="buy/prop8">
                    <Button variant="contained" className={classes.button2}>
                      Know More
                    </Button>
                  </Link>
                </Box>
              </Box>
            </Card>
          </Grid>
          <Grid lg={3} md={4}>
            <Card className={classes.card}>
              <div className={classes.container}>
                <div className={classes.myWrapper}>
                  <Image src={props.prop3} layout="intrinsic" />
                </div>
                <span className={classes.topLeft}>For Sale</span>
                <span className={classes.bottomRight}>₹9 Crores</span>
              </div>
              <div>
                <Box display="flex" alignItems="center" className={classes.amenities}>
                  <Box display="flex" alignItems="center" flexGrow="1">
                    <MeetingRoomIcon />
                    <Typography variant="body2">3BHK</Typography>
                  </Box>
                  <Box display="flex" alignItems="center" flexGrow="1">
                    <BathtubIcon />
                    <Typography variant="body2">4</Typography>
                  </Box>
                  <Box display="flex" alignItems="center">
                    <DirectionsCarIcon />
                    <Typography variant="body2">2</Typography>
                  </Box>
                </Box>
              </div>
              <Divider />
              <div className={classes.title}>
                <Typography variant="h6" className={classes.title1}>
                  Rock House
                </Typography>
                <Typography variant="body2" className={classes.title2}>
                  ECR, Chennai
                </Typography>
              </div>
              <Box display="flex">
                <Box display="flex" flexGrow="1">
                  <Button href="tel:9500029622" variant="contained" className={classes.button1}>
                    Call Us
                  </Button>
                </Box>
                <Box display="flex">
                  <Link href="buy/prop9">
                    <Button variant="contained" className={classes.button2}>
                      Know More
                    </Button>
                  </Link>
                </Box>
              </Box>
            </Card>
          </Grid>
          <Grid lg={3} md={4}>
            <Card className={classes.card}>
              <div className={classes.container}>
                <div className={classes.myWrapper}>
                  <Image src={props.prop4} layout="intrinsic" />
                </div>
                <span className={classes.topLeft}>For Sale</span>
                <span className={classes.bottomRight}>₹5 Crores</span>
              </div>
              <div>
                <Box display="flex" alignItems="center" className={classes.amenities}>
                  <Box display="flex" alignItems="center" flexGrow="1">
                    <MeetingRoomIcon />
                    <Typography variant="body2">3BHK</Typography>
                  </Box>
                  <Box display="flex" alignItems="center" flexGrow="1">
                    <BathtubIcon />
                    <Typography variant="body2">4</Typography>
                  </Box>
                  <Box display="flex" alignItems="center">
                    <DirectionsCarIcon />
                    <Typography variant="body2">2</Typography>
                  </Box>
                </Box>
              </div>
              <Divider />
              <div className={classes.title}>
                <Typography variant="h6" className={classes.title1}>
                  Beach House
                </Typography>
                <Typography variant="body2" className={classes.title2}>
                  Tiruvanmiyur, Chennai
                </Typography>
              </div>
              <Box display="flex">
                <Box display="flex" flexGrow="1">
                  <Button href="tel:9500029622" variant="contained" className={classes.button1}>
                    Call Us
                  </Button>
                </Box>
                <Box display="flex">
                  <Link href="buy/prop10">
                    <Button variant="contained" className={classes.button2}>
                      Know More
                    </Button>
                  </Link>
                </Box>
              </Box>
            </Card>
          </Grid>
          <Grid lg={3} md={4}>
            <Card className={classes.card}>
              <div className={classes.container}>
                <div className={classes.myWrapper}>
                  <Image src={props.prop5} layout="intrinsic" />
                </div>
                <span className={classes.topLeft}>For Sale</span>
                <span className={classes.bottomRight}>₹5 Crores</span>
              </div>
              <div>
                <Box display="flex" alignItems="center" className={classes.amenities}>
                  <Box display="flex" alignItems="center" flexGrow="1">
                    <MeetingRoomIcon />
                    <Typography variant="body2">3BHK</Typography>
                  </Box>
                  <Box display="flex" alignItems="center" flexGrow="1">
                    <BathtubIcon />
                    <Typography variant="body2">4</Typography>
                  </Box>
                  <Box display="flex" alignItems="center">
                    <DirectionsCarIcon />
                    <Typography variant="body2">2</Typography>
                  </Box>
                </Box>
              </div>
              <Divider />
              <div className={classes.title}>
                <Typography variant="h6" className={classes.title1}>
                  Garden House
                </Typography>
                <Typography variant="body2" className={classes.title2}>
                  Tiruvanmiyur, Chennai
                </Typography>
              </div>
              <Box display="flex">
                <Box display="flex" flexGrow="1">
                  <Button href="tel:9500029622" variant="contained" className={classes.button1}>
                    Call Us
                  </Button>
                </Box>

                <Box display="flex">
                  <Link href="buy/prop11">
                    <Button variant="contained" className={classes.button2}>
                      Know More
                    </Button>
                  </Link>
                </Box>
              </Box>
            </Card>
          </Grid>
          <Grid lg={3} md={4}>
            <Card className={classes.card}>
              <div className={classes.container}>
                <div className={classes.myWrapper}>
                  <Image src={props.prop6} layout="intrinsic" />
                </div>
                <span className={classes.topLeft}>For Sale</span>
                <span className={classes.bottomRight}>₹5 Crores</span>
              </div>
              <div>
                <Box display="flex" alignItems="center" className={classes.amenities}>
                  <Box display="flex" alignItems="center" flexGrow="1">
                    <MeetingRoomIcon />
                    <Typography variant="body2">3BHK</Typography>
                  </Box>
                  <Box display="flex" alignItems="center" flexGrow="1">
                    <BathtubIcon />
                    <Typography variant="body2">4</Typography>
                  </Box>
                  <Box display="flex" alignItems="center">
                    <DirectionsCarIcon />
                    <Typography variant="body2">2</Typography>
                  </Box>
                </Box>
              </div>
              <Divider />
              <div className={classes.title}>
                <Typography variant="h6" className={classes.title1}>
                  Tree House
                </Typography>
                <Typography variant="body2" className={classes.title2}>
                  Mogappair, Chennai
                </Typography>
              </div>
              <Box display="flex">
                <Box display="flex" flexGrow="1">
                  <Button href="tel:9500029622" variant="contained" className={classes.button1}>
                    Call Us
                  </Button>
                </Box>
                <Box display="flex">
                  <Link href="buy/prop12">
                    <Button variant="contained" className={classes.button2}>
                      Know More
                    </Button>
                  </Link>
                </Box>
              </Box>
            </Card>
          </Grid> */}
    </div>
  );
}

export default LatestPropertySection;
