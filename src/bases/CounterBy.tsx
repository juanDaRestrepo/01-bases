import { useState } from "react"


interface Props{
    initialValue?: number;
}

interface CounterType {
  counter: number;
  clicks: number;
}

export const CounterBy = ({initialValue = 0 }: Props) => {
    const [counter, setCounter] = useState<CounterType>({
      counter: initialValue,
      clicks: 0
    });

    const handleClick = (plus:number) => {
        setCounter(
          (prev) => ({
          counter: prev.counter + plus,
          clicks: prev.clicks + 1
        }))
    }
  return (
    <>
      <h1>Counter: { counter.counter }</h1>
      <h2>Clicks: { counter.clicks}</h2>
      <button onClick={() => handleClick(1)}>+1</button>
      <button onClick={() => handleClick(5)}>+5</button>
    </>
  )
}
