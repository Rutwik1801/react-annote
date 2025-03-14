import { useState } from "react";

export const AnnotationContainer = (props) => {
  const [showOverlay, setShowOverlay] = useState(false);
  const [showAnnotationCommentBox, setShowAnnotationCommentBox] = useState(false);
  const [annotationBox, setAnnotationBox] = useState(null);
  const [annotationStartPoints, setAnnotationStartPoints] = useState(null);
  const [dragStart, setDragStart] = useState(false);
  const [text, setText] = useState("")

  const handleMouseDown = (event) => {
    setShowOverlay(false)
    setAnnotationStartPoints([event.clientX, event.clientY]);
    setAnnotationBox([0, 0]); // Initialize size to zero
    setDragStart(true);
    setShowAnnotationCommentBox(false)
  };

  const handleMouseMove = (event) => {
    if (dragStart && annotationStartPoints) {
      const width = event.clientX - annotationStartPoints[0];
      const height = event.clientY - annotationStartPoints[1];
      setAnnotationBox([width, height]);
    }
  };

  const handleMouseUp = () => {
    setDragStart(false);
    // setAnnotationStartPoints(null);
    setShowAnnotationCommentBox(true)
    setShowOverlay(true)
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
      {showAnnotationCommentBox && <div 
      tabIndex={0}
      onBlur={() => {
          setShowAnnotationCommentBox(false)
          setShowOverlay(false)
          setAnnotationStartPoints(null)
        
        }} style={{position: "absolute",zIndex:2, top:`${(annotationStartPoints?.[1] || 0) + (annotationBox?.[1] || 0)}px`, left: `${(annotationStartPoints?.[0] || 0) + (annotationBox?.[0] || 0)}px`, height: "100px", width:"100px", backgroundColor:"green"}} >
        <input
        autoFocus
        type="text" onChange={(e) => {
          setText(e.target.value)}} value={text} />
        </div>
        }
    </div>
  );
};
