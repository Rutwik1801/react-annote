import React, { useState } from "react";
import { useAnnotations } from "./useAnnotations";


export const useAnnotation = () => {
    const [showOverlay, setShowOverlay] = useState(false);
    const [showAnnotationCommentBox, setShowAnnotationCommentBox] = useState(false);
    const [annotationBox, setAnnotationBox] = useState<number[] | null>(null);
    const [annotationStartPoints, setAnnotationStartPoints] = useState<number[] | null>(null);
    const [dragStart, setDragStart] = useState(false);
    const [text, setText] = useState("")
    const { handleAddAnnotation } = useAnnotations();

    const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
      setShowOverlay(false)
      setAnnotationStartPoints([event.clientX, event.clientY]);
      setAnnotationBox([0, 0]);
      setDragStart(true);
      setShowAnnotationCommentBox(false)
    };
  
    const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
      if (dragStart && annotationStartPoints) {
        const width = event.clientX - annotationStartPoints[0];
        const height = event.clientY - annotationStartPoints[1];
        setAnnotationBox([width, height]);
      }
    };
  
    const handleMouseUp = () => {
      setDragStart(false);
      setShowAnnotationCommentBox(true)
      setShowOverlay(true)
    };
    const handleBlur = () => {
      if(text.length > 0) {
        const annotationObject = {
          id: Date.now(),
          text,
          annotationStartPoints,
          annotationBox,
        }
        handleAddAnnotation(annotationObject)
        setText("")
      }
      setShowAnnotationCommentBox(false)
      setShowOverlay(false)
      setAnnotationStartPoints(null)
    }
    const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setText(event.target.value)
    }
return {
  handleMouseDown, handleMouseMove, handleTextChange, handleMouseUp, handleBlur, text, dragStart, annotationBox, annotationStartPoints, showAnnotationCommentBox, showOverlay
}  
}