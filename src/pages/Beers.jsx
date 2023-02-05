import React, { useState, useEffect } from "react";
import BeerCard from "../components/BeerCard";
function Beers () {
    const [beers, setBeers] =useState([]);
    useEffect(() => {
        fetch("https://punkapi.com/documentation/beers")
          .then((response) => response.json())
          .then((data) => setBeers(data))
          .catch((err) => console.error(err));
      }, []);
    return (
        <div>
            {console.log(beers)}
        <BeerCard beer={beer} />
        {beers.length > 0 && beers.map(beer => <BeerCard beer={beer} />)}
        </div>
    )
};

export default Beers;