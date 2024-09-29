import React, { useState } from "react";
import Navbar from "./component/Navbar";
import TransitionsModal from "./component/Modal";
import MenuCard from "./component/Card";
import "./App.css";
const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [selecedItem, setSelectedItem] = useState(null);
  console.log("Selected Item", selecedItem);
  const handleOpen = (item) => {
    setShowModal(true);
    setSelectedItem(item);
  };
  const handleClose = () => {
    setShowModal(false);
    setSelectedItem(null);
  };

  return (
    <div>
      <Navbar />
      <MenuCard onShowDetail={handleOpen} />
      <TransitionsModal open={showModal} onClose={handleClose}>
        {selecedItem && (
          <div>
            <h2 style={{ fontFamily: "cursive" }}>{selecedItem.foodName}</h2>
            <img
              src={selecedItem.image}
              alt={selecedItem.name}
              style={{ width: "100%", padding: 8 }}
            />
            <p style={{ fontFamily:'cursive', fontWeight:500, fontSize:16 }}>
              Wallet check krlo phele {selecedItem.price} ka h.
            </p>
          </div>
        )}
      </TransitionsModal>
    </div>
  );
};

export default App;
