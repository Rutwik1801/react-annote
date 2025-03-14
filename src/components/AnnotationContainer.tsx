import { useAnnotations } from "../hooks/useAnnotations";
import { Annotation } from "./Annotation";
import { AnnotationBox } from "./AnnotationBox";

export const AnnotationContainer = (props) => {
  const {annotations} = useAnnotations()

  return (
    <div>
      <Annotation >{props.children}</Annotation>
      {annotations?.length > 0 && annotations.map((annotation) => {
        return <AnnotationBox annotation={annotation} />
      })}
    </div>
  );
};
