import { Container } from "@material-ui/core";
import Heading from "../HomePageSectionHeading/Heading";
import ReviewCarousel from "./ReviewComponents/ReviewCarousel";
import classes from "./Review.module.css";

function Review(props) {
  return (
    <div className={classes.reviewStyle}>
      <Container>
        <Heading subHeading="Testimonial" heading="What our Customers Say" />
        <ReviewCarousel boy1={props.boy1} boy2={props.boy2} boy3={props.boy3} girl1={props.girl1} girl2={props.girl2} />
      </Container>
    </div>
  );
}

export default Review;
