import React from 'react'
import Form from './components/Form'

export default function App() {
  return (
    <div>
      App
      <p>Các kĩ thuật làm việc với form!</p>
      {/*   
        2 kĩ thuật chính
          1. controlled 
          2. uncontrolled (hook useRef)
          3. dùng thư viện formirk
      *************
       TRONG FORM 
        1.ô input
        2.textarea
        3.select-option
        
       */}
       <Form></Form>
    </div>
  )
}
