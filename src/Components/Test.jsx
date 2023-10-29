import { useState, useEffect } from "react";

const Test = () => {
  const [screenSize, setScreenSize] = useState(getCurrentDimension());

  function getCurrentDimension() {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }

  
  const result = screenSize.width < 600 ? "yes" : "no";

  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getCurrentDimension());
    };
    window.addEventListener("resize", updateDimension);

    return () => {
      window.removeEventListener("resize", updateDimension);
    };
  }, [screenSize, result]);

  return (
    <div>
      <ul>
        <li>
          Width: <strong>{screenSize.width}</strong>
        </li>
        <li>
          result: <strong>{result}</strong>
        </li>
      </ul>
    </div>
  );
};

export default Test;
