/** @jsx h */
import { h, ComponentType } from 'preact'
import { tw } from '@twind'
import { getColor } from './color.ts'

// deno-lint-ignore ban-types
export const withBackgroundColor = <P extends {}>(
  WrappedComponent: ComponentType<P>
) => {
  const myRandomColor = getColor()

  const ResultComponent = (props: P) => {
    return (
      <div class={tw`bg(${myRandomColor}-100 1) p-2`}>
        <WrappedComponent {...props} />
      </div>
    )
  }

  return ResultComponent
}
