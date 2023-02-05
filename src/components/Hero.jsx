import React from "react";
import home from "../data/home";
import "./Hero.css";
import { Link } from 'react-router-dom';
function Hero ({hero}) {
    return (
    <section id="hero" className="hero" style={{ backgroundImage: `url('./assets/herobeers.jpeg')` }}>
<div>
{console.log(hero)}
    <h1>{hero.title}</h1>
    <p>{hero.subTitle}</p>
    <Link to={hero.link.label}>
    <p>{hero.link.label}</p>
    </Link>
</div>
 </section>
    )
};
export default Hero;