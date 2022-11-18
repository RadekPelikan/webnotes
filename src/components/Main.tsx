import React from "react";
import { MainProps } from "global/types";

const Main = ({ children, className, center }: MainProps) => {
  return (
    <main className={`min-h-screen ${className || ""} ${center ? "grid place-content-center" : ""}`}>
      {children}
    </main>
  );
};

export default Main;
