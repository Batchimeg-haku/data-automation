import React from "react";

// components

import CardCustomerRegister from "components/Cards/CardCustomerRegister";

// layout for page

import Admin from "layouts/Admin.js";

export default function CustomerRegister() {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <CardCustomerRegister />
        </div>
      </div>
    </>
  );
}

CustomerRegister.layout = Admin;
