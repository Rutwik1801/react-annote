import { createContext, useState } from "react";

export const AnnotationsContext = createContext({annotations: []});

export const AnnotationsContextProvider = (props) => {
  const [annotations, setAnnotations] = useState([]);
  const handleAddAnnotation = (annotationObject) => {
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
