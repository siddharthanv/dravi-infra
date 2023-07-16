import Image from "next/image";
import classes from "./ServicePageBanner.module.css";

function ServicePageBanner(props) {
  return (
    <div>
      <div className={classes.bannerWrapper}>
        <Image src={props.banner1} alt="" />
      </div>
    </div>
  );
}

export default ServicePageBanner;
