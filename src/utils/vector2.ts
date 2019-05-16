const cos = (x: number) => Math.cos(x * 2 * Math.PI)
const sin = (x: number) => Math.sin(x * 2 * Math.PI)
const atan2 = (y: number, x: number) => Math.atan2(y, x) / (2 * Math.PI)
const sq = (x: number) => Math.pow(x, 2)
const sqrt = Math.sqrt

export type coordinate = 'cartesian' | 'polar'

export default class Vector2 {

    public x: number
    public y: number
    public r: number
    public t: number

    constructor(v1: number, v2: number, coordinate: coordinate = 'cartesian') {
        this.x = 0
        this.y = 0
        this.r = 0
        this.t = 0

        switch (coordinate) {
            case 'cartesian':
                const x = v1
                const y = v2
                this.update(x, y)
                break

            case 'polar':
                const r = v1
                const t = v2
                this.update(r * cos(t), r * sin(t))
                break
        }
    }

    public add(X: number, Y: number): Vector2 {
        const x = this.x + X
        const y = this.y + Y

        this.update(x, y)
        return this
    }

    public substract(X: number, Y: number): Vector2 {
        const x = this.x - X
        const y = this.y - Y

        this.update(x, y)
        return this
    }

    public multiply(k: number): Vector2 {
        const x = this.x * k
        const y = this.y * k

        this.update(x, y)
        return this
    }

    public divide(k: number): Vector2 {
        const x = this.x / k
        const y = this.y / k

        this.update(x, y)
        return this
    }

    public rotate(T: number): Vector2 {
        const t = this.t + T
        const r = this.r

        this.update(r * cos(t), r * sin(t))
        return this
    }

    public lengthen(R: number): Vector2 {
        const t = this.t
        const r = this.r + R

        this.update(r * cos(t), r * sin(t))
        return this
    }

    public length(): number {
        const x2 = sq(this.x)
        const y2 = sq(this.y)

        return sqrt(x2 + y2)
    }

    private update(x: number, y: number) {
        this.x = x
        this.y = y

        this.r = sqrt(sq(x) + sq(y))
        this.t = atan2(y, x)
    }

}