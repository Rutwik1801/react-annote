import './App.css'

import { AnnotationContainer } from "./components/AnnotationContainer"

function App() {

  return (
    <div style={{width: "100vw", height:"100vh"}}>
    <AnnotationContainer>
      {/* {children} */}
      <div style={{height:"300px", width:"100%", backgroundColor:"red"}}>
        hlllooo
      </div>
    </AnnotationContainer>
    </div>
  )
}

export default App
