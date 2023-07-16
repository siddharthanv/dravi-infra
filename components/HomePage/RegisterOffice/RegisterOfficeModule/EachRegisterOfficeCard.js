/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/link-passhref */
import classes from "./EachRegisterOfficeCard.module.css";
import Link from "next/link";
import Image from "next/image";
import { Card, Typography, Button, CardMedia } from "@material-ui/core";

function EachRegisterOfficeCard(props) {
  return (
    <Link href={"/sro-list/" + props.slug}>
      <div className={classes.rootMother}>
        <Card className={classes.root}>
          <div className={classes.details}>
            <Typography variant="body1" className={classes.cardHeading}>
              {props.registerOfficeName} SRO
            </Typography>
            <Typography variant="caption" className={classes.textDull}>
              {props.registerOfficeAddress}
            </Typography>
            <a href={"/sro-list/" + props.slug} className={classes.aTagGetServiceStyle}>
              <Button size="small" variant="contained" className={classes.cardButton}>
                Get Service
              </Button>
            </a>
          </div>
          <div className={classes.imageCover}>
            <div className={classes.myWrapper}>
              <Image
                src={
                  props.srNo
                    ? props.srNo % 4 == 0
                      ? props.SRO4
                      : props.srNo % 3 == 0
                      ? props.SRO3
                      : props.srNo % 2 == 0
                      ? props.SRO2
                      : props.SRO1
                    : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc5JFdOPgUS2yWNPFPlr-r-KuSlAZGQLo3cg&usqp=CAU"
                }
                layout="intrinsic"
              />
            </div>
          </div>
        </Card>
      </div>
    </Link>
  );
}

export default EachRegisterOfficeCard;
