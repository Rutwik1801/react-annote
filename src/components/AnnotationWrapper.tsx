import { AnnotationsContextProvider } from "../context/AnnotationsContextProvider"
import { TooltipPosition } from "../utils/types"
import { AnnotationContainer } from "./AnnotationContainer"

export const AnnotationWrapper:React.FC<React.PropsWithChildren<{tooltipPosition: TooltipPosition}>>= ({children, ...props}) => {
  return (
          <AnnotationsContextProvider>
        <AnnotationContainer {...props}>
          {children}
        </AnnotationContainer>
          </AnnotationsContextProvider>
  )
}