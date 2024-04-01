import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { Navbar, Sidebar, Footer } from "./components";
import ConfigRoutes from "./routes/ConfigRoutes";

import GlobalStyle from "./styles/GlobalStyle";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Navbar />
        <Sidebar />
        <ConfigRoutes />
        <Footer />
      </Router>
    </>
  );
};

export default App;
