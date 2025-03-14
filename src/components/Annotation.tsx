import { useAnnotation } from "../hooks/useAnnotation";
import { CommentBox } from "./CommentBox";

export const Annotation = (props) => {
 const {text, handleBlur,handleTextChange, handleMouseDown, handleMouseMove, handleMouseUp, showOverlay, dragStart, annotationBox, annotationStartPoints, showAnnotationCommentBox} = useAnnotation()
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
            zIndex: 2,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.3)",
          }}
        ></div>
      )}
      {props.children}

      {dragStart && annotationBox && (
        <div
          style={{
            position: "absolute",
            zIndex: 3,
            top: annotationStartPoints?.[1],
            left: annotationStartPoints?.[0],
            height: `${annotationBox?.[1]}px`,
            width: `${annotationBox?.[0]}px`,
            border: "1px solid black",
            // backgroundColor: "rgba(0,0,0,0.1)",
          }}
        ></div>
      )}
      {showAnnotationCommentBox && <CommentBox text={text} handleBlur={handleBlur} handleTextChange={handleTextChange} annotationStartPoints={annotationStartPoints} annotationBox={annotationBox}/>
        }
    </div>
  );
};
