import React from "react";
import { Nav, Header, WeDo, FinishedProjects, Footer } from "./ui";

function Home() {
  return (
    <div className="wrapper">
      <Nav />
      <Header />
      <WeDo />
      <FinishedProjects />
      <Footer />
    </div>
  );
}

export default Home;
