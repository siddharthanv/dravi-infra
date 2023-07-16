import React from "react";
import Container from "@material-ui/core/Container";
import classes from "./Links.module.css";

export default function Links() {
  return (
    <div style={{ margin: "0px 30px" }}>
      <Container className={classes.linksService}>
        <h3 style={{ marginBottom: "20px" }}>RELATED LINKS</h3>
        <ul style={{ wordSpacing: "5px", lineHeight: "25px" }}>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none", color: "#0066ff" }}
              href="http://tnreginet.gov.in/"
            >
              Official Tamilnadu Registration site.
            </a>
          </li>
          <br />
          <li>
            <a
              rel="noreferrer"
              target="_blank"
              style={{ textDecoration: "none", color: "#0066ff" }}
              href="https://eservices.tn.gov.in/eservicesnew/land/verify_chitta.html?lan=en"
            >
              Verification of Chitta Extract in 5mins.
            </a>
          </li>
          <br />
          <li>
            <a
              rel="noreferrer"
              target="_blank"
              style={{ textDecoration: "none", color: "#0066ff" }}
              href="https://eservices.tn.gov.in/eservicesnew/land/chitta.html?lan=en"
            >
              View your Patta/ Chitta Extract Now.
            </a>
          </li>
          <br />
        </ul>
      </Container>
    </div>
  );
}
