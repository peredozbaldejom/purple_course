import { IInput } from '@/app/lib/definitions'
import styles from '@/app/ui/components/Input/Input.module.css'
import cn from 'classnames'

export default function Input({className, children, ...props} : IInput ) : JSX.Element {
  return (
    <input className={cn(styles.input, className)} {...props}/>
  )
}
