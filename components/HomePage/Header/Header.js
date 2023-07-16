import { AppBar } from "@material-ui/core";
import Header1 from "./Header1/Header1";
import Header2 from "./Header2/Header2";
import classes from "./Header.module.css";

function Header(props) {
  return (
    <div>
      <AppBar className={classes.appbarStyle}>
        <Header1 />
        <Header2
          image={props.image}
          serviceItems={props.serviceItems}
          img1={props.img1}
          img2={props.img2}
          img3={props.img3}
          img4={props.img4}
          img5={props.img5}
          img6={props.img6}
          img7={props.img7}
          img8={props.img8}
          img9={props.img9}
          img10={props.img10}
          img11={props.img11}
          img12={props.img12}
          img13={props.img13}
          img14={props.img14}
          img15={props.img15}
          img16={props.img16}
          img17={props.img17}
        />
        <main>{props.children}</main>
      </AppBar>
    </div>
  );
}

export default Header;
