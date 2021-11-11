import React from "react";
import "../App.scss"
const Card=(props)=>{  
    let arr=props.data.filter(function(el) {
    return el.name.toLowerCase().indexOf(props.text.trim().toLowerCase()) !== -1;
})
  console.log(arr)

    return(
        <div className="Card"> 
        {arr.map((x,index)=>{
          return<div key={index} className="Card_Grid"> 
          <div><img src={x.img} className="CardImg"/></div>
          <div>name: {x.name}</div>
          <div>asin: {x.asin}</div>
          <div>price: {x.price}</div>
          <div>category: {x.bsr_category}</div>
          <div>link:<a href={x.link}>{x.link}</a></div>
        </div>})}
      </div>
    )
}
export default Card