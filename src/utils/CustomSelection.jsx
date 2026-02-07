import React, { useEffect } from 'react'

const CustomSelection = () => {
    useEffect(() => {
        const style = document.createElement('style')
        style.id = 'custom-selection-styles'
        style.textContent = `
            ::selection {
                background-color: var(--color-primary-light);
                color: var(--color-background-default);
            }
            ::-moz-selection {
                background-color: var(--color-primary-light);
                color: var(--color-background-default);
            }
        `
        document.head.appendChild(style)

        return () => {
            const existingStyle = document.getElementById('custom-selection-styles')
            if (existingStyle) {
                document.head.removeChild(existingStyle)
            }
        }
    }, [])

    return null
}

export default CustomSelection
