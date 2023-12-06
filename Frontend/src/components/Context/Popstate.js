import { createContext, useState } from "react";

export const bannerContext = createContext();

function Popstate(props) {
  const [popBanner, setPopBanner] = useState(0);

  return (
    <bannerContext.Provider value={{ popBanner, setPopBanner }}>
      {props.children} {/* Corrected typo: props.children */}
    </bannerContext.Provider>
  );
}

export default Popstate;
