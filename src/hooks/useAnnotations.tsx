import { useContext } from "react"
import { AnnotationsContext } from "../context/AnnotationsContext";

export const useAnnotations = () => {
  return useContext(AnnotationsContext);
}