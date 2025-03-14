
export const CommentBox = ({handleBlur, handleTextChange, annotationStartPoints, annotationBox, text}) => {

  return (<div 
    tabIndex={0}
    onBlur={handleBlur} style={{position: "absolute",zIndex:2, top:`${(annotationStartPoints?.[1] || 0) + (annotationBox?.[1] || 0)}px`, left: `${(annotationStartPoints?.[0] || 0) + (annotationBox?.[0] || 0)}px`, height: "100px", width:"100px", backgroundColor:"green"}} >
      <input
      autoFocus
      type="text" onChange={(e) => {
        handleTextChange(e)}} value={text} />
      </div>)
      
}