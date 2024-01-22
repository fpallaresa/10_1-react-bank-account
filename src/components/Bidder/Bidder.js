import React from "react";
import "./Bidder.css";

const Bidder = ({name, offer, addBidder}) => {

    return (
    
    <button className="bidder" onClick={addBidder}>{name} quiere pujar {offer}€</button>

    );
}

export default Bidder;