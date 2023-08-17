import React, { useRef, useState } from "react";
import { EmbeddedCheckout } from "./EmbeddedCheckout";

export const Main = () => {
  const [cartUrl, setCartUrl] = useState(null);
  const inputValueRef = useRef('');

  function handleButtonClick() {
    setCartUrl(inputValueRef.current);
  }

  return (
    <div className="container">
      <h1>Embedded Checkout Test</h1>
      <p>This is to test the BigCommerce Embedded Checkout with the Checkout-SDK</p>
      <input
        type="text"
        style={{ width: "500px" }}
        placeholder="Embedded checkout URL"
        onChange={(e) => {
          inputValueRef.current = e.target.value
        }}
      />
      <br />
      <button onClick={handleButtonClick}>Update embedded checkout</button>
      <br />
      Current cart URL: {cartUrl}
      {cartUrl && (
        <EmbeddedCheckout cartUrl={cartUrl} />
      )}
    </div>
  );
};
