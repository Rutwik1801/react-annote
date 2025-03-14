import { useState } from "react";

export const AnnotationBox = ({annotation}) => {
  const [focus, setFocus] = useState(false);
  const borderStyle = focus ? "1px solid green" : "1px solid black";
return (<div
onMouseOver={() => {
  setFocus(true)
}}
onMouseLeave={() => {
  setFocus(false)
}}
  style={{
    position: "absolute",
    zIndex: 2,
    top: annotation.annotationStartPoints?.[1],
    left: annotation.annotationStartPoints?.[0],
    height: `${annotation.annotationBox?.[1]}px`,
    width: `${annotation.annotationBox?.[0]}px`,
    border: borderStyle,
  }}
></div>);
} 