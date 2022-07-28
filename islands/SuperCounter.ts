import { h } from 'preact'
import { compose } from 'https://deno.land/x/compose@1.3.2/index.js'
import { withBackgroundColor } from '../utils/withBackgroundColor.tsx'

import Counter, { CounterProps } from './Counter.tsx'

type CounterType = ({ start }: CounterProps) => h.JSX.Element

const extend = compose<
  CounterType,
  CounterType,
  CounterType,
  CounterType,
  CounterType,
  CounterType,
  CounterType[]
>(
  withBackgroundColor,
  withBackgroundColor,
  withBackgroundColor,
  withBackgroundColor,
  withBackgroundColor,
  withBackgroundColor
)

/**
 * o index
 * |
 * o wrapper
 * |
 * o wrapper
 * |
 * o wrapper
 * |
 * o wrapper
 * |
 * o wrapper
 * |
 * o wrapper
 * |
 * o Counter
 */

const SuperCounter = extend(Counter)

export default SuperCounter
