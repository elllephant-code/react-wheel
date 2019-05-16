import { CSSProperties } from 'react'
import Vector2 from './vector2';
export interface IPolarCoordinates {
    radius: number,
    angle: number,
}

function polarToCSS(posVector: Vector2, origin: { x: number, y: number }): CSSProperties {
    return {
        position: 'absolute',
        left: origin.x + posVector.x,
        bottom: origin.y + posVector.y,
    }
}

export default polarToCSS