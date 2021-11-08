import {
  AppBar,
  Container,
  createTheme,
  makeStyles,
  MenuItem,
  MuiThemeProvider,
  Select,
  Toolbar,
  Typography,
} from "@material-ui/core";
import React from "react";
import { useNavigate } from "react-router";
import { CryptoState } from "../CryptoContext";

const useStyles = makeStyles(() => ({
  title: {
    flex: 1,
    color: "gold",
    fontFamily: "Montserrat",
    fontWeight: "bold",
    cursor: "pointer",
  },
}));
const darkTheme = createTheme({
  palette: {
    primary: {
      main: "#fff",
    },
    type: "dark",
  },
});
function Header() {
  const classes = useStyles();
  let navigate = useNavigate();
  const {currency, setCurrency} = CryptoState()
  return (
    <MuiThemeProvider theme={darkTheme}>
      <AppBar color="transparent" position="static">
        <Container>   
          <Toolbar>
            <Typography
              onClick={() => navigate("/")}
              className={classes.title}
              variant="h5"
            >
              Crypto Huner
            </Typography>
            <Select
              variant="outlined"
              style={{
                width: 100,
                height: 40,
                marginLeft: 15,
              }}
              value={currency}
              onChange={ (e) => setCurrency(e.target.value)}
            >
              <MenuItem value={"USD"}>USD</MenuItem>
              <MenuItem value={"VND"}>VNĐ</MenuItem>
            </Select>
          </Toolbar>
        </Container>
      </AppBar>
    </MuiThemeProvider>
  );
}

export default Header;
