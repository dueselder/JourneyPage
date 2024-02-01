import React from "react";

function Card(props) {
  console.log(props.item.imageUrl)
  return (
    <div className="card">
      <img src={`./images/${props.item.imageUrl}`} alt={props.item.title} className="card-image"/>
      <div className="card-text">
        <h2>{props.item.location}</h2>
        <h3>{props.item.title}</h3>
        <p>{props.item.startDate} - {props.item.endDate}</p>
        <a href={props.item.googleMapsUrl}>Google Maps Link</a>
        <p>{props.item.description}</p>
      </div>
      <hr />
    </div>
    
  );
}

export default Card;