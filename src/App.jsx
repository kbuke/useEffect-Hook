import { useState, useEffect } from "react"
import { Child } from "./Child"

export default function App() {
  const [show, setShow] = useState(true)

  const childComponent = show ? <Child show={show}/> : null

  // console.log("Bye") when component unmounts
  useEffect(() => {
    if (show === false){
      console.log("Bye")
    }
  }, [show])

  return (
    <div>
      <button onClick={() => setShow(currentShow => !currentShow)}>
        Show/Hide
      </button>
      {childComponent}
    </div>
  )
}
