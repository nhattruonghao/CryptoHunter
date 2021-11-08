import { Container, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import Carousel from "./Carousel";

const useStyles = makeStyles(() => ({
  banner: {
    backgroundImage: "url(./banner2.jpg)",
  },
  bannerContent: {
    height: 400,
    display: "flex",
    flexDirection: "column",
    paddingTop: 25,
    justifyContent: "center",
  },
  tagline: {
    display: "flex",
    height: "40%",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
  },
  title: {
    fontWeight: "bold",
    marginBottom: 15,
    fontFamily: "Montserrat",
  },
  subtitle: {
    color: "darkgrey",
    textTransform: "capitalize",
    fontFamily: "Montserrat",
  },
}));
function Banner() {
  const classes = useStyles();
  return (
    <div className={classes.banner}>
      <Container className={classes.bannerContent}>
        <div className={classes.tagline}>
          <Typography className={classes.title} variant="h2">
            Crypto Huner
          </Typography>
          <Typography
            className={classes.subtitle}
            variant="subtitle2"
          >
            Get all the info Regarding your favorite Crypto currentcy
          </Typography>
        </div>
        <Carousel />
      </Container>
    </div>
  );
}

export default Banner;
