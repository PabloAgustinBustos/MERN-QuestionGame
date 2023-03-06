import React from 'react'

interface IProps{
  className: string
}

const WatchIcon: React.FC<IProps> = ({className}) => <svg xmlns="http://www.w3.org/2000/svg" className={`${className} icon icon-tabler icon-tabler-eye`} width="20" height="20" viewBox="0 0 24 24" strokeWidth="2" stroke="#9e9e9e" fill="none" strokeLinecap="round" strokeLinejoin="round">
<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
<circle cx="12" cy="12" r="2" />
<path d="M22 12c-2.667 4.667 -6 7 -10 7s-7.333 -2.333 -10 -7c2.667 -4.667 6 -7 10 -7s7.333 2.333 10 7" />
</svg>

export default WatchIcon