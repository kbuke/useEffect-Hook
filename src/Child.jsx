import { useEffect, useState } from "react"

export function Child() {
  const [age, setAge] = useState(0)
  const [name, setName] = useState("")

  // console.log("Render") when the component re-renders

  // console.log("Hi") when the component mounts
  useEffect(() => {
    console.log("Hi")
  }, [])

  // console.log("My name is....") when the name or age variables change
  useEffect(() => {
    console.log(`Hi my name is ${name} and I am ${age} years old.`)
  }, [name, age])

  return (
    <div>
      <input type="text" value={name} onChange={e => setName(e.target.value)} />
      <br />
      <br />
      <button onClick={() => setAge(a => a - 1)}>-</button>
      {age}
      <button onClick={() => setAge(a => a + 1)}>+</button>
      <br />
      <br />
      My name is {name} and I am {age} years old.
    </div>
  )
}
