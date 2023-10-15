import React, { useState } from 'react'
import { StyledMenu } from '../../../styles/compound/styles.css'

export default function Menu({ children }) {
    const [open, setOpen] = useState(true)

    function toggle() {
        setOpen(prevOpen => !prevOpen)
    }
    
    return (
        <StyledMenu>
            {React.Children.map(children, (child) => {
                return React.cloneElement(child, {
                    open,
                    toggle
                })
            })}
        </StyledMenu>
    )
}
