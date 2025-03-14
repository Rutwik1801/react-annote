import React from "react"
import { CommentBoxProps } from "../utils/types"

export const CommentBox: React.FC<CommentBoxProps> = ({ handleBlur, handleTextChange, annotationStartPoints, annotationBox, text }) => {

  return (<div
    tabIndex={0}
    onBlur={handleBlur}
    className="comment-box"
    style={{
      top: `${(annotationStartPoints?.[1] || 0) + (annotationBox?.[1] || 0)}px`,
      left: `${(annotationStartPoints?.[0] || 0) + (annotationBox?.[0] || 0)}px`,
    }} >
    <input
      autoFocus
      placeholder="Write a comment"
      type="text"
      onChange={(e) => {
        handleTextChange(e)
      }} value={text} />
  </div>)

}