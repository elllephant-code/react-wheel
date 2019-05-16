# react-wheel

`react-wheel` is a react library to create components that behave like a wheel.

## Setup

install: `npm i @elllephant/react-wheel`

import: `import Wheel from '@elllephant/react-wheel'`

## Get Started

The `Wheel` component does not require any props.
However, to make sense of it you will want to configure at least the `items` and `radius` props.

#### `items`
The `items` prop requires an array of objects with the following properties:

``` typescript
{
  position : number // position of the item on the circumference of the wheel
  rOffset  : number // (radius offset) length offset relative to the position vector along the radius axis
  tOffset  : number // (theta offset) angle offset relative to position vector angle
}
```

All of these numbers must be in the range `[0, 1 [`.
- `position` represents the fraction of the circle traveled by the item from the point (radius, 0)
- Each angle must be in the range `[0, 1 [` representing a fraction of a complete circle. * Example: 0.25 -> 90° *

#### `radius`

The radius must be in pixel and represents the radius of the wheel.

#### Example

``` typescript
import React from 'react'
import Wheel from '@elllephant/react-wheel';

const items = [
    { position: 0,    tOffset: 0, rOffset: 0 },
    { position: 0.25, tOffset: 0, rOffset: 0 },
    { position: 0.5,  tOffset: 0, rOffset: 0 },
    { position: 0.75, tOffset: 0, rOffset: 0 },
]

const radius = 150

const Component = () => (
  <Wheel
    radius={radius}
    items={items}
  />
))

export default Component
```

## Props

#### `radius: number = 0`
Must be in pixel and represents the radius of the wheel.

#### `angularSector: number = 1`
Portion of the circle that will be used. Must be in the range `[0, 1[`.

#### `rotation: number = 0`
Angle by wish the wheel has been rotated. Must be in the range `[0, 1[`.

#### `items: object[] = []`
Array of items to place into the wheel.

#### `render: function = ({ index, style }: IitemRenderConfig) => <div style={style}>{index}</div>`
Function used to render the items. Will be called for each item with the following arguments:
- `index`: Index of the item in the `items` array
- `style`: generated style based on the position.

#### `modifiers: function[] = []`
Functions that modify the behavior the item based on certain conditions.
