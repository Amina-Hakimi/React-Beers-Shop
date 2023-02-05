import React from 'react';
import './Phylosophy.css';
function Phylosophy ({ phylosophy }) {
    return (
<div>
{console.log(phylosophy)}
    <h1>{phylosophy.title}</h1>
    <p>{phylosophy.description}</p>
    <img src={phylosophy.image.src} alt={phylosophy.image.alt} />
</div>
    )
};
export default Phylosophy;