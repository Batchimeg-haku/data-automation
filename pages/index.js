/* eslint-disable react/jsx-no-target-blank */
import React, { useEffect } from "react";
import Router from "next/router";

export default function Index() {
  useEffect(() => {
    Router.push("/auth/login");
  }, []);

  return <div></div>;
}
