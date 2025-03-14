import { AnnotationType } from "../utils/types";

export const AnnotationBox:React.FC<{annotation: AnnotationType}> = ({annotation}) => {

return (<div
className="annotation-box"
  style={{
    zIndex: 4,
    top: annotation.annotationStartPoints?.[1],
    left: annotation.annotationStartPoints?.[0],
    height: `${annotation.annotationBox?.[1]}px`,
    width: `${annotation.annotationBox?.[0]}px`,
  }}
></div>);
} 