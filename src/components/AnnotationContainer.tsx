import { useState } from "react";
import { Annotation } from "./Annotation";

export const AnnotationContainer = (props) => {
  const [showOverlay, setShowOverlay] = useState(false);
  const [showAnnotationCommentBox, setShowAnnotationCommentBox] = useState(null);
  const [annotationBox, setAnnotationBox] = useState(null);
  const [annotationStartPoints, setAnnotationStartPoints] = useState(null);
  const [dragStart, setDragStart] = useState(false);

  const handleMouseDown = (event) => {
    setShowOverlay(false)
    setAnnotationStartPoints([event.clientX, event.clientY]);
    setAnnotationBox([0, 0]); // Initialize size to zero
    setDragStart(true);
  };

  const handleMouseMove = (event) => {
    if (dragStart && annotationStartPoints) {
      const width = event.clientX - annotationStartPoints[0];
      const height = event.clientY - annotationStartPoints[1];
      setAnnotationBox([width, height]);
    }
  };

  const handleMouseUp = () => {
    setShowOverlay(true)
    setDragStart(false);
    setAnnotationStartPoints(null);
  };

  return (
    <div
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      style={{ position: "relative", width: "100%", height: "100%" }}
    >
      {showOverlay && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "black",
          }}
        ></div>
      )}
      {props.children}

      {dragStart && annotationBox && (
        <div
          style={{
            position: "absolute",
            zIndex: 2,
            top: annotationStartPoints?.[1],
            left: annotationStartPoints?.[0],
            height: `${annotationBox?.[1]}px`,
            width: `${annotationBox?.[0]}px`,
            border: "1px solid black",
            backgroundColor: "rgba(0,0,0,0.1)",
          }}
        ></div>
      )}
    </div>
  );
};
