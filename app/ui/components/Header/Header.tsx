import { HeaderProps } from '@/app/lib/definitions'
import React from 'react'
import cn from 'classnames'

export default function Header({className, ...props} : HeaderProps) : JSX.Element {
  return (
    <div {...props} className={cn(className)}>Header</div>
  )
}
