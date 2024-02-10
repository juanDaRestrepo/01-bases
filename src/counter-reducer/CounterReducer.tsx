import { useReducer } from "react"
import { CounterState } from "./interfaces/counter-interfaces"
import { counterReducer } from "./state/counterReducer"
import { doIncreaseBy, doReset } from "./actions/actions"



const INITIAL_STATE:  CounterState = {
  counter  : 0,
  previous : 0,
  changes  : 0
}

export const CounterReducerComponent = () => {
const [ counterState , dispatch] = useReducer(counterReducer, INITIAL_STATE)
  
    const handleClick = (increaseBy: number) => {
        dispatch(doIncreaseBy(increaseBy))
    }

    const reset = () => {
      dispatch(doReset())
    }

  return (
    <>
      <h1>Counter reducer segmentado: { counterState.counter }</h1>
      <pre>
        {JSON.stringify(counterState)}
      </pre>
      <button onClick={() => handleClick(5)}>+5</button>
      <button onClick={reset}>reset</button>
    </>
  )
}
