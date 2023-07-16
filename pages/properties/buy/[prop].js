import BuyDetails from "../../../components/Property/BuyDetailsPage/BuyDetails";
import { useRouter } from "next/router";
import Header from "../../../components/HomePage/Header/Header";
import Footer from "../../../components/HomePage/Footer/Footer";

//  Import Images
import Logo from "../../../public/images/Logo.jpeg";
import img1 from "../../../public/images/1.jpg";
import img2 from "../../../public/images/2.jpg";
import img3 from "../../../public/images/3.jpg";
import img4 from "../../../public/images/4.jpg";
import img5 from "../../../public/images/5.jpg";
import img6 from "../../../public/images/6.jpg";
import img7 from "../../../public/images/7.jpg";
import img8 from "../../../public/images/8.jpg";
import img9 from "../../../public/images/9.jpg";
import img10 from "../../../public/images/10.jpg";
import img11 from "../../../public/images/11.jpg";
import img12 from "../../../public/images/12.jpg";
import img13 from "../../../public/images/13.jpg";
import img14 from "../../../public/images/14.jpg";
import img15 from "../../../public/images/15.jpg";
import img16 from "../../../public/images/16.jpg";
import img17 from "../../../public/images/17.jpg";
import prop1 from "../../../public/images/adambakkamProperty.jpeg";
import prop2 from "../../../public/images/prop2.jpg";
import prop3 from "../../../public/images/prop3.jpg";
import prop4 from "../../../public/images/prop4.jpg";
import prop5 from "../../../public/images/prop5.jpg";
import prop6 from "../../../public/images/prop6.jpg";

//  Import JSON File
import serviceFullList from "../../../servicesFullList";
import propertyListJson from "../../../propertyListJson";

function PropertyDetailedPage() {
  const router = useRouter();
  const propertyId = router.query.prop;
  console.log(propertyId);
  return (
    <div>
      <Header
        image={Logo}
        serviceItems={serviceFullList}
        img1={img1}
        img2={img2}
        img3={img3}
        img4={img4}
        img5={img5}
        img6={img6}
        img7={img7}
        img8={img8}
        img9={img9}
        img10={img10}
        img11={img11}
        img12={img12}
        img13={img13}
        img14={img14}
        img15={img15}
        img16={img16}
        img17={img17}
      />
      {propertyListJson.map(
        (list) =>
          list.propertyId == propertyId && (
            <BuyDetails
              prop1={list.prop1}
              propertyName={list.propertyName}
              propertyPrice={list.propertyPrice}
              propertyArea={list.propertyArea}
              bhk={list.bhk}
              bath={list.bath}
              carParking={list.carParking}
              propertyDescription={list.propertyDescription}
              furnished={list.furnished}
              swimmingPool={list.swimmingPool}
              gym={list.gym}
              gatedCommunity={list.gatedCommunity}
              playArea={list.playArea}
              CCTVCamera={list.CCTVCamera}
              trashRemoval={list.trashRemoval}
              city={list.city}
              state={list.State}
            />
          )
        //     furnished: "NA",
        // swimmingPool: "NA",
        // gym: "NA",
        // gatedCommunity: "NA",
        // playArea: "NA",
        // CCTVCamers: "NA",
        // trashRemoval: "NA",
      )}
      <Footer />
    </div>
  );
}

export default PropertyDetailedPage;
