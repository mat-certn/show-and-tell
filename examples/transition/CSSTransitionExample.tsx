import { useState } from "react";
import "./css-transition-example.css";
import { Button, View } from "react-native";

export function CSSTransitionExample() {
  const [bigger, setBigger] = useState(false);

  return (
    <>
      <div className={`box ${bigger ? "bigger" : ""}`} />
      <Button
        onPress={() => {
          setBigger((curr) => !curr);
        }}
        title="Animate"
      />
    </>
  );
}
