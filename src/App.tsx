import './App.css'
import { AnnotationWrapper } from './components/AnnotationWrapper'

function App() {
  return (
    <div>
      <AnnotationWrapper tooltipPosition="bottom-right" >
      <div style={{height:"300px", width:"100%", backgroundColor:"red"}}>
        hlllooo
      </div>
      </AnnotationWrapper>
    </div>
  )
}

export default App
