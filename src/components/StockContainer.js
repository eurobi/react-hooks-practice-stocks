import React from "react";
import Stock from "./Stock";

function StockContainer({ onTrade, stocks }) {

  return (
    <div>
      <h2>Stocks</h2>
      {stocks.map(stock => <Stock key={stock.name} onTrade={onTrade} stock={stock}></Stock>)}
    </div>
  );
}

export default StockContainer;
