import React from 'react'
import data from './PeriodicTableJSON.json'
export default function index() {
  const colorMap = {
    "noble gas": "#FFBC42",
    "polyatomic nonmetal":"red",
    "alkaline earth metal": "#EC674E",
    "diatomic nonmetal": "#D81159",
    "alkali metal": "#8F2D56",
    "transition metal": "#58586B",
    "post-transition metal": "#218380",
    "lanthanide": "#4AABAF",
    "metalloid": "#73D2DE",
   "unknown, probably transition metal": "#E7E7EA",
   "unknown, probably post-transition metal":"#E7E7EA",
   "unknown, predicted to be noble gas":"#E7E7EA",
   "unknown, probably metalloid":"#E7E7EA",
   "unknown, but predicted to be an alkali metal":"#E7E7EA",
   "actinide":"#FFE6D4"
  };
  return (
<div className='preiodic-table'>
{
  data.elements.map((element) => (
    <div className='bg-opacity-20' style={{
      gridColumn: element.xpos,
      gridRow:element.ypos,
      // @ts-ignore
      backgroundColor:colorMap[element.category],
   margin:2,


    }} key={element.name}>
      <div className='flex flex-col p-4'>

          <strong>{element.symbol}</strong>
          <small className="number">{element.number}</small>
          <small className="name">{element.name}</small>
      </div>
    </div>
  ))
}

</div>
  )
}

