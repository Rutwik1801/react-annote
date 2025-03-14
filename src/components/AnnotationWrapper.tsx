import { AnnotationsContextProvider } from "../context/AnnotationsContextProvider"
import { AnnotationContainer } from "./AnnotationContainer"

export const AnnotationWrapper:React.FC<React.PropsWithChildren>= ({children}) => {
  return (
          <AnnotationsContextProvider>
        <AnnotationContainer>
          {children}
        </AnnotationContainer>
          </AnnotationsContextProvider>
  )
}