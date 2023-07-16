import Header from "../../components/HomePage/Header/Header";
import RegisterOffice from "../../components/SROFullList/SROFullList";
import PopularService from "../../components/HomePage/PopularService/PopularService";
import PopularProperties from "../../components/HomePage/PopularProperties/PopularProperties";
import Footer from "../../components/HomePage/Footer/Footer";

//  Import Images
import Logo from "../../public/images/PropDealzLogo.png";
import img1 from "../../public/images/1.jpg";
import img2 from "../../public/images/2.jpg";
import img3 from "../../public/images/3.jpg";
import img4 from "../../public/images/4.jpg";
import img5 from "../../public/images/5.jpg";
import img6 from "../../public/images/6.jpg";
import img7 from "../../public/images/7.jpg";
import img8 from "../../public/images/8.jpg";
import img9 from "../../public/images/9.jpg";
import img10 from "../../public/images/10.jpg";
import img11 from "../../public/images/11.jpg";
import img12 from "../../public/images/12.jpg";
import img13 from "../../public/images/13.jpg";
import img14 from "../../public/images/14.jpg";
import img15 from "../../public/images/15.jpg";
import img16 from "../../public/images/16.jpg";
import img17 from "../../public/images/17.jpg";
import SRO1 from "../../public/images/SRO1.jpg";
import SRO2 from "../../public/images/SRO2.jpg";
import SRO3 from "../../public/images/SRO3.jpg";
import SRO4 from "../../public/images/SRO4.jpg";
import Buy from "../../public/images/Buy.jpg";
import Sell from "../../public/images/saleProp.jpg";

//  Import JSON File
import serviceFullList from "../../servicesFullList";
import registerOfficeDetailsFullList from "../../registerOfficeDetailsJsonFullList";

function SroList() {
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
      <RegisterOffice
        registerOfficeDetailsFull={registerOfficeDetailsFullList}
        SRO1={SRO1}
        SRO2={SRO2}
        SRO3={SRO3}
        SRO4={SRO4}
      />
      <PopularProperties BuyImage={Buy} SellImage={Sell} />
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

      <Footer />
    </div>
  );
}

export default SroList;
