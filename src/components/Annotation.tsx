import { ReactNode } from "react";
import { useAnnotation } from "../hooks/useAnnotation";
import { CommentBox } from "./CommentBox";

interface AnnotationInterface {
  children: ReactNode;
}

export const Annotation: React.FC<AnnotationInterface> = (props) => {
  const {
    text,
    handleBlur,
    handleTextChange,
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
    showOverlay,
    dragStart,
    annotationBox,
    annotationStartPoints,
    showAnnotationCommentBox,
  } = useAnnotation();

  return (
    <div
      className="annotation-container"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
      {showOverlay && <div className="annotation-overlay"></div>}

      {props.children}

      {dragStart && annotationBox && (
        <div
          className="annotation-box"
          style={{
            top: annotationStartPoints?.[1],
            left: annotationStartPoints?.[0],
            height: `${annotationBox?.[1]}px`,
            width: `${annotationBox?.[0]}px`,
            zIndex: 3
          }}
        ></div>
      )}

      {showAnnotationCommentBox && (
        <CommentBox
          text={text}
          handleBlur={handleBlur}
          handleTextChange={handleTextChange}
          annotationStartPoints={annotationStartPoints}
          annotationBox={annotationBox}
        />
      )}
    </div>
  );
};
