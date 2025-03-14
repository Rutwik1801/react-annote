import { ReactNode } from "react"

export interface AnnotationInterface {
  children: ReactNode;
}


export type AnnotationType = {
  id: number,
  text: string,
  annotationStartPoints: number[] | null,
  annotationBox: number[] | null
}

export type AnnotationsContextType = {
  annotations: AnnotationType[] | []
  handleAddAnnotation: (annotationObject: AnnotationType) => void
}

export type AnnotationsContextProviderProps = AnnotationInterface & {
  value?: AnnotationsContextType
}

export type CommentBoxProps = {
  handleBlur: () => void,
  handleTextChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
  annotationStartPoints: number[] | null,
  annotationBox: number[] | null,
  text: string
}