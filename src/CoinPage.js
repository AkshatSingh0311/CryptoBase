import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SingleCoin } from "./config/api";
import Sidebar from "./Sidebar";
import { LinearProgress } from "@mui/material";
import HtmlReactParser from 'html-react-parser';
import CoinChart from "./CoinChart";

import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';


const ColorButtonBB = styled(Button)(({ theme }) => ({
  color: "white",
  // backgroundImage: "linear-gradient(to right,#645087, #C1A9E8)",
  fontWeight: "500",
  fontSize: "min(1.5vh,1.5vw)"
}));

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const CoinPage = ({ balance }) => {
  const { id } = useParams();
  const [coin, setCoin] = useState();
  const currency = "USD";
  const symbol = "$";
  const fetchCoin = async () => {
    const { data } = await axios.get(SingleCoin(id));
    setCoin(data);
    console.log(data);
  };
  console.log(coin);
  useEffect(() => {
    fetchCoin();
  }, []);

  if (!coin) return <LinearProgress style={{ backgroundColor: "gold" }} />;

  return (
    <div className="total-area">
      <Sidebar balance={balance}></Sidebar>
      <div className="main-content">
        <div className="coin-page-head-card">
          <div className="coin-page-head-card-image">
            <img
              src={coin?.image.large}
              alt={coin?.name}
              height="80%"
              style={{ margin: "auto" }}
            />
          </div>
          <div className="coin-page-head-card-name">
            <p style={{ margin: "auto", marginBottom: "auto" }}>
              {coin.name + "(" + coin.symbol.toUpperCase() + ")"}
            </p>
          </div>
          {/* <div className="buttonBB">
                        <ColorButtonBB fullWidth= {true} variant="contained" startIcon={
                            <IconContext.Provider value={{ className: "buttonBB-icon" }}>
                                <FaPlus />
                            </IconContext.Provider>
                        }>
                          Add Crypto
                          </ColorButtonBB>
                        </div> */}
         
        </div>
        
        <div className="coin-page-left">
          <div className="coin-page-info">
            {HtmlReactParser(coin.description.en.split(". ").join(" ").substr(0,700))}
          </div>
          <div className="coin-page-buttons">
            <div className="coin-page-buttons-currentprice"><p><b>Current Price</b></p><p>{ symbol + " " + numberWithCommas(coin.market_data.current_price[currency.toLowerCase()]) }</p></div>
            <div className="coin-page-buttons-ratechange"><p><b>Market Cap</b></p><p>{ symbol + " " + numberWithCommas(coin.market_data.market_cap[currency.toLowerCase()]) }</p></div>
            <div className="coin-page-buttons-marketcap">	<p><b>Rate Change</b></p><p style={{ color: (coin.market_data.price_change_24h > 0) ? "green" : "red" }} >{ symbol + " " + numberWithCommas((coin.market_data.price_change_24h_in_currency[currency.toLowerCase()]).toFixed(4)) }</p></div>
          </div>
        </div>
        <div className="coin-page-chart">
        <CoinChart coin={coin}/>
        </div>
      </div>
    </div>
  );
};

export default CoinPage;
