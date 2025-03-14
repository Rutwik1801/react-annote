import { useState } from "react";
import { useAnnotations } from "./useAnnotations";

export const useAnnotation = () => {
    const [showOverlay, setShowOverlay] = useState(false);
    const [showAnnotationCommentBox, setShowAnnotationCommentBox] = useState(false);
    const [annotationBox, setAnnotationBox] = useState(null);
    const [annotationStartPoints, setAnnotationStartPoints] = useState(null);
    const [dragStart, setDragStart] = useState(false);
    const [text, setText] = useState("")
    const { handleAddAnnotation } = useAnnotations();

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
    const handleBlur = () => {
      if(text.length > 0) {
        const annotationObject = {
          text,
          annotationStartPoints,
          annotationBox,
        }
        handleAddAnnotation(annotationObject)
      }
      setShowAnnotationCommentBox(false)
      setShowOverlay(false)
      setAnnotationStartPoints(null)
    }
    const handleTextChange = (e) => {
      setText(e.target.value)
    }
return {
  handleMouseDown, handleMouseMove, handleTextChange, handleMouseUp, handleBlur, text, dragStart, annotationBox, annotationStartPoints, showAnnotationCommentBox, showOverlay
}  
}