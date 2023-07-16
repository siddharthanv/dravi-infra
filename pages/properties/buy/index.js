import Header from "../../../components/HomePage/Header/Header";
import BuyPropertyPage from "../../../components/Property/Buy/BuyPropertyPage";
import Footer from "../../../components/HomePage/Footer/Footer";
import PopularService from "../../../components/HomePage/PopularService/PopularService";
import RegisterOffice from "../../../components/HomePage/RegisterOffice/RegisterOffice";

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
import BuyPropertyBanner from "../../../public/images/BuyPropertyBanner.jpg";
import prop1 from "../../../public/images/adambakkamProperty.jpeg";
import prop2 from "../../../public/images/abiramiTheatreMainRoadCommercial1.jpeg";
import prop3 from "../../../public/images/abiramiThaetreMainRoadcommercial2.jpeg";
import prop4 from "../../../public/images/prop4.jpg";
import prop5 from "../../../public/images/prop5.jpg";
import prop6 from "../../../public/images/prop6.jpg";
import SRO1 from "../../../public/images/SRO1.jpg";
import SRO2 from "../../../public/images/SRO2.jpg";
import SRO3 from "../../../public/images/SRO3.jpg";
import SRO4 from "../../../public/images/SRO4.jpg";

//  Import JSON File
import serviceFullList from "../../../servicesFullList";
import registerOfficeDetails from "../../../registerOfficeDetailsJson";
import propertyFullList from "../../../propertyListJson";

function Property() {
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
      <BuyPropertyPage
        BuyPropertyBanner={BuyPropertyBanner}
        // prop1={prop1}
        // prop2={prop2}
        // prop3={prop3}
        // prop4={prop4}
        // prop5={prop5}
        // prop6={prop6}
        propertiesFullList={propertyFullList}
      />
      <PopularService
        img1={img1}
        img2={img2}
        img3={img3}
        img4={img4}
        img5={img5}
        img6={img6}
        img7={img7}
        img8={img8}
        img9={img9}
      />
      <RegisterOffice registerOfficeDetails={registerOfficeDetails} SRO1={SRO1} SRO2={SRO2} SRO3={SRO3} SRO4={SRO4} />
      <Footer />
    </div>
  );
}

export default Property;
