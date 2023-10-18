import { useState, useEffect, useRef } from 'react'

export default function useToggle({initialValue = false, onToggle = () => {}}) {
    const [on, setOn] = useState(initialValue)

    function toggle() {
        setOn(prevOn => !prevOn)
    }

    const firstRender = useRef(true)
    useEffect(() => {
        if (firstRender.current) {
            firstRender.current = false
        }
        else {
            onToggle()
        }
    }, [on])

    return [on, toggle]
}