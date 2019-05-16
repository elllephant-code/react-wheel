import React, { CSSProperties } from 'react';
import placeOnWheel, { IWheel, IWheelItem } from '../wheel';
import polarToCSS from '../utils/polarToCSS';

export interface IitemRenderConfig {
    index: number
    style: CSSProperties
}

export interface IWheelModifierInput {
    items: IWheelItem[], wheel: IWheel
}

export type wheelModifier = (input: IWheelModifierInput) => IWheelModifierInput

export interface IWheelProps extends IWheel {
    radius: number
    angularSector: number
    rotation: number

    items: IWheelItem[]
    render: (config: IitemRenderConfig) => JSX.Element

    modifiers: wheelModifier[]
}

export default class Wheel extends React.Component<IWheelProps, any> {

    public static defaultProps = {
        radius: 0,
        angularSector: 1,
        rotation: 0,

        items: [],
        render: ({ index, style }: IitemRenderConfig) => <div style={style}>{index}</div>,
        modifiers: []
    }

    public render() {

        const { radius, render, rotation, angularSector, modifiers } = this.props

        let items: IWheelItem[] = this.props.items
        let wheel: IWheel = {
            radius,
            rotation: rotation,
            angularSector: angularSector
        }

        modifiers.forEach(modifier => {
            const input = modifier({ items, wheel })
            items = input.items
            wheel = input.wheel
        })

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
