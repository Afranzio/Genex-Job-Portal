import React from "react";
import { Link } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

const Footer = () => {
  return (
    <div className="footer">
      <Typography variant="body2" color="textSecondary" align="center">
        {"Copyright © "}
        <Link color="inherit" href="https://material-ui.com/">
          Your Website
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    </div>
  );
};

export default Footer;
