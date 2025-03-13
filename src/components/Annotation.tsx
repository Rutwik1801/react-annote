import { useState } from "react";

export const Annotation = ({children}) => {
  const [showOverlay, setShowOverlay] = useState(false)
  return (
    <div style={{
      position: 'relative',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      border: "2px solid black"
    }}>

    </div>
  );
}