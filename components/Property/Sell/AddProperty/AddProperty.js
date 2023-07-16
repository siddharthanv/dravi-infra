import { Container, Typography, Box, Grid, Button } from "@material-ui/core";
import { useState } from "react";
import InputLabel from "../../../UI/InputLabel";
import classes from "./AddProperty.module.css";

function AddProperty() {
  const [data, setData] = useState({
    postedBy: "",
    propertyOwnerName: "",
    contactNumber: "",
    emailID: "",
    saleType: "",
    propertyType: "",
    propertyAs: "",
    numberOfUnits: "",
    propertyName: "",
    propertyAddress: "",
    streetName: "",
    city: "",
    state: "",
    pincode: "",
    landMark: "",
    area: "",
    uds: "",
    carpetArea: "",
    builtUpArea: "",
    superBuiltup: "",
    ageOfBuilding: "",
    totalNoOfFloors: "",
    propertyFloorNo: "",
    bedroom: "",
    bathroom: "",
    parking: "",
    provisions: "",
    outDoorAmenities: "",
    waterSource: "",
    instructionsToUs: "",
    expectedValue: "",
    propertyPhotos: "",
  });

  const [message, setmessage] = useState("");

  const {
    postedBy,
    propertyOwnerName,
    contactNumber,
    emailID,
    saleType,
    propertyType,
    propertyAs,
    numberOfUnits,
    propertyName,
    propertyAddress,
    streetName,
    city,
    state,
    pincode,
    landMark,
    area,
    uds,
    carpetArea,
    builtUpArea,
    superBuiltup,
    ageOfBuilding,
    totalNoOfFloors,
    propertyFloorNo,
    bedroom,
    bathroom,
    parking,
    provisions,
    outDoorAmenities,
    waterSource,
    instructionsToUs,
    expectedValue,
    propertyPhotos,
  } = data;

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    setmessage("");
    console.log(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:4000/api/savePropertyDetails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          postedBy,
          propertyOwnerName,
          contactNumber,
          emailID,
          saleType,
          propertyType,
          propertyAs,
          numberOfUnits,
          propertyName,
          propertyAddress,
          streetName,
          city,
          state,
          pincode,
          landMark,
          area,
          uds,
          carpetArea,
          builtUpArea,
          superBuiltup,
          ageOfBuilding,
          totalNoOfFloors,
          propertyFloorNo,
          bedroom,
          bathroom,
          parking,
          provisions,
          outDoorAmenities,
          waterSource,
          instructionsToUs,
          expectedValue,
          propertyPhotos,
        }),
      });
      await response.json();
      // eslint-disable-next-line
      if (response.status == 201) {
        setmessage(
          "Your Property Registration Application was successfully submitted. Our Executive will call you soon. Thanks for the Registration."
        );
        setData({
          ...data,
          postedBy: "",
          propertyOwnerName: "",
          contactNumber: "",
          emailID: "",
          saleType: "",
          propertyType: "",
          propertyAs: "",
          numberOfUnits: "",
          propertyName: "",
          propertyAddress: "",
          streetName: "",
          city: "",
          state: "",
          pincode: "",
          landMark: "",
          area: "",
          uds: "",
          carpetArea: "",
          builtUpArea: "",
          superBuiltup: "",
          ageOfBuilding: "",
          totalNoOfFloors: "",
          propertyFloorNo: "",
          bedroom: "",
          bathroom: "",
          parking: "",
          provisions: "",
          outDoorAmenities: "",
          waterSource: "",
          instructionsToUs: "",
          expectedValue: "",
          propertyPhotos: "",
        });
        // eslint-disable-next-line
      } else if (response.status == 404) {
        setmessage("Failed to Submit. Try Again.");
      }
    } catch (err) {
      console.log(err);
      alert("error found");
    }
  };

  return (
    <div className={classes.root}>
      <Box display="flex" alignItems="center">
        <Container maxWidth="md">
          <Typography variant="h4" style={{ margin: "50px 0px 70px", textAlign: "center" }}>
            Property Registration Form
          </Typography>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item lg={6} md={12} sm={12} xs={12}>
                <InputLabel labelName="Posted By" star="*" />
                <select name="postedBy" className={classes.formInput} value={postedBy} onChange={handleChange} required>
                  <option value="">Select</option>
                  {["Institution", "Builder", "Owner", "Agent", "Others"].map((owner, index) => (
                    <option key={index} value={owner}>
                      {owner}
                    </option>
                  ))}
                </select>
              </Grid>
              <Grid item lg={6} md={12} sm={12} xs={12}>
                <InputLabel labelName="Builder Name/ Owner Name/ Agent Name" star="*" />
                <input
                  className={classes.formInput}
                  name="propertyOwnerName"
                  value={propertyOwnerName}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item lg={6} md={12} sm={12} xs={12}>
                <InputLabel labelName="Contact Number" star="*" />
                <input
                  className={classes.formInput}
                  name="contactNumber"
                  value={contactNumber}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item lg={6} md={12} sm={12} xs={12}>
                <InputLabel labelName="Email ID" star="*" />
                <input className={classes.formInput} name="emailID" value={emailID} onChange={handleChange} required />
              </Grid>
              <Grid item lg={6} md={12} sm={12} xs={12}>
                <InputLabel labelName="Sale Type" star="*" />
                <select name="saleType" className={classes.formInput} value={saleType} onChange={handleChange} required>
                  <option value="">Select</option>
                  {["New Sale", "Resale", "Lease"].map((saleTypeMap, index) => (
                    <option key={index} value={saleTypeMap}>
                      {saleTypeMap}
                    </option>
                  ))}
                </select>
              </Grid>
              <Grid item lg={6} md={12} sm={12} xs={12}>
                <InputLabel labelName="Property Type" star="*" />
                <select
                  name="propertyType"
                  className={classes.formInput}
                  value={propertyType}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select</option>
                  {["Residential", "Commercial"].map((propertyTypeMap, index) => (
                    <option key={index} value={propertyTypeMap}>
                      {propertyTypeMap}
                    </option>
                  ))}
                </select>
              </Grid>
              <Grid item lg={6} md={12} sm={12} xs={12}>
                <InputLabel labelName="Property As" star="*" />
                <select
                  name="propertyAs"
                  className={classes.formInput}
                  value={propertyAs}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select</option>
                  {[
                    "Apartment",
                    "Individual House/ Villa",
                    "Land/ Plot",
                    "Office/ Retail Space",
                    "Farm Land",
                    "Others",
                  ].map((propertyAsMap, index) => (
                    <option key={index} value={propertyAsMap}>
                      {propertyAsMap}
                    </option>
                  ))}
                </select>
              </Grid>
              {/* <Grid item lg={12} md={12} sm={12} xs={12}>
              <Typography variant="h6" style={{ marginBottom: "20px" }}>
                Property Location
              </Typography>
            </Grid> */}
              <Grid item lg={6} md={12} sm={12} xs={12}>
                <InputLabel labelName="Number of Units" star="*" />
                <select
                  name="numberOfUnits"
                  className={classes.formInput}
                  value={numberOfUnits}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select</option>
                  {["Single", "Multiple"].map((propertyAsMap, index) => (
                    <option key={index} value={propertyAsMap}>
                      {propertyAsMap}
                    </option>
                  ))}
                </select>
              </Grid>
              <Grid item lg={12} md={12} sm={12} xs={12}>
                <InputLabel labelName="Property Name" />
                <input className={classes.formInput} name="propertyName" value={propertyName} onChange={handleChange} />
              </Grid>
              <Grid item lg={12} md={12} sm={12} xs={12}>
                <InputLabel labelName="Property Address" star="*" />
                <textarea
                  className={classes.formInput}
                  name="propertyAddress"
                  value={propertyAddress}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item lg={6} md={12} sm={12} xs={12}>
                <InputLabel labelName="City" star="*" />
                <input className={classes.formInput} name="city" value={city} onChange={handleChange} required />
              </Grid>
              <Grid item lg={6} md={12} sm={12} xs={12}>
                <InputLabel labelName="State" star="*" />
                <input className={classes.formInput} name="state" value={state} onChange={handleChange} required />
              </Grid>
              <Grid item lg={6} md={12} sm={12} xs={12}>
                <InputLabel labelName="Pincode" star="*" />
                <input className={classes.formInput} name="pincode" value={pincode} onChange={handleChange} required />
              </Grid>
              <Grid item lg={6} md={12} sm={12} xs={12}>
                <InputLabel labelName="Land Mark" star="*" />
                <input
                  className={classes.formInput}
                  name="landMark"
                  value={landMark}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item lg={6} md={12} sm={12} xs={12}>
                <InputLabel labelName="Area" star="*" />
                <input className={classes.formInput} name="area" value={area} onChange={handleChange} required />
              </Grid>
              <Grid item lg={6} md={12} sm={12} xs={12}>
                <InputLabel labelName="UDS" />
                <input className={classes.formInput} name="uds" value={uds} onChange={handleChange} />
              </Grid>
              <Grid item lg={6} md={12} sm={12} xs={12}>
                <InputLabel labelName="Carpet Area" />
                <input className={classes.formInput} name="carpetArea" value={carpetArea} onChange={handleChange} />
              </Grid>
              <Grid item lg={6} md={12} sm={12} xs={12}>
                <InputLabel labelName="Built up Area" />
                <input className={classes.formInput} name="builtUpArea" value={builtUpArea} onChange={handleChange} />
              </Grid>
              <Grid item lg={6} md={12} sm={12} xs={12}>
                <InputLabel labelName="Super Built up Area" />
                <input className={classes.formInput} name="superBuiltup" value={superBuiltup} onChange={handleChange} />
              </Grid>
              <Grid item lg={6} md={12} sm={12} xs={12}>
                <InputLabel labelName="Age of Building" />
                <input
                  className={classes.formInput}
                  name="ageOfBuilding"
                  value={ageOfBuilding}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item lg={6} md={12} sm={12} xs={12}>
                <InputLabel labelName="Total No. of Floors" />
                <input
                  className={classes.formInput}
                  name="totalNoOfFloors"
                  value={totalNoOfFloors}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item lg={6} md={12} sm={12} xs={12}>
                <InputLabel labelName="Property on which floor" />
                <input
                  className={classes.formInput}
                  name="propertyFloorNo"
                  value={propertyFloorNo}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item lg={6} md={12} sm={12} xs={12}>
                <InputLabel labelName="Number of Bedrooms" />
                <input className={classes.formInput} name="bedroom" value={bedroom} onChange={handleChange} />
              </Grid>
              <Grid item lg={6} md={12} sm={12} xs={12}>
                <InputLabel labelName="Number of Bathrooms" />
                <input className={classes.formInput} name="bedroom" value={bedroom} onChange={handleChange} />
              </Grid>
              <Grid item lg={6} md={12} sm={12} xs={12}>
                <InputLabel labelName="Parking" />
                <input className={classes.formInput} name="parking" value={parking} onChange={handleChange} />
                {/* <Box display="flex">
                  <input type="checkbox" id="parking1" name="parking" value="Two Wheeler" onChange={handleChange} />
                  <label for="parking1">Two Wheeler</label>
                  <br />
                  <input type="checkbox" id="parking2" name="parking" value="Four Wheeler" onChange={handleChange} />
                  <label for="parking2">Four Wheeler</label>
                  <br />
                  <input type="checkbox" id="parking3" name="parking" value="Covered Parking" onChange={handleChange} />
                  <label for="parking3">Covered Parking</label>
                  <br />
                </Box> */}
              </Grid>
              <Grid item lg={6} md={12} sm={12} xs={12}>
                <InputLabel labelName="Provisions" />
                <input className={classes.formInput} name="provisions" value={provisions} onChange={handleChange} />
              </Grid>
              <Grid item lg={6} md={12} sm={12} xs={12}>
                <InputLabel labelName="Outdoor Amenities" />
                <input
                  className={classes.formInput}
                  name="outDoorAmenities"
                  value={outDoorAmenities}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item lg={6} md={12} sm={12} xs={12}>
                <InputLabel labelName="Water Source" />
                <input className={classes.formInput} name="waterSource" value={waterSource} onChange={handleChange} />
              </Grid>
              <Grid item lg={12} md={12} sm={12} xs={12}>
                <InputLabel labelName="Instructions to Us" />
                <textarea
                  className={classes.formInput}
                  name="instructionsToUs"
                  value={instructionsToUs}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item lg={12} md={12} sm={12} xs={12}>
                <InputLabel labelName="Expected Value" star="*" />
                <input
                  className={classes.formInput}
                  name="expectedValue"
                  value={expectedValue}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item lg={12} md={12} sm={12} xs={12}>
                <InputLabel labelName="Property Photos" />
                <Typography>Send your Property Photos to following Whatsapp/ Email</Typography>
                <Typography>Whatsapp: +91 80724 47576</Typography>
                <Typography>Email: vaithya@propdealz.com</Typography>
              </Grid>
              {/* <Typography variant="h6" style={{ marginBottom: "20px" }}>
                Property Information
              </Typography> */}
            </Grid>
            <div style={{ textAlign: "center" }}>
              <Typography className={classes.message}>{message}</Typography>
              <button variant="contained" color="primary" className={classes.propButton}>
                Add Property
              </button>
            </div>
          </form>
        </Container>
      </Box>
    </div>
  );
}

export default AddProperty;
