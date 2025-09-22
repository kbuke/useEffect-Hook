import { useState, useEffect } from "react"
import { Child } from "./Child"

export default function App() {
  const [show, setShow] = useState(true)

  const childComponent = show ? <Child show={show}/> : null

  return (
    <div>
      <button onClick={() => setShow(currentShow => !currentShow)}>
        Show/Hide
      </button>
      {childComponent}
    </div>
  )
}
