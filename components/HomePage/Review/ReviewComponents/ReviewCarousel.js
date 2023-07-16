import ReviewCard from "./ReviewCard";
import Carousel from "react-material-ui-carousel";

function ReviewCarousel(props) {
  return <ReviewCard boy1={props.boy1} boy2={props.boy2} boy3={props.boy3} girl1={props.girl1} girl2={props.girl2} />;
}

export default ReviewCarousel;
