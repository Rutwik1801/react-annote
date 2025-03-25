import { useState } from "react";
import { AnnotationType } from "../utils/types";
import { Tooltip } from "./Tooltip";

export const AnnotationBox:React.FC<{annotation: AnnotationType}> = ({annotation, ...rest}) => {
const [showTooltip, setShowTooltip] = useState<boolean>(false)
return (<div
onMouseOver={() => setShowTooltip(true)}
onMouseLeave={() => setShowTooltip(false)}
className="annotation-box"
  style={{
    zIndex: 4,
    top: annotation.annotationStartPoints?.[1],
    left: annotation.annotationStartPoints?.[0],
    height: `${annotation.annotationBox?.[1]}px`,
    width: `${annotation.annotationBox?.[0]}px`,
  }}
>
  <Tooltip text={annotation.text || ""} showTooltip={showTooltip} {...rest} />
</div>);
} 