
# react-beautiful-annotation

Adding annotations has never been this easy. Integrate it using one simple step.



## Installation

Install my-project with npm

```bash
  npm i react-beautiful-annotation
```
    
## Usage/Examples

```javascript
import {AnnotationWrapper} from 'react-beautiful-annotation'

export default function App() {
  return (<AnnotationWrapper>
            <YourComponents />
        </AnnotationWrapper>);
}
```

## Tooltip position Customization

You can pass in a custom tooltipPosition prop to align the tooltip.
Supported types:-

- "bottom-center" 
- "bottom-left" 
- "bottom-right" 
- "left-center" 
- "right-center" 
- "top-center" 
- "top-left"
- "top-right" 