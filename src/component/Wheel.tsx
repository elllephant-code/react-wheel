import React, { CSSProperties } from 'react';
import placeOnWheel, { IWheel, IWheelItem } from '../wheel';
import polarToCSS from '../utils/polarToCSS';

export interface IitemRenderConfig {
    index: number
    style: CSSProperties
}

export interface IWheelProps extends IWheel {
    radius: number
    angularSector: number
    rotation: number

    items: IWheelItem[]
    render: (config: IitemRenderConfig) => JSX.Element
}

export default class Wheel extends React.Component<IWheelProps, any> {

    public static defaultProps = {
        radius: 0,
        angularSector: 1,
        rotation: 0,

        items: [],
        render: ({ index, style }: IitemRenderConfig) => <div style={style}>{index}</div>
    }

    public render() {

        const { items, radius, render, rotation, angularSector } = this.props

        const wheel = {
            radius,
            rotation: rotation * 2 * Math.PI,
            angularSector: angularSector * 2 * Math.PI
        }

        const renderedItems = items.map((item, index) => {
            const origin = { x: radius, y: radius }

            const coodinates = placeOnWheel(item, wheel)
            const style = polarToCSS(coodinates, origin)

            return render({ index, style })

        })

        const wheelStyle: CSSProperties = {
            position: 'relative',
            height: 2 * radius,
            width: 2 * radius,
        }

        return (
            <div style={wheelStyle}>
                {renderedItems}
            </div>
        );
    }
}
