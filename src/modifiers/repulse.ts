import { wheelModifier } from '../component/Wheel'

export interface IRepulseInput {
    index?: number,
    strength?: number
}

export type repulse = (input?: IRepulseInput) => wheelModifier

const repulse: repulse = function (input) {

    const index = input && input.index != undefined ? input.index : 0
    const strength = input && input.strength != undefined ? input.strength : .1

    return function ({ wheel, items }) {

        const { radius, angularSector, rotation } = wheel

        for (let i = 1; i <= Math.floor((items.length - 1) / 2); ++i) {
            // i eme element avant
            const ib = (index + i) % items.length
            // i eme element apres
            const ia = (index - i + items.length) % items.length


            const db = strength * (.5 - Math.min(Math.abs(items[ib].position - items[index].position), 1 - Math.abs(items[ib].position - items[index].position)))
            const da = strength * (.5 - Math.min(Math.abs(items[ia].position - items[index].position), 1 - Math.abs(items[ia].position - items[index].position)))

            items[ib].tOffset -= db
            items[ia].tOffset += da
        }

        return {
            items,
            wheel
        }

    }
}

export default repulse