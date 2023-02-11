import React from "react";
import Clients from "./components/Clients";
import ContentSection from "./components/ContentSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Subscribe from "./components/Subscribe";
import Testimonials from "./components/Testimonials";
import Trademark from "./components/Trademark";

function App() {
  return (
    <div
      style={{ backgroundImage: 'url("./assets/header.png")' }}
      className="h-[100vh] bg-center bg-top bg-no-repeat  flex justify-center bg-white"
    >
      <div className="container flex justify-center">
        <div className="w-[1170px]">
          <Header />
          <Hero />
          <ContentSection />
          <Clients />
          <Testimonials />
          <Subscribe />
          <Footer />
          <Trademark />
        </div>
      </div>
    </div>
  );
}

export default App;
