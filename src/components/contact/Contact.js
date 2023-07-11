import React from "react";
import { Sidebar } from "../sidebar/Sidebar";
import MainContact from "./MainContact";

const Contact = () => {
  return (
    <div className="md:flex gap-5">
      <Sidebar />
      <MainContact />
    </div>
  );
};

export default Contact;
