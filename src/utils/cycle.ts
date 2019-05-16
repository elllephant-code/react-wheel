const min = Math.min
const abs = Math.abs

function n(x: number, cycle?: number): number {
    if (cycle === undefined)
        return x
    else
        return x % cycle
}

export default class Cycle {

    public length: number

    constructor(length: number) {
        this.length = length
    }

    public static add(value1: number, value2: number, cycleLength: number) {
        const l = n(cycleLength)
        const v1 = n(value1, l)
        const v2 = n(value2, l)

        return (v1 + v2) % l
    }

    public static substract(value1: number, value2: number, cycleLength: number) {
        const l = n(cycleLength)
        const v1 = n(value1, l)
        const v2 = n(value2, l)

        return (v1 - v2 + l) % l
    }

    public static distance(value1: number, value2: number, cycleLength: number) {
        const l = n(cycleLength)
        const v1 = n(value1, l)
        const v2 = n(value2, l)

        return min(abs(v1 - v2), 1 - abs(v1 - v2))
    }

}