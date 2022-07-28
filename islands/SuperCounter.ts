import { ComponentType } from 'preact'
import { compose } from 'https://deno.land/x/compose@1.3.2/index.js'
import { withBackgroundColor } from '../utils/withBackgroundColor.tsx'

import Counter, { CounterProps } from './Counter.tsx'

const extend = compose<
  ComponentType<CounterProps>,
  CounterProps,
  CounterProps,
  CounterProps,
  CounterProps,
  CounterProps
>(
  withBackgroundColor,
  withBackgroundColor,
  withBackgroundColor,
  withBackgroundColor,
  withBackgroundColor,
  withBackgroundColor
)

const SuperCounter: ComponentType<CounterProps> = extend(Counter)

export default SuperCounter
