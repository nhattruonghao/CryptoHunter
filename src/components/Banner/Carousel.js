import { makeStyles } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import { Link } from "react-router-dom";
import { TrendingCoins } from "../../config/api";
import { CryptoState } from "../../CryptoContext";

const useStyles = makeStyles(() => ({
  carousel: {
    height: "50%",
    display: "flex",
    alignItem: "center",
  },
  carouselitem:{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      cursor: 'pointer',
      textTransform: 'uppercase',
      color:'white',
      justifyContent: 'center'
  }
}));

const numberWithCommas = (x) =>{
    return x.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
}

function Carousel() {
  const [trending, setTrending] = useState([]);
  const classes = useStyles();
  const { currency, symbol } = CryptoState();
  const fetchTrendingCoins = async () => {
    const { data } = await axios.get(TrendingCoins(currency));
    setTrending(data);
  };
  console.log(trending);
  useEffect(() => {
    fetchTrendingCoins();
  }, [currency]);

  const items = trending.map((coin) => {
    let profit = coin.price_change_percentage_24h >= 0;
    return (
      <Link className={classes.carouselitem} to={`/coins/${coin.id}`}>
        <img
          src={coin && coin.image}
          alt={coin.name}
          height="80"
          style={{ marginBottom: 10 }}
        />
        <span>{coin?.symbol}
        &nbsp;
        <span
        style={{
            color: profit > 0 ? 'rgb(14, 203, 129)' : 'red'
        }}
        >
            {profit && "+"} {coin?.price_change_percentage_24h?.toFixed(2)}%
        </span>
        </span>
        <br/>
        <span style={{fontSize:22, fontWeight:500}}>
            {symbol} {numberWithCommas(coin?.current_price.toFixed(2))}
        </span>
      </Link>
    );
  });
  const responsive = {
    0: {
      items: 2,
    },
    512: {
      items: 2,
    },
    750: {
        items: 4,
      },
  };
  return (
    <div className={classes.carousel}>
      <AliceCarousel
        mouseTracking
        infinite
        autoPlayInterval={1000}
        animationDuration={1500}
        disableDotsControls
        disableButtonsControls
        responsive={responsive}
        autoPlay
        items={items}
      />
    </div>
  );
}

export default Carousel;
