import React, { useState } from 'react';
import './App.css';
import Header from "./Header";
import OrderCard from "./OrderCard";
import Footer from "./Footer";
import OrderForm from "./OrderForm";

function App() {

const [showModal, setShowModal] = useState(false)


  return (
      <>
          <Header/>
          <OrderCard
              setShowModal={setShowModal}
          />
          <Footer/>
          <OrderForm showModal={showModal} />
      </>
  );
}

export default App;
