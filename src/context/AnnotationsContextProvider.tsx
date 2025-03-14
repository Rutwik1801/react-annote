import { useState } from "react";
import { AnnotationsContextProviderProps, AnnotationType } from "../utils/types";
import { AnnotationsContext } from "./AnnotationsContext";

export const AnnotationsContextProvider:React.FC<AnnotationsContextProviderProps> = (props) => {
  const [annotations, setAnnotations] = useState<AnnotationType[]>([]);
  const handleAddAnnotation = (annotationObject: AnnotationType) => {
    setAnnotations(prev => [...prev, annotationObject])
  }

  const value = {
    annotations,
    handleAddAnnotation
  }

  return (<AnnotationsContext.Provider value={value}>
    {props.children}
  </AnnotationsContext.Provider>)
}
