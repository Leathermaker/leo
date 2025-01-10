import React from "react";
import { Navbar } from "../home/components";
import { Footer } from "../home/footer";
import Address from "./components/Address";
import ContactForm from "./components/ContactForm";
import GoogleMapEmbed from "./components/GoogleMapEmbed";
import ContactHero from "./components/ContactHero";

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen h-auto ">
      <Navbar />
      <ContactHero/>
      <Address />
      <ContactForm />
      <GoogleMapEmbed />
      <Footer />
    </div>
  );
};

export default Contact;
