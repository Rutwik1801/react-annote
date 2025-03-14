import { useAnnotations } from "../hooks/useAnnotations";
import { AnnotationType } from "../utils/types";
import { Annotation } from "./Annotation";
import { AnnotationBox } from "./AnnotationBox";

export const AnnotationContainer: React.FC<React.PropsWithChildren> = (props) => {
  const {annotations} = useAnnotations()

  return (
    <div>
      <Annotation >{props.children}</Annotation>
      {annotations?.length > 0 && annotations.map((annotation: AnnotationType) => {
        return <AnnotationBox annotation={annotation} />
      })}
    </div>
  );
};
