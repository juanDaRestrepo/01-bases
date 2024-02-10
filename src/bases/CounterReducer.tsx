import { useReducer, useState } from "react"


interface CounterState{
    counter  : number;
    previous : number;
    changes  : number;
}

const INITIAL_STATE:  CounterState = {
  counter  : 0,
  previous : 0,
  changes  : 0
}

type CounterAction = 
  | { type: 'increaseBy', payload: { value: number; }}
  | { type: 'reset'}

const counterReducer = (state: CounterState, action: CounterAction): CounterState => {
  switch (action.type) {
    case 'reset':
      return {
        counter: 0,
        changes: 0,
        previous: 0
      }
    case 'increaseBy':
      return {
        counter: state.counter + action.payload.value,
        previous: state.counter,
        changes: state.changes + 1
      }
    default:
      return state;
  }
}

export const CounterReducerComponent = () => {
const [ counterState , dispatch] = useReducer(counterReducer, INITIAL_STATE)
  
    const handleClick = (increaseBy: number) => {
        dispatch({type: 'increaseBy', payload: {value: increaseBy}})
    }

    const reset = () => {
      dispatch({type: 'reset'})
    }

  return (
    <>
      <h1>Counter Reducer: { counterState.counter }</h1>
      <pre>
        {JSON.stringify(counterState)}
      </pre>
      <button onClick={() => handleClick(5)}>+5</button>
      <button onClick={reset}>reset</button>
    </>
  )
}
