import { createContext} from "react";
import {AnnotationsContextType } from "../utils/types";
import { useContext } from "react"

export const AnnotationsContext = createContext<AnnotationsContextType>({annotations: [], handleAddAnnotation: () => {}});

export const useAnnotations = () => {
  return useContext(AnnotationsContext);
}