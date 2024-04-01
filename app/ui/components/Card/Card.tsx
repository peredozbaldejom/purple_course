import cn from "classnames"
import styles from '@/app/ui/components/Card/Card.module.css'
import { CardProps } from "@/app/lib/definitions"

export const  Card = ({color = 'white', className, children, ...props}) : JSX.Element =>  {
  return (
    <div className={cn(styles.card, className, {
        [styles.blue] : color === 'blue'
    })}
        {...props}
    >{children}</div>
  )
}
