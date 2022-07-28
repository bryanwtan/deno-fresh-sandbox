/** @jsx h */
import { h, ComponentType } from 'preact'
import { tw } from '@twind'
import { getColor } from './color.ts'

// returns the same interface
// withBackgroundColor (Element props) -> Component props

// deno-lint-ignore ban-types
export const withBackgroundColor = <P extends {}>(
  WrappedComponent: ComponentType<P>
) => {
  const ResultComponent = (props: P) => {
    return (
      <div class={tw`bg(${getColor()}-100 1) p-2`}>
        <WrappedComponent {...props} />
      </div>
    )
  }

  return ResultComponent
}
