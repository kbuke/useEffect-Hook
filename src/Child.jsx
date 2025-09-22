import { useEffect, useState } from "react"

export function Child({
  show
}) {
  const [age, setAge] = useState(0)
  const [name, setName] = useState("")

  const [time, setTime] = useState(0)

  // console.log("Render") when the component re-renders
  useEffect(() => {
    console.log("Render")
  })

  // console.log("Hi") when the component mounts
  useEffect(() => {
    console.log("Hi")

    return () => {
      console.log("Bye")
    }
  }, [])

  // console.log("My name is....") when the name or age variables change
  useEffect(() => {
    console.log(`Hi my name is ${name} and I am ${age} years old.`)
  }, [name, age])

  // console.log(change in text) when a change occurs in more than a second between next
  useEffect(() => {
    document.title = name

    const timeout = setTimeout(() => {
      console.log(`My name is ${name}`)
    }, 1000)

    return () => {
      clearTimeout(timeout)
    }
  })

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
