import { useState } from "react";
import "animate.css";

export function CSSAnimateExample() {
  return (
    <div className="animate__animated animate__swing animate__infinite">
      <input
        // type="text"
        style={{ width: 100, backgroundColor: "red", aspectRatio: 1 }}
      />
    </div>
  );
}
