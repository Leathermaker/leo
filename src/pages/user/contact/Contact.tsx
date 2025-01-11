import React from "react";
import { Footer } from "../home/footer";
import Address from "./components/Address";
import ContactForm from "./components/ContactForm";
import GoogleMapEmbed from "./components/GoogleMapEmbed";
import ContactHero from "./components/ContactHero";
import Partner from "./components/Partner";

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen h-auto ">
      <ContactHero/>
      <Address />
      <Partner/>
      <ContactForm />
      <GoogleMapEmbed />
      <Footer />
    </div>
  );
};

export default Contact;
