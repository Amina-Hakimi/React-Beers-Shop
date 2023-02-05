import React from "react";
import Hero from "../components/Hero.jsx";
import Phylosophy from "../components/Phylosophy.jsx";
import home from "../data/home";
import Discovery from "../components/Discovery.jsx";
function Home () {
    return (
        <div>
        <Hero hero={home.hero} />
        <Phylosophy phylosophy={home.phylosophy} />
        <Discovery hops={home.hops} />
        </div>
    )
};

export default Home;