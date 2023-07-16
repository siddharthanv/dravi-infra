import { Container } from "@material-ui/core";
import Heading from "../HomePage/HomePageSectionHeading/Heading";
import SRODetailsCard from "./SROPageModule/SRODetailsCard";
import PopularProperties from "../HomePage/PopularProperties/PopularProperties";

function SROPage(props) {
  return (
    <div style={{ paddingTop: "30px" }}>
      <Container>
        <Heading heading={`${props.sroName} Sub Registrar Office`} />
        <SRODetailsCard
          sroName={props.sroName}
          address={props.address}
          district={props.district}
          email={props.email}
          contactNo={props.contactNo}
          SRO1={props.SRO1}
        />
      </Container>
    </div>
  );
}

export default SROPage;
