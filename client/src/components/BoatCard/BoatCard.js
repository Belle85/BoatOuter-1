import React from "react";
import "./BoatCard.css";
// import { Container, Row, Col } from "../Grid";
import CardTitle from "../../components/CardTitle";


const BoatCard = props => (
  <div 
    className="card"
    style={{
      backgroundImage: props.image ? `url(${props.image})` : "none"
    }}
  >
  {!props.image && <i className="fa fa-spinner fa-spin" aria-hidden="true" />}
  {/* <div id="img"> */}
      {/* <img id="boatImg" alt="Boat Images" src={props.boat.image || "" } />      */}
      {/* <br></br> */}
      {/* </div> */}
      <CardTitle
        style={{ opacity: props.image ? 1 : 0 }}
        >
         <h3><strong className="listing_name">{props.listing_name}</strong></h3>
          <div id="details">
              {props.boatSize} || 1 - {props.passengers} Passengers || {props.activity}
          </div>
        </CardTitle>
       
            
    </div>  
  
// const BoatCard = (props) => {
//   const boats = props.boats.map(boat => (
//     <li key={boat.id}>
//     {boat.name}
//     </li>
//   ))
//   return <ul>{boats}</ul>
  
   );

  // <div>
  //   <PhotoGrid columns={3} photos={props.boat.image}
  // </div>
  // document.getElementById()
      

export default BoatCard;