import { useEffect, useRef, useState } from "react"
import { gsap } from 'gsap'

const MAXIMUN_COUNT = 10

export const CounterEffect = () => {

    const [counter, setCounter] = useState(5)

    const counterElement = useRef<HTMLHeadingElement>(null)

    const handleClick = () => {
        //setCounter(counter +1)
        //if(counter === MAXIMUN_COUNT) return

        //Tomará el valor mínimo de los dos
        setCounter(prev => Math.min(prev + 1, MAXIMUN_COUNT))
    }

    useEffect(() => {

        if(counter < 10) return

        console.log('%c Se llegó al valor máximo! ', 'background: #FFFFFF; color: #5625D0')
        // gsap.to('h2', {y: -10, duration: 0.2, ease: 'ease.out'}).then(() => {
        //     gsap.to('h2', {y: 0, duration: 1, ease: 'bounce.out'})
        // })

        //Una mejor practica es utilizar el timeline recomendado por gsap, es un controlador de tiempo
        const timelime = gsap.timeline()

        timelime.to(counterElement.current, {y: -10, duration: 0.2, ease: 'ease.out'})
                .to(counterElement.current, {y: 0, duration: 1, ease: 'bounce.out'})
        
       
    }, [counter])

    return (
        <>
            <h1>CounterEffect:</h1>
            <h2 ref={counterElement}>{counter}</h2>

            <button onClick={handleClick}>
                +1
            </button>
            
        </>
    )
}
