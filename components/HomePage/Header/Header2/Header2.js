/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemText,
  SwipeableDrawer,
} from "@material-ui/core";
import ButtonComponent from "./ButtonComponent";
import classes from "./Header2.module.css";
import { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import Link from "next/link";

function Header2(props) {
  const { serviceItems } = props;
  const [state, setState] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(true);

  const navbarKey = [
    {
      name: "HOME",
      slug: "/",
    },
    {
      name: "ABOUT",
      slug: "#about",
    },
    {
      name: "SHOP",
      slug: "#product",
    },
    {
      name: "CONTACT",
      slug: "#contact",
    },
  ];

  function handleClick() {
    setState(true);
  }
  return (
    <div>
      <Container>
        <Box display="flex">
          <Box flexGrow={1}>
            <div className={classes.logoWrapper}>
              <Link href="/">
                <Image src={props.image} alt="Prop Dealz Logo" layout="intrinsic" />
              </Link>
            </div>
          </Box>
          <div className={classes.a}>
            <ButtonComponent className={`${classes.buttonComponent} ${classes.a}`} categoryName="Registration" />
          </div>
          <div className={dropdownOpen ? classes.b : classes.bclose}>
            <Container>
              <Grid container spacing={4}>
                <Grid item lg={4}>
                  <ul className={classes.ulStyle}>
                    {serviceItems[0].serviceFullList.map((service) => (
                      <Link
                        key={service.serviceId}
                        style={{ textDecoration: "none" }}
                        href={"/services/" + service.serviceNameSlug}
                      >
                        <li
                          onClick={() => {
                            setDropdownOpen(false);
                            setTimeout(() => setTimeout(setDropdownOpen(true)), 100);
                          }}
                          className={classes.navbarList}
                        >
                          {service.serviceName}
                        </li>
                      </Link>
                    ))}
                  </ul>
                </Grid>
                <Grid item lg={4}>
                  <Link href={"/services/sale-deed"}>
                    <div
                      onClick={() => {
                        setDropdownOpen(false);
                        setTimeout(() => setTimeout(setDropdownOpen(true)), 100);
                      }}
                      className={classes.myWrapper}
                    >
                      <Image className={classes.navImage} src={props.img1} alt="" layout="intrinsic" />
                    </div>
                  </Link>
                </Grid>
                <Grid item lg={4}>
                  <Link href={"/services/construction-agreement"}>
                    <div
                      onClick={() => {
                        setDropdownOpen(false);
                        setTimeout(() => setTimeout(setDropdownOpen(true)), 100);
                      }}
                      className={classes.myWrapper}
                    >
                      <Image className={classes.navImage} src={props.img3} alt="" layout="intrinsic" />
                    </div>
                  </Link>
                </Grid>
              </Grid>
            </Container>
          </div>
          <div className={classes.a1}>
            <ButtonComponent className={`${classes.buttonComponent} ${classes.a}`} categoryName="EC" />
          </div>
          <div className={dropdownOpen ? classes.b1 : classes.bclose}>
            <Container>
              <Grid container spacing={4}>
                <Grid item lg={4}>
                  <ul className={classes.ulStyle}>
                    {serviceItems[1].serviceFullList.map((service) => (
                      <Link
                        key={service.serviceId}
                        style={{ textDecoration: "none" }}
                        href={"/services/" + service.serviceNameSlug}
                      >
                        <li
                          onClick={() => {
                            setDropdownOpen(false);
                            setTimeout(() => setTimeout(setDropdownOpen(true)), 100);
                          }}
                          className={classes.navbarList}
                        >
                          {service.serviceName}
                        </li>
                      </Link>
                    ))}
                  </ul>
                </Grid>
                <Grid item lg={4}>
                  <Link href="/services/sale-agreement">
                    <div
                      onClick={() => {
                        setDropdownOpen(false);
                        setTimeout(() => setTimeout(setDropdownOpen(true)), 100);
                      }}
                      className={classes.myWrapper}
                    >
                      <Image className={classes.navImage} src={props.img2} alt="" layout="intrinsic" />
                    </div>
                  </Link>
                </Grid>
                <Grid item lg={4}>
                  <Link href={"/services/lease-deed"}>
                    <div
                      onClick={() => {
                        setDropdownOpen(false);
                        setTimeout(() => setTimeout(setDropdownOpen(true)), 100);
                      }}
                      className={classes.myWrapper}
                    >
                      <Image className={classes.navImage} src={props.img4} alt="" layout="intrinsic" />
                    </div>
                  </Link>
                </Grid>
              </Grid>
            </Container>
          </div>
          <div className={classes.a2}>
            <ButtonComponent className={`${classes.buttonComponent} ${classes.a}`} categoryName="Transfers" />
          </div>
          <div className={dropdownOpen ? classes.b2 : classes.bclose}>
            <Container>
              <Grid container spacing={4}>
                <Grid item lg={4}>
                  <ul className={classes.ulStyle}>
                    {serviceItems[2].serviceFullList.map((service) => (
                      <Link
                        key={service.serviceId}
                        style={{ textDecoration: "none" }}
                        href={"/services/" + service.serviceNameSlug}
                      >
                        <li
                          onClick={() => {
                            setDropdownOpen(false);
                            setTimeout(() => setTimeout(setDropdownOpen(true)), 100);
                          }}
                          className={classes.navbarList}
                        >
                          {service.serviceName}
                        </li>
                      </Link>
                    ))}
                  </ul>
                </Grid>
                <Grid item lg={4}>
                  <Link href={"/services/name-transfer"}>
                    <div
                      onClick={() => {
                        setDropdownOpen(false);
                        setTimeout(() => setTimeout(setDropdownOpen(true)), 100);
                      }}
                      className={classes.myWrapper}
                    >
                      <Image className={classes.navImage} src={props.img14} alt="" layout="intrinsic" />
                    </div>
                  </Link>
                </Grid>
                <Grid item lg={4}>
                  <Link href={"/services/modt-registration"}>
                    <div
                      onClick={() => {
                        setDropdownOpen(false);
                        setTimeout(() => setTimeout(setDropdownOpen(true)), 100);
                      }}
                      className={classes.myWrapper}
                    >
                      <Image className={classes.navImage} src={props.img6} alt="" layout="intrinsic" />
                    </div>
                  </Link>
                </Grid>
              </Grid>
            </Container>
          </div>
          <div className={classes.a3}>
            <ButtonComponent className={`${classes.buttonComponent} ${classes.a}`} categoryName="Certificates" />
          </div>
          <div className={dropdownOpen ? classes.b3 : classes.bclose}>
            <Container>
              <Grid container spacing={4}>
                <Grid item lg={4}>
                  <ul className={classes.ulStyle}>
                    {serviceItems[3].serviceFullList.map((service) => (
                      <Link
                        key={service.serviceId}
                        style={{ textDecoration: "none" }}
                        href={"/services/" + service.serviceNameSlug}
                      >
                        <li
                          onClick={() => {
                            setDropdownOpen(false);
                            setTimeout(() => setTimeout(setDropdownOpen(true)), 100);
                          }}
                          className={classes.navbarList}
                        >
                          {service.serviceName}
                        </li>
                      </Link>
                    ))}
                  </ul>
                </Grid>
                <Grid item lg={4}>
                  <Link href={"/services/legal-heir-certificate"}>
                    <div
                      onClick={() => {
                        setDropdownOpen(false);
                        setTimeout(() => setTimeout(setDropdownOpen(true)), 100);
                      }}
                      className={classes.myWrapper}
                    >
                      <Image className={classes.navImage} src={props.img12} alt="" layout="intrinsic" />
                    </div>
                  </Link>
                </Grid>
                <Grid item lg={4}>
                  <Link href={"/services/birth-certificate"}>
                    <div
                      onClick={() => {
                        setDropdownOpen(false);
                        setTimeout(() => setTimeout(setDropdownOpen(true)), 100);
                      }}
                      className={classes.myWrapper}
                    >
                      <Image className={classes.navImage} src={props.img10} alt="" layout="intrinsic" />
                    </div>
                  </Link>
                </Grid>
              </Grid>
            </Container>
          </div>
          <div className={classes.a4}>
            <ButtonComponent className={`${classes.buttonComponent} ${classes.a}`} categoryName="Approvals" />
          </div>
          <div className={dropdownOpen ? classes.b4 : classes.bclose}>
            <Container>
              <Grid container spacing={4}>
                <Grid item lg={4}>
                  <ul className={classes.ulStyle}>
                    {serviceItems[4].serviceFullList.map((service) => (
                      <Link
                        key={service.serviceId}
                        style={{ textDecoration: "none" }}
                        href={"/services/" + service.serviceNameSlug}
                      >
                        <li
                          onClick={() => {
                            setDropdownOpen(false);
                            setTimeout(() => setTimeout(setDropdownOpen(true)), 100);
                          }}
                          className={classes.navbarList}
                        >
                          {service.serviceName}
                        </li>
                      </Link>
                    ))}
                  </ul>
                </Grid>
                <Grid item lg={4}>
                  <Link href={"/services/dtcp-approval"}>
                    <div
                      onClick={() => {
                        setDropdownOpen(false);
                        setTimeout(() => setTimeout(setDropdownOpen(true)), 100);
                      }}
                      className={classes.myWrapper}
                    >
                      <Image className={classes.navImage} src={props.img8} alt="" layout="intrinsic" />
                    </div>
                  </Link>
                </Grid>
                <Grid item lg={4}>
                  <Link href={"/services/will-deed"}>
                    <div
                      onClick={() => {
                        setDropdownOpen(false);
                        setTimeout(() => setTimeout(setDropdownOpen(true)), 100);
                      }}
                      className={classes.myWrapper}
                    >
                      <Image className={classes.navImage} src={props.img16} alt="" layout="intrinsic" />
                    </div>
                  </Link>
                </Grid>
              </Grid>
            </Container>
          </div>
          <div className={classes.a5}>
            <ButtonComponent className={`${classes.buttonComponent} ${classes.a}`} categoryName="Valuations" />
          </div>
          <div className={dropdownOpen ? classes.b5 : classes.bclose}>
            <Container>
              <Grid container spacing={4}>
                <Grid item lg={4}>
                  <ul className={classes.ulStyle}>
                    {serviceItems[5].serviceFullList.map((service) => (
                      <Link
                        key={service.serviceId}
                        style={{ textDecoration: "none" }}
                        href={"/services/" + service.serviceNameSlug}
                      >
                        <li
                          onClick={() => {
                            setDropdownOpen(false);
                            setTimeout(() => setTimeout(setDropdownOpen(true)), 100);
                          }}
                          className={classes.navbarList}
                        >
                          {service.serviceName}
                        </li>
                      </Link>
                    ))}
                  </ul>
                </Grid>
                <Grid item lg={4}>
                  <Link href={"/services/partition-deed"}>
                    <div
                      onClick={() => {
                        setDropdownOpen(false);
                        setTimeout(() => setTimeout(setDropdownOpen(true)), 100);
                      }}
                      className={classes.myWrapper}
                    >
                      <Image className={classes.navImage} src={props.img15} alt="" layout="intrinsic" />
                    </div>
                  </Link>
                </Grid>
                <Grid item lg={4}>
                  <Link href={"/services/fencing"}>
                    <div
                      onClick={() => {
                        setDropdownOpen(false);
                        setTimeout(() => setTimeout(setDropdownOpen(true)), 100);
                      }}
                      className={classes.myWrapper}
                    >
                      <Image className={classes.navImage} src={props.img17} alt="" layout="intrinsic" />
                    </div>
                  </Link>
                </Grid>
              </Grid>
            </Container>
          </div>
          <IconButton
            edge="start"
            onClick={handleClick}
            className={classes.mobDisBlock}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>

          <SwipeableDrawer anchor="right" open={state} onClose={() => setState(false)} onOpen={() => setState(true)}>
            <div
              className={classes.mobNavList}
              onClick={() => {
                setState(false);
              }}
            >
              <List className="rubik">
                {navbarKey.map((menu, index) => (
                  <Link key={index} href="#product" className={classes.mobNavATag}>
                    <ListItem button key={index}>
                      <ListItemText>{menu.name}</ListItemText>
                    </ListItem>
                  </Link>
                ))}
              </List>
            </div>
          </SwipeableDrawer>
        </Box>
      </Container>
    </div>
  );
}

export default Header2;
