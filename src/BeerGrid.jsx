import React, { useState, useEffect } from "react";
import axios from "axios";
import Beers from "./Beers";

const BeerGrid = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    axios.get("https://api.punkapi.com/v2/beers").then((res) => {
      console.log(res.data);
      setItems(res.data);
    });
  }, []);

  return (
    <section className='cards '>
      {items.map((item) => (
        <Beers key={item.id} item={item}></Beers>
      ))}
    </section>
  );
};

export default BeerGrid;
