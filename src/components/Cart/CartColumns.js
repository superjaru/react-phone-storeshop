import React from "react";

export default function CartColumns() {
  return (
    <div className="container-fluid text-center d-none d-lg-block">
      <div className="row">
        <div className="mx-auto col-lg">
          <p className="text-uppercase">productS</p>
        </div>
        <div className="mx-auto col-lg">
          <p className="text-uppercase">NAME OF product</p>
        </div>
        <div className="mx-auto col-lg">
          <p className="text-uppercase">price</p>
        </div>
        <div className="mx-auto col-lg">
          <p className="text-uppercase">quantity</p>
        </div>
        <div className="mx-auto col-lg">
          <p className="text-uppercase">remove</p>
        </div>
        <div className="mx-auto col-lg">
          <p className="text-uppercase">total</p>
        </div>
      </div>
    </div>
  );
}
