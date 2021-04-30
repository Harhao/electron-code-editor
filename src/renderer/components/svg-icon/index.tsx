import React from 'react'
interface IProps {
  icon: string
  fontSize?: number
  children?: React.ReactChildren
}
export default function SvgIcon(props: IProps): React.ReactElement {
  const fontSize = props?.fontSize || '18px'
  return (
    <svg
      className="font-icon"
      aria-hidden="true"
      style={{ fontSize: fontSize }}
    >
      <use xlinkHref={'#' + props.icon}></use>
    </svg>
  )
}
