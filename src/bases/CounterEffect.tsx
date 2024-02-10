import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap";

const MAXIMUN_COUNT = 2;

interface Props{
    initialValue?: number;
}

export const CounterEffect = ({initialValue = 0 }: Props) => {

    const [counter, setCounter] = useState(initialValue);
    const counterElement = useRef<HTMLHeadingElement>(null);

    const handleClick = () => {
        setCounter(prev => Math.min( prev + 1, MAXIMUN_COUNT))
    }

    useEffect(() => {
     if (counter < MAXIMUN_COUNT ) return;

      console.log('%cSe llego al valor maximo', 'color: red; background-color: black')
      
      const tl = gsap.timeline();

      tl.to(counterElement.current, {y: -10, duration: 0.2, ease:'ease.out' });
      tl.to(counterElement.current, {y: 10, duration: 1, ease:'bounce.out' });

      /* gsap.to(counterElement.current, {y: -10, duration: 0.2, ease:'ease.out' }).then(() => {
        gsap.to(counterElement.current, {y: 10, duration: 1, ease:'bounce.out' })
      }) */

    }, [counter])
    
  return (
    <>
      <h1>CounterEffect: { counter }</h1>
      <h2 ref={ counterElement}>{ counter }</h2>
      <button onClick={handleClick}>+1</button>
    </>
  )
}
