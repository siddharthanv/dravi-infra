/* eslint-disable jsx-a11y/alt-text */
import { Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ServicePageBanner from "./ServicePageModules/ServicePageBanner";
import ContactForm from "../HomePage/ContactForm/ContactForm";
import classes from "./ServicePage.module.css";
import Image from "next/image";
import Links from "./ServicePageModules/Links";

const useStyles = makeStyles((theme) => ({
  item1: {
    order: 2,
    [theme.breakpoints.up("md")]: {
      order: 1,
    },
  },
  item2: {
    order: 1,
    [theme.breakpoints.up("md")]: {
      order: 2,
    },
  },
}));

function ServicePage(props) {
  const muiclasses = useStyles();
  return (
    <div>
      <ServicePageBanner banner1={props.banner1} />
      <Container>
        <Grid container spacing={5}>
          <Grid item lg={7} xs={12} className={muiclasses.item1}>
            <h1 className={classes.headingh1}>{props.name}</h1>
            <div className={classes.unsetImg}>
              <Image
                className={classes.customImg}
                src={`/${props.image}`}
                alt="Prop Dealz Logo"
                width="700px"
                height="277px"
              />
            </div>
            <div
              className={classes.categoryDescription}
              dangerouslySetInnerHTML={{
                __html: props.content,
              }}
            />
          </Grid>
          <Grid item lg={5} xs={12} className={muiclasses.item2}>
            <ContactForm />
            <Links />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default ServicePage;
