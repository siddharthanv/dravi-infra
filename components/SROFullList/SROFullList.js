/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Container, Grid, Typography } from "@material-ui/core";
import EachRegisterOfficeCard from "../HomePage/RegisterOffice/RegisterOfficeModule/EachRegisterOfficeCard";
import classes from "./SROFullList.module.css";
import Heading from "../HomePage/HomePageSectionHeading/Heading";
import { useState, useEffect } from "react";

function SROFullList(props) {
  const { registerOfficeDetailsFull } = props;
  const [filteredSroList, setFilteredSroList] = useState([]);
  const [filteredDistrict, setFilteredDistrict] = useState([]);
  const [filteredZone, setFilteredZOne] = useState([]);
  const [search, setSearch] = useState("");
  const [value, setValue] = useState("1");
  const [zoneName, setZoneName] = useState("2");
  const [defaultName, setDefaultName] = useState("Tamil Nadu");

  useEffect(() => {
    setFilteredSroList(
      registerOfficeDetailsFull.filter((filteredRegOffice) =>
        filteredRegOffice.sroName.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search]);

  useEffect(() => {
    setFilteredDistrict(
      registerOfficeDetailsFull.filter((filteredRegDistrict) => filteredRegDistrict.district.includes(value))
    );
  }, [value]);

  useEffect(() => {
    setFilteredZOne(registerOfficeDetailsFull.filter((filteredRegZone) => filteredRegZone.zone.includes(zoneName)));
  }, [zoneName]);

  let regDistrict = [];
  for (let i = 0; i < registerOfficeDetailsFull.length; i++) {
    regDistrict.push(registerOfficeDetailsFull[i].district);
  }
  let uniqueRegDistrict = [...new Set(regDistrict)];

  let regZone = [];
  for (let i = 0; i < registerOfficeDetailsFull.length; i++) {
    regZone.push(registerOfficeDetailsFull[i].zone);
  }
  let uniqueRegZone = [...new Set(regZone)];

  return (
    <div>
      <div style={{ marginTop: "25px" }}>
        <Container>
          <Heading heading={`Sub Registrar Offices in  ${defaultName}`} />
          <Box display="flex">
            <Box flexGrow={1}>
              <select
                value={zoneName}
                className={classes.inputField}
                onChange={(e) => {
                  setZoneName(e.currentTarget.value);
                  setSearch("");
                  setValue("1");
                  setDefaultName(e.currentTarget.value + " Zone");
                }}
              >
                <option value="1">Select Zone</option>
                {uniqueRegZone.map((detail, index) => (
                  <option key={index} value={detail}>
                    {detail}
                  </option>
                ))}
              </select>
              <select
                value={value}
                className={classes.inputField}
                onChange={(e) => {
                  setValue(e.currentTarget.value);
                  setSearch("");
                  setZoneName("2");
                  setDefaultName(e.currentTarget.value + " District");
                }}
              >
                <option value="1">Select District</option>
                {uniqueRegDistrict.map((detail, index) => (
                  <option key={index} value={detail}>
                    {detail}
                  </option>
                ))}
              </select>
              <input
                name="searchInput"
                value={search}
                className={classes.inputField}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setValue("1");
                  setZoneName("2");
                  setDefaultName("Tamil Nadu");
                }}
                placeholder="Search SRO Here"
              />
            </Box>
            <Box>
              <Typography className={classes.searchNumbers}>
                Number of Search Matches:{" "}
                {value === "1"
                  ? zoneName === "2"
                    ? filteredSroList.length
                    : filteredZone.length
                  : filteredDistrict.length}
              </Typography>
            </Box>
          </Box>
          <Grid container spacing={4} className={classes.sroListGrid}>
            {/* {registerOfficeDetailsFull.map((detail, index) => (
            <Grid item lg={4} md={6} xs={12} key={index}>
              <EachRegisterOfficeCard
                registerOfficeName={detail.sroName}
                title={detail.sroName}
                image={detail.image}
                registerOfficeAddress={detail.address}
                slug={detail.sroName}
                srNo={detail.srNo}
                SRO1={props.SRO1}
                SRO2={props.SRO2}
                SRO3={props.SRO3}
                SRO4={props.SRO4}
              />
            </Grid>
          ))} */}
            {value === "1"
              ? zoneName === "2"
                ? filteredSroList.map((detail, index) => (
                    <Grid item lg={4} md={6} xs={12} key={index}>
                      <EachRegisterOfficeCard
                        registerOfficeName={detail.sroName}
                        title={detail.sroName}
                        image={detail.image}
                        registerOfficeAddress={detail.address}
                        slug={detail.sroName}
                        srNo={detail.srNo}
                        SRO1={props.SRO1}
                        SRO2={props.SRO2}
                        SRO3={props.SRO3}
                        SRO4={props.SRO4}
                      />
                    </Grid>
                  ))
                : filteredZone.map((detail, index) => (
                    <Grid item lg={4} md={6} xs={12} key={index}>
                      <EachRegisterOfficeCard
                        registerOfficeName={detail.sroName}
                        title={detail.sroName}
                        image={detail.image}
                        registerOfficeAddress={detail.address}
                        slug={detail.sroName}
                        srNo={detail.srNo}
                        SRO1={props.SRO1}
                        SRO2={props.SRO2}
                        SRO3={props.SRO3}
                        SRO4={props.SRO4}
                      />
                    </Grid>
                  ))
              : filteredDistrict.map((detail, index) => (
                  <Grid item lg={4} md={6} xs={12} key={index}>
                    <EachRegisterOfficeCard
                      registerOfficeName={detail.sroName}
                      title={detail.sroName}
                      image={detail.image}
                      registerOfficeAddress={detail.address}
                      slug={detail.sroName}
                      srNo={detail.srNo}
                      SRO1={props.SRO1}
                      SRO2={props.SRO2}
                      SRO3={props.SRO3}
                      SRO4={props.SRO4}
                    />
                  </Grid>
                ))}
          </Grid>
        </Container>
      </div>
    </div>
  );
}

export default SROFullList;
