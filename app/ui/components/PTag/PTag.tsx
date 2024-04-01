import { PtagProps } from "@/app/lib/definitions"
import styles from "@/app/ui/components/PTag/PTag.module.css"
import cn from 'classnames'

export default function PTag ({ children, size='m', className, ...props} : PtagProps) : JSX.Element {
  return (
    <p className={cn(className, styles.p, {
      [styles.s]: size == 's',
      [styles.m]: size == 'm',
      [styles.l]: size == 'l',
    })}
    {...props}
    >
      {children}
    </p>
  )
}
