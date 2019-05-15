import React from 'react'
import { storiesOf } from '@storybook/react'
import Wheel from '../src';

const a = -1 / 12;

const items = [
    { position: a * 0, offset: 0 },
    { position: a * 1, offset: 0 },
    { position: a * 2, offset: 0 },
    { position: a * 3, offset: 0 },
    { position: a * 4, offset: 0 },
    { position: a * 5, offset: 0 },
    { position: a * 6, offset: 0 },
    { position: a * 7, offset: 0 },
    { position: a * 8, offset: 0 },
    { position: a * 9, offset: 0 },
    { position: a * 10, offset: 0 },
    { position: a * 11, offset: 0 },
]

const radius = 150

storiesOf('Wheel', module)
    .add('default', () => <Wheel items={items} radius={radius} />)