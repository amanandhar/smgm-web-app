import { useEffect, useState } from "react";
import { ProductCart } from "../../models/ProductCart.model";

export const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container px-4 px-lg-5">
        <label className="navbar-brand">
          <img
            width="30"
            height="30"
            src={process.env.PUBLIC_URL + "/images/company/company-logo.jpg"}
            alt="SMGM"
            style={{ padding: "2px" }}
          />
          SMGM - Online Grocery Store
        </label>
        <label style={{ fontSize: "12px" }}>
          Nayabazar-16, Kathmandu, Email: samyuktamanab.grocery@gmail.com,
          Phone: 01-4351920, Whatsapp/Viber :9841862943
        </label>
      </div>
    </nav>
  );
};
