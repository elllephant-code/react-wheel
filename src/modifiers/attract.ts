import { wheelModifier } from '../component/Wheel'
import C from '../utils/cycle'
import safe from '../utils/safe'

export interface IAttractInput {
    index?: number,
    strength?: number
}

export type attract = (input?: IAttractInput) => wheelModifier

const attract: attract = function (input = {}) {

    const index = safe(0, input.index)
    const strength = safe(.1, input.strength)

    return function ({ wheel, items }) {

        const l = items.length


        for (let i = 1; i <= Math.floor((l - 1) / 2); ++i) {
            const iprev = C.substract(index, i, l) // index of i-th element before
            const inext = C.add(index, i, l) // index of i-th element after

            const curr = items[index] // current element
            const next = items[inext] // i-th next element
            const prev = items[iprev] // i-th previous element

            const nextOffset = strength * C.distance(curr.position, next.position, 1) * (.5 - C.distance(curr.position, next.position, 1)) / .5
            const prevOffset = strength * C.distance(curr.position, prev.position, 1) * (.5 - C.distance(curr.position, prev.position, 1)) / .5

            next.tOffset -= nextOffset
            prev.tOffset += prevOffset
        }

        return {
            items,
            wheel
        }

    }
}

export default attract