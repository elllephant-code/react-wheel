import Vector2 from '../utils/vector2';
import safe from '../utils/safe';

export interface IWheelItem {
    position: number
    rOffset: number
    tOffset: number
}

export interface IWheel {
    radius?: number
    angularSector?: number
    rotation?: number
}

interface ISectorEdges {
    start: number
    end: number
}

function sectorEdges(angularSector: number): ISectorEdges {
    return {
        start: (1 - angularSector) / 2,
        end: (1 + angularSector) / 2,
    }
}

/**
 * @return the polar coodinates of an item based on the wheel properties.
 * @param item item that needs to be positioned
 * @param wheel wheel to position item into
 */
function placeOnWheel(
    item: IWheelItem,
    wheel: IWheel = {}
): Vector2 {

    const radius = safe<number>(100, wheel.radius)
    const rotation = safe<number>(0, wheel.rotation)
    const angularSector = safe<number>(1, wheel.angularSector)

    const position = safe<number>(0, item.position)
    const rOffset = safe<number>(0, item.rOffset)
    const tOffset = safe<number>(0, item.tOffset)

    const start = sectorEdges(angularSector).start
    const sectorPortion = (angularSector * position) % angularSector

    const newPosition = new Vector2(radius, start, 'polar')
        .rotate(sectorPortion)
        .rotate(rotation)
        .rotate(tOffset)
        .lengthen(rOffset)

    return newPosition
}

export default placeOnWheel