import { CSSProperties } from 'react'
export interface IPolarCoordinates {
    radius: number,
    angle: number,
}

function polarToCSS({ radius, angle }: IPolarCoordinates, origin: { x: number, y: number }): CSSProperties {
    return {
        position: 'absolute',
        left: origin.x + radius * Math.cos(angle),
        bottom: origin.y + radius * Math.sin(angle),
    }
}

export default polarToCSS