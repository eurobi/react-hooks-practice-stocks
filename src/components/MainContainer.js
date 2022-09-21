import React, { useEffect, useState } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [stocks, setStocks] = useState([])
  const [bought, setBought] = useState([])
  const [filters, setFilters] = useState({
    alphabetically: false,
    price : false,
    category : ''
  })

  function tradeStock(tradedStock){
    if(bought.includes(tradedStock)){
      setBought([...bought].filter(stock => stock.name !== tradedStock.name))
    }
    else{
      setBought([...bought, tradedStock])
    }
    console.log(filters)
  }

  function applyFilters(stockList){
    let filteredList
    if(filters.alphabetically){
      filteredList = stockList.sort((stock1, stock2) => stock1.name < stock2.name)
    }
    else if(filters.price){
      filteredList = stockList.sort((stock1, stock2) => stock1.price < stock2.price)
    }
    else{
      filteredList = [...stockList]
    }
    return filteredList.filter((stock) => stock.type.includes(filters.category))
  }

  

  useEffect(() => {
    fetch('http://localhost:3001/stocks')
    .then(r => r.json())
    .then(stocks => setStocks(stocks))
  },[])
  return (
    <div>
      <SearchBar setFilters={setFilters} filters={filters} />
      <div className="row">
        <div className="col-8">
          <StockContainer onTrade={tradeStock} stocks={applyFilters(stocks)} />
        </div>
        <div className="col-4">
          <PortfolioContainer onTrade={tradeStock} bought={applyFilters(bought)} />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
