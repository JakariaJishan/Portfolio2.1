import React from "react";
import { Sidebar } from "../sidebar/Sidebar";
import MainContact from "./MainContact";

const Contact = () => {
  return (
    <div className="flex">
      <Sidebar />
      <MainContact />
    </div>
  );
};

export default Contact;
