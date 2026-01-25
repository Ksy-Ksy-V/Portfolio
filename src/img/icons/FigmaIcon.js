import React from 'react'

const FigmaIcon = ({ iconStyle, style, className }) => {
    return (
        <svg
            viewBox="0 0 1024 1024"
            style={{
                width: '1em',
                height: '1em',
                fill: 'currentColor',
                ...style,
            }}
            className={className}
        >
            <circle
                cx="512"
                cy="512"
                r="512"
                style={{
                    strokeWidth: 40,
                }}
            />
            <path
                d="M512 512c0-47.1 38.2-85.3 85.3-85.3s85.3 38.2 85.3 85.3-38.2 85.3-85.3 85.3S512 559.1 512 512zM341.3 682.7c0-47.1 38.2-85.3 85.3-85.3H512v85.3c0 47.1-38.2 85.3-85.3 85.3s-85.4-38.2-85.4-85.3zM512 256v170.7h85.3c47.1 0 85.3-38.2 85.3-85.3S644.5 256 597.3 256H512zm-170.7 85.3c0 47.1 38.2 85.3 85.3 85.3H512V256h-85.3c-47.2 0-85.4 38.2-85.4 85.3zm0 170.7c0 47.1 38.2 85.3 85.3 85.3H512V426.7h-85.3c-47.2 0-85.4 38.2-85.4 85.3z"
                style={{ ...iconStyle }}
                transform="scale(1.2)"
                transformOrigin="center"
            />
        </svg>
    )
}

export default FigmaIcon
