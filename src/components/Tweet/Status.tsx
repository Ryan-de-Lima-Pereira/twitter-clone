import {PropsWithChildren} from 'react'

type Status = {
  icon: 'like' | 'donate' | 'padrao'
}

function Status(props: PropsWithChildren<Status>) {
  
  const styleDefault = 'flex flex-row items-center text-sm text-gray hover:text-twitter [&_div]:hover:bg-opacity-30 duration-200'
  const styleLike = 'flex flex-row items-center text-sm text-gray hover:text-like [&_div]:hover:bg-opacity-30 duration-200'
  const styleDonate = 'flex flex-row items-center text-sm text-gray mr-6 [&_span]:hover:opacity-50 duration-200'
  let style;

  switch(props.icon){
    case 'like':
      style = styleLike
    break;
    case 'padrao':
      style = styleDefault
    break;
    case 'donate':
      style = styleDonate
    break;
  }

  return (
    <div className={style}>{props.children}</div>
  )
}

export default Status