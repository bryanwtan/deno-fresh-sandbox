/** @jsx h */
import { h } from 'preact'
import { useState } from 'preact/hooks'
import { IS_BROWSER } from '$fresh/runtime.ts'
import { tw } from '@twind'

export interface CounterProps {
  start: number
}

const Counter = ({ start }: CounterProps) => {
  const [count, setCount] = useState(start)

  const btn = tw`px-2 py-1 hover:bg-gray-200`

  return (
    <div class={tw`flex gap-2 w-full`}>
      <p class={tw`flex-grow-1 font-bold text-xl`}>{count}</p>
      <button
        class={btn}
        onClick={() => setCount(count - 1)}
        disabled={!IS_BROWSER}
      >
        -1
      </button>
      <button
        class={btn}
        onClick={() => setCount(count + 1)}
        disabled={!IS_BROWSER}
      >
        +1
      </button>
    </div>
  )
}

export default Counter
