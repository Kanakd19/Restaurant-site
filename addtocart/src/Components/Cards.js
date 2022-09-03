import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Cardsdata from "./Cardsdata";
import "./Style.css";
import { useDispatch } from "react-redux";
import {ADD} from '../Redux/Actions/Action'

const Cards = () => {
  const [data, setData] = useState(Cardsdata);
  // console.log(data);

  const dispatch= useDispatch()

  const send = (element) =>{
    // console.log(e)
    dispatch(ADD(element))

  }

  return (
    <div className="container mt-3">
      <h2 className="text-center">Add to cart Project</h2>
      <div className="row d-flex justify-content-center align-items-center">
        {
        data.map((element,id) => {
          return (
            <>
            <Card style={{ width: "22rem", border:"none" }} className="mx-2 mt-4 card_style">
              <Card.Img variant="top" src={element.imgdata} style={{height:"16rem"}}  className="mt-3"/>
              <Card.Body>
                <Card.Title>{element.rname}</Card.Title>
                <Card.Text>
                    Price: ₹ {element.price}
                {/* {element.address} */}
                </Card.Text>
                <Button variant="primary" onClick={()=> send(element)} className="col-lg-12">Add To Cart</Button>
              </Card.Body>
            </Card>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
