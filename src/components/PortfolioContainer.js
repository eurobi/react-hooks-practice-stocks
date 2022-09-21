import React from "react";
import Stock from "./Stock";

function PortfolioContainer({ onTrade, bought }) {
  return (
    <div>
      <h2>My Portfolio</h2>
      {
        bought.map(stock => <Stock key={stock.name} onTrade={onTrade} stock={stock}></Stock>)
      }
    </div>
  );
}

export default PortfolioContainer;
