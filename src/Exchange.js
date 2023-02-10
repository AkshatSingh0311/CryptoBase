import Sidebar from "./Sidebar";
import Card from "./Card";
import { useEffect, useState } from "react";
import axios from "axios";
import { CoinList } from "./config/api";

const Exchange = ({ balance, changeInBalance }) => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const currency = "USD";
  const symbol = "$";
  const fetchTrendingCoins = async () => {
    const { data } = await axios.get(CoinList(currency));
    console.log(data);
    setCoins(data);
  };

  useEffect(() => {
    fetchTrendingCoins();
  }, [currency]);

  const handleSearch = () => {
    return coins.filter(
      (coin) =>
        coin.name.toLowerCase().includes(search) ||
        coin.symbol.toLowerCase().includes(search)
    );
  };

  return (
    <div className="total-area">
      <Sidebar balance={balance} />
      <div className="main-content">
        <div
          className="exchange-cards"
          style={{
            width: "60vw",
            textAlign: "left",
            margin: "auto",
            marginTop: "5vh",
          }}
        >
          <table style={{ marginLeft: "1vw", height: "8vh", width: "100%" }}>
            <tr>
              <th style={{ width: "8%", fontSize: "2vh" }}></th>
              <th style={{ width: "30%", fontSize: "2vh" }}>Currency Name</th>
              <th style={{ width: "20%", fontSize: "2vh" }}>Current Price</th>
              <th style={{ width: "20%", fontSize: "2vh" }}>Market Cap</th>
              <th style={{ width: "20%", fontSize: "2vh" }}>Rate Change</th>
            </tr>
          </table>
          {handleSearch()
            .map((row) => {
              console.log(
                row.name,
                row.symbol,
                row.current_price,
                row.price_change_percentage_24h
              );
              return (
                <Card
                  crypto_name={row.name}
                  crypto_symbol={row.symbol}
                  crypto_currPrice={row.current_price}
                  crypto_marketCap={row.market_cap.toString().slice(0, -6)}
                  crypto_priceChange={row.price_change_percentage_24h}
                  crypto_img={row?.image}
                  crypto_id={row.id}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Exchange;
