import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import axios from "axios";
import { useEffect, useState } from "react";
import { HistoricalChart } from "./config/api";
import { Line } from "react-chartjs-2";
import { chartDays } from "./config/data";

const CoinChart = ({ coin }) => {
  const [historicData, setHistoricData] = useState();
  const [days, setDays] = useState(1);
  const { currency } = "USD";
  const [flag, setflag] = useState(false);

  const fetchHistoricData = async () => {
    const { data } = await axios.get(HistoricalChart(coin.id, 1000, "USD"));
    setflag(true);
    let prices = [];
    console.log(data);
    data.prices.forEach(
      e => prices.push({name: e[0].toString(),value: e[1]})
    );
    setHistoricData(prices);
  };

  useEffect(() => {
    fetchHistoricData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [days]);

  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        width={500}
        height={400}
        data= { historicData }
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="1 1" />
        {/* <XAxis dataKey="name" fontSize="min(1.5vh,2.5vw)"/> */}
        <YAxis fontSize="min(1.5vh,2.5vw)" stroke="#7716A5"/>
        <XAxis fontSize="0" stroke="#7716A5"/>
        <Tooltip />
        <Area type="monotone" dataKey="value" stroke="black" fill="#C1A9E8" fillOpacity="0.26" />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default CoinChart;
