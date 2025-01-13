import React from "react";
import Address from "./components/Address";
import ContactForm from "./components/ContactForm";
import GoogleMapEmbed from "./components/GoogleMapEmbed";
import Partner from "./components/Partner";
import PageHeroSection from "../../../components/PageHeroSection";

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen h-auto ">
      {/* <ContactHero/> */}
      <PageHeroSection title={"CONTACT"}/>
      <Address />
      <Partner/>
      <ContactForm />
      <GoogleMapEmbed />
    </div>
  );
};

export default Contact;
