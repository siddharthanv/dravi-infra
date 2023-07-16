import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "../src/theme";
import Wa from "../components/WhatsApp/wa";
import { useRouter } from "next/router";

export default function MyApp(props) {
  const { Component, pageProps } = props;

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  function FacebookPixel() {
    const router = useRouter();

    React.useEffect(() => {
      import("react-facebook-pixel")
        .then((x) => x.default)
        .then((ReactPixel) => {
          ReactPixel.init("772502410036696");
          ReactPixel.pageView();
          router.events.on("routeChangeComplete", () => {
            ReactPixel.pageView();
          });
        });
    });
    return null;
  }

  return (
    <React.Fragment>
      <Head>
        <link rel="canonical" href="https://propdealz.com/"></link>
        <title>Dravi Infra- Property Services at your Doorstep</title>
        <meta
          name="description"
          content="Dravi Infra provides property registration and property services at your doorstep in Chennai, Tamil Nadu"
        />
        <meta
          name="keywords"
          content="Property Registration Services in Chennai, Property Registration Services in Tamil Nadu, Sale Deed Registration, Construction Agreement Registration, 
            Sale Agreement Registration,
            Lease Deed Registration,
            Settlement Deed Registration,
            Gift Deed Registration,
            Partition Deed Registration,
            MODT Registration,
            Simple Mortgage Registration,
            Release Deed Registration,
            Rental Agreement Registration,
            Will Deed Registration,
            Manual EC, Computer EC,
            Patta/Chitta/Adangal Change,
            Property Name Transfers,
            Birth Certificate, 
            Death Certificate, 
            Legal Heir Certificate,
            DTCP Approval,
            CMDA Approval in chennai,
            Surveying Work in chennai,
            Fencing Work in chennai
            "
        />
        <meta name="og:title" content="Dravi Infra- Property Services at your Doorstep" />
        <meta name="og:type" content="company" />
        <meta name="og:url" content="https://propdealz.com/" />
        <meta name="og:site_name" content="Dravi Infra" />
        <meta
          name="og:description"
          content="Dravi Infra provides property registration and property services at your doorstep in Chennai, Tamil Nadu"
        />
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="shortcut icon" href="images/icon.png" />
      </Head>
      <FacebookPixel />
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} />
        <Wa />
      </ThemeProvider>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
