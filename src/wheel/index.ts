const PI = Math.PI
const PI_H = PI / 2
// const PI_Q = PI / 4

export interface IWheelItem {
    /** position of item expressed in fraction of the angularSector. Must be a number between 0 and 1 */
    position: number
    /** offset relative to wheel circle along the radius-axis */
    offset: number
}

export interface IPolarCoodinates {
    radius: number,
    angle: number,
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
        start: (2 * Math.PI - angularSector) / 2,
        end: (2 * PI + angularSector) / 2,
    }
}

/**
 * @return the polar coodinates of an item based on the wheel properties.
 * @param item item that needs to be positioned
 * @param wheel wheel to position item into
 */
function placeOnWheel(
    item: IWheelItem,
    wheel: IWheel = {},
): IPolarCoodinates {

    const angularSector = wheel.angularSector || 2 * PI
    const radius = wheel.radius || 0
    const rotation = wheel.rotation || 0

    const start = sectorEdges(angularSector).start
    const sectorPortion = (angularSector * item.position) % angularSector

    return {
        radius: radius + item.offset,
        angle: start + sectorPortion + rotation
    }
}

export default placeOnWheel