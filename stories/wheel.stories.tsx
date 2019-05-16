import React from 'react'
import { storiesOf } from '@storybook/react'
import Wheel, { repulse, attract } from '../src';

const a = 1 / 12;

const items = [
    { position: a * 0, tOffset: 0, rOffset: 0 },
    { position: a * 1, tOffset: 0, rOffset: 0 },
    { position: a * 2, tOffset: 0, rOffset: 0 },
    { position: a * 3, tOffset: 0, rOffset: 0 },
    { position: a * 4, tOffset: 0, rOffset: 0 },
    { position: a * 5, tOffset: 0, rOffset: 0 },
    { position: a * 6, tOffset: 0, rOffset: 0 },
    { position: a * 7, tOffset: 0, rOffset: 0 },
    { position: a * 8, tOffset: 0, rOffset: 0 },
    { position: a * 9, tOffset: 0, rOffset: 0 },
    { position: a * 10, tOffset: 0, rOffset: 0 },
    { position: a * 11, tOffset: 0, rOffset: 0 },
    // { position: a * 12, tOffset: 0, rOffset: 0 },
]

const radius = 150

storiesOf('Wheel', module)
    .add('default', () => (
        <Wheel
            items={items}
            radius={radius}
            modifiers={[
                // repulse({ index: 0, strength: .1 }),
                attract({ index: 0, strength: 0 }),
                // repulse({ index: 8, strength: .1 }),
            ]}
        />))