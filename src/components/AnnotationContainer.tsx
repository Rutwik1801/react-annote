import { Annotation } from "./Annotation";

export const AnnotationContainer = (props) => {
  return (
    <div>
      <Annotation>{props.children}</Annotation>
    </div>
  );
};
