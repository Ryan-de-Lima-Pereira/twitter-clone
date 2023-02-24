import {PropsWithChildren} from 'react'

function Retweet(props: PropsWithChildren) {
  return (
    <div className="flex flex-row items-center text-sm text-gray">{props.children}</div>
  )
}

export default Retweet