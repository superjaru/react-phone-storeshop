import React from "react";

export default function CartItem({ cart, value }) {
  const { id, img, title, price, count, total } = cart;
  const { increment, decrement, removeItem } = value;
  //   console.log(cart);
  return (
    <div className="row my-2 text-center text-capitalize ">
      <div className="col-10 mx-auto col-lg ">
        <img
          src={img}
          className="img-fluid"
          style={{ width: "5rem", height: "5rem" }}
          alt="product"
        />
      </div>
      <div className="col-10 mx-auto col-lg my-lg-4">
        <span className="d-lg-none">product : </span>
        {title}
      </div>
      <div className="col-10 mx-auto col-lg my-lg-4">
        <span className="d-lg-none">price : </span>
        <span className="font-weight-bold">${price}</span>
      </div>
      <div className="col-10 mx-auto col-lg my-lg-0">
        <div className="d-flex justify-content-center my-lg-4">
          <div>
            <i
              className="fa fa-minus-square fa-lg mx-1"
              onClick={() => decrement(id)}
            ></i>
          </div>
          <div className="mx-1">
            <span>{count}</span>
          </div>
          <div>
            <i
              className="fa fa-plus-square fa-lg mx-1"
              onClick={() => increment(id)}
            ></i>
          </div>
        </div>
      </div>
      <div className="col-10 mx-auto col-lg">
        <i
          className="fa fa-trash fa-lg my-lg-4"
          style={{ color: " rgb(236, 172, 34)" }}
          onClick={() => removeItem(id)}
        ></i>
      </div>
      <div className="col-10 mx-auto col-lg my-lg-4">
        <strong> item total : $ {total}</strong>
        <hr className="d-lg-none" />
      
      </div>
    </div>
  );
}
