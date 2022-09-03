import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Badge from "@mui/material/Badge";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "@mui/material/Menu";

import Fade from "@mui/material/Fade";
import {useDispatch, useSelector } from "react-redux";
import { Table } from "react-bootstrap";
import { DLT } from "../Redux/Actions/Action";


const Header = () => {
const[price, setPrice]= useState(0)
console.log(price)

  const getdata = useSelector((state) => state.cartreducer.carts);
  // console.log(getdata)

  const dispatch= useDispatch();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const dlt=(id)=>{
    dispatch(DLT(id))
  };

  const total=()=>{
    let price=0;
    getdata.map((ele, k)=>{
      price= ele.price * ele.qnty + price
    })
    setPrice(price)
  };

  useEffect(()=>{
    total()
  },[total])

  return (
    <div>
      <Navbar bg="dark" variant="dark" style={{ height: "60px" }}>
        <Container>
          <NavLink to="/" className="text-decoration-none text-light mx-3">
            Add to Cart
          </NavLink>
          <Nav className="me-auto">
            <NavLink to="/" className="text-decoration-none text-light">
              Home
            </NavLink>
          </Nav>
          <Badge
            badgeContent={getdata.length}
            color="primary"
            id="fade-button"
            aria-controls={open ? "fade-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <i
              className="fa-solid fa-cart-shopping text-light"
              style={{ fontSize: 25, cursor: "pointer" }}
            ></i>
          </Badge>
        </Container>
        <Menu
          id="fade-menu"
          MenuListProps={{
            "aria-labelledby": "fade-button",
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          TransitionComponent={Fade}
        >
          {
          getdata.length ? (
            <div
              className="card_details"
              style={{ width: "24rem", padding: "10" }}
            >
              <Table>
                <thead>
                  <tr>
                    <th>Photo</th>
                    <th>Restaurant Name</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    getdata.map((e)=>{
                      return(
                        <>
                        <tr>
                          <td>
                            <NavLink to={`/cart/${e.id}`} onClick={handleClose}>
                            <img src={e.imgdata} style={{width:"5rem", height:"5rem"}} alt="" />
                            </NavLink>
                           

                          </td>
                          <td>
                            <p>{e.rname}</p>
                            <p>Price: ₹{e.price}</p>
                            <p>Quantity:{e.qnty}</p>
                            <p style={{color:"red" ,fontSize:"20", cursor:"pointer"}} onClick={()=>dlt(e.id)}>
                              <i className="fas fa-trash smalltrash"></i>
                            </p>
                          </td>
                          <td className="mt-5" style={{color:"red" ,fontSize:"20", cursor:"pointer"}} onClick={()=>dlt(e.id)}>
                          <i className="fas fa-trash largetrash"></i>
                          </td>
                        </tr>
                        </>
                      )
                    })
                  }
                  <p className="text-center">Total:₹ {price}</p>
                </tbody>
              </Table>
            </div>
          ) : (
            <div
              className="card_details d-flex justify-content align-item-center"
              style={{ width: "15rem", padding: "10", position: "relative" }}
            >
              <p>Your cart is empty</p>
              <i
                className="fas fa-close"
                onClick={handleClose}
                style={{
                  position: "absolute",
                  top: 2,
                  right: 20,
                  fontSize: 20,
                  cursor: "pointer",
                }}
              ></i>
              <img
                src="./cart.gif"
                alt=""
                className="emptycart_img"
                style={{ width: "5rem", padding: "10" }}
              />
            </div>
          )}
        </Menu>
      </Navbar>
    </div>
  );
};
export default Header;
