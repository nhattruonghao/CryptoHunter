import "./app.css";
import Header from "./components/Header";
import HomePage from "./Pages/HomePage";
import CoinPage from "./Pages/CoinPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { makeStyles } from "@material-ui/core";

function App() {

  const useStyles = makeStyles(() =>({
    App: {
      backgroundColor:'#14161a',
      color: 'white',
      minHeight: "100vh",
    },
  }));

  const classes = useStyles();
  return (
    <BrowserRouter>
    <div className={classes.App}>
      <Header />
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/coins/:id" element={<CoinPage />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
