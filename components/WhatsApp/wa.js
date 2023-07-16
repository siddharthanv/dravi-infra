import React from "react";
import { makeStyles } from "@material-ui/styles";
import { isMobile } from "react-device-detect";

const useStyles = makeStyles({
  whats: {
    backgroundColor: "#fff",
    color: "#404040",
    position: "fixed",
    display: "flex",
    fontWeight: "600",
    justifyContent: "space-between",
    zIndex: "500",
    bottom: "25px",
    right: "30px",
    fontSize: "18px",
    padding: "10px 20px",
    borderRadius: "30px",
    boxShadow: "0 1px 15px rgba(32, 33, 36, 0.28)",
    textDecoration: "none",
  },
});

function Wa() {
  const classes = useStyles();
  return (
    <div>
      <a
        target="_blank"
        rel="noreferrer"
        href={
          isMobile
            ? "https://api.whatsapp.com/send?phone=+919500029622&text=Hi Prop Dealz Team!!!. Need a Service. Call me."
            : "https://web.whatsapp.com/send?phone=+919500029622&text=Hi Prop Dealz Team!!!. Need a Service. Call me."
        }
        className={classes.whats}
      >
        <svg width="30" viewBox="0 0 24 24">
          <defs />
          <path
            fill="#eceff1"
            d="M20.5 3.4A12.1 12.1 0 0012 0 12 12 0 001.7 17.8L0 24l6.3-1.7c2.8 1.5 5 1.4 5.8 1.5a12 12 0 008.4-20.3z"
          />
          <path
            fill="#4caf50"
            d="M12 21.8c-3.1 0-5.2-1.6-5.4-1.6l-3.7 1 1-3.7-.3-.4A9.9 9.9 0 012.1 12a10 10 0 0117-7 9.9 9.9 0 01-7 16.9z"
          />
          <path
            fill="#fafafa"
            d="M17.5 14.3c-.3 0-1.8-.8-2-.9-.7-.2-.5 0-1.7 1.3-.1.2-.3.2-.6.1s-1.3-.5-2.4-1.5a9 9 0 01-1.7-2c-.3-.6.4-.6 1-1.7l-.1-.5-1-2.2c-.2-.6-.4-.5-.6-.5-.6 0-1 0-1.4.3-1.6 1.8-1.2 3.6.2 5.6 2.7 3.5 4.2 4.2 6.8 5 .7.3 1.4.3 1.9.2.6 0 1.7-.7 2-1.4.3-.7.3-1.3.2-1.4-.1-.2-.3-.3-.6-.4z"
          />
        </svg>{" "}
        <span style={{ paddingLeft: "10px" }}>Chat with Us</span>
      </a>
    </div>
  );
}

export default Wa;
