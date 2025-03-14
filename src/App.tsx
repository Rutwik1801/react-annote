import './App.css'

import { AnnotationContainer } from "./components/AnnotationContainer"
import { AnnotationsContextProvider } from './context/AnnotationsContextProvider'

function App() {

  return (
    <div style={{width: "100vw", height:"100vh"}}>
      <AnnotationsContextProvider>
    <AnnotationContainer>
      <div style={{height:"300px", width:"100%", backgroundColor:"red"}}>
        hlllooo
      </div>
    </AnnotationContainer>
      </AnnotationsContextProvider>
    </div>
  )
}

export default App
