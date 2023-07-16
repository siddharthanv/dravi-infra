import { useRouter } from "next/router";
import Header from "../../components/HomePage/Header/Header";
import ServicePage from "../../components/ServicePage/ServicePage";
import Footer from "../../components/HomePage/Footer/Footer";

import Head from "next/head";

//  Import Images
import Logo from "../../public/images/Logo.jpeg";
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
import banner1 from "../../public/images/banner1.jpg";

//  Import JSON File
import serviceFullList from "../../servicesFullList";
import { getServiceByName } from "../../serviceDetails";

function Service() {
  const router = useRouter();
  const serviceSlug = router.query.service;
  const serviceContent = getServiceByName(serviceSlug);

  if (!serviceContent) {
    return <p>No Service Found for this URL. Please go back to Home Page</p>;
  }
  return (
    <div>
      <Head>
        <title>{serviceContent.metaTitle}</title>
        <meta name="description" content={serviceContent.metaDescription} />
        <meta name="og:title" content={serviceContent.metaTitle} />
        <meta name="og:type" content="company" />
        <meta name="og:url" content={serviceContent.metaSiteURL} />
        <meta name="og:site_name" content="Dravi Infra" />
        <meta name="og:description" content={serviceContent.metaDescription} />
      </Head>
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
      <ServicePage
        name={serviceContent.name}
        id={serviceContent.id}
        slug={serviceContent.slug}
        content={serviceContent.content}
        image={serviceContent.image}
        banner1={banner1}
      />
      <Footer />
    </div>
  );
}

export default Service;
