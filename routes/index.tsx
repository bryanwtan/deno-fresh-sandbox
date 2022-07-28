/** @jsx h */
import { h } from 'preact'
import { tw } from '@twind'
import Counter from '../islands/Counter.tsx'
import BackgroundColorCounter from '../islands/BackgroundColorCounter.ts'
import SuperCounter from '../islands/SuperCounter.ts'

/**
 * Component interface stability using React composition and higher order components
 */

export default function Home() {
  return (
    <div class={tw`p-4 mx-auto max-w-screen-md`}>
      <img
        src='/logo.svg'
        height='100px'
        alt='the fresh logo: a sliced lemon dripping with juice'
      />
      <p class={tw`my-6`}>
        Welcome to `fresh`. Try update this message in the ./routes/index.tsx
        file, and refresh.
      </p>

      <Counter start={0} />
      <br />
      <BackgroundColorCounter start={1} />
      <br />
      <SuperCounter start={4} />
    </div>
  )
}
